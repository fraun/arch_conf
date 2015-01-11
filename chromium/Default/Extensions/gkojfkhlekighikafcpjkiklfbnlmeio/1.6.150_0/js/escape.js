// LICENSE_CODE ZON
'use strict'; /*jslint node:true, browser:true*/
(function(){
var define;
if (typeof self=='object')
{
    define = self.define;
    if (!define || !define.amd)
	throw new Error('RequireJS is missing');
}
else
{
    define = require('./require_node.js').define(module, '../');
}
define([], function(){
var E = {};
E.un = {};

var html_escape_table = {
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'};
E.html = function(html){
    return html.replace(/[&<>"']/g, function(m){
	return html_escape_table[m[0]]; });
};

var xml_escape_table = {
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'};
E.xml = function(xml){
    return xml.replace(/[&<>"']/g, function(m){
	return xml_escape_table[m[0]]; });
};

E.sh = function(s_or_a){
    function single(s){
	if (typeof s==='string') /* support also numbers */
	    s = s.replace(/([\\"])/g, '\\$1');
	return '"'+s+'"';
    }
    if (arguments.length===1 && !Array.isArray(s_or_a))
        return single(s_or_a);
    var s = '', a = Array.isArray(s_or_a) ? s_or_a : arguments;
    for (var i=0; i<a.length; i++)
	s += (i ? ' ' : '')+single(a[i]);
    return s;
};

E.un.sh = function(s, keep_esc){
    var state = { PARSE_STATE_INIT: 0, PARSE_STATE_NORMAL_ARG: 1,
        PARSE_STATE_QUOTE_ARG: 2}, cur_state = state.PARSE_STATE_INIT;
    var i, quote = 0, argv = [];
    var a = '';
    /*jshint -W086*/
    for (i=0; i<s.length; i++)
    {
	var esc = 0;
	a += s[i];
        if (s[i]=='\\' && s[1])
	{
	    if (!keep_esc)
		a = a.slice(0, -1);
	    esc = 1;
	    i++;
	    a += s[i];
        }
        switch (cur_state)
        {
        case state.PARSE_STATE_INIT:
            switch (s[i])
            {
	    case '\r': case '\n': case ' ': case '\t':
		if (!esc)
		{
		    a = '';
		    break;
		}
                /* else - fall through */
            case '"': case '\'':
                if (!esc)
                {
                    cur_state = state.PARSE_STATE_QUOTE_ARG;
		    if (!keep_esc)
			a = a.slice(0, -1);
                    quote = s[i];
                    break;
                }
                /* else - fall through */
            default: cur_state = state.PARSE_STATE_NORMAL_ARG;
            }
            break;
        case state.PARSE_STATE_NORMAL_ARG:
            switch (s[i])
            {
	    case '\r': case '\n': case ' ': case '\t':
		if (!esc)
		{
                    cur_state = state.PARSE_STATE_INIT;
		    a = a.slice(0, -1);
		    argv.push(a);
		    a = '';
		}
		break;
	    case '"': case '\'':
                if (!esc)
                {
		    cur_state = state.PARSE_STATE_QUOTE_ARG;
                    quote = s[i];
		    if (!keep_esc)
		        a = a.slice(0, -1);
                }
		break;
            }
            break;
        case state.PARSE_STATE_QUOTE_ARG:
            if (s[i]==quote && !esc)
            {
		cur_state = state.PARSE_STATE_NORMAL_ARG;
		if (!keep_esc)
		    a = a.slice(0, -1);
            }
            break;
        }
    }
    if (cur_state==state.PARSE_STATE_NORMAL_ARG)
    {
	cur_state = state.PARSE_STATE_INIT;
	argv.push(a);
    }
    if (cur_state!=state.PARSE_STATE_INIT)
	throw "error parsing shell";
    return argv;
};

E.regex = function(s){ return s.replace(/[[\]{}()*+?.\\^$|\/]/g, '\\$&'); };

E.uri_comp = function(s){ return encodeURIComponent(s).replace(/%20/g, '+'); };

var http_escape_chars = [];
(function(){
    var i;
    for (i=0; i<256; i++)
    {
	var c = String.fromCharCode(i);
	http_escape_chars[i] = /^[a-zA-Z0-9_.~,\-]$/.test(c) ? c :
	    '%'+('0'+i.toString(16)).slice(-2);
    }
}());
E.encodeURIComponent_bin = function(s_or_b){
    // IE does not have Buffer Object
    var s = Buffer && s_or_b instanceof Buffer ? s_or_b.toString('binary')
	: ''+s_or_b;
    var esc = '';
    for (var i = 0; i < s.length; i++)
	esc += http_escape_chars[s.charCodeAt(i)];
    return esc;
};

E.qs = function(param, opt){
    opt = opt||{};
    var qs = opt.qs||'';
    var sep = qs || opt.amp ? '&' : '';
    if (!param)
        return qs;
    var uri_comp = opt.space_plus ? E.uri_comp : encodeURIComponent;
    var uri_comp_val = opt.bin ? E.encodeURIComponent_bin : uri_comp;
    for (var i in param)
    {
	var val = param[i];
	if (val==null)
	    continue;
        var key = uri_comp(i);
        qs += sep;
        if (Array.isArray(val))
        {
            if (!val.length)
                continue;
            qs += val.map(function(val){ return key+'='+uri_comp_val(val); })
                .join('&');
        }
        else
            qs += key+'='+uri_comp_val(val);
	sep = '&';
    }
    return qs;
};

E.uri = function(uri, qs_param, opt){
    var qs = typeof qs_param==='string' ? qs_param : E.qs(qs_param, opt);
    if (!qs)
	return uri;
    if (uri.indexOf('?')<0)
	uri += '?';
    else if (uri[uri.length-1]!='?' && uri[uri.length-1]!='&')
	uri += '&';
    return uri+qs;
};

E.mailto_url = function(mail){
    return 'mailto:'+(mail.to||'')+'?'
    +E.qs({cc: mail.cc, subject: mail.subject, body: mail.body},
	{space_plus: false});
};

E.csv = function(s){
    if (!(''+s).match(/["'\n,]/))
	return s;
    return '"'+s.replace(/"/g,'""')+'"';
};

E.parse = {}; // should this move to parse.js?
E.parse.eat_token = function(s_obj, re){
    var match;
    if (!(match = re.exec(s_obj.s)))
	return match;
    s_obj.s = s_obj.s.substr(match.index+match[0].length);
    return match;
};

E.parse.http_words = function(val){
    // Translation from perl:
    // http://search.cpan.org/~gaas/HTTP-Message-6.06/lib/HTTP/Headers/Util.pm
    var res = [], o = {s: val}, eat_token = E.parse.eat_token, match;
    while (o.s)
    {
	// 'token' or parameter 'attribute'
	if ((match = eat_token(o, /^\s*(=*[^\s=;,]+)/)))
	{
	    var v = match[1];
	    // a quoted value
	    if ((match = eat_token(o,
		/^\s*=\s*\"([^\"\\]*(?:\\.[^\"\\]*)*)\"/)))
	    {
		res.push([v, match[1].replace(/\\(.)/, '$1')]);
	    }
	    // some unquoted value
	    else if ((match = eat_token(o, /^\s*=\s*([^;,\s]*)/)))
		res.push([v, match[1].replace(/\s+$/, "")]);
	    // no value, a lone token
	    else
		res.push([v, null]);
	}
	else if ((match = eat_token(o, /^\s*,/)));
	else if ((match = eat_token(o, /^\s*;/)) || (match = eat_token(o,
	    /^\s+/)));
	else
	    throw new Error('This should not happen: '+o.s);
    }
    return res;
};

return E; }); }());
