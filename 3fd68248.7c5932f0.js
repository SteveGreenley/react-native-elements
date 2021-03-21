(window.webpackJsonp=window.webpackJsonp||[]).push([[50,64],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return j}));var a=n(3),r=n(7),b=(n(0),n(264)),c=n(265),i=n(71),l={id:"pricing",title:"Pricing"},o={unversionedId:"pricing",id:"pricing",isDocsHomePage:!1,title:"Pricing",description:"Pricing is a convenience component used to display features and pricing tables",source:"@site/docs/pricing.md",slug:"/pricing",permalink:"/docs/next/pricing",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/pricing.md",version:"current",sidebar:"docs",previous:{title:"Overlay",permalink:"/docs/next/overlay"},next:{title:"Rating",permalink:"/docs/next/rating"}},p=[{value:"Usage",id:"usage",children:[]}],O={rightToc:p};function j(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Pricing is a convenience component used to display features and pricing tables\nin a beautiful and engaging way."),Object(b.b)("img",{alt:"Pricing Component",src:Object(c.a)("img/pricing.png")}),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { PricingCard } from 'react-native-elements';\n\n<PricingCard\n  color=\"#4f9deb\"\n  title=\"Free\"\n  price=\"$0\"\n  info={['1 User', 'Basic Support', 'All Core Features']}\n  button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}\n/>;\n")),Object(b.b)("hr",null),Object(b.b)(i.default,{mdxType:"Props"}),Object(b.b)("hr",null))}j.isMDXComponent=!0},264:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},O=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),O=p(n),d=a,u=O["".concat(c,".").concat(d)]||O[d]||j[d]||b;return n?r.a.createElement(u,i(i({ref:t},o),{},{components:n})):r.a.createElement(u,i({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var o=2;o<b;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},265:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return c}));var a=n(22),r=n(266);function b(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,b=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var b=void 0===a?{}:a,c=b.forcePrependBaseUrl,i=void 0!==c&&c,l=b.absolute,o=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(i)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+p:p}(b,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,b().withBaseUrl)(e,t)}},266:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),b=(n(0),n(264)),c={},i={unversionedId:"props/pricing",id:"props/pricing",isDocsHomePage:!1,title:"pricing",description:"Props",source:"@site/docs/props/pricing.md",slug:"/props/pricing",permalink:"/docs/next/props/pricing",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/props/pricing.md",version:"current"},l=[{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>button</code>",id:"button",children:[]},{value:"<code>color</code>",id:"color",children:[]},{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>info</code>",id:"info",children:[]},{value:"<code>infoStyle</code>",id:"infostyle",children:[]},{value:"<code>onButtonPress</code>",id:"onbuttonpress",children:[]},{value:"<code>price</code>",id:"price",children:[]},{value:"<code>pricingStyle</code>",id:"pricingstyle",children:[]},{value:"<code>title</code>",id:"title",children:[]},{value:"<code>titleStyle</code>",id:"titlestyle",children:[]},{value:"<code>wrapperStyle</code>",id:"wrapperstyle",children:[]}]}],o={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#button"}),Object(b.b)("inlineCode",{parentName:"a"},"button"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#buttonfont"}),Object(b.b)("inlineCode",{parentName:"a"},"buttonFont"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#color"}),Object(b.b)("inlineCode",{parentName:"a"},"color"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#containerstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#info"}),Object(b.b)("inlineCode",{parentName:"a"},"info"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#infofont"}),Object(b.b)("inlineCode",{parentName:"a"},"infoFont"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#onbuttonpress"}),Object(b.b)("inlineCode",{parentName:"a"},"onButtonPress"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#price"}),Object(b.b)("inlineCode",{parentName:"a"},"price"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#pricingfont"}),Object(b.b)("inlineCode",{parentName:"a"},"pricingFont"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#title"}),Object(b.b)("inlineCode",{parentName:"a"},"title"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#titlefont"}),Object(b.b)("inlineCode",{parentName:"a"},"titleFont"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#wrapperstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"wrapperStyle")))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"reference"},"Reference"),Object(b.b)("h3",{id:"button"},Object(b.b)("inlineCode",{parentName:"h3"},"button")),Object(b.b)("p",null,"button information (required)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"{",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/next/props/button#props"}),"...Button props"),"}",Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"OR"),Object(b.b)("br",null)," component"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"color"},Object(b.b)("inlineCode",{parentName:"h3"},"color")),Object(b.b)("p",null,"color scheme for button & title"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"containerstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(b.b)("p",null,"outer component styling (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"inherited styling")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"info"},Object(b.b)("inlineCode",{parentName:"h3"},"info")),Object(b.b)("p",null,"pricing information (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"array of strings"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"infostyle"},Object(b.b)("inlineCode",{parentName:"h3"},"infoStyle")),Object(b.b)("p",null,"specify pricing information style"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"style (object)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onbuttonpress"},Object(b.b)("inlineCode",{parentName:"h3"},"onButtonPress")),Object(b.b)("p",null,"function to be run when button is pressed"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"any"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"price"},Object(b.b)("inlineCode",{parentName:"h3"},"price")),Object(b.b)("p",null,"price (required)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"pricingstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"pricingStyle")),Object(b.b)("p",null,"specify pricing text style"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"style (object)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"title"},Object(b.b)("inlineCode",{parentName:"h3"},"title")),Object(b.b)("p",null,"title (required)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"titlestyle"},Object(b.b)("inlineCode",{parentName:"h3"},"titleStyle")),Object(b.b)("p",null,"specify title text style"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"style (object)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"wrapperstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"wrapperStyle")),Object(b.b)("p",null,"inner wrapper component styling (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"inherited styling")))))}p.isMDXComponent=!0}}]);