// LICENSE_CODE ZON
'use strict'; /*jslint node:true, browser:true*/
(function(){
// XXX amir: when http_proxy.js:EventEmitter3 moves to pkg/util/eventemitter.js
// then we can add events support also in browser
var define, node_util, mods;
if (typeof self=='object')
{
    mods = ['array'];
    define = self.define;
    if (!define || !define.amd)
	throw new Error('RequireJS is missing');
}
else if (module.uri && !module.uri.indexOf('resource://')) // firefox addon
{
    mods = null;
    // in firefox require() argument cannot be a variable
    var array = require('./array');
    define = function(req, setup){
	module.exports = setup.call(this, array); };
}
else
{
    mods = ['/util/array.js'];
    node_util = require('util');
    define = require('./require_node.js').define(module, '../');
}
/* XXX arik hack: rm typeof self */
define(mods, function(array){
var E = {};

E._is_mocha = undefined;
E.is_mocha = function(){
    if (typeof module=='undefined' || !module.exports)
        return;
    if (E._is_mocha!==undefined)
	return E._is_mocha;
    E._is_mocha = /\/_mocha/.test(process.argv[1]||'');
    return E._is_mocha;
};

E.f_mset = function(flags, mask, bits){ return (flags &~ mask) | bits; };
E.f_lset = function(flags, bits, logic){
    return E.f_mset(flags, bits, logic ? bits : 0); };
E.f_meq = function(flags, mask, bits){ return (flags & mask)==bits; };
E.f_eq = function(flags, bits){ return (flags & bits)==bits; };
E.f_cmp = function(f1, f2, mask){ return (f1 & mask)==(f2 & mask); };
E.xor = function(a, b){ return !a != !b; };
E.div_ceil = function(a, b){ return Math.floor((a+b-1)/b); };
E.ceil_mul = function(a, b){ return E.div_ceil(a, b)*b; };
E.floor_mul = function(a, b){ return Math.floor(a/b)*b; };

E.range = function(x, a, b){ return x>=a && x<=b; };
E.range.ii = function(x, a, b){ return x>=a && x<=b; };
E.range.ie = function(x, a, b){ return x>=a && x<b; };
E.range.ei = function(x, a, b){ return x>a && x<=b; };
E.range.ee = function(x, a, b){ return x>a && x<b; };

E.clamp = function(lower_bound, value, upper_bound){
    if (value < lower_bound)
        return lower_bound;
    if (value < upper_bound)
        return value;
    return upper_bound;
};

/* Union given objects, using fn to resolve conflicting keys */
E.union_with = function(fn /*[o1, [o2, [...]]]*/){
    var res = {}, args;
    if (arguments.length===2 && typeof arguments[1]==='object')
        args = arguments[1];
    else
        args = array.slice(arguments, 1);
    for (var i = 0; i < args.length; ++i)
    {
        for (var key in args[i])
	{
	    var arg = args[i];
	    res[key] = res.hasOwnProperty(key) ? fn(res[key], arg[key])
		: arg[key];
	}
    }
    return res;
};

function _clone_deep(obj){
    var i, n, ret;
    if (obj instanceof Array)
    {
	ret = new Array(obj.length);
	n = obj.length;
	for (i = 0; i < n; i++)
	    ret[i] = obj[i] instanceof Object ? _clone_deep(obj[i]): obj[i];
	return ret;
    }
    else if (obj instanceof Date)
	return new Date(obj);
    ret = {};
    for (i in obj)
	ret[i] = obj[i] instanceof Object ? _clone_deep(obj[i]) : obj[i];
    return ret;
}

E.clone_deep = function(obj){
    if (!(obj instanceof Object))
	return obj;
    return _clone_deep(obj);
};

/* _.extend is slow due to arguments parsing */
E.extend = function(obj){
    for (var i=1; i<arguments.length; i++)
    {
	var source = arguments[i];
	if (!source)
	    continue;
        for (var prop in source)
	    obj[prop] = source[prop];
    }
    return obj;
};

/* _.clone is slow since it uses _.extend */
E.clone = function(obj){
    if (!(obj instanceof Object))
	return obj;
    if (obj instanceof Array)
    {
	var a = new Array(obj.length);
	for (var i=0; i<obj.length; i++)
	    a[i] = obj[i];
	return a;
    }
    return E.extend({}, obj);
};

// like _.map() except returns object, not array
E.map_obj = function(obj, fn){
    var ret = {};
    var keys = Object.keys(obj);
    for (var i=0; i<keys.length; ++i)
        ret[keys[i]] = fn(obj[keys[i]], keys[i], obj);
    return ret;
};

// recursivelly recreate objects with keys added in order
E.sort_obj = function(obj){
    if (obj instanceof Array || !(obj instanceof Object))
	return obj;
    var ret = {};
    var keys = Object.keys(obj).sort();
    for (var i=0; i<keys.length; i++)
	ret[keys[i]] = E.sort_obj(obj[keys[i]]);
    return ret;
};

E.isdigit = function(c){
    return c>='0' && c<='9'; };
E.isalpha = function(c){
    return (c>='a' && c<='z') || (c>='A' && c<='Z'); };
E.isalnum = function(c){ return E.isdigit(c)||E.isalpha(c); };

E.obj_pluck = function(obj, prop){
    var val = obj[prop];
    delete obj[prop];
    return val;
};

// Object.keys() does not work on prototype
E.proto_keys = function(proto){
    var keys = [];
    for (var i in proto)
	keys.push(i);
    return keys;
};

E.get = function(o, prop){
    var args = arguments, start = 1;
    if (Array.isArray(prop))
    {
	args = prop;
	start = 0;
    }
    for (var i=start; i<args.length; i++)
    {
	if (!o)
	    return;
	o = o[args[i]];
    }
    return o;
};

E.bool_lookup = function(a, split){
    var ret = {}, i;
    if (typeof a==='string')
	a = a.split(split||' ');
    for (i=0; i<a.length; i++)
	ret[a[i]] = true;
    return ret;
};

E.clone_inplace = function(dst, src){
    if (dst===src)
        return dst;
    if (Array.isArray(dst))
    {
        for (var i=0; i<src.length; i++)
            dst[i] = src[i];
        dst.splice(src.length);
    }
    else if (typeof dst=='object')
    {
        for (var k in src)
            dst[k] = src[k];
        for (k in dst)
        {
            if (!src.hasOwnProperty(k))
                delete dst[k];
        }
    }
    return dst;
};

if (node_util)
    E.inherits = node_util.inherits;
// from https://github.com/isaacs/inherits/blob/master/inherits_browser.js
else if (typeof Object.create==='function')
{
    // implementation from standard node.js 'util' module
    E.inherits = function inherits(ctor, superCtor){
	ctor.super_ = superCtor;
	ctor.prototype = Object.create(superCtor.prototype, {
	    constructor: {value: ctor, enumerable: false, writable: true,
	    configurable: true}});
    };
}
else
{
    // old school shim for old browsers
    E.inherits = function inherits(ctor, superCtor){
	ctor.super_ = superCtor;
	var TempCtor = function(){};
	TempCtor.prototype = superCtor.prototype;
	ctor.prototype = new TempCtor();
	ctor.prototype.constructor = ctor;
    };
}

return E; }); }());
