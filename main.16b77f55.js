parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelectorAll([".shop__colors"]);e.forEach(function(e){return e.addEventListener("click",function(){var t=document.querySelectorAll([".shop__sofa-svg"]),o=window.getComputedStyle(e).backgroundColor,n=window.getComputedStyle(e).opacity,c="".concat(o.slice(0,3),"a").concat(o.slice(3,-1),", ").concat(n,")");t.forEach(function(e){e.style.fill=c})})});var t=document.querySelector([".shop__good-svg--3"]),o=document.querySelector([".shop__good-svg--5"]);t.childNodes[0].id="mask0_1_3009",t.childNodes[1].attributes[0].nodeValue="url(#mask0_1_3009)",o.childNodes[0].id="mask0_1_30097",o.childNodes[1].attributes[0].nodeValue="url(#mask0_1_30097)";var n=document.querySelectorAll([".shop__colors-wraper"]);n.forEach(function(e){return e.addEventListener("click",function(){var e=document.getElementsByClassName("shop__colors-wraper--is-active");e[0].className=e[0].className.replace(" shop__colors-wraper--is-active",""),this.className+=" shop__colors-wraper--is-active"})});var c=document.getElementById("mail-form");c.addEventListener("submit",function(e){e.preventDefault()}),window.addEventListener("hashchange",function(){"#menu"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")});var r,s=0,l=document.querySelector(".shop__gallery-wrap"),a=document.querySelector(".shop__gallery"),d=document.querySelector(".shop__good-item"),i=document.querySelectorAll(".shop__good-item");function u(){var e=document.body.clientWidth;l.style.width="".concat(e-50,"px"),e<=768?(a.style.gridTemplateColumns="repeat(5, ".concat(e-50,"px)"),m()):(a.style.gridTemplateColumns="",a.style.left=0,m(),a.style.transform="translate(0px)")}function m(){r=window.getComputedStyle(d).width.slice(0,-2),a.style.transform="translate(-".concat(s*r,"px)")}u(),window.addEventListener("resize",u),document.querySelector([".shop-slider__button--next"]).addEventListener("click",function(){++s>=i.length&&(s=0),m()}),document.querySelector([".shop-slider__button--prev"]).addEventListener("click",function(){--s<0&&(s=i.length-1),m()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.16b77f55.js.map