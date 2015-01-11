'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Джыбуці"},
    "JM": {message: "Ямайка"},
    "No, Thanks": {message: "Не, дзякуй"},
    "AT": {message: "Аўстрыя"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Хочаце Hola ў іншых прыладах? (Xbox, PS, Apple TV, iPhone ...). Націсніце тут"},
    "SZ": {message: "Свазіленд"},
    "BN": {message: "Бруней-Дарусалам"},
    "ZM": {message: "Замбія"},
    "app_desc": {message: "Сайты доступ да заблакаваным ў вашай краіне, кампаніі або школе з Hola! Hola з'яўляецца бясплатнай і просты ў выкарыстанні!"},
    "Need Help?": {message: "Патрэбна дапамога?"},
    "Improve translation": {message: "Паляпшэнне перакладу"},
    "Please enter a web site address, like facebook.com": {message: "Калі ласка, увядзіце адрас вэб-сайта, як facebook.com"},
    "Accessing $1 with Hola": {message: "Доступ $1 з Hola"},
    "Access $1 - cool site!": {message: "Доступ $1 - класны сайт!"},
    "Share $1 on $2": {message: "Дайце $1 на $2"},
    "SH": {message: "Святой Алены, Востраў"},
    "Talk to us on $1": {message: "Звяртайцеся да нас па $1"},
    "There seems to be an error": {message: "Там, здаецца, памылка"},
    "MA": {message: "Марока"},
    "SV": {message: "Сальвадор"},
    "MT": {message: "Мальта"},
    "Access cool sites": {message: "Доступу халаднавата сайты"},
    "MP": {message: "Паўночныя Марыянскія астравы"},
    "Don't show again for $1 for one week": {message: "Больш не паказваць за $1 на працягу аднаго тыдня"},
    "Support Hola": {message: "Падтрымка Hola"},
    "Downloading": {message: "Загрузка"},
    "Access any site from any country, free": {message: "Доступу да любога сайту з любой краіны, бясплатна"},
    "Try to <span>reload</span>": {message: "Паспрабуйце <span> перазагрузка </span>"},
    "UZ": {message: "Узбекістан"},
    "PW": {message: "Палаў"},
    "TK": {message: "Такелаў"},
    "LR": {message: "Ліберыя"},
    "Premium": {message: "Прэмія"},
    "Get Unlimited Unblocking": {message: "Атрымаць неабмежаваны разблакавання"},
    "Apply settings...": {message: "Прымяніць налады ..."},
    "TN": {message: "Туніс"},
    "EE": {message: "Эстонія"},
    "CK": {message: "Кука астравы"},
    "BY": {message: "Беларусь"},
    "NO": {message: "Нарвегія"},
    "KR": {message: "Паўднёвая Карэя"},
    "BF": {message: "Буркіна-Фасо"},
    "More countries": {message: "Усё больш краін"},
    "AM": {message: "Арменія"},
    "Top popular sites": {message: "Топ папулярных сайтаў"},
    "SR": {message: "Сурынам"},
    "MG": {message: "Мадагаскар"},
    "BT": {message: "Бутан"},
    "CF": {message: "Цэнтральна-Афрыканская Рэспубліка"},
    "BA": {message: "Боснія і Герцагавіна"},
    "AE": {message: "Аб'яднаныя Арабскія Эміраты"},
    "not working?": {message: "не працуе?"},
    "TH": {message: "Тайланд"},
    "Get Premium support": {message: "Атрымаць Прэміум падтрымку"},
    "$1 from $2": {message: "$1 ад $2"},
    "Author:": {message: "Аўтар:"},
    "CC": {message: "Какосавыя астравы"},
    "Browsing": {message: "Прагляд"},
    "Video": {message: "Відэа"},
    "Thank you!": {message: "Дзякуй!"},
    "NC": {message: "Новая Каледонія"},
    "Buffering?": {message: "Буферызацыя?"},
    "Enter site to access": {message: "Уваход на сайт для доступу"},
    "Go Hola Premium": {message: "Перайсці Hola Прэміум"},
    "Install Accelerator": {message: "Усталюйце Accelerator"},
    "sites that are censored": {message: "сайты, якія цэнзура"},
    "Get the Fastest Servers": {message: "Атрымаеце хуткі сервераў"},
    "TO": {message: "Тангійская"},
    "Server saved!": {message: "Сервер выратаваны!"},
    "Menu": {message: "Меню"},
    "SE": {message: "Швецыя"},
    "AZ": {message: "Азербайджан"},
    "Enjoy!": {message: "Атрымлівайце асалоду ад!"},
    "AF": {message: "Афганістан"},
    "Love Hola?": {message: "Каханне Hola?"},
    "NG": {message: "Нігерыя"},
    "KE": {message: "Кенія"},
    "BJ": {message: "Бенін"},
    "Turn on to get started": {message: "Уключыце, каб пачаць працу"},
    "OM": {message: "Аман"},
    "LK": {message: "Шры-Ланка"},
    "Please help us get better": {message: "Калі ласка, дапамажыце нам стаць лепш"},
    "ID": {message: "Інданезія"},
    "FM": {message: "Мікранезія"},
    "(some Hola features are not available on your version)": {message: "(Некаторыя Hola функцыі могуць быць недаступныя на вашым версія)"},
    "GM": {message: "Гамбія"},
    "$1 VPN Premium": {message: "$1 VPN Прэміум"},
    "Free": {message: "Бясплатна"},
    "LV": {message: "Латвія"},
    "Using Hola": {message: "Выкарыстанне Hola"},
    "Install": {message: "Ўсталёўваць"},
    "RU": {message: "Расія"},
    "Install Free Hola Accelerator": {message: "Ўсталяваць бясплатны Hola Accelerator"},
    "Working?": {message: "Праца?"},
    "FI": {message: "Фінляндыя"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Атрымаць Hola плюс для якіх-небудзь перабояў, AD-бясплатная паслуга."},
    "LU": {message: "Люксембург"},
    "VE": {message: "Венесуэла"},
    "Language": {message: "Мова"},
    "VI": {message: "Віргінскія астравы, ЗША"},
    "TV": {message: "Тувалу"},
    "SN": {message: "Сенегал"},
    "MX": {message: "Мексіка"},
    "IL": {message: "Ізраіль"},
    "more options...": {message: "больш опцый ..."},
    "Author site:": {message: "Аўтар сайта:"},
    "HU": {message: "Венгрыя"},
    "DO": {message: "Дамініканская Рэспубліка"},
    "KH": {message: "Камбоджа"},
    "TG": {message: "Тога"},
    "BB": {message: "Барбадас"},
    "No idle peers found.": {message: "Няма бяздзейныя баляў не знойдзена."},
    "DK": {message: "Данія"},
    "PA": {message: "Панама"},
    "QA": {message: "Катар"},
    "CV": {message: "Каба-Вердэ"},
    "Reload": {message: "Перазагружаць"},
    "GD": {message: "Грэнада"},
    "My favorites": {message: "Мае фаварыты"},
    "Number of users that use this option": {message: "Колькасць карыстальнікаў, выкарыстоўваць гэтую опцыю"},
    "MO": {message: "Макао, Кітай (САР)"},
    "HR": {message: "Харватыя"},
    "CZ": {message: "Чэхія"},
    "Check out Hola for $1!": {message: "Праверце Hola за $1!"},
    "Never be a peer": {message: "Ніколі не быць аднагодкаў"},
    "Log out": {message: "Выйсці"},
    "ST": {message: "Сан-Томэ і Прынсіпі"},
    "AU": {message: "Аўстралія"},
    "Get Hola for Android": {message: "Атрымаць Hola для Android"},
    "Select a Country": {message: "Абярыце краіну"},
    "Off": {message: "Выкл"},
    "IR": {message: "Іран, Ісламская Рэспубліка"},
    "Try another server": {message: "Паспрабуйце іншы сервер"},
    "Go": {message: "Перайсці"},
    "Did you experience any buffering?": {message: "Ці ўзнікалі ў вас якой-небудзь буферызацыі?"},
    "CG": {message: "Конга"},
    "More...": {message: "больш ..."},
    "Mode": {message: "Рэжым"},
    "BI": {message: "Бурундзі"},
    "GW": {message: "Гвінея-Бісаў"},
    "MK": {message: "Македонія, БЮР"},
    "GR": {message: "Грэцыя"},
    "AG": {message: "Антыгуа і Барбуда"},
    "AI": {message: "Ангуілля"},
    "Hey,\n\nI'm using": {message: "Эй,\n\nя выкарыстоўваю"},
    "AN": {message: "Нідэрландскія Антылы"},
    "Turn off Accelerator": {message: "Выключыце Accelerator"},
    "Get help from engineer over Skype:": {message: "Атрымаеце дапамогу ад інжынера па Skype:"},
    "Not working?": {message: "Не працуе?"},
    "UA": {message: "Украіна"},
    "EH": {message: "Заходняя Сахара"},
    "KN": {message: "Сэнт-Кітс і Нэвіс"},
    "SC": {message: "Сейшэльскія Астравы"},
    "Trying another peer...": {message: "Спроба іншы аднагодкаў ..."},
    " via ": {message: " праз "},
    "NL": {message: "Нідэрланды"},
    "MS": {message: "Монсэрат"},
    "EC": {message: "Эквадор"},
    "HK": {message: "Гон-Конг, Кітай (САР)"},
    "MY": {message: "Малайзія"},
    "CR": {message: "Коста-Рыка"},
    "not working? try another server": {message: "не працуе? паспрабуйце іншы сервер"},
    "VA": {message: "Ватыкан"},
    "IO": {message: "Брытанская тэрыторыя Індыйскага акіяну"},
    "SD": {message: "Судан"},
    "RS": {message: "Сербія"},
    "I just accessed a censored site using Hola for $1!": {message: "Я проста звярталіся цэнзуры сайт, выкарыстоўваючы Hola за $1!"},
    "Don't show again for any site for one week": {message: "Больш не паказваць для любога сайта на працягу аднаго тыдня"},
    "CN": {message: "Кітай"},
    "UY": {message: "Уругвай"},
    "PY": {message: "Парагвай"},
    "Video stuck?": {message: "Відэа затрымаўся?"},
    "MU": {message: "Маўрыкій"},
    "CH": {message: "Швейцарыя"},
    "LI": {message: "Ліхтэнштэйн"},
    "GH": {message: "Гана"},
    "KG": {message: "Кыргызстан"},
    "Be the first to get Hola for iPhone/iPad - Register now:": {message: "Будзьце першым, каб атрымаць Hola для IPhone/IPad - Зарэгіструйцеся зараз:"},
    "NU": {message: "Ніуэ"},
    "US": {message: "Злучаныя Штаты"},
    "PE": {message: "Перу"},
    "Stop Hola": {message: "Стоп Hola"},
    "SL": {message: "Сьера-Леонэ"},
    "FJ": {message: "Фіджы"},
    "Turn on Hola": {message: "Уключыце Hola"},
    "VPN Premium": {message: "VPN Прэміум"},
    "Submit": {message: "Прадстаўляць"},
    "Get Hola Premium": {message: "Атрымаць Hola Premium"},
    "We will be in touch with you soon": {message: "Мы будзем у кантакце з вамі ў бліжэйшы час"},
    "Choose<br>Country": {message: "Выбіраць <br> Краіна"},
    "Popular in $1": {message: "Папулярныя ў $1"},
    "Tell friends about $1": {message: "Раскажы сябрам аб $1"},
    "ER": {message: "Эрытрэя"},
    "IQ": {message: "Ірак"},
    "AS": {message: "Амерыканскае Самоа"},
    "TZ": {message: "Танзанія, Аб'яднаная Рэспубліка"},
    "Turn on Accelerator": {message: "Уключыце Accelerator"},
    "LY": {message: "Лівійская Арабская Джамахірыя"},
    "GT": {message: "Гватэмала"},
    "BM": {message: "Бермудскія астравы"},
    "BV": {message: "Бувэ востраў"},
    "LT": {message: "Літва"},
    "SG": {message: "Сінгапур"},
    "Did it work?": {message: "Гэта спрацавала?"},
    "Initializing...": {message: "Ініцыялізацыя ..."},
    "TT": {message: "Трынідад і Табага"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola не вельмі добра працуе ў рэжыме Windows 8. Пераключыцеся на рэжым працоўнага стала. Націсніце <a> тут </a> Інструкцыі"},
    "SY": {message: "Сірыйская Арабская Рэспубліка"},
    "SK": {message: "Славакія"},
    "Help": {message: "Дапамажыце"},
    "About Hola": {message: "Аб Hola"},
    "GL": {message: "Грэнландыя"},
    "Invite friends - free Premium.": {message: "Запрасіць сяброў - бясплатны Premium."},
    "PG": {message: "Папуа-Новая Гвінея"},
    "Account": {message: "Кошт"},
    "KI": {message: "Кірыбаці"},
    "CD": {message: "Конга, Дэмакратычная Рэспубліка"},
    "AO": {message: "Ангола"},
    "BW": {message: "Батсвана"},
    "Finding peers...": {message: "Пошук аднагодкаў ..."},
    "ZW": {message: "Зімбабвэ"},
    "VC": {message: "Сэнт-Вінсэнт і Грэнадыны"},
    "cool sites": {message: "класныя сайты"},
    "Access $1?": {message: "Доступ $1?"},
    "JP": {message: "Японія"},
    "NA": {message: "Намібія"},
    "Sign up": {message: "Зарэгістравацца"},
    "TJ": {message: "Таджыкістан"},
    "Make your Internet better with $1": {message: "Зрабіце ваш Інтэрнэт лепш з $1"},
    "LC": {message: "Сэнт-Люсія"},
    "Invite friends. Get Premium.": {message: "Запрасіць сяброў. Атрымаць Premium."},
    "Try again": {message: "Паспрабуйце яшчэ раз"},
    "VU": {message: "Вануату"},
    "MN": {message: "Манголія"},
    "Hola site list": {message: "Спіс Hola сайце"},
    "IT": {message: "Італія"},
    "RE": {message: "Рэюньён"},
    "WS": {message: "Самоа (Заходняе)"},
    "Yes": {message: "Ды"},
    "Enable": {message: "Ўключыць"},
    "Loading": {message: "Загрузка"},
    "EG": {message: "Егіпет"},
    "FR": {message: "Францыя"},
    "start": {message: "пачатак"},
    "Changing country...": {message: "Змена краіну ..."},
    "RW": {message: "Руанда"},
    "BE": {message: "Бельгія"},
    "Popular in the world": {message: "Папулярныя ў свеце"},
    "Accelerator": {message: "Паскаральнік"},
    "Enter your email": {message: "Калі ласка, увядзіце адрас электроннай пошты"},
    "LS": {message: "Лесота"},
    "SA": {message: "Саудаўская Аравія"},
    "No": {message: "Няма"},
    "ZA": {message: "Паўднёва-Афрыканская Рэспубліка"},
    "PT": {message: "Партугалія"},
    "CA": {message: "Канада"},
    "Account type": {message: "Тып рахунку"},
    "Starting...": {message: "Starting ..."},
    "Loading site...": {message: "Загрузка"},
    "CM": {message: "Камерун"},
    "I did not experience any buffering": {message: "Я не адчуваў ніякіх буферызацыі"},
    "Solve buffering problems with": {message: "Рашэнне праблем буферызацыі з"},
    "NP": {message: "Непал"},
    "My Account": {message: "Мой рахунак"},
    "PL": {message: "Польшча"},
    "Solves it": {message: "Вырашае яе"},
    "Start Hola": {message: "пачатак"},
    "GA": {message: "Габон"},
    "TM": {message: "Туркменістан"},
    "No, fix it": {message: "Не, гэта выправіць"},
    "Turn off Hola": {message: "Выключыце Hola"},
    "KY": {message: "Кайманавы астравы"},
    "LA": {message: "Лаоская Народна-Дэмакратычная Рэспубліка"},
    "Please enter a valid email address.": {message: "Калі ласка, увядзіце дзеючы адрас электроннай пошты."},
    "PH": {message: "Філіпіны"},
    "Buffering problems?": {message: "Праблемы буферызацыі?"},
    "NI": {message: "Нікарагуа"},
    "TF": {message: "Французскія Паўднёвыя тэрыторыі"},
    "KZ": {message: "Казахстан"},
    "Report a problem": {message: "Паведаміць аб праблеме"},
    "SJ": {message: "Свальбард (Паўночна-Усходняя Зямля) і Ян-Маен"},
    "Working!": {message: "Работа!"},
    "MM": {message: "М'янма"},
    "NR": {message: "Науру"},
    "DM": {message: "Дамініка"},
    "NE": {message: "Нігер"},
    "AD": {message: "Андора"},
    "MR": {message: "Маўрытанія"},
    "Get access to censored sites, try it now: $1": {message: "Атрымаць доступ да цэнзуры сайтаў, паспрабуйце зараз: $1"},
    "changing...": {message: "мяняецца ..."},
    "GS": {message: "Паўднёвая Джорджыя і Паўднёвыя Сандвічавы астравы"},
    "Access more sites": {message: "Доступу больш сайтаў"},
    "ME": {message: "Чарнагорыя"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Вельмі старая версія Chrome, <a> абнаўленне </a> Chrome выкарыстоўваць Hola"},
    "AX": {message: "Аландскія астравы"},
    "VN": {message: "В'етнам"},
    "VG": {message: "Віргінскія астравы"},
    "I can now access $1 from any country!": {message: "Цяпер я магу адкрыць $1 з любой краіны!"},
    "YE": {message: "Емен"},
    "DZ": {message: "Алжыр"},
    "Hola cannot work because another extension is controlling your proxy settings.": {message: "Hola не можа працаваць, таму што іншы пашырэнне кантролю наладжвання проксі-сервера."},
    "Testing connection...": {message: "Тэставанне злучэння ..."},
    "GE": {message: "Грузія"},
    "CX": {message: "Калядаў востраў"},
    "My Settings": {message: "Мае налады"},
    "LB": {message: "Ліван"},
    "Cool site!": {message: "Прахладны сайт!"},
    "FK": {message: "Фолклэндскія астравы"},
    "Never ask me again": {message: "Ніколі не пытацца"},
    "Enable Hola Accelerator": {message: "Ўключыць Hola Accelerator"},
    "Try it": {message: "Паспрабуйце"},
    "DE": {message: "Германія"},
    "Back to $1": {message: "Вярнуцца да $1"},
    "MV": {message: "Мальдыўскія Астравы"},
    "even more...": {message: "яшчэ больш ..."},
    "BH": {message: "Бахрэйн"},
    "GI": {message: "Гібралтар"},
    "WF": {message: "Уоліс і Футуна"},
    "RO": {message: "Румынія"},
    "$1 via Hola": {message: "$1 з дапамогай Hola"},
    "IN": {message: "Індыя"},
    "GP": {message: "Гвадэлупа"},
    "AR": {message: "Аргенціна"},
    "Configuring...": {message: "Налада ..."},
    "AW": {message: "Аруба"},
    "MC": {message: "Манака"},
    "HN": {message: "Гандурас"},
    "BR": {message: "Бразілія"},
    "Get Free Premium": {message: "Атрымаць Бясплатна Premium"},
    "SB": {message: "Саламонавы Астравы"},
    "Translate to your language": {message: "Перавесці на ваш мову"},
    "PS": {message: "Палестынскія тэрыторыі"},
    "NZ": {message: "Новая Зеландыя"},
    "working? remember": {message: "працуе? запомніць"},
    "UG": {message: "Уганда"},
    "From": {message: "Ад"},
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {message: "Калі ласка, адключыце іншыя <a>пашырэння</a>, што вы думаеце, можа кантраляваць налады проксі-сервера, такія як пекла-блокаторы, іншыя паслугі VPN і г.д."},
    "GB": {message: "Велікабрытанія"},
    "I'm using $1 to view $2 in my country, and surf faster!": {message: "Я выкарыстоўваю $1, каб праглядаць $2 у маёй краіне, і падарожнічаць хутчэй!"},
    "On": {message: "На"},
    "More sites...": {message: "больш ..."},
    "HT": {message: "Гаіці"},
    "GF": {message: "Французская Гвіяна"},
    "ZZ": {message: "Невядомы рэгіён"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Старая версія Firefox. Прэс <a>тут</a> для абнаўлення."},
    "KM": {message: "Каморскія Астравы"},
    "Oh, yes!": {message: "О, так!"},
    "KW": {message: "Кувейт"},
    "TC": {message: "Тэркс і Кайкас астравы"},
    "MQ": {message: "Марцініка"},
    "$1 Buffering?": {message: "Буферызацыі $1?"},
    "MZ": {message: "Мазамбік"},
    "ES": {message: "Іспанія"},
    "BO": {message: "Балівія"},
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {message: "$1 Hola атрымаць доступ да $2 Націсніце тут, каб зрабіць тое ж самае: $3 Ён ўсталёўвае Hola, які дазваляе мне падарожнічаць па Інтэрнэце хутчэй і доступ да $4 $5"},
    "AL": {message: "Албанія"},
    "Using": {message: "Выкарыстанне"},
    "Share $1 via $2": {message: "Дайце $1 з дапамогай $2"},
    "TR": {message: "Турцыя"},
    "MD": {message: "Малдова"},
    "GN": {message: "Гвінея"},
    "SI": {message: "Славенія"},
    "CO": {message: "Калумбія"},
    "Settings": {message: "Налады"},
    "AQ": {message: "Антарктыка"},
    "Hola Accelerator": {message: "Hola акселератара"},
    "Stopping peer routing...": {message: "Прыпынак аднагодкаў маршрутызацыю ..."},
    "Hola is not available right now, but we are working on it.": {message: "Hola не даступная прама цяпер, але мы працуем над гэтым."},
    "JO": {message: "Іарданія"},
    "Awesome!": {message: "Цудоўна!"},
    "Solve buffering": {message: "Вырашыце буферызацыі"},
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {message: "Вам неабходна абнавіць да апошняй версіі оперы выкарыстоўваць Hola. Націсніце <a>тут</a> , каб абнавіць."},
    "CL": {message: "Чылі"},
    "CU": {message: "Куба"},
    "ML": {message: "Малі"},
    "Get 24/7 Unblocking": {message: "Атрымаць 24/7 разблакавання"},
    "ET": {message: "Эфіопія"},
    "IS": {message: "Ісландыя"},
    "Reload Hola": {message: "Абнавіць Hola"},
    "Popular sites": {message: "Папулярныя сайты"},
    "back to": {message: "вярнуўся да"},
    "Connecting...": {message: "Падлучэнне ..."},
    "Get Hola Accelerator": {message: "Атрымаць Hola Accelerator"},
    "MH": {message: "Маршалавы Астравы"},
    "BG": {message: "Балгарыя"},
    "Log in": {message: "Увайсці"},
    "BS": {message: "Багамскія Астравы"},
    "Check your Internet connection": {message: "Пераканайцеся, у вас ёсць інтэрнэт"},
    "TL": {message: "Усходні Тымор"},
    "Upgrade": {message: "Абнаўленне"},
    "BZ": {message: "Беліз"},
    "CY": {message: "Кіпр"},
    "Hola is off, click it to turn it on": {message: "Hola выключаны, націсніце, каб уключыць"},
    "Finding new peers...": {message: "Пошук новых калегаў ..."},
    "IE": {message: "Ірландыя"},
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {message: "Прывітанне,\n\nя пачаў выкарыстоўваць $1 ($2). Гэта дазваляе мне падарожнічаць па Інтэрнэце хутчэй і доступ да $3 у маёй краіне."},
    "TW": {message: "Тайвань"},
    "KP": {message: "Паўночная Карэя"},
    "PF": {message: "Франузская Палінэзія"},
    "app_name": {message: "Hola Лепш Інтэрнэт"},
    "Remember server": {message: "Запомніць сервер"},
    "Update": {message: "Абнаўленне"},
    "MW": {message: "Малаві"},
    "GY": {message: "Гаяна"},
    "Unblocker is disabled": {message: "Unblocker адключаная"},
    "PK": {message: "Пакістан"},
    "GQ": {message: "Экватарыяльная Гвінея"},
    "Number of users that pressed not working": {message: "Колькасць карыстальнікаў, націснутая не працуе"},
    "NF": {message: "Норфалкскія астравы"},
    "TD": {message: "Чад"},
    "SO": {message: "Самалі"},
    "BD": {message: "Бангладэш"},
    "HM": {message: "Гэрда востраў і МакДоналда астравы"},

};
return E; });