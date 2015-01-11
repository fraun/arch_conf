// LICENSE_CODE ZON
'use strict'; /*jshint browser:true*/
(function(){
var chrome = window.chrome;
var hola = window.hola = window.hola||{};
var E = hola.base = {};

E.is_be = function(){
    return window.is_tpopup || top.be_test_page ||
        /^(chrome-extension|resource|file):\/\//.test(location.href);
};

function uri_comp(s){ return encodeURIComponent(s).replace(/%20/g, '+'); }

function qs(param, opt){
    var uri = '';
    if (!param)
        return uri;
    opt = opt||{};
    var _uri_comp = opt.space_plus ? uri_comp : encodeURIComponent;
    for (var i in param)
    {
	var val = param[i];
	if (val==null)
	    continue;
        uri += (!uri ? '' : '&')+_uri_comp(i)+'='+_uri_comp(val);
    }
    return uri;
}

var chrome_details = chrome && chrome.app && chrome.app.getDetails &&
    chrome.app.getDetails();
E.defaults = {
    conf: {url_ccgi: 'https://client.hola.org/client_cgi',
        url_perr: 'https://perr.hola.org/client_cgi', type: 'unknown',
        browser: {firefox: !chrome}},
    zon_config: {CONFIG_MAKEFLAGS: '',
        ZON_VERSION: chrome_details ? chrome_details.version : '0.0.0'}
};

E.get_conf = function(){ return window.conf||E.defaults.conf; };
E.get_zon_config = function(){
    return window.zon_config||E.defaults.zon_config; };

E.raw_perr = function raw_perr(opt){
    var url = E.get_conf().url_perr+'/perr';
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url+'?'+qs(opt, {space_plus: true}));
    xhr.send(null);
};

E.perr_prepare = function(opt){
    var build = E.build_info();
    /* XXX arik: better to do deep copy of opt before changing it */
    try {
        opt.uuid = opt.uuid ||
            (window.hola_extension_info&&window.hola_extension_info.uuid) ||
            localStorage.getItem('uuid');
    } catch(err){ console.error('perr failed '+err.stack); }
    opt.cid = opt.cid||(window.hola_svc_info&&window.hola_svc_info.cid);
    opt.rmt_ver = build.server_version;
    opt.ver = build.version;
    opt.browser = opt.browser||E.browser();
    opt.build = opt.build||E.build();
    return opt;
};

E.perr_once_cache = {};
E.perr_once = function(opt){
    opt = E.perr_prepare(opt);
    var id = opt.id, info = opt.info;
    var holder = E.perr_once_cache[id] = E.perr_once_cache[id]||{};
    if (info in holder)
        return holder[info];
    var key = id+'.'+info;
    var item;
    try { item = localStorage.getItem(key); }
    catch(err){ console.error('localStorage.getItem failed'); }
    if (item==null)
    {
        item = E.raw_perr(opt)||0;
        try { localStorage.setItem(key, item); }
        catch(err){ console.error('localStorage.setItem failed'); }
    }
    return holder[info] = item;
};

E.perr = function perr(opt){ return E.raw_perr(E.perr_prepare(opt)); };

/* XXX arik: sync be_base.js <-> be_util.js (need to rm code duplication) */
E.browser = function(){
    var conf = E.get_conf();
    return conf.browser.firefox ? 'firefox' :
	conf.browser.torch ? 'torch' : 'chrome';
};

/* XXX arik: sync be_base.js <-> be_util.js (need to rm code duplication) */
E.build_info = function(){
    var rmt, mode;
    if (window.RMT)
	rmt = window.RMT;
    else if (window.ui_popup)
	rmt = window.ui_popup.R;
    mode = rmt && rmt.be_mode;
    var zconf = E.get_zon_config();
    var info = {version: zconf.ZON_VERSION};
    if (rmt)
    {
	info.server_version = rmt.get('ver')+
	    (!rmt.get('inited') ? ' Not initialized' : '');
    }
    if (mode && mode.get('svc.version'))
        info.svc_version = mode.get('svc.version');
    if (mode && mode.get('plugin.enabled'))
        info.plugin_enabled = true;
    info.makeflags = zconf.CONFIG_MAKEFLAGS;
    if (chrome)
	info.product_type = E.get_conf().type;
    info.id = chrome ? chrome.runtime&&chrome.runtime.id :
        'jid1-4P0kohSJxU1qGg@jetpack';
    info.browser = E.browser();
    info.platform = navigator.platform;
    info.user_agent = navigator.userAgent;
    if (window.is_tpopup)
	info.is_tpopup = window.is_tpopup;
    return info;
};

/* XXX arik: sync be_base.js <-> be_util.js (need to rm code duplication) */
E.build = function(){
    var info = E.build_info(), s = '';
    for (var f in info)
	s += (s ? '\n' : '')+f+': '+info[f];
    return s;
};

E.require_on_error = function(err){
    var mods = err.requireModules||[], _mods = mods.join(' ');
    console.error('require fatal error, modules: '+_mods+'\n'+err.stack);
    E.perr({
        id: (E.is_be() ? 'be_int_' : 'www_')+'require_err',
        info: _mods||(''+err),
        bt: err.stack,
        filehead: mods.map(function(m){ return require.toUrl(m); }).join('\n')
    });
    throw err;
};

var prev_error_handler = window.onerror;
window.onerror = E.onerror = function(message, file, line, col, err){
    var error_location = file+':'+line+':'+col;
    if (typeof message=='object')
        message = message.toString();
    console.error('js error: '+error_location+'\n'+message);
    E.perr_once({
        id: (E.is_be() ? 'be_' : 'www_')+'js_err',
        info: JSON.stringify({file: error_location, msg: message,
	    href: location.href}),
        bt: (err&&err.stack)||'',
        filehead: 'userAgent: '+navigator.userAgent
    });
    if (prev_error_handler)
        prev_error_handler.apply(window, arguments);
};

})();
