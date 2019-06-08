"use strict";function b(a){for(var b=1;b<arguments.length;b++){var d=null==arguments[b]?{}:arguments[b],e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){c(a,b,d[b])})}return a}function c(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function d(a,b){if(null==a)return{};var c,d,f=e(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(d=0;d<g.length;d++)c=g[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(f[c]=a[c])}return f}function e(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function f(a,b){return k(a)||j(a,b)||g()}function g(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function j(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function k(a){if(Array.isArray(a))return a}function l(a){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},l(a)}var m=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,i=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=i(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},m=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},n=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!m(c[b],a[b]))return!0;a[b]=c[b]}},o=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||n(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=i(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name):document.createElement(a.name),f=a.props;for(var g in f)p(e,g,null,f[g],c,d);for(var h=0,j=a.children.length;h<j;h++)e.appendChild(q(a.children[h]=u(a.children[h]),c,d));return a.node=e},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=u(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,v=e.children,w=0,x=0,y=t.length-1,z=v.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(v[x]);)s(c,t[w].node,t[w],v[x]=u(v[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(v[z]);)s(c,t[y].node,t[y],v[z]=u(v[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(v[x]=u(v[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(v[x]=u(v[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,v[x],f,g),x++),w++):(l===m?(s(c,k.node,k,v[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,v[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,v[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(b,c){return b.type===a?((!c||t(c.lazy,b.lazy))&&((c=b.lazy.view(b.lazy)).lazy=b.lazy),c):b},v=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},w=function(a,e){return v(a,c,d,e,null,b)},x=function(a){return a.nodeType===b?w(a.nodeValue,a):v(a.nodeName.toLowerCase(),c,e.call(a.childNodes,x),a,null,1)},y=function(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push("object"===l(d)?d:w(d));return b=b||c,"function"==typeof a?a(b,g):v(a,b,g,null,b.key)};return{h:y,app:function app(a,b){var c={},d=!1,e=a.view,h=a.node,i=h&&x(h),j=a.subscriptions,l=[],m=function(a){p(this.actions[a.type],a)},n=function(a){return c!==a&&(c=a,j&&(l=o(l,k([j(c)]),p)),e&&!d&&g(q,d=!0)),c},p=(b||function(a){return a})(function(a,b,d){return"function"==typeof a?p(a(c,b),d||b):f(a)?"function"==typeof a[0]?p(a[0],"function"==typeof(a=a[1])?a(b):a,b):(k(a.slice(1)).map(function(a){a&&a[0](p,a[1],b)},n(a[0])),c):n(a)}),q=function(){d=!1,h=s(h.parentNode,h,i,i="string"==typeof(i=e(c))?w(i):i,m)};p(a.init)}}}(),o=m.h,h=m.app,i=function(a){return function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===l(a)})};return d||(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),o(a,b,d)}},n=i("a"),a=i("div"),q=i("footer"),r=i("h1"),s=i("h2"),t=i("h3"),u=i("header"),v=i("img"),w=i("input"),x=i("label"),y=i("li"),z=i("main"),A=i("nav"),B=i("p"),C=i("span"),D=i("ul"),p={cookies:{},description:["i juggle with code since sixteen,","with cones, balls and rings since twentysix,","and life juggles with me since around thirtysix years.","i enjoy all of it."],gdpr:{allowAllCookiesButtonText:"Allow all",allowCookieButtonText:"Allow selected",cookieButtonText:"Awesome.",cookieText:"We are using the following cookies on this page",denyCookieButtonText:"Deny all",noCookieButtonText:"Awesome.",noCookieText:"This page does neither save, collect, nor share any personal data about you.",show:!0,title:"Magic Privacy Information"},language:"",languages:[{code:"en",text:"english",to:"/"},{code:"de",text:"deutsch",to:"/de/"}],pageClass:{},pages:{"/":{job:"technomancer",occupation:["i juggle with code since sixteen,","with cones, balls and rings since twentysix,","and life juggles with me since around thirtysix years.","i enjoy all of it."]},"/404/":{description:["unfortunately, there is nothing here but nothingness."," i think you looked for something on https://jaeh.at and got lost."],job:"technomancer",occupation:["i juggle with code since sixteen,","with cones, balls and rings since twentysix,","and life juggles with me since around thirtysix years.","i enjoy all of it."],title:"404 - not found"},"/de/":{job:"technomant",lang:"de",occupation:["ich jongliere mit code seit sechszehn,","mit keulen, b\xE4llen und ringen seit sechsundzwanzig","und das leben mit mir seit etwa sechsunddreissig jahren.","ich geniesse das alles."]}},root:"/",title:"jaeh - jascha ehrenreich",url:"/"},E={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}},mapClickToGo:function mapClickToGo(a){return a.preventDefault(),a}},F=function(a){return[q({class:"Footer"},[C([n({class:"anarchy",href:"http://principiadiscordia.com",rel:"nofollow noopener",target:"allhaileris",title:"Lick here, you might be one of the lucky 23."},"\u24B6"),"1982 - ",new Date().getFullYear()," - all rites reversed."]),C([" made with a few bits of ",K({to:"https://github.com/magic/core"},"magic")])]),G(a)]},G=function(b){var c=b.gdpr,d=b.cookies;if(c.show)return d=Object.entries(d),a({class:{Gdpr:!0,show:c.show}},[w({type:"checkbox",name:"show-hide",id:"show-hide",checked:!c.show}),a({class:"Container"},[c.title&&t(c.title),c.content&&B(c.content),d.length?[c.cookieText&&B(c.cookieText),D(d.sort(function(a){var b=f(a,2),c=b[0],d=b[1].required;return d?0:1}).map(function(a){var b=f(a,2),c=b[0],d=b[1],e=d.info,g=d.allowed;return y([w({type:"checkbox",title:"allow",checked:void 0!==g&&g,onchange:[O.gdpr.allow,{name:c}]}),x([c,e&&[" - ",e]])])}))]:B(c.noCookieText),d.length?[x({class:"button",for:"show-hide",onclick:[O.gdpr.close,{allowed:!0}]},c.allowAllCookiesButtonText),x({class:"button",for:"show-hide",onclick:O.gdpr.close},c.allowCookieButtonText),x({class:"button",for:"show-hide",onclick:[O.gdpr.close,{allowed:!1}]},c.denyCookieButtonText)]:x({class:"button",for:"show-hide",onclick:O.gdpr.close},c.noCookieButtonText)])])},H=function(b){var c=b.job,d=b.occupation;return u({class:"Header"},[I(),a({class:"HeaderText"},[r([K({to:"/"},"jascha ehrenreich")]),c&&s(c),d&&a(d.map(function(b){return B(b)}))])])},I=function(){return a({class:"HeaderImage"},[v({alt:"",class:"Face",role:"presentation",src:"/img/jascha.ehrenreich.jpg"}),v({alt:"",class:"Body",role:"presentation",src:"/img/jascha.ehrenreich.body.jpg"})])},J=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.languages,c=void 0===b?[]:b,d=a.url,e=a.hash,f=a.root;if(c.length&&f&&d){d=d.replace(f,"/").replace(/\/\/+/g,"/");var g=d.split("/").filter(function(b){return b}),h=g[0],i=c.find(function(a){return a.code===h})||c[0]||{code:a.language},j=i.code;return j&&j!==a.language&&O.changeLanguage(a,j),D({class:"LanguageSwitch"},c.map(function(a){var b=a.to,c=void 0===b?"":b,g=a.text,i=a.code;if(i!==j){d=d.replace("/".concat(j,"/"),"/");var k=e?"#".concat(e):"";return c=(f+c+d+k).replace(/\/\/+/g,"/"),y([K({to:c,onclick:[O.changeLanguage,i]},g)])}}))}},K=function(a,b){var c=a.to,e=d(a,["to"]),f=e.href,g=e.text,h=e.nofollow,i=e.noreferrer,j=e.onclick,k=d(e,["href","text","nofollow","noreferrer","onclick"]);c=c||f||"",k.href=c;var l=c.startsWith("/");return l?k.onclick=[O.go,E.mapClickToGo]:(k.target="_blank",k.rel="noopener",h&&(k.rel+=" nofollow"),i&&(k.rel+=" noreferrer")),n(k,[g,b])},L=function(a){var c=a.text,e=a.items,f=void 0===e?[]:e,g=a.url,h=a.state,i=a.parentTo,j=void 0===i?void 0:i,k=a.collapse,l=d(a,["text","items","url","state","parentTo","collapse"]),m=h.root;if(l.to||c){var n={class:{}},o=l.to;o.startsWith("/#")&&(o=o.substr(1));var p=l.to[0],q="/"===p||"-"===p||"#"===p;if(j&&q)if("-"===p)o=j+o;else if("#"===p)o=j+o;else{var u=o.split("/")[1];if(u){var v=j.endsWith("/".concat(u,"/"));!v&&q&&(o=j+o)}}var r=o.startsWith(m);m&&q&&!r&&(o=m+o),l.to=o.replace(/\/\//g,"/");var s=g&&g.includes(l.to);g.endsWith(l.to)&&(n["class"].active=!0);var t=[];return(f.length&&s||!k)&&(t=D(f.map(function(a){return L(b({parentTo:l.to,url:g,state:h,collapse:k},a))}))),y(n,[l.to?K(l,c):C(l,c),t])}},M=function(b){var c=b.page,d=b.state;c=c?c(d):"404 - not found";var e={id:"Magic",class:d.pageClass};return z(e,a({class:{Wrapper:!0}},N({state:d,page:c})))},N=function(b){var c=b.page,d=b.state;return[H(d),a({class:"Page"},c),F(d)]},O={changeLanguage:function changeLanguage(a,c){return b({},a,{language:c})},gdpr:{allow:function allow(a,c){return a.cookies[c.name].allowed=!0,b({},a)},close:function close(a,c){var d=c.allowed,e=a.cookies;return"boolean"==typeof d&&Object.entries(a.cookies).forEach(function(a){var c=f(a,2),g=c[0],h=c[1];e[g]=b({},h,{allowed:d})}),[b({},a,{gdpr:b({},a.gdpr,{show:!1}),cookies:e}),[P.gdpr.writeLocalStorage,{key:"gdpr",value:{cookies:a.cookies||[],show:!1}}]]},load:function load(a){return[a,[P.gdpr.readLocalStorage,{key:"gdpr",action:O.gdpr.show}]]},show:function show(a,c){return b({},a,{gdpr:b({},a.gdpr,c.value)})}},go:function go(a,c){var d=c.currentTarget.href.replace(window.location.origin,""),e=d.split("#"),g=f(e,2),h=g[0],i=g[1],j=void 0===i?"":i;if(h===a.url&&j===a.hash)return a;if(window.history.pushState({url:h,hash:j},"",d),j){var k=document.getElementById(j);k&&window.scrollTo(0,k.scrollTop),window.location.hash=j}else window.scrollTo(0,0);return b({},a,{url:h,hash:j,prev:a.url})},pop:function pop(a,c){var d=window.location,e=d.pathname,f=d.hash;return f=f.substring(1),c.state&&(e=c.state.url,f=c.state.hash),f?window.location.hash=f:window.scrollTo(0,0),b({},a,{url:e,hash:f})}},P={gdpr:{readLocalStorage:function readLocalStorage(a,b){var c=b.key,d=b.action,e=window.localStorage||{},f=e[c];"undefined"!=typeof f&&(f=JSON.parse(f)),a(d,{key:c,value:f})},writeLocalStorage:function writeLocalStorage(a,b){var c=b.key,d=b.value,e=window.localStorage||{};e[c]=JSON.stringify(d)}}},Q={"/":function _(b){return[a({class:"section communications"},[s("communications"),D([y([C("email: "),K({href:"mailto:jascha@jaeh.at"},["jascha",C({class:"at"},"@"),"jaeh.at"])]),y([C("github: "),K({href:"https://github.com/jaeh",rel:"nofollow noopener",target:"github-jaeh"},[C({class:"at"},"@"),"jaeh"])]),y([C("keybase: "),K({href:"https://keybase.io/jascha",rel:"nofollow noopener",target:"keybase-jascha"},[C({class:"at"},"@"),"jascha"])]),y([C("twitter: "),K({href:"https://twitter.com/weirdpress",rel:"nofollow noopener",target:"twitter-weirdpress"},[C({class:"at"},"@"),"weirdpress"])])])]),a({class:"section congregations"},[s("congregations"),D([y([t([K({href:"http://wizardsatwork.at",rel:"noopener",target:"wizardsatwork"},["wizards",C({class:"add"},"@"),"work"])]),B("we are a tribe of makers, programmers, engineers, philosophers, activists, hackers, artists, clowns, and scientists."),B("we are wizards & witches @ work, magically shifting paradigms.")]),y([t([K({href:"https://metalab.at",rel:"noopener",target:"metalab"},"metalab")]),B("the metalab is a hack/make space in vienna, austria.")]),y([t([K({href:"https://bwb.is"},"bitcoiners without borders")]),B("working in and on decentralized systems since 2012."),B(["managed the ",K({href:"https://bitcoinfoundation.org",nofollow:!0,noreferrer:!0},"bitcoinfoundation")," webproperties from 2012-2014."])])])]),a({class:"section occupations"},[s("occupations"),D([y([t([K({href:"http://magicshifter.net"},"magicshifter")]),B("open source hardware gadget for lighting, gaming, sound and persistence of vision applications.")]),y([t([K({href:"http://screeninvader.com/"},"screeninvader")]),B("surf the web, watch videos or browse images the way you usually do, then show it on any screen and/or projector.")]),y([t([K({href:"http://github.com/magic/core"},"magic")]),B("magic static/serverless page generator.")])])]),J(b)]},"/404/":function _(){return[t("404 - not found."),B("unfortunately, there is nothing here but nothingness."),B([K({to:"/"},"click here")," to get back to safety"])]},"/de/":function de(b){return[a({class:"section communications"},[s("kommunikation"),D([y([C("email: "),K({href:"mailto:jascha@jaeh.at"},["jascha",C({class:"at"},"@"),"jaeh.at"])]),y([C("github: "),K({href:"https://github.com/jaeh",nofollow:!0},[C({class:"at"},"@"),"jaeh"])]),y([C("keybase: "),K({href:"https://keybase.io/jascha",nofollow:!0},[C({class:"at"},"@"),"jascha"])]),y([C("twitter: "),K({href:"https://twitter.com/weirdpress",nofollow:!0,noreferrer:!0},[C({class:"at"},"@"),"weirdpress"])])])]),a({class:"section congregations"},[s("kongregation"),D([y([t([K({href:"http://wizardsatwork.at"},["wizards",C({class:"add"},"@"),"work"])]),B("wir sind ein stamm von erfindern, programmierern, philosophen, aktivisten, hackern, k\xFCnstlern, clowns und wissenschafltern,"),B("wir sind wizards & witches @ work, unsere magie transformiert paradigmen.")]),y([t([K({href:"https://metalab.at"},"metalab")]),B("das metalab ist ein hack/make space in wien, \xF6sterreich.")]),y([t([K({href:"https://bwb.is"},"bitcoiners without borders")]),B("wir arbeiten seit 2012 an und in dezentralisierten systemen."),B(["zb. verwaltung der ",K({href:"https://bitcoinfoundation.org",nofollow:!0,noreferrer:!0},"bitcoinfoundation")," webproperties von 2012-2014."])])])]),a({class:"section occupations"},[s("okkupation"),D([y([t([K({href:"http://magicshifter.net"},"magicshifter")]),B(["open source hardware gadget f\xFCr lichtmagie, spieltriebbefriedigung,"," und soundanwendungen."," \xFCberlistet die persistente wahrnehmung."])]),y([t([K({href:"http://screeninvader.com/"},"screeninvader")]),B("kollaboratives internetzsurfen, videoschaun oder bilder browsen.")]),y([t([K({href:"http://github.com/magic/core"},"magic")]),B("magische generation von statischen und serverlosen webseiten.")])])]),J(b)]}};h({init:function init(){return O.gdpr.load(b({},p,{url:window.location.pathname}))},subscriptions:function subscriptions(){return[[E.listenPopState,O.pop]]},view:function view(a){var b=Q[a.url]?a.url:"/404/",c=Q[b];return a.pages&&a.pages[b]&&Object.keys(a.pages[b]).forEach(function(c){a[c]=a.pages[b][c]}),M({page:c,state:a})},node:document.getElementById("Magic")});