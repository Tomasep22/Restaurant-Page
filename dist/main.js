(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>v});var o=t(645),i=t.n(o),a=t(667),r=t.n(a),s=new URL(t(184),t.b),c=new URL(t(830),t.b),d=new URL(t(334),t.b),l=new URL(t(447),t.b),p=new URL(t(197),t.b),h=new URL(t(879),t.b),m=i()((function(n){return n[1]})),u=r()(s),f=r()(c),g=r()(d),b=r()(l),x=r()(p),w=r()(h);m.push([n.id,"@font-face {\n    font-family: 'MyFont';\n    src: url("+u+") format('truetype'),\n      url("+f+") format('truetype');\n  }\n\nhtml {\n    font-family: 'MyFont';\n    color:white ;\n    background-color: rgb(0, 0, 0);\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    z-index: 1;\n    overflow-x: hidden;\n}\n\nheader {\n    height: 8vw;\n    width: 100%;\n    display: flex;\n    position: fixed;\n    z-index: 2;\n    background-color: rgba(20, 20, 20, 0.356);\n}\n\nnav {\n    display: flex;\n    min-width: 100%;\n    min-height: 100%;\n    justify-content: center;\n    align-items: center;\n}\n\n.logo {\n    font-size: 3em;\n    position: absolute;\n    left: 0;\n    top: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(185, 33, 63, 0.829);\n    transition: all 0.2s;\n    height: 8vw;\n    padding-left: 5px;\n    padding-right: 5px;\n}\n\n.logo:hover {\n    background-color: rgba(185, 33, 63, 0.521);\n}\n\nnav#nav > ul {\n    display: flex;\n}\n\n.navLi {\n    text-align: center;\n    font-size: 5vw;\n    transform: scale(1);\n    transition: all 0.2s;\n    margin-right: 60px;\n    z-index: 1;\n    cursor: pointer;\n}\n\n.navLi:hover {\n    transform: scale(1.1);\n    border-bottom: solid 2px white;\n    z-index: 1;\n}\n\n.backDiv {\n    display: block;\n    min-width: 100%;\n    min-height: 100%;\n    z-index: -1;\n    background-image: url("+g+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n}\n\nvideo {\n    display: block;\n    min-width: 100%;\n    max-height: 100vh;\n    object-fit: cover;\n    pointer-events: none;\n    z-index: -1;\n}\n\n\n#content {\n    display: flex;\n    flex-direction: column;\n    min-width: 100%;\n    min-height: 100%;\n    z-index: 1;\n}\n\n.speech {\n    display: flex;\n    height: 100px;\n    width: 100%;\n    min-height: 100vh;\n    align-items: center;\n    justify-content: center;\n}\n\n.speech::before {\n    content: '';\n    background-image: url("+b+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: fixed;\n    background-position: center;\n    height: 100px;\n    width: 100%;\n    min-height: 100vh;\n      z-index: -1;\n    opacity: 0.70;\n}\n\n.speechP {\n    position: absolute;\n    width: 50%;\n    font-size: 2em;\n    line-height: 1.6;\n}\n\n.h1H {\n    display: block;\n    position: absolute;\n    color: white;\n    z-index: 1;\n    width: 100vw;\n    top: 50%;\n    font-size: 3.5em;\n    text-align: center;\n    z-index: 2;\n}\n\n.arrowDiv {\n    position: absolute;\n    z-index: 2;\n    height: 55px;\n    width: 100px;\n    top: 80%;\n    left: 47.33%;\n    cursor: pointer;\n}\n\n.arrow {\n    position: absolute;\n    background-color: white;\n    clip-path: polygon(15% 60%, 20% 60%, 50% 95%, 50% 95%, 80% 60%, 85% 60%, 50% 100%);\n    z-index: 2;\n    height: 100px;\n    width: 100px;\n    transform: scale(1);\n    transition: all 0.2s;\n    bottom: 25%;\n}\n\n.arrowDiv:hover .arrow {\n    transform: scale(1.1);\n}\n\n.emailFormDiv {\n    width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    background-image: url("+x+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    background-color: darkturquoise;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 7em;\n}\n\n.h2EF {\n    display: block;\n    font-size: 3em;\n}\n\n.lineEF {\n    border: 1px solid rgba(185, 33, 63, 0.829);\n    width: 4em;\n    margin: 0;\n}\n\n.emailForm {\n    width: 100%;\n    height: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.pEF {\n    font-size: 2em;\n}\n\n.email {\n    width: 50%;\n    font-size: 1em;\n    height: 2.5em;\n}\n\n.submitEF {\n    display: block;\n    background-color: rgba(185, 33, 63, 0.829);\n    border: 2px solid black;\n    font-size: 2em;\n    width: 5.5em;\n    height: 1.5em;\n    color: white;\n    margin-top: 40px;\n    transition: all 0.4s;\n    cursor: pointer;\n}\n\n.submitEF:hover {\n    background-color: rgba(112, 19, 38, 0.829);\n}\n\nfooter {\n    display: block;\n    height: fit-content ;\n    width: 100%;\n    background-color: rgba(185, 33, 63, 0.829);\n    overflow: hidden;\n}\n\nul {\n    list-style: none;\n}\n\n.ulFoot {\n    width: fit-content;\n    height: fit-content;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 0;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n.attribution {\n    color:black;\n    text-decoration: none;\n    text-align: center;\n    font-size: 0.8em;\n    flex: 1;\n    cursor: pointer;\n}\n\n.attributionLi {\n    flex: 1;\n    display: flex;\n    flex-wrap: wrap;\n\n}\n\n.attribution:hover {\n    color: blueviolet;\n}\n\n/* --------------------- Contact Page -------------------------------------- */\n\n.hero {\n    width: 100%;\n    height: 400px;\n    background-color: brown;\n    background-image: url("+w+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.h1Bg {\n    width: 300px;\n    height: 100px;\n    background-color: rgb(185, 33, 63);\n    display: flex;\n}\n\n.h1C {\n    color: white;\n    text-align: center;\n    width: 200px;\n    height: 75px;\n    font-size: 2.5em;\n    flex: 1;\n} \n\n.info {\n    width: 100%;\n    height: fit-content;\n    background-color: rgb(255,255,255);\n    color: black;\n    font-size: 2.5em;\n    font-family: 'Times New Roman', Times, serif;\n}\n\n/* ------------------------------ Menu Tab -------------------------- */\n\n.mainDiv {\n    width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    background-color: rgb(255,255,255);\n    display: flex;\n    flex-direction: column;\n    padding-top: 90px;\n}\n\n.intro {\n    width: 100%;\n    height: fit-content;\n    color: black;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    margin-left: 20px;\n}\n\n.h1M {\n    font-size: 3.5em;\n    border-bottom: 2px solid black;\n    width: fit-content;\n    margin-bottom: 5px;\n}\n\n.introP {\n    font-size: 1.5em;\n    margin: 0;\n}\n\n.mContainer {\n    display: flex;\n    color: black;\n    margin-left: 20px;\n    margin-bottom: 20px;\n    flex-wrap: wrap;\n}\n\n.mItem {\n    max-height: 500px;\n    width: 250px;\n    background-color: #f8f8f8;\n    display: flex;\n    flex-direction: column;\n    margin-right: 40px;\n    margin-top: 30px;\n}\n\n.mImg {\n    min-height: 250px;\n    width: 250px;\n    flex: 1;\n}\n\n.nameNdesc {\n    font-size: 1.5em;\n    padding: 10px;\n    padding-top: 0;\n    flex: 1;\n}\n\n",""]);const v=m},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},r=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var h=t(p),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==h?(e[h].references++,e[h].updater(m)):e.push({identifier:p,updater:i(m,o),references:1}),r.push(p)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=o(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var s=t(a[r]);e[s].references--}for(var c=o(n,i),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o=t.css,i=t.media,a=t.sourceMap;i?n.setAttribute("media",i):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},830:(n,e,t)=>{n.exports=t.p+"3fd415fd99ce5957fe77.ttf"},184:(n,e,t)=>{n.exports=t.p+"72d278ce43eee37c61e0.ttf"},749:(n,e,t)=>{n.exports=t.p+"e350850b8ddef167a270.mp4"},447:(n,e,t)=>{n.exports=t.p+"796d9a71f473990c5d6d.jpg"},199:(n,e,t)=>{n.exports=t.p+"b9cd3e3c52a281a25f78.jpg"},197:(n,e,t)=>{n.exports=t.p+"39d55046a27b6416b372.jpg"},808:(n,e,t)=>{n.exports=t.p+"0fe11d6b08fad59b4bbb.png"},879:(n,e,t)=>{n.exports=t.p+"f3bac3afbdf28afc3126.jpg"},30:(n,e,t)=>{n.exports=t.p+"4c1a62a0c2afbe5a1f23.jpg"},252:(n,e,t)=>{n.exports=t.p+"54b2484220e1aa3f68e3.jpg"},842:(n,e,t)=>{n.exports=t.p+"6bb0a7e78fd41913eb52.jpg"},415:(n,e,t)=>{n.exports=t.p+"1cfd034706973e080178.jpg"},334:(n,e,t)=>{n.exports=t.p+"c839794e7131ddc901f4.png"}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(379),e=t.n(n),o=t(795),i=t.n(o),a=t(569),r=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),h=t.n(p),m=t(426),u={};u.styleTagTransform=h(),u.setAttributes=c(),u.insert=r().bind(null,"head"),u.domAPI=i(),u.insertStyleElement=l(),e()(m.Z,u),m.Z&&m.Z.locals&&m.Z.locals;var f=t(808);const g=function(){const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("hero"),n.appendChild(e);const t=document.createElement("div");t.classList.add("h1Bg"),e.appendChild(t);const o=document.createElement("h1");o.classList.add("h1C"),t.appendChild(o),o.textContent="CONTACT US";const i=document.createElement("div");i.classList.add("info"),n.appendChild(i),i.innerHTML=["<strong>By Phone:</strong>","1-234-567-8910","Monday through Friday","<strong>By Text/SMS:</strong>","9-876 543 210","Monday through Friday"].map((n=>`<p style='text-align:center'>${n}</p>`)).join("")};var b=t(749),x=t(30),w=t(415),v=t(199),y=t(252),k=t(842);const E=function(){const n=document.querySelector("#content");return{display:function(){const e=document.createElement("div");e.classList.add("mainDiv"),n.appendChild(e);const t=document.createElement("div");t.classList.add("intro"),e.appendChild(t);const o=document.createElement("h1");o.classList.add("h1M"),o.textContent="Kaffee Selection",t.appendChild(o);const i=document.createElement("p");i.classList.add("introP"),i.textContent="We make freshly brewed Black coffee at its best. Which is your favorite?",t.appendChild(i);const a=document.createElement("div");a.classList.add("mContainer");const r=[{image:x,name:"Espresso",description:"Classic italian espresso"},{image:w,name:"Ristretto",description:"A short or restricted espresso with a smooth finish"},{image:v,name:"Capuccino",description:"Single shot of espresso topped with steamed milk and velvety foam"},{image:k,name:"Kaffee Latte",description:"Single shot of espresso topped with steamed milk"},{image:y,name:"Hot Chocolate",description:"Chocolate powder mixed with steamed milk and foam"}];a.innerHTML=r.map(((n,e)=>`\n                <div class="mItem mItem${e}">\n                <img class="mImg" src="${n.image}" alt="${n.name} image">\n                <span class="nameNdesc">\n                <h2>${n.name}</h2>\n                <p>${n.description}</p>\n                </span>\n                </div>`)).join(""),e.appendChild(a)}}}();!function(){const n=document.createElement("link");function e(){const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("backDiv");const t=document.createElement("video");t.preload="auto",t.loop="true",t.autoplay="true",t.muted="true",t.width=window.innerWidth,e.appendChild(t);const o=document.createElement("source");o.src=b,o.type="video/mp4",t.appendChild(o),document.addEventListener("load",(()=>{t.play()})),n.appendChild(e);const i=document.createElement("h1");i.classList.add("h1H"),i.textContent="WE HAVE YOU COVERED!",e.appendChild(i);const a=document.createElement("div");a.classList.add("arrowDiv"),e.appendChild(a);const r=document.createElement("arrow");r.classList.add("arrow"),a.appendChild(r),a.addEventListener("click",(()=>{window.scrollTo({top:window.innerHeight,left:0,behavior:"smooth"})}));const s=document.createElement("div");s.classList.add("speech"),n.appendChild(s);const c=document.createElement("p");c.classList.add("speechP"),c.textContent="Whether it’s a celebration, a Sunday breakfast session, coffee with work mates or a break from shopping, we have you covered. Our baristas serve up our excellent blend of coffee and our waiters deliver your familiar favourites and our newest creations directly from the kitchen.",s.appendChild(c);const d=document.createElement("div");d.classList.add("emailFormDiv"),n.appendChild(d);const l=document.createElement("h2");l.classList.add("h2EF"),l.textContent="Keep Updated",d.appendChild(l);const p=document.createElement("hr");p.classList.add("lineEF"),d.appendChild(p);const h=document.createElement("form");h.classList.add("emailForm"),d.appendChild(h);const m=document.createElement("p");m.classList.add("pEF"),m.textContent="To be the first to hear of our exclusive news, offers and updates, please subscribe below.",h.appendChild(m);const u=document.createElement("input");u.type="email",u.classList.add("email"),u.placeholder="Enter your email address",h.appendChild(u);const f=document.createElement("button");f.type="submit",f.disabled=!0,f.textContent="Subscribe",f.classList.add("submitEF"),h.appendChild(f)}n.rel="icon",n.href=f,document.head.appendChild(n),e();const t=document.createElement("footer");document.body.appendChild(t);const o=document.createElement("ul");o.classList.add("ulFoot"),t.appendChild(o),o.innerHTML=[{link:"https://www.flaticon.com/authors/photo3idea-studio",author:"by: photo3idea_studio - taken from: flaticon.com",assett:"Bean tab icon"},{link:"https://coverr.co/videos/holding-coffee-beans-xtT83so1Qh",author:"by: unknown author - taken from: coverr.co",assett:"Holding coffee beans video"},{link:"https://unsplash.com/photos/6VhPY27jdps",author:"by: Nathan Dumlao - taken from: unsplash.com",assett:"Three persons holding beverage image"},{link:"https://unsplash.com/photos/BZw2fWK-9lo",author:"by: Jessica Lewis - taken from: unsplash.com",assett:"Filled while teacup image"},{link:"https://unsplash.com/photos/5G9uIkAXLSc",author:"by: Jonathan Borba - taken from: unsplash.com",assett:"Empty indoor image"},{link:"https://unsplash.com/photos/xO9NotFY4mU",author:"by: Taisiia Shestopal - taken from: unsplash.com",assett:"Latte image"},{link:"https://unsplash.com/photos/ZgaW3FOXRPQ",author:"by: Sincerely Media - taken from: unsplash.com",assett:"Hot chocolate image"},{link:"https://www.pexels.com/es-es/foto/comida-amanecer-cafeina-cafe-7471143/",author:"by: Jean-Paul Wright - taken from: pexels.com",assett:"Espresso image"},{link:"https://www.pexels.com/es-es/foto/vaso-de-delicioso-capuchino-con-espuma-servido-en-platillo-4913337/",author:"by: Maria Orlova - taken from: pexels.com",assett:"Capuccino image"},{link:"https://unsplash.com/photos/EsAoDa4ddqU",author:"by: nitin pariyar - taken from: unsplash.com",assett:"Ristretto image"},{link:"https://www.dafont.com/es/coffee-shop.font",author:"by: Doug Sheets - taken from: dafont.com",assett:"Custom Font"}].map(((n,e)=>`<li class='attributionLi attribution${e}'><a class='attribution' target='_blank' href='${n.link}'>${n.assett} ${n.author}</a></li>`)).join(""),document.querySelector("#home").addEventListener("click",(function(){document.querySelector("#content").innerHTML="",window.scrollTo(0,0),e()})),document.querySelector("#contact").addEventListener("click",(function(){content.innerHTML="",window.scrollTo(0,0),g()})),document.querySelector("#menu").addEventListener("click",(function(){content.innerHTML="",window.scrollTo(0,0),E.display()})),window.onunload=function(){window.scrollTo(0,0)}}()})()})();