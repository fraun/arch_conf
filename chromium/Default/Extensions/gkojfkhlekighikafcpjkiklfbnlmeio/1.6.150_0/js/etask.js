// LICENSE_CODE ZON
'use strict'; /*jslint node:true, browser:true*/
(function(){
var define, process, zerr, assert;
if (typeof self=='object')
{
    define = self.define;
    if (!define || !define.amd)
	throw new Error('RequireJS is missing');
    process = {
	nextTick: function(fn){ setTimeout(fn, 0); },
	env: {}
    };
    assert = function(){}; // XXX romank: add proper assert
    // XXX romank: use zerr.js
    // XXX bahaa: require be_zerr.js for extensions
    if (self.hola && self.hola.zerr)
        zerr = self.hola.zerr;
    else
    {
        zerr = function(){ console.log.apply(console, arguments); };
	zerr.perr = zerr;
        zerr.debug = function(){};
	zerr.is = function(){ return false; };
	zerr.L = {DEBUG: 0};
    }
    if (!zerr.is)
	zerr.is = function(){ return false; };
}
else
{
    require('./config.js');
    process = global.process;
    zerr = require('./zerr.js');
    assert = require('assert');
    define = require('./require_node.js').define(module, '../');
}
/* XXX arik hack: rm typeof self */
define(['events'].concat(typeof self=='object' ?
    ['array', 'util'] : ['/util/array.js', '/util/util.js']),
    function(events, array, zutil){
var E = Etask;
var etask = Etask;
var env = process.env;
E.longcb = +env.LONGCB;
E.use_bt = +env.ETASK_BT;
E.root = [];
E.assert_extra = +env.ETASK_ASSERT_EXTRA; // to debug internal etask bugs
E.nextTick = process.nextTick;

function stack_get(){
    if (!Etask.use_bt)
        return;
    // new Error(): 200K per second
    // http://jsperf.com/error-generation
    // Function.caller (same as arguments.callee.caller): 2M per second
    // http://jsperf.com/does-function-caller-affect-preformance
    // http://jsperf.com/the-arguments-object-s-effect-on-speed/2
    var prev = Error.stackTraceLimit, err;
    Error.stackTraceLimit = 3;
    err = new Error();
    Error.stackTraceLimit = prev;
    return err;
}

function Etask(opt, states, stack){
    if (array.is_array(opt))
    {
	stack = states;
	states = opt;
	opt = undefined;
    }
    if (!(this instanceof Etask))
	return new Etask(opt, states, stack_get());
    opt = (typeof opt==='string' && {name: opt})||opt||{};
    // performance: set all fields to undefined
    this.cur_state = this.states = undefined;
    this._ensure = this.error = this.at_ereturn = undefined;
    this.next_state = this.use_retval = this.running = undefined;
    this.at_econtinue = this.at_retval = this.cancel = undefined;
    this.wait_timer = this.retval = this.run_state = undefined;
    this._stack = this.down = this.up = this.child = undefined;
    this.name = this._name = this._parent = this.cancelable = undefined;
    this.tm_create = this.alarm_ms = this.alarm_id = undefined;
    this.tm_completed = this.info = this.then_waiting = undefined;
    this.wait_obj = this.free = this.parent_guess = undefined;
    this.child_guess = undefined;
    // init fields
    this.name = opt.name;
    this._name = this.name===undefined ? 'noname' : this.name;
    this.cancelable = opt.cancel;
    this.then_waiting = [];
    this.child = [];
    this.child_guess = [];
    this.cur_state = -1;
    this.states = states;
    this._stack = stack;
    this.tm_create = Date.now();
    this.info = {};
    var idx = this.states.idx = {};
    for (var i=0; i<this.states.length; i++)
    {
	var state = this.states[i];
	if (state instanceof Function)
	{
	    state = this.states[i] = {f: state, label: undefined,
		try_catch: undefined, 'catch': undefined, ensure: undefined,
	        cancel: undefined, sig: undefined};
	}
	assert(typeof state==='object' && state.f,
	    'invalid state type or missing func'+state);
	var t = this._get_func_type(state.f);
	if (t.label && !state.label)
	    state.label = t.label;
	if (t.try_catch)
	    state.try_catch = t.try_catch;
	if (t['catch'])
	    state['catch'] = t['catch'];
	if (t.ensure)
	    state.ensure = t.ensure;
	if (t.cancel)
	    state.cancel = t.cancel;
	if (state.label)
	    idx[state.label] = i;
	if (state['catch'])
	    state.sig = true;
	if (state.ensure)
	{
	    assert(this._ensure===undefined, 'more than 1 ensure$');
	    state.sig = true;
	    this._ensure = i;
	}
	if (state.cancel)
	{
	    assert(this.cancel===undefined, 'more than 1 cancel$');
	    state.sig = true;
	    this.cancel = i;
	}
    }
    E.root.push(this);
    var in_run = E.in_etask_run[E.in_etask_run.length-1];
    if (opt.spawn_parent)
	this.spawn_parent(opt.spawn_parent);
    else if (opt.up)
	opt.up._set_down(this);
    else if (in_run)
	this._spawn_parent_guess(in_run);
    if (opt.async)
    {
        E.nextTick(function(){
            if (this.running!==undefined || this.tm_completed)
                return;
            this._next_run();
        }.bind(this));
    }
    else
        this._next_run();
    return this;
}
zutil.inherits(Etask, events.EventEmitter);

var wait_obj = {};
E.prototype._root_remove = function(){
    assert(!this._parent, 'cannot remove from root when has parent');
    if (!array.rm_elm_tail(E.root, this))
	assert(0, 'etask not in root: '+etask.ps(this)+etask.ps());
};

E.prototype._parent_remove = function(){
    if (this.up)
    {
	var up = this.up;
	this.up = this.up.down = undefined;
	if (up.tm_completed)
	    up._check_free();
	return;
    }
    if (this.parent_guess)
	this._parent_guess_remove();
    if (!this._parent)
	return this._root_remove();
    if (!array.rm_elm_tail(this._parent.child, this))
    {
	assert(0, 'etask child not in parent: '+etask.ps(this)
	    +'parent: '+etask.ps(this._parent)+etask.ps());
    }
    if (this._parent.tm_completed)
	this._parent._check_free();
    this._parent = undefined;
};

E.prototype._check_free = function(){
    if (this.down || this.child.length)
	return;
    this._parent_remove();
    this.free = true;
};

E.prototype._next = function(ret, err){
    if (this.tm_completed)
	return true;
    var state = this.at_ereturn ? this.states.length :
        this.next_state!==undefined ? this.next_state :
        this.cur_state+1;
    if (err!==undefined)
    {
        if (zerr.on_exception)
            zerr.on_exception(err);
	this.retval = undefined;
	this.error = err;
	if (this.run_state.try_catch)
	{
	    this.use_retval = true;
            for (; state<this.states.length && this.states[state].sig;
                state++);
	}
	else
	{
	    for (; state<this.states.length && !this.states[state]['catch'];
                state++);
	}
    }
    else
    {
	this.error = undefined;
	this.retval = ret;
        for (; state<this.states.length && this.states[state].sig; state++);
    }
    this.cur_state = state;
    this.run_state = this.states[state];
    this.next_state = undefined;
    if (this.cur_state<this.states.length)
        return false;
    if (zerr.is(zerr.L.DEBUG))
	zerr.debug(this._name+': close');
    this.tm_completed = Date.now();
    if (this._ensure!==undefined)
    {
        ret = this.states[this._ensure].f.call(this);
        if (E.is_err(ret))
            this._set_retval(ret);
    }
    this._check_free();
    this._del_wait_timer();
    this.del_alarm();
    while (this.then_waiting.length)
	this.then_waiting.pop()();
    this._ecancel_child();
    this.emit('ensure');
    return true;
};

E.prototype._next_run = function(ret, err){
    if (this._next(ret, err))
	return;
    this._run();
};

E.in_etask_run = [];
E.prototype._run = function(){
    assert(this instanceof Etask);
    while (1)
    {
	var err = undefined, ret = undefined, cb_start, cb_end, _this = this;
	var arg = this.error!==undefined && !this.use_retval ? this.error :
	    this.retval;
	this.use_retval = false;
	this.running = true;
	E.in_etask_run.push(this);
	if (zerr.is(zerr.L.DEBUG))
	    zerr.debug(this._name+':S'+this.cur_state+': running');
	if (E.longcb)
	    cb_start = Date.now();
	try { ret = this.run_state.f.call(this, arg); }
	catch(e){
	    err = e;
	    if (err instanceof Error)
		err.etask = this;
	}
	if (E.longcb)
	{
	    cb_end = Date.now();
	    var ms = cb_end-cb_start;
	    if (ms>E.longcb)
	    {
		zerr('long cb '+ms+'ms: '
		    +this.run_state.f.toString().slice(0, 128));
	    }
	}
	this.running = false;
	E.in_etask_run.pop();
	for (; this.child_guess.length;
	    this.child_guess.pop().parent_guess = undefined);
	if (ret && ret.id===wait_obj)
	{
	    if (!this.at_econtinue)
	    {
		var wait_completed = false;
		this.at_wait = true;
		if (ret.op=='wait_child')
		     wait_completed = this._set_wait_child(ret);
		if (ret.timeout)
		    this._set_wait_timer(ret.timeout);
		if (!wait_completed)
		    return;
	    }
	    ret = this.at_retval;
	}
	this.at_econtinue = false;
	this.at_retval = undefined;
	if (!ret);
        else if (ret===this.retval); // fast-path: retval already set
	else if (ret instanceof Etask)
	{
	    if (!ret.tm_completed)
	    {
		this._set_down(ret);
		ret.then_waiting.push(function(){
		    _this._next_run(ret.retval, ret.error); });
		return;
	    }
	    err = ret.error;
	    ret = ret.retval;
	}
	else if (ret instanceof Etask_err)
	{
	    err = ret.error;
	    ret = undefined;
	}
	else if (typeof ret.then=='function') // promise
	{
	    ret.then(function(ret){ _this._next_run(ret); },
		function(err){ _this._next_run(undefined, err); });
	    return;
	}
	if (this._next(ret, err))
	    return;
    }
};

E.prototype._set_down = function(down){
    assert(!this.down, 'caller already has a down');
    if (down.parent_guess)
	down._parent_guess_remove();
    assert(!down._parent, 'returned etask already has a spawn parent');
    assert(!down.up, 'returned etask already has a caller parent');
    down._parent_remove();
    this.down = down;
    down.up = this;
};

function func_name(func){
    if (func.name!==undefined)
	return func.name;
    var n = func.toString().match(/^function ([^\s]+)\s?\(/);
    return (n && n[1])||'';
}

var func_type_cache = {};
E.prototype._get_func_type = function(func, on_fail){
    var name = func_name(func);
    var type = func_type_cache[name];
    if (type)
	return type;
    type = func_type_cache[name] = {name: undefined, label: undefined,
        try_catch: undefined, 'catch': undefined, ensure: undefined,
        cancel: undefined};
    if (!name)
	return type;
    type.name = name;
    var n = name.split('$');
    if (n.length==1)
    {
	type.label = n[0];
	return type;
    }
    if (n.length>2)
	return type;
    if (n[1].length)
	type.label = n[1];
    var f = n[0].split('_');
    for (var j=0; j<f.length; j++)
    {
	if (f[j]=='try')
	{
	    type.try_catch = true;
	    if (f[j+1]=='catch')
		j++;
	}
	else if (f[j]=='catch')
	    type['catch'] = true;
	else if (f[j]=='ensure')
	    type.ensure = true;
	else if (f[j]=='cancel')
	    type.cancel = true;
	else
	{
	    return void(on_fail||assert.bind(null, false))(
		'unknown func name '+name);
	}
    }
    return type;
};

E.prototype.spawn = function(child, replace){
    if (!(child instanceof Etask))
	return;
    if (!replace)
	assert(!child._parent, 'child already has a parent');
    child.spawn_parent(this);
};

E.prototype._spawn_parent_guess = function(_parent){
    this.parent_guess = _parent;
    _parent.child_guess.push(this);
};
E.prototype._parent_guess_remove = function(){
    if (!array.rm_elm_tail(this.parent_guess.child_guess, this))
	assert(0, 'etask not in parent_guess: '+etask.ps(this)+etask.ps());
    this.parent_guess = undefined;
};
E.prototype.spawn_parent = function(_parent){
    assert(!this.up, 'child already has an up');
    if (this.tm_completed && !this._parent)
	return;
    this._parent_remove();
    if (_parent && _parent.free)
	_parent = undefined;
    if (!_parent)
	return void E.root.push(this);
    _parent.child = _parent.child||[];
    _parent.child.push(this);
    this._parent = _parent;
};

E.prototype.set_state = function(name){
    var state = this.states.idx[name];
    assert(state!==undefined, 'named func "'+name+'" not found');
    return (this.next_state = state);
};

E.prototype.egoto_fn = function(name){ return this.egoto.bind(this, name); };
E.prototype.egoto = function(name, promise){
    this.set_state(name);
    return this.econtinue(promise);
};

E.prototype.eloop = function(promise){
    this.next_state = this.cur_state;
    return promise;
};

E.prototype._set_wait_timer = function(timeout){
    var _this = this;
    this.wait_timer = setTimeout(function(){
	_this.wait_timer = undefined;
	_this._next_run(undefined, 'timeout');
    }, timeout);
};
E.prototype._del_wait_timer = function(){
    var i;
    if (this.wait_timer)
    {
	clearTimeout(this.wait_timer);
	this.wait_timer = undefined;
    }
    if (this.wait_obj)
    {
	var child = this.wait_obj.at_child, then_waiting = child.then_waiting;
	for (i=0; i<then_waiting.length
	    && then_waiting[i].wait_obj!=this.wait_obj;
	    i++);
	assert(i<then_waiting.length, 'didnt find wait_child in then_waiting');
	then_waiting.splice(i, 1);
	this.wait_obj = undefined;
    }
};
E.prototype._get_child_running = function(from){
    var i, child = this.child;
    for (i=from||0; i<child.length && child[i].tm_completed; i++);
    return i>=child.length ? -1 : i;
};
E.prototype._set_wait_child = function(wait_obj){
    var i, _this = this, child = wait_obj.child;
    assert(!this.wait_obj, 'wait_child already set');
    if (child)
    {
	assert(this===child._parent, 'child does not belong to parent');
	if (child.tm_completed)
	    return true;
    }
    else
    {
	if ((i = this._get_child_running())<0)
	    return true;
	child = this.child[i];
    }
    function on_wait(){
	var i;
	if (!wait_obj.child && (i = _this._get_child_running())>=0)
	{
	    child = wait_obj.at_child = _this.child[i];
	    child.then_waiting.push(on_wait);
	    return;
	}
	_this.wait_obj = undefined;
	_this._next_run();
    }
    on_wait.wait_obj = this.wait_obj = wait_obj;
    wait_obj.at_child = child;
    child.then_waiting.push(on_wait);
};

E.prototype.econtinue_fn = function(){ return this.econtinue.bind(this); };
E.prototype.econtinue = function(promise){
    this._set_retval(promise);
    if (this.tm_completed)
	return promise;
    if (this.down)
	this.down._ecancel();
    this._del_wait_timer();
    if (this.running)
    {
	this.at_retval = promise;
	this.at_econtinue = true;
	return promise;
    }
    var ret = promise, err, _this = this;
    if (!ret);
    else if (ret instanceof Etask)
    {
	if (!ret.tm_completed)
	{
	    this._set_down(ret);
	    ret.then_waiting.push(function(){
		_this._next_run(ret.retval, ret.error); });
	    return ret;
	}
	err = ret.error;
	ret = ret.retval;
    }
    else if (ret instanceof Etask_err)
    {
	err = ret.error;
	ret = undefined;
    }
    else if (typeof ret.then=='function') // promise
    {
	ret.then(function(ret){ _this._next_run(ret); },
	    function(err){ _this._next_run(undefined, err); });
	return ret;
    }
    this._next_run(ret, err);
    return promise;
};

E.prototype._ecancel = function(){
    if (this.tm_completed)
	return this;
    this.emit('cancel');
    if (this.cancel!==undefined)
	return this.states[this.cancel].f.call(this);
    if (this.cancelable)
	return this.ereturn();
};

E.prototype._ecancel_child = function(){
    if (!this.child.length)
	return;
    // copy array, since ecancel has side affects and can modify array
    var child = array.copy(this.child);
    for (var i=0; i<child.length; i++)
	child[i]._ecancel();
};

E.prototype._set_retval = function(ret){
    if (!ret)
    {
        this.retval = ret;
        this.error = undefined;
    }
    else if (ret instanceof Etask)
    {
	if (ret.tm_completed)
	{
            this.retval = ret.retval;
            this.error = ret.error;
        }
    }
    else if (ret instanceof Etask_err)
    {
        this.retval = undefined;
        this.error = ret.error;
    }
    else if (typeof ret.then=='function'); // promise
    else
    {
        this.retval = ret;
        this.error = undefined;
    }
    return ret;
};
E.prototype.ereturn_fn = function(){ return this.ereturn.bind(this); };
E.prototype.ereturn = function(promise){
    if (this.tm_completed)
	return this._set_retval(promise);
    this.at_ereturn = true;
    this.next_state = undefined;
    return this.econtinue(promise);
};

E.prototype.del_alarm = function(){
    if (!this.alarm_id)
	return;
    clearTimeout(this.alarm_id);
    this.alarm_id = this.alarm_ms = undefined;
};

E.prototype.alarm_left = function(){
    if (!this.alarm_id)
	return 0;
    return this.alarm_id._idleStart + this.alarm_id._idleTimeout - Date.now();
};

E.prototype.eoperation_opt = function(opt){
    if (opt.egoto)
	return {ret: this.egoto(opt.egoto, opt.ret)};
    if (opt.ethrow)
	return {ret: this.ethrow(opt.ethrow)};
    if (opt.ereturn!==undefined)
	return {ret: this.ereturn(opt.ereturn)};
    if (opt.econtinue!==undefined)
	return {ret: this.econtinue(opt.econtinue)};
};

E.prototype.alarm = function(ms, cb){
    var _this = this, opt;
    if (cb && !(cb instanceof Function))
    {
	opt = cb;
	cb = function(){
	    var v;
	    if ((v = _this.eoperation_opt(opt)))
		return v.ret;
	    assert(0, 'invalid alarm cb opt');
	};
    }
    this.del_alarm();
    this.alarm_ms = ms;
    this.alarm_id = setTimeout(function(){
	_this.alarm_id = _this.alarm_ms = undefined;
	_this.emit('sig_alarm');
    }, this.alarm_ms);
    if (cb)
	this.once('sig_alarm', cb);
};

E.prototype.wait = function(timeout){
    return {id: wait_obj, timeout: timeout, op: 'wait'}; };
E.prototype.wait_child = function(child, timeout){
    return {id: wait_obj, timeout: timeout, op: 'wait_child',
	child: child, at_child: null};
};

E.prototype.ethrow_fn = function(){ return this.ethrow.bind(this); };
E.prototype.ethrow = function(err){ return this.econtinue(E.err(err)); };

E.prototype.get_name = function(flags){
    /* anon: Context.<anonymous> (/home/yoni/zon1/pkg/util/test.js:1740:7)
     * with name: Etask.etask1_1 (/home/yoni/zon1/pkg/util/test.js:1741:11) */
    var stack = this._stack instanceof Error ? this._stack.stack.split('\n') :
	undefined;
    var caller;
    flags = flags||{};
    if (stack)
    {
	caller = /^    at (.*)$/.exec(stack[3]);
	caller = caller ? caller[1] : undefined;
    }
    var names = [];
    if (this.name)
	names.push(this.name);
    if (caller && !(this.name && flags.SHORT_NAME))
	names.push(caller);
    if (!names.length)
	names.push('noname');
    return names.join(' ');
};

E.prototype.state_str = function(){
    return this.cur_state+(this.next_state ? '->'+this.next_state : ''); };

E.prototype.get_depth = function(){
    var i=0, et = this;
    for (; et; et = et.up, i++);
    return i;
};

function trim_space(s){
    if (!s || s[s.length-1]!=' ')
	return s;
    return s.slice(0, -1);
}
function ms_to_str(ms){
    var s = ''+ms;
    return s.length<=3 ? s+'ms' : s.slice(0, -3)+'.'+s.slice(-3)+'s';
}
E.prototype.get_time_passed = function(){
    return ms_to_str(Date.now()-this.tm_create); };
E.prototype.get_time_completed = function(){
    return ms_to_str(Date.now()-this.tm_completed); };
E.prototype.get_info = function(){
    var info = this.info, s = '', _i;
    if (!info)
	return '';
    for (var i in info)
    {
	_i = info[i];
	if (!_i)
	    continue;
	if (s!=='')
	    s += ' ';
	if (typeof _i==='function')
	    s += _i();
	else
	    s += _i;
    }
    return trim_space(s);
};

// light-weight efficient etask/promise error value
function Etask_err(err){ this.error = err || new Error(); }
E.Etask_err = Etask_err;
E.err = function(err){ return new Etask_err(err); };
E.is_err = function(v){
    return (v instanceof Etask && v.error!==undefined) ||
	(v instanceof Etask_err);
};
E.err_res = function(err, res){ return err ? E.err(err) : res; };

// promise compliant .then() implementation for Etask and Etask_err.
// for unit-test comfort, also .otherwise() .ensure(), resolve() and reject()
// are implemented.
E.prototype.then = function(on_res, on_err){
    var _this = this;
    function on_done(){
	if (!_this.error)
	    return !on_res ? _this.retval : on_res(_this.retval);
	return !on_err ? etask.err(_this.error) : on_err(_this.error);
    }
    if (this.tm_completed)
	return etask('then_completed', [function(){ return on_done(); }]);
    var then_wait = etask('then_wait', [function(){ return this.wait(); }]);
    this.then_waiting.push(function(){
	try { then_wait.econtinue(on_done()); }
	catch(e){ then_wait.ethrow(e); }
    });
    return then_wait;
};
E.prototype.otherwise = function(on_err){
    return this.then(null, on_err); };
E.prototype.ensure = function(on_ensure){
    return this.then(function(res){ on_ensure(); return res; },
	function(err){ on_ensure(); throw err; });
};
Etask_err.prototype.then = function(on_res, on_err){
    var _this = this;
    return etask('then_err', [function(){
	return !on_err ? etask.err(_this.error) : on_err(_this.error);
    }]);
};
Etask_err.prototype.otherwise = function(on_err){
    return this.then(null, on_err); };
Etask_err.prototype.ensure = function(on_ensure){
    this.then(null, function(){ on_ensure(); });
    return this;
};
E.resolve = function(res){ return etask([function(){ return res; }]); };
E.reject = function(err){ return etask([function(){ throw err; }]); };

E.prototype.wait_ext = function(promise){
    if (!promise || typeof promise.then!='function')
	return promise;
    promise.then(this.econtinue_fn(), this.ethrow_fn());
    return this.wait();
};

E.prototype.longname = function(flags){
    flags = flags||{TIME: 1};
    var s = '', _s;
    if (this.running)
	s += 'RUNNING ';
    s += this.get_name(flags)+(!this.tm_completed ? '.'+this.state_str() : '')
	+' ';
    if (this.tm_completed)
	s += 'COMPLETED'+(flags.TIME ? ' '+this.get_time_completed() : '')+' ';
    if (flags.TIME)
	s += this.get_time_passed()+' ';
    if ((_s = this.get_info()))
	s += _s+' ';
    return trim_space(s);
};
E.prototype.stack = function(flags){
    var et = this, s = '';
    flags = zutil.extend({STACK: 1, RECURSIVE: 1, GUESS: 1}, flags);
    for (; et;)
    {
	var _s = et.longname(flags)+'\n';
	if (et.up)
	    et = et.up;
	else if (et.parent)
	{
	    _s = 'SPAWN '+_s;
	    et = et.parent;
	}
	else if (et.parent_guess && flags.GUESS)
	{
	    _s = 'SPAWN? '+_s;
	    et = et.parent_guess;
	}
	else
	    et = undefined;
	if (flags.TOPDOWN)
	    s = _s+s;
	else
	    s += _s;
    }
    return s;
};
E.prototype._ps = function(pre_first, pre_next, show_sp, flags){
    var i, s = '', task_trail, et = this, child_guess;
    if (++flags.limit_n>=flags.LIMIT)
        return flags.limit_n==flags.LIMIT ? '\nLIMIT '+flags.LIMIT+'\n': '';
    /* get top-most et */
    for (; et.up; et = et.up);
    /* print the sp frames */
    for (var first = 1; et; et = et.down, first = 0)
    {
	s += first ? pre_first : pre_next;
	first = 0;
	if (show_sp && show_sp==et && !flags.SUBTREE)
	    s += '*** ';
	s += et.longname(flags)+'\n';
	if (flags.RECURSIVE)
	{
	    var stack_trail = et.down ? '.' : ' ';
	    var child = et.child, child_length = child.length;
	    if (flags.GUESS)
		child = child.concat(et.child_guess);
	    for (i = 0; i<child.length; i++)
	    {
		task_trail = i<child.length-1 ? '|' : stack_trail;
		child_guess = i>=child_length ? '\\? ' : '\\_ ';
		s += child[i]._ps(pre_next+task_trail+child_guess,
		    pre_next+task_trail+'   ', show_sp, flags);
	    }
	}
    }
    return s;
};
E.prototype.ps = function(flags){
    flags = zutil.extend({STACK: 1, RECURSIVE: 1, LIMIT: 10000000, TIME: 1,
        GUESS: 1}, flags, {limit_n: 0});
    return this._ps('', '', undefined, flags);
};
E._longname_root = function(){
    return (zerr.prefix ? zerr.prefix+'pid '+process.pid+' ' : '')+'root'; };
E.ps = function(flags){
    var i, s = '', task_trail;
    flags = zutil.extend({STACK: 1, RECURSIVE: 1, LIMIT: 10000000, TIME: 1,
        GUESS: 1}, flags, {limit_n: 0});
    s += E._longname_root()+'\n';
    var child = E.root;
    if (flags.GUESS)
    {
	child = [];
	for (i=0; i<E.root.length; i++)
	{
	    if (!E.root[i].parent_guess)
		child.push(E.root[i]);
	}
    }
    for (i=0; i<child.length; i++)
    {
	task_trail = i<child.length-1 ? '|' : ' ';
	s += child[i]._ps(task_trail+'\\_ ', task_trail+'   ', undefined,
	    flags);
    }
    return s;
};

function assert_tree_unique(a){
    var i;
    for (i=0; i<a.length-1; i++)
	assert(a.indexOf(a[i], i+1)<0);
}
E.prototype._assert_tree = function(opt){
    var i, et;
    opt = opt||{};
    assert_tree_unique(this.child);
    assert(this.parent);
    if (this.down)
    {
	et = this.down;
	assert(et.up===this);
	assert(!et._parent);
	assert(!et.parent_guess);
	this.down._assert_tree(opt);
    }
    for (i=0; i<this.child.length; i++)
    {
	et = this.child[i];
	assert(et._parent===this);
	assert(!et.parent_guess);
	assert(!et.up);
	et._assert_tree(opt);
    }
    if (this.child_guess.length)
	assert(E.in_etask_run.indexOf(this)>=0);
    for (i=0; i<this.child_guess.length; i++)
    {
	et = this.child_guess[i];
	assert(et.parent_guess===this);
	assert(!et._parent);
	assert(!et.up);
    }
};
E._assert_tree = function(opt){
    var i, et, child = E.root;
    opt = opt||{};
    assert_tree_unique(E.root);
    for (i=0; i<child.length; i++)
    {
	et = child[i];
	assert(!et._parent);
	assert(!et.up);
	et._assert_tree(opt);
    }
};
E.prototype._assert_parent = function(){
    if (this.up)
	return assert(!this._parent && !this.parent_guess);
    assert(this._parent && this.parent_guess,
	'parent_guess together with parent');
    if (this.parent)
    {
	var child = this._parent ? this._parent.child : E.root;
	assert(child.indexOf(this)>=0,
	    'cannot find in parent '+(this._parent ? '' : 'root'));

    }
    else if (this.parent_guess)
    {
	assert(this.parent_guess.child_guess.indexOf(this)>=0,
	    'cannot find in parent_guess');
	assert(E.in_etask_run.indexOf(this.parent_guess)>=0);
    }
};

E.prototype.ereturn_child = function(){
    // copy array, since ereturn has side affects and can modify array
    var child = array.copy(this.child);
    for (var i=0; i<child.length; i++)
	child[i].ereturn();
};

E.sleep_ms = function(ms){
    var timer;
    return etask({name: 'sleep_ms', cancel: true}, [function(){
	this.info.ms = ms+'ms';
	timer = setTimeout(this.econtinue_fn(), ms);
	return this.wait();
    }, function ensure$(){
        clearTimeout(timer);
    }]);
};

var ebreak_obj = {ebreak: 1};
E.prototype.ebreak = function(){ return this.ethrow(ebreak_obj); };
E.efor = function(cond, inc, et_states){
    return etask({name: 'efor', cancel: true}, [function loop(){
	return !cond || cond();
    }, function try_catch$(res){
	if (!res)
	    return this.ereturn();
        return etask({name: 'efor_itr', cancel: true}, et_states||[]);
    }, function(){
	if (this.error)
	{
	    if (this.error===ebreak_obj)
	        return this.ereturn();
    	    return this.ethrow(this.error);
	}
	return inc && inc();
    }, function(){
	return this.egoto('loop');
    }]);
};
E.ewhile = function(cond, et_states){
    return E.efor(cond, null, et_states); };

E.all = function(a_or_o, ao2){
    var i, j, opt = {};
    if (ao2)
    {
        opt = a_or_o;
        a_or_o = ao2;
    }
    if (array.is_array(a_or_o))
    {
	var a = array.copy(a_or_o);
	i = 0;
	return etask({name: 'all_a', cancel: true}, [function(){
	    for (j=0; j<a.length; j++)
	        this.spawn(a[j]);
	}, function try_catch$loop(){
	    if (i>=a.length)
		return this.ereturn(a);
	    this.info.at = 'at '+i+'/'+a.length;
	    var _a = a[i];
	    if (_a instanceof Etask)
	        _a.spawn_parent();
	    return _a;
	}, function(res){
	    if (this.error)
	    {
		if (!opt.allow_fail)
		    return this.ethrow(this.error);
		res = etask.err(this.error);
	    }
	    a[i] = res;
	    i++;
	    return this.egoto('loop');
	}]);
    }
    else if (a_or_o instanceof Object)
    {
	var keys = Object.keys(a_or_o), o = {};
	i = 0;
	return etask({name: 'all_o', cancel: true}, [function(){
	    for (j=0; j<keys.length; j++)
	        this.spawn(a_or_o[keys[j]]);
	}, function try_catch$loop(){
	    if (i>=keys.length)
		return this.ereturn(o);
	    var _i = keys[i], _a = a_or_o[_i];
	    this.info.at = 'at '+_i+' '+i+'/'+keys.length;
	    if (_a instanceof Etask)
	        _a.spawn_parent();
	    return _a;
	}, function(res){
	    if (this.error)
	    {
		if (!opt.allow_fail)
		    return this.ethrow(this.error);
		res = etask.err(this.error);
	    }
	    o[keys[i]] = res;
	    i++;
	    return this.egoto('loop');
	}]);
    }
    else
	assert(0, 'invalid type');
};

E._apply = function(opt, func, _this, args){
    var func_name = func.name;
    if (typeof _this==='string') // class with '.method' string call
    {
	assert(_this[0]=='.', 'invalid method '+_this);
	var method = _this.slice(1), _class = func;
	func = _class[method];
	_this = _class;
	assert(_this instanceof Object, 'invalid method .'+method);
	func_name = method;
    }
    else if (array.is_array(_this) && !args)
    {
	args = _this;
	_this = null;
    }
    opt.name = opt.name||func_name;
    return etask(opt, [function(){
	var et = this, ret_sync, returned = 0;
        args = array.args(args);
	args.push(function cb(err, res){
	    if (typeof opt.ret_sync=='string' && !returned)
	    {
		// hack to wait for result
		var a = arguments;
		returned++;
	        return void process.nextTick(function(){ cb.apply(null, a); });
	    }
	    var nfn = opt.nfn===undefined || opt.nfn ? 1 : 0;
	    if (opt.ret_o)
	    {
		var o = {}, i;
		if (array.is_array(opt.ret_o))
		{
		    for (i=0; i<opt.ret_o.length; i++)
			o[opt.ret_o[i]] = arguments[i+nfn];
		}
		else if (typeof opt.ret_o==='string')
		    o[opt.ret_o] = array.slice(arguments, nfn);
		else
		    assert(0, 'invalid opt.ret_o');
		if (typeof opt.ret_sync=='string')
		    o[opt.ret_sync] = ret_sync;
		res = o;
	    }
	    else if (opt.ret_a)
	        res = array.slice(arguments, nfn);
	    else if (!nfn)
		res = err;
	    et.econtinue(nfn ? E.err_res(err, res) : res);
	});
	ret_sync = func.apply(_this, args);
	if (array.is_array(opt.ret_sync))
	    opt.ret_sync[0][opt.ret_sync[1]] = ret_sync;
	returned++;
	return this.wait();
    }]);
};

E.nfn_apply = function(opt, func, _this, args){
    var _opt = {nfn: 1};
    if (typeof opt=='function' || typeof func=='string')
    {
	args = _this;
	_this = func;
	func = opt;
	opt = _opt;
    }
    else
	opt = zutil.extend(_opt, opt);
    return E._apply(opt, func, _this, args);
};
E.cb_apply = function(opt, func, _this, args){
    var _opt = {nfn: 0};
    if (typeof opt=='function' || typeof func=='string')
    {
	args = _this;
	_this = func;
	func = opt;
	opt = _opt;
    }
    else
	opt = zutil.extend(_opt, opt);
    return E._apply(opt, func, _this, args);
};

E.prototype.econtinue_nfn = function(){
    return function(err, res){ this.econtinue(E.err_res(err, res)); }
    .bind(this);
};

E.augment = function(_prototype, method, e_method){
    var i, opt = {};
    if (method instanceof Object && !array.is_array(method))
    {
	zutil.extend(opt, method);
        method = arguments[2];
	e_method = arguments[3];
    }
    if (array.is_array(method))
    {
	if (e_method)
	    opt.prefix = e_method;
	for (i=0; i<method.length; i++)
	    E.augment(_prototype, opt, method[i]);
	return;
    }
    opt.prefix = opt.prefix||'e_';
    if (!e_method)
	e_method = opt.prefix+method;
    var fn = _prototype[method];
    _prototype[e_method] = function(){
	return etask._apply({name: e_method, nfn: 1}, fn, this, arguments); };
};

E.wait = function(timeout){
    return etask({name: 'wait', cancel: true},
	[function(){ return this.wait(timeout); }]);
};
E.process_exit = function(promise){
    return etask('process_main', [function(){
	return promise;
    }, function catch$(err){
        console.error(err.stack||err);
	process.exit(1);
    }, function(){
	process.exit(0);
    }]);
};

return Etask; }); }());
