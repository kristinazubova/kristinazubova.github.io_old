!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],c=t.base?o[0]+t.base:o[0],s=n[c]||0,d="".concat(c," ").concat(s);n[c]=s+1;var u=l(d),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:d,updater:h(f,t),references:1}),r.push(d)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function m(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,g=0;function h(e,t){var n,r,i;if(t.singleton){var o=g++;n=p||(p=s(t)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=s(t),r=m.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=l(n[r]);a[i].references--}for(var o=c(e,t),s=0;s<n.length;s++){var d=l(n[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=o}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,l,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";n(3),n(5),n(11),n(13),n(15)},function(e,t,n){var r=n(0),i=n(4);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1},a=(r(i,o),i.locals?i.locals:{});e.exports=a},function(e,t,n){(t=n(1)(!1)).push([e.i,'@font-face{font-family:"SpaceGrotesk"}*{font-family:"SpaceGrotesk", Arial, sans-serif}body{margin:0px}a{text-decoration:none;color:white}a:hover{color:#ffb629}._relative{position:relative}._highlighted{padding:10px;border:2px solid #ffb629;border-radius:2rem}._shadow{box-shadow:0px 0px 10px 0px rgba(0,0,0,0.24);transition:all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)}._shadow:hover{box-shadow:0px 0px 15px 0px rgba(0,0,0,0.36)}._hide{display:none}._show{display:inline}._text-gradient{background:-webkit-linear-gradient(330deg, #ffb629 10%, #c41c21 60%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.layout-center{margin:0 10%}.title{display:flex;font-size:2.2rem}\n',""]),e.exports=t},function(e,t,n){var r=n(0),i=n(6);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1},a=(r(i,o),i.locals?i.locals:{});e.exports=a},function(e,t,n){var r=n(1),i=n(7),o=n(8),a=n(9),l=n(10);t=r(!1);var c=i(o),s=i(a),d=i(l);t.push([e.i,".header{overflow:hidden;background-color:#ad181e;color:white}.header__background-text{position:absolute;font-size:45rem;font-weight:bold;color:maroon;opacity:0.5;left:-7rem;top:-3rem}.menu{display:flex;align-items:center;justify-content:space-between}.header-menu{height:10rem}.header__text{font-size:5rem;margin-top:0px;margin-bottom:6rem}.menu__items{text-align:right;list-style-type:none;padding:0px;margin-right:1rem}.menu__items.menu_clicked{position:fixed;display:flex;justify-content:center;width:100%;left:0px;right:0px;z-index:100;background-color:#1e1e1e}.menu__item{display:inline-block;white-space:nowrap;padding:8px 10px}.menu_clicked .menu__item{display:block}.menu-icon{display:none}.menu_clicked .menu__item.menu-icon{text-align:center}.content{color:#353637}.content__flex{display:flex;justify-content:space-between}.content__services{width:45%}.submit-form{max-width:26rem;padding:1rem;margin-top:-7rem;border-radius:0.2rem;z-index:10;text-align:left;background-color:#ffb629}.submit-form__item{border:none;border-bottom:1px solid #353637;width:90%;line-height:2rem;background:none;margin:5%}.submit-form__feedback{text-align:center;font-weight:700}.submit-form__button{padding:1rem;background:none;border:none;font-size:1rem;font-weight:700;color:#353637}.submit-form__icon{font-size:3.5rem;margin-top:1rem}.feedback__title{justify-content:center;margin-top:0}.feedback__content{text-transform:uppercase;font-size:0.6em}.key-service{display:flex;flex-wrap:wrap;justify-content:space-between;height:calc(100% - 6rem)}.key-service-item{display:flex;align-items:center;width:45%;font-style:italic}.key-service-item .material-icons{font-size:2.5rem;margin-right:1rem}.content__portfolio{width:100%}.portfolio__body{display:flex;flex-wrap:wrap;justify-content:space-between}.portfolio__project{position:relative;display:flex;align-items:center;width:30%;min-height:10rem;text-align:center;background-size:cover;background-repeat:no-repeat}.project__title{position:absolute;width:100%;background-color:#ad181e;padding-top:1rem;padding-bottom:1rem;font-weight:700;font-size:2rem;color:white}.project__img{width:100%}.project-1{background-image:url("+c+")}.project-2{background-image:url("+s+")}.project-3{background-image:url("+d+")}.content__about-us{width:100%}.about-us__text{line-height:3rem;font-size:2rem}.contacts__items{display:flex;flex-wrap:wrap;justify-content:space-around;margin:3rem 0;padding:2rem 1rem;font-size:1.6rem}.contacs__item{white-space:nowrap}.footer{width:100%;bottom:0rem;vertical-align:bottom;min-height:4rem;background-color:#ad181e}.footer__content{display:flex;justify-content:space-between;align-items:center}.footer__copyright{font-size:1rem;color:white;margin:1rem;font-weight:100}.grid{display:grid;list-style:none;grid-template-columns:2fr 1fr;grid-gap:1rem;width:100%}ul.grid{padding-left:0px}.grid>li:first-child{grid-row:1 / span 2}.grid img{display:block;width:100%;height:100%;object-fit:cover}#chartdiv{width:100%;height:500px}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"1d6dc5de1819a1726995900f0a6baef8.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"6fa4b2eb3c015aa915f21460ed8952df.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"7497b621a96d55201ca389c87557d42b.png"},function(e,t,n){var r=n(0),i=n(12);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1},a=(r(i,o),i.locals?i.locals:{});e.exports=a},function(e,t,n){(t=n(1)(!1)).push([e.i,"@media only screen and (max-width: 767px){.layout-center{margin:0 5%}.title{font-size:1.5rem}.header-menu{height:initial}.header__text{margin-top:2rem;font-size:3rem}.header__background-text{font-size:20rem;left:-6rem;top:6rem}.menu__items{position:absolute;display:flex;flex-direction:column;justify-content:flex-start;height:100%;width:100%;text-align:center;top:0px;margin:0px}.menu__item{display:none;font-size:2rem;padding:0px;margin-bottom:0.7rem}.menu-icon{display:flex;justify-content:flex-end;align-items:center;text-align:right;background-color:unset;height:92px}.menu_clicked .menu__item.menu-icon{height:initial}.menu-icon .material-icons{font-size:2.5rem}.content__flex{flex-direction:column;flex-flow:column-reverse}.content__services{width:100%}.submit-form{max-width:unset;width:calc(100% - 2rem);margin-top:-2rem}.submit-form{max-width:unset;width:calc(100% - 2rem);margin-top:-2rem}.key-service-item{width:95%;line-height:3.5rem}.portfolio__project{width:100%;margin-bottom:1rem}.about-us__text{line-height:1.6rem;font-size:1.2rem}.contacts__items{font-size:1rem}}@media only screen and (min-width: 768px) and (max-width: 1128px){.layout-center{margin:0 5%}.title{font-size:x-large}.key-service-item{width:90%}.key-service-item .material-icons{font-size:2rem}}@media only screen and (min-width: 1500px){.layout-center{margin:0 18%}}@media only screen and (min-width: 1800px){.layout-center{margin:0 24%}}\n",""]),e.exports=t},function(e,t,n){var r=n(0),i=n(14);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1},a=(r(i,o),i.locals?i.locals:{});e.exports=a},function(e,t,n){(t=n(1)(!1)).push([e.i,'.child__title{width:100%;padding:1em;color:white;font-family:sans-serif;text-transform:uppercase;background:rgba(255,0,0,0.8)}.wrapper{width:30%;margin-top:0;right:0;top:0;perspective-origin:top center;overflow:hidden}.parent{position:relative;width:100%;animation:spin 4s infinite linear;transition:all 1s linear;perspective:1000px;text-align:center;font-weight:900;letter-spacing:0.5em;font-size:2em}.parent:hover{transform:translateX(-100%)}.child{position:absolute;width:100%;display:flex;align-items:center;color:rgba(0,0,0,0.5);font-family:sans-serif;text-transform:uppercase;transition:all 1s linear;transform-origin:100% 0}.details{background:url("https://unsplash.it/g/1500/1500") center center;background-size:cover;transform:rotateY(90deg) translateX(100%);z-index:1}.parent:hover .details{z-index:2;transform:rotateY(0deg) translateX(100%)}.home{background:url("https://unsplash.it/g/1600/1600") center center;background-size:cover;z-index:2}.parent:hover .home{transform:rotateY(-135deg)}\n',""]),e.exports=t},function(e,t,n){"use strict";var r,i=n(16);(0,((r=i)&&r.__esModule?r:{default:r}).default)(document);var o=document.querySelector(".menu-icon"),a=document.querySelectorAll(".menu__item");function l(e){if(-1!==navigator.userAgent.indexOf("IEMobile")||window.innerWidth<768){var t=document.querySelector(".menu__items"),n=t.firstElementChild;t.classList.contains("menu_clicked")?(t.classList.remove("menu_clicked"),n.firstElementChild.innerHTML="menu"):(t.classList.add("menu_clicked"),n.firstElementChild.innerHTML="clear")}}o.onclick=l,a.forEach((function(e){e.onclick=l})),am4core.ready((function(){am4core.useTheme(am4themes_animated);var e=am4core.create("chartdiv",am4plugins_wordCloud.WordCloud).series.push(new am4plugins_wordCloud.WordCloudSeries);e.accuracy=4,e.step=15,e.rotationThreshold=.7,e.maxCount=200,e.minWordLength=2,e.labels.template.tooltipText="{word}: {value}",e.fontFamily="Courier New",e.maxFontSize=am4core.percent(30),e.text="Node Javascript PHP Sass Webpack WordPress Vue React Postgres MySql Laravel Express Koa RabbitMQ Less Redis"}))},function(e,t,n){"use strict";var r,i,o;"function"==typeof Symbol&&Symbol.iterator;!function(){var n="gallery-lightbox",a=void 0,l=document.createElement("div");l.className=n;var c=document.createElement("button");c.className="close",l.appendChild(c);var s=document.createElement("button");s.className="prev",l.appendChild(s);var d=document.createElement("button");d.className="next",l.appendChild(d);var u=document.createElement("div");u.className="image",l.appendChild(u);var f=document.createElement("img");u.appendChild(f);var m=document.createElement("div");m.className="description",l.appendChild(m);var p=document.createElement("style");p.innerHTML='\n    .gallery-lightbox {\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background: rgba(0, 0, 0, 0.9);\n      opacity: 0;\n      visibility: hidden;\n      transition: opacity .3s ease, visibility .3s ease;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      font-size: 16px;\n      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n      padding: 1em;\n      z-index: 9999;\n      text-align: center;\n    }\n    .gallery-lightbox.-open {\n      opacity: 1;\n      visibility: visible;\n    }\n    .gallery-lightbox > .description {\n      margin-top: 1em;\n      color: white;\n      -webkit-font-smoothing: antialiased;\n    }\n    .gallery-lightbox > .image,\n    .gallery-lightbox > .image > img {\n      max-width: 100%;\n      max-height: 100%;\n    }\n    .gallery-lightbox > .image {\n      max-width: calc(100% - 6em);\n      overflow: hidden;\n    }\n    .gallery-lightbox > .next,\n    .gallery-lightbox > .prev,\n    .gallery-lightbox > .close {\n      position: absolute;\n      width: 3em;\n      height: 3em;\n      padding: 0;\n      margin: 0;\n      background: rgba(0, 0, 0, 0.2);\n      border: 0;\n    }\n    .gallery-lightbox > .close {\n      top: 2em;\n      right: 2em;\n    }\n    .gallery-lightbox > .close:before,\n    .gallery-lightbox > .close:after,\n    .gallery-lightbox > .prev:before,\n    .gallery-lightbox > .next:before,\n    .gallery-lightbox > .prev:after,\n    .gallery-lightbox > .next:after {\n      content: \'\';\n      width: 80%;\n      height: 2px;\n      position: absolute;\n      top: 50%;\n      left: 10%;\n      background: white;\n      transform-origin: center;\n    }\n    .gallery-lightbox > .close:before {\n      transform: translateY(-1px) rotate(45deg);\n    }\n    .gallery-lightbox > .close:after {\n      transform: translateY(-1px) rotate(-45deg);\n    }\n    .gallery-lightbox > .next,\n    .gallery-lightbox > .prev {\n      top: 50%;\n      transform: translateY(-1em)\n    }\n    .gallery-lightbox > .next {\n      right: 2em;\n    }\n    .gallery-lightbox > .prev {\n      left: 2em;\n    }\n    .gallery-lightbox > .prev:before,\n    .gallery-lightbox > .next:before,\n    .gallery-lightbox > .prev:after,\n    .gallery-lightbox > .next:after {\n      width: 20%;\n      left: 40%;\n    }\n    .gallery-lightbox > .next:before,\n    .gallery-lightbox > .next:after {\n      transform-origin: right;\n    }\n    .gallery-lightbox > .prev:before,\n    .gallery-lightbox > .prev:after {\n      transform-origin: left;\n    }\n    .gallery-lightbox > .next:after,\n    .gallery-lightbox > .prev:after {\n      transform: rotate(45deg);\n    }\n    .gallery-lightbox > .next:before,\n    .gallery-lightbox > .prev:before {\n      transform: rotate(-45deg);\n    }\n  ',document.body.appendChild(l),document.body.appendChild(p);var g=function(e){l.className=n+" -open",f.src=e.getAttribute("data-gallery-src"),m.innerHTML=e.getAttribute("data-gallery-desc")||""},h=function(){l.className=n,a=null};window.addEventListener("keyup",(function(e){27===e.keyCode&&h(),a&&(37===e.keyCode&&a.prev(),39===e.keyCode&&a.next())})),c.addEventListener("click",h),s.addEventListener("click",(function(){return a&&a.prev()})),d.addEventListener("click",(function(){return a&&a.next()}));var b=function(e){for(var t=e.querySelectorAll("[data-gallery-src]"),n={},r=0;r<t.length;r++){var i=t[r].getAttribute("data-gallery-id")||"_";n[i]=(n[i]||[]).concat(t[r])}Object.keys(n).forEach((function(e){return function(e){for(var t={currentIndex:0,next:function(){t.currentIndex=(t.currentIndex+1)%e.length,g(e[t.currentIndex])},prev:function(){t.currentIndex=t.currentIndex-1,t.currentIndex<0&&(t.currentIndex=e.length-1),g(e[t.currentIndex])}},n=function(n){return function(){a=t,t.currentIndex=n,g(e[n])}},r=0;r<e.length;r++)e[r].addEventListener("click",n(r))}(n[e])}))};"undefined"!=typeof self&&self,i=[],void 0===(o="function"==typeof(r=function(){return b})?r.apply(t,i):r)||(e.exports=o),b(document)}()}]);