(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"7eYB":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r=l(n("q1tI")),o=l(n("Xuae")),a=n("lwAK"),i=n("FYa8"),c=n("/0+H");function l(e){return e&&e.__esModule?e:{default:e}}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,l=f.length;c<l;c++){var u=f[c];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var s=o.props[u],d=r[u]||new Set;d.has(s)?a=!1:(d.add(s),r[u]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,o.default)();function m(e){var t=e.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:(0,c.isInAmpMode)(e)},t)}))})))}m.rewind=p.rewind;var b=m;t.default=b},"97Is":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n("uNx/")}])},"C+bE":function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=o},KckH:function(e,t,n){var r=n("7eYB");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},Sa42:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI"),o=n.n(r).a.createElement;function a(){return o("div",null,o("div",{className:"bg-white border-t border-gray-300 border-solid"},o("div",{className:"container block py-1 mx-auto lg:flex"},o("div",null,o("a",{href:"https://www.infoq.com/",target:"_blank",className:"block p-3 px-6 text-sm font-semibold text-center text-black border-solid lg:inline-block lg:text-left lg:border-0"},"InfoQ.com"),o("a",{href:"https://www.infoq.com/privacy-notice/",className:"block p-3 px-6 text-sm font-semibold text-center text-black border-t border-gray-300 border-solid lg:inline-block lg:text-left lg:border-0",target:"_blank"},"Privacy Policy"),o("a",{href:"https://www.infoq.com/cookie-policy/",className:"block p-3 px-6 text-sm font-semibold text-center text-black border-t border-gray-300 border-solid lg:inline-block lg:text-left lg:border-0",target:"_blank"},"Cookie Policy"),o("a",{href:"https://www.infoq.com/terms-and-conditions/",className:"block p-3 px-6 text-sm font-semibold text-center text-black border-t border-gray-300 border-solid lg:inline-block lg:text-left lg:border-0",target:"_blank"},"Terms & Conditions")),o("div",{className:"flex-1 text-center border-t border-gray-300 border-solid lg:text-right lg:border-0"},o("a",{href:"mailto:events@infoq.com",target:"_blank",className:"block p-3 px-6 text-sm font-semibold text-black lg:inline-block"},"Contact InfoQ")))))}},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),a=n("i2R6"),i=n("48fX"),c=n("tCBg"),l=n("T0f4"),u=n("mPvQ");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(u(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(c){i(u,c);var l=s(u);function u(e){var a;return r(this,u),a=l.call(this,e),d&&(t.add(o(a)),n(o(a))),a}return a(u,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(u,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(f.Component))}},i2R6:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},qhzo:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},rtDh:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),c=o.a.createElement;function l(e){var t=e.title;return c(i.a,null,c("title",null,t),c("meta",{name:"twitter:card",content:"summary_large_image"}),c("meta",{name:"Description",content:"Discover events for senior software practitioners by senior software practitioners"}),c("meta",{name:"og:title",content:"InfoQ Events - Discover events for senior software practitioners by senior software practitioners"}),c("meta",{name:"og:description",content:"Discover events for senior software practitioners by senior software practitioners"}),c("meta",{property:"og:image",content:"https://milestojanovic3.github.io/events-list/static/default-og.jpg"}),c("link",{rel:"icon",href:"./static/qcon-favicon.ico"}))}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},"uNx/":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n("q1tI"),o=n.n(r),a=n("rtDh"),i=n("Sa42"),c=o.a.createElement;function l(){return c("div",null,c(a.a,{title:"InfoQ Events - Sorry We Can't Find That Page!"}),c("header",{className:"fixed z-50 flex items-center justify-between w-full px-2 py-3 bg-white md:p-3 shadow-line"},c("div",{className:"items-center justify-between flex-1 px-4 py-2 pl-0 pr-2 lg:flex-none xl:px-8 lg:pl-4 md:pr-4"},c("a",{href:"/"},c("img",{className:"h-8 md:h-10 xl:h-10",src:"./static/images/InfoQ-events-logo-black.svg",alt:"CTOQ Logo"})))),c("section",{className:"flex items-center content-center justify-center w-full h-screen px-4 pt-20 pb-48 text-center bg-gray-200 notfound-page"},c("div",{className:"container mx-auto"},c("img",{src:"./static/images/404.svg",className:"mx-auto notFound-image"}),c("h1",{className:"text-5xl font-bold leading-tight"},"Sorry We Can't Find That Page!"),c("p",{className:"max-w-screen-md mx-auto mt-4 mb-10 text-xl"},"The page you are looking for was moved, removed, renamed or never existed."),c("a",{href:"/",className:"px-12 py-4 font-mono text-base font-bold text-white rounded shadow-lg bg-webBlue hover:no-underline"},"Back to home"))),c(i.a,null))}}},[["97Is",0,1]]]);