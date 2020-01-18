/*! For license information please see 44ec2d14.20820ecf.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return f}));var n=r(1),o=r(9),a=(r(179),r(177)),u={id:"transform",title:"JS Transforms (Transpilation)",sidebar_label:"Babel Transforms"},i=[{value:"babel-plugin-fbt",id:"babel-plugin-fbt",children:[]},{value:"babel-plugin-fbt-runtime",id:"babel-plugin-fbt-runtime",children:[{value:"Why are there 2 transforms?",id:"why-are-there-2-transforms",children:[]}]}],l={rightToc:i},c="wrapper";function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)(c,Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The fbt comes with 2 babel transforms."),Object(a.b)("h2",{id:"babel-plugin-fbt"},"babel-plugin-fbt"),Object(a.b)("p",null,"The first is the ",Object(a.b)("inlineCode",{parentName:"p"},"babel-plugin-fbt"),".  Internally, it first transforms ",Object(a.b)("inlineCode",{parentName:"p"},"<fbt>")," instances into their ",Object(a.b)("inlineCode",{parentName:"p"},"fbt(...)")," equivalent.  After which, it turns all ",Object(a.b)("inlineCode",{parentName:"p"},"fbt(...)")," calls into ",Object(a.b)("inlineCode",{parentName:"p"},"fbt._(...)")," calls with an intermediary payload as the first argument, and the runtime arguments to be passed in."),Object(a.b)("h2",{id:"babel-plugin-fbt-runtime"},"babel-plugin-fbt-runtime"),Object(a.b)("p",null,"This transform takes the intermediary payload and turns it into the object that the ",Object(a.b)("inlineCode",{parentName:"p"},"fbt._(...)")," runtime expects."),Object(a.b)("h3",{id:"why-are-there-2-transforms"},"Why are there 2 transforms?"),Object(a.b)("p",null,"Internally, Facebook actually consumes the output of the ",Object(a.b)("inlineCode",{parentName:"p"},"babel-plugin-fbt")," at\nbuild-time.  We search for ",Object(a.b)("inlineCode",{parentName:"p"},"__FBT__")," sentinels, generate an identifier (hash)\nfor the FBT payload, and store it for lookup later after generating the\ntranslated payload in a separate process.  At resource request time, we lookup\nthe ",Object(a.b)("inlineCode",{parentName:"p"},"payload identifier + locale")," and replace the identifier inline in source\nwith the translated payload. Conceptually, we're performing the\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookincubator/fbt/blob/master/runtime/nonfb/FbtTranslations.js"}),Object(a.b)("inlineCode",{parentName:"a"},"FbtTranslations")),"\nlookup, but on the server-side before serving the JS resource."))}f.isMDXComponent=!0},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s}));var n=r(0),o=r.n(n),a=o.a.createContext({}),u=function(e){var t=o.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},i=function(e){var t=u(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),f=u(r),s=n,p=f[i+"."+s]||f[s]||c[s]||a;return r?o.a.createElement(p,Object.assign({},{ref:t},l,{components:r})):o.a.createElement(p,Object.assign({},{ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:n,u[1]=i;for(var s=2;s<a;s++)u[s]=r[s];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},179:function(e,t,r){"use strict";e.exports=r(180)},180:function(e,t,r){"use strict";var n=r(181),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var y=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}function O(){}function w(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=j.prototype;var S=w.prototype=new O;S.constructor=w,n(S,j.prototype),S.isPureReactComponent=!0;var _={current:null},C={current:null},k=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},u=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)k.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),f=0;f<l;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:u,ref:i,props:o,_owner:C.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g,$=[];function R(e,t,r,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function A(e,t,r){return null==e?0:function e(t,r,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case u:l=!0}}if(l)return n(o,t,""===r?"."+F(t,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(t))for(var c=0;c<t.length;c++){var f=r+F(i=t[c],c);l+=e(i,f,n,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=m&&t[m]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),c=0;!(i=t.next()).done;)l+=e(i=i.value,f=r+F(i,c++),n,o);else if("object"===i)throw n=""+t,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return l}(e,"",t,r)}function F(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,n,r,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+r)),n.push(e))}function M(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(P,"$&/")+"/"),A(e,q,t=R(t,a,n,o)),N(t)}function D(){var e=_.current;if(null===e)throw Error(h(321));return e}var U={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return M(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;A(e,I,t=R(null,null,t,r)),N(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!T(e))throw Error(h(143));return e}},createRef:function(){return{current:null}},Component:j,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return D().useCallback(e,t)},useContext:function(e,t){return D().useContext(e,t)},useEffect:function(e,t){return D().useEffect(e,t)},useImperativeHandle:function(e,t,r){return D().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return D().useLayoutEffect(e,t)},useMemo:function(e,t){return D().useMemo(e,t)},useReducer:function(e,t,r){return D().useReducer(e,t,r)},useRef:function(e){return D().useRef(e)},useState:function(e){return D().useState(e)},Fragment:i,Profiler:c,StrictMode:l,Suspense:b,createElement:E,cloneElement:function(e,t,r){if(null==e)throw Error(h(267,e));var o=n({},e.props),u=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=C.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(f in t)k.call(t,f)&&!x.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==c?c[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){c=Array(f);for(var s=0;s<f;s++)c[s]=arguments[s+2];o.children=c}return{$$typeof:a,type:e.type,key:u,ref:i,props:o,_owner:l}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:T,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:_,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:n}},B={default:U},L=B&&U||B;e.exports=L.default||L},181:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,i,l=u(e),c=1;c<arguments.length;c++){for(var f in r=Object(arguments[c]))o.call(r,f)&&(l[f]=r[f]);if(n){i=n(r);for(var s=0;s<i.length;s++)a.call(r,i[s])&&(l[i[s]]=r[i[s]])}}return l}}}]);