// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,i,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,s=parseInt(i,10),!isFinite(s)){if(!t(i))throw new Error("invalid integer. Value: "+i);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(i=(-s).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=s.toString(r),s||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var l=Math.abs,p=String.prototype.toLowerCase,c=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,u=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,_=/\.0*e/,b=/(\..*[^0])0*e/;function w(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,b,"$1e"),i=f.call(i,_,"e"),i=f.call(i,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,u,"$1."),i=f.call(i,h,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===c.call(e.specifier)?c.call(i):p.call(i)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var v=String.fromCharCode,x=Array.isArray;function k(e){return e!=e}function E(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,t,i,a,o,l,p,c,f,g,d,u,h;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,c=0;c<e.length;c++)if("string"==typeof(i=e[c]))l+=i;else{if(r=void 0!==i.precision,!(i=E(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,k(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!k(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(o)?String(i.arg):v(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=w(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(g=i.arg,d=i.width,u=i.padRight,h=void 0,(h=d-g.length)<0?g:g=u?g+m(h):m(h)+g)),l+=i.arg||"",p+=1}return l}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,t,i,n;for(t=[],n=0,i=j.exec(e);i;)(r=e.slice(n,j.lastIndex-i[0].length)).length&&t.push(r),t.push(V(i)),n=j.lastIndex,i=j.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function $(e){var r,t;if("string"!=typeof e)throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[T(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return S.apply(null,r)}var F,I=Object.prototype,A=I.toString,C=I.__defineGetter__,R=I.__defineSetter__,O=I.__lookupGetter__,P=I.__lookupSetter__;F=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(O.call(e,r)||P.call(e,r)?(i=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&C&&C.call(e,r,t.get),o&&R&&R.call(e,r,t.set),e};var Z=F;function G(){return{dtypes:{default:"float64",numeric:"float64",real:"float64",floating_point:"float64",real_floating_point:"float64",complex_floating_point:"complex128",boolean:"bool",integer:"int32",signed_integer:"int32",unsigned_integer:"uint32"}}}var W={dtypes:{default:"float64",numeric:"float64",real:"float64",floating_point:"float64",real_floating_point:"float64",complex_floating_point:"complex128",boolean:"bool",integer:"int32",signed_integer:"int32",unsigned_integer:"uint32"}},L={"dtypes.default":W.dtypes.default,"dtypes.numeric":W.dtypes.numeric,"dtypes.real":W.dtypes.real,"dtypes.floating_point":W.dtypes.floating_point,"dtypes.real_floating_point":W.dtypes.real_floating_point,"dtypes.complex_floating_point":W.dtypes.complex_floating_point,"dtypes.boolean":W.dtypes.boolean,"dtypes.integer":W.dtypes.integer,"dtypes.signed_integer":W.dtypes.signed_integer,"dtypes.unsigned_integer":W.dtypes.unsigned_integer};return Z(G,"get",{configurable:!1,enumerable:!1,writable:!1,value:function(e){var r=L[e];return void 0===r?null:r}}),G},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).defaults=r();
//# sourceMappingURL=browser.js.map