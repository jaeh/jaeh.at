(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function b(a,b){return f(a)||e(a,b)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function e(a,b){var c=[];var d=!0;var e=!1;var f=undefined;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]!=null&&h["return"]()}finally{if(e)throw f}}return c}function f(a){if(Array.isArray(a))return a}function g(a){for(var b=1;b<arguments.length;b++){var c=arguments[b]==null?{}:arguments[b];var d=Object.keys(c);typeof Object.getOwnPropertySymbols==="function"&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){j(a,b,c[b])})}return a}function j(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function k(a,b){if(a==null)return{};var c=l(a,b);var d,e;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(e=0;e<f.length;e++)d=f[e],!(b.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(a,d)&&(c[d]=a[d])}return c}function l(a,b){if(a==null)return{};var c={};var d=Object.keys(a);var e,f;for(f=0;f<d.length;f++)e=d[f],!(b.indexOf(e)>=0)&&(c[e]=a[e]);return c}function m(a){return m=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function m(a){return typeof a}:function m(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},m(a)}var n=require("hyperapp"),o=n.app,q=n.h;var h=function(a){return function(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var d=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];var e=function is(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===m(a)})};return!d&&(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),q(a,b,d)}};var r=h("a");var a=h("text");var s=function Link(a,b){var c=a.to,d=a.href,e=a.text,f=a.nofollow,g=a.noreferrer,h=k(a,["to","href","text","nofollow","noreferrer"]);return function(a,i){return c=c||d||"",h.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?h.onclick=function(a){return i.go({e:a,to:c})}:(h.target="_blank",h.rel="noopener",f&&(h.rel+=" nofollow"),g&&(h.rel+=" noreferrer")),r(h,[e,b])}};var t=h("div");var u=h("h2");var v=h("h3");var w=h("li");var x=h("p");var p=h("span");var y=h("ul");var z=h("img");var A=function Header(a){return function(){return t({"class":"header main"},[t({"class":"header__image"},[z({alt:"","class":"face",role:"presentation",src:"/img/jascha.ehrenreich.jpg"}),z({alt:"","class":"body",role:"presentation",src:"/img/jascha.ehrenreich.body.jpg"})]),t({"class":"text"},[u([s({to:"/"},"jascha ehrenreich")]),a.job&&v(a.job),a.description&&t({"class":"description"},a.description.map(function(b){return x(b)}))])])}};var B=function LanguageSwitch(a){return s(g({},a,{"class":"LanguageSwitch"}))};var C={View:function View(){return t({"class":"footer main"},[p([r({"class":"anarchy",href:"http://principiadiscordia.com",rel:"nofollow noopener",target:"allhaileris",title:"Lick here, you might be one of the lucky 23."},"\u24B6"),"1982 - ",new Date().getFullYear()," - all rites reversed."]),p([" made with a few bits of ",s({to:"https://github.com/magic/core"},"magic")])])}};var D={View:function View(a){var b=a.name,c=b===void 0?"menu":b,d=a.between,e=d!==void 0&&d;return function(a){return a[c]&&a[c].length?i({"class":"Menu"},[y(a[c].map(function(b,d){var f={};var g=a.hash?"#".concat(a.hash):"";var h=a.url+g;return b.to===h&&(f["class"]="active"),[w(f,s(b)),e&&d<a[c].length-1?w(e):""]}))]):void 0}}};var E=h("i");var i=h("nav");var F=function Img(a){return function(){if(typeof a==="string"&&(a={src:a}),!!a.src)return!a.alt&&(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),z(a)}};var G=h("header");var H=function PageHead(a){return(a.logo||a.menu||a.tagline)&&G({"class":"main"},[(a.logo||a.logotext)&&s({to:"/","class":"logo-wrapper"},[a.logo&&F({"class":"logo",src:a.logo}),a.logotext&&p({"class":"logo-text"},a.logotext)]),D.View])};var I={"/404/":function _(){return[A.View,t([v("404 - page not found."),x("Unfortunately, there is nothing here but nothingness."),x([s({to:"/"},"Click here")," to get back to safety"])])]},"/de/":function de(){return[A({job:"technomant",description:["ich jongliere mit code seit sechszehn,","mit keulen, b\xE4llen und ringen seit sechsundzwanzig","und das leben jongliert mit mir seit ungef\xE4hr sechsunddreissig jahren.","ich geniesse das alles."]}),B({text:"english",to:"/"}),t({"class":"section communications"},[u("kommunikation"),y([w([p("email: "),s({href:"mailto:jascha@jaeh.at"},["jascha",p({"class":"at"},"@"),"jaeh.at"])]),w([p("github: "),s({href:"https://github.com/jaeh",rel:"nofollow noopener",target:"github-jaeh"},[p({"class":"at"},"@"),"jaeh"])]),w([p("keybase: "),s({href:"https://keybase.io/jascha",rel:"nofollow noopener",target:"keybase-jascha"},[p({"class":"at"},"@"),"jascha"])]),w([p("twitter: "),s({href:"https://twitter.com/weirdpress",rel:"nofollow noopener",target:"twitter-weirdpress"},[p({"class":"at"},"@"),"weirdpress"])])])]),t({"class":"section congregations"},[u("kongregation"),y([w([v([s({href:"http://wizardsatwork.at",rel:"noopener",target:"wizardsatwork"},["wizards",p({"class":"add"},"@"),"work"])]),x("wir sind ein stamm von erfindern, programmierern, philosophen, aktivisten, hackern, k\xFCnstlern, clowns und wissenschafltern,"),x("wir sind wizards & witches @ work, unsere magie transformiert paradigmen.")]),w([v([s({href:"https://metalab.at",rel:"noopener",target:"metalab"},"metalab")]),x("das metalab ist ein hack/make space in wien, \xF6sterreich.")]),w([v([s({href:"https://bwb.is",rel:"noopener",target:"bwb"},"bitcoiners without borders")]),x("wir arbeiten seit 2012 an und in dezentralisierten systemen."),x(["zb. verwaltung der ",s({href:"https://bitcoinfoundation.org",rel:"nofollow noindex noopener",target:"_blank"},"bitcoinfoundation")," webproperties von 2012-2014."])])])]),t({"class":"section occupations"},[u("projekte"),y([w([v([s({href:"http://magicshifter.net",rel:"noopener",target:"magicshifter"},"magicshifter")]),x("open source hardware gadget f\xFCr licht-, spiel-, sound- und persistente wahrnehmungs anwendungen.")]),w([v([s({href:"http://screeninvader.com/",rel:"noopener",target:"screeninvader"},"screeninvader")]),x("kollaboratives internetzsurfen, videoschaun oder bilder browsen.")]),w([v([s({href:"http://github.com/magic/core",rel:"nofollow noindex noopener",target:"magic"},"magic")]),x("magische generation von statischen und serverlosen webseiten.")])])])]},"/":function _(){return[A({job:"technomancer",description:["i juggle with code since sixteen,","with cones, balls and rings since twentysix,","and life juggles with me since around thirtysix years.","i enjoy all of it."]}),B({to:"/de/",text:"deutsch"}),t({"class":"section communications"},[u("communications"),y([w([p("email: "),s({href:"mailto:jascha@jaeh.at"},["jascha",p({"class":"at"},"@"),"jaeh.at"])]),w([p("github: "),s({href:"https://github.com/jaeh",rel:"nofollow noopener",target:"github-jaeh"},[p({"class":"at"},"@"),"jaeh"])]),w([p("keybase: "),s({href:"https://keybase.io/jascha",rel:"nofollow noopener",target:"keybase-jascha"},[p({"class":"at"},"@"),"jascha"])]),w([p("twitter: "),s({href:"https://twitter.com/weirdpress",rel:"nofollow noopener",target:"twitter-weirdpress"},[p({"class":"at"},"@"),"weirdpress"])])])]),t({"class":"section congregations"},[u("congregations"),y([w([v([s({href:"http://wizardsatwork.at",rel:"noopener",target:"wizardsatwork"},["wizards",p({"class":"add"},"@"),"work"])]),x("we are a tribe of makers, programmers, engineers, philosophers, activists, hackers, artists, clowns, and scientists."),x("we are wizards & witches @ work, magically shifting paradigms.")]),w([v([s({href:"https://metalab.at",rel:"noopener",target:"metalab"},"metalab")]),x("the metalab is a hack/make space in vienna, austria.")]),w([v([s({href:"https://bwb.is",rel:"noopener",target:"bwb"},"bitcoiners without borders")]),x("working in and on decentralized systems since 2012."),x(["managed the ",s({href:"https://bitcoinfoundation.org",rel:"nofollow noindex noopener",target:"_blank"},"bitcoinfoundation")," webproperties from 2012-2014."])])])]),t({"class":"section occupations"},[u("occupations"),y([w([v([s({href:"http://magicshifter.net",rel:"noopener",target:"magicshifter"},"magicshifter")]),x("open source hardware gadget for lighting, gaming, sound and persistence of vision applications.")]),w([v([s({href:"http://screeninvader.com/",rel:"noopener",target:"screeninvader"},"screeninvader")]),x("surf the web, watch videos or browse images the way you usually do, then show it on any screen and/or projector.")]),w([v([s({href:"http://github.com/magic/core",rel:"nofollow noindex noopener",target:"magic"},"magic")]),x("magic static/serverless page generator.")])])])]}};var J={"url":"/","title":"jaeh - jascha ehrenreich","description":["i juggle with code since sixteen,","with cones, balls and rings since twentysix,","and life juggles with me since around thirtysix years.","i enjoy all of it."],"pages":{"/404/":{"title":"404 - not found"}}};J.url=window.location.pathname;var K={"go":function go(a){return function(c){if(!window.history)return!0;var d=a.to;var f=a.e?a.e:a;f.preventDefault();var e=c.url;var g=e.split("#"),h=b(g,2),i=h[0],j=h[1],k=j===void 0?"":j;if(d){e=d.replace(window.location.origin,"");var l=e.split("#"),m=b(l,2),n=m[0],o=m[1],p=o===void 0?"":o;i=n,k=p;var q=c.hash?"#".concat(c.hash):"";var r=c.url+q;e!==r&&(window.history&&window.history.pushState({uri:i},"",e),!k&&window.scrollTo(0,0))}else e=f.state?f.state.uri:"/";return k&&window.setTimeout(function(){var a=document.getElementById(k);a&&window.scrollTo(0,a.offsetTop)},10),{url:i,hash:k,prev:c.url}}}};var L=function view(a,b){var c=I[a.url]?a.url:"/404/";var d=I[c];if(a.pages){var e=a.pages[c];for(var f in e)a[f]=e[f]}if(b.pages){var g=b.pages[c];for(var h in g)b[h]=g[h]}return t({"class":"wrapper",oncreate:function oncreate(){typeof window!=="undefined"&&b.go&&window.addEventListener("popstate",b.go)}},[H,d?t({"class":"page"},d(a,b)):t({"class":"page"},"404 - not found"),C.View])};var M=document;var d=M.getElementById("magic");!d&&(d=M.createElement("div"),d.id="magic",M.body.appendChild(d)),o(J,K,L,d);
},{"hyperapp":2}],2:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.hyperapp={})}(this,function(e){"use strict";e.h=function(e,n){for(var t=[],r=[],o=arguments.length;2<o--;)t.push(arguments[o]);for(;t.length;){var l=t.pop();if(l&&l.pop)for(o=l.length;o--;)t.push(l[o]);else null!=l&&!0!==l&&!1!==l&&r.push(l)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}},e.app=function(e,n,t,r){var o,l=[].map,u=r&&r.children[0]||null,i=u&&function n(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:l.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e)})}}(u),f=[],m=!0,a=v(e),c=function e(r,o,l){for(var n in l)"function"==typeof l[n]?function(e,t){l[e]=function(e){var n=t(e);return"function"==typeof n&&(n=n(h(r,a),l)),n&&n!==(o=h(r,a))&&!n.then&&d(a=p(r,v(o,n),a)),n}}(n,l[n]):e(r.concat(n),o[n]=v(o[n]),l[n]=v(l[n]));return l}([],a,v(n));return d(),c;function g(e){return"function"==typeof e?g(e(a,c)):null!=e?e:""}function s(){o=!o;var e=g(t);for(r&&!o&&(u=function e(n,t,r,o,l){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=k(o,l);n.insertBefore(u,t),null!=r&&T(n,t,r),t=u}else if(null==r.nodeName)t.nodeValue=o;else{x(t,r.attributes,o.attributes,l=l||"svg"===o.nodeName);for(var i={},f={},a=[],c=r.children,s=o.children,d=0;d<c.length;d++){a[d]=t.childNodes[d];var v=N(c[d]);null!=v&&(i[v]=[a[d],c[d]])}for(var d=0,p=0;p<s.length;){var v=N(c[d]),h=N(s[p]=g(s[p]));if(f[v])d++;else if(null==h||h!==N(c[d+1]))if(null==h||m)null==v&&(e(t,a[d],c[d],s[p],l),p++),d++;else{var y=i[h]||[];v===h?(e(t,y[0],y[1],s[p],l),d++):y[0]?e(t,t.insertBefore(y[0],a[d]),y[1],s[p],l):e(t,a[d],null,s[p],l),f[h]=s[p],p++}else null==v&&T(t,a[d],c[d]),d++}for(;d<c.length;)null==N(c[d])&&T(t,a[d],c[d]),d++;for(var d in i)f[d]||T(t,i[d][0],i[d][1])}return t}(r,u,i,i=e)),m=!1;f.length;)f.pop()()}function d(){o||(o=!0,setTimeout(s))}function v(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function p(e,n,t){var r={};return e.length?(r[e[0]]=1<e.length?p(e.slice(1),n,t[e[0]]):n,v(t,r)):n}function h(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function N(e){return e?e.key:null}function y(e){return e.currentTarget.events[e.type](e)}function b(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var l in"string"==typeof r&&(r=e.style.cssText=""),v(r,t)){var u=null==t||null==t[l]?"":t[l];"-"===l[0]?e.style.setProperty(l,u):e.style[l]=u}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},(e.events[n]=t)?r||e.addEventListener(n,y):e.removeEventListener(n,y)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function k(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),r=e.attributes;if(r){r.oncreate&&f.push(function(){r.oncreate(t)});for(var o=0;o<e.children.length;o++)t.appendChild(k(e.children[o]=g(e.children[o]),n));for(var l in r)b(t,l,r[l],null,n)}return t}function x(e,n,t,r){for(var o in v(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&b(e,o,t[o],n[o],r);var l=m?t.oncreate:t.onupdate;l&&f.push(function(){l(e,n)})}function T(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}});

},{}]},{},[1]);
