'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Džibutija"},
    "JM": {message: "Jamaika"},
    "No, Thanks": {message: "Nē, Paldies"},
    "AT": {message: "Austrija"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Vēlaties Hola uz citām ierīcēm? (Xbox, PS, Apple TV, iPhone ...). Noklikšķiniet šeit"},
    "SZ": {message: "Svazilenda"},
    "YT": {message: "Majota"},
    "BN": {message: "Bruneja"},
    "ZM": {message: "Zambija"},
    "app_desc": {message: "Piekļuvi tīmekļa vietnēm bloķētie jūsu valsts, uzņēmumu vai skolu ar Hola! Hola ir bezmaksas un viegli lietot!"},
    "Need Help?": {message: "Nepieciešama palīdzība?"},
    "Improve translation": {message: "Uzlabot tulkojumu"},
    "Please enter a web site address, like facebook.com": {message: "Lūdzu, ievadiet tīmekļa vietnes adresi, piemēram, facebook.com"},
    "PR": {message: "Puertoriko"},
    "Accessing $1 with Hola": {message: "Piekļūšana $1 ar Hola"},
    "Access $1 - cool site!": {message: "Access $1 - vēsā vietā!"},
    "Share $1 on $2": {message: "Dalīties $1 uz $2"},
    "SH": {message: "Sv. Helēnas sala"},
    "Talk to us on $1": {message: "Runājiet ar mums ar $1"},
    "There seems to be an error": {message: "Šķiet, ka kļūda"},
    "MA": {message: "Maroka"},
    "SV": {message: "Salvadora"},
    "Access cool sites": {message: "Piekļuves cool vietas"},
    "MP": {message: "Ziemeļu Marianas salas"},
    "Don't show again for $1 for one week": {message: "Nerādīt atkal $1 par vienu nedēļu"},
    "Support Hola": {message: "Atbalsts Hola"},
    "Downloading": {message: "Lejupielāde"},
    "Access any site from any country, free": {message: "Piekļūt jebkurā vietā, no jebkuras valsts, brīva"},
    "Try to <span>reload</span>": {message: "Mēģiniet <span> papildināšanas </span>"},
    "UZ": {message: "Uzbekistāna"},
    "LR": {message: "Libērija"},
    "Premium": {message: "Prēmija"},
    "Get Unlimited Unblocking": {message: "Get Unlimited atbloķēšana"},
    "Apply settings...": {message: "Piesakies iestatījumus ..."},
    "TN": {message: "Tunisija"},
    "EE": {message: "Igaunija"},
    "CK": {message: "Kuka salas"},
    "BY": {message: "Baltkrievija"},
    "NO": {message: "Norvēģija"},
    "KR": {message: "Dienvidkoreja"},
    "BF": {message: "Burkinafaso"},
    "More countries": {message: "Citas valstis"},
    "AM": {message: "Armēnija"},
    "Top popular sites": {message: "Top populāras vietas"},
    "SR": {message: "Surinama"},
    "MG": {message: "Madagaskara"},
    "BT": {message: "Butāna"},
    "CF": {message: "Centrālāfrikas Republika"},
    "BA": {message: "Bosnija un Hercegovina"},
    "AE": {message: "Apvienotie Arābu Emirāti"},
    "not working?": {message: "nedarbojas?"},
    "TH": {message: "Taizeme"},
    "Get Premium support": {message: "Saņemt Premium atbalsts"},
    "$1 from $2": {message: "$1 no $2"},
    "Author:": {message: "Autors:"},
    "CC": {message: "Kokosu jeb Kīlinga salas"},
    "Browsing": {message: "Pārlūkošana"},
    "Thank you!": {message: "Paldies!"},
    "NC": {message: "Jaunkaledonija"},
    "Buffering?": {message: "Buferizācijas?"},
    "Enter site to access": {message: "Ievadiet vietni, lai piekļūtu"},
    "Go Hola Premium": {message: "Iet Hola Premium"},
    "Install Accelerator": {message: "Instalēt Accelerator"},
    "sites that are censored": {message: "vietnes, kas tiek cenzēti"},
    "Get the Fastest Servers": {message: "Saņemt ātrākais Servers"},
    "Server saved!": {message: "Serveris saglabāts!"},
    "Menu": {message: "Ēdienkarte"},
    "SE": {message: "Zviedrija"},
    "AZ": {message: "Azerbaidžāna"},
    "AF": {message: "Afganistāna"},
    "Love Hola?": {message: "Mīlestība Hola?"},
    "NG": {message: "Nigērija"},
    "KE": {message: "Kenija"},
    "BJ": {message: "Benina"},
    "Turn on to get started": {message: "Ieslēdziet, lai sāktu"},
    "OM": {message: "Omāna"},
    "LK": {message: "Šrilanka"},
    "Please help us get better": {message: "Lūdzu, palīdziet mums iegūt labāku"},
    "ID": {message: "Indonēzija"},
    "FM": {message: "Mikronēzijas Federatīvās Valstis"},
    "(some Hola features are not available on your version)": {message: "(Dažas Hola funkcijas nav pieejama jūsu versija)"},
    "GM": {message: "Gambija"},
    "Free": {message: "Bezmaksas"},
    "LV": {message: "Latvija"},
    "Using Hola": {message: "Izmantojot Hola"},
    "Install": {message: "Instalēt"},
    "RU": {message: "Krievija"},
    "Install Free Hola Accelerator": {message: "Instalēt bezmaksas Hola Accelerator"},
    "Working?": {message: "Darba?"},
    "FI": {message: "Somija"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Saņemt Hola Plus un-pārtraukta, ad-bezmaksas pakalpojums."},
    "LU": {message: "Luksemburga"},
    "VE": {message: "Venecuēla"},
    "Language": {message: "Valoda"},
    "VI": {message: "Amerikāņu Virdžīnu salas"},
    "SN": {message: "Senegāla"},
    "MX": {message: "Meksika"},
    "IL": {message: "Izraēla"},
    "GG": {message: "Gērnsija"},
    "more options...": {message: "vairāk iespēju ..."},
    "Author site:": {message: "Autors vietne:"},
    "HU": {message: "Ungārija"},
    "DO": {message: "Dominikānas Republika"},
    "KH": {message: "Kambodža"},
    "BB": {message: "Barbadosa"},
    "JE": {message: "Džērsija"},
    "No idle peers found.": {message: "Neviens tukšgaitas vienaudžiem atrasts."},
    "DK": {message: "Dānija"},
    "QA": {message: "Katara"},
    "CV": {message: "Kaboverde"},
    "Reload": {message: "Pārlādēt"},
    "GD": {message: "Grenāda"},
    "My favorites": {message: "Mani favorīti"},
    "Number of users that use this option": {message: "Lietotāju skaits, kas izmanto šo iespēju,"},
    "MO": {message: "Ķīnas īpašās pārvaldes apgabals Makao"},
    "MF": {message: "Senmartēna"},
    "HR": {message: "Horvātija"},
    "CZ": {message: "Čehija"},
    "BL": {message: "Senbartelmī"},
    "Check out Hola for $1!": {message: "Pārbaudiet Hola par $1!"},
    "Never be a peer": {message: "Nekad nebūs peer"},
    "Log out": {message: "Iziet"},
    "ST": {message: "Santome un Prinsipi"},
    "AU": {message: "Austrālija"},
    "Get Hola for Android": {message: "Get Hola Android"},
    "Select a Country": {message: "Izvēlieties valsti"},
    "Off": {message: "No"},
    "IR": {message: "Irāna"},
    "Try another server": {message: "Izmēģināt citu serveri"},
    "Go": {message: "Iet"},
    "Did you experience any buffering?": {message: "Vai jūtat buffering?"},
    "CG": {message: "Kongo"},
    "More...": {message: "vairāk ..."},
    "GW": {message: "Gvineja-Bisava"},
    "MK": {message: "Maķedonija"},
    "GR": {message: "Grieķija"},
    "AG": {message: "Antigva un Barbuda"},
    "AI": {message: "Angilja"},
    "Hey,\n\nI'm using": {message: "Hei,\n\nes esmu, izmantojot"},
    "AN": {message: "Nīderlandes Antiļas"},
    "Turn off Accelerator": {message: "Izslēgt Accelerator"},
    "Get help from engineer over Skype:": {message: "Saņemt palīdzību no inženiera vairāk nekā Skype:"},
    "Not working?": {message: "Nedarbojas?"},
    "UA": {message: "Ukraina"},
    "EH": {message: "Rietumsahāra"},
    "KN": {message: "Sentkitsa un Nevisa"},
    "SC": {message: "Seišeļu salas"},
    "Trying another peer...": {message: "Mēģinot citu vienaudžu ..."},
    "NL": {message: "Nīderlande"},
    "MS": {message: "Montserrata"},
    "EC": {message: "Ekvadora"},
    "HK": {message: "Ķīnas īpašās pārvaldes apgabals Honkonga"},
    "MY": {message: "Malaizija"},
    "CR": {message: "Kostarika"},
    "not working? try another server": {message: "nedarbojas? izmēģināt citu serveri"},
    "VA": {message: "Vatikāns"},
    "IO": {message: "Britu Indijas okeāna teritorija"},
    "SD": {message: "Sudāna"},
    "RS": {message: "Serbija"},
    "I just accessed a censored site using Hola for $1!": {message: "Es vienkārši piekļūt ar censored vietni, izmantojot Hola par $1!"},
    "Don't show again for any site for one week": {message: "Nerādīt atkal jebkurā vietā uz vienu nedēļu"},
    "CN": {message: "Ķīna"},
    "UY": {message: "Urugvaja"},
    "PY": {message: "Paragvaja"},
    "Video stuck?": {message: "Video iestrēdzis?"},
    "MU": {message: "Maurīcija"},
    "CH": {message: "Šveice"},
    "LI": {message: "Lihtenšteina"},
    "GH": {message: "Gana"},
    "KG": {message: "Kirgīzija"},
    "Be the first to get Hola for iPhone/iPad - Register now:": {message: "Esi pirmais, lai saņemtu Hola iPhone / iPad - Reģistrējieties tūlīt:"},
    "US": {message: "Amerikas Savienotās Valstis"},
    "SL": {message: "Sjerraleone"},
    "FJ": {message: "Fidži"},
    "Turn on Hola": {message: "Ieslēgt Hola"},
    "Get Hola Premium": {message: "Saņemt Hola Premium"},
    "Submit": {message: "Iesniegt"},
    "We will be in touch with you soon": {message: "Mums būs sazināties ar Jums tuvākajā laikā"},
    "Choose<br>Country": {message: "Izvēlēties <br> Valsts"},
    "Popular in $1": {message: "Populāra $1"},
    "Tell friends about $1": {message: "Pastāstīt draugiem par $1"},
    "ER": {message: "Eritreja"},
    "IQ": {message: "Irāka"},
    "AS": {message: "Amerikāņu Samoa"},
    "TZ": {message: "Tanzānija"},
    "Turn on Accelerator": {message: "Ieslēgt Accelerator"},
    "LY": {message: "Lībija"},
    "GT": {message: "Gvatemala"},
    "BM": {message: "Bermudu salas"},
    "BV": {message: "Buvē sala"},
    "LT": {message: "Lietuva"},
    "SG": {message: "Singapūra"},
    "PM": {message: "Senpjēra un Mikelona"},
    "Did it work?": {message: "Vai tas darbojas?"},
    "Initializing...": {message: "Initializing ..."},
    "TT": {message: "Trinidāda un Tobāgo"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola nedarbojas labi Windows 8 režīmā. Lūdzu pārslēgties uz desktop režīmā. Noklikšķiniet <a> šeit </a> instrukcijas"},
    "SY": {message: "Sīrija"},
    "SK": {message: "Slovākija"},
    "Help": {message: "Palīdzēt"},
    "About Hola": {message: "Par Hola"},
    "GL": {message: "Grenlande"},
    "Invite friends - free Premium.": {message: "Uzaicināt draugus - bezmaksas Premium."},
    "PG": {message: "Papua-Jaungvineja"},
    "Account": {message: "Konts"},
    "CD": {message: "Kongo Demokrātiskā Republika"},
    "BW": {message: "Botsvāna"},
    "Finding peers...": {message: "Meklējot vienaudžiem ..."},
    "ZW": {message: "Zimbabve"},
    "VC": {message: "Sentvinsenta un Grenadīnas"},
    "cool sites": {message: "cool vietas"},
    "Access $1?": {message: "Piekļūt $1?"},
    "JP": {message: "Japāna"},
    "NA": {message: "Namībija"},
    "Sign up": {message: "Piereģistrēties"},
    "TJ": {message: "Tadžikistāna"},
    "Make your Internet better with $1": {message: "Padariet savu interneta labāk ar $1"},
    "LC": {message: "Sentlūsija"},
    "Invite friends. Get Premium.": {message: "Uzaicināt draugus. Get Premium."},
    "Try again": {message: "Mēģiniet vēlreiz"},
    "MN": {message: "Mongolija"},
    "Hola site list": {message: "Hola vietņu saraksts"},
    "IT": {message: "Itālija"},
    "RE": {message: "Reinjona"},
    "Yes": {message: "Jā"},
    "Enable": {message: "Dot iespēju"},
    "Loading": {message: "Iekraušana"},
    "EG": {message: "Ēģipte"},
    "FR": {message: "Francija"},
    "start": {message: "sākums"},
    "Changing country...": {message: "Mainot valsti ..."},
    "RW": {message: "Ruanda"},
    "BE": {message: "Beļģija"},
    "UM": {message: "ASV mazās aizjūras teritorijas"},
    "Popular in the world": {message: "Populārs visā pasaulē"},
    "Accelerator": {message: "Paātrinātājs"},
    "Enter your email": {message: "Ievadiet savu e-pasta adresi"},
    "LS": {message: "Lesoto"},
    "SA": {message: "Saūda Arābija"},
    "No": {message: "Nē"},
    "ZA": {message: "Dienvidāfrika"},
    "PT": {message: "Portugāle"},
    "CA": {message: "Kanāda"},
    "Account type": {message: "Konta veids"},
    "Starting...": {message: "Sākot ..."},
    "Loading site...": {message: "Iekraušana"},
    "CM": {message: "Kamerūna"},
    "I did not experience any buffering": {message: "Man nav bijušas nekādas buffering"},
    "Solve buffering problems with": {message: "Atrisināt buffering problēmas"},
    "NP": {message: "Nepāla"},
    "My Account": {message: "Mans konts"},
    "PL": {message: "Polija"},
    "Solves it": {message: "Atrisina to"},
    "Start Hola": {message: "sākums"},
    "GA": {message: "Gabona"},
    "TM": {message: "Turkmenistāna"},
    "No, fix it": {message: "Nē, salabot"},
    "Turn off Hola": {message: "Izslēgt Hola"},
    "KY": {message: "Kaimanu salas"},
    "LA": {message: "Laosa"},
    "Please enter a valid email address.": {message: "Lūdzu, ievadiet derīgu e-pasta adresi."},
    "PH": {message: "Filipīnas"},
    "Buffering problems?": {message: "Buffering problēmas?"},
    "NI": {message: "Nikaragva"},
    "GU": {message: "Guama"},
    "TF": {message: "Franču dienvidu teritorijas"},
    "KZ": {message: "Kazahstāna"},
    "Report a problem": {message: "Ziņot par problēmu"},
    "SJ": {message: "Svalbāra un Jana Majena sala"},
    "Working!": {message: "Strādā!"},
    "MM": {message: "Mjanma"},
    "DM": {message: "Dominika"},
    "NE": {message: "Nigēra"},
    "AD": {message: "Andora"},
    "MR": {message: "Mauritānija"},
    "Get access to censored sites, try it now: $1": {message: "Piekļūt ar necenzētu vietām, izmēģiniet to tagad: $1"},
    "changing...": {message: "mainās ..."},
    "GS": {message: "Dienviddžordžija un Dienvidsendviču salas"},
    "Access more sites": {message: "Piekļuves vairāk vietas"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Ļoti veca versija Chrome, <a> atjauninājums </a> Chrome izmantot Hola"},
    "ME": {message: "Melnkalne"},
    "AX": {message: "Olandes salas"},
    "I can now access $1 from any country!": {message: "Es tagad var piekļūt $1 no jebkuras valsts!"},
    "VG": {message: "Britu Virdžīnu salas"},
    "VN": {message: "Vjetnama"},
    "DZ": {message: "Alžīrija"},
    "CI": {message: "Kotdivuāra"},
    "YE": {message: "Jemena"},
    "Hola cannot work because another extension is controlling your proxy settings.": {message: "Hola nevar strādāt, jo vēl viens pagarinājums ir kontrolēt jūsu starpniekservera iestatījumus."},
    "Testing connection...": {message: "Testēšana savienojums ..."},
    "GE": {message: "Gruzija"},
    "CX": {message: "Ziemsvētku sala"},
    "My Settings": {message: "Mani iestatījumi"},
    "LB": {message: "Libāna"},
    "Cool site!": {message: "Vēsā vietā!"},
    "FK": {message: "Folklenda salas"},
    "Never ask me again": {message: "Nekad nejautāt"},
    "Enable Hola Accelerator": {message: "Ļautu Hola Accelerator"},
    "Try it": {message: "Izmēģiniet to"},
    "DE": {message: "Vācija"},
    "Back to $1": {message: "Atpakaļ $1"},
    "MV": {message: "Maldīvija"},
    "even more...": {message: "pat vairāk ..."},
    "PN": {message: "Pitkērna"},
    "BH": {message: "Bahreina"},
    "GI": {message: "Gibraltārs"},
    "WF": {message: "Volisa un Futuna"},
    "RO": {message: "Rumānija"},
    "IN": {message: "Indija"},
    "GP": {message: "Gvadelupa"},
    "AR": {message: "Argentīna"},
    "Configuring...": {message: "Konfigurēšana ..."},
    "FO": {message: "Farēru salas"},
    "CS": {message: "Serbija un Melnkalne"},
    "MC": {message: "Monako"},
    "HN": {message: "Hondurasa"},
    "BR": {message: "Brazīlija"},
    "SB": {message: "Zālamana salas"},
    "Translate to your language": {message: "Tulkot uz savu valodu"},
    "PS": {message: "Palestīniešu pašpārvaldes teritorija"},
    "NZ": {message: "Jaunzēlande"},
    "working? remember": {message: "darba? atcerēties"},
    "From": {message: "No"},
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {message: "Lūdzu atslēgt citus <a>paplašinājumus</a>, kas jūs domājat, ka varētu kontrolēt jūsu starpniekservera iestatījumus, piemēram, ad-blokatori, citu VPN pakalpojumi, uc"},
    "GB": {message: "Lielbritānija"},
    "I'm using $1 to view $2 in my country, and surf faster!": {message: "Es esmu, izmantojot $1 līdz apskatītu $2 manā valstī, un sērfot ātrāk!"},
    "On": {message: "Uz"},
    "More sites...": {message: "vairāk ..."},
    "GF": {message: "Franču Gviāna"},
    "ZZ": {message: "nezināms vai nederīgs reģions"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Vecā versija Firefox. Nospiediet <a> šeit </a>, lai uzlabotu."},
    "KM": {message: "Komoru salas"},
    "Oh, yes!": {message: "Ak, jā!"},
    "KW": {message: "Kuveita"},
    "TC": {message: "Tērksas un Kaikosas salas"},
    "MQ": {message: "Martinika"},
    "$1 Buffering?": {message: "$1 Buferizācijas?"},
    "MZ": {message: "Mozambika"},
    "ES": {message: "Spānija"},
    "BO": {message: "Bolīvija"},
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {message: "$1 Hola piekļūt $2\n\nUzklikšķināt šeit, lai darīt to pašu: $3\n\nTā instalē Hola, kas ļauj man sērfot internetā ātrāk un piekļūt $4$5"},
    "AL": {message: "Albānija"},
    "Using": {message: "Izmantojot"},
    "Share $1 via $2": {message: "Dalīties $1 via $2"},
    "TR": {message: "Turcija"},
    "GN": {message: "Gvineja"},
    "SI": {message: "Slovēnija"},
    "CO": {message: "Kolumbija"},
    "Settings": {message: "Iestatījumi"},
    "AQ": {message: "Antarktika"},
    "Stopping peer routing...": {message: "Apstāšanās vienaudžu maršrutēšanu ..."},
    "Hola is not available right now, but we are working on it.": {message: "Hola nav pieejama tieši tagad, bet mēs pie tā strādājam."},
    "JO": {message: "Jordānija"},
    "SM": {message: "Sanmarīno"},
    "Solve buffering": {message: "Atrisināt buferizācijas"},
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {message: "Jums ir nepieciešams, lai uzlabotu ar jaunāko versiju Opera izmantot Hola. Spiediet <a>šeit</a> , lai uzlabotu."},
    "CL": {message: "Čīle"},
    "CU": {message: "Kuba"},
    "Get 24/7 Unblocking": {message: "Saņemt 24/7 atbloķēšana"},
    "ET": {message: "Etiopija"},
    "IS": {message: "Īslande"},
    "Reload Hola": {message: "Pārlādēt Hola"},
    "Popular sites": {message: "Popular vietās"},
    "back to": {message: "atpakaļ līdz"},
    "Connecting...": {message: "Savieno ..."},
    "Get Hola Accelerator": {message: "Saņemt Hola Accelerator"},
    "MH": {message: "Māršala salas"},
    "BG": {message: "Bulgārija"},
    "Log in": {message: "Ieiet"},
    "Check your Internet connection": {message: "Pārbaudiet, vai jūsu interneta"},
    "TL": {message: "Austrumtimora"},
    "Upgrade": {message: "Modernizēt"},
    "BZ": {message: "Beliza"},
    "CY": {message: "Kipra"},
    "Finding new peers...": {message: "Atrast jaunus vienaudžiem ..."},
    "Hola is off, click it to turn it on": {message: "Hola ir izslēgts, noklikšķiniet uz līdz ieslēgtu"},
    "IM": {message: "Mena"},
    "IE": {message: "Īrija"},
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {message: "Hi,\n\nes sāku izmantot $1 ($2). Tas ļauj man sērfot internetā ātrāk un piekļūt $3 manā valstī."},
    "TW": {message: "Taivāna"},
    "KP": {message: "Ziemeļkoreja"},
    "PF": {message: "Franču Polinēzija"},
    "app_name": {message: "Hola Labāka interneta"},
    "Remember server": {message: "Atcerieties serveri"},
    "Update": {message: "Modernizēt"},
    "MW": {message: "Malāvija"},
    "GY": {message: "Gajāna"},
    "Unblocker is disabled": {message: "Unblocker ir atspējots"},
    "PK": {message: "Pakistāna"},
    "GQ": {message: "Ekvatoriālā Gvineja"},
    "Number of users that pressed not working": {message: "Lietotāju skaits, kas nospiests nav darba"},
    "NF": {message: "Norfolkas sala"},
    "TD": {message: "Čada"},
    "SO": {message: "Somālija"},
    "BD": {message: "Bangladeša"},
    "HM": {message: "Hērda un Makdonalda salas"},

};
return E; });