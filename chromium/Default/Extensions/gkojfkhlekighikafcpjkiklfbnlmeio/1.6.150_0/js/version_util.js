// LICENSE_CODE ZON
'use strict'; /*jslint node:true, browser:true*/
(function(){
var define, mods;
if (typeof self=='object')
{
    mods = ['sprintf', 'conv'];
    define = self.define;
    if (!define || !define.amd)
	throw new Error('RequireJS is missing');
}
else if (module.uri && !module.uri.indexOf('resource://')) // firefox addon
{
    mods = null;
    // in firefox require() argument cannot be a variable
    var sprintf = require('./sprintf');
    var conv = require('./conv');
    define = function(req, setup){
	module.exports = setup.call(this, sprintf, conv); };
}
else
{
    mods = ['/util/sprintf.js', '/util/conv.js'];
    define = require('./require_node.js').define(module, '../');
}
define(mods, function(sprintf, conv){
var E = {};
var ver_regexp = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;

E._version_expand = function(ver){
    var v;
    if (!ver)
	return '';
    if (!(v = ver_regexp.exec(ver)))
	return;
    return sprintf('%03d.%03d.%03d', +v[1], +v[2], +v[3]);
};
E.version_expand = conv.cache_str_fn(E._version_expand);

E._version_trim = function(ver){
    var v;
    if (!ver)
	return '';
    if (!(v = ver_regexp.exec(ver)))
	return;
    return ''+(+v[1])+'.'+(+v[2])+'.'+(+v[3]);
};
E.version_trim = conv.cache_str_fn(E._version_trim);

E._version_cmp = function(v1, v2){
    if (!v1 || !v2)
	return +!!v1 - +!!v2;
    var _v1 = v1.split('.'), _v2 = v2.split('.'), i;
    for (i = 0; i<_v1.length && i<_v2.length && +_v1[i] == +_v2[i]; i++);
    if (_v1.length==i || _v2.length==i)
	return _v1.length - _v2.length;
    return +_v1[i] - +_v2[i];
};
E.version_cmp = conv.cache_str_fn2(E._version_cmp);

E._version_valid = function(v){ return ver_regexp.test(''+v); };
var version_valid_cache = {};
E.version_valid = function(v){
    var cache = version_valid_cache, res;
    v = ''+v; // accept non-string (always false)
    if (v in cache)
        return cache[v];
    if ((res = E._version_valid(v)))
        cache[v] = res; // cache only valid versions
    return res;
};

return E; }); }());
