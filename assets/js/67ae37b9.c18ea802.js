"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[1863],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,g=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return t?n.createElement(g,s(s({ref:r},d),{},{components:t})):n.createElement(g,s({ref:r},d))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47987:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={title:"Progress bars",description:"Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars."},s=void 0,l={unversionedId:"components/progress",id:"components/progress",title:"Progress bars",description:"Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.",source:"@site/docs/components/progress.mdx",sourceDirName:"components",slug:"/components/progress",permalink:"/docs/components/progress",draft:!1,tags:[],version:"current",frontMatter:{title:"Progress bars",description:"Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars."},sidebar:"sidebar",previous:{title:"Placeholders",permalink:"/docs/components/placeholder"},next:{title:"Spinners",permalink:"/docs/components/spinners"}},i={},p=[{value:"Example",id:"example",level:2},{value:"With label",id:"with-label",level:2},{value:"Screenreader only label",id:"screenreader-only-label",level:2},{value:"Contextual alternatives",id:"contextual-alternatives",level:2},{value:"Striped",id:"striped",level:2},{value:"Animated",id:"animated",level:2},{value:"Stacked",id:"stacked",level:2},{value:"API",id:"api",level:2},{value:"ProgressBar",id:"progressbar",level:3}],d=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",r)},c=d("CodeBlock"),u=d("PropsTable"),m={toc:p};function g(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Default progress bar."),(0,a.kt)(c,{language:"jsx",live:!0,mdxType:"CodeBlock"},"import ProgressBar from 'react-bootstrap/ProgressBar';\n\nfunction BasicExample() {\n  return <ProgressBar now={60} />;\n}\n\nexport default BasicExample;\n"),(0,a.kt)("h2",{id:"with-label"},"With label"),(0,a.kt)("p",null,"Add a ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," prop to show a visible percentage. For low\npercentages, consider adding a min-width to ensure the label's text is\nfully visible."),(0,a.kt)(c,{language:"jsx",live:!0,mdxType:"CodeBlock"},"import ProgressBar from 'react-bootstrap/ProgressBar';\n\nfunction WithLabelExample() {\n  const now = 60;\n  return <ProgressBar now={now} label={`${now}%`} />;\n}\n\nexport default WithLabelExample;\n"),(0,a.kt)("h2",{id:"screenreader-only-label"},"Screenreader only label"),(0,a.kt)("p",null,"Add a ",(0,a.kt)("inlineCode",{parentName:"p"},"visuallyHidden")," prop to hide the label visually."),(0,a.kt)(c,{language:"jsx",live:!0,mdxType:"CodeBlock"},"import ProgressBar from 'react-bootstrap/ProgressBar';\n\nfunction ScreenreaderLabelExample() {\n  const now = 60;\n  return <ProgressBar now={now} label={`${now}%`} visuallyHidden />;\n}\n\nexport default ScreenreaderLabelExample;\n"),(0,a.kt)("h2",{id:"contextual-alternatives"},"Contextual alternatives"),(0,a.kt)("p",null,"Progress bars use some of the same button and alert classes for\nconsistent styles."),(0,a.kt)(c,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import ProgressBar from \'react-bootstrap/ProgressBar\';\n\nfunction ContextualExample() {\n  return (\n    <div>\n      <ProgressBar variant="success" now={40} />\n      <ProgressBar variant="info" now={20} />\n      <ProgressBar variant="warning" now={60} />\n      <ProgressBar variant="danger" now={80} />\n    </div>\n  );\n}\n\nexport default ContextualExample;\n'),(0,a.kt)("h2",{id:"striped"},"Striped"),(0,a.kt)("p",null,"Uses a gradient to create a striped effect."),(0,a.kt)(c,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import ProgressBar from \'react-bootstrap/ProgressBar\';\n\nfunction StripedExample() {\n  return (\n    <div>\n      <ProgressBar striped variant="success" now={40} />\n      <ProgressBar striped variant="info" now={20} />\n      <ProgressBar striped variant="warning" now={60} />\n      <ProgressBar striped variant="danger" now={80} />\n    </div>\n  );\n}\n\nexport default StripedExample;\n'),(0,a.kt)("h2",{id:"animated"},"Animated"),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"animated")," prop to animate the stripes right to left."),(0,a.kt)(c,{language:"jsx",live:!0,mdxType:"CodeBlock"},"import ProgressBar from 'react-bootstrap/ProgressBar';\n\nfunction AnimatedExample() {\n  return <ProgressBar animated now={45} />;\n}\n\nexport default AnimatedExample;\n"),(0,a.kt)("h2",{id:"stacked"},"Stacked"),(0,a.kt)("p",null,"Nest ",(0,a.kt)("inlineCode",{parentName:"p"},"<ProgressBar />"),"s to stack them."),(0,a.kt)(c,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import ProgressBar from \'react-bootstrap/ProgressBar\';\n\nfunction StackedExample() {\n  return (\n    <ProgressBar>\n      <ProgressBar striped variant="success" now={35} key={1} />\n      <ProgressBar variant="warning" now={20} key={2} />\n      <ProgressBar striped variant="danger" now={10} key={3} />\n    </ProgressBar>\n  );\n}\n\nexport default StackedExample;\n'),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"progressbar"},"ProgressBar"),(0,a.kt)(u,{name:"ProgressBar",mdxType:"PropsTable"}))}g.isMDXComponent=!0}}]);