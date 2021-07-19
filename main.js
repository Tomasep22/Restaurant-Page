(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>w});var o=t(645),r=t.n(o),i=t(667),a=t.n(i),c=new URL(t(830),t.b),s=new URL(t(834),t.b),d=new URL(t(655),t.b),l=new URL(t(263),t.b),u=new URL(t(197),t.b),p=new URL(t(864),t.b),h=r()((function(n){return n[1]})),m=a()(c),f=a()(s),b=a()(d),g=a()(l),v=a()(u),x=a()(p);h.push([n.id,"@font-face {\n    font-family: 'MyFont';\n    src: url("+m+") format('truetype'),\n      url("+f+") format('opentype');\n  }\n\nhtml {\n    font-family: 'MyFont';\n    color:white ;\n    background-color: rgb(0, 0, 0);\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    z-index: 1;\n    overflow-x: hidden;\n}\n\nheader {\n    height: 8vw;\n    width: 100%;\n    display: flex;\n    position: fixed;\n    z-index: 2;\n    background-color: rgba(20, 20, 20, 0.356);\n}\n\nnav {\n    display: flex;\n    min-width: 100%;\n    min-height: 100%;\n    justify-content: center;\n    align-items: center;\n}\n\n.logo {\n    font-size: 5vw;\n    position: absolute;\n    left: 0;\n    top: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(185, 33, 63, 0.829);\n    width: 3.5em;\n    height: 1.6em;\n    transition: all 0.2s;\n}\n\n.logo:hover {\n    background-color: rgba(185, 33, 63, 0.521);\n}\n\nnav#nav > ul {\n    display: flex;\n}\n\n.navLi {\n    text-align: center;\n    font-size: 5vw;\n    transform: scale(1);\n    transition: all 0.2s;\n    margin-right: 60px;\n    z-index: 1;\n}\n\n.navLi:hover {\n    transform: scale(1.1);\n    border-bottom: solid 2px white;\n    z-index: 1;\n}\n\n.backDiv {\n    display: block;\n    min-width: 100%;\n    min-height: 100%;\n    z-index: -1;\n    background-image: url("+b+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n}\n\nvideo {\n    display: block;\n    min-width: 100%;\n    max-height: 100vh;\n    object-fit: cover;\n    pointer-events: none;\n    z-index: -1;\n}\n\n\n#content {\n    display: flex;\n    flex-direction: column;\n    min-width: 100%;\n    min-height: 100%;\n    z-index: 1;\n}\n\n\n\n.speech {\n    display: flex;\n    /*\n    background-image: url('./img/nathan-dumlao-6VhPY27jdps-unsplash.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: fixed;\n    background-position: center;\n    */\n    /*background-color: darkorange;*/\n    height: 100px;\n    width: 100%;\n    min-height: 100vh;\n    align-items: center;\n    justify-content: center;\n}\n\n.speech::before {\n    content: '';\n    background-image: url("+g+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: fixed;\n    background-position: center;\n    height: 100px;\n    width: 100%;\n    min-height: 100vh;\n      z-index: -1;\n    opacity: 0.70;\n}\n\n.speechP {\n    position: absolute;\n    width: 50%;\n    font-size: 2.5em;\n}\n\n.h1H {\n    display: block;\n    position: absolute;\n    color: white;\n    z-index: 1;\n    width: 100vw;\n    top: 50%;\n    font-size: 4em;\n    text-align: center;\n    z-index: 2;\n}\n\n.arrowDiv {\n    position: absolute;\n    z-index: 2;\n    height: 55px;\n    width: 100px;\n    top: 80%;\n    left: 47.33%;\n}\n\n.arrow {\n    position: absolute;\n    background-color: white;\n    clip-path: polygon(15% 60%, 20% 60%, 50% 95%, 50% 95%, 80% 60%, 85% 60%, 50% 100%);\n    z-index: 2;\n    height: 100px;\n    width: 100px;\n    transform: scale(1);\n    transition: all 0.2s;\n    bottom: 25%;\n}\n\n.arrowDiv:hover .arrow{\n    transform: scale(1.1);\n}\n\n.emailFormDiv {\n    width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    background-image: url("+v+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    background-color: darkturquoise;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 7em;\n}\n\n.h2EF {\n    display: block;\n    font-size: 3.5em;\n}\n\n.lineEF {\n    border: 1px solid rgba(185, 33, 63, 0.829);\n    width: 3.5em;\n    margin: 0;\n}\n\n.emailForm {\n    width: 100%;\n    height: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.pEF {\n    font-size: 2.5em;\n}\n\n.email {\n    width: 50%;\n    font-size: 1.5em;\n    height: 2.5em;\n}\n\n.submitEF {\n    display: block;\n    background-color: rgba(185, 33, 63, 0.829);\n    border: 2px solid black;\n    font-size: 2.5em;\n    width: 5.5em;\n    height: 1.5em;\n    color: white;\n    margin-top: 40px;\n    transition: all 0.4s;\n}\n\n.submitEF:hover {\n    background-color: rgba(112, 19, 38, 0.829);\n}\n\nfooter {\n    display: block;\n    height: 100px;\n    width: 100%;\n    background-color: rgba(185, 33, 63, 0.829);\n    overflow: hidden;\n}\n\nul {\n    list-style: none;\n}\n\n.ulFoot {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 0;\n    padding-left: 10px;\n}\n\n.attribution {\n    width: 50%;\n    height: 25%;\n    color:black;\n    text-decoration: none;\n    text-align: center;\n    font-size: 1.05em;\n}\n\n.attributionLi {\n    flex: 1;\n}\n\n.attribution:hover {\n    color: blueviolet;\n}\n\n/* --------------------- Contact Page -------------------------------------- */\n\n.hero {\n    width: 100%;\n    height: 400px;\n    background-color: brown;\n    background-image: url("+x+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.h1Bg {\n    width: 300px;\n    height: 100px;\n    background-color: rgb(185, 33, 63);\n    display: flex;\n}\n\n.h1C {\n    color: white;\n    text-align: center;\n    width: 200px;\n    height: 75px;\n    font-size: 3em;\n    flex: 1;\n} \n\n.info {\n    width: 100%;\n    height: 450px;\n    background-color: rgb(255,255,255);\n    color: black;\n    font-size: 2em;\n}\n\n",""]);const w=h},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(e[p].references++,e[p].updater(h)):e.push({identifier:u,updater:r(h,o),references:1}),a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},834:(n,e,t)=>{n.exports=t.p+"cfcac327ca5a1e8d48de.otf"},830:(n,e,t)=>{n.exports=t.p+"3fd415fd99ce5957fe77.ttf"},749:(n,e,t)=>{n.exports=t.p+"e350850b8ddef167a270.mp4"},655:(n,e,t)=>{n.exports=t.p+"c839794e7131ddc901f4.png"},197:(n,e,t)=>{n.exports=t.p+"39d55046a27b6416b372.jpg"},808:(n,e,t)=>{n.exports=t.p+"0fe11d6b08fad59b4bbb.png"},864:(n,e,t)=>{n.exports=t.p+"f3bac3afbdf28afc3126.jpg"},263:(n,e,t)=>{n.exports=t.p+"796d9a71f473990c5d6d.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),h=t(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),e()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var f=t(808);const b=function(){const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("hero"),n.appendChild(e);const t=document.createElement("div");t.classList.add("h1Bg"),e.appendChild(t);const o=document.createElement("h1");o.classList.add("h1C"),t.appendChild(o),o.textContent="CONTACT US";const r=document.createElement("div");r.classList.add("info"),n.appendChild(r),r.innerHTML=["<strong>By Phone:</strong>","1-234-567-8910","Monday through Friday","<strong>By Text/SMS:</strong>","9-876 543 210","Monday through Friday"].map((n=>`<p style='text-align:center'>${n}</p>`)).join("")};var g=t(749);(function n(){const e=document.createElement("link");e.rel="icon",e.href=f,document.head.appendChild(e),document.querySelector("header");const t=document.createElement("div");t.classList.add("backDiv");const o=document.createElement("video");o.preload="auto",o.loop="true",o.autoplay="true",o.muted="true",o.width=window.innerWidth,t.appendChild(o);const r=document.createElement("source");r.src=g,r.type="video/mp4",o.appendChild(r),document.addEventListener("load",(()=>{o.play()}));const i=document.querySelector("#content");i.appendChild(t);const a=document.createElement("h1");a.classList.add("h1H"),a.textContent="WE HAVE YOU COVERED!",t.appendChild(a);const c=document.createElement("div");c.classList.add("arrowDiv"),t.appendChild(c);const s=document.createElement("arrow");s.classList.add("arrow"),c.appendChild(s),c.addEventListener("click",(()=>{window.scrollTo({top:window.innerHeight,left:0,behavior:"smooth"})}));const d=document.createElement("div");d.classList.add("speech"),i.appendChild(d);const l=document.createElement("p");l.classList.add("speechP"),l.textContent="Whether it’s a celebration, a Sunday breakfast session, coffee with work mates or a break from shopping, we have you covered. Our baristas serve up our excellent blend of coffee and our waiters deliver your familiar favourites and our newest creations directly from the kitchen.",d.appendChild(l);const u=document.createElement("div");u.classList.add("emailFormDiv"),i.appendChild(u);const p=document.createElement("h2");p.classList.add("h2EF"),p.textContent="Keep Updated",u.appendChild(p);const h=document.createElement("hr");h.classList.add("lineEF"),u.appendChild(h);const m=document.createElement("form");m.classList.add("emailForm"),u.appendChild(m);const b=document.createElement("p");b.classList.add("pEF"),b.textContent="To be the first to hear of our exclusive news, offers and updates, please subscribe below.",m.appendChild(b);const v=document.createElement("input");v.type="email",v.classList.add("email"),v.placeholder="Enter your email address",m.appendChild(v);const x=document.createElement("button");x.type="submit",x.disabled=!0,x.textContent="Subscribe",x.classList.add("submitEF"),m.appendChild(x);const w=document.createElement("footer");document.body.appendChild(w);const y=document.createElement("ul");y.classList.add("ulFoot"),w.appendChild(y),y.innerHTML=[{link:"https://www.flaticon.com/authors/photo3idea-studio",author:"by: photo3idea_studio - taken from: flaticon.com",assett:"Bean tab icon"},{link:"https://coverr.co/videos/holding-coffee-beans-xtT83so1Qh",author:"by: unknown author - taken from: coverr.co",assett:"Holding coffee beans video"},{link:"https://unsplash.com/photos/6VhPY27jdps",author:"by: Nathan Dumlao - taken from: unsplash.com",assett:"Three persons holding beverage image"},{link:"https://unsplash.com/photos/BZw2fWK-9lo",author:"by: Jessica Lewis - taken from: unsplash.com",assett:"Filled while teacup image"},{link:"https://unsplash.com/photos/5G9uIkAXLSc",author:"by: Jonathan Borba - taken from: unsplash.com",assett:"empty indoor image"}].map(((n,e)=>`<li class='attributionLi attribution${e}'><a class='attribution' target='_blank' href='${n.link}'>${n.assett} ${n.author}</a></li>`)).join(""),document.querySelector("#home").addEventListener("click",(function(){document.querySelector("#content").innerHTML="",document.body.removeChild(document.querySelector("footer")),n()}))})(),window.onunload=function(){window.scrollTo(0,0)},document.querySelector("#contact").addEventListener("click",(function(){content.innerHTML="",b()}))})()})();