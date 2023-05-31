"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[7009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={title:"Ratios",description:"Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively handling video or slideshow embeds based on the width of the parent.",sidebar_position:2},r=void 0,s={unversionedId:"utilities/ratio",id:"utilities/ratio",title:"Ratios",description:"Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively handling video or slideshow embeds based on the width of the parent.",source:"@site/docs/utilities/ratio.mdx",sourceDirName:"utilities",slug:"/utilities/ratio",permalink:"/docs/utilities/ratio",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Ratios",description:"Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively handling video or slideshow embeds based on the width of the parent.",sidebar_position:2},sidebar:"sidebar",previous:{title:"Transitions",permalink:"/docs/utilities/transitions"},next:{title:"@restart/ui",permalink:"/docs/utilities/restart-ui"}},l={},p=[{value:"About",id:"about",level:2},{value:"Example",id:"example",level:2},{value:"Aspect ratios",id:"aspect-ratios",level:2},{value:"Custom",id:"custom",level:2},{value:"API",id:"api",level:2},{value:"Ratio",id:"ratio",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=c("CodeBlock"),u=c("PropsTable"),m={toc:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"about"},"About"),(0,a.kt)("p",null,"Use the ratio helper to manage the aspect ratios of external content like\n",(0,a.kt)("inlineCode",{parentName:"p"},"<iframe>"),"s, ",(0,a.kt)("inlineCode",{parentName:"p"},"<embed>"),"s, ",(0,a.kt)("inlineCode",{parentName:"p"},"<video>"),"s, and ",(0,a.kt)("inlineCode",{parentName:"p"},"<object>"),"s. These helpers also can be used on\nany standard HTML child element (e.g., a ",(0,a.kt)("inlineCode",{parentName:"p"},"<div>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"<img>"),"). Styles are applied from\nthe parent .ratio class directly to the child."),(0,a.kt)("p",null,"You don't need to include ",(0,a.kt)("inlineCode",{parentName:"p"},'frameborder="0"')," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"iframe"),"s."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(d,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Ratio from \'react-bootstrap/Ratio\';\n\nfunction BasicExample() {\n  return (\n    <div style={{ width: 660, height: \'auto\' }}>\n      <Ratio aspectRatio="16x9">\n        <embed type="image/svg+xml" src="/img/TheresaKnott_castle.svg" />\n      </Ratio>\n    </div>\n  );\n}\n\nexport default BasicExample;\n'),(0,a.kt)("h2",{id:"aspect-ratios"},"Aspect ratios"),(0,a.kt)("p",null,"Aspect ratios can be customized using ",(0,a.kt)("inlineCode",{parentName:"p"},"aspectRatio"),". By default the following ",(0,a.kt)("inlineCode",{parentName:"p"},"aspectRatio"),"\nvalues are provided:"),(0,a.kt)(d,{language:"jsx",live:!0,previewClassName:"ratio-examples",mdxType:"CodeBlock"},"import Ratio from 'react-bootstrap/Ratio';\n\nfunction DefaultExample() {\n  return (\n    <>\n      {['1x1', '4x3', '16x9', '21x9'].map((ratio) => (\n        <Ratio key={ratio} aspectRatio={ratio}>\n          <div>{ratio}</div>\n        </Ratio>\n      ))}\n    </>\n  );\n}\n\nexport default DefaultExample;\n"),(0,a.kt)("h2",{id:"custom"},"Custom"),(0,a.kt)("p",null,"Create custom aspect ratios by passing a number to ",(0,a.kt)("inlineCode",{parentName:"p"},"aspectRatio")," instead of using the above\npre-defined values. You can use either a fraction or percentage to define the custom ratio."),(0,a.kt)(d,{language:"jsx",live:!0,previewClassName:"ratio-examples",mdxType:"CodeBlock"},"import Ratio from 'react-bootstrap/Ratio';\n\nfunction CustomExample() {\n  return (\n    <>\n      <Ratio aspectRatio={1 / 2}>\n        <div>2x1</div>\n      </Ratio>\n      <Ratio aspectRatio={50}>\n        <div>2x1</div>\n      </Ratio>\n    </>\n  );\n}\n\nexport default CustomExample;\n"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"ratio"},"Ratio"),(0,a.kt)(u,{name:"Ratio",mdxType:"PropsTable"}))}f.isMDXComponent=!0}}]);