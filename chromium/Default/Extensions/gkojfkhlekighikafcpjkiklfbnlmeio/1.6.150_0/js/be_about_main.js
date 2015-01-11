// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true, -W064*/
define(['jquery', 'be_backbone', 'be_browser', 'zerr', 'be_popup_lib',
    'be_util', 'be_locale', 'escape', 'etask', 'underscore', 'string',
    'storage', 'purl'],
    function($, be_backbone, B, zerr, be_popup_lib, be_util, T, zescape,
    etask, _, string, storage, purl){
var chrome = window.chrome, conf = window.conf, zconf = window.zon_config;
var E = new (be_backbone.model.extend())();

function ver_info(){
    var s = '';
    var $mailto;
    var build = be_util.build_info(), dev = dev_info();
    var $info = $('<div>'), $el = $('<div>').append($info);
    s += add_line(T('Version')+': ', be_util.version());
    if (build.server_version)
	s += add_line(T('Server')+': ', build.server_version);
    if (build.svc_version)
	s += add_line(T('Service')+': ', build.svc_version);
    if (build.app_version)
	s += add_line(T('App')+': ', build.app_version);
    if (build.app_uuid)
	s += add_line(T('App UUID')+': ', build.app_uuid);
    if (build.svc_mode)
    {
        var mode = build.svc_mode;
        if (build.svc_mode_pending)
            mode += ', pending: '+build.svc_mode_pending;
	s += add_line(T('Mode')+': ', mode);
    }
    if (build.nacl_status)
	s += add_line(T('NaCl status')+': ', build.nacl_status);
    if (build.product_type)
	s += add_line(T('Product')+': ', build.product_type);
    if (build.browser)
	s += add_line(T('Browser')+': ', build.browser);
    if (build.platform)
	s += add_line(T('Platform')+': ', build.platform);
    if (E.be_bg_main)
    {
	if (E.be_bg_main.get('svc.cid'))
	    s += add_line(T('CID')+': ', E.be_bg_main.get('svc.cid'));
	s += add_line(T('UUID')+': ', E.be_bg_main.get('uuid'));
    }
    if (dev)
        s += add_line('Dev info: ', dev);
    $('<div>').append($('<span>').text(T('Report a problem')+': '),
        $mailto = $('<a>', {href: zescape.mailto_url({
	to: 'help_be@hola.org',
        subject: 'Problem with Hola extension',
	body: '(Please include a brief explanation of the problem and '
	+'a screenshot if possible)\n\n'
	+'Information automatically generated about my problem:\n'+s})})
	.text('help_be@hola.org')
	.click(function(e){
            be_popup_lib.perr_err({id: 'be_report_problem',
                rate_limit: {count: 1}});
            if (chrome)
                return;
            e.preventDefault();
            var link = $(e.target).attr('href');
            /* for firefox open in new window which will offer to send with
             * gmail, yahoo, etc.. if no mail client present */
            window.open(link, '_blank', 'resizable');
        }))
    .appendTo($info);
    if (chrome)
    {
        /* workaround mailto links not working in chrome about */
        $mailto.attr('target', 'report_mailto_frame');
        $info.append($('<iframe>', {id: 'report_mailto_frame'}).hide());
    }
    return $el;

    function add_line(s, val){
	$('<div>').append($('<span>').text(s), $('<span>').text(val))
	.appendTo($info);
	return s+val+'\n';
    }
}

function dev_info(){
    try {
        var a = [];
        if (chrome && !chrome.runtime.getManifest().update_url)
            a.push('no update');
        if (chrome && !be_util.ext_type(chrome.runtime.id))
            a.push('unknown id');
        if (zconf._RELEASE_LEVEL!=2)
        {
            if (zconf._RELEASE_LEVEL==1)
                a.push('rel1');
            if (zconf.BUILDTYPE_DEBUG)
                a.push('debug');
            if (zconf.CONFIG_ZNETWORK)
                a.push(zconf.CONFIG_ZNETWORK+' network');
        }
        if (conf.arch)
            a.push(conf.arch);
        return a.join(',');
    } catch(ex){ zerr('dev_info %s', ex.stack||ex); }
    return '';
}

function parse_dev_cmds(){
    var qs;
    try { qs = $.url().data.param.query; } catch(e){ return; }
    _.each(qs, function(v, k){
        if (!string.startsWith(k, 'storage.'))
            return;
        k = k.substr(8); // 'storage.'.length
        if (v)
            storage.set(k, v);
        else
            storage.clr(k);
    });
}

function post_init(){
    window.RMT = E.R; // XXX amir: fix nicely
    zerr.notice('l.about inited');
    $('.content').append(ver_info());
    parse_dev_cmds();
}

E.init = function(){
    if (E.inited)
        return;
    E.inited = true;
    $(window).unload(function(){ E.uninit(); });
    B.init({context: null});
    etask([function bg_ping(){
        E.et = this;
        if (!B.use_msg)
            return this.egoto('got_bg');
        return etask.cb_apply(B.backbone.client, '.ping', ['be_bg_main', 500]);
    }, function(ret){
        if (!ret.error)
            return this.econtinue();
        zerr('l.popup ping bg failed %s', zerr.json(ret));
        return this.egoto('bg_ping');
    }, function got_bg(){
	zerr.notice('l.about got bg');
	E.be_bg_main = B.backbone.client.start('be_bg_main');
        if (B.use_msg)
            return wait_for(E.be_bg_main, '_backbone_client_started', true);
    }, function(){
        return wait_for(E.be_bg_main, 'inited', true);
    }, function(){
        if (!B.use_msg)
            return E.R = B.bg && B.bg.RMT;
        E.R = B.backbone.client.start('RMT');
        return wait_for(E.R, '_backbone_client_started', true, 500);
    }, function(){
        if (!B.use_msg)
            return;
        E.R.be_ext = B.backbone.client.start('be_ext');
        return wait_for(E.R.be_ext, '_backbone_client_started', true, 500);
    }, function(){
        if (!B.use_msg)
            return;
        E.R.be_mode = B.backbone.client.start('be_mode');
        return wait_for(E.R.be_mode, '_backbone_client_started', true, 500);
    }, function catch$(err){
        if (E.R && err=='timeout')
            return;
        throw err;
    }, function(){
        setTimeout(post_init);
    }, function catch$(err){
        zerr('be_about_main_init_err', err);
    }, function ensure$(){
        E.et = null;
    }]);
};

E.uninit = function(){
    if (!E.inited)
	return;
    E.inited = false;
    if (E.et)
        E.et.ereturn();
    B.backbone.client.stop('be_bg_main');
    B.backbone.client.stop('RMT');
    B._destroy();
    E.off();
    E.stopListening();
};

// XXX bahaa/arik: add to be_backbone?
function wait_for(obj, key, val, timeout){
    var l;
    return etask([function(){
        var _this = this;
        E.listen_to(obj, 'change:'+key, l = function(){
            if (obj.get(key)===val)
                _this.econtinue();
        });
        return this.wait(timeout);
    }, function ensure$(){
        E.stopListening(obj, 'change:'+key, l);
    }]);
}

return E; });
