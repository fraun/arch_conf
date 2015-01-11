'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Djiboeti"},
    "JM": {message: "Jamaika"},
    "No, Thanks": {message: "Nee, dankie"},
    "AT": {message: "Oostenryk"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Wil Hola op ander toestelle? (Xbox, PS, Apple TV, iPhone ...). Klik hier"},
    "Unblocker?": {message: "Ontstopper?"},
    "BN": {message: "Broenei"},
    "ZM": {message: "Zambië"},
    "app_desc": {message: "Toegang webtuistes geblokkeer in jou land, maatskappy of skool met Hola! Hola is gratis en maklik om te gebruik!"},
    "Need Help?": {message: "Hulp nodig?"},
    "Improve translation": {message: "Verbeter vertaling"},
    "Please enter a web site address, like facebook.com": {message: "Voer 'n webwerf adres, soos facebook.com"},
    "Accessing $1 with Hola": {message: "Toegang tot $1 met Hola"},
    "Access $1 - cool site!": {message: "Toegang $1 - koel site!"},
    "Share $1 on $2": {message: "Deel $1 by $2"},
    "Talk to us on $1": {message: "Praat met ons op $1"},
    "There seems to be an error": {message: "Daar blyk 'n probleem te wees"},
    "MA": {message: "Marokko"},
    "SV": {message: "Salvador"},
    "Access cool sites": {message: "Toegang koel webwerwe"},
    "Don't show again for $1 for one week": {message: "Moenie weer vir $1 vir een week wys"},
    "Unblocker": {message: "Ontstopper"},
    "Support Hola": {message: "Ondersteuning Hola"},
    "Downloading": {message: "Laai"},
    "Access any site from any country, free": {message: "Toegang tot enige perseel van enige land, gratis"},
    "Try to <span>reload</span>": {message: "Probeer om <span> herlaai </span>"},
    "UZ": {message: "Oesbekistan"},
    "LR": {message: "Liberië"},
    "Get Unlimited Unblocking": {message: "Kry Unlimited die gang"},
    "Apply settings...": {message: "Pas instellings ..."},
    "TN": {message: "Tunisië"},
    "EE": {message: "Estland"},
    "BY": {message: "Wit-Rusland"},
    "KR": {message: "Suid-Korea"},
    "NO": {message: "Noorweë"},
    "BF": {message: "Boerkina Fasso"},
    "More countries": {message: "Meer lande"},
    "AM": {message: "Armenië"},
    "Top popular sites": {message: "Top gewilde plekke"},
    "MG": {message: "Madagaskar"},
    "BT": {message: "Bhoetan"},
    "CF": {message: "Sentraal-Afrikaanse Republiek"},
    "BA": {message: "Bosnië en Herzegowina"},
    "AE": {message: "Verenigde Arabiese Emirate"},
    "not working?": {message: "nie werk nie?"},
    "Get Premium support": {message: "Kry Premium ondersteuning"},
    "$1 from $2": {message: "$1 van $2"},
    "Author:": {message: "Skrywer:"},
    "Browsing": {message: "Navigeer"},
    "Thank you!": {message: "Dankie!"},
    "NC": {message: "Nieu-Kaledonië"},
    "Buffering?": {message: "Buffer?"},
    "Enter site to access": {message: "Tik webwerf te toegang"},
    "Go Hola Premium": {message: "Gaan Hola Premium"},
    "Install Accelerator": {message: "Installeer Accelerator"},
    "sites that are censored": {message: "webwerwe wat gesensor word"},
    "Get the Fastest Servers": {message: "Kry die vinnigste Servers"},
    "Server saved!": {message: "Bediener gestoor is nie!"},
    "Menu": {message: "Spyskaart"},
    "SE": {message: "Swede"},
    "AZ": {message: "Aserbeidjan"},
    "Enjoy!": {message: "Geniet dit!"},
    "AF": {message: "Afganistan"},
    "Love Hola?": {message: "Lief Hola?"},
    "NG": {message: "Nigerië"},
    "KE": {message: "Kenia"},
    "Turn on to get started": {message: "Draai op om te begin"},
    "Please help us get better": {message: "Help ons asseblief om beter"},
    "ID": {message: "Indonesië"},
    "FM": {message: "Mikronesië"},
    "(some Hola features are not available on your version)": {message: "(Sommige Hola funksies is nie beskikbaar op jou weergawe)"},
    "GM": {message: "Gambië"},
    "$1 VPN Premium": {message: "$1 Skynprivaatnetwerk Premium"},
    "Free": {message: "Gratis"},
    "LV": {message: "Letland"},
    "Using Hola": {message: "Die gebruik van Hola"},
    "Install": {message: "Installeer"},
    "RU": {message: "Rusland"},
    "Install Free Hola Accelerator": {message: "Installeer Free Hola Accelerator"},
    "Working?": {message: "Werk?"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Kry Hola Plus vir die VN-onderbreek word, advertensie-gratis diens."},
    "LU": {message: "Luxemburg"},
    "Language": {message: "Taal"},
    "MX": {message: "Meksiko"},
    "more options...": {message: "meer opsies..."},
    "Author site:": {message: "Skrywer webwerf:"},
    "HU": {message: "Hongarye"},
    "DO": {message: "Dominikaanse Republiek"},
    "KH": {message: "Kambodja"},
    "No idle peers found.": {message: "Geen idle eweknieë gevind."},
    "DK": {message: "Denemarke"},
    "QA": {message: "Katar"},
    "CV": {message: "Kaap Verde"},
    "Reload": {message: "Herlaai"},
    "My favorites": {message: "My gunstelinge"},
    "Number of users that use this option": {message: "Aantal gebruikers is wat hierdie opsie"},
    "MO": {message: "Macao"},
    "HR": {message: "Kroasië"},
    "CZ": {message: "Tjeggiese Republiek"},
    "VPN": {message: "Skynprivaatnetwerk"},
    "Check out Hola for $1!": {message: "Check uit Hola $1!"},
    "Never be a peer": {message: "Nooit 'n peer wees"},
    "Log out": {message: "Teken uit"},
    "ST": {message: "Sao Tome en Principe"},
    "AU": {message: "Australië"},
    "Get Hola for Android": {message: "Kry Hola vir Android"},
    "Select a Country": {message: "Kies 'n Land"},
    "Off": {message: "Af"},
    "Try another server": {message: "Probeer 'n ander bediener"},
    "Go": {message: "Gaan"},
    "Did you experience any buffering?": {message: "Het jy enige buffer ervaar?"},
    "CG": {message: "Kongo"},
    "More...": {message: "Meer..."},
    "Mode": {message: "Af"},
    "GW": {message: "Guinee-Bissau"},
    "MK": {message: "Macedonië"},
    "GR": {message: "Griekeland"},
    "AG": {message: "Antigua en Barbuda"},
    "Hey,\n\nI'm using": {message: "Hey, ek is met behulp"},
    "AN": {message: "Nederlands-Antille"},
    "Turn off Accelerator": {message: "Skakel Accelerator"},
    "Get help from engineer over Skype:": {message: "Kry hulp van ingenieur oor Skype:"},
    "Not working?": {message: "Nie werk nie?"},
    "UA": {message: "Oekraine"},
    "EH": {message: "Wes-Sahara"},
    "KN": {message: "Saint Kitts en Nevis"},
    "SC": {message: "Seychelle"},
    "Trying another peer...": {message: "Probeer om 'n ander peer ..."},
    "NL": {message: "Nederland"},
    "HK": {message: "Hongkong"},
    "MY": {message: "Maleisië"},
    "not working? try another server": {message: "nie werk nie? Probeer 'n ander bediener"},
    "VA": {message: "Vatikaan"},
    "SD": {message: "Soedan"},
    "I just accessed a censored site using Hola for $1!": {message: "Ek het net toegang tot 'n gesensor werf met behulp van Hola $1!"},
    "Don't show again for any site for one week": {message: "Moenie weer vir enige site vir 'n week wys"},
    "CN": {message: "Sjina"},
    "Video stuck?": {message: "Video vas?"},
    "CH": {message: "Switserland"},
    "KG": {message: "Kirgisië"},
    "Be the first to get Hola for iPhone/iPad - Register now:": {message: "Wees die eerste Hola te kry vir die iPhone/iPad - Register nou:"},
    "US": {message: "Verenigde State van Amerika"},
    "FJ": {message: "Fidji"},
    "Turn on Hola": {message: "Draai op Hola"},
    "VPN Premium": {message: "Skynprivaatnetwerk Premium"},
    "Submit": {message: "Stuur"},
    "Get Hola Premium": {message: "Kry Hola Premium"},
    "We will be in touch with you soon": {message: "Ons sal met u in aanraking binnekort"},
    "Choose<br>Country": {message: "Kies<br>Land"},
    "Popular in $1": {message: "Gewild in $1"},
    "Tell friends about $1": {message: "Vertel vriende sowat $1"},
    "IQ": {message: "Irak"},
    "AS": {message: "Amerikaans Samoa"},
    "TZ": {message: "Tanzanië"},
    "Turn on Accelerator": {message: "Skakel Accelerator"},
    "LY": {message: "Libië"},
    "LT": {message: "Litaue"},
    "SG": {message: "Singapoer"},
    "Did it work?": {message: "Het dit werk?"},
    "Initializing...": {message: "Inisialiseer ..."},
    "TT": {message: "Trinidad en Tobago"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola nie goed werk nie in Windows 8 af. Skakel asseblief aan lessenaar af. Klik <a>hier</a> vir instruksies"},
    "SK": {message: "Slowakye"},
    "SY": {message: "Sirië"},
    "About Hola": {message: "Oor Hola"},
    "GL": {message: "Groenland"},
    "Invite friends - free Premium.": {message: "Nooi vriende - gratis Premium."},
    "PG": {message: "Papoea Nieu-Guinee"},
    "Account": {message: "Rekening"},
    "Finding peers...": {message: "Dit vind maats..."},
    "VC": {message: "Saint Vincent en die Grenadine"},
    "cool sites": {message: "koel webwerwe"},
    "Access $1?": {message: "Toegang tot $1?"},
    "NA": {message: "Namibië"},
    "Sign up": {message: "Sluit aan"},
    "TJ": {message: "Tadjikistan"},
    "Make your Internet better with $1": {message: "Maak jou Internet beter met $1"},
    "Invite friends. Get Premium.": {message: "Nooi vriende. Kry Premium."},
    "Try again": {message: "Probeer weer"},
    "MN": {message: "Mongolië"},
    "Hola site list": {message: "Ontstopper webwerf lys"},
    "IT": {message: "Italië"},
    "Yes": {message: "Ja"},
    "Enable": {message: "In staat stel om"},
    "Loading": {message: "Laai"},
    "FR": {message: "Frankryk"},
    "EG": {message: "Egipte"},
    "start": {message: "begin"},
    "Changing country...": {message: "Veranderende land ..."},
    "BE": {message: "België"},
    "Popular in the world": {message: "Gewild in die wêreld"},
    "Enter your email": {message: "Tik jou epos"},
    "SA": {message: "Saoedi-Arabië"},
    "No": {message: "Geen"},
    "ZA": {message: "Suid-Afrika"},
    "$1 VPN": {message: "$1 Skynprivaatnetwerk"},
    "CA": {message: "Kanada"},
    "Account type": {message: "Tipe Rekening"},
    "Starting...": {message: "Begin ..."},
    "Loading site...": {message: "Laai"},
    "CM": {message: "Kameroen"},
    "I did not experience any buffering": {message: "Ek het nie 'n buffer ervaar"},
    "Solve buffering problems with": {message: "Los buffer probleme met"},
    "My Account": {message: "My rekening"},
    "PL": {message: "Pole"},
    "Solves it": {message: "Los dit"},
    "Start Hola": {message: "begin"},
    "GA": {message: "Gaboen"},
    "TM": {message: "Turkmenië"},
    "No, fix it": {message: "Nee, los dit"},
    "Turn off Hola": {message: "Skakel Hola"},
    "KY": {message: "Kaaimanseilande"},
    "Please enter a valid email address.": {message: "Voer asseblief 'n geldige e-posadres."},
    "PH": {message: "Filippyne"},
    "Buffering problems?": {message: "Buffering probleme?"},
    "KZ": {message: "Kasakstan"},
    "Report a problem": {message: "Rapporteer 'n probleem"},
    "Working!": {message: "Werk!"},
    "NR": {message: "Naoeroe"},
    "MR": {message: "Mouritanië"},
    "Get access to censored sites, try it now: $1": {message: "Kry toegang tot gesensor webwerwe, probeer dit nou: $1"},
    "changing...": {message: "verander ..."},
    "Access more sites": {message: "Toegang meer plekke"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Baie ou weergawe van Chrome <a>by</a> Chrome Hola te gebruik"},
    "I can now access $1 from any country!": {message: "Ek kan nou toegang tot $1 van enige land!"},
    "VN": {message: "Viëtnam"},
    "YE": {message: "Jemen"},
    "CI": {message: "Ivoorkus"},
    "DZ": {message: "Algerië"},
    "Hola cannot work because another extension is controlling your proxy settings.": {message: "Hola kan nie werk nie, want 'n ander uitbreiding jou volmag instellings is die beheer."},
    "Testing connection...": {message: "Toets verbinding ..."},
    "GE": {message: "Georgië"},
    "My Settings": {message: "My voorkeure"},
    "LB": {message: "Libanon"},
    "Never ask me again": {message: "My nooit weer vra"},
    "FK": {message: "Falklandeilande"},
    "Enable Hola Accelerator": {message: "In staat stel om Hola Accelerator"},
    "Try it": {message: "Probeer dit"},
    "Back to $1": {message: "Terug na $1"},
    "DE": {message: "Duitsland"},
    "even more...": {message: "selfs meer ..."},
    "MV": {message: "Maldive"},
    "BH": {message: "Bahrein"},
    "RO": {message: "Roemenië"},
    "Configuring...": {message: "Die instel ..."},
    "AR": {message: "Argentinië"},
    "IN": {message: "Indië"},
    "FO": {message: "Faroëreilande"},
    "CS": {message: "Serwië en Montenegro"},
    "Get Free Premium": {message: "Kry Gratis Premium"},
    "BR": {message: "Brasilië"},
    "Translate to your language": {message: "Vertaal na jou taal"},
    "SB": {message: "Solomon Eilande"},
    "working? remember": {message: "werk? onthou"},
    "NZ": {message: "Nieu-Seeland"},
    "From": {message: "Van"},
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {message: "Skakel ander <a>uitbreidings</a> wat jy dink jou volmag instellings soos die advertensie-blokkers, ander Skynprivaatnetwerk dienste, ens kan beheer."},
    "GB": {message: "Groot-Brittanje"},
    "I'm using $1 to view $2 in my country, and surf faster!": {message: "Ek gebruik $1 $2 te sien in my land, en blaai vinniger!"},
    "On": {message: "Op"},
    "More sites...": {message: "Meer..."},
    "HT": {message: "Haïti"},
    "GF": {message: "Frans-Guyana"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Ou weergawe van Firefox. Press <a>hier</a> op te gradeer."},
    "KM": {message: "Comore"},
    "Oh, yes!": {message: "O, ja!"},
    "KW": {message: "Koeweit"},
    "$1 Buffering?": {message: "$1 Bufferen?"},
    "MZ": {message: "Mosambiek"},
    "ES": {message: "Spanje"},
    "BO": {message: "Bolivië"},
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {message: "$1 Hola om toegang te verkry $2 Klik hier om dieselfde te doen: $3 Dit installeer Hola, wat laat my op die internet vinniger en toegang tot $4 $5"},
    "AL": {message: "Albanië"},
    "Using": {message: "Die gebruik van"},
    "Share $1 via $2": {message: "Deel $1 via $2"},
    "TR": {message: "Turkye"},
    "GN": {message: "Guinee"},
    "SI": {message: "Slowenië"},
    "Settings": {message: "Instellings"},
    "AQ": {message: "Antarktika"},
    "Stopping peer routing...": {message: "Stop peer routing ..."},
    "Hola is not available right now, but we are working on it.": {message: "Hola is nie nou beskikbaar nie, maar ons is besig om dit."},
    "JO": {message: "Jordanië"},
    "Solve buffering": {message: "Los buffer"},
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {message: "Jy moet opgradeer na die jongste weergawe van Opera Hola te gebruik. Druk <a>hier</a> op te gradeer."},
    "CU": {message: "Kuba"},
    "CL": {message: "Chili"},
    "Get 24/7 Unblocking": {message: "Kry 24/7 die gang"},
    "ET": {message: "Ethiopië"},
    "IS": {message: "Ysland"},
    "Reload Hola": {message: "Herlaai Hola"},
    "Popular sites": {message: "Gewilde plekke"},
    "back to": {message: "terug na"},
    "Connecting...": {message: "Connecting ..."},
    "Get Hola Accelerator": {message: "Kry Hola Accelerator"},
    "MH": {message: "Marshall-eilande"},
    "BG": {message: "Bulgarye"},
    "Log in": {message: "Teken in"},
    "Check your Internet connection": {message: "Verifieer jy Internet"},
    "Upgrade": {message: "Werk"},
    "CY": {message: "Ciprus"},
    "Finding new peers...": {message: "Vind van nuwe maats..."},
    "Hola is off, click it to turn it on": {message: "Hola af is, kliek om te draai op"},
    "IE": {message: "Ierland"},
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {message: "Hi, Ek het begin met $1 ($2). Dit laat my op die internet vinniger en toegang $3 in my land."},
    "KP": {message: "Noord-Korea"},
    "app_name": {message: "Hola Beter Internet"},
    "Remember server": {message: "Onthou bediener"},
    "Update": {message: "Werk"},
    "Unblocker is disabled": {message: "Ontstopper is gedeaktiveer"},
    "GQ": {message: "Ekwatoriaal-Guinee"},
    "Number of users that pressed not working": {message: "Aantal gebruikers wat gedruk nie werk nie"},
    "SO": {message: "Somalië"},
    "TD": {message: "Tsjaad"},
    "BD": {message: "Bangladesj"},

};
return E; });