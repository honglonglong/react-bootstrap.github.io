"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[5168],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=m(r),s=a,b=l["".concat(p,".").concat(s)]||l[s]||u[s]||o;return r?n.createElement(b,i(i({ref:t},d),{},{components:r})):n.createElement(b,i({ref:t},d))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},70588:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const o={title:"Breadcrumbs",description:"Indicate the current page\u2019s location within a navigational hierarchy that automatically adds separators via CSS."},i=void 0,c={unversionedId:"components/breadcrumb",id:"components/breadcrumb",title:"Breadcrumbs",description:"Indicate the current page\u2019s location within a navigational hierarchy that automatically adds separators via CSS.",source:"@site/docs/components/breadcrumb.mdx",sourceDirName:"components",slug:"/components/breadcrumb",permalink:"/docs/components/breadcrumb",draft:!1,tags:[],version:"current",frontMatter:{title:"Breadcrumbs",description:"Indicate the current page\u2019s location within a navigational hierarchy that automatically adds separators via CSS."},sidebar:"sidebar",previous:{title:"Badges",permalink:"/docs/components/badge"},next:{title:"Button group",permalink:"/docs/components/button-group"}},p={},m=[{value:"Example",id:"example",level:2},{value:"API",id:"api",level:2},{value:"Breadcrumb",id:"breadcrumb",level:3},{value:"BreadcrumbItem",id:"breadcrumbitem",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},l=d("CodeBlock"),u=d("PropsTable"),s={toc:m};function b(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"active")," prop to the active ",(0,a.kt)("inlineCode",{parentName:"p"},"Breadcrumb.Item"),". Do not set both ",(0,a.kt)("inlineCode",{parentName:"p"},"active")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," attributes. ",(0,a.kt)("inlineCode",{parentName:"p"},"active")," overrides ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"span")," element is rendered instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"."),(0,a.kt)(l,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Breadcrumb from \'react-bootstrap/Breadcrumb\';\n\nfunction BreadcrumbExample() {\n  return (\n    <Breadcrumb>\n      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>\n      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">\n        Library\n      </Breadcrumb.Item>\n      <Breadcrumb.Item active>Data</Breadcrumb.Item>\n    </Breadcrumb>\n  );\n}\n\nexport default BreadcrumbExample;\n'),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"breadcrumb"},"Breadcrumb"),(0,a.kt)(u,{name:"Breadcrumb",mdxType:"PropsTable"}),(0,a.kt)("h3",{id:"breadcrumbitem"},"BreadcrumbItem"),(0,a.kt)(u,{name:"BreadcrumbItem",mdxType:"PropsTable"}))}b.isMDXComponent=!0}}]);