/*! For license information please see de6ece39.8d3f5296.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return f}));var r=n(1),o=n(9),a=(n(170),n(169)),u={id:"plurals",title:"Plurals",sidebar_label:"Plurals"},l={id:"plurals",title:"Plurals",description:"`fbt:plural` provides you with a shorthand way for plural variations.\r",source:"@site/..\\docs\\plurals.md",permalink:"/fbt/docs/plurals",lastUpdatedBy:"David Cho-Lerat",lastUpdatedAt:1546619094,sidebar_label:"Plurals",sidebar:"docs",previous:{title:"Implicit parameters",permalink:"/fbt/docs/implicit_params"},next:{title:"Enumerations",permalink:"/fbt/docs/enums"}},i=[],c={rightToc:i},p="wrapper";function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(p,Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"fbt:plural")," provides you with a shorthand way for plural variations."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'<fbt desc="plural example">\n  You have\n  <fbt:plural\n    count={getLikeCount()}\n    name="number of likes"\n    showCount="ifMany"\n    many="likes">\n     a like\n  </fbt:plural>\n  on your\n  <fbt:plural\n    count={getPhotoCount()}\n    showCount="no">\n     photo\n  </fbt:plural>.\n</fbt>\n')),Object(a.b)("p",null,"OR"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"fbt(\n  'You have ' +\n    fbt.plural('a like', getLikeCount(), {\n      name: 'number of likes,\n      showCount: 'ifMany',\n      many: 'likes',\n    }) +\n    ' on your ' +\n    fbt.plural('photo', getPhotoCount()),\n  'plural example',\n);\n")),Object(a.b)("p",null,"Both the above examples generate the following during ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"collection"}),"collection"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'"phrases": [\n  {\n    "hashToText": {\n      "bae7d2f1abd57d08a9dca0b5d05edee8": "You have {number of likes} likes on your photos",\n      "3306b396e08398f28d921b46039f008c": "You have {number of likes} likes on your photo",\n      "c9e4b5b48f38634ffecaf34956a4b186": "You have a like on your photos",\n      "cb49d6d764ea8aabdca0e9db7f10ba34": "You have a like on your photo"\n    },\n    "type": "table",\n    "desc": "plural example",\n    ...\n  }\n]\n')),Object(a.b)("h4",{id:"required-arguments"},"Required arguments:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"singular phrase")," ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": JSX child in ",Object(a.b)("inlineCode",{parentName:"li"},"<fbt:plural>")," and argument 1 in ",Object(a.b)("inlineCode",{parentName:"li"},"fbt.plural")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"count")," ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": ",Object(a.b)("inlineCode",{parentName:"li"},"count")," in ",Object(a.b)("inlineCode",{parentName:"li"},"<fbt:plural>")," and argument 2 in ",Object(a.b)("inlineCode",{parentName:"li"},"fbt.plural"))),Object(a.b)("h4",{id:"optional-arguments"},"Optional arguments:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"many")," ",Object(a.b)("inlineCode",{parentName:"p"},"string"),": Represents the plural form of the string in English.  Default is ",Object(a.b)("inlineCode",{parentName:"p"},"{singular} + 's'"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"showCount")," ",Object(a.b)("inlineCode",{parentName:"p"},'"yes"|"no"|"ifMany"'),": Whether to show the ",Object(a.b)("inlineCode",{parentName:"p"},"{number}")," in the string.",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("em",{parentName:"p"},"Note that the singular phrase never has a token, but inlines to ",Object(a.b)("inlineCode",{parentName:"em"},"1"),". This is to account for languages like Hebrew for which showing the actual number isn't appropriate")),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},'"no"'),": (",Object(a.b)("em",{parentName:"li"},"DEFAULT"),") Don't show the count"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},'"ifMany"'),": Show the count only in plural case"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},'"yes"'),": Show the count in all cases"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"name")," ",Object(a.b)("inlineCode",{parentName:"p"},"string"),": Name of the token where count shows up. (",Object(a.b)("em",{parentName:"p"},"Default"),": ",Object(a.b)("inlineCode",{parentName:"p"},'"number"'),") ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"value")," ",Object(a.b)("inlineCode",{parentName:"p"},"mixed"),": For overriding the displayed ",Object(a.b)("inlineCode",{parentName:"p"},"number")))))}f.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r),a=o.a.createContext({}),u=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=u(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var i="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,s=p[l+"."+f]||p[f]||c[f]||a;return n?o.a.createElement(s,Object.assign({},{ref:t},i,{components:n})):o.a.createElement(s,Object.assign({},{ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[i]="string"==typeof e?e:r,u[1]=l;for(var f=2;f<a;f++)u[f]=n[f];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},170:function(e,t,n){"use strict";e.exports=n(171)},171:function(e,t,n){"use strict";var r=n(172),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var m=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var y="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function v(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}function g(){}function w(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var N=w.prototype=new g;N.constructor=w,r(N,v.prototype),N.isPureReactComponent=!0;var C={current:null},k={current:null},S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,o={},u=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(u=""+t.key),t)S.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var c=Array(i),p=0;p<i;p++)c[p]=arguments[p+2];o.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:a,type:e,key:u,ref:l,props:o,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g,R=[];function $(e,t,n,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function M(e,t,n){return null==e?0:function e(t,n,r,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var i=!1;if(null===t)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case a:case u:i=!0}}if(i)return r(o,t,""===n?"."+A(t,0):n),1;if(i=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var p=n+A(l=t[c],c);i+=e(l,p,r,o)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=y&&t[y]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),c=0;!(l=t.next()).done;)i+=e(l=l.value,p=n+A(l,c++),r,o);else if("object"===l)throw r=""+t,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return i}(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,r,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function U(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(P,"$&/")+"/"),M(e,L,t=$(t,a,r,o)),T(t)}function q(){var e=C.current;if(null===e)throw Error(h(321));return e}var I={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return U(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;M(e,D,t=$(null,null,t,n)),T(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw Error(h(143));return e}},createRef:function(){return{current:null}},Component:v,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:s,render:e}},lazy:function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return q().useCallback(e,t)},useContext:function(e,t){return q().useContext(e,t)},useEffect:function(e,t){return q().useEffect(e,t)},useImperativeHandle:function(e,t,n){return q().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return q().useLayoutEffect(e,t)},useMemo:function(e,t){return q().useMemo(e,t)},useReducer:function(e,t,n){return q().useReducer(e,t,n)},useRef:function(e){return q().useRef(e)},useState:function(e){return q().useState(e)},Fragment:l,Profiler:c,StrictMode:i,Suspense:b,createElement:_,cloneElement:function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),u=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=k.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(p in t)S.call(t,p)&&!x.hasOwnProperty(p)&&(o[p]=void 0===t[p]&&void 0!==c?c[p]:t[p])}var p=arguments.length-2;if(1===p)o.children=n;else if(1<p){c=Array(p);for(var f=0;f<p;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:a,type:e.type,key:u,ref:l,props:o,_owner:i}},createFactory:function(e){var t=_.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.12.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r}},F={default:I},Y=F&&I||F;e.exports=Y.default||Y},172:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,l,i=u(e),c=1;c<arguments.length;c++){for(var p in n=Object(arguments[c]))o.call(n,p)&&(i[p]=n[p]);if(r){l=r(n);for(var f=0;f<l.length;f++)a.call(n,l[f])&&(i[l[f]]=n[l[f]])}}return i}}}]);