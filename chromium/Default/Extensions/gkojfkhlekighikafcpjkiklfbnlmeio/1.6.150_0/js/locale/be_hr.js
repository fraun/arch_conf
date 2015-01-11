'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Džibuti"},
    "JM": {message: "Jamajka"},
    "No, Thanks": {message: "Ne, hvala"},
    "AT": {message: "Austrija"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Želite Hola na drugim uređajima? (Xbox, PS, Apple TV, iPhone ...). Kliknite ovdje"},
    "SZ": {message: "Svazi"},
    "YT": {message: "Majote"},
    "BN": {message: "Brunej"},
    "ZM": {message: "Zambija"},
    "app_desc": {message: "Pristup web stranice blokiran u vašoj zemlji, tvrtku ili školu s Hola! Hola je besplatan i jednostavan za korištenje!"},
    "Need Help?": {message: "Trebate li pomoć?"},
    "Improve translation": {message: "Poboljšati prijevod"},
    "Please enter a web site address, like facebook.com": {message: "Unesite adresu web stranice, kao facebook.com"},
    "PR": {message: "Portoriko"},
    "Accessing $1 with Hola": {message: "Pristupanje $1 s Hola"},
    "Access $1 - cool site!": {message: "Pristup $1 - super stranica!"},
    "Share $1 on $2": {message: "Podijelite $1 na $2"},
    "SH": {message: "Sveta Helena"},
    "Talk to us on $1": {message: "Razgovarajte s nama na $1"},
    "There seems to be an error": {message: "Čini se da postoji greška"},
    "MA": {message: "Maroko"},
    "Access cool sites": {message: "Pristup kul stranice"},
    "MP": {message: "Sjeverni Marijanski Otoci"},
    "Don't show again for $1 for one week": {message: "Nemojte ponovno pokazati za $1 za jedan tjedan"},
    "Support Hola": {message: "Podrška Hola"},
    "Downloading": {message: "Skidanje"},
    "Access any site from any country, free": {message: "Pristupiti bilo kojem mjestu iz bilo koje zemlje, besplatan"},
    "Try to <span>reload</span>": {message: "Pokušajte <span> reload </span>"},
    "LR": {message: "Liberija"},
    "Premium": {message: "Premija"},
    "Get Unlimited Unblocking": {message: "Dobiti neograničen deblokadu"},
    "Apply settings...": {message: "Primjena postavki ..."},
    "TN": {message: "Tunis"},
    "EE": {message: "Estonija"},
    "CK": {message: "Kukovi Otoci"},
    "BY": {message: "Bjelorusija"},
    "NO": {message: "Norveška"},
    "KR": {message: "Južna Koreja"},
    "More countries": {message: "Više zemalja"},
    "AM": {message: "Armenija"},
    "Top popular sites": {message: "Top popularne web stranice"},
    "SR": {message: "Surinam"},
    "MG": {message: "Madagaskar"},
    "BT": {message: "Butan"},
    "CF": {message: "Srednjoafrička Republika"},
    "BA": {message: "Bosna i Hercegovina"},
    "AE": {message: "Ujedinjeni Arapski Emirati"},
    "not working?": {message: "ne radi?"},
    "TH": {message: "Tajland"},
    "Get Premium support": {message: "Get Premium podršku"},
    "$1 from $2": {message: "$1 iz $2"},
    "Author:": {message: "Autor:"},
    "CC": {message: "Kokosovi Otoci"},
    "Browsing": {message: "Pregledavajući"},
    "Thank you!": {message: "Hvala vam!"},
    "NC": {message: "Nova Kaledonija"},
    "Buffering?": {message: "Primanje sadržaja?"},
    "Enter site to access": {message: "Unesite mjesto za pristup"},
    "Go Hola Premium": {message: "Idi Hola Premium"},
    "Install Accelerator": {message: "Instalirajte Accelerator"},
    "sites that are censored": {message: "mjesta koja se cenzurira"},
    "Get the Fastest Servers": {message: "Nabavite najbržih poslužitelja"},
    "Server saved!": {message: "Server spašen!"},
    "Menu": {message: "Izbornik"},
    "SE": {message: "Švedska"},
    "AZ": {message: "Azerbajdžan"},
    "Enjoy!": {message: "Uživajte!"},
    "AF": {message: "Afganistan"},
    "Love Hola?": {message: "Ljubav Hola?"},
    "NG": {message: "Nigerija"},
    "KE": {message: "Kenija"},
    "Turn on to get started": {message: "Uključite se početak"},
    "LK": {message: "Šri Lanka"},
    "Please help us get better": {message: "Molimo nam pomoći da se bolje"},
    "ID": {message: "Indonezija"},
    "FM": {message: "Mikronezija"},
    "(some Hola features are not available on your version)": {message: "(Neki Hola značajke nisu dostupne na vašem verziji)"},
    "GM": {message: "Gambija"},
    "Free": {message: "Besplatno"},
    "LV": {message: "Latvija"},
    "Using Hola": {message: "Korištenje Hola"},
    "Install": {message: "Instalirati"},
    "RU": {message: "Rusija"},
    "Install Free Hola Accelerator": {message: "Uvesti Slobodan Hola Accelerator"},
    "Working?": {message: "Rad?"},
    "FI": {message: "Finska"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Nabavite Hola Plus UN-prekida, ad-free uslugu."},
    "LU": {message: "Luksemburg"},
    "Language": {message: "Jezik"},
    "VI": {message: "Američki Djevičanski Otoci"},
    "MX": {message: "Meksiko"},
    "IL": {message: "Izrael"},
    "more options...": {message: "više opcija ..."},
    "Author site:": {message: "Autor stranica:"},
    "HU": {message: "Mađarska"},
    "DO": {message: "Dominikanska Republika"},
    "KH": {message: "Kambodža"},
    "No idle peers found.": {message: "Ne miruje vršnjaci pronađena."},
    "DK": {message: "Danska"},
    "CV": {message: "Zeleni Rt"},
    "QA": {message: "Katar"},
    "Reload": {message: "Osvježi"},
    "My favorites": {message: "Moji favoriti"},
    "Number of users that use this option": {message: "Broj korisnika koji koriste ovu mogućnost"},
    "MO": {message: "Makao S.A.R. Kine"},
    "MF": {message: "Sveti Martin"},
    "HR": {message: "Hrvatska"},
    "CZ": {message: "Češka Republika"},
    "BL": {message: "Sveti Bartolomej"},
    "Check out Hola for $1!": {message: "Provjerite Hola za $1!"},
    "Never be a peer": {message: "Nikad se peer"},
    "Log out": {message: "Odjava"},
    "AU": {message: "Australija"},
    "ST": {message: "Sveti Toma i Prinsipe"},
    "Get Hola for Android": {message: "Nabavite Hola za Android"},
    "Select a Country": {message: "Odaberite neku zemlju"},
    "Off": {message: "Isključeno"},
    "Try another server": {message: "Pokušajte drugi poslužitelj"},
    "Go": {message: "Idi"},
    "Did you experience any buffering?": {message: "Jeste li iskusiti bilo kašnjenje?"},
    "CG": {message: "Kongo"},
    "More...": {message: "više..."},
    "Mode": {message: "Način"},
    "GW": {message: "Gvineja Bisau"},
    "MK": {message: "Bivša Jugoslavenska Republika Makedonija"},
    "GR": {message: "Grčka"},
    "AG": {message: "Antigua i Barbuda"},
    "AI": {message: "Anguila"},
    "Hey,\n\nI'm using": {message: "Hej,\n\nja sam koristeći"},
    "AN": {message: "Nizozemski Antili"},
    "Turn off Accelerator": {message: "Isključite Accelerator"},
    "Get help from engineer over Skype:": {message: "Dobiti pomoć od inženjera preko skype:"},
    "Not working?": {message: "Ne radi?"},
    "UA": {message: "Ukrajina"},
    "EH": {message: "Zapadna Sahara"},
    "KN": {message: "Sveti Kristofor i Nevis"},
    "SC": {message: "Sejšeli"},
    "Trying another peer...": {message: "Pokušaj drugi peer ..."},
    " via ": {message: " preko "},
    "NL": {message: "Nizozemska"},
    "MS": {message: "Montserat"},
    "EC": {message: "Ekvador"},
    "HK": {message: "Hong Kong S.A.R. Kine"},
    "MY": {message: "Malezija"},
    "CR": {message: "Kostarika"},
    "not working? try another server": {message: "ne radi? pokušajte drugi poslužitelj"},
    "VA": {message: "Grad Vatikan"},
    "IO": {message: "Britanski Teritorij Indijskog Oceana"},
    "RS": {message: "Srbija"},
    "I just accessed a censored site using Hola for $1!": {message: "Upravo sam pristupiti jedan cenzurirani stranice koristeći Hola za $1!"},
    "Don't show again for any site for one week": {message: "Ne pokazuj za bilo mjesta za jedan tjedan"},
    "CN": {message: "Kina"},
    "UY": {message: "Urugvaj"},
    "PY": {message: "Paragvaj"},
    "Video stuck?": {message: "Video zapeli?"},
    "MU": {message: "Mauricijus"},
    "CH": {message: "Švicarska"},
    "LI": {message: "Lihtenštajn"},
    "GH": {message: "Gana"},
    "KG": {message: "Kirgistan"},
    "Be the first to get Hola for iPhone/iPad - Register now:": {message: "Budite prvi koji će dobiti Hola za iPhone / iPad - Registrirajte se sad:"},
    "US": {message: "Sjedinjene Države"},
    "Stop Hola": {message: "Zaustavi Hola"},
    "SL": {message: "Sijera Leone"},
    "FJ": {message: "Fidži"},
    "Turn on Hola": {message: "Uključite Hola"},
    "Submit": {message: "Podnijeti"},
    "Get Hola Premium": {message: "Nabavite Hola Premium"},
    "We will be in touch with you soon": {message: "Mi ćemo biti u kontaktu s vama uskoro"},
    "Choose<br>Country": {message: "Izabrati <br> Zemlja"},
    "Popular in $1": {message: "Popularno u $1"},
    "Tell friends about $1": {message: "Recite prijateljima oko $1"},
    "ER": {message: "Eritreja"},
    "IQ": {message: "Irak"},
    "AS": {message: "Američka Samoa"},
    "TZ": {message: "Tanzanija"},
    "Turn on Accelerator": {message: "Uključite Accelerator"},
    "LY": {message: "Libijska Arapska Džamahirija"},
    "GT": {message: "Gvatemala"},
    "BV": {message: "Otok Bouvet"},
    "LT": {message: "Litva"},
    "SG": {message: "Singapur"},
    "PM": {message: "Sveti Petar i Miguel"},
    "Did it work?": {message: "Je li uspjelo?"},
    "Initializing...": {message: "Pokreće se ..."},
    "TT": {message: "Trinidad i Tobago"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola ne radi dobro na Windows 8 modu. Molimo prebaciti na desktop modu. Kliknite <a> ovdje </a> za upute"},
    "SY": {message: "Sirija"},
    "SK": {message: "Slovačka"},
    "Help": {message: "Pomoći"},
    "About Hola": {message: "O Hola"},
    "GL": {message: "Grenland"},
    "Invite friends - free Premium.": {message: "Pozovite prijatelje - besplatno Premium."},
    "PG": {message: "Papua Nova Gvineja"},
    "Account": {message: "Račun"},
    "CD": {message: "Demokratska Republika Kongo"},
    "BW": {message: "Bocvana"},
    "Finding peers...": {message: "Pronalaženje vršnjaka ..."},
    "ZW": {message: "Zimbabve"},
    "VC": {message: "Sveti Vincent i Grenadini"},
    "cool sites": {message: "Cool sajtove"},
    "Access $1?": {message: "Pristupite $1?"},
    "NA": {message: "Namibija"},
    "Sign up": {message: "Prijavite se"},
    "TJ": {message: "Tadžikistan"},
    "Make your Internet better with $1": {message: "Učinite vaš internet bolje s $1"},
    "LC": {message: "Sveta Lucija"},
    "Invite friends. Get Premium.": {message: "Pozovite prijatelje. Get Premium."},
    "Try again": {message: "Pokušaj ponovno"},
    "MN": {message: "Mongolija"},
    "Hola site list": {message: "Hola Popis stranica"},
    "IT": {message: "Italija"},
    "RE": {message: "Reunion"},
    "Yes": {message: "Da"},
    "Enable": {message: "Omogućiti"},
    "Loading": {message: "Utovar"},
    "EG": {message: "Egipat"},
    "FR": {message: "Francuska"},
    "start": {message: "početak"},
    "Changing country...": {message: "Promjena zemlju ..."},
    "RW": {message: "Ruanda"},
    "UM": {message: "Ujedinjene Države Manjih Pacifičkih Otoka"},
    "BE": {message: "Belgija"},
    "Popular in the world": {message: "Popularna u svijetu"},
    "Accelerator": {message: "Akcelerator"},
    "Enter your email": {message: "Unesite svoju e-mail"},
    "LS": {message: "Lesoto"},
    "SA": {message: "Saudijska Arabija"},
    "No": {message: "Ne"},
    "ZA": {message: "Južnoafrička Republika"},
    "CA": {message: "Kanada"},
    "Account type": {message: "Vrsta računa"},
    "Starting...": {message: "Počevši ..."},
    "Loading site...": {message: "Utovar"},
    "CM": {message: "Kamerun"},
    "I did not experience any buffering": {message: "Nisam iskustvo bilo kašnjenje"},
    "Solve buffering problems with": {message: "Riješite međuspremnički problema s"},
    "My Account": {message: "Moj račun"},
    "PL": {message: "Poljska"},
    "Solves it": {message: "Rješava"},
    "Start Hola": {message: "početak"},
    "No, fix it": {message: "Ne, to popraviti"},
    "Turn off Hola": {message: "Isključite Hola"},
    "KY": {message: "Kajmanski Otoci"},
    "Please enter a valid email address.": {message: "Molimo da unesete ispravnu e-mail adresu."},
    "PH": {message: "Filipini"},
    "Buffering problems?": {message: "Problemi pufcrirajuća?"},
    "NI": {message: "Nikaragva"},
    "TF": {message: "Francuski Južni Teritoriji"},
    "KZ": {message: "Kazakstan"},
    "Report a problem": {message: "Prijavite problem"},
    "SJ": {message: "Svalbard i Jan Mayen"},
    "Working!": {message: "Rad!"},
    "MM": {message: "Mijanma"},
    "DM": {message: "Dominika"},
    "MR": {message: "Mauritanija"},
    "AD": {message: "Andora"},
    "Get access to censored sites, try it now: $1": {message: "Dobiti pristup cenzuriranih stranicama, pokušajte ga sada: $1"},
    "changing...": {message: "mijenjaju ..."},
    "GS": {message: "Južna Gruzija i Južni Sendvič Otoci"},
    "Access more sites": {message: "Pristupne više mjesta"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Vrlo staru verziju Chrome, <a> ažuriranje </a> Chrome koristiti Hola"},
    "ME": {message: "Crna Gora"},
    "AX": {message: "Alandski otoci"},
    "I can now access $1 from any country!": {message: "Ja sada mogu pristupiti $1 iz bilo koje zemlje!"},
    "VG": {message: "Britanski Djevičanski Otoci"},
    "VN": {message: "Vijetnam"},
    "DZ": {message: "Alžir"},
    "CI": {message: "Obala Bjelokosti"},
    "YE": {message: "Jemen"},
    "Hola cannot work because another extension is controlling your proxy settings.": {message: "Hola ne može raditi jer je još jedan produžetak je kontroliranje svoje proxy postavke."},
    "Testing connection...": {message: "Testiranje veze ..."},
    "GE": {message: "Gruzija"},
    "CX": {message: "Božićni Otok"},
    "My Settings": {message: "Moje postavke"},
    "LB": {message: "Libanon"},
    "Cool site!": {message: "Cool stranica!"},
    "FK": {message: "Falklandski Otoci"},
    "Never ask me again": {message: "Nikada me više pitati"},
    "Enable Hola Accelerator": {message: "Omogućite Hola Accelerator"},
    "Try it": {message: "Pokušajte ga"},
    "DE": {message: "Njemačka"},
    "Back to $1": {message: "Natrag na $1"},
    "MV": {message: "Maldivi"},
    "even more...": {message: "još više ..."},
    "PN": {message: "Pitcairn"},
    "BH": {message: "Bahrein"},
    "WF": {message: "Wallis i Futuna"},
    "RO": {message: "Rumunjska"},
    "$1 via Hola": {message: "$1 preko Hola"},
    "IN": {message: "Indija"},
    "Configuring...": {message: "Podešavanje ..."},
    "CS": {message: "Srbija i Crna Gora"},
    "FO": {message: "Farski Otoci"},
    "MC": {message: "Monako"},
    "Get Free Premium": {message: "Dobiti Slobodan Nagrada"},
    "SB": {message: "Solomonski Otoci"},
    "Translate to your language": {message: "Prijevod na svoj jezik"},
    "PS": {message: "Palestinsko Područje"},
    "NZ": {message: "Novi Zeland"},
    "working? remember": {message: "radi? zapamtiti"},
    "From": {message: "Od"},
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {message: "Molimo onemogućiti ostale <a>nastavke</a> za koje mislite da bi mogli kontrolirati svoje proxy postavke, kao što su ad-blokatora, drugim VPN uslugama, itd."},
    "GB": {message: "Velika Britanija"},
    "I'm using $1 to view $2 in my country, and surf faster!": {message: "Ja sam koristeći $1 do $2 pogledati u mojoj zemlji, i surfati brže!"},
    "On": {message: "Na"},
    "More sites...": {message: "više..."},
    "GF": {message: "Francuska Gvajana"},
    "ZZ": {message: "nepoznata ili nevažeća oblast"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Stara verzija Firefox. Press <a> ovdje </a> nadograditi."},
    "KM": {message: "Komori"},
    "Oh, yes!": {message: "O, da!"},
    "KW": {message: "Kuvajt"},
    "MQ": {message: "Martinik"},
    "TC": {message: "Turkski i Kaikos Otoci"},
    "$1 Buffering?": {message: "$1 Primanje?"},
    "ES": {message: "Španjolska"},
    "MZ": {message: "Mozambik"},
    "BO": {message: "Bolivija"},
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {message: "$1 Hola pristupiti $2\n\nKliknite ovdje da učine isto: $3\n\nOn instalira Hola, što mi omogućuje surfanje Internetom brže i pristupiti $4$5"},
    "AL": {message: "Albanija"},
    "Using": {message: "Korištenje"},
    "Share $1 via $2": {message: "Podijelite $1 preko $2"},
    "MD": {message: "Moldavija"},
    "TR": {message: "Turska"},
    "GN": {message: "Gvineja"},
    "SI": {message: "Slovenija"},
    "CO": {message: "Kolumbija"},
    "Settings": {message: "Postavke"},
    "AQ": {message: "Antarktik"},
    "Stopping peer routing...": {message: "Zaustavljanje vršnjaka usmjeravanje ..."},
    "Hola is not available right now, but we are working on it.": {message: "Hola nije dostupna odmah, ali radimo na tome."},
    "Awesome!": {message: "Strašan!"},
    "Solve buffering": {message: "Riješite bufferinga"},
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {message: "Morate nadograditi na najnoviju verziju Opere za korištenje Hola. Pritisnite <a>ovdje</a> za nadogradnju."},
    "CL": {message: "Čile"},
    "CU": {message: "Kuba"},
    "Get 24/7 Unblocking": {message: "Dobiti 24/7 za deblokiranje"},
    "ET": {message: "Etiopija"},
    "IS": {message: "Island"},
    "Reload Hola": {message: "Osvježi Hola"},
    "Popular sites": {message: "Popularni web stranice"},
    "back to": {message: "natrag na"},
    "Connecting...": {message: "Povezivanje ..."},
    "Get Hola Accelerator": {message: "Nabavite Hola Accelerator"},
    "BG": {message: "Bugarska"},
    "MH": {message: "Maršalovi Otoci"},
    "Log in": {message: "Prijavite se"},
    "BS": {message: "Bahami"},
    "Check your Internet connection": {message: "Provjerite jeste li Internet"},
    "TL": {message: "Istočni Timor"},
    "Upgrade": {message: "Ažuriranje"},
    "CY": {message: "Cipar"},
    "Hola is off, click it to turn it on": {message: "Hola je isključen, pritisnite do uključili"},
    "Finding new peers...": {message: "Pronalaženje novih vršnjaka ..."},
    "IM": {message: "Otok Man"},
    "IE": {message: "Irska"},
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {message: "Pozdrav,\n\npočeo sam koristiti $1 ($2). To mi omogućuje surfanje Internetom brže i pristupiti $3 u svojoj zemlji."},
    "TW": {message: "Tajvan"},
    "KP": {message: "Koreja, Sjeverna"},
    "PF": {message: "Francuska Polinezija"},
    "app_name": {message: "Hola Bolje Internet"},
    "Remember server": {message: "Zapamti poslužitelj"},
    "Update": {message: "Ažuriranje"},
    "MW": {message: "Malavi"},
    "GY": {message: "Gvajana"},
    "Unblocker is disabled": {message: "Unblocker je onemogućen"},
    "GQ": {message: "Ekvatorska Gvineja"},
    "Number of users that pressed not working": {message: "Broj korisnika koji nije pritisnut radnih"},
    "NF": {message: "Otok Norfolk"},
    "TD": {message: "Čad"},
    "SO": {message: "Somalija"},
    "BD": {message: "Bangladeš"},
    "HM": {message: "Otok Heard i Otoci McDonald"},

};
return E; });