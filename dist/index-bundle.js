(()=>{"use strict";var e={666:(e,n,r)=>{r.d(n,{Z:()=>c});var t=r(14),o=r.n(t),i=r(937),a=r.n(i)()(o());a.push([e.id,"*{box-sizing:border-box}body{margin:100px;background:#fff}.calc{width:450px;border:solid 2px #555;border-radius:10px;background-color:#888;padding:20px;display:grid;grid-template-columns:repeat(4, 1fr);grid-auto-rows:80px;gap:20px}.calc__result{text-align:end;grid-column:1 / -1}.calc__result{grid-column:1 / -1;background-color:#333;color:#fff;font-size:56px;padding:10px}.calc__btn{border:none;border-radius:5px;background-color:#eee;cursor:pointer;font-size:30px}.calc__btn:hover{opacity:0.9}.calc__btn_operator{background-color:#ffe2ae}.calc__btn_reset{background-color:#ff5050;color:#fff}.calc__btn_equal{background-color:#5b50ff;color:#fff;grid-column:2 / -1}.calc__operation_history{display:grid;align-self:self-end;grid-column:1 / -1;text-align:end;font-size:xx-large;color:#ffe2ae}\n",""]);const c=a},937:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);t&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),r&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=r):s[2]=r),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},14:e=>{e.exports=function(e){return e[1]}},890:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var i={},a=[],c=0;c<e.length;c++){var l=e[c],u=t.base?l[0]+t.base:l[0],s=i[u]||0,f="".concat(u," ").concat(s);i[u]=s+1;var d=r(f),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)n[d].references++,n[d].updater(p);else{var x=o(p,t);t.byIndex=c,n.splice(c,0,{identifier:f,updater:x,references:1})}a.push(f)}return a}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var i=t(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=r(i[a]);n[c].references--}for(var l=t(e,o),u=0;u<i.length;u++){var s=r(i[u]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=l}}},541:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},147:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},892:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},736:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},951:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return e[t](i,i.exports,r),i.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.nc=void 0,(()=>{var e=r(890),n=r.n(e),t=r(736),o=r.n(t),i=r(541),a=r.n(i),c=r(892),l=r.n(c),u=r(147),s=r.n(u),f=r(951),d=r.n(f),p=r(666),x={};function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}x.styleTagTransform=d(),x.setAttributes=l(),x.insert=a().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=s(),n()(p.Z,x),p.Z&&p.Z.locals&&p.Z.locals;var g,m,y,h,b,T=["+","-","/","*"],_=".",S=[],w=!0,A=document.querySelector("#result");function C(e,n,r){if("+"===r)b=parseFloat(e)+parseFloat(n);else if("-"===r)b=parseFloat(e)-parseFloat(n);else if("*"===r)b=parseFloat(e)*parseFloat(n);else{if("/"!==r)return b===A.innerText?b:A.innerText;b=parseFloat(e)/parseFloat(n)}return Number.isInteger(b)||(b=b.toPrecision(12)),parseFloat(b)}function F(e){var n,r,t=document.getElementsByClassName("operator"),o=document.getElementById("operation_history");if(g=e,"C"===e)return g=null,m=null,y=null,h=null,b=null,o.innerText="",void(A.innerText="");if("±"!==e){if(T.includes(e)||"="===e){if(null!=m&&e===m)return;if("-"===e&&0===A.innerText)return A.innerText=e,w=!1,void(m=e);if(T.includes(e)&&"-"===A.innerText)return;if("-"===e&&"-"===m&&o.innerText.includes("="))return;if(T.includes(e)&&(y=void 0!==h&&null!=h?h:e,h="*"===e?"×":"/"===e?"÷":e,m=e,w=!0),0===S.length)S.push(A.innerText),void 0!==h&&null!=h&&(o.innerText="".concat(A.innerText," ").concat(h));else{1===S.length&&(S[1]=A.innerText);var i=A.innerText;if("="===e&&null!=y){b=C(S[0],S[1],y),A.innerText=b,o.innerText.includes("=")||(o.innerText+=" ".concat(S[1]," =")),i=(n=S,r=1,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,i,a,c=[],l=!0,u=!1;try{if(i=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;l=!1}else for(;!(l=(t=i.call(r)).done)&&(c.push(t.value),c.length!==n);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(n,r)||function(e,n){if(e){if("string"==typeof e)return v(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],S[0]=b,m=null;var a=o.innerText.split(" ");a[0]=i,o.innerText=a.join(" ")}else null!=y&&(o.innerText="".concat(i," ").concat(h),y=e,(S=[]).push(A.innerText))}}else if(w)A.innerText=e===_?"0".concat(_):e,w=!1;else{if(1===A.innerText.length&&0===A.innerText)return void(e===_&&(A.innerText+=e));if(A.innerText.includes(_)&&e===_)return;if(10===A.innerText.length)return;e===_&&"-"===A.innerText?A.innerText="-0".concat(_):A.innerText+=e}C(S[0],S[1],t)}else!function(){if(void 0===h){if(""===A.innerText)return A.innerText="-",void(w=!1);A.innerText=-A.innerText}else if(S.length>0)if(T.includes(g)){if("-"===A.innerText)return A.innerText=0,void(w=!0);A.innerText="-",w=!1}else A.innerText=-A.innerText,1===S.length?S[0]=A.innerText:S[1]=A.innerText}()}var I=document.querySelector(".calc");I&&I.addEventListener("click",(function(e){e.target.classList.contains("calc__btn")&&F(e.target.innerText)}))})()})();