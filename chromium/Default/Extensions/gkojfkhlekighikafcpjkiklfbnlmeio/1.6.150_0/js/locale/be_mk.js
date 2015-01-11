'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Џибути"},
    "JM": {message: "Јамајка"},
    "No, Thanks": {message: "Не, благодарам"},
    "AT": {message: "Австрија"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Сакате Hola на други уреди? (Xbox, PS, Apple TV, iPhone-от ...). Кликни тука"},
    "SZ": {message: "Свазиленд"},
    "YT": {message: "Мајоте"},
    "BN": {message: "Брунеи"},
    "ZM": {message: "Замбија"},
    "app_desc": {message: "Пристап на веб-сајтови се блокирани во вашата земја, компанија или училиште со Hola! Hola е бесплатен и лесен за употреба!"},
    "Need Help?": {message: "Потребна ви е помош?"},
    "Improve translation": {message: "Подобрување на превод"},
    "Please enter a web site address, like facebook.com": {message: "Ве молиме внесете веб-сајт адреса, како facebook.com"},
    "PR": {message: "Порторико"},
    "Accessing $1 with Hola": {message: "Пристап до $1 со Hola"},
    "Access $1 - cool site!": {message: "Пристап $1 - кул сајт!"},
    "Share $1 on $2": {message: "Сподели $1 $2"},
    "SH": {message: "Света Елена"},
    "Talk to us on $1": {message: "Разговара со нас за $1"},
    "There seems to be an error": {message: "Се чини дека има грешка"},
    "MA": {message: "Мароко"},
    "SV": {message: "Ел Салвадор"},
    "MT": {message: "Малта"},
    "Access cool sites": {message: "Пристап кул сајтови"},
    "MP": {message: "Северни Маријанини Острови"},
    "Don't show again for $1 for one week": {message: "Не прикажувај повторно за $1 за една недела"},
    "Support Hola": {message: "Поддршка Hola"},
    "Downloading": {message: "Превземање"},
    "Access any site from any country, free": {message: "Пристапите на некој сајт од било која земја, бесплатно"},
    "Try to <span>reload</span>": {message: "Се обиде да <span> Вчитај ја страната повторно </span>"},
    "UZ": {message: "Узбекистан"},
    "PW": {message: "Палау"},
    "TK": {message: "Токелау"},
    "LR": {message: "Либерија"},
    "Premium": {message: "Премиум"},
    "Get Unlimited Unblocking": {message: "Земете Неограничен Деблокирање"},
    "Apply settings...": {message: "Применуваат поставувања ..."},
    "TN": {message: "Тунис"},
    "EE": {message: "Естонија"},
    "CK": {message: "Кукови Острови"},
    "BY": {message: "Белорусија"},
    "NO": {message: "Норвешка"},
    "KR": {message: "Јужна Кореја"},
    "BF": {message: "Буркина Фасо"},
    "More countries": {message: "Повеќе земји"},
    "AM": {message: "Ерменија"},
    "Top popular sites": {message: "Врвот популарни сајтови"},
    "SR": {message: "Суринам"},
    "MG": {message: "Мадагаскар"},
    "BT": {message: "Бутан"},
    "CF": {message: "Централна Африканска Република"},
    "BA": {message: "Босна и Херцеговина"},
    "AE": {message: "Обединети Арапски Емирати"},
    "not working?": {message: "не работи?"},
    "TH": {message: "Тајланд"},
    "Get Premium support": {message: "Добие Премиум поддршка"},
    "$1 from $2": {message: "$1 од $2"},
    "Author:": {message: "Автор:"},
    "CC": {message: "Кокосови острови"},
    "Browsing": {message: "Прелистување"},
    "Video": {message: "Видео"},
    "Thank you!": {message: "Ви благодарам!"},
    "NC": {message: "Нова Каледонија"},
    "Buffering?": {message: "Визуелниот?"},
    "Enter site to access": {message: "Внесете сајт за пристап"},
    "Go Hola Premium": {message: "Оди Hola Премиум"},
    "Install Accelerator": {message: "Инсталирајте Accelerator"},
    "sites that are censored": {message: "сајтови кои се цензурирани"},
    "Get the Fastest Servers": {message: "Добиете најбрзо сервери"},
    "TO": {message: "Тонга"},
    "Server saved!": {message: "Сервер зачувано!"},
    "Menu": {message: "Мени"},
    "SE": {message: "Шведска"},
    "AZ": {message: "Азербејџан"},
    "Enjoy!": {message: "Уживам во тоа!"},
    "AF": {message: "Авганистан"},
    "Love Hola?": {message: "Сакам Hola?"},
    "NG": {message: "Нигерија"},
    "KE": {message: "Кенија"},
    "BJ": {message: "Бенин"},
    "Turn on to get started": {message: "Вклучете го за да започнете"},
    "OM": {message: "Оман"},
    "LK": {message: "Шри Ланка"},
    "Please help us get better": {message: "Ве молиме да ни помогне да добиете подобра"},
    "ID": {message: "Индонезија"},
    "FM": {message: "Микронезија"},
    "(some Hola features are not available on your version)": {message: "(Некои Hola карактеристики не се достапни од вашата верзија)"},
    "GM": {message: "Гамбија"},
    "$1 VPN Premium": {message: "$1 VPN Премиум"},
    "Free": {message: "Бесплатно"},
    "LV": {message: "Латвија"},
    "Using Hola": {message: "Користење Hola"},
    "Install": {message: "Инсталирајте"},
    "RU": {message: "Русија"},
    "Install Free Hola Accelerator": {message: "Инсталирајте Слободен Hola Accelerator"},
    "Working?": {message: "Работи?"},
    "FI": {message: "Финска"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Добие Hola Плус за ОН ја прекина, ад-бесплатна услуга."},
    "LU": {message: "Луксембург"},
    "VE": {message: "Венецуела"},
    "Language": {message: "Јазик"},
    "VI": {message: "Девствени Острови на САД"},
    "TV": {message: "Тувалу"},
    "SN": {message: "Сенегал"},
    "MX": {message: "Мексико"},
    "IL": {message: "Израел"},
    "GG": {message: "Гвернзи"},
    "more options...": {message: "повеќе опции ..."},
    "Author site:": {message: "Авторот сајт:"},
    "HU": {message: "Унгарија"},
    "DO": {message: "Доминиканска Република"},
    "KH": {message: "Камбоџа"},
    "TG": {message: "Того"},
    "BB": {message: "Барбадос"},
    "JE": {message: "Џерси"},
    "No idle peers found.": {message: "Не неактивен врсници најде."},
    "DK": {message: "Данска"},
    "PA": {message: "Панама"},
    "QA": {message: "Катар"},
    "CV": {message: "Зеленортски Острови"},
    "Reload": {message: "Вчитај ја страната повторно"},
    "GD": {message: "Гренада"},
    "My favorites": {message: "Мои Омилени"},
    "Number of users that use this option": {message: "Бројот на корисници кои ја користите оваа опција"},
    "MO": {message: "Макао С.А.Р Кина"},
    "MF": {message: "Сент Мартин"},
    "HR": {message: "Хрватска"},
    "CZ": {message: "Чешка Република"},
    "BL": {message: "Сент Бартоломеј"},
    "Check out Hola for $1!": {message: "Проверете Hola за $1!"},
    "Never be a peer": {message: "Никогаш нема да биде колегијален"},
    "Log out": {message: "Одјавете се"},
    "ST": {message: "Сао Томе и Принчипе"},
    "AU": {message: "Австралија"},
    "Get Hola for Android": {message: "Добие Hola за Андроид"},
    "Select a Country": {message: "Изберете земја"},
    "Off": {message: "Исклучување"},
    "IR": {message: "Иран"},
    "Try another server": {message: "Обидете се со друго сервер"},
    "Go": {message: "Одат"},
    "Did you experience any buffering?": {message: "Дали имате било визуелниот?"},
    "CG": {message: "Конго"},
    "More...": {message: "повеќе..."},
    "Mode": {message: "Режим"},
    "BI": {message: "Бурунди"},
    "GW": {message: "Гвинеа-Биса"},
    "MK": {message: "Македонија"},
    "GR": {message: "Грција"},
    "AG": {message: "Антигва и Барбуда"},
    "AI": {message: "Ангвила"},
    "Hey,\n\nI'm using": {message: "Еј,\n\nјас сум со користење"},
    "AN": {message: "Холандски Антили"},
    "Turn off Accelerator": {message: "Исклучете Accelerator"},
    "Get help from engineer over Skype:": {message: "Добијат помош од инженер над Skype:"},
    "Not working?": {message: "Не работи?"},
    "UA": {message: "Украина"},
    "EH": {message: "Западна Сахара"},
    "KN": {message: "Сент Кристофер и Невис"},
    "SC": {message: "Сејшели"},
    "Trying another peer...": {message: "Се обидувам со друг пер..."},
    " via ": {message: "преку"},
    "NL": {message: "Холандија"},
    "MS": {message: "Монсерат"},
    "EC": {message: "Еквадор"},
    "HK": {message: "Хонг Конг С.А.Р Кина"},
    "MY": {message: "Малезија"},
    "CR": {message: "Костарика"},
    "not working? try another server": {message: "не работи? обидете се со друго сервер"},
    "VA": {message: "Ватикан"},
    "IO": {message: "Британско Индиско Океанска територија"},
    "SD": {message: "Судан"},
    "RS": {message: "Србија"},
    "I just accessed a censored site using Hola for $1!": {message: "Јас само се пристапи цензурирани сајт користење на Hola за $1!"},
    "Don't show again for any site for one week": {message: "Не прикажувај повторно за било кој сајт за една недела"},
    "CN": {message: "Кина"},
    "UY": {message: "Уругвај"},
    "PY": {message: "Парагвај"},
    "Video stuck?": {message: "Видео заглавени?"},
    "MU": {message: "Маурициус"},
    "CH": {message: "Швајцарија"},
    "LI": {message: "Лихтенштајн"},
    "GH": {message: "Гана"},
    "KG": {message: "Киргистан"},
    "Be the first to get Hola for iPhone/iPad - Register now:": {message: "Да биде прв да добие Hola за iPhone / iPad - Зачленете се сега:"},
    "NU": {message: "Ние"},
    "US": {message: "Соединети Американски Држави"},
    "PE": {message: "Перу"},
    "Stop Hola": {message: "Стоп Hola"},
    "SL": {message: "Сиера Леоне"},
    "FJ": {message: "Фиџи"},
    "Turn on Hola": {message: "Вклучување на Hola"},
    "VPN Premium": {message: "VPN Премиум"},
    "Submit": {message: "Прати"},
    "Get Hola Premium": {message: "Добие Hola Премиум"},
    "We will be in touch with you soon": {message: "Ние ќе бидеме во контакт со вас наскоро"},
    "Choose<br>Country": {message: "Изберете <br> Земја"},
    "Popular in $1": {message: "Популарни во $1"},
    "Tell friends about $1": {message: "Кажете пријатели за $1"},
    "ER": {message: "Еритреја"},
    "IQ": {message: "Ирак"},
    "AS": {message: "Американска Самоа"},
    "TZ": {message: "Танзанија"},
    "Turn on Accelerator": {message: "Вклучување на педалот за гас"},
    "LY": {message: "Либија"},
    "GT": {message: "Гватемала"},
    "BM": {message: "Бермуди"},
    "BV": {message: "Боувитови острови"},
    "LT": {message: "Литванија"},
    "SG": {message: "Сингапур"},
    "PM": {message: "Сент Пјер и Микелан"},
    "Did it work?": {message: "Дали работи?"},
    "Initializing...": {message: "Иницијализацијата ..."},
    "TT": {message: "Тринидад и Тобаго"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola не функционира добро во Windows 8 на владата. Ве молиме да се префрлат на десктоп режим. Кликнете <a> тука </a> за инструкции"},
    "SY": {message: "Сирија"},
    "SK": {message: "Словачка"},
    "Help": {message: "Помощ"},
    "About Hola": {message: "За Hola"},
    "GL": {message: "Гренланд"},
    "Invite friends - free Premium.": {message: "Покани пријатели - слободен Премиум."},
    "PG": {message: "Папуа Нова Гвинеја"},
    "Account": {message: "Сметка"},
    "KI": {message: "Кирибати"},
    "CD": {message: "Демократска Република Конго"},
    "AO": {message: "Ангола"},
    "BW": {message: "Боцвана"},
    "Finding peers...": {message: "Наоѓање врсници ..."},
    "ZW": {message: "Зимбабве"},
    "VC": {message: "Сент Винсент и Гренадините"},
    "cool sites": {message: "Кул сајтови"},
    "Access $1?": {message: "Пристап до $1?"},
    "JP": {message: "Јапонија"},
    "NA": {message: "Намибија"},
    "Sign up": {message: "Пријавете се"},
    "TJ": {message: "Таџикистан"},
    "Make your Internet better with $1": {message: "Направете вашиот Интернет подобро со $1"},
    "LC": {message: "Света Лучија"},
    "Invite friends. Get Premium.": {message: "Покани пријатели. Добие премија."},
    "Try again": {message: "Обидете се повторно"},
    "VU": {message: "Ванату"},
    "MN": {message: "Монголија"},
    "Hola site list": {message: "Hola сајт листа"},
    "IT": {message: "Италија"},
    "RE": {message: "Ријунион"},
    "WS": {message: "Самоа"},
    "Yes": {message: "Да"},
    "Enable": {message: "Овозможи"},
    "Loading": {message: "Вчитување"},
    "EG": {message: "Египет"},
    "FR": {message: "Франција"},
    "start": {message: "започне"},
    "Changing country...": {message: "Менување земја ..."},
    "RW": {message: "Руанда"},
    "BE": {message: "Белгија"},
    "UM": {message: "Американски територии во Пацификот"},
    "Popular in the world": {message: "Популарни во светот"},
    "Accelerator": {message: "Педалот за гас"},
    "Enter your email": {message: "Внесете вашата e-mail"},
    "LS": {message: "Лесото"},
    "SA": {message: "Саудиска Арабија"},
    "No": {message: "Нема"},
    "ZA": {message: "Јужна Африка"},
    "PT": {message: "Португалија"},
    "CA": {message: "Канада"},
    "Account type": {message: "Тип счета"},
    "Starting...": {message: "Со почеток..."},
    "Loading site...": {message: "Вчитување"},
    "CM": {message: "Камерун"},
    "I did not experience any buffering": {message: "Јас не искуство било визуелниот"},
    "Solve buffering problems with": {message: "Реши визуелниот проблеми со"},
    "NP": {message: "Непал"},
    "My Account": {message: "Моја сметка"},
    "PL": {message: "Полска"},
    "Solves it": {message: "Решава тоа"},
    "Start Hola": {message: "започне"},
    "GA": {message: "Габон"},
    "TM": {message: "Туркменистан"},
    "No, fix it": {message: "Не, тоа се поправи"},
    "Turn off Hola": {message: "Исклучете Hola"},
    "KY": {message: "Кајмански Острови"},
    "LA": {message: "Лаос"},
    "Please enter a valid email address.": {message: "Ве молиме внесете валидна е-мејл адреса."},
    "PH": {message: "Филипини"},
    "Buffering problems?": {message: "Визуелниот проблеми?"},
    "NI": {message: "Никарагва"},
    "GU": {message: "Гвам"},
    "TF": {message: "Француски Јужни територии"},
    "KZ": {message: "Казахстан"},
    "Report a problem": {message: "Пријавите проблем"},
    "SJ": {message: "Свалбард и Жан Мејен"},
    "Working!": {message: "Работа!"},
    "MM": {message: "Мјанмар"},
    "NR": {message: "Науру"},
    "NE": {message: "Нигер"},
    "DM": {message: "Доминика"},
    "MR": {message: "Мавританија"},
    "AD": {message: "Андора"},
    "Get access to censored sites, try it now: $1": {message: "Се добие пристап до цензурирани сајтови, пробајте го сега: $1"},
    "changing...": {message: "менување на ..."},
    "GS": {message: "Јужна Грузија и Јужни Сендвич Острови"},
    "Access more sites": {message: "Пристап повеќе сајтови"},
    "ME": {message: "Црна Гора"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Многу стара верзија на Chrome, <a> ажурирање </a> Хром да се користи Hola"},
    "AX": {message: "Аландски острови"},
    "VN": {message: "Виетнам"},
    "VG": {message: "Британски Девствени Острови"},
    "I can now access $1 from any country!": {message: "Јас сега може да пристапите $1 од било која земја!"},
    "YE": {message: "Јемен"},
    "CI": {message: "Брегот на Слоновата Коска"},
    "DZ": {message: "Алжир"},
    "Hola cannot work because another extension is controlling your proxy settings.": {message: "Hola не можат да работат, бидејќи друга екстензија е контролирање на вашиот поставувањата за прокси."},
    "Testing connection...": {message: "Тестирање врска ..."},
    "GE": {message: "Грузија"},
    "CX": {message: "Божиќни Острови"},
    "My Settings": {message: "Мои подесувања"},
    "LB": {message: "Либан"},
    "Cool site!": {message: "Кул сајт!"},
    "FK": {message: "Фолкландски Острови"},
    "Never ask me again": {message: "Никогаш не ме прашувај повторно"},
    "Enable Hola Accelerator": {message: "Овозможи Hola Accelerator"},
    "Try it": {message: "Пробајте го ова"},
    "DE": {message: "Германија"},
    "Back to $1": {message: "Назад до $1"},
    "MV": {message: "Малдиви"},
    "even more...": {message: "дури и повеќе ..."},
    "PN": {message: "Питкарн"},
    "BH": {message: "Бахреин"},
    "GI": {message: "Гибралтар"},
    "WF": {message: "Волис и Футуна острови"},
    "RO": {message: "Романија"},
    "$1 via Hola": {message: "$1 преку Hola"},
    "IN": {message: "Индија"},
    "GP": {message: "Гвадалупе"},
    "AR": {message: "Аргентина"},
    "Configuring...": {message: "Конфигурирање на ..."},
    "FO": {message: "Фарски Острови"},
    "AW": {message: "Аруба"},
    "CS": {message: "Србија и Црна Гора"},
    "MC": {message: "Монако"},
    "HN": {message: "Хондурас"},
    "BR": {message: "Бразил"},
    "Get Free Premium": {message: "Земете слободен Премиум"},
    "SB": {message: "Соломоновите Острови"},
    "Translate to your language": {message: "Преведете да јазик"},
    "PS": {message: "Палестинска Територија"},
    "NZ": {message: "Нов Зеланд"},
    "working? remember": {message: "работи? се сеќавам"},
    "UG": {message: "Уганда"},
    "From": {message: "Од"},
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {message: "Ве молиме оневозможи други <a>екстензии</a>, кој мислите дека би можеле да го контролираат вашиот поставувањата за прокси како ад-блокатори, други VPN услуги, итн"},
    "GB": {message: "Велика Британија"},
    "I'm using $1 to view $2 in my country, and surf faster!": {message: "Јас сум со користење $1 за да го видиш $2 во мојата земја, и сурфање побрзо!"},
    "On": {message: "За"},
    "More sites...": {message: "повеќе..."},
    "HT": {message: "Хаити"},
    "GF": {message: "Француска Гвајана"},
    "ZZ": {message: "Непознат регион"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Старата верзија на Firefox. Прес <a> тука </a> за да се надополни."},
    "KM": {message: "Коморос"},
    "Oh, yes!": {message: "О, да!"},
    "KW": {message: "Кувајт"},
    "TC": {message: "Турк и Каикос Острови"},
    "MQ": {message: "Мартиник"},
    "$1 Buffering?": {message: "$1 визуелниот?"},
    "MZ": {message: "Мозамбик"},
    "ES": {message: "Шпанија"},
    "BO": {message: "Боливија"},
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {message: "$1 Hola пристап до $2\n\nКликни тука за да го стори истото: $3\n\nСе инсталира Hola, која ми овозможува да сурфаат на интернет побрзо и пристап до $4$5"},
    "AL": {message: "Албанија"},
    "Using": {message: "Користење"},
    "Share $1 via $2": {message: "Сподели $1 по $2"},
    "TR": {message: "Турција"},
    "MD": {message: "Молдавија"},
    "GN": {message: "Гвинеја"},
    "SI": {message: "Словенија"},
    "CO": {message: "Колумбија"},
    "Settings": {message: "Подесувања"},
    "AQ": {message: "Антарктик"},
    "Hola Accelerator": {message: "Hola акцелератор"},
    "Stopping peer routing...": {message: "Запирање на пер рутирање..."},
    "Hola is not available right now, but we are working on it.": {message: "Hola не е достапна во моментов, но ние работиме на тоа."},
    "JO": {message: "Јордан"},
    "Awesome!": {message: "Страшно!"},
    "SM": {message: "Сан Марино"},
    "Solve buffering": {message: "Реши визуелниот"},
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {message: "Треба да се надополни со најновата верзија на Opera да се користи Hola. Притиснете <a>тука</a> за да се надополни."},
    "CL": {message: "Чиле"},
    "CU": {message: "Куба"},
    "ML": {message: "Мали"},
    "Get 24/7 Unblocking": {message: "Добиете 24/7 Деблокирање"},
    "ET": {message: "Етиопија"},
    "IS": {message: "Исланд"},
    "Reload Hola": {message: "Вчитај Hola"},
    "Popular sites": {message: "Популарни сајтови"},
    "back to": {message: "се врати до"},
    "Connecting...": {message: "Поврзување ..."},
    "Get Hola Accelerator": {message: "Добие Hola Accelerator"},
    "MH": {message: "Маршалови острови"},
    "BG": {message: "Бугарија"},
    "Log in": {message: "Пријавете се во системот"},
    "BS": {message: "Бахами"},
    "Check your Internet connection": {message: "Потврди имате интернет"},
    "TL": {message: "Источен Тимор"},
    "Upgrade": {message: "Ажурирање"},
    "BZ": {message: "Белизе"},
    "CY": {message: "Кипар"},
    "Hola is off, click it to turn it on": {message: "Hola е исклучен, притиснете за да го вклучите"},
    "Finding new peers...": {message: "Изнаоѓање на нови врсници ..."},
    "IM": {message: "Островот Ман"},
    "IE": {message: "Ирска"},
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {message: "Здраво,\n\nјас почнав со користење $1 ($2). Тоа ми овозможува да сурфаат на интернет побрзо и пристап до $3 во мојата земја."},
    "TW": {message: "Тајван"},
    "KP": {message: "Северна Кореја"},
    "PF": {message: "Француска Полинезија"},
    "app_name": {message: "Hola Подобро Интернет"},
    "Remember server": {message: "Се сеќавам сервер"},
    "Update": {message: "Ажурирање"},
    "MW": {message: "Малави"},
    "GY": {message: "Гвајана"},
    "Unblocker is disabled": {message: "Unblocker е исклучен"},
    "PK": {message: "Пакистан"},
    "GQ": {message: "Екваторска Гвинеја"},
    "Number of users that pressed not working": {message: "Бројот на корисници кои не притисне работат"},
    "NF": {message: "Нофролк Остров"},
    "TD": {message: "Чад"},
    "SO": {message: "Сомалија"},
    "BD": {message: "Бангладеш"},
    "HM": {message: "Хардови острови и Мекдоналд Острови"},

};
return E; });