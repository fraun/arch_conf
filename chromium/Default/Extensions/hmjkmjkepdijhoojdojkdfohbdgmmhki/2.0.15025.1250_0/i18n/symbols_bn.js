var a=this,b=function(m,k){var f=m.split("."),e=a;f[0]in e||!e.execScript||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===k?e=e[g]?e[g]:e[g]={}:e[g]=k};var c={b:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},a:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},c={b:{1E3:{other:"0\u00a0\u09b9\u09be\u099c\u09be\u09b0"},1E4:{other:"00\u00a0\u09b9\u09be\u099c\u09be\u09b0"},1E5:{other:"0\u00a0\u09b2\u09be\u0996"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},a:{1E3:{other:"0 \u09b9\u09be\u099c\u09be\u09b0"},1E4:{other:"00 \u09b9\u09be\u099c\u09be\u09b0"},1E5:{other:"0 \u09b2\u09be\u0996"},1E6:{other:"0 \u09ae\u09bf\u09b2\u09bf\u09af\u09bc\u09a8"},
1E7:{other:"00 \u09ae\u09bf\u09b2\u09bf\u09af\u09bc\u09a8"},1E8:{other:"000 \u09ae\u09bf\u09b2\u09bf\u09af\u09bc\u09a8"},1E9:{other:"0 \u09ac\u09bf\u09b2\u09bf\u09af\u09bc\u09a8"},1E10:{other:"00 \u09ac\u09bf\u09b2\u09bf\u09af\u09bc\u09a8"},1E11:{other:"000 \u09ac\u09bf\u09b2\u09bf\u09af\u09bc\u09a8"},1E12:{other:"0 \u099f\u09cd\u09b0\u09bf\u09b2\u09bf\u09af\u09bc\u09a8"},1E13:{other:"00 \u099f\u09cd\u09b0\u09bf\u09b2\u09bf\u09af\u09bc\u09a8"},1E14:{other:"000 \u099f\u09cd\u09b0\u09bf\u09b2\u09bf\u09af\u09bc\u09a8"}}};var d={w:"y",da:"y G",A:"MMM y",B:"MMMM y",l:"MMM d",m:"MMMM dd",o:"M/d",n:"MMMM d",N:"MMM d, y",v:"EEE, MMM d",ba:"EEE, MMM d, y",d:"d"},d={w:"y",da:"y G",A:"MMM y",B:"MMMM y",l:"d MMM",m:"dd MMMM",o:"d/M",n:"d MMMM",N:"d MMM, y",v:"EEE d MMM",ba:"EEE, d MMM, y",d:"d"};var h;
h={C:2534,J:["\u0996\u09cd\u09b0\u09bf\u09b8\u09cd\u099f\u09aa\u09c2\u09b0\u09cd\u09ac","\u0996\u09c3\u09b7\u09cd\u099f\u09be\u09ac\u09cd\u09a6"],I:["\u0996\u09cd\u09b0\u09bf\u09b8\u09cd\u099f\u09aa\u09c2\u09b0\u09cd\u09ac","\u0996\u09c3\u09b7\u09cd\u099f\u09be\u09ac\u09cd\u09a6"],O:"\u099c\u09be \u09ab\u09c7 \u09ae\u09be \u098f \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1 \u0986 \u09b8\u09c7 \u0985 \u09a8 \u09a1\u09bf".split(" "),V:"\u099c\u09be \u09ab\u09c7 \u09ae\u09be \u098f \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1 \u0986 \u09b8\u09c7 \u0985 \u09a8 \u09a1\u09bf".split(" "),M:"\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ae\u09be\u09b0\u09cd\u099a \u098f\u09aa\u09cd\u09b0\u09bf\u09b2 \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1\u09b2\u09be\u0987 \u0986\u0997\u09b8\u09cd\u099f \u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0 \u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0 \u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0 \u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(" "),
U:"\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ae\u09be\u09b0\u09cd\u099a \u098f\u09aa\u09cd\u09b0\u09bf\u09b2 \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1\u09b2\u09be\u0987 \u0986\u0997\u09b8\u09cd\u099f \u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0 \u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0 \u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0 \u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(" "),R:"\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ae\u09be\u09b0\u09cd\u099a \u098f\u09aa\u09cd\u09b0\u09bf\u09b2 \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1\u09b2\u09be\u0987 \u0986\u0997\u09b8\u09cd\u099f \u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0 \u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0 \u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0 \u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(" "),
X:"\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ae\u09be\u09b0\u09cd\u099a \u098f\u09aa\u09cd\u09b0\u09bf\u09b2 \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1\u09b2\u09be\u0987 \u0986\u0997\u09b8\u09cd\u099f \u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0 \u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0 \u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0 \u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(" "),aa:"\u09b0\u09ac\u09bf\u09ac\u09be\u09b0 \u09b8\u09cb\u09ae\u09ac\u09be\u09b0 \u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0 \u09ac\u09c1\u09a7\u09ac\u09be\u09b0 \u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0 \u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0 \u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split(" "),
Z:"\u09b0\u09ac\u09bf\u09ac\u09be\u09b0 \u09b8\u09cb\u09ae\u09ac\u09be\u09b0 \u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0 \u09ac\u09c1\u09a7\u09ac\u09be\u09b0 \u09ac\u09c3\u09b9\u09b7\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0 \u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0 \u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split(" "),T:"\u09b0\u09ac\u09bf \u09b8\u09cb\u09ae \u09ae\u0999\u09cd\u0997\u09b2 \u09ac\u09c1\u09a7 \u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf \u09b6\u09c1\u0995\u09cd\u09b0 \u09b6\u09a8\u09bf".split(" "),
Y:"\u09b0\u09ac\u09bf \u09b8\u09cb\u09ae \u09ae\u0999\u09cd\u0997\u09b2 \u09ac\u09c1\u09a7 \u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf \u09b6\u09c1\u0995\u09cd\u09b0 \u09b6\u09a8\u09bf".split(" "),P:"\u09b0 \u09b8\u09cb \u09ae \u09ac\u09c1 \u09ac\u09c3 \u09b6\u09c1 \u09b6".split(" "),W:"\u09b0 \u09b8\u09cb \u09ae \u09ac\u09c1 \u09ac\u09c3 \u09b6\u09c1 \u09b6".split(" "),S:["\u09aa\u09cd\u09b0. \u09a4\u09cd\u09b0\u09c8. \u098f\u0995. \u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6","\u09a6\u09cd\u09ac\u09bf.\u09a4\u09cd\u09b0\u09c8.\u098f\u0995. \u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6",
"\u09a4\u09c3.\u09a4\u09cd\u09b0\u09c8.\u098f\u0995.\u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6","\u099a.\u09a4\u09cd\u09b0\u09c8.\u098f\u0995 \u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6"],Q:["\u09aa\u09cd\u09b0\u09a5\u09ae \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995\u09c7\u09b0 \u098f\u0995 \u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6","\u09a6\u09cd\u09ac\u09bf\u09a4\u09c0\u09af\u09bc \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995\u09c7\u09b0 \u098f\u0995 \u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6",
"\u09a4\u09c3\u09a4\u09c0\u09af\u09bc \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995\u09c7\u09b0 \u098f\u0995 \u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6","\u099a\u09a4\u09c1\u09b0\u09cd\u09a5 \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995\u09c7\u09b0 \u098f\u0995 \u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6"],F:["am","pm"],G:["EEEE, d MMMM, y","d MMMM, y","d MMM, y","d/M/yy"],$:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],H:["{1} {0}","{1} {0}","{1} {0}",
"{1} {0}"],K:4,ca:[5,6],L:3};var l={f:".",i:",",q:"%",D:"0",t:"+",k:"-",h:"E",s:"\u2030",j:"\u221e",p:"NaN",e:"#,##0.###",u:"#E0",r:"#,##0%",c:"\u00a4#,##0.00",g:"USD"},l={f:".",i:",",q:"%",D:"\u09e6",t:"+",k:"-",h:"E",s:"\u2030",j:"\u221e",p:"\u09b8\u0982\u0996\u09cd\u09af\u09be\u00a0\u09a8\u09be",e:"#,##,##0.###",u:"#E0",r:"#,##,##0%",c:"#,##,##0.00\u00a4",g:"BDT"};b("I18N_DATETIMESYMBOLS_ERAS",h.J);b("I18N_DATETIMESYMBOLS_ERANAMES",h.I);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.O);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.V);b("I18N_DATETIMESYMBOLS_MONTHS",h.M);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.U);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.R);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.X);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.aa);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.Z);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.T);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.Y);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.P);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.W);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.S);b("I18N_DATETIMESYMBOLS_QUARTERS",h.Q);b("I18N_DATETIMESYMBOLS_AMPMS",h.F);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.G);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.$);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.H);b("I18N_DATETIMESYMBOLS_AVAILABLEFORMATS",h.ea);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.K);
b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.ca);b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.L);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.w);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.A);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.B);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.l);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.m);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.o);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.n);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.v);
b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.d);void 0!==h.C&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.C);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.f);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.i);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.q);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.D);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.t);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.k);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.h);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.s);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.j);
b("I18N_NUMBERFORMATSYMBOLS_NAN",l.p);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.e);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.u);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.r);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.c);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.g);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.b);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.a);
