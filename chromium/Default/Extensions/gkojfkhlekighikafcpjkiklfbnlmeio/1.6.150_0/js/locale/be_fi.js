'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "JM": {message: "Jamaika"},
    "No, Thanks": {message: "Kiitos ei"},
    "AT": {message: "Itävalta"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Haluatko käyttää Holaa muissa laitteissa? (Xboxissa, PS:llä, Apple TV:ssä, iPhonessa ...). Klikkaa tästä"},
    "SZ": {message: "Swazimaa"},
    "ZM": {message: "Sambia"},
    "app_desc": {message: "Käytä Internet-sivustosta jotka on estetty maasasi, yrityksessä tai koulussa Holalla! Hola on ilmainen ja helppokäyttöinen!"},
    "Need Help?": {message: "Tarvitsetko apua?"},
    "Improve translation": {message: "Paranna käännöstä"},
    "Please enter a web site address, like facebook.com": {message: "Kirjoita Web-sivuston osoite, kuten facebook.com"},
    "Accessing $1 with Hola": {message: "Käyttää $1  Holan kautta"},
    "Access $1 - cool site!": {message: "Käytä $1 - viileä sivusto!"},
    "Share $1 on $2": {message: "Jaa $1 $2"},
    "Talk to us on $1": {message: "Puhu meille $1"},
    "There seems to be an error": {message: "Virhe jossakin"},
    "MA": {message: "Marokko"},
    "Access cool sites": {message: "Käytä viileitä sivustoja"},
    "MP": {message: "Pohjois-Mariaanit"},
    "Don't show again for $1 for one week": {message: "Älä näytä uudelleen $1 viikoon"},
    "Unblocker": {message: "Eston poisto"},
    "Support Hola": {message: "Tue Holaa"},
    "Downloading": {message: "Lataa"},
    "Access any site from any country, free": {message: "Käytä mitä tahansa sivustoa mistä tahansa maasta - ilmaiseksi"},
    "Try to <span>reload</span>": {message: "Yritä <span>päivittää</span>"},
    "Premium": {message: "Palkkio"},
    "Get Unlimited Unblocking": {message: "Hanki rajaton estojen poisto"},
    "Apply settings...": {message: "Käytä asetuksia ..."},
    "EE": {message: "Viro"},
    "CK": {message: "Cookinsaaret"},
    "BY": {message: "Valko-Venäjä"},
    "KR": {message: "Etelä-Korea"},
    "NO": {message: "Norja"},
    "More countries": {message: "Lisää maita"},
    "Top popular sites": {message: "Suosituimmat sivustot"},
    "MG": {message: "Madagaskar"},
    "SR": {message: "Surinam"},
    "CF": {message: "Keski-Afrikan tasavalta"},
    "AE": {message: "Arabiemiirikunnat"},
    "BA": {message: "Bosnia ja Hertsegovina"},
    "not working?": {message: "eikö toimi?"},
    "TH": {message: "Thaimaa"},
    "Get Premium support": {message: "Hanki Premium tuki"},
    "$1 from $2": {message: "Alkaen $1 $2"},
    "Author:": {message: "Tekijä:"},
    "CC": {message: "Kookossaaret"},
    "Browsing": {message: "Selailu"},
    "Thank you!": {message: "Kiitos!"},
    "NC": {message: "Uusi-Kaledonia"},
    "Buffering?": {message: "Puskurointi?"},
    "Enter site to access": {message: "Anna sivusto päästäksesi"},
    "Go Hola Premium": {message: "Hanki Premium"},
    "Install Accelerator": {message: "Asenna Accelerator"},
    "sites that are censored": {message: "sivustoja, jotka sensuroidaan"},
    "Get the Fastest Servers": {message: "Hanki nopeimmat palvelimet"},
    "Server saved!": {message: "Palvelin tallennettu!"},
    "Menu": {message: "Valikko"},
    "SE": {message: "Ruotsi"},
    "AZ": {message: "Azerbaidžan"},
    "Enjoy!": {message: "Nauti!"},
    "AF": {message: "Afganistan"},
    "Love Hola?": {message: "Rakastatko Holaa?"},
    "KE": {message: "Kenia"},
    "Turn on to get started": {message: "Kytke päälle aloittaaksesi"},
    "Please help us get better": {message: "Auta meitä paremmiksi"},
    "FM": {message: "Mikronesian liittovaltio"},
    "(some Hola features are not available on your version)": {message: "(jotkut Holan ominaisuudet eivät ole käytettävissä versiossasi)"},
    "Free": {message: "Ilmaiseksi"},
    "Using Hola": {message: "Käyttämällä Hola"},
    "Install": {message: "Asenna"},
    "RU": {message: "Venäjä"},
    "Install Free Hola Accelerator": {message: "Asenna Free Hola Accelerator"},
    "Working?": {message: "Toimi?"},
    "FI": {message: "Suomi"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Hanki Hola Plus käyttääksesi palvelua katkotta ja ilman mainoksia."},
    "LU": {message: "Luxemburg"},
    "Language": {message: "Kieli"},
    "VI": {message: "Yhdysvaltain Neitsytsaaret"},
    "MX": {message: "Meksiko"},
    "more options...": {message: "lisäasetukset..."},
    "Author site:": {message: "Tekijän sivusto:"},
    "DO": {message: "Dominikaaninen tasavalta"},
    "HU": {message: "Unkari"},
    "KH": {message: "Kambodža"},
    "No idle peers found.": {message: "Vapaita peers ei löytynyt."},
    "DK": {message: "Tanska"},
    "CV": {message: "Kap Verde"},
    "Reload": {message: "Päivitä"},
    "My favorites": {message: "Omat suosikit"},
    "Number of users that use this option": {message: "Käyttäjien määrä, jotka käyttävät tätä vaihtoehtoa"},
    "MO": {message: "Macao – Kiinan erityishallintoalue"},
    "MF": {message: "Saint-Martin"},
    "HR": {message: "Kroatia"},
    "CZ": {message: "Tšekki"},
    "BL": {message: "Saint-Barthélemy"},
    "Check out Hola for $1!": {message: "Tutustu Hola $1!"},
    "Never be a peer": {message: "Älä koskaan peer"},
    "Log out": {message: "Kirjaudu ulos"},
    "ST": {message: "São Tomé ja Príncipe"},
    "Get Hola for Android": {message: "Hanki Hola Androidille"},
    "Select a Country": {message: "Valitse maa"},
    "Off": {message: "Pois"},
    "Try another server": {message: "Kokeile toista palvelinta"},
    "Go": {message: "Siirry"},
    "Did you experience any buffering?": {message: "Koitko puskurointia?"},
    "CG": {message: "Kongo-Brazzaville"},
    "More...": {message: "Lisää ..."},
    "Mode": {message: "Tila"},
    "MK": {message: "Makedonia"},
    "GR": {message: "Kreikka"},
    "AG": {message: "Antigua ja Barbuda"},
    "Hey,\n\nI'm using": {message: "Hei,\n\nKäytän"},
    "AN": {message: "Alankomaiden Antillit"},
    "Turn off Accelerator": {message: "Sammuta Accelerator"},
    "Get help from engineer over Skype:": {message: "Hanki apua insinööriltä Skypessä:"},
    "Not working?": {message: "Ei toimi?"},
    "UA": {message: "Ukraina"},
    "EH": {message: "Länsi-Sahara"},
    "KN": {message: "Saint Kitts ja Nevis"},
    "SC": {message: "Seychellit"},
    "Trying another peer...": {message: "Yritetään toista peer..."},
    " via ": {message: "kautta"},
    "NL": {message: "Alankomaat"},
    "HK": {message: "Hongkong – Kiinan erityishallintoalue"},
    "MY": {message: "Malesia"},
    "not working? try another server": {message: "ei toimi? kokeile toista palvelinta"},
    "VA": {message: "Vatikaani"},
    "IO": {message: "Brittiläinen Intian valtameren alue"},
    "I just accessed a censored site using Hola for $1!": {message: "Olen juuri avannut sensuroidun sivuston käyttäen Hola $1!"},
    "Don't show again for any site for one week": {message: "Älä näytä uudelleen millekkään sivustolle viikoon"},
    "CN": {message: "Kiina"},
    "Video stuck?": {message: "Video jumissa?"},
    "CH": {message: "Sveitsi"},
    "KG": {message: "Kirgisia"},
    "Be the first to get Hola for iPhone/iPad - Register now:": {message: "Ole ensimmäisten joukossa saada Hola iPhone / iPad - Rekisteröidy nyt:"},
    "US": {message: "Yhdysvallat"},
    "Stop Hola": {message: "Pysäytä Hola"},
    "FJ": {message: "Fidži"},
    "Turn on Hola": {message: "Kytke Hola"},
    "Submit": {message: "Lähetä"},
    "Get Hola Premium": {message: "Hanki Hola Premium"},
    "We will be in touch with you soon": {message: "Otamme yhteyttä sinuun pian"},
    "Choose<br>Country": {message: "Valitse <br> Maa"},
    "Popular in $1": {message: "Suositut palvelut maassa $1"},
    "Tell friends about $1": {message: "Kerro ystäville $1"},
    "IQ": {message: "Irak"},
    "AS": {message: "Amerikan Samoa"},
    "TZ": {message: "Tansania"},
    "Turn on Accelerator": {message: "Kytke Accelerator"},
    "BV": {message: "Bouvet’nsaari"},
    "LT": {message: "Liettua"},
    "PM": {message: "Saint-Pierre ja Miquelon"},
    "Did it work?": {message: "Toimiko se?"},
    "Initializing...": {message: "Valmistellaan..."},
    "TT": {message: "Trinidad ja Tobago"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola ei toimi hyvin Windows 8 -tilassa. Ole hyvä ja vaihda työpöytätilaan. Napsauta <a>tästä</a> saadaksesi ohjeita"},
    "SY": {message: "Syyria"},
    "Help": {message: "Apua"},
    "About Hola": {message: "Tietoja Holasta"},
    "GL": {message: "Grönlanti"},
    "Invite friends - free Premium.": {message: "Kutsu ystäviä - ilmaiseksi Premium."},
    "PG": {message: "Papua-Uusi-Guinea"},
    "Account": {message: "Tili"},
    "CD": {message: "Kongo-Kinshasa"},
    "Finding peers...": {message: "Etsii peers ..."},
    "VC": {message: "Saint Vincent ja Grenadiinit"},
    "cool sites": {message: "viileät sivustot"},
    "Access $1?": {message: "Poistetaanko palvelun $1 esto?"},
    "JP": {message: "Japani"},
    "Sign up": {message: "Liity"},
    "TJ": {message: "Tadžikistan"},
    "Make your Internet better with $1": {message: "Parempi internet $1"},
    "Invite friends. Get Premium.": {message: "Kutsu ystäviä. Saat Premiumin."},
    "Try again": {message: "Yritä uudelleen"},
    "Hola site list": {message: "Hola sivusto lista"},
    "IT": {message: "Italia"},
    "Yes": {message: "Kyllä"},
    "Enable": {message: "Ota käyttöön"},
    "Loading": {message: "Ladataan"},
    "FR": {message: "Ranska"},
    "EG": {message: "Egypti"},
    "start": {message: "aloita"},
    "Changing country...": {message: "Vaihtaa maata..."},
    "RW": {message: "Ruanda"},
    "UM": {message: "Yhdysvaltain pienet erillissaaret"},
    "BE": {message: "Belgia"},
    "Popular in the world": {message: "Suositut palvelut"},
    "Accelerator": {message: "Kiihdytys"},
    "Enter your email": {message: "Kirjoita sähköpostiosoite"},
    "SA": {message: "Saudi-Arabia"},
    "No": {message: "Ei"},
    "ZA": {message: "Etelä-Afrikka"},
    "PT": {message: "Portugali"},
    "CA": {message: "Kanada"},
    "Account type": {message: "Tilin tyyppi"},
    "Starting...": {message: "Käynnistetään..."},
    "Loading site...": {message: "Ladataan sivua..."},
    "CM": {message: "Kamerun"},
    "I did not experience any buffering": {message: "En kokenut puskurointia"},
    "Solve buffering problems with": {message: "Ratkaise puskurointi ongelmia"},
    "My Account": {message: "Oma tilini"},
    "PL": {message: "Puola"},
    "Solves it": {message: "Ratkaisee sen"},
    "Start Hola": {message: "Käynnistä Hola"},
    "No, fix it": {message: "Ei, korjaa se"},
    "Turn off Hola": {message: "Sammuta Hola"},
    "KY": {message: "Caymansaaret"},
    "Please enter a valid email address.": {message: "Kirjoita voimassa oleva sähköpostiosoite."},
    "PH": {message: "Filippiinit"},
    "Buffering problems?": {message: "Puskurointi ongelmia?"},
    "TF": {message: "Ranskan ulkopuoliset eteläiset alueet"},
    "KZ": {message: "Kazakstan"},
    "Report a problem": {message: "Ilmoita ongelmasta"},
    "SJ": {message: "Huippuvuoret ja Jan Mayen"},
    "Working!": {message: "Toimii!"},
    "MM": {message: "Myanmar"},
    "Get access to censored sites, try it now: $1": {message: "Hanki pääsy sensuroiduille sivustoille, kokeile sitä nyt: $1"},
    "changing...": {message: "vaihdetaan..."},
    "GS": {message: "Etelä-Georgia ja Eteläiset Sandwichsaaret"},
    "Access more sites": {message: "Käytä useampia sivustoja"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Käytät Chromen vanhaa versiota, <a>päivitä nyt</a> käyttääksesi Holaa"},
    "AX": {message: "Ahvenanmaa"},
    "I can now access $1 from any country!": {message: "Voin nyt käyttää $1 mistä tahansa maasta!"},
    "VG": {message: "Brittiläiset Neitsytsaaret"},
    "YE": {message: "Jemen"},
    "CI": {message: "Norsunluurannikko"},
    "Hola cannot work because another extension is controlling your proxy settings.": {message: "Hola ei voi toimia, koska toinen laajennus ohjaa välityspalvelimen asetuksia."},
    "Testing connection...": {message: "Testaa yhteyttä..."},
    "CX": {message: "Joulusaari"},
    "My Settings": {message: "Omat asetukset"},
    "LB": {message: "Libanon"},
    "Cool site!": {message: "Viileä sivusto!"},
    "Never ask me again": {message: "Älä kysy uudestaan"},
    "FK": {message: "Falklandinsaaret"},
    "Enable Hola Accelerator": {message: "Ota käyttöön Hola Accelerator"},
    "Try it": {message: "Kokeile"},
    "Back to $1": {message: "Takaisin $1"},
    "DE": {message: "Saksa"},
    "even more...": {message: "vieläkin..."},
    "MV": {message: "Malediivit"},
    "PN": {message: "Pitcairn"},
    "$1 via Hola": {message: "$1 - esto poistettu"},
    "WF": {message: "Wallis ja Futuna"},
    "Configuring...": {message: "Määrittäminen ..."},
    "IN": {message: "Intia"},
    "AR": {message: "Argentiina"},
    "FO": {message: "Färsaaret"},
    "CS": {message: "Serbia ja Montenegro"},
    "Get Free Premium": {message: "Hanki Free Premium"},
    "BR": {message: "Brasilia"},
    "Translate to your language": {message: "Käännä omalle kielellesi"},
    "SB": {message: "Salomonsaaret"},
    "working? remember": {message: "toimi? muista"},
    "NZ": {message: "Uusi-Seelanti"},
    "PS": {message: "Palestiina"},
    "From": {message: "Alkaen"},
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {message: "Ole hyvä ja poista muut <a>laajennukset</a>, jotka voisivat ohjata välityspalvelimen asetuksia, kuten mainos-estäjät, muut VPN-palvelut jne."},
    "GB": {message: "Britannia"},
    "I'm using $1 to view $2 in my country, and surf faster!": {message: "Käytän $1 nähdäkseni $2 kotimaassani, ja surffaan nopeammin!"},
    "On": {message: "Päällä"},
    "More sites...": {message: "Lisää sivuja ..."},
    "GF": {message: "Ranskan Guayana"},
    "ZZ": {message: "tuntematon tai virheellinen alue"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Käytät Firefoxin vanhaa versiota. Päivitä <a>napsauttamalla tästä</a>."},
    "KM": {message: "Komorit"},
    "Oh, yes!": {message: "Voi, kyllä!"},
    "TC": {message: "Turks- ja Caicossaaret"},
    "$1 Buffering?": {message: "$1 puskurointi?"},
    "MZ": {message: "Mosambik"},
    "ES": {message: "Espanja"},
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {message: "$1 Hola pääsyn $2\n\nKlikkaa tästä tekemään samoin: $3\n\nSe asentaa Holan, joka antaa minun surffata Internetissä nopeammin ja käyttää $4$5"},
    "Using": {message: "Käyttäminen"},
    "Share $1 via $2": {message: "Jaa $1 kautta $2"},
    "TR": {message: "Turkki"},
    "CO": {message: "Kolumbia"},
    "Settings": {message: "Asetukset"},
    "AQ": {message: "Antarktis"},
    "Stopping peer routing...": {message: "Pysäyttää peer reititys..."},
    "Hola is not available right now, but we are working on it.": {message: "Hola ei ole juuri nyt saatavilla, mutta työskentelemme sen eteen."},
    "JO": {message: "Jordania"},
    "Awesome!": {message: "Mahtavaa!"},
    "Solve buffering": {message: "Ratkaise puskurointi"},
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {message: "Sinun täytyy päivittää Operan uusin versio käyttääksesi Holaa. Paina <a>tästä</a> päivittääksesi."},
    "CU": {message: "Kuuba"},
    "Get 24/7 Unblocking": {message: "Hanki 24/7 eston poisto"},
    "ET": {message: "Etiopia"},
    "IS": {message: "Islanti"},
    "Reload Hola": {message: "Päivitä Hola"},
    "Popular sites": {message: "Suosittuja sivustoja"},
    "back to": {message: "Takaisin"},
    "Connecting...": {message: "Yhdistetään ..."},
    "Get Hola Accelerator": {message: "Hanki Hola Accelerator"},
    "MH": {message: "Marshallinsaaret"},
    "Log in": {message: "Kirjaudu sisään"},
    "BS": {message: "Bahama"},
    "Check your Internet connection": {message: "Tarkista, että sinulla on internet-yhteys"},
    "TL": {message: "Itä-Timor"},
    "Upgrade": {message: "Päivitä"},
    "CY": {message: "Kypros"},
    "Hola is off, click it to turn it on": {message: "Hola on pois päältä, kytke päälle"},
    "Finding new peers...": {message: "Etsii uusia peers ..."},
    "IM": {message: "Mansaari"},
    "IE": {message: "Irlanti"},
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {message: "Hei,\n\nalkoi käyttää $1 ($2). Se antaa minun surffata Internetissä nopeammin ja käyttää $3 kotimaassani."},
    "KP": {message: "Pohjois-Korea"},
    "PF": {message: "Ranskan Polynesia"},
    "app_name": {message: "Holan parempi internet"},
    "Remember server": {message: "Muista palvelin"},
    "Update": {message: "Päivitä"},
    "Unblocker is disabled": {message: "Eston poisto ei käytössä"},
    "GQ": {message: "Päiväntasaajan Guinea"},
    "Number of users that pressed not working": {message: "Käyttäjien määrä, jotka ilmoittivat 'ei toimi'"},
    "NF": {message: "Norfolkinsaari"},
    "TD": {message: "Tšad"},
    "HM": {message: "Heard- ja McDonaldinsaaret"},

};
return E; });