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
var E = rate_limit;

function rate_limit(rl, ms, n){
    var now = Date.now();
    if (!rl.count || rl.ts+ms < now)
    {
        rl.count = 1;
        rl.ts = now;
        return true;
    }
    rl.count++;
    return rl.count <= n;
}

E.LeakyBucket = LeakyBucket;

function LeakyBucket(size, rate){
    this.size = size;
    this.rate = rate;
    this.time = Date.now();
    this.level = 0;
}
LeakyBucket.prototype.inc = function(inc){
    if (inc===undefined)
	inc = 1;
    var now = Date.now();
    this.level -= this.rate * (now - this.time);
    this.time = now;
    if (this.level<0)
	this.level = 0;
    var new_level = this.level + inc;
    if (new_level > this.size)
	return false;
    this.level = new_level;
    return true;
};

return E; }); }());
