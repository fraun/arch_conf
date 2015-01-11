'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "No, Thanks": {message: "Dim diolch"},
    "AT": {message: "Awstria"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Eisiau gosod Hola ar ddyfeisiau eraill? (Xbox, PS, Apple TV, iPhone ...). Cliciwch yma"},
    "Unblocker?": {message: "Dad-rwystrydd?"},
    "ZM": {message: "Sambia"},
    "app_desc": {message: "Cyrchu gwefannau a rwystrir yn eich gwlad, cwmni, neu ysgol chi gyda Hola! Mae Hola am ddim ac yn rhwydd i’w ddefnyddio!"},
    "Need Help?": {message: "Angen cymorth?"},
    "Improve translation": {message: "Cynigiwch gyfieithiadau"},
    "Please enter a web site address, like facebook.com": {message: "Rhowch gyfeiriad gwefan, fel facebook.com"},
    "Accessing $1 with Hola": {message: "Cyrchu $1 gyda Hola"},
    "Access $1 - cool site!": {message: "Cyrchu $1 - safle cŵl!"},
    "Share $1 on $2": {message: "Rhannwch $1 ar $2"},
    "Talk to us on $1": {message: "Siaradwch â ni ar $1"},
    "There seems to be an error": {message: "Ymddengys fod namau"},
    "MA": {message: "Moroco"},
    "SV": {message: "Salfador"},
    "Access cool sites": {message: "Cyrchu safleoedd cŵl"},
    "MP": {message: "Ynysoedd Gogledd Mariana"},
    "Don't show again for $1 for one week": {message: "Peidiwch â dangos eto am $1 am wythnos"},
    "Unblocker": {message: "Dad-rwystrydd"},
    "Support Hola": {message: "Cymorth Hola"},
    "Downloading": {message: "Wrthi’n lawrlwytho"},
    "Access any site from any country, free": {message: "Cyrchwch unrhyw wefan o unrhyw wlad, yn rhad ac am ddim"},
    "Try to <span>reload</span>": {message: "Ceisiwch <span>ail-lwytho</span>"},
    "UZ": {message: "Wsbecistan"},
    "FX": {message: "Ffrainc Fetropolitan"},
    "Premium": {message: "Premiwm"},
    "Get Unlimited Unblocking": {message: "Gosodwch Dad-rwystro heb gyfyngiadau"},
    "Apply settings...": {message: "Gweithredu’r gosodiadau..."},
    "TN": {message: "Tiwnisia"},
    "CK": {message: "Ynysoedd Cook"},
    "BY": {message: "Belarws"},
    "IC": {message: "Yr Ynysoedd Dedwydd"},
    "KR": {message: "De Corea"},
    "NO": {message: "Norwy"},
    "More countries": {message: "Rhagor o wledydd"},
    "NT": {message: "Parth Niwtral"},
    "Top popular sites": {message: "Prif safleoedd poblogaidd"},
    "SR": {message: "Swrinam"},
    "DD": {message: "Gorllewin yr Almaen "},
    "BT": {message: "Bhwtan"},
    "CF": {message: "Gweriniaeth Canol Affrica"},
    "BA": {message: "Bosnia a Hercegovina"},
    "AE": {message: "Yr Emiradau Arabaidd Unedig"},
    "not working?": {message: "ddim yn gweithio?"},
    "TH": {message: "Gwlad Thai"},
    "SU": {message: "Undeb y Gweriniaethau Sofiet Sosialaidd"},
    "Get Premium support": {message: "Cewch gefnogaeth Premiwm"},
    "$1 from $2": {message: "$1 o $2"},
    "Author:": {message: "Awdur:"},
    "EA": {message: "Ceuta a Melilla"},
    "CC": {message: "Ynysoedd Cocos (Keeling)"},
    "Browsing": {message: "Yn pori"},
    "Video": {message: "Fideo"},
    "Thank you!": {message: "Diolch yn fawr!"},
    "NC": {message: "Caledonia Newydd"},
    "Buffering?": {message: "Byffro o hyd?"},
    "Enter site to access": {message: "Cyrchwch y safle i’w ddefnyddio"},
    "Go Hola Premium": {message: "Gosodwch Bremiwm"},
    "Install Accelerator": {message: "Gosod Cyflymydd"},
    "sites that are censored": {message: "safleoedd sy'n cael eu sensro"},
    "Get the Fastest Servers": {message: "Gosodwch y Gweinyddwyr Cyflymach"},
    "EU": {message: "Yr Undeb Ewropeaidd"},
    "FQ": {message: "Tiriogaethau Antarctig a De Ffrainc "},
    "Server saved!": {message: "Coffwyd y gweinydd !"},
    "Menu": {message: "Dewislen"},
    "Enjoy!": {message: "Mwynhewch!"},
    "AF": {message: "Affganistan"},
    "Love Hola?": {message: "Caru Hola?"},
    "KE": {message: "Cenia"},
    "Turn on to get started": {message: "Cyneuwch i ddechrau arni"},
    "Please help us get better": {message: "Helpwch inni wella"},
    "(some Hola features are not available on your version)": {message: "(Nid yw rhai nodweddion Hola ar gael ar eich fersiwn chi)"},
    "$1 VPN Premium": {message: "Rhithrwydwaith Breifat (VPN) Premiwm $1"},
    "Free": {message: "Am ddim"},
    "LV": {message: "Latfia"},
    "Using Hola": {message: "Defnyddio Hola"},
    "Install": {message: "Gosod"},
    "RU": {message: "Rwsia"},
    "Install Free Hola Accelerator": {message: "Gosod Hola Cyflymydd yn rhad ac am ddim "},
    "Working?": {message: "Gweithio?"},
    "FI": {message: "Y Ffindir"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Gosodwch Hola Plus i gael gwasanaeth rhag hysbysebion ac un sy'n ddi-dor."},
    "LU": {message: "Lwcsembwrg"},
    "VE": {message: "Feneswela"},
    "Language": {message: "Iaith (Language)"},
    "VI": {message: "Ynysoedd Americanaidd y Wyryf"},
    "TV": {message: "Twfalw"},
    "MX": {message: "Mecsico"},
    "GG": {message: "Ynys y Garn"},
    "more options...": {message: "rhagor o ddewisiadau..."},
    "Author site:": {message: "Awdur y wefan:"},
    "DO": {message: "Y Weriniaeth Ddominicaidd"},
    "HU": {message: "Hwngari"},
    "BQ": {message: "Tirogaeth Antarctig Prydain"},
    "No idle peers found.": {message: "Ni ganfu cyfoedion segur."},
    "DK": {message: "Denmarc"},
    "Reload": {message: "Ail-lwythwch"},
    "My favorites": {message: "Fy ffefrynnau i"},
    "Number of users that use this option": {message: "Y nifer o ddefnyddwyr sy'n defnyddio'r dewis hwn"},
    "MO": {message: "Macau"},
    "CZ": {message: "Gweriniaeth Tsiec"},
    "VPN": {message: "Rhithrwydwaith Breifat"},
    "Check out Hola for $1!": {message: "Rhowch gynnig ar Hola i $1!"},
    "Never be a peer": {message: "Peidiwch byth â bod yn gyfoed"},
    "Log out": {message: "Allgofnodi"},
    "ST": {message: "Sao Tome a Principe"},
    "AU": {message: "Awstralia"},
    "Get Hola for Android": {message: "Defnyddiwch Hola ar gyfer Android"},
    "Select a Country": {message: "Dewiswch Wlad"},
    "PU": {message: "Ynysoedd Pasiffig Amrywiol yr Unol Daleithiau"},
    "Off": {message: "I ffwrdd"},
    "Try another server": {message: "Rhowch gynnig ar weinydd arall"},
    "Go": {message: "Ewch"},
    "Did you experience any buffering?": {message: "Oeddech chi'n profi byffro o hyd?"},
    "CG": {message: "Congo"},
    "More...": {message: "mwy ..."},
    "Mode": {message: "Modd"},
    "GR": {message: "Gwlad Groeg"},
    "AG": {message: "Antigwa a Barbiwda"},
    "Hey,\n\nI'm using": {message: "Hei,\n\nDwi'n defnyddio"},
    "AN": {message: "Ynysoedd Caribî yr Iseldiroedd"},
    "Turn off Accelerator": {message: "Diffodd Cyflymydd"},
    "Get help from engineer over Skype:": {message: "Gofynnwch am gymorth gan beiriannydd dros skype:"},
    "Not working?": {message: "Ddim yn gweithio?"},
    "UA": {message: "Wcráin"},
    "EH": {message: "Gorllewin Sahara"},
    "KN": {message: "Saint Kitts a Nevis"},
    "Trying another peer...": {message: "Wrthi’n rhoi cynnig ar gyfoed arall ..."},
    " via ": {message: " drwy "},
    "NL": {message: "Yr Iseldiroedd"},
    "EC": {message: "Ecwador"},
    "HK": {message: "Hong Cong"},
    "not working? try another server": {message: "ddim yn gweithio? rhowch gynnig ar weinydd arall"},
    "VA": {message: "Y Fatican"},
    "IO": {message: "Tiriogaeth Cefnfor India Prydain"},
    "SD": {message: "Y Swdan"},
    "I just accessed a censored site using Hola for $1!": {message: "Dwi newydd gyrchu safle a rwystrwyd gan ddefnyddio Hola ar $1!"},
    "Don't show again for any site for one week": {message: "Peidiwch â dangos eto am unrhyw safle am wythnos"},
    "CN": {message: "Tsiena"},
    "Video stuck?": {message: "A yw’r fideo wedi oedi?"},
    "MU": {message: "Mawrisiws"},
    "CH": {message: "Y Swistir"},
    "KG": {message: "Cirgistan"},
    "Be the first to get Hola for iPhone/iPad - Register now:": {message: "Byddwch y cyntaf i gael Hola ar gyfer iPhone / iPad - Cofrestrwch nawr:"},
    "US": {message: "Yr Unol Daleithiau"},
    "PE": {message: "Perw"},
    "Stop Hola": {message: "Stopio Hola"},
    "Turn on Hola": {message: "Cyneuwch Hola"},
    "VPN Premium": {message: "Rhithrwydwaith Breifat Premiwm"},
    "Submit": {message: "Cyflwyno"},
    "Get Hola Premium": {message: "Defnyddiwch Bremiwm Hola"},
    "We will be in touch with you soon": {message: "Byddwn yn cysylltu â chi yn fuan"},
    "Choose<br>Country": {message: "Dewiswch<br>Wlad"},
    "Popular in $1": {message: "Poblogaidd yn: $1"},
    "Tell friends about $1": {message: "Dywedwch wrth ffrindiau am $1"},
    "IQ": {message: "Irac"},
    "AS": {message: "Samoa Americanaidd"},
    "TZ": {message: "Tansanïa"},
    "Turn on Accelerator": {message: "Cyneuwch Gyflymydd"},
    "LY": {message: "Libia"},
    "BM": {message: "Bermwda"},
    "BV": {message: "Ynys Bouvet"},
    "LT": {message: "Lithwania"},
    "PM": {message: "Saint Pierre a Miquelon"},
    "Did it work?": {message: "A oedd yn gweithio?"},
    "Initializing...": {message: "Wrthi'n ymgychwyn..."},
    "TT": {message: "Trinidad a Thobago"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Nid yw Hola yn gweithio'n dda gydag Windows 8. Newidiwch i ddull bwrdd gwaith. Cliciwch <a>yma</a> am gyfarwyddiadau"},
    "SK": {message: "Slofacia"},
    "About Hola": {message: "Ynghylch Hola"},
    "AC": {message: "Ynys Ascension"},
    "GL": {message: "Yr Ynys Las"},
    "Invite friends - free Premium.": {message: "Gwahodd ffrindiau a chael Premiwm am ddim."},
    "PG": {message: "Papua Gini Newydd"},
    "Account": {message: "Cyfrif"},
    "CD": {message: "Gweriniaeth Ddemocrataidd y Congo"},
    "Finding peers...": {message: "Wrthi’n canfod cyfoedion..."},
    "ZW": {message: "Simbabwe"},
    "VC": {message: "Saint Vincent a’r Grenadines"},
    "cool sites": {message: "safleoedd cŵl"},
    "Access $1?": {message: "Dad-rwystrwch $1?"},
    "JP": {message: "Siapan"},
    "Sign up": {message: "Cofrestrwch"},
    "TJ": {message: "Tajicistan"},
    "Make your Internet better with $1": {message: "Gwnewch i'ch rhyngrwyd yn well gyda $1"},
    "Invite friends. Get Premium.": {message: "Gwahodd ffrindiau a chael Premiwm"},
    "Try again": {message: "Ceisiwch eto"},
    "Hola site list": {message: "Rhestr gwefannau Hola"},
    "IT": {message: "Yr Eidal"},
    "Yes": {message: "Ydw"},
    "Enable": {message: "Galluogwch"},
    "Loading": {message: "Wrthi'n llwytho"},
    "FR": {message: "Ffrainc"},
    "EG": {message: "Yr Aifft"},
    "start": {message: "dechreuwch"},
    "Changing country...": {message: "Wrthi’n newid gwlad..."},
    "UM": {message: "Mân Ynysoedd Pellennig yr Unol Daleithiau"},
    "BE": {message: "Gwlad Belg"},
    "Popular in the world": {message: "Poblogaidd yn y byd"},
    "Accelerator": {message: "Cyflymydd"},
    "Enter your email": {message: "Rhowch eich e-bost"},
    "SA": {message: "Sawdi-Arabia"},
    "No": {message: "Na"},
    "ZA": {message: "De Affrica"},
    "CT": {message: "Canton ac Ynysoedd Enderbury"},
    "PT": {message: "Portiwgal"},
    "$1 VPN": {message: "Rhithrwydwaith Breifat (VPN) $1"},
    "Account type": {message: "Math o gyfrif"},
    "Starting...": {message: "Wrthi'n dechrau ..."},
    "Loading site...": {message: "Wrthi'n llwytho’r safle..."},
    "CM": {message: "Y Camerwn"},
    "I did not experience any buffering": {message: "Doeddwn i ddim yn profi unrhyw byffro"},
    "Solve buffering problems with": {message: "Datrys problemau byffro gyda"},
    "My Account": {message: "Fy Nghyfrif"},
    "PL": {message: "Gwlad Pwyl"},
    "Solves it": {message: "Datrys ef"},
    "Start Hola": {message: "Dechrau Hola"},
    "TM": {message: "Tyrcmenistan"},
    "No, fix it": {message: "Na. Trwsiwch"},
    "Turn off Hola": {message: "Diffodd Hola"},
    "KY": {message: "Ynysoedd Cayman"},
    "Please enter a valid email address.": {message: "Rhowch gyfeiriad e-bost dilys."},
    "PH": {message: "Philipinau"},
    "Buffering problems?": {message: "Problemau byffro o hyd?"},
    "NI": {message: "Nicaragwa"},
    "TF": {message: "Tiriogaethau Ffrengig y De"},
    "Report a problem": {message: "Rhowch wybod am broblem"},
    "SJ": {message: "Svalbard a Jan Mayen"},
    "Working!": {message: "Mae’n gweithio!"},
    "MM": {message: "Myanmar"},
    "NR": {message: "Nawrw"},
    "MR": {message: "Mawritania"},
    "Get access to censored sites, try it now: $1": {message: "Cyrchu safleoedd a rwystrwyd, rhowch gynnig arni nawr: $1"},
    "changing...": {message: "wrthi'n newid ..."},
    "GS": {message: "Ynysoedd De Georgia a De Sandwich"},
    "Access more sites": {message: "Cyrchu mwy o safleoedd cŵl"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Fersiwn hen iawn o Chrome, <a>diweddarwch</a> Chrome i ddefnyddio Hola"},
    "AX": {message: "Ynysoedd Aland"},
    "I can now access $1 from any country!": {message: "Bellach, dwi’n gallu cyrchu $1 o unrhyw wlad!"},
    "VN": {message: "Fietnam"},
    "VG": {message: "Ynysoedd Prydeinig y Wyryf"},
    "Hola cannot work because another extension is controlling your proxy settings.": {message: "Ni all Hola weithio oherwydd bod estyniad arall yn rheoli’ch gosodiadau dirprwy."},
    "Testing connection...": {message: "Wrthi’n profi’r cysylltiad..."},
    "CX": {message: "Ynys y Nadolig"},
    "My Settings": {message: "Fy Ngosodiadau"},
    "LB": {message: "Libanus"},
    "Cool site!": {message: "Safle cŵl!"},
    "Never ask me again": {message: "Peidiwch byth â gofyn imi eto"},
    "FK": {message: "Ynysoedd y Falkland"},
    "Enable Hola Accelerator": {message: "Galluogi Cyflymydd Hola"},
    "Try it": {message: "Rhowch gynnig arni"},
    "Back to $1": {message: "Yn ôl i $1"},
    "DE": {message: "Yr Almaen"},
    "even more...": {message: "hyd yn oed mwy ..."},
    "PN": {message: "Pitcairn"},
    "MI": {message: "Midway Atoll"},
    "WF": {message: "Wallis a Futuna"},
    "$1 via Hola": {message: "$1 drwy Hola"},
    "RO": {message: "Rwmania"},
    "AR": {message: "Yr Ariannin"},
    "Configuring...": {message: "Wrthi’n ffurfweddu..."},
    "CS": {message: "Serbia a Montenegro"},
    "FO": {message: "Ynysoedd Ffaröe"},
    "BR": {message: "Brasil"},
    "HN": {message: "Hondwras"},
    "Get Free Premium": {message: "Defnyddiwch Bremiwm am ddim"},
    "SB": {message: "Ynysoedd Solomon"},
    "Translate to your language": {message: "Cyfieithwch i mewn i'ch iaith chi"},
    "PS": {message: "Tiriogaeth Palesteina"},
    "NZ": {message: "Seland Newydd"},
    "working? remember": {message: "weithio? cofio"},
    "From": {message: "o"},
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {message: "Analluogwch <a>estyniadau</a> eraill y credwch y gallai reoli’ch gosodiadau dirprwy fel ad-atalyddion, gwasanaethau Rhithrwydweithiau Breifat eraill, ac ati"},
    "GB": {message: "Prydain Fawr"},
    "I'm using $1 to view $2 in my country, and surf faster!": {message: "Dwi’n defnyddio $1 i weld $2 yn fy ngwlad i ac i syrffio’n gyflymach!"},
    "On": {message: "Ymlaen"},
    "More sites...": {message: "Rhagor o safleoedd..."},
    "QO": {message: "Oceania Pellennig"},
    "GF": {message: "Giana Ffrengig"},
    "ZZ": {message: "Anhysbys neu Ranbarth Annilys "},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Hen fersiwn o Firefox. Gwasgwch <a>yma</a> i uwchraddio."},
    "Oh, yes!": {message: "Oedd!"},
    "PC": {message: "Tiriogaeth Ymddiriedolaeth Ynysoedd y Môr Tawel"},
    "TC": {message: "Ynysoedd Turks a Caicos"},
    "CP": {message: "Ynys Clipperton"},
    "$1 Buffering?": {message: "Ydy $1 yn byffro?"},
    "ES": {message: "Sbaen"},
    "BO": {message: "Bolifia"},
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {message: "$1 Hola i gyrchu $2\n\nCliciwch yma i wneud yr un fath: $3\n\nMae'n gosod Hola, sy'n gadael i mi syrffio'r rhyngrwyd yn gyflymach ac yn cyrchu $4$5"},
    "Using": {message: "Defnyddio"},
    "VD": {message: "Gogledd Fietnam"},
    "Share $1 via $2": {message: "Rhannwch $1 drwy $2"},
    "MD": {message: "Moldofa"},
    "TR": {message: "Twrci"},
    "GN": {message: "Gini"},
    "SI": {message: "Slofenia"},
    "Settings": {message: "Gosodiadau"},
    "Hola Accelerator": {message: " Cyflymydd Hola"},
    "Stopping peer routing...": {message: "Wrthi’n stopio llwybro cyfoedion ..."},
    "Hola is not available right now, but we are working on it.": {message: "Nid yw Hola ar gael ar hyn o bryd, ond yr ydym ceisio ei drwsio."},
    "JO": {message: "Yr Iorddonen"},
    "Awesome!": {message: "Gwych!"},
    "Solve buffering": {message: "Datrys byffro"},
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {message: "Mae angen uwchraddio i'r fersiwn diweddaraf o Opera arnoch i ddefnyddio Hola. Gwasgwch <a>yma</a> i uwchraddio."},
    "CU": {message: "Ciwba"},
    "Get 24/7 Unblocking": {message: "Dad-rwystrwch 24/7"},
    "IS": {message: "Gwlad yr Iâ"},
    "Reload Hola": {message: "Ail-lwythwch Hola"},
    "Popular sites": {message: "Safleoedd poblogaidd"},
    "back to": {message: "yn ôl i"},
    "Connecting...": {message: "Wrthi’n cysylltu..."},
    "YD": {message: "De Yemen"},
    "Get Hola Accelerator": {message: "Defnyddiwch Cyflymydd Hola "},
    "MH": {message: "Ynysoedd Marshall"},
    "BG": {message: "Bwlgaria"},
    "Log in": {message: "Mewngofnodi"},
    "BS": {message: "Y Bahamas"},
    "Check your Internet connection": {message: "Gwiriwch fod cysylltiad â'r rhyngrwyd  gennych"},
    "Upgrade": {message: "Uwchraddiwch"},
    "Hola is off, click it to turn it on": {message: "Mae Hola i ffwrdd, cliciwch i gynnau"},
    "Finding new peers...": {message: "Canfyddwch gyfoedion newydd..."},
    "IM": {message: "Ynys Manaw"},
    "IE": {message: "Iwerddon"},
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {message: "Shwmae,\n\nDwi wedi dechrau defnyddio $1 ($2). Mae'n gadael imi syrffio'r rhyngrwyd yn gyflymach ac yn cael cyrchu $3 yn fy ngwlad."},
    "KP": {message: "Gogledd Corea"},
    "PF": {message: "Polynesia Ffrainc"},
    "app_name": {message: "Rhyngrwyd Well Hola"},
    "Remember server": {message: "Cofiwch y weinydd"},
    "Update": {message: "Diweddarwch"},
    "Unblocker is disabled": {message: "Analluogir y dad-rwystrydd"},
    "PZ": {message: "Parth Camlas Panama"},
    "GQ": {message: "Gini Gyhydeddol"},
    "PK": {message: "Pacistan"},
    "WK": {message: "Ynys Wake"},
    "Number of users that pressed not working": {message: "Y nifer o ddefnyddwyr a wasgodd 'Nid yw'n gweithio"},
    "NF": {message: "Ynys Norfolk"},
    "JT": {message: "Ynys Johnston"},
    "HM": {message: "Ynys Heard ac Ynysoedd McDonald"},

};
return E; });