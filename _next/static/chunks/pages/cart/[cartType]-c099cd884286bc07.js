(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[711],{8584:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart/[cartType]",function(){return r(1571)}])},9749:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(l){c=!0,i=l}finally{try{o||null==r.return||r.return()}finally{if(c)throw i}}return a}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,r=e.sizes,n=e.unoptimized,c=void 0!==n&&n,l=e.priority,u=void 0!==l&&l,g=e.loading,h=e.lazyRoot,S=void 0===h?null:h,z=e.lazyBoundary,k=void 0===z?"200px":z,P=e.className,E=e.quality,N=e.width,C=e.height,R=e.style,W=e.objectFit,L=e.objectPosition,M=e.onLoadingComplete,q=e.placeholder,T=void 0===q?"empty":q,D=e.blurDataURL,B=b(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),F=s.useContext(m.ImageConfigContext),U=s.useMemo((function(){var e=v||F||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),r=e.deviceSizes.sort((function(e,t){return e-t}));return y({},e,{allSizes:t,deviceSizes:r})}),[F]),V=B,H=r?"responsive":"intrinsic";"layout"in V&&(V.layout&&(H=V.layout),delete V.layout);var G=A;if("loader"in V){if(V.loader){var J=V.loader;G=function(e){e.config;var t=b(e,["config"]);return J(t)}}delete V.loader}var X="";if(function(e){return"object"===typeof e&&(_(e)||function(e){return void 0!==e.src}(e))}(t)){var K=_(t)?t.default:t;if(!K.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(D=D||K.blurDataURL,X=K.src,(!H||"fill"!==H)&&(C=C||K.height,N=N||K.width,!K.height||!K.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}t="string"===typeof t?t:X;var Y=I(N),$=I(C),Q=I(E),Z=!u&&("lazy"===g||"undefined"===typeof g);(t.startsWith("data:")||t.startsWith("blob:"))&&(c=!0,Z=!1);w.has(t)&&(Z=!1);var ee,te=a(s.useState(!1),2),re=te[0],ne=te[1],ie=a(p.useIntersection({rootRef:S,rootMargin:k,disabled:!Z}),3),ae=ie[0],oe=ie[1],ce=ie[2],le=!Z||oe,ue={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:W,objectPosition:L};0;0;var pe=Object.assign({},R,"raw"===H?{}:fe),me="blur"!==T||re?{}:{filter:"blur(20px)",backgroundSize:W||"cover",backgroundImage:'url("'.concat(D,'")'),backgroundPosition:L||"0% 0%"};if("fill"===H)ue.display="block",ue.position="absolute",ue.top=0,ue.left=0,ue.bottom=0,ue.right=0;else if("undefined"!==typeof Y&&"undefined"!==typeof $){var ge=$/Y,he=isNaN(ge)?"100%":"".concat(100*ge,"%");"responsive"===H?(ue.display="block",ue.position="relative",de=!0,se.paddingTop=he):"intrinsic"===H?(ue.display="inline-block",ue.position="relative",ue.maxWidth="100%",de=!0,se.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Y,"%27%20height=%27").concat($,"%27/%3e")):"fixed"===H&&(ue.display="inline-block",ue.position="relative",ue.width=Y,ue.height=$)}else 0;var ye={src:j,srcSet:void 0,sizes:void 0};le&&(ye=x({config:U,src:t,unoptimized:c,layout:H,width:Y,quality:Q,sizes:r,loader:G}));var be=t;0;var ve,we="imagesrcset",je="imagesizes";we="imageSrcSet",je="imageSizes";var Se=(i(ve={},we,ye.srcSet),i(ve,je,ye.sizes),ve),_e=s.default.useLayoutEffect,xe=s.useRef(M),Ie=s.useRef(t);s.useEffect((function(){xe.current=M}),[M]),_e((function(){Ie.current!==t&&(ce(),Ie.current=t)}),[ce,t]);var Ae=y({isLazy:Z,imgAttributes:ye,heightInt:$,widthInt:Y,qualityInt:Q,layout:H,className:P,imgStyle:pe,blurStyle:me,loading:g,config:U,unoptimized:c,placeholder:T,loader:G,srcString:be,onLoadingCompleteRef:xe,setBlurComplete:ne,setIntersection:ae,isVisible:le},V);return s.default.createElement(s.default.Fragment,null,"raw"===H?s.default.createElement(O,Object.assign({},Ae)):s.default.createElement("span",{style:ue},de?s.default.createElement("span",{style:se},ee?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,s.default.createElement(O,Object.assign({},Ae))),u?s.default.createElement(d.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},Se))):null)};var l,u,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),d=(l=r(3121))&&l.__esModule?l:{default:l},f=r(139),p=r(9246),m=r(8730),g=(r(670),r(2700));function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){h(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}function b(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1},w=new Set,j=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var S=new Map([["default",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality;0;if(r.endsWith(".svg")&&!t.dangerouslyAllowSVG)return r;return"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality,a=new URL("".concat(t.path).concat(k(r))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||n.toString()),i&&o.set("q",i.toString());return a.href}],["cloudinary",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality,a=["f_auto","c_limit","w_"+n,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(a).concat(k(r))}],["akamai",function(e){var t=e.config,r=e.src,n=e.width;return"".concat(t.path).concat(k(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function _(e){return void 0!==e.default}function x(e){var t=e.config,r=e.src,n=e.unoptimized,i=e.layout,a=e.width,c=e.quality,l=e.sizes,u=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var s=function(e,t,r,n){var i=e.deviceSizes,a=e.allSizes;if(n&&("fill"===r||"responsive"===r||"raw"===r)){for(var c,l=/(^|\s)(1?\d?\d)vw/g,u=[];c=l.exec(n);c)u.push(parseInt(c[2]));if(u.length){var s,d=.01*(s=Math).min.apply(s,o(u));return{widths:a.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===r||"responsive"===r?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,i,l),d=s.widths,f=s.kind,p=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(e,n){return"".concat(u({config:t,src:r,quality:c,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:u({config:t,src:r,quality:c,width:d[p]})}}function I(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t,r=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",n=S.get(r);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(r))}function z(e,t,r,n,i,a){e&&e.src!==j&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(w.add(t),"blur"===n&&a(!0),null===i||void 0===i?void 0:i.current)){var r=e.naturalWidth,o=e.naturalHeight;i.current({naturalWidth:r,naturalHeight:o})}})))}var O=function(e){var t=e.imgAttributes,r=e.heightInt,n=e.widthInt,i=e.qualityInt,a=e.layout,o=e.className,c=e.imgStyle,l=e.blurStyle,u=e.isLazy,d=e.placeholder,f=e.loading,p=e.srcString,m=e.config,g=e.unoptimized,h=e.loader,v=e.onLoadingCompleteRef,w=e.setBlurComplete,j=e.setIntersection,S=e.onLoad,_=e.onError,I=(e.isVisible,b(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},I,t,"raw"===a?{height:r,width:n}:{},{decoding:"async","data-nimg":a,className:o,style:y({},c,l),ref:s.useCallback((function(e){j(e),(null===e||void 0===e?void 0:e.complete)&&z(e,p,0,d,v,w)}),[j,p,a,d,v,w]),onLoad:function(e){z(e.currentTarget,p,0,d,v,w),S&&S(e)},onError:function(e){"blur"===d&&w(!0),_&&_(e)}})),(u||"blur"===d)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},I,x({config:m,src:p,unoptimized:g,layout:a,width:n,quality:i,sizes:t.sizes,loader:h}),"raw"===a?{height:r,width:n}:{},{decoding:"async","data-nimg":a,style:c,className:o,loading:f||"lazy"}))))};function k(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(l){c=!0,i=l}finally{try{o||null==r.return||r.return()}finally{if(c)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!c,s=a.useRef(),d=i(a.useState(!1),2),f=d[0],p=d[1],m=i(a.useState(t?t.current:null),2),g=m[0],h=m[1],y=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=l.get(n):(t=l.get(r),u.push(r));if(t)return t;var i=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(r,t={id:r,observer:a,elements:i}),t}(r),i=n.id,a=n.observer,o=n.elements;return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),l.delete(i);var t=u.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:g,rootMargin:r}))}),[n,g,r,f]),b=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!c&&!f){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),a.useEffect((function(){t&&h(t.current)}),[t]),[y,f,b]};var a=r(7294),o=r(4686),c="undefined"!==typeof IntersectionObserver;var l=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1571:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return h},default:function(){return y}});var n=r(5893),i=r(1163),a=r(9008),o=r.n(a),c=r(5675),l=r.n(c),u=r(6426),s=r.n(u),d=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format,f=function(e){var t=e.name,r=e.imageSource,i=e.price,a=e.sellingPrice;return(0,n.jsxs)("section",{className:s().ItemWrapper,children:[(0,n.jsx)("div",{className:s().ImageWrapper,children:(0,n.jsx)(l(),{src:r,layout:"fill",objectFit:"contain",alt:"Product Picture"})}),(0,n.jsxs)("div",{className:s().ItemData,children:[(0,n.jsx)("p",{children:t}),(0,n.jsx)("p",{className:s().Price,children:d(i)}),(0,n.jsx)("p",{className:s().SellingPrice,children:d(a)})]})]})},p=r(805),m=r.n(p),g=function(e){return e.replace(/./,(function(e){return e.toUpperCase()}))},h=!0,y=function(e){var t=e.items,r=e.value,a=(0,i.useRouter)().query.cartType,c="small"===a?"big":"small";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o(),{children:(0,n.jsxs)("title",{children:[g(a)," cart"]})}),(0,n.jsxs)("main",{className:m().MainWrapper,children:[(0,n.jsx)("h1",{className:m().Title,children:"Meu carrinho"}),(0,n.jsx)("div",{className:m().ItemsWrapper,children:t.map((function(e){return(0,n.jsx)(f,{name:e.name,price:e.price,sellingPrice:e.sellingPrice,imageSource:e.imageUrl},e.uniqueId)}))}),(0,n.jsxs)("div",{className:m().Pricing,children:[(0,n.jsxs)("div",{className:m().TotalPrice,children:[(0,n.jsx)("span",{children:"Total"}),(0,n.jsx)("span",{children:d(r)})]}),r>10?(0,n.jsx)("div",{className:m().FreeShippingAlert,children:(0,n.jsx)("span",{children:"Parab\xe9ns, sua compra tem frete gr\xe1tis !"})}):null]}),(0,n.jsx)("div",{className:m().ButtonWrapper,children:(0,n.jsx)("a",{href:"./".concat(c),children:(0,n.jsx)("button",{onClick:function(){alert("Redirecting to ".concat(c," cart"))},children:"Finalizar compra"})})})]})]})}},6426:function(e){e.exports={ItemWrapper:"CartItem_ItemWrapper__KeAFd",ImageWrapper:"CartItem_ImageWrapper__x_FkI",ItemData:"CartItem_ItemData__RR0Zn",Price:"CartItem_Price__ga41V"}},805:function(e){e.exports={MainWrapper:"cart_MainWrapper__s_6VC",Title:"cart_Title__CDVyT",ItemsWrapper:"cart_ItemsWrapper__DBkk1",Pricing:"cart_Pricing__wcOlJ",TotalPrice:"cart_TotalPrice__WsKDY",FreeShippingAlert:"cart_FreeShippingAlert__aaXFY",ButtonWrapper:"cart_ButtonWrapper__0jL8C"}},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)},1163:function(e,t,r){e.exports=r(880)}},function(e){e.O(0,[774,888,179],(function(){return t=8584,e(e.s=t);var t}));var t=e.O();_N_E=t}]);