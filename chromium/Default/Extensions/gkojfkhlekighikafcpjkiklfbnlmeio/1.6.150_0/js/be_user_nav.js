// LICENSE_CODE ZON
'use strict'; /*jslint browser:true, -W064*/
// XXX bahaa/alexk: use be_base.is_be() if available
var is_be = window.is_tpopup || top.be_test_page ||
    /^(chrome-extension|resource):\/\//.test(location.href);
var is_wbm = /^http:\/\/zserver-wbm/.test(location.href);
var requires = ['backbone', 'underscore', 'jquery', 'jquery_cookie', 'etask'];
if (is_be)
{
    requires = requires.concat(['be_locale', 'be_util', 'version_util',
        'be_ui_obj']);
}
else if (!is_wbm)
    requires = requires.concat(['localize']);
define(requires,
    function(Backbone, _, $, $cookie, etask, T, be_util, version_util,
     be_ui_obj){
var zopts = be_util && be_util.zopts;
var is_mp_ui = !window.is_tpopup && zopts && zopts.get('mp_ui');
if (is_wbm)
    T = function(s){ return s; };
var E = {};
var get_premium_html =
    '<li class="hidden-xs"><a href="https://hola.org/referral?ref=home" '
    +'class="navbar-link upgrade_to_premium user_link">'
    +T('Get Free Premium')+'</a></li>';
var sign_up_html =
    '<li><button type="button" class="btn btn-signup-trans navbar-btn" '
    +'id="sign_up">'+T('Sign up')+'</button></li>';

E.user_status = Backbone.Model.extend({
    initialize: function(){
        if ($.cookie('user'))
            return void this.update_from_cookie();
        this.refresh();
    },
    refresh: function(){
	var _this = this;
	etask('user_status_refresh', [function(){
	    return $.get('/users/get_user');
	}, function(){
            _this.update_from_cookie();
	}]);
    },
    update_from_cookie: function(){
        var cookie = JSON.parse($.cookie('user'));
        this.set('display_name', cookie.display_name);
        this.set('is_member', cookie.is_member);
        this.set('verified', cookie.verified);
        this.set('is_paid', cookie.is_paid);
    }
});

// Extension handles user status differently because it can't read hola.org
// cookies
E.be_user_status = Backbone.Model.extend({
    initialize: function(options){
        this.options = options||{};
        this.refresh();
    },
    refresh: function(){
	var _this = this;
        return $.ajax({url: 'https://hola.org/users/get_user',
            xhrFields: {withCredentials: true}})
       .done(function(res){ _this.update(res.user); });
    },
    update: function(user){
        var _this = this, is_member, be_premium = _this.options.be_premium;
        return etask([function(){
            if (!user)
            {
                _this.clear();
                return this.ereturn();
            }
            return be_premium ? be_premium.ecall('is_active') : null;
        }, function(_is_member){
            is_member = _is_member;
            return be_premium ? be_premium.ecall('is_paid') : null;
        }, function(is_paid){
            _this.set('display_name', user.displayName);
            _this.set('verified', user.verified);
            _this.set('is_member', is_member);
            _this.set('is_paid', is_paid);
        }]);
    }
});

E.user_links = Backbone.View.extend({
    tagName: 'ul',
    className: 'user-status nav navbar-nav navbar-right',
    login_link: function(){
        return $('<a class="user_link" id="sign_in"></a>')
            .text(T('Log in'))
            .attr('href', this.prot+'//'+this.domain+'/signin'
                +'?utm_source=holaext');
    }
});

/* XXX amir: create base object and move common www and be code to it */
E.www_user_links = E.user_links.extend({
    initialize: function(options){
        this.options = _.defaults(options||{}, {premium_link: false,
            my_settings: true, my_account_url: 'https://hola.org/my_account'});
        _.bindAll(this, 'logout');
        this.listenTo(this.model, 'change', this.render);
        this.prot = '';
        this.domain = options.domain||'hola.org';
        this.render();
    },
    get_logout_url: function(){
        var logout_url = this.domain=='luminati.io' ?
            '//luminati.io/lum/users/logout/inline' :
            '//hola.org/users/logout/inline';
        return this.prot+logout_url;
    },
    logout: function(event){
        event.preventDefault();
        return $.ajax({url: this.get_logout_url(), type: 'POST',
            xhrFields: {withCredentials: true}})
	.done(function(){ location.href = '/'; });
    },
    add_lang: function($ul){
        var lang_list, $a, $li;
        if (!this.options.lang_select ||
            version_util.version_cmp(be_util.version(), '1.2.672')<0)
        {
            return;
        }
        $li = $('<li>');
        $a = $('<a href="#">'+T('Language')+'</a>').click(function(e){
            e.preventDefault();
            e.stopPropagation();
            lang_list.toggle();
        }).appendTo($li);
        $ul.append($li);
        lang_list = new be_ui_obj.lang_list({label: $a});
        $('.l_ui_obj_lang_list').remove();
        $('body').append(lang_list.$el);
    },
    render: function(){
        var display_name = this.model.get('display_name');
        var is_member = this.model.get('is_member');
        var is_paid = this.model.get('is_paid');
        var $li, $ul, $dropdown;
        this.$el.empty();
        if (this.options.premium_link)
            this.$el.append(get_premium_html);
        if (!display_name)
        {
            $('<li>').append(this.login_link().addClass('navbar-link'))
            .appendTo(this.$el);
            this.$el.append(sign_up_html);
        }
        else
        {
            var name = display_name ? display_name : T('Account');
            /* XXX amir: find a better way to link to https pages */
            $dropdown = $('<li>'
                +'<a '+(display_name ? 'title="'+name+'" ' : "")
                +'class="dropdown-toggle navbar-link" '
                +'data-toggle="dropdown" href="#">'+name
                +' <span class="caret"></span></li>');
            $ul = $('<ul class="dropdown-menu pull-right" role="menu">')
            .appendTo($dropdown);
            if (display_name)
            {
                $ul.append('<li class="disabled"><a role="menuitem" '
                    +'tabindex="-1" '
                    +'href="#" style="cursor: context-menu;">'+
                    T('Account type')+': '+
                    (is_member ? T('Premium') : T('Free'))+'</li>');
                $ul.append('<li><a class="user_link" href="'
                    +this.options.my_account_url+'">'+T('My Account')
		    +'</a></li>');
            }
            else if (this.options.login)
                $('<li>').append(this.login_link()).appendTo($ul);
            if (this.options.my_settings)
            {
                $li = $('<li><a class="user_link">'+T('My Settings')
                    +'</a></li>').appendTo($ul);
                $li.find('a').attr('href', '//hola.org/access/my/settings');
                if (this.options.version_tooltip)
                    this.options.version_tooltip.append_to($li.find('a'));
            }
            if (this.options.upgrade)
            {
                $ul.append(!is_paid ? '<li><a class="user_link" '
                    +'href="https://hola.org/premium?'
                    +'ref=user_nav">Upgrade</a></li>' : '');
            }
            this.add_lang($ul);
            if (display_name)
            {
                if (!is_mp_ui)
                    $ul.append('<li class="divider"></li>');
                $('<li><a href="?" class="user_link" id=logout_lnk>'
                    +T('Log out')+'</a></li>').click(this.logout)
                .appendTo($ul);
            }
	    this.$el.append($dropdown);
            this.$('.upgrade_to_premium').css('visibility',
                is_member&&is_paid ? 'hidden' : 'visible');
        }
    }
});

E.be_user_links = E.user_links.extend({
    initialize: function(options){
        this.options = options||{};
        _.bindAll(this, 'logout');
        this.listenTo(this.model, 'change', this.render);
        this.prot = 'https:';
        this.domain = options.domain||'hola.org';
        if (version_util.version_cmp(be_util.version(), '1.2.672')>=0)
            this.$el.addClass('pull-right');
        this.render();
    },
    logout: function(event){
        var _this = this;
        event.preventDefault();
        return $.ajax({url: this.prot+'//hola.org/users/logout/inline',
            type: 'POST', xhrFields: {withCredentials: true}})
	.done(function(){ _this.model.refresh(); });
    },
    add_lang: function($ul){
        var lang_list, $a, $li;
        if (!this.options.lang_select ||
            version_util.version_cmp(be_util.version(), '1.2.672')<0)
        {
            return;
        }
        $li = $('<li>', {'class':
            'l_menuitem_lang popup-header-menu-item-lang'});
        $a = $('<a href="#">'+T('Language')+'</a>')
        .click(function(e){
            e.preventDefault();
            e.stopPropagation();
            lang_list.toggle();
        }).appendTo($li);
        $ul.append($li);
        lang_list = new be_ui_obj.lang_list({label: $a});
        $('.l_ui_obj_lang_list').remove();
        $('body').append(lang_list.$el);
    },
    render: function(){
        var display_name = this.model.get('display_name');
        var is_member = this.model.get('is_member');
        var is_paid = this.model.get('is_paid');
        var $li, $ul, $dropdown, _this = this;
        this.$el.empty();
        /* XXX amir: find a better way to link to https pages */
	var settings =
            version_util.version_cmp(be_util.version(), '1.2.715')>=0 ?
            '<span class="l_icon_settings"></span>' :
	    T('Settings')+' <span class="caret"></span>';
        $dropdown = $('<li class="dropdown">'
            +'<a '+(display_name ? 'title="'+T('Settings')+'" ' : "")
            +'class="dropdown-toggle" '
            +'data-toggle="dropdown" href="#">'+settings+'</a></li>');
        $ul = $('<ul id="popup_menu" class="dropdown-menu dropdown-menu-right"'
            +' role="menu">').appendTo($dropdown);
        if (display_name)
        {
            $ul.append('<li class="disabled"><a role="menuitem" '
                +'tabindex="-1" '
                +'href="#" style="cursor: context-menu;">'+display_name
                +'</li>');
            $ul.append('<li><a class="user_link" '
                +'href="https://hola.org/my_account?utm_source=holaext">'
                +T('My Account')+': '+(is_member ? T('Premium') : T('Free'))
                +'</li>');
        }
        else if (this.options.login)
            $('<li>').append(this.login_link()).appendTo($ul);
        $li = $('<li><a class="user_link">'+T('My Settings')+'</a></li>')
	.appendTo($ul);
        $li.find('a').click(function(e){
            e.preventDefault();
            _this.options.settings_handler();
        }).attr('href', '#');
        if (this.options.version_tooltip)
            this.options.version_tooltip.append_to($li.find('a'));
        this.add_lang($ul);
        if (version_util.version_cmp(be_util.version(), '1.2.661')>=0)
        {
            $('<li><a class="user_link" '
                +'href="#">'+T('About Hola')+'</a></li>').click(function(e){
                e.preventDefault();
                be_util.open_be_tab({url: 'be_about.html'});
            }).appendTo($ul);
        }
	if (this.options.upgrade)
        {
            $ul.append(!is_member ? '<li><a class="user_link" '
                +'href="https://hola.org/premium?'
                +'ref=be_user_nav&utm_source=holaext">'+T('Upgrade')
		+'</a></li>' : '');
        }
        if (display_name)
        {
            $ul.append('<li class="divider"></li>');
            $('<li><a href="?" class="user_link" id=logout_lnk>'
                +T('Log out')+'</a></li>').click(this.logout)
            .appendTo($ul);
        }
	this.$el.append($dropdown);
        this.$('.user_link').attr('target', '_blank');
	if (this.options.render_cb)
	    this.options.render_cb.call(this);
    }
});

var header_nav_button_html = [
    '<svg class="hamburger-top" height="100%" width="100%" ',
    'viewBox="0 0 20 20" style="display:none;">',
        '<path d="M 2.0338983,2.9661012 18.050847,2.8813562" />',
    '</svg>',
    '<svg class="hamburger-middle" height="100%" width="100%" ',
    'viewBox="0 0 20 20" style="display:none;">',
        '<path d="M 2.0338983,10 17.966102,10" />',
    '</svg>',
    '<svg class="hamburger-bottom" height="100%" width="100%" ',
    'viewBox="0 0 20 20" style="display:none;">',
        '<path d="M 2.0338983,17.118644 18.050847,17.033899" />',
    '</svg>'].join('');

E.new_skin_user_menu = E.be_user_links.extend({
    tagName: 'div',
    className: 'popup-header-controls-item dropdown',
    render: function(){
        var item_class = 'popup-header-menu-item';
        var display_name = this.model.get('display_name');
        var is_member = this.model.get('is_member');
        var is_paid = this.model.get('is_paid');
        var $li, $dropdown, _this = this;
        var $toggle = $('<i>', {'class': 'popup-header-controls-button '+
            'popup-header-nav'}).attr('title', T('Menu'))
        .html(header_nav_button_html)
        .click(function(){
            $('.lang_dropdown_toggle').parent().removeClass('open'); });
        var $ul = $('<ul>', {'class': 'popup-header-menu dropdown-menu',
            id: 'popup_menu'});
        if (is_mp_ui)
            $ul.addClass('popup-header-mp-menu');
        if (display_name)
        {
            $ul.append('<li class="disabled '+item_class+'-user">'
                +'<a role="menuitem" tabindex="-1" href="#">'
                +display_name+'</a></li>');
            if (!is_mp_ui)
            {
                $ul.append('<li><a class="user_link" '
                    +'href="https://hola.org/my_account?utm_source=holaext">'
                    +T('My Account')+': '+(is_member ? T('Premium') : T('Free'))
                    +'</a></li>');
            }
        }
        else if (this.options.login)
        {
            $('<li class="'+item_class+'-user">').append(this.login_link())
            .appendTo($ul);
        }
        this.add_lang($ul);
        $('<li class="'+item_class+'-help">'
            +'<a class="user_link" href="https://hola.org/faq?'
            +'ref=be_user_nav&utm_source=holaext">'
            +T('Help')+'</a></li>')
        .appendTo($ul);
        $li = $('<li><a>'+T('My Settings')+'</a></li>')
        .appendTo($ul);
        $li.click(function(e){
            e.preventDefault();
            _this.options.settings_handler();
        }).attr('href', '#');
        if (this.options.version_tooltip)
            this.options.version_tooltip.append_to($li.find('a'));
        if (version_util.version_cmp(be_util.version(), '1.2.661')>=0)
        {
            $('<li><a>'+T('About Hola')+'</a></li>').click(function(e){
                e.preventDefault();
                be_util.open_be_tab({url: 'be_about.html'});
            }).appendTo($ul);
        }
        if (this.options.upgrade)
        {
            $ul.append(!is_member ? '<li><a class="user_link" '
                +'href="https://hola.org/premium?'
                +'ref=be_user_nav&utm_source=holaext">'+T('Upgrade')
                +'</a></li>' : '');
        }
        if (display_name)
        {
            $ul.append('<li class="divider"></li>');
            $('<li><a>'+T('Log out')+'</a></li>').click(this.logout)
            .appendTo($ul);
        }
        $toggle.off('click').click(function(e){
            e.stopPropagation();
            _this.$el.toggleClass('open');
            if (_this.$el.hasClass('open'))
            {
                $toggle.addClass('hamburger-active');
                $('body').on('click.header-menu', function(e){
                    if (!is_mp_ui || !e || !e.target ||
                        !$(e.target).parents('.popup-header-menu').length)
                    {
                        $toggle.trigger('click');
                    }
                });
            }
            else
            {
                $toggle.removeClass('hamburger-active');
                $('body').off('click.header-menu');
            }
        });
        this.$el.empty().append($toggle, $ul);
        this.$('.user_link').attr('target', '_blank');
        if (this.options.render_cb)
            this.options.render_cb.call(this);
        if (is_mp_ui)
        {
            if (this.options.social_sharing)
            {
                $('<li>', {'class': item_class+'-social'})
                .append(this.options.social_sharing)
                .append($('<span>'+T('Share')+'</span>'))
                .appendTo($ul);
            }
            $ul.find('li').addClass(item_class);
        }
    }
});
// XXX alexeym: need to make this code more simple and more clear
// to make it possible change items order, etc
E.new_user_nav = function(opt){
    var user_status =
        new E.be_user_status({be_premium: opt.be_premium});
    var be_bg_main = window.popup_main&&window.popup_main.be_bg_main;
    var nav_class = 'new_skin_user_menu';
    var nav = new E[nav_class]({
        model: user_status,
        bext: true,
        upgrade: opt.upgrade,
        login: opt.login,
        lang_select: true,
        settings_handler: opt.settings_handler,
        social_sharing: opt.social_sharing,
	render_cb: _.debounce(function(){
	    if (!be_bg_main)
		return console.error('popup_main.be_bg_main is undefined');
	    var $ul = $('#popup_menu');
            if (!be_bg_main.get('is_svc'))
		return void $ul.find('.only_plugin').hide();
	    $ul.find('.only_plugin').show();
	    if ($ul.data('switch_rendered'))
		return;
	    $ul.data('switch_rendered', true);
	    var conf = window.conf;
            var item_class = 'popup-header-menu-item';
            if (!is_mp_ui)
                $ul.append('<li class="divider only_plugin"></li>');
            var proto_enabled = is_enabled('protocol');
            var $switch_icon = $('<i>').addClass('icon-switch');
            // XXX amir: acceleration is not tested and optimized in NaCl and
            // probably doesn't perform well due to slow I/O
            if (be_bg_main.get('svc.type')!='nacl')
            {
                var $accel = $('<li>', {'class': 'only_plugin '+item_class+
                    ' '+item_class+'-switch'})
                .append($('<a>')
                    .text(T('Accelerator is'))
                    .prepend($switch_icon)
                    .off('click').click(function(e){
                        e.preventDefault();
                        set_enabled('protocol', $accel, !proto_enabled);
                    }));
                var $social_item = $ul.find('.'+item_class+'-social');
                if ($social_item.length)
                    $accel.insertBefore($social_item);
                else
                    $accel.appendTo($ul);
                update_on_enabled_change('protocol', $accel);
            }
	    function get_class(is_enabled){
                return item_class+' '+item_class+'-switch'
                    +(is_enabled ? ' enabled' : '');
            }
	    function comp_url(comp){
		return {unblocker: conf.ipc+'unblocker_enable.json',
		    protocol: conf.ipc+'accel_enable.json'}[comp];
	    }
	    function set_enabled(comp, $elm, enable){
		$.post(comp_url(comp), {on: +!!enable})
		.always(function(){ on_enabled_change(comp, $elm); });
	    }
	    function is_enabled(comp){
                return be_bg_main.get('svc.'+comp+'_enabled'); }
            function on_enabled_change(comp, $elm){
                proto_enabled = is_enabled(comp);
                $elm.attr('class', get_class(proto_enabled))
                .attr('title', proto_enabled ? T('Turn off Accelerator') :
                    T('Turn on Accelerator'));
                $elm.find('.icon-switch')
                .toggleClass('icon-switch-on', proto_enabled)
                .text(proto_enabled ? T('On') :  T('Off'));
            }
	    function update_on_enabled_change(comp, $elm){
                nav.listenTo(be_bg_main, 'change:status.'+comp+'.enabled',
		    function(){ on_enabled_change(comp, $elm); });
                on_enabled_change(comp, $elm);
	    }
	})
    });
    if (be_bg_main)
        nav.listenTo(be_bg_main, 'change:is_svc', nav.render.bind(nav));
    return nav;
};
return E; });
