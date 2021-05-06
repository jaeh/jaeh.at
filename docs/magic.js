"use strict";function b(a){return e(a)||d(a)||q(a)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}function e(a){if(Array.isArray(a))return r(a)}function f(a,b){if(null==a)return{};var c,d,e=j(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function j(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function k(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function l(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?k(Object(b),!0).forEach(function(c){m(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):k(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function m(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function n(a,b){return t(a)||s(a,b)||q(a,b)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function q(a,b){if(a){if("string"==typeof a)return r(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?r(a,b):void 0}}function r(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function s(a,b){var c=a&&("undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"]);if(null!=c){var d,e,f=[],g=!0,h=!1;try{for(c=c.call(a);!(g=(d=c.next()).done)&&(f.push(d.value),!(b&&f.length===b));g=!0);}catch(a){h=!0,e=a}finally{try{g||null==c["return"]||c["return"]()}finally{if(h)throw e}}return f}}function t(a){if(Array.isArray(a))return a}function u(a){"@babel/helpers - typeof";return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},u(a)}var v=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2)]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=v(a.children[h]),c,d));return a.node=f},q=function(a){return null==a?null:a.key},r=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,s=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,s))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==s[A]&&o(c,A,n[A],s[A],f,g);for(;x<=z&&w<=y&&null!=(l=q(t[w]))&&l===q(u[x]);)r(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=q(t[y]))&&l===q(u[z]);)r(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=q(k=t[w]),m=q(u[x]=v(u[x],k)),C[l]||null!=m&&m===q(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(r(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(r(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?r(c,k&&k.node,null,u[x],f,g):(r(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==q(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},s=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},t=function(a){return"object"===u(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||!c.lazy||s(c.lazy,b.lazy))&&((c=t(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(t(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){q(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),q)),d&&!c&&g(s,c=!0)),b},o=a.middleware,p=void 0===o?function(a){return a}:o,q=p(function(a,c){return"function"==typeof a?q(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?q(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](q,a[1])},m(a[0])),b):m(a)}),s=function(){c=!1,e=r(e.parentNode,e,h,h=t(d(b)),l)};q(a.init)}}}(),w=v.h,h=v.app,i=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=1<arguments.length?arguments[1]:void 0,e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===u(a)})};if(e(d,"undefined")){if(b.props)return w(a,{},[b]);e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})}return w(a,b,d)}},x=i("a"),a=i("circle"),y=i("div"),z=i("footer"),A=i("g"),g=i("h1"),B=i("h2"),C=i("h3"),D=i("h4"),E=i("header"),F=i("img"),G=i("input"),H=i("li"),I=i("link"),J=i("main"),K=i("meta"),L=i("nav"),M=i("p"),p=i("path"),N=i("script"),O=i("span"),P=i("svg"),Q=i("title"),R=i("ul"),S=i("view"),T={description:["i juggle with code since twenty,","with cones, balls and rings since thirty,","and life juggles with me since around forty years.","i enjoy all of it."],job:"technomancer",language:"",languages:[{code:"en",text:"english",to:"/"},{code:"de",text:"deutsch",to:"/de/"}],nospy:{show:!1},pageClass:{},pages:{"/":{description:["i juggle with code since twenty,","with cones, balls and rings since thirty,","and life juggles with me since around forty years.","i enjoy all of it."],job:"technomancer and artivist"},"/404/":{description:["i juggle with code since eighteen,","with cones, balls and rings since twentyeight,","and life juggles with me since around thirtyeight years.","i enjoy all of it."],title:"404 - not found"},"/de/":{description:["ich jongliere mit code seit zwanzig,","mit keulen, b\xE4llen und ringen seit dreissig","und das leben mit mir seit etwa vierzig jahren.","ich geniesse das alles."],job:"technomant und artivist",lang:"de"},"/de/404/":{description:["ich jongliere mit code seit zwanzig,","mit keulen, b\xE4llen und ringen seit dreissig","und das leben mit mir seit etwa vierzig jahren.","ich geniesse das alles."],job:"technomant",lang:"de",title:"404 - nicht gefunden"}},root:"/",theme:"dark",title:"jaeh - jascha ehrenreich",url:"/"},U={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},V=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[C(b?ea({to:b},i):i),h.map(function(c){var d=n(c,2),e=d[0],f=d[1];return f.map(function(c){return W(l(l(l({},a),c.state),{},{name:c.name,link:b,day:e}))})})]},W=function(a){return y([D([a.day,"-",a.month,"-",a.year," - ",ea({to:a.name},a.title)]),M(a.description)])},X=function(a){var b,c=a.link,d=a.year,e=a.blog,f=a.url;return c?b="".concat(c).concat(d,"/"):f.endsWith("".concat(d,"/"))&&(b=f),y([B(c?ea({to:b},d):d),Object.entries(e[d]).map(function(c){var d=n(c,2),e=d[0],f=d[1];return V(l(l({},a),{},{month:e,days:f,link:b}))})])},Y=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"communications";return y({class:"section communications"},[B(a),R([H(["email: ",ea({to:"mailto:jascha@jaeh.at",text:"jascha@jaeh.at"})]),H(["github: ",ea({to:"https://github.com/jaeh",text:"@jaeh"})]),H(["gitlab: ",ea({to:"https://gitlab.com/jaeh",text:"@jaeh"})]),H(["keybase: ",ea({to:"https://keybase.io/jascha",text:"jascha"})]),H(["twitter: ",ea({to:"https://twitter.com/weirdpress",text:"@weirdpress"})])])])},Z=function(){return[y({class:"Credits"},[O([x({class:"anarchy",href:"https://principiadiscordia.com/book/1.php",target:"allhaileris",title:"Lick here, you might be one of the lucky 23."},"\u24B6")," 1982 - ",new Date().getFullYear()," - all rites reversed."])," made with a few bits of ",ea({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])]},$=function(){var a=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return z({class:"Footer"},[y({class:"Container"},[Z(),a])])},_=function(a){var b=a.job,c=a.description;return E({class:"Header"},[aa(),y({class:"HeaderText"},[g([ea({to:"/"},"jascha ehrenreich")]),b&&B(b),c&&y(c.map(function(b){return M(b)}))])])},aa=function(){return y({class:"HeaderImage"},[F({alt:"",class:"Face",role:"presentation",src:"/img/jascha.ehrenreich.jpg"}),F({alt:"",class:"Body",role:"presentation",src:"/img/jascha.ehrenreich.body.jpg"})])},ba=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="",a.loading=a.loading||"lazy")),F(a)},ca=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.languages,c=void 0===b?[]:b,d=a.url,e=a.hash,f=a.root;if(c.length&&f&&d){d=d.replace(f,"/").replace(/\/\/+/g,"/");var g=d.split("/").filter(function(b){return b}),h=g[0],i=c.find(function(a){return a.code===h})||c[0]||{code:a.language},j=i.code;return j&&j!==a.language&&ka.changeLanguage(a,j),R({class:"LanguageSwitch"},c.map(function(a){var b=a.to,c=void 0===b?"":b,g=a.text,i=a.code;if(i!==j){d=d.replace("/".concat(j,"/"),"/");var k=e?"#".concat(e):"";return c=(f+c+d+k).replace(/\/\/+/g,"/"),H([ea({to:c,onclick:[ka.changeLanguage,i]},g)])}}))}},da=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return P({class:"LightSwitch icon",onclick:ka.changeTheme,height:25,width:25,viewBox:"0 0 352 460"},[p({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),p({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),p({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})])},ea=function(a,b){var c=a.to,d=a.action,e=void 0===d?ka.go:d,g=a.text,h=f(a,["to","action","text"]),i=h.href,j=h.nofollow,k=h.noreferrer,l=f(h,["href","nofollow","noreferrer"]);c=c||i||"",l.href=c,g&&b?g=[g,b]:!g&&(b?g=b:g=c);var m="/"===c[0]||"#"===c[0];return m?l.onclick=[e,ja.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),x(l,g)},fa=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:[],c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return R({class:"List"},[].concat(b(a),b(c)).map(function(a){var b=a.src,c=a.title,d=a.to,e=a.text;return[H([b&&ba({width:60,height:60,src:b}),c&&y([C([ea({to:d},c)]),M(e)])])]}))},ga=function(a){var b=a.collapse,c=a.items,d=void 0===c?[]:c,e=a.text,g=a.url,h=f(a,["collapse","items","text","url"]),i={class:{}},j=h.to;j===g&&(i["class"].active=!0);var k=[],m=!b||g.includes(j);return m&&d.length&&(k=R(d.map(function(a){return ga(l({url:g,collapse:b},a))}))),H(i,[j?ea(h,e):O(h,e),k])},ha=function(b){var c=b.nospy,d=void 0===c?{}:c,e=b.cookies,f=void 0===e?[]:e,g=d.show,h=d.title,i=void 0===h?"Privacy Notice":h,j=d.content,k=void 0===j?"This app neither saves, collects, nor shares any data about you.":j,l=d.buttonText,m=void 0===l?"Awesome!":l;return g?y({class:"NoSpy"},[y({class:"Container"},[i&&C(i),k&&M(k),G({onclick:ka.nospy.toggle,value:m,type:"button"})])]):y({class:"NoSpy"},P({class:"icon",onclick:ka.nospy.toggle,width:"25",height:"25",viewBox:"0 0 512 512"},[A([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),a({cx:"192",cy:"128",r:"32"}),a({cx:"128",cy:"256",r:"32"}),a({cx:"288",cy:"384",r:"32"}),a({cx:"272",cy:"272",r:"16"}),a({cx:"400",cy:"336",r:"16"}),a({cx:"176",cy:"368",r:"16"})])]))},ia=function(a,b){var c=a.page,d=a.state,e={id:"Magic",class:d.pageClass};return J(e,y({class:{Wrapper:!0}},[_(d),y({class:"Page",id:"page"},c(d)),$(d),b]))},ja={preventDefault:function preventDefault(a){return a.preventDefault(),a}},ka={changeLanguage:function changeLanguage(a,b){return l(l({},a),{},{language:b})},changeTheme:function changeTheme(a){return l(l({},a),{},{pageClass:l(l({},a.pageClass),{},{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=n(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url&&h===a.hash)return h&&(window.location.hash=h),a;var i=a.pages&&a.pages[f]&&a.pages[f].title;i&&(document.title=a.title=i),f===a.url?window.location.hash=h:!h&&window.scrollTo({top:0});var j=window,k=j.scrollY;return window.history.pushState({url:f,hash:h,scrollY:k},a.title,c),l(l({},a),{},{url:f,hash:h,prev:a.url})},nospy:{toggle:function toggle(a){return a.nospy.show=!a.nospy.show,l({},a)}},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var f=0;return b.state&&(d=b.state.url,e=b.state.hash,f=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:f}),l(l({},a),{},{url:d,hash:e})}},la={"/":function _(){return[Y(),y({class:"section congregations"},[B("congregations"),fa([{src:"/img/congregations/thesystemcollective.png",title:"TheSystemCollective",to:"https://thesystem.at",text:"artist collective, building an artificial museum."},{src:"/img/congregations/metalab.png",title:"metalab",to:"https://metalab.at",text:"a hack/make space in vienna, austria."},{src:"/img/congregations/bwb.png",title:"bitcoiners without borders",to:"https://bwb.is",text:["is a ",ea({text:"DAO",title:"(decentralized autonomous organization)",to:"https://en.wikipedia.org/wiki/Decentralized_Autonomous_Organization"})," founded in 2011, working in and on decentralized systems."]},{src:"/img/congregations/parallele.png",title:"parallele polis vienna",to:"https://www.parallele.at",text:"cryptoliberation community, viennese fork."}])]),y({class:"section occupations"},[B("occupations"),fa([{src:"/img/occupations/artificialmuseum.png",title:"Artificial Museum",to:"https://artificialmuseum.com",text:"Our mission is to create, procure, research, disseminate and conserve (digital) art."},{src:"/img/occupations/magic.png",title:"magic",to:"https://magic.github.io",text:"jsomorphic jamstack generator."},{src:"/img/occupations/grundstein.png",title:"grundstein",to:"https://grundstein.it",text:"serves static pages and their apis. built for magic."},{src:"/img/occupations/webboot.png",title:"webboot",to:"https://webboot.org",text:"a source of integrity for the web. unfinished. open source. dormant. contributions and feedback very welcome."}])])]},"/404/":function _(a){return[C(a.title),M(a.description),M([ea({text:"click here",to:"/"})," to get back to safety"])]},"/de/":function de(){return[Y("kommunikation"),y({class:"section congregations"},[B("kongregation"),fa([{src:"/img/congregations/thesystemcollective.png",title:"TheSystemCollective",to:"https://thesystem.at",text:"K\xFCnstlerkollektiv"},{src:"/img/congregations/metalab.png",title:"metalab",to:"https://metalab.at",text:"ein hack/make space in wien, \xF6sterreich."},{src:"/img/congregations/bwb.png",title:"bitcoiners without borders",to:"https://bwb.is",text:["eine ",ea({text:"DAO",title:"(dezentrale autonome organisation)",to:"https://en.wikipedia.org/wiki/Decentralized_Autonomous_Organization"}),", gegr\xFCndet 2011. wir arbeiten in und an dezentralen systemen."]},{src:"/img/congregations/parallele.png",title:"parallele polis vienna",to:"https://www.parallele.at",text:"weltweite cryptoliberationsbewegung, wiener sektion."}])]),y({class:"section occupations"},[B("okkupation"),fa([{src:"/img/occupations/artificialmuseum.png",title:"Artificial Museum",to:"https://artificialmuseum.com",text:"Unsere Aufgabe ist die Erschaffung, Beschaffung, Erforschung, Verbreitung und Bewahrung von (digitaler) Kunst."},{src:"/img/occupations/magic.png",title:"@magic",to:"https://github.com/magic/core/",text:"jsomorphischer jamstack generator. javascript, apis und markup."},{src:"/img/occupations/grundstein.png",title:"@grundstein",to:"https://grundstein.it",text:"hosting ohne \xE4rger. liefert statische seiten und deren apis. gebaut fuer @magic."},{src:"/img/occupations/webboot.png",title:"@webboot",to:"https://webboot.org",text:"eine quelle von integrit\xE4t f\xFCr das netz. unfertig. quelloffen. kontaktiere mich einfach, wenn du dran hacken willst."}])])]},"/de/404/":function de404(a){return[C(a.title),M(a.description),M(ea({text:"klicke hier",to:"/"}))]}};h({init:l(l({},T),{},{url:window.location.pathname,hash:window.location.hash.substr(1)}),subscriptions:function subscriptions(){return[[U.listenPopState,ka.pop]]},view:function(a){var b=la[a.url]?a.url:"/404/",c=la[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.url=b,ia({page:c,state:a},[ca(a),da(a),ha(a)])},node:document.getElementById("Magic")});