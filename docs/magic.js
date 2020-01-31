"use strict";function b(a,b){if(null==a)return{};var d,e,f=c(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(e=0;e<g.length;e++)d=g[e],!(0<=b.indexOf(d))&&Object.prototype.propertyIsEnumerable.call(a,d)&&(f[d]=a[d])}return f}function c(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function d(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function f(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?d(Object(b),!0).forEach(function(c){i(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):d(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function i(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function j(a,b){return m(a)||l(a,b)||k()}function k(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function m(a){if(Array.isArray(a))return a}function n(a){"@babel/helpers - typeof";return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n(a)}var o=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},o=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)p(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(q(a.children[h]=v(a.children[h]),c,d));return a.node=f},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(u[x]);)s(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(u[z]);)s(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(u[x]=v(u[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(s(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,u[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===n(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||c.type!==a||t(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){n(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=o(j,k([i(b)]),n)),d&&!c&&g(p,c=!0)),b},n=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?n(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?n(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](n,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=s(e.parentNode,e,h,h=u(d(b)),l)};n(a.init)}}}(),q=o.h,e=o.app,h=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===n(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return q(a,{},b);return q(a,b,d)}},r=h("a"),a=h("circle"),s=h("div"),t=h("footer"),u=h("g"),g=h("h1"),v=h("h2"),w=h("h3"),x=h("h4"),y=h("h5"),z=h("header"),A=h("img"),B=h("input"),C=h("label"),D=h("li"),E=h("link"),F=h("main"),G=h("meta"),H=h("nav"),I=h("p"),p=h("path"),J=h("script"),K=h("span"),L=h("svg"),M=h("title"),N=h("ul"),O=h("view"),P={description:["i juggle with code since sixteen,","with cones, balls and rings since twentysix,","and life juggles with me since around thirtysix years.","i enjoy all of it."],gdpr:{allowed:[],show:!1},language:"",languages:[{code:"en",text:"english",to:"/"},{code:"de",text:"deutsch",to:"/de/"}],pageClass:{},pages:{"/":{job:"technomancer",occupation:["i juggle with code since sixteen,","with cones, balls and rings since twentysix,","and life juggles with me since around thirtysix years.","i enjoy all of it."]},"/404/":{description:["unfortunately, there is nothing here but nothingness."],title:"404 - not found"},"/de/":{job:"technomant",lang:"de",occupation:["ich jongliere mit code seit sechszehn,","mit keulen, b\xE4llen und ringen seit sechsundzwanzig","und das leben mit mir seit etwa sechsunddreissig jahren.","ich geniesse das alles."]},"/de/404/":{description:"Hier ist leider nur Leere.",job:"technomant",lang:"de",occupation:["ich jongliere mit code seit sechszehn,","mit keulen, b\xE4llen und ringen seit sechsundzwanzig","und das leben mit mir seit etwa sechsunddreissig jahren.","ich geniesse das alles."],title:"404 - nicht gefunden"}},root:"/",title:"jaeh - jascha ehrenreich",url:"/"},Q={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},R=function(a){var b,c=a.blog,d=a.link,e=a.month,g=a.url,h=a.year,i=Object.entries(c[h][e]),k=[e];return d?b="".concat(d).concat(e,"/"):k.push(" - ",h),[w(b?Z({to:b},k):k),i.map(function(c){var d=j(c,2),e=d[0],g=d[1];return g.map(function(c){return S(f({},a,{},c.state,{name:c.name,link:b,day:e}))})})]},S=function(a){return s([x([a.day,"-",a.month,"-",a.year," - ",Z({to:a.name},a.title)]),I(a.description)])},T=function(a){var b,c=a.link,d=a.year,e=a.blog,g=a.url;return c?b="".concat(c).concat(d,"/"):g.endsWith("".concat(d,"/"))&&(b=g),s([v(c?Z({to:b},d):d),Object.entries(e[d]).map(function(c){var d=j(c,2),e=d[0],g=d[1];return R(f({},a,{month:e,days:g,link:b}))})])},U=function(){return[t({class:"Footer"},[K([r({class:"anarchy",href:"http://principiadiscordia.com",rel:"nofollow noopener",target:"allhaileris",title:"Lick here, you might be one of the lucky 23."},"\u24B6"),"1982 - ",new Date().getFullYear()," - all rites reversed."]),K([" made with a few bits of ",Z({to:"https://github.com/magic/core"},"magic")])])]},V=function(b){var c=b.gdpr,d=void 0===c?{}:c,e=b.cookies,f=void 0===e?[]:e,g=d.show,h=d.title,i=void 0===h?"Privacy Information":h,j=d.content,k=void 0===j?"This app neither saves, collects, nor shares any data about you.":j,l=d.noDataText,m=void 0===l?"Awesome.":l,n=d.allowTitle,o=void 0===n?"Allow:":n,q=d.allowAllText,r=void 0===q?"All":q,t=d.allowText,v=void 0===t?"Selected":t,z=d.denyText,A=void 0===z?"None":z;if(!g)return s({class:"Gdpr"},L({class:"ShowHide",onclick:[da.gdpr.show,{show:!0}],viewBox:"0 0 512 512"},[u([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),a({cx:"192",cy:"128",r:"32"}),a({cx:"128",cy:"256",r:"32"}),a({cx:"288",cy:"384",r:"32"}),a({cx:"272",cy:"272",r:"16"}),a({cx:"400",cy:"336",r:"16"}),a({cx:"176",cy:"368",r:"16"})])]));var E=!!f.length;return s({class:"Gdpr"},[s({class:"Container"},[i&&w(i),k&&I(k),E&&[N(f.map(function(a){var b=a.name,c=a.title,e=a.content,f=a.allowed;return D({class:"Cookie"},[B({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:d.allowed.includes(b),onchange:[da.gdpr.toggleAllow,{name:b}]}),(c||e)&&C({for:b},[c&&x(c),e&&I(e)])])}))],E?[y(o),B({class:"allow all",onclick:da.gdpr.allow,type:"button",value:r}),B({class:"allow",onclick:da.gdpr.close,type:"button",value:v}),B({class:"allow none",onclick:da.gdpr.deny,type:"button",value:A})]:B({onclick:da.gdpr.close,value:m,type:"button"})])])},W=function(a){var b=a.job,c=a.occupation;return z({class:"Header"},[X(),s({class:"HeaderText"},[g([Z({to:"/"},"jascha ehrenreich")]),b&&v(b),c&&s(c.map(function(b){return I(b)}))])])},X=function(){return s({class:"HeaderImage"},[A({alt:"",class:"Face",role:"presentation",src:"/img/jascha.ehrenreich.jpg"}),A({alt:"",class:"Body",role:"presentation",src:"/img/jascha.ehrenreich.body.jpg"})])},Y=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.languages,c=void 0===b?[]:b,d=a.url,e=a.hash,f=a.root;if(c.length&&f&&d){d=d.replace(f,"/").replace(/\/\/+/g,"/");var g=d.split("/").filter(function(b){return b}),h=g[0],i=c.find(function(a){return a.code===h})||c[0]||{code:a.language},j=i.code;return j&&j!==a.language&&da.changeLanguage(a,j),N({class:"LanguageSwitch"},c.map(function(a){var b=a.to,c=void 0===b?"":b,g=a.text,i=a.code;if(i!==j){d=d.replace("/".concat(j,"/"),"/");var k=e?"#".concat(e):"";return c=(f+c+d+k).replace(/\/\/+/g,"/"),D([Z({to:c,onclick:[da.changeLanguage,i]},g)])}}))}},Z=function(a,c){var d=a.to,e=a.action,f=void 0===e?da.go:e,g=b(a,["to","action"]),h=g.href,i=g.text,j=g.nofollow,k=g.noreferrer,l=b(g,["href","text","nofollow","noreferrer"]);d=d||h||"",l.href=d;var m="/"===d[0]||"#"===d[0];return m?l.onclick=[f,ca.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),r(l,[i,c])},$=function(a){var c=a.text,d=a.items,e=void 0===d?[]:d,g=a.url,h=a.root,i=a.parentTo,j=void 0===i?void 0:i,k=a.collapse,l=b(a,["text","items","url","root","parentTo","collapse"]),m={class:{}},n=l.to;n.startsWith("/#")&&(n=n.substr(1));var o=l.to[0],p="/"===o||"-"===o||"#"===o;j&&p&&("-"===o||"#"===o)&&(n=j+n);var q=n.startsWith(h);h&&p&&!q&&(n=h+n),l.to=n.replace(/\/\//g,"/"),l.to===g&&(m["class"].active=!0);var r=[],s=g.startsWith(l.to)||!k;return s&&e.length&&(r=N(e.map(function(a){return $(f({parentTo:l.to,url:g,root:h,collapse:k},a))}))),D(m,[l.to?_(l,c):K(l,c),r])},_=function(a,b){return Z(a,b)},aa=function(a,b){var c=a.page,d=a.state;c=c?c(d):"404 - not found";var e={id:"Magic",class:d.pageClass};return F(e,s({class:{Wrapper:!0}},[ba({state:d,page:c}),b]))},ba=function(a){var b=a.page,c=a.state;return[W(c),s({class:"Page",id:"page"},b),U(c)]},ca={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=ca.db.init(),g=ca.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=ca.db.init(),f=void 0;return d&&e[d]&&(f=ca.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=ca.db.init();d&&e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}(),preventDefault:function(){return function preventDefault(a){return a.preventDefault(),a}}()},da={changeLanguage:function changeLanguage(a,b){return f({},a,{language:b})},gdpr:{allow:function allow(a){return[f({},a,{gdpr:f({},a.gdpr,{allowed:a.cookies.map(function(a){return a.name}),show:!1})}),[ca.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[da.gdpr.show,{show:!1}]}]]},close:function close(a){return[f({},a,{gdpr:f({},a.gdpr,{show:!1})}),[ca.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[da.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[f({},a,{gdpr:f({},a.gdpr,{allowed:[]})}),[ca.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[da.gdpr.show,{show:!1}]}]]},show:function(a,b){var c=b.show,d=b.allowed,e=void 0===d?a.gdpr.allowed:d;return b.value&&(c=b.value.show,b.value.allowed&&(e=b.value.allowed)),"boolean"==typeof c?f({},a,{gdpr:f({},a.gdpr,{show:c,allowed:e})}):a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,g=e.allowed.includes(d);return g?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),f({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=j(d,2),g=e[0],h=e[1],i=void 0===h?"":h;if(g===a.url){if(i&&i===a.hash)return a;window.scroll({top:0,behaviour:"smooth"})}return window.history.pushState({url:g,hash:i},"",c),i?window.location.hash=i:window.scroll({top:0,behaviour:"smooth"}),f({},a,{url:g,hash:i,prev:a.url})},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;return e=e.substring(1),b.state&&(d=b.state.url,e=b.state.hash),e?window.location.hash=e:window.scroll(0,0),f({},a,{url:d,hash:e})}},ea={"/":function _(){return[s({class:"section communications"},[v("communications"),N([D([K("email: "),Z({href:"mailto:jascha@jaeh.at"},["jascha",K({class:"at"},"@"),"jaeh.at"])]),D([K("github: "),Z({href:"https://github.com/jaeh",rel:"nofollow noopener",target:"github-jaeh"},[K({class:"at"},"@"),"jaeh"])]),D([K("keybase: "),Z({href:"https://keybase.io/jascha",rel:"nofollow noopener",target:"keybase-jascha"},[K({class:"at"},"@"),"jascha"])]),D([K("twitter: "),Z({href:"https://twitter.com/weirdpress",rel:"nofollow noopener",target:"twitter-weirdpress"},[K({class:"at"},"@"),"weirdpress"])]),D([K("mastodon: "),Z(i({href:"https://anarchism.space/@jaeh",rel:"nofollow noopener",target:"mastodon-jaeh"},"rel","me"),[K({class:"at"},"@"),"jaeh"])])])]),s({class:"section congregations"},[v("congregations"),N([D([w([Z({href:"http://wizardsatwork.at",rel:"noopener",target:"wizardsatwork"},["wizards",K({class:"add"},"@"),"work"])]),I("we are a tribe of makers, programmers, engineers, philosophers, activists, hackers, artists, clowns, and scientists."),I("we are wizards & witches @ work, magically shifting paradigms.")]),D([w([Z({href:"https://metalab.at",rel:"noopener",target:"metalab"},"metalab")]),I("the metalab is a hack/make space in vienna, austria.")]),D([w([Z({href:"https://bwb.is"},"bitcoiners without borders")]),I("working in and on decentralized systems since 2012."),I(["managed the ",Z({href:"https://bitcoinfoundation.org",nofollow:!0,noreferrer:!0},"bitcoinfoundation")," webproperties from 2012-2014."])])])]),s({class:"section occupations"},[v("occupations"),N([D([w([Z({href:"http://magicshifter.net"},"magicshifter")]),I("open source hardware gadget for lighting, gaming, sound and persistence of vision applications.")]),D([w([Z({href:"https://github.com/screeninvader/"},"screeninvader")]),I("surf the web, watch videos or browse images the way you usually do, then show it on any screen and/or projector.")]),D([w([Z({href:"http://github.com/magic/core"},"magic")]),I("magic static/serverless page generator.")])])])]},"/404/":function _(a){return[w(a.title),I(a.description),I([Z({to:"/"},"click here")," to get back to safety"])]},"/de/":function de(){return[s({class:"section communications"},[v("kommunikation"),N([D([K("email: "),Z({href:"mailto:jascha@jaeh.at"},["jascha",K({class:"at"},"@"),"jaeh.at"])]),D([K("github: "),Z({href:"https://github.com/jaeh",nofollow:!0},[K({class:"at"},"@"),"jaeh"])]),D([K("keybase: "),Z({href:"https://keybase.io/jascha",nofollow:!0},[K({class:"at"},"@"),"jascha"])]),D([K("twitter: "),Z({href:"https://twitter.com/weirdpress",nofollow:!0,noreferrer:!0},[K({class:"at"},"@"),"weirdpress"])]),D([K("mastodon: "),Z(i({href:"https://anarchism.space/@jaeh",rel:"nofollow noopener",target:"mastodon-jaeh"},"rel","me"),[K({class:"at"},"@"),"jaeh"])])])]),s({class:"section congregations"},[v("kongregation"),N([D([w([Z({href:"http://wizardsatwork.at"},["wizards",K({class:"add"},"@"),"work"])]),I("wir sind ein stamm von erfindern, programmierern, philosophen, aktivisten, hackern, k\xFCnstlern, clowns und wissenschafltern,"),I("wir sind wizards & witches @ work, unsere magie transformiert paradigmen.")]),D([w([Z({href:"https://metalab.at"},"metalab")]),I("das metalab ist ein hack/make space in wien, \xF6sterreich.")]),D([w([Z({href:"https://bwb.is"},"bitcoiners without borders")]),I("wir arbeiten seit 2012 an und in dezentralisierten systemen."),I(["zb. verwaltung der ",Z({href:"https://bitcoinfoundation.org",nofollow:!0,noreferrer:!0},"bitcoinfoundation")," webproperties von 2012-2014."])])])]),s({class:"section occupations"},[v("okkupation"),N([D([w([Z({href:"http://magicshifter.net"},"magicshifter")]),I(["open source hardware gadget f\xFCr lichtmagie, spieltriebbefriedigung,"," und soundanwendungen."," \xFCberlistet die persistente wahrnehmung."])]),D([w([Z({href:"https://github.com/screeninvader/"},"screeninvader")]),I("kollaboratives internetzsurfen, videoschaun oder bilder browsen.")]),D([w([Z({href:"http://github.com/magic/core"},"magic")]),I("magische generation von statischen und serverlosen webseiten.")])])])]},"/de/404/":function de404(a){return[w(a.title),I(a.description),I([Z({to:"/"},"Klicke hier")," um bekanntes Gebiet zu erreichen."])]}};e({init:[f({},P,{url:window.location.pathname,hash:window.location.hash.substr(1)}),[[ca.db.get,{key:"magic-gdpr",action:da.gdpr.show}]]],subscriptions:function subscriptions(){return[[Q.listenPopState,da.pop]]},view:function(a){var b=ea[a.url]?a.url:"/404/",c=ea[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),aa({page:c,state:a},[V(a),Y(a)])},node:document.getElementById("Magic")});