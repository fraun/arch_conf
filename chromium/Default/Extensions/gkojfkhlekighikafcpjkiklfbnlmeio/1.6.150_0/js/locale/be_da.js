'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "No, Thanks": {message: "Nej tak"},
    "AT": {message: "Østrig"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Vil du have Hola på flere enheder? (Xbox, PS, Apple TV, iPhone...). Klik her"},
    "BN": {message: "Brunei Darussalam"},
    "app_desc": {message: "Få adgang til websteder blokeret i dit land, virksomhed eller skole med Hola! Hola er gratis og nem at bruge!"},
    "Need Help?": {message: "Har du brug for hjælp?"},
    "Improve translation": {message: "Forbedr oversættelse"},
    "Please enter a web site address, like facebook.com": {message: "Indtast en hjemmeside-adresse, f.eks. facebook.com"},
    "Accessing $1 with Hola": {message: "Adgang $1 med Hola"},
    "Access $1 - cool site!": {message: "Adgang $1 - cool site!"},
    "Share $1 on $2": {message: "Del $1 på $2"},
    "SH": {message: "St. Helena"},
    "Talk to us on $1": {message: "Tal med os på $1"},
    "There seems to be an error": {message: "Der opstod desværre en fejl"},
    "MA": {message: "Marokko"},
    "Access cool sites": {message: "Adgang kølige steder"},
    "MP": {message: "Nordmarianerne"},
    "Don't show again for $1 for one week": {message: "Vis ikke igen for $1 i en uge"},
    "Support Hola": {message: "Støt Hola"},
    "Access any site from any country, free": {message: "Få adgang til enhver side, fra ethvert land, gratis"},
    "Try to <span>reload</span>": {message: "Forsøg at <span>genindlæse</span>"},
    "UZ": {message: "Usbekistan"},
    "Get Unlimited Unblocking": {message: "Få ubegrænset afblokering"},
    "Apply settings...": {message: "Anvend indstillinger..."},
    "TN": {message: "Tunesien"},
    "EE": {message: "Estland"},
    "CK": {message: "Cook-øerne"},
    "BY": {message: "Hviderusland"},
    "NO": {message: "Norge"},
    "KR": {message: "Sydkorea"},
    "More countries": {message: "Flere lande"},
    "AM": {message: "Armenien"},
    "Top popular sites": {message: "Top populære websteder"},
    "SR": {message: "Surinam"},
    "MG": {message: "Madagaskar"},
    "CF": {message: "Centralafrikanske Republik"},
    "BA": {message: "Bosnien-Hercegovina"},
    "AE": {message: "Forenede Arabiske Emirater"},
    "not working?": {message: "Fungerer ikke?"},
    "Get Premium support": {message: "Få Premium support"},
    "$1 from $2": {message: "$1 fra $2"},
    "Author:": {message: "Forfatter:"},
    "CC": {message: "Cocosøerne"},
    "Video": {message: "Videoen"},
    "Thank you!": {message: "Tak!"},
    "NC": {message: "Ny Caledonien"},
    "Buffering?": {message: "Gemmer i buffer?"},
    "Enter site to access": {message: "Indtast stedet for at få adgang"},
    "Go Hola Premium": {message: "Få Hola Premium"},
    "Install Accelerator": {message: "Installer Accelerator"},
    "sites that are censored": {message: "websteder, der er censureret"},
    "Get the Fastest Servers": {message: "Få de hurtigste servere"},
    "Server saved!": {message: "Server gemt!"},
    "SE": {message: "Sverige"},
    "AZ": {message: "Aserbajdsjan"},
    "Enjoy!": {message: "God fornøjelse!"},
    "Love Hola?": {message: "Elsker du Hola?"},
    "Turn on to get started": {message: "Aktiver for at starte"},
    "Please help us get better": {message: "Hjælp os venliggst med at blive bedre"},
    "ID": {message: "Indonesien"},
    "FM": {message: "Mikronesiens Forenede Stater"},
    "(some Hola features are not available on your version)": {message: "(visse Hola funktioner er ikke tilgængelige i denne version)"},
    "Free": {message: "Gratis"},
    "LV": {message: "Letland"},
    "Using Hola": {message: "Brug Hola"},
    "Install": {message: "Installer"},
    "RU": {message: "Rusland"},
    "Install Free Hola Accelerator": {message: "Installer Free Hola Accelerator"},
    "Working?": {message: "Fungerer den?"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Få Hola Plus for uafbrudt, reklamefri service."},
    "Language": {message: "Sprog"},
    "VI": {message: "De amerikanske jomfruøer"},
    "more options...": {message: "flere indstillinger..."},
    "Author site:": {message: "Forfatterside:"},
    "DO": {message: "Den Dominikanske Republik"},
    "HU": {message: "Ungarn"},
    "KH": {message: "Cambodja"},
    "No idle peers found.": {message: "Ingen ledige peers fundet."},
    "DK": {message: "Danmark"},
    "CV": {message: "Kap Verde"},
    "Reload": {message: "Genindlæs"},
    "My favorites": {message: "Mine favoritter"},
    "Number of users that use this option": {message: "Antal af brugere der benytter denne indstilling"},
    "MO": {message: "SAR Macao"},
    "HR": {message: "Kroatien"},
    "CZ": {message: "Tjekkiet"},
    "Check out Hola for $1!": {message: "Tjek Hola for $1!"},
    "Never be a peer": {message: "Vær aldrig en peer"},
    "Log out": {message: "Log ud"},
    "ST": {message: "Sao Tome og Principe"},
    "AU": {message: "Australien"},
    "Get Hola for Android": {message: "Få Hola til Android"},
    "Select a Country": {message: "Vælg et land"},
    "Off": {message: "Fra"},
    "Try another server": {message: "Prøv en anden server"},
    "Go": {message: "Gå"},
    "Did you experience any buffering?": {message: "oplevede du buffering?"},
    "CG": {message: "Congo"},
    "More...": {message: "Mere..."},
    "Mode": {message: "Tilstand"},
    "MK": {message: "Republikken Makedonien"},
    "GR": {message: "Grækenland"},
    "AG": {message: "Antigua og Barbuda"},
    "Hey,\n\nI'm using": {message: "Hey,\n\njeg bruger"},
    "AN": {message: "Hollandske Antiller"},
    "Turn off Accelerator": {message: "Sluk Accelerator"},
    "Get help from engineer over Skype:": {message: "Få hjælp fra en tekniker over Skype:"},
    "Not working?": {message: "Fungerer den ikke?"},
    "EH": {message: "Vestsahara"},
    "KN": {message: "Saint Kitts og Nevis"},
    "SC": {message: "Seychellerne"},
    "Trying another peer...": {message: "Forsøger en anden peer ..."},
    "NL": {message: "Holland"},
    "HK": {message: "SAR Hongkong"},
    "not working? try another server": {message: "Fungerer serveren ikke? Prøv en anden"},
    "VA": {message: "Vatikanstaten"},
    "IO": {message: "Det Britiske Territorium i Det Indiske Ocean"},
    "RS": {message: "Serbien"},
    "I just accessed a censored site using Hola for $1!": {message: "Jeg har lige adgang til en censureret websted ved hjælp af Hola for $1!"},
    "Don't show again for any site for one week": {message: "Vis ikke igen for noget websted i en uge"},
    "CN": {message: "Kina"},
    "Video stuck?": {message: "Sidder Videoen fast?"},
    "CH": {message: "Schweiz"},
    "KG": {message: "Kirgisistan"},
    "Be the first to get Hola for iPhone/iPad - Register now:": {message: "Vær den første til at få Hola til iPhone/iPad - Registrer nu:"},
    "US": {message: "USA"},
    "FJ": {message: "Fiji-øerne"},
    "Turn on Hola": {message: "Tænd Hola"},
    "Get Hola Premium": {message: "Hola premium"},
    "Submit": {message: "Indsend"},
    "We will be in touch with you soon": {message: "Vi kontakter dig snart"},
    "Choose<br>Country": {message: "Vælg<br>Land"},
    "Popular in $1": {message: "Populær i $1"},
    "Tell friends about $1": {message: "Fortæl venner om $1"},
    "IQ": {message: "Irak"},
    "AS": {message: "Amerikansk Samoa"},
    "Turn on Accelerator": {message: "Tænd Accelerator"},
    "LY": {message: "Libyen"},
    "BV": {message: "Bouvetø"},
    "LT": {message: "Litauen"},
    "PM": {message: "Saint Pierre og Miquelon"},
    "Did it work?": {message: "Virkede det?"},
    "Initializing...": {message: "Initialiserer..."},
    "TT": {message: "Trinidad og Tobago"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola fungerer ikke optimalt i Windows 8 tilstand. Skift venligst til skrivebordstilstand. Klik <a>her</a> for instruktioner"},
    "SK": {message: "Slovakiet"},
    "SY": {message: "Syrien"},
    "Help": {message: "Hjælp"},
    "About Hola": {message: "Om Hola"},
    "GL": {message: "Grønland"},
    "Invite friends - free Premium.": {message: "Inviter venner - gratis Premium."},
    "PG": {message: "Papua Ny Guinea"},
    "Account": {message: "Konto"},
    "CD": {message: "Congo-Kinshasa"},
    "Finding peers...": {message: "Finder peers ..."},
    "VC": {message: "St. Vincent og Grenadinerne"},
    "cool sites": {message: "Seje sider"},
    "Access $1?": {message: "Fjern blokkering af $1?"},
    "Sign up": {message: "Tilmeld dig"},
    "TJ": {message: "Tadsjikistan"},
    "Make your Internet better with $1": {message: "Gør din Internet bedre med $1"},
    "Invite friends. Get Premium.": {message: "Inviter venner. Få Premium."},
    "Try again": {message: "Prøv igen"},
    "MN": {message: "Mongoliet"},
    "Hola site list": {message: "Hola side liste"},
    "IT": {message: "Italien"},
    "RE": {message: "Reunion"},
    "Yes": {message: "Ja"},
    "Enable": {message: "Aktiver"},
    "Loading": {message: "Indlæser"},
    "EG": {message: "Egypten"},
    "FR": {message: "Frankrig"},
    "start": {message: "begynd"},
    "Changing country...": {message: "Skifter land..."},
    "BE": {message: "Belgien"},
    "UM": {message: "De Mindre Amerikanske Oversøiske Øer"},
    "Popular in the world": {message: "Populær i verden"},
    "Enter your email": {message: "Indtast din e-mail"},
    "SA": {message: "Saudi-Arabien"},
    "No": {message: "Nej"},
    "ZA": {message: "Sydafrika"},
    "Account type": {message: "Kontotype"},
    "Starting...": {message: "Starter..."},
    "Loading site...": {message: "Indlæser"},
    "CM": {message: "Cameroun"},
    "I did not experience any buffering": {message: "Jeg oplevede ikke buffering"},
    "Solve buffering problems with": {message: "Løs buffer problemer med"},
    "My Account": {message: "Min Konto"},
    "PL": {message: "Polen"},
    "Solves it": {message: "Løser det"},
    "Start Hola": {message: "start"},
    "No, fix it": {message: "Nej, ordne det"},
    "Turn off Hola": {message: "Sluk Hola"},
    "KY": {message: "Caymanøerne"},
    "Please enter a valid email address.": {message: "Indtast venligst en gyldig e-mail-adresse."},
    "PH": {message: "Filippinerne"},
    "Buffering problems?": {message: "Buffering problemer?"},
    "TF": {message: "Franske Besiddelser i Det Sydlige Indiske Ocean"},
    "KZ": {message: "Kasakhstan"},
    "Report a problem": {message: "Rapporter et problem"},
    "SJ": {message: "Svalbard og Jan Mayen"},
    "Working!": {message: "Fungerer!"},
    "MM": {message: "Myanmar"},
    "MR": {message: "Mauretanien"},
    "Get access to censored sites, try it now: $1": {message: "Få adgang til censurerede hjemmesider, prøv det nu: $1"},
    "changing...": {message: "skifter..."},
    "GS": {message: "South Georgia og De Sydlige Sandwichøer"},
    "Access more sites": {message: "Få adgang til flere sider"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Meget gammel udgave af Chrome, <a>opdater</a> Chrome for at bruge Hola"},
    "AX": {message: "Åland"},
    "I can now access $1 from any country!": {message: "Jeg kan nu få adgang til $1 fra alle lande!"},
    "VG": {message: "De britiske jomfruøer"},
    "DZ": {message: "Algeriet"},
    "CI": {message: "Elfenbenskysten"},
    "Hola cannot work because another extension is controlling your proxy settings.": {message: "Hola kan ikke fungere, fordi en anden udvidelse håndterer dine proxyindstillinger."},
    "Testing connection...": {message: "Tester forbindelsen..."},
    "GE": {message: "Georgien"},
    "CX": {message: "Juleøen"},
    "My Settings": {message: "Mine Indstillinger"},
    "LB": {message: "Libanon"},
    "Never ask me again": {message: "Spørg mig aldrig igen"},
    "FK": {message: "Falklandsøerne"},
    "Enable Hola Accelerator": {message: "Aktiver Hola Accelerator"},
    "Try it": {message: "Prøv det"},
    "Back to $1": {message: "Tilbage til $1"},
    "DE": {message: "Tyskland"},
    "even more...": {message: "endnu flere..."},
    "MV": {message: "Maldiverne"},
    "PN": {message: "Pitcairn"},
    "RO": {message: "Rumænien"},
    "WF": {message: "Wallis og Futunaøerne"},
    "Configuring...": {message: "Konfigurerer..."},
    "IN": {message: "Indien"},
    "FO": {message: "Færøerne"},
    "CS": {message: "Serbien og Montenegro"},
    "Get Free Premium": {message: "Få gratis Premium"},
    "BR": {message: "Brasilien"},
    "Translate to your language": {message: "Oversæt til dit eget sprog"},
    "SB": {message: "Salomonøerne"},
    "working? remember": {message: "Fungerer serveren? Husk den"},
    "PS": {message: "De palæstinensiske områder"},
    "From": {message: "Fra"},
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {message: "Deaktivere venligst andre <a>udvidelser</a>, som du mener kan styre dine proxy-indstillinger, såsom ad-blokkere, andre VPN-tjenester osv."},
    "GB": {message: "Storbritannien"},
    "I'm using $1 to view $2 in my country, and surf faster!": {message: "Jeg bruger $1 til se $2 i mit land, og surfe hurtigere!"},
    "On": {message: "Til"},
    "More sites...": {message: "Mere sider..."},
    "GF": {message: "Fransk Guyana"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Ældre version af Firefox. Klik <a>her</a> for at opgradere."},
    "ZZ": {message: "Ukendt eller ugyldigt område"},
    "KM": {message: "Comorerne"},
    "Oh, yes!": {message: "Åh, ja!"},
    "TC": {message: "Turks- og Caicosøerne"},
    "$1 Buffering?": {message: "Buffer $1?"},
    "ES": {message: "Spanien"},
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {message: "$1 Hola at få adgang til $2\n\nKlik her for at gøre det samme: $3\n\nDet installerer Hola, som lader mig surfe på internettet hurtigere og få adgang til $4$5"},
    "AL": {message: "Albanien"},
    "Using": {message: "Brug"},
    "Share $1 via $2": {message: "Del $1 fra $2"},
    "MD": {message: "Republikken Moldova"},
    "TR": {message: "Tyrkiet"},
    "SI": {message: "Slovenien"},
    "Settings": {message: "Indstillinger"},
    "AQ": {message: "Antarktis"},
    "Stopping peer routing...": {message: "Stopper peer routing ..."},
    "Hola is not available right now, but we are working on it.": {message: "Hola er ikke tilgængelig lige nu, men vi arbejder på det."},
    "Solve buffering": {message: "Løs buffering"},
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {message: "Du skal opgradere til den seneste version af Opera at bruge Hola. Tryk <a>her for</a> at opgradere."},
    "Get 24/7 Unblocking": {message: "Fjern blokkering 24/7"},
    "ET": {message: "Etiopien"},
    "IS": {message: "Island"},
    "Reload Hola": {message: "Genindlæs Hola"},
    "Popular sites": {message: "Populære websteder"},
    "back to": {message: "tilbage til"},
    "Connecting...": {message: "Forbinder..."},
    "Get Hola Accelerator": {message: "Få Hola Accelerator"},
    "BG": {message: "Bulgarien"},
    "MH": {message: "Marshalløerne"},
    "Log in": {message: "Log ind"},
    "Check your Internet connection": {message: "Check din Internet forbindelse"},
    "Upgrade": {message: "Opgrader"},
    "CY": {message: "Cypern"},
    "Finding new peers...": {message: "Finder nye peers ..."},
    "Hola is off, click it to turn it on": {message: "Hola er slukket, skal du klikke for at tænde"},
    "IE": {message: "Irland"},
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {message: "Hej,\n\njeg begyndte med: $1 ($2). Det lader mig surfe på internettet hurtigere og få adgang til $3 i mit land."},
    "KP": {message: "Nordkorea"},
    "PF": {message: "Fransk Polynesien"},
    "app_name": {message: "Hola Bedre Internet"},
    "Remember server": {message: "Husk server"},
    "Update": {message: "Opdater"},
    "Unblocker is disabled": {message: "Unblocker er deaktiveret"},
    "GQ": {message: "Ækvatorialguinea"},
    "Number of users that pressed not working": {message: "Antal af brugere der trykkede fungerer ikke"},
    "TD": {message: "Tchad"},
    "HM": {message: "Heard- og McDonald-øerne"},

};
return E; });