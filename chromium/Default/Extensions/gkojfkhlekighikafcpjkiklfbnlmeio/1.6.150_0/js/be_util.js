// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['jquery', 'be_backbone', 'underscore', 'zerr', 'version_util', 'etask',
    'date', 'escape', 'be_browser', 'user_agent', 'ajax', 'storage'],
    function($, be_backbone, _, zerr, version_util, etask, date, zescape, B,
    zua, ajax, storage){
var chrome = window.chrome, conf = window.conf, zconf = window.zon_config;
var www_config = null;
var E = new be_backbone.model();

E.dump_obj = function(obj, fields){
    return !obj ? '' :
        zerr.json(obj, fields, ' ').replace(/^[{ }]\n?|,$/gm, '');
};

E.os_guess = zua.guess();
E.browser_guess = zua.guess_browser();
E.os_win = function(){ return E.os_guess.os=='windows'; };
E.os_win8 = function(){ return E.os_guess.version==8; };

E.version = function(){ return zconf.ZON_VERSION; };

E.no_proxy = function(){
    return !window.is_tpopup && chrome && !chrome.proxy; };

E.unsupported_browser = function(){
    if (!chrome)
        return false;
    return version_util.version_cmp(E.browser_guess.version, '22.0.1229.79')<0;
};

E.old_unsupported_ext = function(){
    return version_util.version_cmp(E.version(), '1.1.563')<=0; };

E.old_ext = function(){
    return version_util.version_cmp(E.version(), '1.1.809')<=0; };

E.send_msg = function(id, msg){
    return etask([function(){
	this.alarm(6000, {ethrow: 'timeout'});
        return etask.cb_apply(chrome.extension, '.sendMessage', [id, msg]);
    }]);
};

E.serr = function(opt){
    var s = '', with_log = opt.with_log;
    var rmt = opt.rmt, bg_main = window.be_bg_main;
    var ccgi_ver, be_ext;
    /* XXX arik/bahaa: need just to send one log (local for local perrs
     * and remote for remote perrs) */
    var log1, log2='', log2_hdr, log_sect_sz = (opt.log_sz||4096)/2 | 0;
    try {
	if (rmt)
	{
	    ccgi_ver = rmt.get('ver');
	    be_ext = rmt.be_ext;
	}
	s += E.dump_obj({url: location.href, date: Date(),
	    ccgi_ver: ccgi_ver});
	s += E.dump_obj(navigator, ['userAgent', 'platform', 'product',
	    'productSub', 'buildID', 'vendor']);
	if (bg_main)
	    s += '\nbg_main:\n'+E.dump_obj(bg_main.attributes);
	if (be_ext)
	    s += '\nbe_ext:\n'+E.dump_obj(be_ext.attributes);
	if (with_log)
	{
	    log1 = zerr.log.join('\n')+'\n';
	    if (bg_main && bg_main.zerr && bg_main.zerr.log)
            {
                log2_hdr = 'bg_main:\n';
		log2 = bg_main.zerr.log.join('\n')+'\n';
            }
            s += '\nlog:\n'+log1.substr(-log_sect_sz)+'\n'+log2_hdr
            +log2.substr(-log_sect_sz);
	}
    } catch(e){ s = 'Error in serr: '+(e.stack||e)+'\n'+s; }
    return s;
};

/* XXX arik: sync be_base.js <-> be_util.js (need to rm code duplication) */
E.browser = function(){ return conf.browser.firefox ? 'firefox' :
    conf.browser.torch ? 'torch' : 'chrome'; };

storage.on_err = function(api, key, err){
    zerr('%s failed %s %s %s', api, key, ''+err, err.stack);
    E.set('storage.err', (E.get('storage.err')||0)+1);
    E.set('storage.last_error', {api: api, key: key, err: err});
};

E.is_plugin = (function(){
    if (!chrome)
        return function(){ return storage.get_int('plugin.enabled'); };
    if (chrome && !conf.new_ui)
    {
        var BG = chrome.extension.getBackgroundPage();
	return function(){ return BG.util.is_plugin(); };
    }
    var is_plugin = !storage.get('tmp_not_plugin') &&
        zconf.BEXT_PLUGIN && E.os_win() && conf.plugin_enabled;
    return function(){ return is_plugin; };
})();

E.ext_type = (function(){
    var types = _.invert(conf.ids);
    return function(id){ return types[id]; };
})();

/* XXX arik: sync be_base.js <-> be_util.js (need to rm code duplication) */
E.build_info = function(){
    var rmt = E.rmt||window.RMT, ext, mode;
    if (rmt)
    {
	ext = rmt.be_ext;
        mode = rmt.be_mode;
    }
    else if (window.ui_popup)
    {
	rmt = window.ui_popup.R;
	ext = window.ui_popup.be_ext;
	mode = window.ui_popup.be_mode;
    }
    var info = {version: zconf.ZON_VERSION,
	src_country: storage.get('src_country')};
    if (rmt)
    {
	info.server_version = rmt.get('ver')+
	    (!rmt.get('inited') ? ' Not initialized' : '');
    }
    if (mode)
    {
	if (mode.get('plugin.enabled'))
	    info.plugin_enabled = true;
	if (mode.get('svc.version'))
	    info.svc_version = mode.get('svc.version');
        if (mode.get('mode'))
	    info.svc_mode = mode.get('mode');
        if (mode.get('capp.info'))
	    info.nacl_status = mode.get('capp.info').nacl_status;
        if (mode.get('pending'))
	    info.svc_mode_pending = mode.get('pending');
	var svc_info = mode.get('svc.info')||{};
	if (svc_info.ui_type)
	    info.ui_type = svc_info.ui_type;
	if (mode.get('capp.info'))
        {
	    info.app_version = mode.get('capp.info').ver;
	    info.app_uuid = mode.get('capp.info').uuid;
        }
    }
    if (ext)
    {
	if (ext.get('need_upgrade'))
	    info.need_upgrade = ext.get('need_upgrade');
	if (ext.get('r.ext.enabled'))
	    info.ext_enabled = ext.get('r.ext.enabled');
	if (ext.get('ext.conflict'))
	    info.ext_conflict = ext.get('ext.conflict');
	if (ext.get('ext.slave'))
	    info.ext_slave = ext.get('ext.slave');
    }
    info.makeflags = zconf.CONFIG_MAKEFLAGS;
    if (chrome)
	info.product_type = conf.type;
    info.id = B.runtime.id;
    info.browser = E.browser()+' '+E.browser_guess.version;
    info.platform = navigator.platform;
    info.user_agent = navigator.userAgent;
    if (window.is_tpopup)
	info.is_tpopup = window.is_tpopup;
    if (window.hola)
    {
        var up = window.is_popup ?
            storage.get_int('up_ts') : window.hola.t.l_start;
        var now = Date.now(), install = storage.get_int('install_ts');
        if (up)
            info.uptime = select_duration(now-up);
        if (install)
            info.install_time = select_duration(now-install);
    }
    return info;
};

var durations = [
    {name: '0-1h', length: 1},
    {name: '1h-1d', length: 1*24},
    {name: '1d-2d', length: 2*24},
    {name: '2d-1w', length: 7*24},
    {name: '1w-2w', length: 14*24},
    {name: '2w-1m', length: 30*24},
    {name: '1m-3m', length: 90*24},
    {name: '3m-6m', length: 180*24},
    {name: '>=6m', length: Infinity},
];
// XXX bahaa: unite with close variation in svc/wbm/pub/clients_data.js
function select_duration(len){
    len /= date.ms.HOUR;
    for (var i = 0; i<durations.length; ++i)
    {
        if (len<durations[i].length)
            return durations[i].name;
    }
}

E.do_op = function(o){
    if (!o || !o.op)
	return;
    switch (o.op)
    {
    case 'load_new_rmt': do_op_load_new_rmt(o); break;
    case 'reload_rmt': do_op_reload_rmt(o); break;
    case 'reload_ext': do_op_reload_ext(o); break;
    case 'upgrade_ext': do_op_upgrade_ext(o); break;
    case 'disable_plugin_once': do_op_disable_plugin_once(o); break;
    default: zerr('unknown op '+zerr.json(o));
    }
};

E.upgrade_ext = function(){ return do_op_upgrade_ext(); };

function do_op_reload_rmt(o){
    zerr.notice('do_op_reload_rmt '+zerr.json(o));
    if (window.RMT)
	window.RMT.load_new_ver(o.ver);
    else if (window.ui_popup && window.ui_popup.R)
	window.ui_popup.R.fcall('load_new_ver', [o.ver]);
    else
	do_op_reload_ext(o);
}

function do_op_reload_ext(o){
    zerr.notice('do_op_reload_ext '+zerr.json(o));
    B.be.reload_ext();
}

var do_op_upgrade_ext = _.throttle(function(o){
    if (!B.have['runtime.request_update_check'])
        return;
    zerr.notice('do_op_upgrde_ext '+zerr.json(o));
    B.runtime.request_update_check(function(status){
	zerr.notice('update check: '+status); });
}, 10*date.ms.MIN);

var do_op_load_new_rmt = _.throttle(function(o){
    zerr.notice('do_op_load_new_rmt '+zerr.json(o));
    if (window.RMT)
        return void window.RMT.check_ver();
    if (window.ui_popup && window.ui_popup.R)
        return void window.ui_popup.R.fcall('check_ver', []);
    if (version_util.version_cmp(E.version(), '1.2.29')<0)
        return void do_op_upgrade_ext(o);
    if (window.be_bg_main)
        return void window.be_bg_main.load_rmt();
    if (window.popup_main && window.popup_main.be_bg_main)
        return void window.popup_main.be_bg_main.fcall('load_rmt', []);
}, 10*date.ms.MIN);

function do_op_disable_plugin_once(o){
    if (!chrome || !E.is_plugin())
	return;
    zerr.notice('do_op_disable_plugin_once '+zerr.json(o));
    storage.set('set_tmp_not_plugin', 1);
    setTimeout(function(){ B.be.reload_ext(); });
}

/* XXX arik: sync be_base.js <-> be_util.js (need to rm code duplication) */
E.build = function(info){
    info = info||E.build_info();
    var s = '';
    for (var f in info)
	s += (s&&'\n')+f+': '+info[f];
    return s;
};

/* XXX arik: organize all perrs */
E.perr_id = function(id){
    if (!id.match(/^be_/))
	id = 'be_'+(E.is_plugin() ? 'plugin_' : '')+id;
    else if (E.is_plugin() && !id.match(/^be_plugin_/))
	id = id.replace('be_', 'be_plugin_');
    return id;
};

E.init = function(){
    if (storage.get_int('use_http'))
	conf.url_ccgi = conf.url_ccgi.replace('https://', 'http://');
    ajax.do_op = E.do_op;
    E.zopts.init();
};

E.open_tab = function(opt){
    function create_tab(url){ B.tabs.create({url: url}); }
    var url = opt.url;
    /* XXX arik: wrap with etask */
    B.tabs.query(_.extend({lastFocusedWindow: true}, opt.tab_match),
	function(tabs){
        // XXX mark/amir: remove dont_reuse workaround when capp post install
        // bug is fixed
	if (!tabs || !tabs.length || tabs[0].url.match(/#dont_reuse$/))
	    return create_tab(url);
	B.tabs.update(tabs[0].id, {url: url, active: true}, function(tab){
	    if (!tab)
		create_tab(url);
	});
    });
};

E.open_hola_tab = function(opt){
    var _opt = _.clone(opt);
    _opt.tab_match = chrome ? {url: '*://hola.org/*'} :
	{url_re: '^https?:\\/\\/hola\\.org\\/'};
    return E.open_tab(_opt);
};

E.open_be_tab = function(opt){
    var _opt = _.clone(opt), url = B.runtime.url;
    // XXX arik/bahaa: may be better to recycle only if the exact same page is
    // opened, rather than any be page
    _opt.tab_match = chrome ? {url: url+'/*'} :
        {url_re: '^'+zescape.regex(url)};
    _opt.url = (chrome ? 'js/' : url+'/data/')+_opt.url;
    return E.open_tab(_opt);
};

E.get_product = function(){ return conf.type; };

E.get_proto = function(){
    return storage.get_int('use_http') ? 'http' : 'https'; };

E.get_www_config = function(){
    return etask([function try_catch$(){
        if (www_config)
            return this.ereturn(www_config);
        return $.getJSON(conf.url_ccgi+'/www_config.json');
    }, function try_catch$(data){
        if (this.error)
            return this.ethrow(this.error);
        www_config = data||{};
        return this.ereturn(www_config);
    }]);
};

E.zopts = {};
E.zopts.set = function(key, val){
    E.zopts.table[key] = val===undefined ? false : val;
    storage.set_json('hola_opts', E.zopts.table);
};

E.zopts.get = function(key){ return E.zopts.table[key]; };

E.zopts.init = function(){
    E.zopts.table = storage.get_json('hola_opts')||{}; };

E.init();
return E; });
