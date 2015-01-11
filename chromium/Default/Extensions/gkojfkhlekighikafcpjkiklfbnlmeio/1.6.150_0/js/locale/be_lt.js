'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Džibutis"},
    "JM": {message: "Jamaika"},
    "No, Thanks": {message: "Ne, ačiū"},
    "AT": {message: "Austrija"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Norite gauti Hola kituose prietaisuose? (Xbox, PS, \"Apple TV\", \"iPhone\" ...). Spauskite čia"},
    "SZ": {message: "Svazilendas"},
    "YT": {message: "Mayotte’as"},
    "BN": {message: "Brunėjus"},
    "ZM": {message: "Zambija"},
    "app_desc": {message: "Access svetainės blokavo savo šalies, įmonės ar mokyklą Hola! Hola yra nemokama ir paprasta naudoti!"},
    "Need Help?": {message: "Reikia pagalbos?"},
    "Improve translation": {message: "Pagerinti vertimą"},
    "Please enter a web site address, like facebook.com": {message: "Įveskite interneto svetainės adresą, pavyzdžiui, facebook.com"},
    "PR": {message: "Puerto Rikas"},
    "Accessing $1 with Hola": {message: "Prieiga prie $1 su Hola"},
    "Access $1 - cool site!": {message: "Prieiga $1 - kietas svetainę!"},
    "Share $1 on $2": {message: "Dalytis $1 $2"},
    "SH": {message: "Šventoji Elena"},
    "Talk to us on $1": {message: "Pakalbėkite su mumis $1"},
    "There seems to be an error": {message: "Atrodo, kad atsitiko klaida"},
    "MA": {message: "Marokas"},
    "SV": {message: "Salvadoras"},
    "Access cool sites": {message: "Prieigos cool svetaines"},
    "MP": {message: "Marianos šiaurinės salos"},
    "Don't show again for $1 for one week": {message: "Neberodyti $1 už vieną savaitę"},
    "Support Hola": {message: "Palaikymo Hola"},
    "Downloading": {message: "Parsisiuntimas"},
    "Access any site from any country, free": {message: "Prisijunkite prie bet kokios svetainę iš bet kurios šalies, nemokamai"},
    "Try to <span>reload</span>": {message: "Pabandykite <span> perkrauti </span>"},
    "UZ": {message: "Uzbekistanas"},
    "LR": {message: "Liberija"},
    "Premium": {message: "Aukščiausios kokybės"},
    "Get Unlimited Unblocking": {message: "Gauti neribotą atblokavimo"},
    "Apply settings...": {message: "Taikyti nustatymus..."},
    "TN": {message: "Tunisas"},
    "EE": {message: "Estija"},
    "CK": {message: "Kuko salos"},
    "BY": {message: "Baltarusija"},
    "NO": {message: "Norvegija"},
    "KR": {message: "Pietų Korėja"},
    "BF": {message: "Burkina Fasas"},
    "More countries": {message: "Daugiau šalių"},
    "AM": {message: "Armėnija"},
    "Top popular sites": {message: "Top populiarių svetainių"},
    "SR": {message: "Surinamas"},
    "MG": {message: "Madagaskaras"},
    "BT": {message: "Butanas"},
    "CF": {message: "Centrinės Afrikos Respublika"},
    "BA": {message: "Bosnija ir Hercegovina"},
    "AE": {message: "Jungtiniai Arabų Emyratai"},
    "not working?": {message: "neveikia?"},
    "TH": {message: "Tailandas"},
    "Get Premium support": {message: "Gauk Premium paramą"},
    "$1 from $2": {message: "Ir $1 $2"},
    "Author:": {message: "Autorius:"},
    "CC": {message: "Kokosų salos"},
    "Browsing": {message: "Naršymas"},
    "Video": {message: "Vaizdo"},
    "Thank you!": {message: "Ačiū!"},
    "NC": {message: "Naujoji Kaledonija"},
    "Buffering?": {message: "Buferinė?"},
    "Enter site to access": {message: "Įveskite svetainė prieigos"},
    "Go Hola Premium": {message: "Eiti Hola Premium"},
    "Install Accelerator": {message: "Įdiekite Accelerator"},
    "sites that are censored": {message: "svetainių, kurios yra cenzūra"},
    "Get the Fastest Servers": {message: "Gaukite sparčiausias Serveriai"},
    "Server saved!": {message: "Serverio išsaugota!"},
    "Menu": {message: "Meniu"},
    "SE": {message: "Švedija"},
    "AZ": {message: "Azerbaidžanas"},
    "Enjoy!": {message: "Mėgaukitės!"},
    "AF": {message: "Afganistanas"},
    "Love Hola?": {message: "Meilė Hola?"},
    "NG": {message: "Nigerija"},
    "KE": {message: "Kenija"},
    "BJ": {message: "Beninas"},
    "Turn on to get started": {message: "Įjunkite, jei norite pradėti"},
    "OM": {message: "Omanas"},
    "LK": {message: "Šri Lanka"},
    "Please help us get better": {message: "Prašome padėti mums geriau"},
    "ID": {message: "Indonezija"},
    "FM": {message: "Mikronezija"},
    "(some Hola features are not available on your version)": {message: "(Kai kurios Hola funkcijos yra neprieinamos jūsų versijoje)"},
    "GM": {message: "Gambija"},
    "$1 VPN Premium": {message: "$1 VPT Premium"},
    "Free": {message: "Nemokamai"},
    "LV": {message: "Latvija"},
    "Using Hola": {message: "Naudojant Hola"},
    "Install": {message: "Įrengti"},
    "RU": {message: "Rusijos Federacija"},
    "Install Free Hola Accelerator": {message: "Įdiegti nemokamą Hola Accelerator"},
    "Working?": {message: "Veikia?"},
    "FI": {message: "Suomija"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Gauk Hola Plus JT pertraukos, be reklamos paslaugos."},
    "LU": {message: "Liuksemburgas"},
    "VE": {message: "Venesuela"},
    "Language": {message: "Kalba"},
    "VI": {message: "Mergelių salos (JAV)"},
    "SN": {message: "Senegalas"},
    "MX": {message: "Meksika"},
    "IL": {message: "Izraelis"},
    "GG": {message: "Guernsis"},
    "more options...": {message: "daugiau galimybių..."},
    "Author site:": {message: "Autoriaus svetainė:"},
    "HU": {message: "Vengrija"},
    "DO": {message: "Dominikos Respublika"},
    "KH": {message: "Kambodža"},
    "TG": {message: "Togas"},
    "BB": {message: "Barbadosas"},
    "JE": {message: "Džersis"},
    "No idle peers found.": {message: "Nėra prastovos bendraamžiai nerasta."},
    "DK": {message: "Danija"},
    "QA": {message: "Kataras"},
    "CV": {message: "Žaliasis Kyšulys"},
    "Reload": {message: "Perkrauti"},
    "My favorites": {message: "Mano mėgstamiausi"},
    "Number of users that use this option": {message: "Vartotojų skaičius, kurie naudoja šią parinktį,"},
    "MO": {message: "Macao"},
    "MF": {message: "Saint-Martin"},
    "HR": {message: "Kroatija"},
    "CZ": {message: "Čekija"},
    "BL": {message: "Švento Baltramiejaus sala"},
    "VPN": {message: "VPT"},
    "Check out Hola for $1!": {message: "Check out Hola $1!"},
    "Never be a peer": {message: "Niekada tarpusavio"},
    "Log out": {message: "Automatiškai išsijungti"},
    "ST": {message: "San Tomė ir Principė"},
    "AU": {message: "Australija"},
    "Get Hola for Android": {message: "Gauk Hola &quot;Android&quot;"},
    "Select a Country": {message: "Pasirinkite šalį"},
    "Off": {message: "Išjungta"},
    "IR": {message: "Iranas"},
    "Try another server": {message: "Pabandykite kitą serverį"},
    "Go": {message: "Eiti"},
    "Did you experience any buffering?": {message: "Ar jaučiate buferio?"},
    "CG": {message: "Kongas"},
    "More...": {message: "daugiau..."},
    "Mode": {message: "Režimas"},
    "BI": {message: "Burundis"},
    "GW": {message: "Bisau Gvinėja"},
    "MK": {message: "Makedonija"},
    "GR": {message: "Graikija"},
    "AG": {message: "Antigva ir Barbuda"},
    "AI": {message: "Angilija"},
    "Hey,\n\nI'm using": {message: "Ei,\n\naš naudoju"},
    "AN": {message: "Olandijos Antilai"},
    "Turn off Accelerator": {message: "Išjunkite Accelerator"},
    "Get help from engineer over Skype:": {message: "Gaukite pagalbos iš inžinieriaus per skype:"},
    "Not working?": {message: "Neveikia?"},
    "UA": {message: "Ukraina"},
    "EH": {message: "Vakarų Sachara"},
    "KN": {message: "Sent Kitsas ir Nevis"},
    "SC": {message: "Seišeliai"},
    "Trying another peer...": {message: "Bando kitą peer..."},
    " via ": {message: " per "},
    "NL": {message: "Nyderlandai"},
    "MS": {message: "Montserratas"},
    "EC": {message: "Ekvadoras"},
    "HK": {message: "Kinijos S.A.R.Honkongas"},
    "MY": {message: "Malaizija"},
    "CR": {message: "Kosta Rika"},
    "not working? try another server": {message: "neveikia? pabandykite kitą serverį"},
    "VA": {message: "Vatikanas"},
    "IO": {message: "Indijos vandenyno britų sritis"},
    "SD": {message: "Sudanas"},
    "RS": {message: "Serbija"},
    "I just accessed a censored site using Hola for $1!": {message: "Aš tiesiog atvertas cenzūruojamos svetainę naudodami Hola $1!"},
    "Don't show again for any site for one week": {message: "Neberodyti bet kokios svetainės už vieną savaitę"},
    "CN": {message: "Kinija"},
    "UY": {message: "Urugvajus"},
    "PY": {message: "Paragvajus"},
    "Video stuck?": {message: "Vaizdo įstrigo?"},
    "MU": {message: "Mauricijus"},
    "CH": {message: "Šveicarija"},
    "LI": {message: "Lichtenšteinas"},
    "GH": {message: "Gana"},
    "KG": {message: "Kirgiztanas"},
    "Be the first to get Hola for iPhone/iPad - Register now:": {message: "Būkite pirmieji gauti Hola iPhone / iPad - Registruotis dabar:"},
    "US": {message: "Jungtinės Valstijos"},
    "Stop Hola": {message: "Sustabdyti Hola"},
    "SL": {message: "Siera Leonė"},
    "FJ": {message: "Fidžis"},
    "Turn on Hola": {message: "Įjunkite Hola"},
    "VPN Premium": {message: "VPT Premium"},
    "Submit": {message: "Pateikti"},
    "Get Hola Premium": {message: "Gauk Hola Premium"},
    "We will be in touch with you soon": {message: "Mes susisieksime su Jumis"},
    "Choose<br>Country": {message: "Pasirinkti <br> Šalis"},
    "Popular in $1": {message: "Populiariausia $1"},
    "Tell friends about $1": {message: "Papasakokite draugams apie $1"},
    "ER": {message: "Eritrėja"},
    "IQ": {message: "Irakas"},
    "AS": {message: "Amerikos Samoa"},
    "TZ": {message: "Tanzanija"},
    "Turn on Accelerator": {message: "Įjunkite Accelerator"},
    "LY": {message: "Libija"},
    "GT": {message: "Gvatemala"},
    "BV": {message: "Bouvet sala"},
    "LT": {message: "Lietuva"},
    "SG": {message: "Singapūras"},
    "PM": {message: "Sen Pjeras ir Mikelonas"},
    "Did it work?": {message: "Ar jis veikia?"},
    "Initializing...": {message: "Inicijuojama..."},
    "TT": {message: "Trinidadas ir Tobagas"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola gali netinkamai veikti \"Windows 8\" režime. Prašome įjungti darbalaukio režimą. Spauskite <a> čia </a> kad gautumėte instrukcijas"},
    "SY": {message: "Sirija"},
    "SK": {message: "Slovakija"},
    "Help": {message: "Padėti"},
    "About Hola": {message: "Apie Hola"},
    "GL": {message: "Grenlandija"},
    "Invite friends - free Premium.": {message: "Pakviesti draugą - nemokamai Premium."},
    "PG": {message: "Papua Naujoji Gvinėja"},
    "Account": {message: "Sąskaita"},
    "KI": {message: "Kiribatis"},
    "CD": {message: "Kongo Demokratinė Respublika"},
    "BW": {message: "Botsvana"},
    "Finding peers...": {message: "Ieškoti bendraamžiais..."},
    "ZW": {message: "Zimbabvė"},
    "VC": {message: "Šventasis Vincentas ir Grenadinai"},
    "cool sites": {message: "cool svetaines"},
    "Access $1?": {message: "Prisijunkite $1?"},
    "JP": {message: "Japonija"},
    "NA": {message: "Namibija"},
    "Sign up": {message: "Užsiregistruok"},
    "TJ": {message: "Tadžikistanas"},
    "Make your Internet better with $1": {message: "Padarykite savo interneto geriau $1"},
    "LC": {message: "Šventoji Liucija"},
    "Invite friends. Get Premium.": {message: "Pakviesti draugą. Gauk Premium."},
    "Try again": {message: "Bandykite dar kartą"},
    "MN": {message: "Mongolija"},
    "Hola site list": {message: "Hola svetainių sąrašas"},
    "IT": {message: "Italija"},
    "RE": {message: "Reunionas"},
    "Yes": {message: "Taip"},
    "Enable": {message: "Leisti"},
    "Loading": {message: "Kraunama"},
    "EG": {message: "Egiptas"},
    "FR": {message: "Prancūzija"},
    "start": {message: "pradėti"},
    "Changing country...": {message: "Pakeitus šalį..."},
    "RW": {message: "Ruanda"},
    "BE": {message: "Belgija"},
    "UM": {message: "Jungtinių Valstijų mažosios aplinkinės salos"},
    "Popular in the world": {message: "Populiariausia pasaulyje"},
    "Accelerator": {message: "Greitintuvas"},
    "Enter your email": {message: "Įveskite savo elektroninio pašto adresą"},
    "LS": {message: "Lesotas"},
    "SA": {message: "Saudo Arabija"},
    "No": {message: "Ne"},
    "ZA": {message: "Pietų Afrika"},
    "PT": {message: "Portugalija"},
    "$1 VPN": {message: "$1 VPT"},
    "CA": {message: "Kanada"},
    "Account type": {message: "Paskyros tipas"},
    "Starting...": {message: "Pradedama ..."},
    "Loading site...": {message: "Kraunama"},
    "CM": {message: "Kamerūnas"},
    "I did not experience any buffering": {message: "Aš nepatyrė jokios buferinė"},
    "Solve buffering problems with": {message: "Išspręskite problemas buferio su"},
    "NP": {message: "Nepalas"},
    "My Account": {message: "Mano paskyra"},
    "PL": {message: "Lenkija"},
    "Solves it": {message: "Sprendžia jį"},
    "Start Hola": {message: "pradėti"},
    "GA": {message: "Gabonas"},
    "TM": {message: "Turkmėnistanas"},
    "No, fix it": {message: "Ne, ją išspręsti"},
    "Turn off Hola": {message: "Išjunkite Hola"},
    "KY": {message: "Kaimanų salos"},
    "LA": {message: "Laosas"},
    "Please enter a valid email address.": {message: "Prašome įvesti galiojantį el.pašto adresą."},
    "PH": {message: "Filipinai"},
    "Buffering problems?": {message: "Buferinė problemas?"},
    "NI": {message: "Nikaragva"},
    "GU": {message: "Guamas"},
    "TF": {message: "Prancūzijos Pietų sritys"},
    "KZ": {message: "Kazachstanas"},
    "Report a problem": {message: "Pranešti apie problemą"},
    "SJ": {message: "Svalbardo ir Jan Majen salos"},
    "Working!": {message: "Darbas!"},
    "MM": {message: "Mianmaras"},
    "DM": {message: "Dominika"},
    "NE": {message: "Nigeris"},
    "AD": {message: "Andora"},
    "MR": {message: "Mauritanija"},
    "Get access to censored sites, try it now: $1": {message: "Gaukite prieigą prie cenzūruoti svetainių, pabandykite jį dabar: $1"},
    "changing...": {message: "keičiasi..."},
    "GS": {message: "Pietų Džordžija ir Pietų Sandvičo salos"},
    "Access more sites": {message: "Gauti daugiau svetainės"},
    "ME": {message: "Juodkalnija"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Labai sena Chrome versija, <a> atnaujinkite </a>, kad galėtumėte naudoti Hola"},
    "AX": {message: "Alandų salos"},
    "VN": {message: "Vietnamas"},
    "VG": {message: "Didžiosios Britanijos Mergelių salos"},
    "I can now access $1 from any country!": {message: "Aš dabar gali pasiekti $1 iš bet kurios šalies!"},
    "YE": {message: "Jemenas"},
    "CI": {message: "Dramblio Kaulo Krantas"},
    "DZ": {message: "Alžyras"},
    "Hola cannot work because another extension is controlling your proxy settings.": {message: "Hola negali dirbti, nes kitas pratęsimas kontroliuoti savo proxy nustatymus."},
    "Testing connection...": {message: "Testavimas ryšys..."},
    "GE": {message: "Gruzija"},
    "CX": {message: "Kalėdų sala"},
    "My Settings": {message: "Mano nustatymai"},
    "LB": {message: "Libanas"},
    "Cool site!": {message: "Cool svetainė!"},
    "FK": {message: "Falklando salos"},
    "Never ask me again": {message: "Neklausti"},
    "Enable Hola Accelerator": {message: "Įjungti Hola Accelerator"},
    "Try it": {message: "Išbandykite ją"},
    "DE": {message: "Vokietija"},
    "Back to $1": {message: "Grįžti į $1"},
    "MV": {message: "Maldivai"},
    "even more...": {message: "dar daugiau..."},
    "PN": {message: "Pitkernas"},
    "BH": {message: "Bahreinas"},
    "GI": {message: "Gibraltaras"},
    "WF": {message: "Wallisas ir Futuna"},
    "RO": {message: "Rumunija"},
    "$1 via Hola": {message: "$1 per Hola"},
    "IN": {message: "Indija"},
    "GP": {message: "Gvadelupė"},
    "Configuring...": {message: "Konfigūravimas..."},
    "FO": {message: "Farerų salos"},
    "CS": {message: "Serbija ir Juodkalnija"},
    "MC": {message: "Monakas"},
    "HN": {message: "Hondūras"},
    "BR": {message: "Brazilija"},
    "Get Free Premium": {message: "Gauk Nemokamai Premium"},
    "SB": {message: "Saliamono salos"},
    "Translate to your language": {message: "Versti į jūsų kalbą"},
    "PS": {message: "Palestinos teritorija"},
    "NZ": {message: "Naujoji Zelandija"},
    "working? remember": {message: "veikia? prisiminti"},
    "From": {message: "Nuo"},
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {message: "Prašome išjungti kitus <a>plėtinius</a> , kad jūs manote, gali kontroliuoti savo proxy nustatymus, pavyzdžiui, ad-blokatoriais, kitais VPN paslaugos, ir tt"},
    "GB": {message: "Didžioji Britanija"},
    "I'm using $1 to view $2 in my country, and surf faster!": {message: "Aš naudoju $1 iki $2 peržiūrėti mano šalyje, ir naršyti greičiau!"},
    "On": {message: "Įjungta"},
    "More sites...": {message: "daugiau..."},
    "HT": {message: "Haitis"},
    "GF": {message: "Prancūzijos Gviana"},
    "ZZ": {message: "Nežinoma ar neteisinga sritis"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Sena  Firefox versija. Paspauskite <a> čia </a>, kad atnaujintumėte."},
    "KM": {message: "Komorai"},
    "Oh, yes!": {message: "O, taip!"},
    "KW": {message: "Kuveitas"},
    "TC": {message: "Turkso ir Caicoso salos"},
    "MQ": {message: "Martinika"},
    "$1 Buffering?": {message: "$1 kaupimas?"},
    "MZ": {message: "Mozambikas"},
    "ES": {message: "Ispanija"},
    "BO": {message: "Bolivija"},
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {message: "$1 Hola pasiekti $2\n\nSpauskite čia norėdami padaryti pats: $3\n\nJis įdiegia Hola, kuri leidžia man naršyti internete greičiau ir pasiekite $4$5"},
    "AL": {message: "Albanija"},
    "Using": {message: "Naudojant"},
    "Share $1 via $2": {message: "Dalytis $1 per $2"},
    "TR": {message: "Turkija"},
    "GN": {message: "Gvinėja"},
    "SI": {message: "Slovėnija"},
    "CO": {message: "Kolumbija"},
    "Settings": {message: "Nustatymai"},
    "AQ": {message: "Antarktis"},
    "Hola Accelerator": {message: "Hola Akceleratoriaus"},
    "Stopping peer routing...": {message: "Stabdymo tarpusavio maršruto..."},
    "Hola is not available right now, but we are working on it.": {message: "Hola nėra dabar, bet mes su juo dirbti."},
    "JO": {message: "Jordanija"},
    "Awesome!": {message: "Nuostabu!"},
    "SM": {message: "San Marinas"},
    "Solve buffering": {message: "Išspręskite buferinė"},
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {message: "Jums reikia atnaujinti į naujausią versiją operos naudoti Hola. Paspauskite <a>čia</a> , kad atnaujinti."},
    "CL": {message: "Čilė"},
    "CU": {message: "Kuba"},
    "ML": {message: "Malis"},
    "Get 24/7 Unblocking": {message: "Gaukite 24/7 Atblokavimą"},
    "ET": {message: "Etiopija"},
    "IS": {message: "Islandija"},
    "Reload Hola": {message: "Perkrauti Hola"},
    "Popular sites": {message: "Populiariausių svetainių"},
    "back to": {message: "atgal į"},
    "Connecting...": {message: "Jungiamasi..."},
    "Get Hola Accelerator": {message: "Gauk Hola Accelerator"},
    "MH": {message: "Maršalo Salos"},
    "BG": {message: "Bulgarija"},
    "Log in": {message: "Prisijungti"},
    "BS": {message: "Bahamos"},
    "Check your Internet connection": {message: "Patikrinkite, ar turite interneto prieigą"},
    "TL": {message: "Rytų Timoras"},
    "Upgrade": {message: "Atnaujinti"},
    "BZ": {message: "Belizas"},
    "CY": {message: "Kipras"},
    "Hola is off, click it to turn it on": {message: "Hola yra išjungtas, spustelėkite, kad įjungtumėte"},
    "Finding new peers...": {message: "Ieškant naujų bendraamžių..."},
    "IM": {message: "Meino sala"},
    "IE": {message: "Airija"},
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {message: "Sveiki,\n\naš pradėjau naudoti $1 ($2). Tai leidžia man naršyti internete greičiau ir pasiekite $3 mano šalyje."},
    "TW": {message: "Taivanas"},
    "KP": {message: "Šiaurės Korėja"},
    "PF": {message: "Prancūzų Polinezija"},
    "app_name": {message: "Hola geresnis internetas"},
    "Remember server": {message: "Prisiminti serverį"},
    "Update": {message: "Atnaujinti"},
    "MW": {message: "Malavis"},
    "GY": {message: "Gajana"},
    "Unblocker is disabled": {message: "Unblocker yra išjungtas"},
    "PK": {message: "Pakistanas"},
    "GQ": {message: "Pusiaujo Gvinėja"},
    "Number of users that pressed not working": {message: "Vartotojų skaičius, kurie paspaudė \"Neveikia\""},
    "NF": {message: "Norfolko sala"},
    "TD": {message: "Čadas"},
    "SO": {message: "Somalis"},
    "BD": {message: "Bangladešas"},
    "HM": {message: "Heardo ir McDonaldo Salų Sritis"},

};
return E; });