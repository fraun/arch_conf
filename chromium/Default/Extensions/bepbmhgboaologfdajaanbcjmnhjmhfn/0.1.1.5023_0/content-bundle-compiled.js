var g,aa=aa||{},k=this,ba=function(a){a=a.split(".");for(var b=k,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b},ca=function(){},da=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";
if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ea=function(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length},m=function(a){return"string"==typeof a},fa=function(a){return"function"==da(a)},ga=function(a,b,c){return a.call.apply(a.bind,arguments)},ha=function(a,b,c){if(!a)throw Error();
if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},n=function(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ga:ha;return n.apply(null,arguments)},ia=Date.now||function(){return+new Date},p=function(a,b){function c(){}c.prototype=b.prototype;a.fa=b.prototype;a.prototype=
new c;a.Va=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return n.apply(null,c)}return n(this,a)};var q=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,q);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};p(q,Error);q.prototype.name="CustomError";var ja=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},ra=function(a){if(!ka.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(la,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ma,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(na,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(oa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(pa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(qa,"&#0;"));return a},la=/&/g,ma=/</g,
na=/>/g,oa=/"/g,pa=/'/g,qa=/\x00/g,ka=/[\x00&<>"']/,sa=function(a,b){return a<b?-1:a>b?1:0};var ta=function(a,b){b.unshift(a);q.call(this,ja.apply(null,b));b.shift()};p(ta,q);ta.prototype.name="AssertionError";var r=function(a,b,c){if(!a){var d="Assertion failed";if(b)var d=d+(": "+b),e=Array.prototype.slice.call(arguments,2);throw new ta(""+d,e||[]);}},ua=function(a,b){throw new ta("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var s=Array.prototype,va=s.indexOf?function(a,b,c){r(null!=a.length);return s.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(m(a))return m(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},wa=s.forEach?function(a,b,c){r(null!=a.length);s.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ya=function(a){var b;t:{b=xa;for(var c=a.length,d=m(a)?a.split(""):a,
e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break t}b=-1}return 0>b?null:m(a)?a.charAt(b):a[b]},za=function(a,b){var c=va(a,b),d;if(d=0<=c)r(null!=a.length),s.splice.call(a,c,1);return d},Aa=function(a){return s.concat.apply(s,arguments)},Ba=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var Ca=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Da=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Ea="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Fa=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ea.length;f++)c=Ea[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var t;t:{var Ga=k.navigator;if(Ga){var Ha=Ga.userAgent;if(Ha){t=Ha;break t}}t=""}var u=function(a){return-1!=t.indexOf(a)};var Ia=u("Opera")||u("OPR"),v=u("Trident")||u("MSIE"),x=u("Gecko")&&-1==t.toLowerCase().indexOf("webkit")&&!(u("Trident")||u("MSIE")),y=-1!=t.toLowerCase().indexOf("webkit"),Ja=function(){var a=k.document;return a?a.documentMode:void 0},Ka=function(){var a="",b;if(Ia&&k.opera)return a=k.opera.version,fa(a)?a():a;x?b=/rv\:([^\);]+)(\)|;)/:v?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:y&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(t))?a[1]:"");return v&&(b=Ja(),b>parseFloat(a))?String(b):a}(),La={},z=function(a){var b;
if(!(b=La[a])){b=0;for(var c=String(Ka).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",l=d[f]||"",w=RegExp("(\\d*)(\\D*)","g"),Ua=RegExp("(\\d*)(\\D*)","g");do{var R=w.exec(h)||["","",""],F=Ua.exec(l)||["","",""];if(0==R[0].length&&0==F[0].length)break;b=sa(0==R[1].length?0:parseInt(R[1],10),0==F[1].length?0:parseInt(F[1],10))||sa(0==R[2].length,0==F[2].length)||sa(R[2],F[2])}while(0==
b)}b=La[a]=0<=b}return b},Ma=k.document,Na=Ma&&v?Ja()||("CSS1Compat"==Ma.compatMode?parseInt(Ka,10):5):void 0;!x&&!v||v&&v&&9<=Na||x&&z("1.9.1");v&&z("9");var Oa=function(a){Oa[" "](a);return a};Oa[" "]=ca;var Pa=!v||v&&9<=Na,Qa=v&&!z("9");!y||z("528");x&&z("1.9b")||v&&z("8")||Ia&&z("9.5")||y&&z("528");x&&!z("8")||v&&z("9");var Ra=function(){};Ra.prototype.ja=!1;Ra.prototype.Ba=function(){this.ja||(this.ja=!0,this.s())};Ra.prototype.s=function(){if(this.Ea)for(;this.Ea.length;)this.Ea.shift()()};var A=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.B=!1;this.va=!0};A.prototype.s=function(){};A.prototype.Ba=function(){};A.prototype.preventDefault=function(){this.defaultPrevented=!0;this.va=!1};var B=function(a,b){A.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.ga=this.state=null;a&&this.oa(a,b)};p(B,A);
B.prototype.oa=function(a,b){var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(x){var e;t:{try{Oa(d.nodeName);e=!0;break t}catch(f){}e=!1}e||(d=null)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=y||void 0!==a.offsetX?a.offsetX:a.layerX;this.offsetY=y||void 0!==a.offsetY?a.offsetY:a.layerY;this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;
this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.ga=a;a.defaultPrevented&&this.preventDefault()};
B.prototype.preventDefault=function(){B.fa.preventDefault.call(this);var a=this.ga;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Qa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};B.prototype.s=function(){};var Sa="closure_listenable_"+(1E6*Math.random()|0),Ta=0;var Va=function(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.Y=!!d;this.$=e;this.key=++Ta;this.removed=this.Z=!1},Wa=function(a){a.removed=!0;a.listener=null;a.proxy=null;a.src=null;a.$=null};var C=function(a){this.src=a;this.f={};this.J=0};C.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.f[f];a||(a=this.f[f]=[],this.J++);var h=Xa(a,b,d,e);-1<h?(b=a[h],c||(b.Z=!1)):(b=new Va(b,this.src,f,!!d,e),b.Z=c,a.push(b));return b};C.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.f))return!1;var e=this.f[a];b=Xa(e,b,c,d);return-1<b?(Wa(e[b]),r(null!=e.length),s.splice.call(e,b,1),0==e.length&&(delete this.f[a],this.J--),!0):!1};
var Ya=function(a,b){var c=b.type;c in a.f&&za(a.f[c],b)&&(Wa(b),0==a.f[c].length&&(delete a.f[c],a.J--))};C.prototype.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.f)if(!a||c==a){for(var d=this.f[c],e=0;e<d.length;e++)++b,Wa(d[e]);delete this.f[c];this.J--}return b};C.prototype.na=function(a,b,c,d){a=this.f[a.toString()];var e=-1;a&&(e=Xa(a,b,c,d));return-1<e?a[e]:null};
var Xa=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.removed&&f.listener==b&&f.Y==!!c&&f.$==d)return e}return-1};var Za="closure_lm_"+(1E6*Math.random()|0),$a={},ab=0,bb=function(a,b,c,d,e){if("array"==da(b)){for(var f=0;f<b.length;f++)bb(a,b[f],c,d,e);return null}c=cb(c);if(a&&a[Sa])a=a.listen(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,h=db(a);h||(a[Za]=h=new C(a));c=h.add(b,c,!1,d,e);c.proxy||(d=eb(),c.proxy=d,d.src=a,d.listener=c,a.addEventListener?a.addEventListener(b.toString(),d,f):a.attachEvent(fb(b.toString()),d),ab++);a=c}return a},eb=function(){var a=gb,b=Pa?function(c){return a.call(b.src,
b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},hb=function(a,b,c,d,e){if("array"==da(b))for(var f=0;f<b.length;f++)hb(a,b[f],c,d,e);else c=cb(c),a&&a[Sa]?a.m.remove(String(b),c,d,e):a&&(a=db(a))&&(b=a.na(b,c,!!d,e))&&ib(b)},ib=function(a){if("number"!=typeof a&&a&&!a.removed){var b=a.src;if(b&&b[Sa])Ya(b.m,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.Y):b.detachEvent&&b.detachEvent(fb(c),d);ab--;(c=db(b))?(Ya(c,a),0==c.J&&(c.src=
null,b[Za]=null)):Wa(a)}}},fb=function(a){return a in $a?$a[a]:$a[a]="on"+a},kb=function(a,b,c,d){var e=1;if(a=db(a))if(b=a.f[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.Y==c&&!f.removed&&(e&=!1!==jb(f,d))}return Boolean(e)},jb=function(a,b){var c=a.listener,d=a.$||a.src;a.Z&&ib(a);return c.call(d,b)},gb=function(a,b){if(a.removed)return!0;if(!Pa){var c=b||ba("window.event"),d=new B(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){t:{var f=!1;if(0==c.keyCode)try{c.keyCode=
-1;break t}catch(h){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);for(var f=a.type,l=c.length-1;!d.B&&0<=l;l--)d.currentTarget=c[l],e&=kb(c[l],f,!0,d);for(l=0;!d.B&&l<c.length;l++)d.currentTarget=c[l],e&=kb(c[l],f,!1,d)}return e}return jb(a,new B(b,this))},db=function(a){a=a[Za];return a instanceof C?a:null},lb="__closure_events_fn_"+(1E9*Math.random()>>>0),cb=function(a){r(a,"Listener can not be null.");if(fa(a))return a;r(a.handleEvent,"An object listener must have handleEvent method.");
a[lb]||(a[lb]=function(b){return a.handleEvent(b)});return a[lb]};chrome.i18n&&chrome.i18n.getUILanguage&&chrome.i18n.getUILanguage();var mb="StopIteration"in k?k.StopIteration:Error("StopIteration"),nb=function(){};nb.prototype.next=function(){throw mb;};nb.prototype.Sa=function(){return this};var D=function(a,b){this.n={};this.e=[];this.T=this.d=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof D?(c=a.o(),d=a.l()):(c=Da(a),d=Ca(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}};g=D.prototype;g.v=function(){return this.d};g.l=function(){ob(this);for(var a=[],b=0;b<this.e.length;b++)a.push(this.n[this.e[b]]);return a};g.o=function(){ob(this);return this.e.concat()};
g.w=function(a){return E(this.n,a)};g.remove=function(a){return E(this.n,a)?(delete this.n[a],this.d--,this.T++,this.e.length>2*this.d&&ob(this),!0):!1};var ob=function(a){if(a.d!=a.e.length){for(var b=0,c=0;b<a.e.length;){var d=a.e[b];E(a.n,d)&&(a.e[c++]=d);b++}a.e.length=c}if(a.d!=a.e.length){for(var e={},c=b=0;b<a.e.length;)d=a.e[b],E(e,d)||(a.e[c++]=d,e[d]=1),b++;a.e.length=c}};g=D.prototype;g.get=function(a,b){return E(this.n,a)?this.n[a]:b};
g.set=function(a,b){E(this.n,a)||(this.d++,this.e.push(a),this.T++);this.n[a]=b};g.forEach=function(a,b){for(var c=this.o(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};g.clone=function(){return new D(this)};g.Sa=function(a){ob(this);var b=0,c=this.e,d=this.n,e=this.T,f=this,h=new nb;h.next=function(){for(;;){if(e!=f.T)throw Error("The map has changed since the iterator was created");if(b>=c.length)throw mb;var h=c[b++];return a?h:d[h]}};return h};
var E=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var pb=function(a){if("function"==typeof a.l)return a.l();if(m(a))return a.split("");if(ea(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ca(a)},qb=function(a,b){if("function"==typeof a.forEach)a.forEach(b,void 0);else if(ea(a)||m(a))wa(a,b,void 0);else{var c;if("function"==typeof a.o)c=a.o();else if("function"!=typeof a.l)if(ea(a)||m(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=Da(a);else c=void 0;for(var d=pb(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],
a)}};var sb=function(a){var b;b||(b=rb(a||arguments.callee.caller,[]));return b},rb=function(a,b){var c=[];if(0<=va(b,a))c.push("[...circular reference...]");else if(a&&50>b.length){c.push(tb(a)+"(");for(var d=a.arguments,e=0;d&&e<d.length;e++){0<e&&c.push(", ");var f;f=d[e];switch(typeof f){case "object":f=f?"object":"null";break;case "string":break;case "number":f=String(f);break;case "boolean":f=f?"true":"false";break;case "function":f=(f=tb(f))?f:"[fn]";break;default:f=typeof f}40<f.length&&(f=f.substr(0,
40)+"...");c.push(f)}b.push(a);c.push(")\n");try{c.push(rb(a.caller,b))}catch(h){c.push("[exception trying to get caller]\n")}}else a?c.push("[...long stack...]"):c.push("[end]");return c.join("")},tb=function(a){if(G[a])return G[a];a=String(a);if(!G[a]){var b=/function ([^\(]+)/.exec(a);G[a]=b?b[1]:"[Anonymous]"}return G[a]},G={};var H=function(a,b,c,d,e){this.reset(a,b,c,d,e)};H.prototype.xa=null;H.prototype.wa=null;var ub=0;H.prototype.reset=function(a,b,c,d,e){"number"==typeof e||ub++;d||ia();this.t=a;this.Qa=b;delete this.xa;delete this.wa};H.prototype.za=function(){return this.t};H.prototype.ha=function(a){this.t=a};H.prototype.getMessage=function(){return this.Qa};var I=function(a){this.Ma=a;this.H=this.la=this.t=this.aa=null},J=function(a,b){this.name=a;this.value=b};J.prototype.toString=function(){return this.name};var vb=new J("SEVERE",1E3),wb=new J("WARNING",900),xb=new J("INFO",800),yb=new J("CONFIG",700),zb=new J("FINE",500),Ab=new J("ALL",0);I.prototype.getParent=function(){return this.aa};I.prototype.getChildren=function(){this.la||(this.la={});return this.la};I.prototype.ha=function(a){this.t=a};I.prototype.za=function(){return this.t};
var Bb=function(a){if(a.t)return a.t;if(a.aa)return Bb(a.aa);ua("Root logger has no level set.");return null};I.prototype.log=function(a,b,c){if(a.value>=Bb(this).value)for(fa(b)&&(b=b()),a=this.ya(a,b,c,I.prototype.log),b="log:"+a.getMessage(),k.console&&(k.console.timeStamp?k.console.timeStamp(b):k.console.markTimeline&&k.console.markTimeline(b)),k.msWriteProfilerMark&&k.msWriteProfilerMark(b),b=this;b;){c=b;var d=a;if(c.H)for(var e=0,f=void 0;f=c.H[e];e++)f(d);b=b.getParent()}};
I.prototype.ya=function(a,b,c,d){a=new H(a,String(b),this.Ma);if(c){a.xa=c;var e;d=d||I.prototype.ya;try{var f;var h=ba("window.location.href");if(m(c))f={message:c,name:"Unknown error",lineNumber:"Not available",fileName:h,stack:"Not available"};else{var l,w;b=!1;try{l=c.lineNumber||c.Ua||"Not available"}catch(Ua){l="Not available",b=!0}try{w=c.fileName||c.filename||c.sourceURL||k.$googDebugFname||h}catch(R){w="Not available",b=!0}f=!b&&c.lineNumber&&c.fileName&&c.stack&&c.message&&c.name?c:{message:c.message||
"Not available",name:c.name||"UnknownError",lineNumber:l,fileName:w,stack:c.stack||"Not available"}}e="Message: "+ra(f.message)+'\nUrl: <a href="view-source:'+f.fileName+'" target="_new">'+f.fileName+"</a>\nLine: "+f.lineNumber+"\n\nBrowser stack:\n"+ra(f.stack+"-> ")+"[end]\n\nJS stack traversal:\n"+ra(sb(d)+"-> ")}catch(F){e="Exception trying to expose exception! You win, we lose. "+F}a.wa=e}return a};I.prototype.info=function(a,b){this.log(xb,a,b)};I.prototype.g=function(a,b){this.log(zb,a,b)};
var Cb={},Db=null,Eb=function(a){Db||(Db=new I(""),Cb[""]=Db,Db.ha(yb));var b;if(!(b=Cb[a])){b=new I(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=Eb(a.substr(0,c));c.getChildren()[d]=b;b.aa=c;Cb[a]=b}return b};var K=function(){this.m=new C(this);this.Na=this;this.ia=null};p(K,Ra);K.prototype[Sa]=!0;g=K.prototype;g.addEventListener=function(a,b,c,d){bb(this,a,b,c,d)};g.removeEventListener=function(a,b,c,d){hb(this,a,b,c,d)};
g.dispatchEvent=function(a){Fb(this);var b,c=this.ia;if(c){b=[];for(var d=1;c;c=c.ia)b.push(c),r(1E3>++d,"infinite loop")}c=this.Na;d=a.type||a;if(m(a))a=new A(a,c);else if(a instanceof A)a.target=a.target||c;else{var e=a;a=new A(d,c);Fa(a,e)}var e=!0,f;if(b)for(var h=b.length-1;!a.B&&0<=h;h--)f=a.currentTarget=b[h],e=Gb(f,d,!0,a)&&e;a.B||(f=a.currentTarget=c,e=Gb(f,d,!0,a)&&e,a.B||(e=Gb(f,d,!1,a)&&e));if(b)for(h=0;!a.B&&h<b.length;h++)f=a.currentTarget=b[h],e=Gb(f,d,!1,a)&&e;return e};
g.s=function(){K.fa.s.call(this);this.m&&this.m.removeAll(void 0);this.ia=null};g.listen=function(a,b,c,d){Fb(this);return this.m.add(String(a),b,!1,c,d)};var Gb=function(a,b,c,d){b=a.m.f[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.removed&&h.Y==c){var l=h.listener,w=h.$||h.src;h.Z&&Ya(a.m,h);e=!1!==l.call(w,d)&&e}}return e&&!1!=d.va};K.prototype.na=function(a,b,c,d){return this.m.na(String(a),b,c,d)};var Fb=function(a){r(a.m,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var L=function(a,b){a&&a.g(b,void 0)};var Hb=function(a,b,c){if(fa(a))c&&(a=n(a,c));else if(a&&"function"==typeof a.handleEvent)a=n(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:k.setTimeout(a,b||0)};var Ib=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,Kb=function(a){if(Jb){Jb=!1;var b=k.location;if(b){var c=b.href;if(c&&(c=(c=Kb(c)[3]||null)&&decodeURIComponent(c))&&c!=b.hostname)throw Jb=!0,Error();}}return a.match(Ib)},Jb=y;var Lb=function(){};Lb.prototype.Aa=null;var Nb=function(a){var b;(b=a.Aa)||(b={},Mb(a)&&(b[0]=!0,b[1]=!0),b=a.Aa=b);return b};var Ob,Pb=function(){};p(Pb,Lb);var Qb=function(a){return(a=Mb(a))?new ActiveXObject(a):new XMLHttpRequest},Mb=function(a){if(!a.Ca&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.Ca=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.Ca};Ob=new Pb;var M=function(a){K.call(this);this.headers=new D;this.R=a||null;this.p=!1;this.M=this.b=null;this.C=this.pa=this.N="";this.r=this.ba=this.L=this.ca=!1;this.D=0;this.O=null;this.qa="";this.P=this.Fa=!1};p(M,K);var Rb=M.prototype,Sb=Eb("goog.net.XhrIo");Rb.a=Sb;var Tb=/^https?$/i,Ub=["POST","PUT"],Vb=[];M.prototype.Pa=function(){this.Ba();za(Vb,this)};
M.prototype.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.N+"; newUri="+a);b=b?b.toUpperCase():"GET";this.N=a;this.C="";this.pa=b;this.ca=!1;this.p=!0;this.b=this.R?Qb(this.R):Qb(Ob);this.M=this.R?Nb(this.R):Nb(Ob);this.b.onreadystatechange=n(this.ra,this);try{L(this.a,N(this,"Opening Xhr")),this.ba=!0,this.b.open(b,String(a),!0),this.ba=!1}catch(e){L(this.a,N(this,"Error opening Xhr: "+e.message));Wb(this,e);return}a=c||"";var f=this.headers.clone();
d&&qb(d,function(a,b){f.set(b,a)});d=ya(f.o());c=k.FormData&&a instanceof k.FormData;!(0<=va(Ub,b))||d||c||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);this.qa&&(this.b.responseType=this.qa);"withCredentials"in this.b&&(this.b.withCredentials=this.Fa);try{Xb(this),0<this.D&&(this.P=Yb(this.b),L(this.a,N(this,"Will abort after "+this.D+"ms if incomplete, xhr2 "+this.P)),this.P?(this.b.timeout=this.D,this.b.ontimeout=
n(this.sa,this)):this.O=Hb(this.sa,this.D,this)),L(this.a,N(this,"Sending request")),this.L=!0,this.b.send(a),this.L=!1}catch(h){L(this.a,N(this,"Send error: "+h.message)),Wb(this,h)}};var Yb=function(a){return v&&z(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout},xa=function(a){return"content-type"==a.toLowerCase()};M.prototype.sa=function(){"undefined"!=typeof aa&&this.b&&(this.C="Timed out after "+this.D+"ms, aborting",L(this.a,N(this,this.C)),this.dispatchEvent("timeout"),this.abort(8))};
var Wb=function(a,b){a.p=!1;a.b&&(a.r=!0,a.b.abort(),a.r=!1);a.C=b;Zb(a);$b(a)},Zb=function(a){a.ca||(a.ca=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};M.prototype.abort=function(){this.b&&this.p&&(L(this.a,N(this,"Aborting")),this.p=!1,this.r=!0,this.b.abort(),this.r=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),$b(this))};M.prototype.s=function(){this.b&&(this.p&&(this.p=!1,this.r=!0,this.b.abort(),this.r=!1),$b(this,!0));M.fa.s.call(this)};
M.prototype.ra=function(){this.ja||(this.ba||this.L||this.r?ac(this):this.Oa())};M.prototype.Oa=function(){ac(this)};
var ac=function(a){if(a.p&&"undefined"!=typeof aa)if(a.M[1]&&4==O(a)&&2==a.getStatus())L(a.a,N(a,"Local request error detected and ignored"));else if(a.L&&4==O(a))Hb(a.ra,0,a);else if(a.dispatchEvent("readystatechange"),4==O(a)){L(a.a,N(a,"Request complete"));a.p=!1;try{var b=a.getStatus(),c,d;t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:d=!0;break t;default:d=!1}if(!(c=d)){var e;if(e=0===b){var f=Kb(String(a.N))[1]||null;if(!f&&self.location)var h=self.location.protocol,
f=h.substr(0,h.length-1);e=!Tb.test(f?f.toLowerCase():"")}c=e}if(c)a.dispatchEvent("complete"),a.dispatchEvent("success");else{var l;try{l=2<O(a)?a.b.statusText:""}catch(w){L(a.a,"Can not get status: "+w.message),l=""}a.C=l+" ["+a.getStatus()+"]";Zb(a)}}finally{$b(a)}}},$b=function(a,b){if(a.b){Xb(a);var c=a.b,d=a.M[0]?ca:null;a.b=null;a.M=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(c=a.a)&&c.log(vb,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},
Xb=function(a){a.b&&a.P&&(a.b.ontimeout=null);"number"==typeof a.O&&(k.clearTimeout(a.O),a.O=null)},O=function(a){return a.b?a.b.readyState:0};M.prototype.getStatus=function(){try{return 2<O(this)?this.b.status:-1}catch(a){return-1}};var N=function(a,b){return b+" ["+a.pa+" "+a.N+" "+a.getStatus()+"]"};var bc=function(a){this.K=0;this.ma=a||100;this.u=[]};g=bc.prototype;g.add=function(a){var b=this.u[this.K];this.u[this.K]=a;this.K=(this.K+1)%this.ma;return b};g.get=function(a){a=cc(this,a);return this.u[a]};g.set=function(a,b){a=cc(this,a);this.u[a]=b};g.v=function(){return this.u.length};g.l=function(){for(var a=this.v(),b=this.v(),c=[],a=this.v()-a;a<b;a++)c.push(this.get(a));return c};g.o=function(){for(var a=[],b=this.v(),c=0;c<b;c++)a[c]=c;return a};g.w=function(a){return a<this.v()};
var cc=function(a,b){if(b>=a.u.length)throw Error("Out of bounds exception");return a.u.length<a.ma?b:(a.K+Number(b))%a.ma};var P=function(a,b){var c;if(a instanceof P)this.h=void 0!==b?b:a.h,dc(this,a.A),c=a.X,Q(this),this.X=c,c=a.I,Q(this),this.I=c,ec(this,a.k),c=a.W,Q(this),this.W=c,fc(this,a.q.clone()),c=a.V,Q(this),this.V=c;else if(a&&(c=Kb(String(a)))){this.h=!!b;dc(this,c[1]||"",!0);var d=c[2]||"";Q(this);this.X=d?decodeURIComponent(d):"";d=c[3]||"";Q(this);this.I=d?decodeURIComponent(d):"";ec(this,c[4]);d=c[5]||"";Q(this);this.W=d?decodeURIComponent(d):"";fc(this,c[6]||"",!0);c=c[7]||"";Q(this);this.V=c?decodeURIComponent(c):
""}else this.h=!!b,this.q=new S(null,0,this.h)};g=P.prototype;g.A="";g.X="";g.I="";g.k=null;g.W="";g.V="";g.Ta=!1;g.h=!1;g.toString=function(){var a=[],b=this.A;b&&a.push(T(b,gc),":");if(b=this.I){a.push("//");var c=this.X;c&&a.push(T(c,gc),"@");a.push(encodeURIComponent(String(b)));b=this.k;null!=b&&a.push(":",String(b))}if(b=this.W)this.I&&"/"!=b.charAt(0)&&a.push("/"),a.push(T(b,"/"==b.charAt(0)?hc:ic));(b=this.q.toString())&&a.push("?",b);(b=this.V)&&a.push("#",T(b,jc));return a.join("")};
g.clone=function(){return new P(this)};var dc=function(a,b,c){Q(a);a.A=c?b?decodeURIComponent(b):"":b;a.A&&(a.A=a.A.replace(/:$/,""))},ec=function(a,b){Q(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.k=b}else a.k=null},fc=function(a,b,c){Q(a);b instanceof S?(a.q=b,a.q.ka(a.h)):(c||(b=T(b,kc)),a.q=new S(b,0,a.h))},U=function(a,b,c){Q(a);a.q.set(b,c)},Q=function(a){if(a.Ta)throw Error("Tried to modify a read-only Uri");};
P.prototype.ka=function(a){this.h=a;this.q&&this.q.ka(a);return this};
var T=function(a,b){return m(a)?encodeURI(a).replace(b,lc):null},lc=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},gc=/[#\/\?@]/g,ic=/[\#\?:]/g,hc=/[\#\?]/g,kc=/[\#\?@]/g,jc=/#/g,S=function(a,b,c){this.i=a||null;this.h=!!c},W=function(a){if(!a.c&&(a.c=new D,a.d=0,a.i))for(var b=a.i.split("&"),c=0;c<b.length;c++){var d=b[c].indexOf("="),e=null,f=null;0<=d?(e=b[c].substring(0,d),f=b[c].substring(d+1)):e=b[c];e=decodeURIComponent(e.replace(/\+/g," "));e=V(a,e);a.add(e,
f?decodeURIComponent(f.replace(/\+/g," ")):"")}};g=S.prototype;g.c=null;g.d=null;g.v=function(){W(this);return this.d};g.add=function(a,b){W(this);this.i=null;a=V(this,a);var c=this.c.get(a);c||this.c.set(a,c=[]);c.push(b);this.d++;return this};g.remove=function(a){W(this);a=V(this,a);return this.c.w(a)?(this.i=null,this.d-=this.c.get(a).length,this.c.remove(a)):!1};g.w=function(a){W(this);a=V(this,a);return this.c.w(a)};
g.o=function(){W(this);for(var a=this.c.l(),b=this.c.o(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};g.l=function(a){W(this);var b=[];if(m(a))this.w(a)&&(b=Aa(b,this.c.get(V(this,a))));else{a=this.c.l();for(var c=0;c<a.length;c++)b=Aa(b,a[c])}return b};g.set=function(a,b){W(this);this.i=null;a=V(this,a);this.w(a)&&(this.d-=this.c.get(a).length);this.c.set(a,[b]);this.d++;return this};g.get=function(a,b){var c=a?this.l(a):[];return 0<c.length?String(c[0]):b};
g.toString=function(){if(this.i)return this.i;if(!this.c)return"";for(var a=[],b=this.c.o(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.l(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.i=a.join("&")};g.clone=function(){var a=new S;a.i=this.i;this.c&&(a.c=this.c.clone(),a.d=this.d);return a};var V=function(a,b){var c=String(b);a.h&&(c=c.toLowerCase());return c};
S.prototype.ka=function(a){a&&!this.h&&(W(this),this.i=null,this.c.forEach(function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.remove(d),0<a.length&&(this.i=null,this.c.set(V(this,d),Ba(a)),this.d+=a.length))},this));this.h=a};var X=function(){this.Ka=new bc(100);this.a=Eb("hotword.Logger");this.a.ha(Ab);var a=this.a,b=n(this.La,this);a.H||(a.H=[]);a.H.push(b);this.ua={};this.U={}};X.Ga=function(){return X.Da?X.Da:X.Da=new X};X.prototype.La=function(a){a.za().value>=zb.value&&this.Ka.add(a.getMessage())};
var mc=function(a,b,c,d){var e=new P("https://www.google.com/gen_204");U(e,"atyp","i");U(e,"ct","chw");U(e,"cd",b);U(e,"cad",c);chrome&&chrome.app&&chrome.app.getDetails&&chrome.app.getDetails()&&U(e,"chwv",chrome.app.getDetails().version);b="stats-"+c;b in a.U?a.U[b]++:a.U[b]=1;c=parseInt(window.localStorage.getItem(b),10);isNaN(c)?c=1:c++;window.localStorage.setItem(b,""+c);a.ua[b]=c;U(e,"chwls",a.U[b]);U(e,"chwgs",a.ua[b]);for(var f in d)U(e,f,d[f]);window.google&&window.google.kEI&&U(e,"ei",window.google.kEI);
U(e,"zx",(new Date).getTime());a=new M;Vb.push(a);a.m.add("ready",a.Pa,!0,void 0,void 0);a.send(e,void 0,void 0,void 0)};X.prototype.g=function(a){this.a.g(a)};var Y=function(){this.ea=null;this.da=0;this.F=!1;this.k=null;this.a=X.Ga();this.j=this.ta=null},nc=function(a){a.ea?a.da=0:window.setTimeout(n(a.Ra,a),2E3)};Y.prototype.Ra=function(){var a=document;(this.ea=m("spch")?a.getElementById("spch"):"spch")?this.da=0:3>this.da++?(Z(this,"vt"),nc(this)):$(this,"ac1")};var oc=function(a,b){a.a.g("Checking UI: "+b);a.j[b].G=window.setTimeout(n(a.Ja,a,b),2E3)};
Y.prototype.Ja=function(a){this.a.g("Failed UI check: "+a+"times:"+this.j[a].S);3>this.j[a].S++?(Z(this,a),oc(this,a)):$(this,this.j[a].error)};var pc=function(a,b){a.a.g("Verifying UI: "+b);if(a.j[b].G){window.clearTimeout(a.j[b].G);a.j[b].G=null;a.j[b].S=0;var c={};c.chwui=b;var d=a.a;d.a.info("UI shown:"+b);mc(d,"n","cus",c)}},$=function(a,b){a.k&&(a.a.g("Sending to extension: "+b),a.k.postMessage({cmd:b}))};
Y.prototype.Ia=function(a){a=a.cmd;this.a.g("From extension: "+a);if(a)switch(a){case "vt":Z(this,a);nc(this);break;case "hs":Z(this,a);oc(this,"hs");break;case "hd":Z(this,"hd");break;case "ht":Z(this,a);oc(this,a);break;case "he":Z(this,a),oc(this,a)}};var Z=function(a,b){a.a.g("Sending to page: "+b);window.postMessage({type:b},"*")};
Y.prototype.Ha=function(a){a=a.ga;if(a.source==window&&a.data.type)switch(a=a.data.type,this.a.g("From page: "+a),a){case "ss":this.F=!0;$(this,a);break;case "se":this.F=!1;$(this,a);break;case "sr":this.F=!1;$(this,a);break;case "SPEECH_RESET":this.F=!1;$(this,"se");break;case "hcc":$(this,a);break;case "hcr":$(this,a);break;case "hcd":window.open("https://support.google.com/chrome/?p=ui_hotword_search","_blank");break;case "shs":pc(this,"hs");break;case "sem":pc(this,"he");break;case "stm":pc(this,
"ht")}};Y.prototype.oa=function(){if("chwace"in window){var a=this.a;a.a.info("Ignore injected client script.");mc(a,"n","cr",void 0)}else window.chwace=!0,this.a.g("Audio client init"),this.j={},this.j.hs={G:null,S:0,error:"ac2"},this.j.ht={G:null,S:0,error:"ac3"},this.ta=bb(window,"message",n(this.Ha,this)),qc(this)};
var qc=function(a){a.a.g("Audio client port init");a.k=chrome.runtime.connect({name:"chwcpn"});a.k.onDisconnect.addListener(n(function(){var a=this.a;a.a.log(wb,"Extension disconnected.",void 0);mc(a,"w","cpd",void 0);ib(this.ta);delete window.chwace;this.a.g("Client destroyed.")},a));a.k.onMessage.addListener(n(a.Ia,a));a.F&&$(a,"ss")};chrome&&chrome.runtime&&(new Y).oa();