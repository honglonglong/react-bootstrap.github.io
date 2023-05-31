"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[3280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),p=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,u=s["".concat(d,".").concat(m)]||s[m]||h[m]||r;return n?o.createElement(u,l(l({ref:t},c),{},{components:n})):o.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={title:"Placeholders",description:"Use loading placeholders for your components or pages to indicate something may still be loading."},l=void 0,i={unversionedId:"components/placeholder",id:"components/placeholder",title:"Placeholders",description:"Use loading placeholders for your components or pages to indicate something may still be loading.",source:"@site/docs/components/placeholder.mdx",sourceDirName:"components",slug:"/components/placeholder",permalink:"/docs/components/placeholder",draft:!1,tags:[],version:"current",frontMatter:{title:"Placeholders",description:"Use loading placeholders for your components or pages to indicate something may still be loading."},sidebar:"sidebar",previous:{title:"Pagination",permalink:"/docs/components/pagination"},next:{title:"Progress bars",permalink:"/docs/components/progress"}},d={},p=[{value:"About",id:"about",level:2},{value:"Example",id:"example",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Width",id:"width",level:2},{value:"Color",id:"color",level:2},{value:"Sizing",id:"sizing",level:2},{value:"Animation",id:"animation",level:2},{value:"API",id:"api",level:2},{value:"Placeholder",id:"placeholder",level:3},{value:"PlaceholderButton",id:"placeholderbutton",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=c("CodeBlock"),h=c("PropsTable"),m={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"about"},"About"),(0,a.kt)("p",null,"Placeholders can be used to enhance the experience of your application. They\u2019re\nbuilt only with HTML and CSS, meaning you don\u2019t need any JavaScript to create them.\nYou will, however, need some custom JavaScript to toggle their visibility. Their\nappearance, color, and sizing can be easily customized with our utility classes."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In the example below, we take a typical card component and recreate it with placeholders\napplied to create a \u201cloading card\u201d. Size and proportions are the same between the two."),(0,a.kt)(s,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Button from \'react-bootstrap/Button\';\nimport Card from \'react-bootstrap/Card\';\nimport Placeholder from \'react-bootstrap/Placeholder\';\n\nfunction CardExample() {\n  return (\n    <div className="d-flex justify-content-around">\n      <Card style={{ width: \'18rem\' }}>\n        <Card.Img variant="top" src="holder.js/100px180" />\n        <Card.Body>\n          <Card.Title>Card Title</Card.Title>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card\'s content.\n          </Card.Text>\n          <Button variant="primary">Go somewhere</Button>\n        </Card.Body>\n      </Card>\n\n      <Card style={{ width: \'18rem\' }}>\n        <Card.Img variant="top" src="holder.js/100px180" />\n        <Card.Body>\n          <Placeholder as={Card.Title} animation="glow">\n            <Placeholder xs={6} />\n          </Placeholder>\n          <Placeholder as={Card.Text} animation="glow">\n            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{\' \'}\n            <Placeholder xs={6} /> <Placeholder xs={8} />\n          </Placeholder>\n          <Placeholder.Button variant="primary" xs={6} />\n        </Card.Body>\n      </Card>\n    </div>\n  );\n}\n\nexport default CardExample;\n'),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"Create placeholders with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Placeholder")," component and a grid column prop (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"xs={6}"),")\nto set the ",(0,a.kt)("inlineCode",{parentName:"p"},"width"),". They can replace the text inside an element or be added to an existing\ncomponent via the ",(0,a.kt)("inlineCode",{parentName:"p"},"as")," prop."),(0,a.kt)("p",null,"Additional styling is applied to ",(0,a.kt)("inlineCode",{parentName:"p"},"PlaceholderButton"),"s via ",(0,a.kt)("inlineCode",{parentName:"p"},"::before")," to ensure the ",(0,a.kt)("inlineCode",{parentName:"p"},"height"),"\nis respected. You may extend this pattern for other situations as needed, or add a ",(0,a.kt)("inlineCode",{parentName:"p"},"&nbsp;"),"\nwithin the element to reflect the height when actual text is rendered in its place."),(0,a.kt)(s,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Placeholder from \'react-bootstrap/Placeholder\';\n\nfunction BasicExample() {\n  return (\n    <>\n      <p aria-hidden="true">\n        <Placeholder xs={6} />\n      </p>\n\n      <Placeholder.Button xs={4} aria-hidden="true" />\n    </>\n  );\n}\n\nexport default BasicExample;\n'),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The use of ",(0,a.kt)("inlineCode",{parentName:"p"},'aria-hidden="true"')," only indicates that the element\nshould be hidden to screen readers. The ",(0,a.kt)("em",{parentName:"p"},"loading")," behaviour of the\nplaceholder depends on how authors will actually use the placeholder styles,\nhow they plan to update things, etc. Some JavaScript code may be needed to\n",(0,a.kt)("em",{parentName:"p"},"swap")," the state of the placeholder and inform AT users of the update.")),(0,a.kt)("h2",{id:"width"},"Width"),(0,a.kt)("p",null,"You can change the ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," through grid column classes, width utilities, or inline styles."),(0,a.kt)(s,{language:"jsx",live:!0,mdxType:"CodeBlock"},"import Placeholder from 'react-bootstrap/Placeholder';\n\nfunction WidthExample() {\n  return (\n    <>\n      <Placeholder xs={6} />\n      <Placeholder className=\"w-75\" /> <Placeholder style={{ width: '25%' }} />\n    </>\n  );\n}\n\nexport default WidthExample;\n"),(0,a.kt)("h2",{id:"color"},"Color"),(0,a.kt)("p",null,"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Placeholder")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"currentColor"),". This can be overridden with a custom color\nor utility class."),(0,a.kt)(s,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Placeholder from \'react-bootstrap/Placeholder\';\n\nfunction ColorExample() {\n  return (\n    <>\n      <Placeholder xs={12} />\n\n      <Placeholder xs={12} bg="primary" />\n      <Placeholder xs={12} bg="secondary" />\n      <Placeholder xs={12} bg="success" />\n      <Placeholder xs={12} bg="danger" />\n      <Placeholder xs={12} bg="warning" />\n      <Placeholder xs={12} bg="info" />\n      <Placeholder xs={12} bg="light" />\n      <Placeholder xs={12} bg="dark" />\n    </>\n  );\n}\n\nexport default ColorExample;\n'),(0,a.kt)("h2",{id:"sizing"},"Sizing"),(0,a.kt)("p",null,"The size of ",(0,a.kt)("inlineCode",{parentName:"p"},"Placeholder"),"s are based on the typographic style of the parent element.\nCustomize them with sizing props: ",(0,a.kt)("inlineCode",{parentName:"p"},"lg"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sm"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"xs"),"."),(0,a.kt)(s,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Placeholder from \'react-bootstrap/Placeholder\';\n\nfunction SizeExample() {\n  return (\n    <>\n      <Placeholder xs={12} size="lg" />\n      <Placeholder xs={12} />\n      <Placeholder xs={12} size="sm" />\n      <Placeholder xs={12} size="xs" />\n    </>\n  );\n}\n\nexport default SizeExample;\n'),(0,a.kt)("h2",{id:"animation"},"Animation"),(0,a.kt)("p",null,"Animate placeholders by setting the prop ",(0,a.kt)("inlineCode",{parentName:"p"},"animation")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"glow")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"wave")," to better\nconvey the perception of something being ",(0,a.kt)("em",{parentName:"p"},"actively")," loaded."),(0,a.kt)(s,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Placeholder from \'react-bootstrap/Placeholder\';\n\nfunction AnimationExample() {\n  return (\n    <>\n      <Placeholder as="p" animation="glow">\n        <Placeholder xs={12} />\n      </Placeholder>\n      <Placeholder as="p" animation="wave">\n        <Placeholder xs={12} />\n      </Placeholder>\n    </>\n  );\n}\n\nexport default AnimationExample;\n'),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"placeholder"},"Placeholder"),(0,a.kt)(h,{name:"Placeholder",mdxType:"PropsTable"}),(0,a.kt)("h3",{id:"placeholderbutton"},"PlaceholderButton"),(0,a.kt)(h,{name:"PlaceholderButton",mdxType:"PropsTable"}))}u.isMDXComponent=!0}}]);