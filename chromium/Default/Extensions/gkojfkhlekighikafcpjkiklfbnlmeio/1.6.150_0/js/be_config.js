// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define([window.hola && window.hola.no_be_ver ? null : 'be_ver'],
    function(be_ver){
var chrome = window.chrome;
if (!window.conf || !window.zon_config)
{
    // XXX bahaa BACKWARD: old chrome versions
    var BG = chrome.extension.getBackgroundPage();
    window.conf = window.conf||BG.conf;
    window.zon_config = window.zon_config||BG.zon_config||BG;
}
var conf = window.conf, zconf = window.zon_config;
conf.url_perr = conf.url_perr||'https://perr.hola.org/client_cgi';
var is_local = require_is_local();
var E = {modules: {be_ver: {name: 'be_ver'}, be_config: {name: 'be_config'}}};

function require_is_local(){
    return !window.require_is_remote && is_local_url(location.href); }

function is_local_url(url){
    // startsWith('chrome-extension://') || startsWith('resource://')
    return !url.search(/(chrome-extension|resource|file):\/\//);
}

function extend(a, b){
    for (var prop in b)
	a[prop] = b[prop];
}

function get_paths(cdn, base_url, ver, alt_cdn){
    function c(){ return arguments[alt_cdn]; }
    var p = is_local ? {
	jquery: 'jquery.min',
        jquery_cookie: 'jquery.cookie.min',
	spin: 'spin.min',
	purl: 'purl',
	underscore: 'underscore.min',
	backbone: 'backbone.min',
	bootstrap: 'bootstrap',
	typeahead: 'typeahead'
    } : {
	jquery: c(cdn+'/jquery/1.11.1/jquery.min',
	    cdn+'{[MD5 /jquery.min.js]}'),
	jquery_cookie: c(cdn+'/jquery-cookie/1.4.0/jquery.cookie.min',
	    cdn+'{[MD5 /jquery.cookie.min.js]}'),
	spin: c(cdn+'/spin.js/1.2.7/spin.min',
	    cdn+'{[MD5 /spin.min.js]}'),
	purl: c(cdn+'/jquery-url-parser/2.2.1/purl.min',
	    cdn+'{[MD5 /purl.min.js]}'),
	underscore: c(cdn+'/underscore.js/1.4.4/underscore-min',
	    cdn+'{[MD5 /underscore-min.js]}'),
	backbone: c(cdn+'/backbone.js/1.0.0/backbone-min',
	    cdn+'{[MD5 /backbone-min.js]}'),
	bootstrap: c(cdn+'/twitter-bootstrap/3.1.1/js/bootstrap.min',
	    cdn+'{[MD5 /bootstrap.min.js]}'),
	typeahead: c(cdn+'/typeahead.js/0.10.2/typeahead.bundle.min',
	    cdn+'{[MD5 /typeahead.bundle.min.js]}')
    };
    if ('{[=1]}'!=='1')
        return {paths: p};
    var b = base_url;
    extend(p, {
        '/protocol/countries.js': b+'{[MD5 /protocol/countries.js]}',
        '/protocol/pac_engine.js': b+'{[MD5 /protocol/pac_engine.js]}',
        '/svc/account/membership.js': b+'{[MD5 /svc/account/membership.js]}',
        '/svc/util.js': b+'{[MD5 /svc/util.js]}',
        '/util/ajax.js': b+'{[MD5 /util/ajax.js]}',
        '/util/array.js': b+'{[MD5 /util/array.js]}',
        '/util/browser.js': b+'{[MD5 /util/browser.js]}',
        '/util/country.js': b+'{[MD5 /util/country.js]}',
        '/util/conv.js': b+'{[MD5 /util/conv.js]}',
        '/util/date.js': b+'{[MD5 /util/date.js]}',
        '/util/escape.js': b+'{[MD5 /util/escape.js]}',
        '/util/etask.js': b+'{[MD5 /util/etask.js]}',
        '/util/events.js': b+'{[MD5 /util/events.js]}',
        '/util/hash.js': b+'{[MD5 /util/hash.js]}',
        '/util/match.js': b+'{[MD5 /util/match.js]}',
        '/util/rand.js': b+'{[MD5 /util/rand.js]}',
        '/util/rate_limit.js': b+'{[MD5 /util/rate_limit.js]}',
        '/util/sample.js': b+'{[MD5 /util/sample.js]}',
        '/util/sprintf.js': b+'{[MD5 /util/sprintf.js]}',
        '/util/storage.js': b+'{[MD5 /util/storage.js]}',
        '/util/string.js': b+'{[MD5 /util/string.js]}',
        '/util/strftime.js': b+'{[MD5 /util/strftime.js]}',
        '/util/url.js': b+'{[MD5 /util/url.js]}',
        '/util/user_agent.js': b+'{[MD5 /util/user_agent.js]}',
        '/util/util.js': b+'{[MD5 /util/util.js]}',
        '/util/version_util.js': b+'{[MD5 /util/version_util.js]}',
        '/util/zerr.js': b+'{[MD5 /util/zerr.js]}',
        '/util/attrib.js': b+'{[MD5 /util/attrib.js]}',
        // XXX mark: old-style paths, WIP
        be_config: base_url+'/be_config.js?ver='+ver, // can't use MD5 here
        async: base_url+'{[MD5 /async.js]}',
        bdecode: base_url+'{[MD5 /bdecode.js]}',
        background: base_url+'{[MD5 /background.js]}',
        be_about: base_url+'{[MD5 /be_about.js]}',
        be_about_main: base_url+'{[MD5 /be_about_main.js]}',
        be_agent: base_url+'{[MD5 /be_agent.js]}',
        be_app: base_url+'{[MD5 /be_app.js]}',
        be_auto_rule: base_url+'{[MD5 /be_auto_rule.js]}',
        be_backbone: base_url+'{[MD5 /be_backbone.js]}',
        be_base: base_url+'{[MD5 /be_base.js]}',
        be_bg: base_url+'{[MD5 /be_bg.js]}',
        be_bg_main: base_url+'{[MD5 /be_bg_main.js]}',
        be_browser: base_url+'{[MD5 /be_browser.js]}',
        be_ccgi: base_url+'{[MD5 /be_ccgi.js]}',
        be_chrome: base_url+'{[MD5 /be_chrome.js]}',
        be_defines: base_url+'{[MD5 /be_defines.js]}',
        be_ext: base_url+'{[MD5 /be_ext.js]}',
        be_features: base_url+'{[MD5 /be_features.js]}',
        be_firefox: base_url+'{[MD5 /be_firefox.js]}',
        be_icon: base_url+'{[MD5 /be_icon.js]}',
        be_iframe: base_url+'{[MD5 /be_iframe.js]}',
        be_info: base_url+'{[MD5 /be_info.js]}',
        be_lib: base_url+'{[MD5 /be_lib.js]}',
        be_locale: base_url+'{[MD5 /be_locale.js]}',
        be_main: base_url+'{[MD5 /be_main.js]}',
        be_mp: base_url+'{[MD5 /be_mp.js]}',
        be_msg: base_url+'{[MD5 /be_msg.js]}',
        be_pac: base_url+'{[MD5 /be_pac.js]}',
        be_plugin: base_url+'{[MD5 /be_plugin.js]}',
        be_popup: base_url+'{[MD5 /be_popup.js]}',
        be_popup_lib: base_url+'{[MD5 /be_popup_lib.js]}',
        be_popup_main: base_url+'{[MD5 /be_popup_main.js]}',
        be_premium: base_url+'{[MD5 /be_premium.js]}',
        be_rmt: base_url+'{[MD5 /be_rmt.js]}',
        be_rmt_ext: base_url+'{[MD5 /be_rmt_ext.js]}',
        be_rule: base_url+'{[MD5 /be_rule.js]}',
        be_slave: base_url+'{[MD5 /be_slave.js]}',
        be_social: base_url+'{[MD5 /be_social.js]}',
        be_stream: base_url+'{[MD5 /be_stream.js]}',
        be_svc: base_url+'{[MD5 /be_svc.js]}',
        be_mode: base_url+'{[MD5 /be_mode.js]}',
        be_tabs: base_url+'{[MD5 /be_tabs.js]}',
        be_tab_unblocker: base_url+'{[MD5 /be_tab_unblocker.js]}',
        be_update: base_url+'{[MD5 /be_update.js]}',
        be_tpopup: base_url+'{[MD5 /be_tpopup.js]}',
        be_transport: base_url+'{[MD5 /be_transport.js]}',
        be_ui_obj: base_url+'{[MD5 /be_ui_obj.js]}',
        be_ui_popup: base_url+'{[MD5 /be_ui_popup.js]}',
        be_ui_popup_ext: base_url+'{[MD5 /be_ui_popup_ext.js]}',
        be_ui_vpn: base_url+'{[MD5 /be_ui_vpn.js]}',
        be_ui_mp: base_url+'{[MD5 /be_ui_mp.js]}',
        be_ui_accel: base_url+'{[MD5 /be_ui_accel.js]}',
        be_user_nav: base_url+'{[MD5 /be_user_nav.js]}',
        be_util: base_url+'{[MD5 /be_util.js]}',
        // be_ver should never be required from cdn
        be_ver: conf.url_bext+'/be_ver',
        be_vpn: base_url+'{[MD5 /be_vpn.js]}',
        be_vpn_util: base_url+'{[MD5 /be_vpn_util.js]}',
        be_rule_rating: base_url+'{[MD5 /be_rule_rating.js]}',
        be_zerr: base_url+'{[MD5 /be_zerr.js]}',
        cs_hola: base_url+'{[MD5 /cs_hola.js]}',
        ensure_login: base_url+'{[MD5 /ensure_login.js]}',
        experiment: base_url+'{[MD5 /experiment.js]}',
        ga: base_url+'{[MD5 /ga.js]}',
        jquery_ajax_ie: base_url+'{[MD5 /jquery_ajax_ie.js]}',
        popup: base_url+'{[MD5 /popup.js]}',
        torch_whitelist: base_url+'{[MD5 /torch_whitelist.js]}',
        search: base_url+'{[MD5 /search.js]}',
        sharing: base_url+'{[MD5 /sharing.js]}',
        wbm_flags: base_url+'{[MD5 /wbm_flags.js]}',
        zon_config: base_url+'{[MD5 /zon_config.js]}',
        zquery: base_url+'{[MD5 /zquery.js]}',
        'locale/be_af': base_url+'{[MD5 /locale/be_af.js]}',
        'locale/be_ar': base_url+'{[MD5 /locale/be_ar.js]}',
        'locale/be_az': base_url+'{[MD5 /locale/be_az.js]}',
        'locale/be_be': base_url+'{[MD5 /locale/be_be.js]}',
        'locale/be_bg': base_url+'{[MD5 /locale/be_bg.js]}',
        'locale/be_bn': base_url+'{[MD5 /locale/be_bn.js]}',
        'locale/be_bs': base_url+'{[MD5 /locale/be_bs.js]}',
        'locale/be_ca': base_url+'{[MD5 /locale/be_ca.js]}',
        'locale/be_cs': base_url+'{[MD5 /locale/be_cs.js]}',
        'locale/be_cy': base_url+'{[MD5 /locale/be_cy.js]}',
        'locale/be_da': base_url+'{[MD5 /locale/be_da.js]}',
        'locale/be_de': base_url+'{[MD5 /locale/be_de.js]}',
        'locale/be_el': base_url+'{[MD5 /locale/be_el.js]}',
        'locale/be_en': base_url+'{[MD5 /locale/be_en.js]}',
        'locale/be_es': base_url+'{[MD5 /locale/be_es.js]}',
        'locale/be_et': base_url+'{[MD5 /locale/be_et.js]}',
        'locale/be_eu': base_url+'{[MD5 /locale/be_eu.js]}',
        'locale/be_fa': base_url+'{[MD5 /locale/be_fa.js]}',
        'locale/be_fi': base_url+'{[MD5 /locale/be_fi.js]}',
        'locale/be_fr': base_url+'{[MD5 /locale/be_fr.js]}',
        'locale/be_ga': base_url+'{[MD5 /locale/be_ga.js]}',
        'locale/be_gl': base_url+'{[MD5 /locale/be_gl.js]}',
        'locale/be_gu': base_url+'{[MD5 /locale/be_gu.js]}',
        'locale/be_he': base_url+'{[MD5 /locale/be_he.js]}',
        'locale/be_hi': base_url+'{[MD5 /locale/be_hi.js]}',
        'locale/be_hr': base_url+'{[MD5 /locale/be_hr.js]}',
        'locale/be_ht': base_url+'{[MD5 /locale/be_ht.js]}',
        'locale/be_hu': base_url+'{[MD5 /locale/be_hu.js]}',
        'locale/be_hy': base_url+'{[MD5 /locale/be_hy.js]}',
        'locale/be_id': base_url+'{[MD5 /locale/be_id.js]}',
        'locale/be_is': base_url+'{[MD5 /locale/be_is.js]}',
        'locale/be_it': base_url+'{[MD5 /locale/be_it.js]}',
        'locale/be_ja': base_url+'{[MD5 /locale/be_ja.js]}',
        'locale/be_ka': base_url+'{[MD5 /locale/be_ka.js]}',
        'locale/be_km': base_url+'{[MD5 /locale/be_km.js]}',
        'locale/be_kn': base_url+'{[MD5 /locale/be_kn.js]}',
        'locale/be_ko': base_url+'{[MD5 /locale/be_ko.js]}',
        'locale/be_lt': base_url+'{[MD5 /locale/be_lt.js]}',
        'locale/be_lv': base_url+'{[MD5 /locale/be_lv.js]}',
        'locale/be_mk': base_url+'{[MD5 /locale/be_mk.js]}',
        'locale/be_mr': base_url+'{[MD5 /locale/be_mr.js]}',
        'locale/be_ms': base_url+'{[MD5 /locale/be_ms.js]}',
        'locale/be_mt': base_url+'{[MD5 /locale/be_mt.js]}',
        'locale/be_nl': base_url+'{[MD5 /locale/be_nl.js]}',
        'locale/be_no': base_url+'{[MD5 /locale/be_no.js]}',
        'locale/be_pl': base_url+'{[MD5 /locale/be_pl.js]}',
        'locale/be_pt_BR': base_url+'{[MD5 /locale/be_pt_BR.js]}',
        'locale/be_pt': base_url+'{[MD5 /locale/be_pt.js]}',
        'locale/be_ro': base_url+'{[MD5 /locale/be_ro.js]}',
        'locale/be_ru': base_url+'{[MD5 /locale/be_ru.js]}',
        'locale/be_sk': base_url+'{[MD5 /locale/be_sk.js]}',
        'locale/be_sl': base_url+'{[MD5 /locale/be_sl.js]}',
        'locale/be_sq': base_url+'{[MD5 /locale/be_sq.js]}',
        'locale/be_sr': base_url+'{[MD5 /locale/be_sr.js]}',
        'locale/be_sv': base_url+'{[MD5 /locale/be_sv.js]}',
        'locale/be_sw': base_url+'{[MD5 /locale/be_sw.js]}',
        'locale/be_ta': base_url+'{[MD5 /locale/be_ta.js]}',
        'locale/be_te': base_url+'{[MD5 /locale/be_te.js]}',
        'locale/be_th': base_url+'{[MD5 /locale/be_th.js]}',
        'locale/be_tl': base_url+'{[MD5 /locale/be_tl.js]}',
        'locale/be_tr': base_url+'{[MD5 /locale/be_tr.js]}',
        'locale/be_uk': base_url+'{[MD5 /locale/be_uk.js]}',
        'locale/be_ur': base_url+'{[MD5 /locale/be_ur.js]}',
        'locale/be_vi': base_url+'{[MD5 /locale/be_vi.js]}',
        'locale/be_zh_CN': base_url+'{[MD5 /locale/be_zh_CN.js]}',
        'locale/be_zh_TW': base_url+'{[MD5 /locale/be_zh_TW.js]}',
    });
    return {paths: p, map: {
        pcountries: '/protocol/countries.js',
        pac_engine: '/protocol/pac_engine.js',
        membership: '/svc/account/membership.js',
        svc_util: '/svc/util.js',
        ajax: '/util/ajax.js',
        array: '/util/array.js',
        browser: '/util/browser.js',
        country: '/util/country.js',
        conv: '/util/conv.js',
        date: '/util/date.js',
        escape: '/util/escape.js',
        etask: '/util/etask.js',
        events: '/util/events.js',
        hash: '/util/hash.js',
        rand: '/util/rand.js',
        rate_limit: '/util/rate_limit.js',
        sample: '/util/sample.js',
        sprintf: '/util/sprintf.js',
        storage: '/util/storage.js',
        string: '/util/string.js',
        url: '/util/url.js',
        user_agent: '/util/user_agent.js',
        util: '/util/util.js',
        version_util: '/util/version_util.js',
        zerr: '/util/zerr.js',
        attrib: '/util/attrib.js',
    }};
}

E.init = function(ver, country){
    if (E.inited)
        return console.error('be_config already inited');
    E.inited = true;
    require.onError = require_on_error;
    require.onResourceLoad = function(context, map, depArray){
        if (E.modules[map.name] && !{be_ver: 1, be_config: 1}[map.name])
        {
            console.error('module %s already loaded. id: %s, url: %s',
                map.name, map.id, map.url);
        }
        E.modules[map.name] = map;
    };
    E.ver = ver;
    var cdn_prefix = 'https://cdnjs.cloudflare.com/ajax/libs';
    var alt_cdn = 0;
    if (['CN', 'IQ', 'RU'].indexOf(country)!=-1)
    {
	cdn_prefix = 'https://holaalt-holanetworksltd.netdna-ssl.com';
	alt_cdn = 1;
    }
    var base_url = zconf._RELEASE ? conf.url_bext_cdn4||conf.url_bext :
        conf.url_bext;
    var require_config = get_paths(cdn_prefix, base_url, ver, alt_cdn);
    E.config = {
        enforceDefine: true,
        ver: ver,
	country: country,
	baseUrl: is_local ? '' : base_url,
	urlArgs: is_local ? 'ver='+ver : '',
	waitSeconds: is_local ? 0 : 20,
        paths: require_config.paths,
	shim: {
	    purl: {deps: ['jquery']},
	    jquery: {exports: '$'},
	    jquery_cookie: {deps: ['jquery']},
	    underscore: {exports: '_'},
	    backbone: {deps: ['jquery', 'underscore'], exports: 'Backbone'},
	    bootstrap: {deps: ['jquery'], exports: 'jQuery.fn.popover'},
	    typeahead: {deps: ['jquery'], exports: 'jQuery.fn.typeahead'},
	}
    };
    if (require_config.map)
        E.config.map = {'*': require_config.map};
    require.config(E.config);
};

E.no_undef = ['jquery', 'purl', 'spin', 'underscore', 'backbone',
    'conf', 'zon_config', 'be_bg_main', 'be_popup_main', 'bootstrap',
    'be_main', 'be_plugin'];
E.undef = function(){
    for (var m in E.modules)
    {
	var name = E.modules[m].name;
	if (E.no_undef.indexOf(name)!=-1)
	    continue;
	require.undef(name);
	delete E.modules[m];
    }
};

function perr(opt){
    if (window.be_bg_main && window.be_bg_main.be_lib &&
        window.be_bg_main.be_lib.perr_err)
    {
	return window.be_bg_main.be_lib.perr_err(opt);
    }
    if (window.be_popup_main && window.be_popup_main.be_popup_lib &&
        window.be_popup_main.be_popup_lib.perr_err)
    {
	return window.be_popup_main.be_popup_lib.perr_err(opt);
    }
    if (!window.hola || !window.hola.base)
        return;
    opt.bt = opt.err && opt.err.stack;
    delete opt.err;
    window.hola.base.perr(opt);
}

function require_on_error(err){
    err = err||{};
    var i, modules = err.requireModules;
    var id = require_is_local() ? 'be_int_require_err' : 'be_require_err';
    require_on_error.err = require_on_error.err||{};
    if (window.hola)
    {
	window.hola.err = window.hola.err||{};
	window.hola.err.require=(window.hola.err.require||0)+1;
    }
    if (!modules)
    {
	console.error('require fatal error '+err.stack);
        perr({id: id, info: 'no_modules '+err, err: err});
	return;
    }
    for (i=0; i<modules.length; i++)
    {
	var m = modules[i];
	var e = require_on_error.err[m] = require_on_error.err[m]||{failed: 0};
	e.failed++;
	// XXX arik/bahaa hack: rm ver/tpopup from here. need to send it in
	// build in all cases
	var info = m+'.js failed '+e.failed+' err '+err.requireType
	+(window.is_tpopup ? ' tpopup' : '')+' ver '+E.ver;
        var filehead = require.toUrl(m);
	switch (e.failed)
	{
	case 1:
	    perr({id: id, info: info, err: err, filehead: filehead});
	    require.undef(m);
	    require([m]);
	    break;
	case 2:
            if (m=='be_ver' || m=='be_config')
            {
		perr({id: id, info: info, err: err, filehead: filehead});
		require.undef(m);
		require([m]);
                break;
            }
            E.test_all(m, function(ret){
                if (ret)
                {
                    if (ret.url.status == '200 OK')
                        info += ' url_ok';
                    if (ret.cc_url.status == '200 OK')
                        info += ' cc_url_ok';
                    if (ret.ms_url.status == '200 OK')
                        info += ' ms_url_ok';
                    filehead = JSON.stringify(ret, null, '\t')+'\n';
                }
                perr({id: id, info: info, err: err, filehead: filehead});
                require.undef(m);
                require([m]);
            });
	    break;
	case 3:
            perr({id: id+'_fin', info: info, err: err, filehead: filehead});
	    break;
	default:
            perr({id: id, info: info+' too_many_retry', err: err,
		filehead: filehead});
	    break;
	}
    }
}

// XXX arik: WIP
E.test_url = function(url, done_cb, opt){
    opt = opt||{};
    console.log('testing '+url);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    if (opt.no_cache)
    {
        xhr.setRequestHeader('Cache-Control', 'no-cache');
        xhr.setRequestHeader('Pragma', 'no-cache');
        xhr.setRequestHeader('If-None-Match', '"-- bad etag --"');
        xhr.setRequestHeader('If-Modified-Since',
            'Thu Jan 01 1970 02:00:00 GMT');
    }
    var t0 = Date.now();
    // XXX arik: add timeout/ontimeout
    xhr.onreadystatechange = function(){
	var DONE = 4;
	if (xhr.readyState!=DONE)
	    return;
	var res = (xhr.responseText||'');
	done_cb(xhr, {url: url, status: xhr.status+' '+xhr.statusText,
	    duration: (Date.now()-t0)+'ms', responseType: xhr.responseType,
	    responseLen: res.length,
	    response: '0..64:\n'+res.substr(0, 64)+'\n-64..'+res.length+':'+
	        res.substr(-64)});
    };
    xhr.send();
};

// XXX arik todo: send results of
// - wget of m
// - wget of small png in microsoft cdn
// - wget of m with clear-cache
E.test_all = function(module, done_cb){
    var ms_url = '//www.microsoft.com/library/errorpages/Images/'+
	'Microsoft_logo.png';
    var url = E.config.paths[module];
    if (!url)
        return void done_cb();
    var ret = {};
    function check_return(){
	if (ret.url && ret.ms_url && ret.cc_url)
	    done_cb(ret);
    }
    E.test_url(url, function(xhr, e){
        ret.url = e;
        check_return();
    });
    E.test_url(url, function(xhr, e){
        ret.cc_url = e;
        check_return();
    }, {no_cache: true});
    E.test_url(ms_url, function(xhr, e){
	delete e.response;
        ret.ms_url = e;
	check_return();
    });
};

// XXX arik: WIP
function test_and_recover(m){
    // XXX arik: take urlArgs into account
    // consider to use only-if-cached
    var url = E.config.paths[m];
    console.log('test_and_recover '+m+' '+url);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    // XXX arik: timeout/ontimeout
    xhr.onreadystatechange = function(){
	var DONE = 4;
	if (xhr.readyState!=DONE)
	    return;
	console.log('status '+xhr.status);
	console.log('statusText '+xhr.statusText);
	console.log('responseType '+xhr.responseType);
	console.log('responseText len '+(xhr.responseText||'').length);
	console.log('responseText '+(xhr.responseText||'').substr(0, 128));
    };
    //xhr.setRequestHeader('cache-control', 'no-cache')
    xhr.send();
}

if (be_ver)
    E.init(be_ver.ver);

return E; });
