function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function t(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){var i,r;i=e,r=n[t],t in i?Object.defineProperty(i,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[t]=r})}return e}function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n.push.apply(n,i)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function i(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function r(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,n){if(t){if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);if("Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,n)}}!function(){var e,a,s,c,l,u,d,f,h,g,p,m,v,b,y,w,k,x,j,C,z=(e={},s=(a=[]).map,c=Array.isArray,l="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout,u=function(e){var t="";if("string"==typeof e)return e;if(c(e)&&e.length>0)for(var n,i=0;i<e.length;i++)""!==(n=u(e[i]))&&(t+=(t&&" ")+n);else for(var i in e)e[i]&&(t+=(t&&" ")+i);return t},d=function(e,t){var n={};for(var i in e)n[i]=e[i];for(var i in t)n[i]=t[i];return n},f=function(e){return e.reduce(function(e,t){return e.concat(t&&!0!==t?"function"==typeof t[0]?[t]:f(t):0)},a)},h=function(e,t){if(e!==t)for(var n in d(e,t)){var i,r;if(e[n]!==t[n]&&(i=e[n],r=t[n],!(c(i)&&c(r))||i[0]!==r[0]||"function"!=typeof i[0]))return!0;t[n]=e[n]}},g=function(e,t,n){for(var i,r,o=0,a=[];o<e.length||o<t.length;o++)i=e[o],a.push((r=t[o])?!i||r[0]!==i[0]||h(r[1],i[1])?[r[0],r[1],r[0](n,r[1]),i&&i[2]()]:i:i&&i[2]());return a},p=function(e,t,n,i,r,o){if("key"===t);else if("style"===t)for(var a in d(n,i))n=null==i||null==i[a]?"":i[a],"-"===a[0]?e[t].setProperty(a,n):e[t][a]=n;else"o"===t[0]&&"n"===t[1]?((e.actions||(e.actions={}))[t=t.slice(2)]=i)?n||e.addEventListener(t,r):e.removeEventListener(t,r):!o&&"list"!==t&&t in e?e[t]=null==i?"":i:null!=i&&!1!==i&&("class"!==t||(i=u(i)))?e.setAttribute(t,i):e.removeAttribute(t)},m=function(e,t,n){var i=e.props,r=3===e.type?document.createTextNode(e.name):(n=n||"svg"===e.name)?document.createElementNS("http://www.w3.org/2000/svg",e.name,{is:i.is}):document.createElement(e.name,{is:i.is});for(var o in i)p(r,o,null,i[o],t,n);for(var a=0,s=e.children.length;a<s;a++)r.appendChild(m(e.children[a]=k(e.children[a]),t,n));return e.node=r},v=function(e){return null==e?null:e.key},b=function(e,t,n,i,r,o){if(n===i);else if(null!=n&&3===n.type&&3===i.type)n.name!==i.name&&(t.nodeValue=i.name);else if(null==n||n.name!==i.name)t=e.insertBefore(m(i=k(i),r,o),t),null!=n&&e.removeChild(n.node);else{var a,s,c,l,u=n.props,f=i.props,h=n.children,g=i.children,y=0,w=0,x=h.length-1,j=g.length-1;for(var C in o=o||"svg"===i.name,d(u,f))("value"===C||"selected"===C||"checked"===C?t[C]:u[C])!==f[C]&&p(t,C,u[C],f[C],r,o);for(;w<=j&&y<=x&&null!=(c=v(h[y]))&&c===v(g[w]);)b(t,h[y].node,h[y],g[w]=k(g[w++],h[y++]),r,o);for(;w<=j&&y<=x&&null!=(c=v(h[x]))&&c===v(g[j]);)b(t,h[x].node,h[x],g[j]=k(g[j--],h[x--]),r,o);if(y>x)for(;w<=j;)t.insertBefore(m(g[w]=k(g[w++]),r,o),(s=h[y])&&s.node);else if(w>j)for(;y<=x;)t.removeChild(h[y++].node);else{for(var C=y,z={},P={};C<=x;C++)null!=(c=h[C].key)&&(z[c]=h[C]);for(;w<=j;){if(c=v(s=h[y]),l=v(g[w]=k(g[w],s)),P[c]||null!=l&&l===v(h[y+1])){null==c&&t.removeChild(s.node),y++;continue}null==l||1===n.type?(null==c&&(b(t,s&&s.node,s,g[w],r,o),w++),y++):(c===l?(b(t,s.node,s,g[w],r,o),P[l]=!0,y++):null!=(a=z[l])?(b(t,t.insertBefore(a.node,s&&s.node),a,g[w],r,o),P[l]=!0):b(t,s&&s.node,null,g[w],r,o),w++)}for(;y<=x;)null==v(s=h[y++])&&t.removeChild(s.node);for(var C in z)null==P[C]&&t.removeChild(z[C].node)}}return i.node=t},y=function(e,t){for(var n in e)if(e[n]!==t[n])return!0;for(var n in t)if(e[n]!==t[n])return!0},w=function(e){return"object"==typeof e?e:j(e)},k=function(e,t){return 2===e.type?((!t||!t.lazy||y(t.lazy,e.lazy))&&((t=w(e.lazy.view(e.lazy))).lazy=e.lazy),t):e},x=function(e,t,n,i,r,o){return{name:e,props:t,children:n,node:i,type:o,key:r}},j=function(t,n){return x(t,e,a,n,void 0,3)},C=function(t){return 3===t.nodeType?j(t.nodeValue,t):x(t.nodeName.toLowerCase(),e,s.call(t.childNodes,C),t,void 0,1)},{h:function(t,n){for(var i,r=[],o=[],a=arguments.length;a-- >2;)r.push(arguments[a]);for(;r.length>0;)if(c(i=r.pop()))for(var a=i.length;a-- >0;)r.push(i[a]);else!1===i||!0===i||null==i||o.push(w(i));return n=n||e,"function"==typeof t?t(n,o):x(t,n,o,void 0,n.key)},app:function(e){var t={},n=!1,i=e.view,r=e.node,o=r&&C(r),a=e.subscriptions,s=[],u=function(e){p(this.actions[e.type],e)},d=function(e){return t!==e&&(t=e,a&&(s=g(s,f([a(t)]),p)),i&&!n&&l(m,n=!0)),t},h=e.middleware,p=(void 0===h?function(e){return e}:h)(function(e,n){return"function"==typeof e?p(e(t,n)):c(e)?"function"==typeof e[0]||c(e[0])?p(e[0],"function"==typeof e[1]?e[1](n):e[1]):(f(e.slice(1)).map(function(e){e&&e[0](p,e[1])},d(e[0])),t):d(e)}),m=function(){n=!1,r=b(r.parentNode,r,o,o=w(i(t)),u)};p(e.init)}}),P=z.h,A=z.app,S=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,i=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return n.some(function(t){return t===(void 0===e?"undefined":e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e)})};if(i(n,"undefined")){if(t.props)return P(e,{},[t]);i(t,"string","number","function")||Array.isArray(t)?(n=t,t={}):i(t.View,"function")&&(n=t.View,t={})}return P(e,t,n)}},M=S("a");S("abbr"),S("address"),S("animate"),S("animateMotion"),S("animateTransform"),S("area"),S("article"),S("aside"),S("audio"),S("b"),S("base"),S("bdi"),S("bdo"),S("blockquote"),S("body"),S("br"),S("button"),S("canvas"),S("caption");var O=S("circle");S("cite"),S("clipPath"),S("code"),S("col"),S("colgroup"),S("data"),S("datalist"),S("dd"),S("defs"),S("del"),S("desc"),S("description"),S("details"),S("dfn"),S("dialog"),S("discard");var D=S("div");S("dl"),S("dt"),S("ellipse"),S("em"),S("embed"),S("feBlend"),S("feColorMatrix"),S("feComponentTransfer"),S("feComposite"),S("feConvolveMatrix"),S("feDiffuseLighting"),S("feDisplacementMap"),S("feDistantLight"),S("feDropShadow"),S("feFlood"),S("feFuncA"),S("feFuncB"),S("feFuncG"),S("feFuncR"),S("feGaussianBlur"),S("feImage"),S("feMerge"),S("feMergeNode"),S("feMorphology"),S("feOffset"),S("fePointLight"),S("feSpecularLighting"),S("feSpotLight"),S("feTile"),S("feTurbulence"),S("fieldset"),S("figcaption"),S("figure"),S("filter");var L=S("footer");S("foreignObject"),S("form");var T=S("g"),B=S("h1"),E=S("h2"),I=S("h3");S("h4"),S("h5"),S("h6"),S("hatch"),S("hatchpath"),S("head");var N=S("header");S("hgroup"),S("hr"),S("html"),S("i"),S("iframe"),S("image");var F=S("img"),_=S("input");S("ins"),S("kbd"),S("label"),S("legend");var G=S("li");S("line"),S("linearGradient"),S("link");var V=S("main");S("map"),S("mark"),S("marker"),S("mask"),S("mesh"),S("meshgradient"),S("meshpatch"),S("meshrow"),S("meta"),S("metadata"),S("meter"),S("mpath"),S("nav"),S("noscript"),S("object"),S("ol"),S("optgroup"),S("option"),S("output");var Y=S("p");S("param");var q=S("path");S("pattern");var H=S("picture");S("polygon"),S("polyline"),S("pre"),S("progress"),S("q"),S("radialGradient"),S("rb"),S("rect"),S("rp"),S("rt"),S("rtc"),S("ruby"),S("s"),S("samp"),S("script"),S("section"),S("select"),S("set"),S("small"),S("solidcolor");var K=S("source"),R=S("span");S("stop"),S("strong"),S("style"),S("sub"),S("summary"),S("sup");var U=S("svg");S("symbol"),S("table"),S("tbody"),S("td"),S("template"),S("text"),S("textPath"),S("textarea"),S("tfoot"),S("th"),S("thead"),S("time"),S("title"),S("tr"),S("track"),S("tspan"),S("u");var W=S("ul");S("unknown"),S("use"),S("video"),S("view"),S("wbr");var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"communications";return D({class:"section communications"},[E(e),W([G(["email: ",ee({to:"mailto:jascha@jaeh.at",text:"jascha@jaeh.at"})]),G(["github: ",ee({to:"https://github.com/jaeh",text:"jaeh"})]),G(["gitlab: ",ee({to:"https://gitlab.com/jaeh",text:"jaeh"})]),G(["npm: ",ee({to:"https://www.npmjs.com/~jascha",text:"jascha"})]),G(["keybase: ",ee({to:"https://keybase.io/jascha",text:"jascha"})]),G(["twitter: ",ee({to:"https://twitter.com/weirdpress",text:"weirdpress"})]),G(["mastodon: ",ee({to:"https://chaos.social/@jaeh",text:"@jaeh@chaos.social"})])])])},J=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return L({class:"Footer"},[D({class:"Container"},[[D({class:"Credits"},[R([M({class:"anarchy",href:"https://principiadiscordia.com/book/1.php",target:"allhaileris",title:"Lick here, you might be one of the lucky 23."},"Ⓐ")," 1982 - ",new Date().getFullYear()," - all rites reversed."])," made with a few bits of ",ee({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])],t])])},Q=function(e){var t=e.job,n=e.description;return N({class:"Header"},[X(),D({class:"HeaderText"},[B([ee({to:"/"},"jascha ehrenreich")]),t&&E(t),n&&D(n.map(function(e){return Y(e)}))])])},X=function(){return D({class:"HeaderImage"},[ea({alt:"",class:"Face",role:"presentation",name:"img/jascha.ehrenreich",ext:"jpg"}),ea({alt:"",class:"Body",role:"presentation",name:"img/jascha.ehrenreich.body",ext:"jpg"})])},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.languages,n=void 0===t?[]:t,i=e.url,r=e.hash,o=e.root,a=e.sep,s=void 0===a?"":a,c=e.showActive,l=void 0!==c&&c;if(n.length&&o&&i){var u=(i=i.replace(o,"/").replace(/\/\/+/g,"/")).split("/").filter(function(e){return e})[0],d=(n.find(function(e){return e.code===u})||n[0]||{code:e.language}).code;return d&&d!==e.language&&ec.changeLanguage(e,d),W({class:"LanguageSwitch"},n.filter(function(e){var t=e.code;return l||t!==d}).map(function(e,t){var o=e.to,a=void 0===o?"":o,c=e.text,u=e.code;a=(a+(i=i.replace("/".concat(d,"/"),"/"))+(r?"#".concat(r):"")).replace(/\/\/+/g,"/");var f=t+1;l||(f=t+2);var h=s&&f<n.length;return[G([ee({to:a,onclick:[ec.changeLanguage,u]},c)]),h?G(s):""]}))}},ee=function(e,t){var n=e.to,r=e.action,o=void 0===r?ec.go:r,a=e.text,s=i(e,["to","action","text"]),c=s.href,l=s.nofollow,u=s.noreferrer,d=i(s,["href","nofollow","noreferrer"]);return n=n||c||"",d.href=n,a&&t?a=[a,t]:a||(a=t||n),"/"===n[0]||"#"===n[0]?d.onclick=[o,es.preventDefault]:(d.target="_blank",d.rel="noopener",l&&(d.rel+=" nofollow"),u&&(d.rel+=" noreferrer")),M(d,a)},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return W({class:"List"},r(e).concat(r(t)).map(function(e){var t=e.name,n=e.width,i=e.height,r=e.title,o=e.to,a=e.text;return[G([t&&D(ea({width:void 0===n?60:n,height:void 0===i?60:i,name:t,ext:"png"})),r&&D([I([ee({to:o},r)]),er(a)])])]}))},en=function(e){var n=e.collapse,r=e.items,o=void 0===r?[]:r,a=e.text,s=e.url,c=i(e,["collapse","items","text","url"]),l={class:{}},u=c.to;u===s&&(l.class.active=!0);var d=[];return(!n||s.includes(u))&&o.length&&(d=W(o.map(function(e){return en(t({url:s,collapse:n},e))}))),G(l,[u?ee(c,a):R(c,a),d])},ei=function(e){var t=e.nospy,n=void 0===t?{}:t;e.cookies;var i=n.show,r=n.title,o=void 0===r?"Privacy Notice":r,a=n.content,s=void 0===a?"This app neither saves, collects, nor shares any data about you.":a,c=n.buttonText;return i?D({class:"NoSpy"},[D({class:"Background",onclick:ec.nospy.toggle}),D({class:"Container"},[o&&I(o),s&&Y(s),_({onclick:ec.nospy.toggle,value:void 0===c?"Awesome!":c,type:"button"})])]):D({class:"NoSpy"},U({class:"icon",onclick:ec.nospy.toggle,width:"25",height:"25",viewBox:"0 0 512 512"},[T([q({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),O({cx:"192",cy:"128",r:"32"}),O({cx:"128",cy:"256",r:"32"}),O({cx:"288",cy:"384",r:"32"}),O({cx:"272",cy:"272",r:"16"}),O({cx:"400",cy:"336",r:"16"}),O({cx:"176",cy:"368",r:"16"})])]))},er=function(e){("string"==typeof e||Array.isArray(e))&&(e={text:e});var t=e.text,n=e.class,i=void 0===n?"P":n;return(i&&"P"!==i&&!i.includes("P ")&&(i="P ".concat(i)),Array.isArray(t))?D({class:i},t.map(function(e){return Y(e)})):Y({class:i},t)},eo=function(e,t){var n=e.page,i=e.state;return V({id:"Magic",class:i.pageClass},D({class:{Wrapper:!0}},[Q(i),D({class:"Page",id:"page"},n(i)),J(i),t]))},ea=function(e){var t=e.ext,n=e.imgClass,i=e.width,r=e.height,o=e.alt,a=void 0===o?"":o,s=e.role,c=e.lazy,l=e.avif,u=e.name,d={};return e.class?(d.class=e.class,d.class.includes("Picture")||(d.class="Picture ".concat(d.class))):d.class="Picture",H(d,[(void 0===l||l)&&K({type:"image/avif",srcset:"/".concat(u,".avif")}),K({type:"image/webp",srcset:"/".concat(u,".webp")}),F({class:void 0===n?"":n,width:i,height:r,loading:(void 0===c||c)&&"lazy",alt:a,role:s||!a&&"presentation",src:"/".concat(u,".").concat(void 0===t?"jpg":t)})])},es={preventDefault:function(e){return e.preventDefault(),e}},ec={changeLanguage:function(e,i){return n(t({},e),{language:i})},changeTheme:function(e){return n(t({},e),{pageClass:n(t({},e.pageClass),{light:"dark"===e.theme}),theme:"dark"===e.theme?"light":"dark"})},go:function(e,i){var r,a=i.currentTarget.href.replace(window.location.origin,""),s=function(e){if(Array.isArray(e))return e}(r=a.split("#"))||function(e,t){var n,i,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}}(r,2)||o(r,2)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),c=s[0],l=s[1],u=void 0===l?"":l;if(c===e.url&&u===e.hash)return u&&(window.location.hash=u),e;var d=e.pages&&e.pages[c]&&e.pages[c].title;d&&(document.title=e.title=d),c!==e.url?u||window.scrollTo({top:0}):window.location.hash=u;var f=window.scrollY;return window.history.pushState({url:c,hash:u,scrollY:f},e.title,a),n(t({},e),{url:c,hash:u,prev:e.url})},nospy:{toggle:function(e){return e.nospy.show=!e.nospy.show,t({},e)}},pop:function(e,i){var r=window.location,o=r.pathname,a=r.hash;a=a.substring(1);var s=0;return i.state&&(o=i.state.url,a=i.state.hash,s=i.state.scrollY||0),a?window.location.hash=a:window.scroll({top:s}),n(t({},e),{url:o,hash:a})}},el={listenPopState:function(e,t){var n=function(n){return e(t,n)};return addEventListener("popstate",n),function(){return removeEventListener("popstate",n)}}},eu={"/":function(e){return[$(),D({class:"section congregations"},[E("congregations"),et([{name:"img/occupations/artificialmuseum",title:"TheSystemCollective",to:"https://thesystem.at",text:["artist collective, building the Artificial Museum.","our mission is to create, procure, research, disseminate and conserve (digital) art."]},{name:"img/congregations/metalab",title:"metalab",to:"https://metalab.at",text:"a hack/make space in vienna, austria."},{name:"img/congregations/bwb",title:"bitcoiners without borders",to:"https://bwb.is",text:[["is a ",ee({text:"DAO",title:"(decentralized autonomous organization)",to:"https://en.wikipedia.org/wiki/Decentralized_Autonomous_Organization"})," founded in 2011, working in and on decentralized systems."]]}])]),D({class:"section occupations"},[E("occupations"),et([{name:"img/occupations/artificialmuseum",title:"Artificial Museum",to:"https://artificialmuseum.com",text:["web-based augmented reality museum in worldwide public space."]},{name:"img/occupations/magic",title:"magic",to:"https://magic.github.io",text:["jsomorphic jamstack generator, builds static html and css files."]},{name:"img/occupations/grundstein",title:"grundstein",to:"https://grundstein.github.io/",text:["the services provided by grundstein allow hosting of static pages, apis, osc, websocket and streaming of video and audio files.","opinionated and purpose-built for magic, webboot and the Artificial Museum."]},{name:"img/occupations/webboot",height:47,title:"webboot",to:"https://webboot.org",text:"a source of integrity for the web. unfinished. open source. dormant. contributions and feedback very welcome."}])])]},"/404/":function(e){return[I(e.title),Y(e.description),Y([ee({text:"click here",to:"/"})," to get back to safety"])]},"/de/":function(){return[$("kommunikation"),D({class:"section congregations"},[E("kongregation"),et([{src:"/img/congregations/thesystemcollective.png",title:"SystemKollektiv",to:"https://thesystem.at",text:["k\xfcnstlerinnenkollektiv, wir errichten das Artificial Museum.","unsere aufgabe ist die erschaffung, beschaffung, erforschung, verbreitung und bewahrung von (digitaler) kunst."]},{src:"/img/congregations/metalab.png",title:"metalab",to:"https://metalab.at",text:"ein hack/make space in wien, \xf6sterreich."},{src:"/img/congregations/bwb.png",title:"bitcoiners without borders",to:"https://bwb.is",text:[["eine ",ee({text:"DAO",title:"(dezentrale autonome organisation)",to:"https://en.wikipedia.org/wiki/Decentralized_Autonomous_Organization"}),", gegr\xfcndet 2011. wir arbeiten in und an dezentralen systemen."]]}])]),D({class:"section occupations"},[E("okkupation"),et([{src:"/img/occupations/artificialmuseum.png",title:"Artificial Museum",to:"https://artificialmuseum.com",text:"web-basiertes augmented reality museum im weltweiten \xf6ffentlichen raum."},{src:"/img/occupations/magic.png",title:"@magic",to:"https://github.com/magic/core/",text:["jsomorphischer jamstack generator. javascript, apis und markup.","generiert statisches html und css, addiert eine kleine menge javascript (~10kb), welches reaktive webapplikationen erm\xf6glicht."]},{src:"/img/occupations/grundstein.png",title:"@grundstein",to:"https://grundstein.github.io/",text:[["server framework, erwartet ein debian / ubuntu basiertes linux"," bash und ssh auf dem server,"," alles andere wird via konfiguration deklariert"," und von grundstein automatisiert installiert und gestartet."],"die von grundstein bereitgestellten services erlauben das hosten von statischen seiten, apis, optional sind osc, websocket sowie streaming (video und audio) m\xf6glich.","grundstein ist spezialisiert auf die bed\xfcrfnisse von magic, webboot und dem Artificial Museum."]},{src:"/img/occupations/webboot.png",title:"@webboot",to:"https://webboot.org",text:"eine quelle von integrit\xe4t f\xfcr das netz. unfertig. freie software. kontaktiere mich einfach, wenn du dran hacken willst."}])])]},"/de/404/":function(e){return[I(e.title),Y(e.description),Y(ee({text:"klicke hier",to:"/"}))]}};A({init:n(t({},{description:["i juggle with code since twenty,","with cones, balls and rings since thirty,","and life juggles with me since around forty years.","i enjoy all of it."],job:"technomancer",language:"",languages:[{code:"en",text:"english",to:"/"},{code:"de",text:"deutsch",to:"/de/"}],nospy:{show:!1},pageClass:{},pages:{"/":{description:["i juggle with code since twenty,","with cones, balls and rings since thirty,","and life juggles with me since around forty years.","i enjoy all of it."],job:"technomancer and artivist"},"/404/":{description:["i juggle with code since eighteen,","with cones, balls and rings since twentyeight,","and life juggles with me since around thirtyeight years.","i enjoy all of it."],title:"404 - not found"},"/de/":{description:["ich jongliere mit code seit zwanzig,","mit keulen, b\xe4llen und ringen seit dreissig","und das leben mit mir seit etwa vierzig jahren.","ich geniesse das alles."],job:"technomant und artivist",lang:"de"},"/de/404/":{description:["ich jongliere mit code seit zwanzig,","mit keulen, b\xe4llen und ringen seit dreissig","und das leben mit mir seit etwa vierzig jahren.","ich geniesse das alles."],job:"technomant",lang:"de",title:"404 - nicht gefunden"}},root:"/",theme:"dark",title:"jaeh - jascha ehrenreich",url:"/"}),{url:window.location.pathname,hash:window.location.hash.substr(1)}),subscriptions:function(e){return[[el.listenPopState,ec.pop]]},view:function(e){var t=eu[e.url]?e.url:"/404/",n=eu[t],i=e.pages&&e.pages[t];return i&&Object.keys(i).forEach(function(t){e[t]=i[t]}),e.url=t,eo({page:n,state:e},[Z(e),function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],U({class:"LightSwitch icon",onclick:ec.changeTheme,height:25,width:25,viewBox:"0 0 352 460"},[q({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),q({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),q({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})])}(e),ei(e)])},node:document.getElementById("Magic")})}();