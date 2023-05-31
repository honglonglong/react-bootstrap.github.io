"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[4209],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(r),m=o,d=s["".concat(u,".").concat(m)]||s[m]||g[m]||i;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[s]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7165:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={title:"Figures",description:"Documentation and examples for displaying related images and text with the figure component in Bootstrap."},a=void 0,p={unversionedId:"components/figures",id:"components/figures",title:"Figures",description:"Documentation and examples for displaying related images and text with the figure component in Bootstrap.",source:"@site/docs/components/figures.mdx",sourceDirName:"components",slug:"/components/figures",permalink:"/docs/components/figures",draft:!1,tags:[],version:"current",frontMatter:{title:"Figures",description:"Documentation and examples for displaying related images and text with the figure component in Bootstrap."},sidebar:"sidebar",previous:{title:"Dropdowns",permalink:"/docs/components/dropdowns"},next:{title:"Images",permalink:"/docs/components/images"}},u={},l=[{value:"Figure",id:"figure",level:2},{value:"API",id:"api",level:2},{value:"Figure",id:"figure-1",level:3},{value:"FigureImage",id:"figureimage",level:3},{value:"FigureCaption",id:"figurecaption",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},s=c("CodeBlock"),g=c("PropsTable"),m={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"figure"},"Figure"),(0,o.kt)("p",null,"Displaying related images and text with the Figure component."),(0,o.kt)(s,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Figure from \'react-bootstrap/Figure\';\n\nfunction FigureExample() {\n  return (\n    <Figure>\n      <Figure.Image\n        width={171}\n        height={180}\n        alt="171x180"\n        src="holder.js/171x180"\n      />\n      <Figure.Caption>\n        Nulla vitae elit libero, a pharetra augue mollis interdum.\n      </Figure.Caption>\n    </Figure>\n  );\n}\n\nexport default FigureExample;\n'),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"figure-1"},"Figure"),(0,o.kt)(g,{name:"Figure",mdxType:"PropsTable"}),(0,o.kt)("h3",{id:"figureimage"},"FigureImage"),(0,o.kt)(g,{name:"FigureImage",mdxType:"PropsTable"}),(0,o.kt)("h3",{id:"figurecaption"},"FigureCaption"),(0,o.kt)(g,{name:"FigureCaption",mdxType:"PropsTable"}))}d.isMDXComponent=!0}}]);