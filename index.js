// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("stream"),require("process")):"function"==typeof define&&define.amd?define(["stream","process"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).inspectSinkStream=r(e.require$$0$2,e.require$$0$1)}(this,(function(e,r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,o=Object.defineProperty,i=Object.prototype,a=i.toString,u=i.__defineGetter__,c=i.__defineSetter__,f=i.__lookupGetter__,l=i.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?o:function(e,r,t){var n,o,s,p;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(f.call(e,r)||l.call(e,r)?(n=e.__proto__,e.__proto__=i,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),s="get"in t,p="set"in t,o&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(e,r,t.get),p&&c&&c.call(e,r,t.set),e};var s=n;function p(e,r,t){s(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function g(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var d=/./;function h(e){return"boolean"==typeof e}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;function m(e,r){return null!=e&&w.call(e,r)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var O=b()?function(e){var r,t,n;if(null==e)return v.call(e);t=e[j],r=m(e,j);try{e[j]=void 0}catch(r){return v.call(e)}return n=v.call(e),r?e[j]=t:delete e[j],n}:function(e){return v.call(e)},_=Boolean.prototype.toString;var E=b();function S(e){return"object"==typeof e&&(e instanceof Boolean||(E?function(e){try{return _.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===O(e)))}function k(e){return h(e)||S(e)}function T(){return new Function("return this;")()}p(k,"isPrimitive",h),p(k,"isObject",S);var x="object"==typeof self?self:null,I="object"==typeof window?window:null,P="object"==typeof global?global:null;var M=function(e){if(arguments.length){if(!h(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return T()}if(x)return x;if(I)return I;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),A=M.document&&M.document.childNodes,V=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var $=/^\s*function\s*([^(]*)/i;p(F,"REGEXP",$);var C=Array.isArray?Array.isArray:function(e){return"[object Array]"===O(e)};function N(e){return null!==e&&"object"==typeof e}function W(e){var r,t,n,o;if(("Object"===(t=O(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=$.exec(n.toString()))return r[1]}return N(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}p(N,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!C(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(N));var R="function"==typeof d||"object"==typeof V||"function"==typeof A?function(e){return W(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?W(e).toLowerCase():r};function B(e){return"function"===R(e)}var L=B(Object.assign),G=Object.assign;function X(e){return Object.keys(Object(e))}var Z,q=void 0!==Object.keys;function U(e){return"[object Arguments]"===O(e)}Z=function(){return U(arguments)}();var Y=Z;function z(e){return"string"==typeof e}var D=String.prototype.valueOf;var H=b();function J(e){return"object"==typeof e&&(e instanceof String||(H?function(e){try{return D.call(e),!0}catch(e){return!1}}(e):"[object String]"===O(e)))}function K(e){return z(e)||J(e)}function Q(e){return"number"==typeof e}p(K,"isPrimitive",z),p(K,"isObject",J);var ee=Number,re=ee.prototype.toString;var te=b();function ne(e){return"object"==typeof e&&(e instanceof ee||(te?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object Number]"===O(e)))}function oe(e){return Q(e)||ne(e)}function ie(e){return e!=e}function ae(e){return Q(e)&&ie(e)}function ue(e){return ne(e)&&ie(e.valueOf())}function ce(e){return ae(e)||ue(e)}p(oe,"isPrimitive",Q),p(oe,"isObject",ne),p(ce,"isPrimitive",ae),p(ce,"isObject",ue);var fe=Number.POSITIVE_INFINITY,le=ee.NEGATIVE_INFINITY,se=Math.floor;function pe(e){return se(e)===e}function ge(e){return e<fe&&e>le&&pe(e)}function de(e){return Q(e)&&ge(e)}function he(e){return ne(e)&&ge(e.valueOf())}function ye(e){return de(e)||he(e)}p(ye,"isPrimitive",de),p(ye,"isObject",he);var be=Object.prototype.propertyIsEnumerable;var ve=!be.call("beep","0");function we(e,r){var t;return null!=e&&(!(t=be.call(e,r))&&ve&&K(e)?!ae(r=+r)&&de(r)&&r>=0&&r<e.length:t)}var me=Y?U:function(e){return null!==e&&"object"==typeof e&&!C(e)&&"number"==typeof e.length&&pe(e.length)&&e.length>=0&&e.length<=4294967295&&m(e,"callee")&&!we(e,"callee")},je=Array.prototype.slice;var Oe=we((function(){}),"prototype"),_e=!we({toString:null},"toString");function Ee(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&pe(e.length)&&e.length>=0&&e.length<=9007199254740991}function Se(e,r,t){var n,o;if(!Ee(e)&&!z(e))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+e+"`.");if(0===(n=e.length))return-1;if(3===arguments.length){if(!de(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(ce(r)){for(;o<n;o++)if(ce(e[o]))return o}else for(;o<n;o++)if(e[o]===r)return o;return-1}function ke(e){return e.constructor&&e.constructor.prototype===e}var Te=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],xe="undefined"==typeof window?void 0:window;var Ie=function(){var e;if("undefined"===R(xe))return!1;for(e in xe)try{-1===Se(Te,e)&&m(xe,e)&&null!==xe[e]&&"object"===R(xe[e])&&ke(xe[e])}catch(e){return!0}return!1}(),Pe="undefined"!=typeof window;var Me,Ae=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Me=q?function(){return 2!==(X(arguments)||"").length}(1,2)?function(e){return me(e)?X(je.call(e)):X(e)}:X:function(e){var r,t,n,o,i,a,u;if(o=[],me(e)){for(u=0;u<e.length;u++)o.push(u.toString());return o}if("string"==typeof e){if(e.length>0&&!m(e,"0"))for(u=0;u<e.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!N(e))return o;t=Oe&&n}for(i in e)t&&"prototype"===i||!m(e,i)||o.push(String(i));if(_e)for(r=function(e){if(!1===Pe&&!Ie)return ke(e);try{return ke(e)}catch(e){return!1}}(e),u=0;u<Ae.length;u++)a=Ae[u],r&&"constructor"===a||!m(e,a)||o.push(String(a));return o};var Ve=Me,Fe=void 0!==Object.getOwnPropertySymbols,$e=Object.getOwnPropertySymbols;var Ce=Fe?function(e){return $e(Object(e))}:function(){return[]};function Ne(e){var r,t,n;for(r=Ve(e),t=Ce(e),n=0;n<t.length;n++)we(e,t[n])&&r.push(t[n]);return r}var We=Object;function Re(e){return"number"==typeof e}function Be(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Le(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+Be(o):Be(o)+e,n&&(e="-"+e)),e}var Ge=String.prototype.toLowerCase,Xe=String.prototype.toUpperCase;function Ze(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!Re(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=Le(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=Le(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Xe.call(e.specifier)?Xe.call(t):Ge.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function qe(e){return"string"==typeof e}var Ue=Math.abs,Ye=String.prototype.toLowerCase,ze=String.prototype.toUpperCase,De=String.prototype.replace,He=/e\+(\d)$/,Je=/e-(\d)$/,Ke=/^(\d+)$/,Qe=/^(\d+)e/,er=/\.0$/,rr=/\.0*e/,tr=/(\..*[^0])0*e/;function nr(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!Re(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":Ue(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=De.call(t,tr,"$1e"),t=De.call(t,rr,"e"),t=De.call(t,er,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=De.call(t,He,"e+0$1"),t=De.call(t,Je,"e-0$1"),e.alternate&&(t=De.call(t,Ke,"$1."),t=De.call(t,Qe,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ze.call(e.specifier)?ze.call(t):Ye.call(t)}function or(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ir(e,r,t){var n=r-e.length;return n<0?e:e=t?e+or(n):or(n)+e}var ar=String.fromCharCode,ur=isNaN,cr=Array.isArray;function fr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function lr(e){var r,t,n,o,i,a,u,c,f;if(!cr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,c=0;c<e.length;c++)if(qe(n=e[c]))a+=n;else{if(r=void 0!==n.precision,!(n=fr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,ur(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,ur(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Ze(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!ur(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ur(i)?String(n.arg):ar(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=nr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Le(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ir(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var sr,pr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function gr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function dr(e){var r,t,n,o;for(t=[],o=0,n=pr.exec(e);n;)(r=e.slice(o,pr.lastIndex-n[0].length)).length&&t.push(r),t.push(gr(n)),o=pr.lastIndex,n=pr.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function hr(e){return"string"==typeof e}function yr(e){var r,t,n;if(!hr(e))throw new TypeError(yr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=dr(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return lr.apply(null,t)}sr=L?G:function(e){var r,t,n,o,i,a,u;if(null==e)throw new TypeError(yr("invalid argument. First argument must be a non-null object. Value: `%s`.",e));for(i=We(e),a=1;a<arguments.length;a++)if(null!=(r=arguments[a]))for(o=(t=Ne(We(r))).length,u=0;u<o;u++)i[n=t[u]]=r[n];return i};var br=sr;function vr(e){var r=typeof e;return null===e||"object"!==r&&"function"!==r?new TypeError("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `"+e+"`."):null}var wr=Object.create;function mr(){}var jr="function"==typeof wr?wr:function(e){return mr.prototype=e,new mr};function Or(e,r,t){s(e,r,{configurable:!0,enumerable:!1,writable:!0,value:t})}var _r=r;function Er(e){var r,t;for(r=[],t=1;t<arguments.length;t++)r.push(arguments[t]);function n(){e.apply(null,r)}_r.nextTick(n)}function Sr(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}var kr={objectMode:!1,decodeStrings:!0,defaultEncoding:"utf8"};var Tr,xr=Object.getPrototypeOf;Tr=B(Object.getPrototypeOf)?xr:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===O(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Ir=Tr;var Pr=Object.prototype;function Mr(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!C(e)}(e)&&(r=function(e){return null==e?null:(e=Object(e),Ir(e))}(e),!r||!m(e,"constructor")&&m(r,"constructor")&&B(r.constructor)&&"[object Function]"===O(r.constructor)&&m(r,"isPrototypeOf")&&B(r.isPrototypeOf)&&(r===Pr||function(e){var r;for(r in e)if(!m(e,r))return!1;return!0}(e)))}function Ar(e){return Q(e)&&e>=0}function Vr(e){return ne(e)&&e.valueOf()>=0}function Fr(e){return Ar(e)||Vr(e)}function $r(e,r){return Mr(r)?m(r,"objectMode")&&(e.objectMode=r.objectMode,!h(e.objectMode))?new TypeError(Sr("0g330","objectMode",e.objectMode)):m(r,"highWaterMark")&&(e.highWaterMark=r.highWaterMark,!Ar(e.highWaterMark))?new TypeError(Sr("0g34x","highWaterMark",e.highWaterMark)):m(r,"decodeStrings")&&(e.decodeStrings=r.decodeStrings,!h(e.decodeStrings))?new TypeError(Sr("0g330","decodeStrings",e.decodeStrings)):m(r,"defaultEncoding")&&(e.defaultEncoding=r.defaultEncoding,!z(e.defaultEncoding))?new TypeError(Sr("0g32i","defaultEncoding",e.defaultEncoding)):null:new TypeError(Sr("0g32h",r))}p(Fr,"isPrimitive",Ar),p(Fr,"isObject",Vr);var Cr=g(Object.freeze({__proto__:null,default:()=>()=>{}}))("inspect-stream-sink"),Nr=e.Writable;function Wr(e,r){var t,n,o;if(!(this instanceof Wr))return arguments.length>1?new Wr(e,r):new Wr(e);if(n=br({},kr),arguments.length>1){if(t=r,o=$r(n,e))throw o}else t=e;if(!B(t))throw new TypeError(Sr("0g32n",t));return Cr("Creating a writable stream configured with the following options: %s.",JSON.stringify(n)),Nr.call(this,n),Or(this,"_destroyed",!1),Or(this,"_idx",-1),p(this,"_inspect",t),this}return function(e,r){var t=vr(e);if(t)throw t;if(t=vr(r))throw t;if(void 0===r.prototype)throw new TypeError("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `"+r.prototype+"`.");e.prototype=jr(r.prototype),s(e.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:e})}(Wr,Nr),p(Wr.prototype,"_write",(function(e,r,t){if(this._idx+=1,Cr("Received a new chunk. Chunk: %s. Encoding: %s. Index: %d.",e.toString(),r,this._idx),this._inspect.call(null,e,this._idx),this._destroyed)return Er(t);t()})),p(Wr.prototype,"destroy",(function(e){var r;return this._destroyed?(Cr("Attempted to destroy an already destroyed stream."),this):(r=this,this._destroyed=!0,Er((function(){e&&(Cr("Stream was destroyed due to an error. Error: %s.",JSON.stringify(e)),r.emit("error",e));Cr("Closing the stream..."),r.emit("close")})),this)})),p(Wr,"objectMode",(function(e,r){var t,n;if(arguments.length>1){if(!Mr(e))throw new TypeError(Sr("0g32h",e));t=br({},e),n=r}else t={},n=e;return t.objectMode=!0,new Wr(t,n)})),p(Wr,"factory",(function(e){var r;if(arguments.length){if(!Mr(e))throw new TypeError(Sr("0g32h",e));r=br({},e)}else r={};return t;function t(e){return new Wr(r,e)}})),Wr}));
//# sourceMappingURL=index.js.map
