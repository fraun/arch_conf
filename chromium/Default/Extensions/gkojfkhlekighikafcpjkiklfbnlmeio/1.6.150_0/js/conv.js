// LICENSE_CODE ZON
'use strict'; /*jslint node:true, evil:true, browser: true*/
(function(){
var define, crypto, assert, zerr;
if (typeof self=='object')
{
    define = self.define;
    if (!define || !define.amd)
	throw new Error('RequireJS is missing');
    assert = function(){}; // XXX romank: add proper assert
    // XXX romank: use zerr.js
    if (self.hola && self.hola.zerr)
        zerr = self.hola.zerr;
    else
    {
        // ie9 does not support console.log.bind(console)
        zerr = Function.prototype.bind.call(console.log, console);
        zerr.perr = zerr;
    }
}
else if (module.uri && !module.uri.indexOf('resource://')) // firefox addon
{
    var _ = require('./underscore');
    var util = require('./util');
    define = function(req, setup){
	module.exports = setup.call(this, _, util); };
}
else
{
    require('./config.js');
    zerr = require('./zerr.js');
    crypto = require('crypto');
    assert = require('assert');
    define = require('./require_node.js').define(module, '../');
}
define(['underscore', typeof self=='object' ? 'util' : '/util/util.js'],
    function(_, zutil){
var E = {};

E.cache_str_fn = function(fn){
    var cache = {};
    return function(s){
        if (s in cache)
            return cache[s];
        return cache[s] = fn(s);
    };
};
E.cache_str_fn2 = function(fn){
    var cache = {};
    return function(s1, s2){
        var cache2 = cache[s1] = cache[s1]||{};
        if (s2 in cache2)
            return cache2[s2];
        return cache2[s2] = fn(s1, s2);
    };
};

E.o = function(oct_str){ return parseInt(oct_str, 8); };

// XXX vladimir: only nodejs
E.md5_zero = function(hash_len, key){
    assert(hash_len<=16, 'invalid hash len'+hash_len);
    if (!key || !key.length)
    {
	return new Buffer('00000000000000000000000000000000', 'hex')
	.slice(0, hash_len);
    }
    return crypto.createHash('md5').update(key).digest().slice(0, hash_len);
};

E.md5_etag = function(buf){
    return crypto.createHash('md5').update(buf).digest('hex').substr(0, 8);
};

E.rot13_map = [];
(function(){
    var i;
    for (i=0; i<256; i++)
    {
        var x;
        if (zutil.range.ii(i, 65, 77) || zutil.range.ii(i, 97, 109))
            x = i+13;
        else if (zutil.range.ii(i, 78, 90) || zutil.range.ii(i, 110, 122))
            x = i-13;
        else
            x = i;
        E.rot13_map[i] = x;
    }
})();

E.inet_ntoa_t = function(ip){
    return ((ip & 0xff000000)>>>24)+'.'+((ip & 0xff0000)>>>16)+'.'
    +((ip & 0xff00)>>>8)+'.'+(ip & 0xff);
};

E.inet_addr = function(ip){
    var parts = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(ip);
    if (parts===null)
	return null;
    if (parts[1]>255 || parts[2]>255 || parts[3]>255 || parts[4]>255)
        return null; // not an IP address
    return ((parts[1]<<24)+(parts[2]<<16)+(parts[3]<<8)+(parts[4]|0))>>>0;
};

function flags_to_str_once(flags, conv){
    var f = 'var s = "";\n';
    f += 'if (!flags) return "";\n';
    for (var i in conv)
    {
	if (!conv.hasOwnProperty(i))
	    continue;
	f += 'if (flags & '+conv[i]+') '
	    +'{ s += '+JSON.stringify(i.toLowerCase())+'+" ";'
	    +' flags &= ~'+conv[i]+'; }\n';
    }
    f += 'if (flags && conv.__conv_to_str.err) '
	+'conv.__conv_to_str.err(flags, conv);\n';
    f += 'return s.slice(0, s.length-1);\n';
    var func = new Function(['flags', 'conv'], f);
    Object.defineProperty(conv, '__conv_to_str',
	{enumerable: false, writable: true});
    conv.__conv_to_str = func;
    func.err = function(flags, conv){
	zerr.perr('flags_str_invalid', 'flags '+flags+' '
	    +JSON.stringify(conv).slice(0, 30));
    };
    return conv.__conv_to_str(flags, conv);
}
E.flags_to_str = function(flags, conv){
    if (conv.__conv_to_str)
	return conv.__conv_to_str(flags, conv);
    return flags_to_str_once(flags, conv);
};

function flags_from_str_once(s, conv){
    var f = 'var flags = 0, a, i;\n';
    f += 'if (!s) return 0;\n';
    f += 's = s.toUpperCase();\n';
    f += 'a = s.split(",");\n';
    f += 'for (i=0; i<a.length; i++)\n';
    f += '{\n';
    f += '    if (!conv[a[i]])\n';
    f += '    {\n';
    f += '        if (flags && conv.__conv_from_str.err) '
	+'conv.__conv_from_str.err(flags, conv);\n';
    f += '        return -1;\n';
    f += '    }\n';
    f += '    flags |= conv[a[i]];\n';
    f += '}\n';
    f += 'return flags;\n';
    var func = new Function(['s', 'conv'], f);
    Object.defineProperty(conv, '__conv_from_str',
	{enumerable: false, writable: true});
    conv.__conv_from_str = func;
    func.err = function(s, conv){
	zerr.perr('flags_str_invalid', 'flags '+s+' '
	    +JSON.stringify(conv).slice(0, 30));
    };
    return conv.__conv_from_str(s, conv);
}
E.flags_from_str = function(s, conv){
    if (conv.__conv_from_str)
	return conv.__conv_from_str(s, conv);
    return flags_from_str_once(s, conv);
};
E.scale_formats = {'T': 1e12, 'G': 1e9, 'M': 1e6, 'K': 1e3, '': 1};
function scaled_helper(num, format, per){
    if (num===undefined)
	return '';
    if (isNaN(num))
	return 'x';
    num /= E.scale_formats[format];
    if (num<0.001)
	return '0'+(per ? E.format_per(per) : '');
    var str = num>=1000 ? num.toFixed(1) :
        (num<1 ? num.toFixed(3) : num.toPrecision(3));
    if (per=='ms' && format)
    {
        per = 's';
        format = downgrade_format(format);
    }
    return str.replace(/\.0*$/, '')+format+(per ? E.format_per(per) : '');
}
function downgrade_format(format){
    var prev_format, _format;
    for (_format in E.scale_formats)
    {
        if (prev_format==format)
            return _format;
        prev_format = _format;
    }
    return _format;
}
E.scaled_number = function(num, format, per){
    if (E.scale_formats[format]===undefined)
    {
        for (format in E.scale_formats)
        {
            if (num>=E.scale_formats[format])
                break;
        }
    }
    return scaled_helper(num, format, per);
};
E.format_per = function(per){
    return !per ? '' : per=='%' || per=='s' || per=='ms' ? per : '/'+per[0]; };
function date_stringify(d){ return {__ISODate__: d.toISOString()}; }
E.JSON_stringify = function(obj, opt){
    var s, prev_date, _date;
    opt = opt||{};
    _date = opt.date||date_stringify;
    if (opt.mongo)
        _date = date_stringify;
    if ((_date = opt.date||date_stringify))
    {
        prev_date = Date.prototype.toJSON;
        Date.prototype.toJSON = function(){ return _date(this); };
    }
    try { s = JSON.stringify(obj, opt.replacer, opt.spaces); }
    finally {
        if (_date)
            Date.prototype.toJSON = prev_date;
    }
    if (opt.mongo)
        s = s.replace(/\{"__ISODate__":("[0-9TZ:.-]+")\}/g, 'ISODate($1)');
    return s;
};
E.JSON_parse = function(s){
    return JSON.parse(s, function(k, v){
        if (v && v.__ISODate__ && Object.keys(v).length==1)
            return new Date(v.__ISODate__);
        return v;
    });
};
return E; }); }());
