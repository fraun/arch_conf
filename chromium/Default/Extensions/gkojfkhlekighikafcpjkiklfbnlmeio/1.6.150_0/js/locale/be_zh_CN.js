'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "吉布提"},
    "JM": {message: "牙买加"},
    "No, Thanks": {message: "不，谢谢"},
    "AT": {message: "奥地利"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "想在其他设备上使用Hola吗？ （Xbox，PS，Apple TV，iPhone 等等）。请点击这里"},
    "Unblocker?": {message: "Unblocker？"},
    "SZ": {message: "斯威士兰"},
    "YT": {message: "马约特"},
    "BN": {message: "文莱"},
    "ZM": {message: "赞比亚"},
    "app_desc": {message: "挡在你的国家，公司或学校，特力屋访问网站！ HOLA是免费的，易于使用的！"},
    "Need Help?": {message: "需要帮助吗？"},
    "Improve translation": {message: "提高翻译"},
    "Please enter a web site address, like facebook.com": {message: "请输入网站地址，如facebook.com"},
    "PR": {message: "波多黎各"},
    "Accessing $1 with Hola": {message: "访问$1与霍拉"},
    "Access $1 - cool site!": {message: "进入$1 - 很酷的网站！"},
    "Share $1 on $2": {message: "分享$1$2"},
    "SH": {message: "圣赫勒拿"},
    "Talk to us on $1": {message: "请告诉我们$1"},
    "There seems to be an error": {message: "可能发生了一个错误"},
    "MA": {message: "摩洛哥"},
    "SV": {message: "萨尔瓦多"},
    "MT": {message: "马耳他"},
    "Access cool sites": {message: "访问酷站"},
    "MP": {message: "北马里亚纳群岛"},
    "Don't show again for $1 for one week": {message: "不要再$1一个星期显示"},
    "Support Hola": {message: "支持特力屋"},
    "Downloading": {message: "下载"},
    "Access any site from any country, free": {message: "免费访问任何国家的任何网站"},
    "Try to <span>reload</span>": {message: "尝试<span>重载</span>"},
    "UZ": {message: "乌兹别克斯坦"},
    "PW": {message: "帕劳"},
    "TK": {message: "托克劳"},
    "LR": {message: "利比里亚"},
    "Premium": {message: "奖金"},
    "Get Unlimited Unblocking": {message: "获取无限解锁"},
    "Apply settings...": {message: "应用设置..."},
    "TN": {message: "突尼斯"},
    "EE": {message: "爱沙尼亚"},
    "CK": {message: "库克群岛"},
    "BY": {message: "白俄罗斯"},
    "NO": {message: "挪威"},
    "KR": {message: "韩国"},
    "BF": {message: "布基纳法索"},
    "More countries": {message: "更多国家"},
    "AM": {message: "亚美尼亚"},
    "Top popular sites": {message: "热门热门网站"},
    "SR": {message: "苏里南"},
    "MG": {message: "马达加斯加"},
    "BT": {message: "不丹"},
    "CF": {message: "中非共和国"},
    "BA": {message: "波斯尼亚和黑塞哥维那"},
    "AE": {message: "阿拉伯联合酋长国"},
    "not working?": {message: "不起作用？"},
    "TH": {message: "泰国"},
    "Get Premium support": {message: "获取高级支持"},
    "$1 from $2": {message: "$1$2"},
    "Author:": {message: "作者："},
    "CC": {message: "科科斯群岛"},
    "Browsing": {message: "浏览"},
    "Video": {message: "视频"},
    "Thank you!": {message: "谢谢！"},
    "NC": {message: "新喀里多尼亚"},
    "Buffering?": {message: "缓冲？"},
    "Enter site to access": {message: "进入网站访问"},
    "Go Hola Premium": {message: "转到特力屋溢价"},
    "Install Accelerator": {message: "安装加速器"},
    "sites that are censored": {message: "被审查的网站"},
    "Get the Fastest Servers": {message: "获得最快的服务器"},
    "TO": {message: "汤加"},
    "Server saved!": {message: "服务器保存！"},
    "Menu": {message: "菜单"},
    "SE": {message: "瑞典"},
    "AZ": {message: "阿塞拜疆"},
    "Enjoy!": {message: "尽情享受吧！"},
    "AF": {message: "阿富汗"},
    "Love Hola?": {message: "喜欢特力屋？"},
    "NG": {message: "尼日利亚"},
    "KE": {message: "肯尼亚"},
    "BJ": {message: "贝宁"},
    "Turn on to get started": {message: "开启后开始浏览"},
    "OM": {message: "阿曼"},
    "LK": {message: "斯里兰卡"},
    "Please help us get better": {message: "请帮助我们获得更好的"},
    "ID": {message: "印度尼西亚"},
    "FM": {message: "密克罗尼西亚联邦"},
    "(some Hola features are not available on your version)": {message: "（Hola的一些功能在您的版本中无法使用）"},
    "GM": {message: "冈比亚"},
    "$1 VPN Premium": {message: "$1VPN溢价"},
    "Free": {message: "免费"},
    "LV": {message: "拉脱维亚"},
    "Using Hola": {message: "使用特力屋"},
    "Install": {message: "安装"},
    "RU": {message: "俄罗斯"},
    "Install Free Hola Accelerator": {message: "安装免费特力屋加速器"},
    "Working?": {message: "工作？"},
    "FI": {message: "芬兰"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "获取Hola增强版，免除广告打扰的服务。"},
    "LU": {message: "卢森堡"},
    "VE": {message: "委内瑞拉"},
    "Language": {message: "语言"},
    "VI": {message: "美属维京群岛"},
    "TV": {message: "图瓦卢"},
    "SN": {message: "塞内加尔"},
    "MX": {message: "墨西哥"},
    "IL": {message: "以色列"},
    "GG": {message: "格恩西岛"},
    "more options...": {message: "更多选项..."},
    "Author site:": {message: "作者网站："},
    "HU": {message: "匈牙利"},
    "DO": {message: "多米尼加共和国"},
    "KH": {message: "柬埔寨"},
    "TG": {message: "多哥"},
    "BB": {message: "巴巴多斯"},
    "JE": {message: "泽西岛"},
    "No idle peers found.": {message: "没有空闲的同行发现。"},
    "DK": {message: "丹麦"},
    "PA": {message: "巴拿马"},
    "QA": {message: "卡塔尔"},
    "CV": {message: "佛得角"},
    "Reload": {message: "重载"},
    "GD": {message: "格林纳达"},
    "My favorites": {message: "我的收藏"},
    "Number of users that use this option": {message: "使用此选项的用户数"},
    "MO": {message: "中国澳门特别行政区"},
    "MF": {message: "圣马丁"},
    "HR": {message: "克罗地亚"},
    "CZ": {message: "捷克共和国"},
    "BL": {message: "圣巴泰勒米"},
    "Check out Hola for $1!": {message: "退房HOLA的$1！"},
    "Never be a peer": {message: "决不要对等"},
    "Log out": {message: "注销"},
    "ST": {message: "圣多美和普林西比"},
    "AU": {message: "澳大利亚"},
    "Get Hola for Android": {message: "找特力屋为Android"},
    "Select a Country": {message: "选择国家"},
    "Off": {message: "关"},
    "IR": {message: "伊朗"},
    "Try another server": {message: "请尝试在另一台服务器"},
    "Go": {message: "去"},
    "Did you experience any buffering?": {message: "你有没有遇到任何缓冲？"},
    "CG": {message: "刚果（布）"},
    "More...": {message: "更多..."},
    "Mode": {message: "模式"},
    "BI": {message: "布隆迪"},
    "GW": {message: "几内亚比绍"},
    "MK": {message: "马其顿"},
    "GR": {message: "希腊"},
    "AG": {message: "安提瓜和巴布达"},
    "AI": {message: "安圭拉"},
    "Hey,\n\nI'm using": {message: "嘿，\n\n我使用"},
    "AN": {message: "荷属安的列斯群岛"},
    "Turn off Accelerator": {message: "关闭加速器"},
    "Get help from engineer over Skype:": {message: "通过Skype获取帮助："},
    "Not working?": {message: "不工作？"},
    "UA": {message: "乌克兰"},
    "EH": {message: "西撒哈拉"},
    "KN": {message: "圣基茨和尼维斯"},
    "SC": {message: "塞舌尔群岛"},
    "Trying another peer...": {message: "尝试另一个对等..."},
    " via ": {message: "通过"},
    "NL": {message: "荷兰"},
    "MS": {message: "蒙塞拉特群岛"},
    "EC": {message: "厄瓜多尔"},
    "HK": {message: "中国香港特别行政区"},
    "MY": {message: "马来西亚"},
    "CR": {message: "哥斯达黎加"},
    "not working? try another server": {message: "不工作？尝试在另一台服务器"},
    "VA": {message: "梵蒂冈"},
    "IO": {message: "英属印度洋领地"},
    "SD": {message: "苏丹"},
    "RS": {message: "塞尔维亚"},
    "I just accessed a censored site using Hola for $1!": {message: "我刚刚访问使用HOLA的$1一个审查的网站！"},
    "Don't show again for any site for one week": {message: "不要再对任何网站一个星期显示"},
    "CN": {message: "中国"},
    "UY": {message: "乌拉圭"},
    "PY": {message: "巴拉圭"},
    "Video stuck?": {message: "视频卡？"},
    "MU": {message: "毛里求斯"},
    "CH": {message: "瑞士"},
    "LI": {message: "列支敦士登"},
    "GH": {message: "加纳"},
    "KG": {message: "吉尔吉斯斯坦"},
    "Be the first to get Hola for iPhone/iPad - Register now:": {message: "成为第一个获得特力屋为iPhone / iPad的 - 现在注册："},
    "NU": {message: "纽埃"},
    "US": {message: "美国"},
    "PE": {message: "秘鲁"},
    "Stop Hola": {message: "停止特力屋"},
    "SL": {message: "塞拉利昂"},
    "FJ": {message: "斐济"},
    "Turn on Hola": {message: "打开霍拉"},
    "VPN Premium": {message: "VPN的溢价"},
    "Submit": {message: "提交"},
    "Get Hola Premium": {message: "获取特力屋溢价"},
    "We will be in touch with you soon": {message: "我们将与您尽快联系"},
    "Choose<br>Country": {message: "选择<br>国家"},
    "Popular in $1": {message: "热门$1"},
    "Tell friends about $1": {message: "告诉朋友约$1"},
    "ER": {message: "厄立特里亚"},
    "IQ": {message: "伊拉克"},
    "AS": {message: "美属萨摩亚"},
    "TZ": {message: "坦桑尼亚"},
    "Turn on Accelerator": {message: "打开加速器"},
    "LY": {message: "利比亚"},
    "GT": {message: "危地马拉"},
    "BM": {message: "百慕大"},
    "BV": {message: "布维特岛"},
    "LT": {message: "立陶宛"},
    "SG": {message: "新加坡"},
    "PM": {message: "圣皮埃尔和密克隆"},
    "Did it work?": {message: "没有工作？"},
    "Initializing...": {message: "初始化..."},
    "TT": {message: "特立尼达和多巴哥"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola在Windows 8模式下不能顺利运行。请切换到桌面模式。点击<a>这里</a>查看说明"},
    "SY": {message: "叙利亚"},
    "SK": {message: "斯洛伐克"},
    "Help": {message: "帮助"},
    "About Hola": {message: "关于特力屋"},
    "GL": {message: "格陵兰"},
    "Invite friends - free Premium.": {message: "邀请朋友 - 自由付费。"},
    "PG": {message: "巴布亚新几内亚"},
    "Account": {message: "帐户"},
    "KI": {message: "基里巴斯"},
    "CD": {message: "刚果（金）"},
    "AO": {message: "安哥拉"},
    "BW": {message: "博茨瓦纳"},
    "Finding peers...": {message: "寻找同伴..."},
    "ZW": {message: "津巴布韦"},
    "VC": {message: "圣文森特和格林纳丁斯"},
    "cool sites": {message: "酷网站"},
    "Access $1?": {message: "访问$1？"},
    "JP": {message: "日本"},
    "NA": {message: "纳米比亚"},
    "Sign up": {message: "报名"},
    "TJ": {message: "塔吉克斯坦"},
    "Make your Internet better with $1": {message: "让你的互联网更好的$1"},
    "LC": {message: "圣卢西亚"},
    "Invite friends. Get Premium.": {message: "邀请朋友。获取溢价。"},
    "Try again": {message: "再试一次"},
    "VU": {message: "瓦努阿图"},
    "MN": {message: "蒙古"},
    "Hola site list": {message: "Hola网站列表"},
    "IT": {message: "意大利"},
    "RE": {message: "留尼汪"},
    "WS": {message: "萨摩亚"},
    "Yes": {message: "是的"},
    "Enable": {message: "启用"},
    "Loading": {message: "加载"},
    "EG": {message: "埃及"},
    "FR": {message: "法国"},
    "start": {message: "开始"},
    "Changing country...": {message: "改变国家..."},
    "RW": {message: "卢旺达"},
    "BE": {message: "比利时"},
    "UM": {message: "美国边远小岛"},
    "Popular in the world": {message: "红遍全球"},
    "Accelerator": {message: "加速器"},
    "Enter your email": {message: "输入您的电子邮件"},
    "LS": {message: "莱索托"},
    "SA": {message: "沙特阿拉伯"},
    "No": {message: "无"},
    "ZA": {message: "南非"},
    "PT": {message: "葡萄牙"},
    "$1 VPN": {message: "$1VPN"},
    "CA": {message: "加拿大"},
    "Account type": {message: "账户类型"},
    "Starting...": {message: "启动中..."},
    "Loading site...": {message: "加载"},
    "CM": {message: "喀麦隆"},
    "I did not experience any buffering": {message: "我没有遇到任何缓冲"},
    "Solve buffering problems with": {message: "解决缓冲问题"},
    "Hola": {message: "HOLA"},
    "NP": {message: "尼泊尔"},
    "My Account": {message: "我的账户"},
    "PL": {message: "波兰"},
    "Solves it": {message: "解决它"},
    "Start Hola": {message: "开始"},
    "GA": {message: "加蓬"},
    "TM": {message: "土库曼斯坦"},
    "Netflix": {message: "Netflix公司"},
    "No, fix it": {message: "不，解决它"},
    "Turn off Hola": {message: "关闭霍拉"},
    "KY": {message: "开曼群岛"},
    "LA": {message: "老挝人民民主共和国"},
    "Please enter a valid email address.": {message: "请输入有效的电子邮件地址。"},
    "PH": {message: "菲律宾"},
    "Buffering problems?": {message: "缓冲的问题？"},
    "NI": {message: "尼加拉瓜"},
    "GU": {message: "关岛"},
    "TF": {message: "法属南部领土"},
    "KZ": {message: "哈萨克斯坦"},
    "Report a problem": {message: "报告问题"},
    "SJ": {message: "斯瓦尔巴特和扬马延"},
    "MM": {message: "缅甸"},
    "Working!": {message: "工作！"},
    "NR": {message: "瑙鲁"},
    "NE": {message: "尼日尔"},
    "DM": {message: "多米尼加"},
    "MR": {message: "毛里塔尼亚"},
    "AD": {message: "安道尔"},
    "Get access to censored sites, try it now: $1": {message: "可以访问审查的网站，现在就来试试：$1"},
    "changing...": {message: "改变..."},
    "GS": {message: "南乔治亚岛和南桑威齐群岛"},
    "Access more sites": {message: "访问更多的网站"},
    "ME": {message: "黑山共和国"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Chrome版本过老，<a>更新</a>Chrome浏览器以使用Hola"},
    "AX": {message: "奥兰群岛"},
    "VN": {message: "越南"},
    "VG": {message: "英属维京群岛"},
    "I can now access $1 from any country!": {message: "我现在可以从任何国家进入$1！"},
    "YE": {message: "也门"},
    "CI": {message: "象牙海岸"},
    "DZ": {message: "阿尔及利亚"},
    "Hola cannot work because another extension is controlling your proxy settings.": {message: "HOLA不能工作，因为另一部分是控制您的代理设置。"},
    "Testing connection...": {message: "测试连接..."},
    "GE": {message: "格鲁吉亚"},
    "CX": {message: "圣诞岛"},
    "My Settings": {message: "我的设置"},
    "LB": {message: "黎巴嫩"},
    "Cool site!": {message: "很酷的网站！"},
    "FK": {message: "福克兰群岛"},
    "Never ask me again": {message: "永远不要再问我"},
    "Enable Hola Accelerator": {message: "使特力屋加速器"},
    "Try it": {message: "试试吧"},
    "DE": {message: "德国"},
    "Back to $1": {message: "返回到$1"},
    "MV": {message: "马尔代夫"},
    "even more...": {message: "更多..."},
    "PN": {message: "皮特凯恩"},
    "BH": {message: "巴林"},
    "GI": {message: "直布罗陀"},
    "WF": {message: "瓦利斯和富图纳"},
    "RO": {message: "罗马尼亚"},
    "$1 via Hola": {message: "通过特力屋$1"},
    "IN": {message: "印度"},
    "GP": {message: "瓜德罗普岛"},
    "AR": {message: "阿根廷"},
    "Configuring...": {message: "配置..."},
    "FO": {message: "法罗群岛"},
    "AW": {message: "阿鲁巴"},
    "CS": {message: "塞尔维亚和黑山"},
    "MC": {message: "摩纳哥"},
    "HN": {message: "洪都拉斯"},
    "BR": {message: "巴西"},
    "Get Free Premium": {message: "获取免费赠品"},
    "SB": {message: "所罗门群岛"},
    "Translate to your language": {message: "转换为您的语言"},
    "PS": {message: "巴勒斯坦领土"},
    "NZ": {message: "新西兰"},
    "working? remember": {message: "工作？记得"},
    "UG": {message: "乌干达"},
    "From": {message: "从"},
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {message: "请禁用您认为可能控制您的代理设置，如广告拦截，其他VPN服务等其他<a>扩展</a>"},
    "GB": {message: "英国"},
    "I'm using $1 to view $2 in my country, and surf faster!": {message: "我使用的是$1，查看$2在我的国家，上网速度更快！"},
    "On": {message: "开"},
    "More sites...": {message: "更多..."},
    "HT": {message: "海地"},
    "GF": {message: "法属圭亚那"},
    "ZZ": {message: "未知或无效地区"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "老版本的Firefox。按<a>这里</a>升级。"},
    "KM": {message: "科摩罗"},
    "Oh, yes!": {message: "哦，是的！"},
    "KW": {message: "科威特"},
    "TC": {message: "特克斯和凯科斯群岛"},
    "MQ": {message: "马提尼克群岛"},
    "$1 Buffering?": {message: "$1的缓冲？"},
    "MZ": {message: "莫桑比克"},
    "ES": {message: "西班牙"},
    "BO": {message: "玻利维亚"},
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {message: "$1HOLA的访问$2\n\n点击这里做同样：$3\n\n它安装HOLA的，这让我上网的速度更快，访问$4$5"},
    "AL": {message: "阿尔巴尼亚"},
    "Using": {message: "使用"},
    "Share $1 via $2": {message: "通过$2共享$1"},
    "TR": {message: "土耳其"},
    "MD": {message: "摩尔多瓦"},
    "GN": {message: "几内亚"},
    "SI": {message: "斯洛文尼亚"},
    "CO": {message: "哥伦比亚"},
    "Settings": {message: "设置"},
    "AQ": {message: "南极洲"},
    "Hola Accelerator": {message: "HOLA加速器"},
    "Stopping peer routing...": {message: "停止端路由..."},
    "Hola is not available right now, but we are working on it.": {message: "HOLA无法使用的权利，但我们正在努力。"},
    "JO": {message: "约旦"},
    "Awesome!": {message: "真棒！"},
    "SM": {message: "圣马力诺"},
    "Solve buffering": {message: "解决缓冲"},
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {message: "你需要升级到歌剧院的最新版本为使用特力屋。按<a>这里</a>升级。"},
    "CL": {message: "智利"},
    "CU": {message: "古巴"},
    "ML": {message: "马里"},
    "Get 24/7 Unblocking": {message: "获取24/7解锁"},
    "ET": {message: "埃塞俄比亚"},
    "IS": {message: "冰岛"},
    "Reload Hola": {message: "重载Hola"},
    "Popular sites": {message: "热门网站"},
    "back to": {message: "回到"},
    "Connecting...": {message: "连线中..."},
    "Get Hola Accelerator": {message: "获取特力屋加速器"},
    "MH": {message: "马绍尔群岛"},
    "BG": {message: "保加利亚"},
    "Log in": {message: "登录"},
    "BS": {message: "巴哈马"},
    "Check your Internet connection": {message: "检查您的互联网链接"},
    "TL": {message: "东帝汶"},
    "Upgrade": {message: "更新"},
    "BZ": {message: "伯利兹"},
    "CY": {message: "塞浦路斯"},
    "Hola is off, click it to turn it on": {message: "HOLA关闭，请点击开启"},
    "Finding new peers...": {message: "寻找新的同伴..."},
    "IM": {message: "曼岛"},
    "IE": {message: "爱尔兰"},
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {message: "嗨，\n\n我开始用$1（$2）。它让我在网上冲浪速度更快，访问$3在我的国家。"},
    "TW": {message: "台湾"},
    "KP": {message: "朝鲜"},
    "PF": {message: "法属波利尼西亚"},
    "app_name": {message: "Hola 更好的互联网"},
    "Remember server": {message: "记住服务器"},
    "Update": {message: "更新"},
    "MW": {message: "马拉维"},
    "GY": {message: "圭亚那"},
    "Unblocker is disabled": {message: "Unblocker被禁用"},
    "PK": {message: "巴基斯坦"},
    "GQ": {message: "赤道几内亚"},
    "Number of users that pressed not working": {message: "报告无法运行的用户数"},
    "NF": {message: "诺福克岛"},
    "TD": {message: "乍得"},
    "SO": {message: "索马里"},
    "BD": {message: "孟加拉国"},
    "HM": {message: "赫德与麦克唐纳群岛"},

};
return E; });