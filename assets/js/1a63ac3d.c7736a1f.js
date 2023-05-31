"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[1651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),b=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=b(n),d=o,u=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var b=2;b<r;b++)i[b]=n[b];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>T,frontMatter:()=>r,metadata:()=>l,toc:()=>b});var a=n(87462),o=(n(67294),n(3905));const r={title:"Tabbed components",description:"Dynamic tabbed interfaces",sidebar_label:"Tabs"},i=void 0,l={unversionedId:"components/tabs",id:"components/tabs",title:"Tabbed components",description:"Dynamic tabbed interfaces",source:"@site/docs/components/tabs.mdx",sourceDirName:"components",slug:"/components/tabs",permalink:"/docs/components/tabs",draft:!1,tags:[],version:"current",frontMatter:{title:"Tabbed components",description:"Dynamic tabbed interfaces",sidebar_label:"Tabs"},sidebar:"sidebar",previous:{title:"Tables",permalink:"/docs/components/table"},next:{title:"Toasts",permalink:"/docs/components/toasts"}},s={},b=[{value:"Examples",id:"examples",level:2},{value:"Controlled",id:"controlled",level:2},{value:"No animation",id:"no-animation",level:2},{value:"Fill and justify",id:"fill-and-justify",level:2},{value:"Dropdowns?",id:"dropdowns",level:2},{value:"Custom Tab Layout",id:"custom-tab-layout",level:2},{value:"API",id:"api",level:2},{value:"Tabs",id:"tabs",level:3},{value:"Tab",id:"tab",level:3},{value:"TabContainer",id:"tabcontainer",level:3},{value:"TabContent",id:"tabcontent",level:3},{value:"TabPane",id:"tabpane",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=p("AriaAbbr"),m=p("CodeBlock"),d=p("PropsTable"),u={toc:b};function T(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Create dynamic tabbed interfaces, as described in the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices/#tabpanel"},(0,o.kt)("abbr",{title:"Web Accessibility Initiative"},"WAI")," ",(0,o.kt)(c,{mdxType:"AriaAbbr"})," Authoring Practices"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"Tabs")," is a higher-level component for quickly creating a\n",(0,o.kt)("inlineCode",{parentName:"p"},"Nav")," matched with a set of ",(0,o.kt)("inlineCode",{parentName:"p"},"TabPane"),"s."),(0,o.kt)(m,{language:"jsx",live:!0,previewClassName:"bs-example-tabs",mdxType:"CodeBlock"},'import Tab from \'react-bootstrap/Tab\';\nimport Tabs from \'react-bootstrap/Tabs\';\n\nfunction UncontrolledExample() {\n  return (\n    <Tabs\n      defaultActiveKey="profile"\n      id="uncontrolled-tab-example"\n      className="mb-3"\n    >\n      <Tab eventKey="home" title="Home">\n        Tab content for Home\n      </Tab>\n      <Tab eventKey="profile" title="Profile">\n        Tab content for Profile\n      </Tab>\n      <Tab eventKey="contact" title="Contact" disabled>\n        Tab content for Contact\n      </Tab>\n    </Tabs>\n  );\n}\n\nexport default UncontrolledExample;\n'),(0,o.kt)("h2",{id:"controlled"},"Controlled"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Tabs")," can be controlled directly when you want to handle the\nselection logic personally."),(0,o.kt)(m,{language:"jsx",live:!0,previewClassName:"bs-example-tabs",mdxType:"CodeBlock"},'import { useState } from \'react\';\nimport Tab from \'react-bootstrap/Tab\';\nimport Tabs from \'react-bootstrap/Tabs\';\n\nfunction ControlledTabsExample() {\n  const [key, setKey] = useState(\'home\');\n\n  return (\n    <Tabs\n      id="controlled-tab-example"\n      activeKey={key}\n      onSelect={(k) => setKey(k)}\n      className="mb-3"\n    >\n      <Tab eventKey="home" title="Home">\n        Tab content for Home\n      </Tab>\n      <Tab eventKey="profile" title="Profile">\n        Tab content for Profile\n      </Tab>\n      <Tab eventKey="contact" title="Contact" disabled>\n        Tab content for Contact\n      </Tab>\n    </Tabs>\n  );\n}\n\nexport default ControlledTabsExample;\n'),(0,o.kt)("h2",{id:"no-animation"},"No animation"),(0,o.kt)("p",null,"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"transition")," prop to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)(m,{language:"jsx",live:!0,previewClassName:"bs-example-tabs",mdxType:"CodeBlock"},'import Tab from \'react-bootstrap/Tab\';\nimport Tabs from \'react-bootstrap/Tabs\';\n\nfunction NoAnimationExample() {\n  return (\n    <Tabs\n      defaultActiveKey="home"\n      transition={false}\n      id="noanim-tab-example"\n      className="mb-3"\n    >\n      <Tab eventKey="home" title="Home">\n        Tab content for Home\n      </Tab>\n      <Tab eventKey="profile" title="Profile">\n        Tab content for Profile\n      </Tab>\n      <Tab eventKey="contact" title="Contact" disabled>\n        Tab content for Contact\n      </Tab>\n    </Tabs>\n  );\n}\n\nexport default NoAnimationExample;\n'),(0,o.kt)("h2",{id:"fill-and-justify"},"Fill and justify"),(0,o.kt)("p",null,"Similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Nav")," component, you can force the contents of your ",(0,o.kt)("inlineCode",{parentName:"p"},"Tabs")," to extend the full available width. To\nproportionately fill the space use ",(0,o.kt)("inlineCode",{parentName:"p"},"fill"),". Notice that the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Tabs")," is the entire width but each ",(0,o.kt)("inlineCode",{parentName:"p"},"Tab")," item is a different size."),(0,o.kt)(m,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Tab from \'react-bootstrap/Tab\';\nimport Tabs from \'react-bootstrap/Tabs\';\n\nfunction FillExample() {\n  return (\n    <Tabs\n      defaultActiveKey="profile"\n      id="fill-tab-example"\n      className="mb-3"\n      fill\n    >\n      <Tab eventKey="home" title="Home">\n        Tab content for Home\n      </Tab>\n      <Tab eventKey="profile" title="Profile">\n        Tab content for Profile\n      </Tab>\n      <Tab eventKey="longer-tab" title="Loooonger Tab">\n        Tab content for Loooonger Tab\n      </Tab>\n      <Tab eventKey="contact" title="Contact" disabled>\n        Tab content for Contact\n      </Tab>\n    </Tabs>\n  );\n}\n\nexport default FillExample;\n'),(0,o.kt)("p",null,"If you want each ",(0,o.kt)("inlineCode",{parentName:"p"},"Tab")," to be the same size use ",(0,o.kt)("inlineCode",{parentName:"p"},"justify"),"."),(0,o.kt)(m,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Tab from \'react-bootstrap/Tab\';\nimport Tabs from \'react-bootstrap/Tabs\';\n\nfunction JustifiedExample() {\n  return (\n    <Tabs\n      defaultActiveKey="profile"\n      id="justify-tab-example"\n      className="mb-3"\n      justify\n    >\n      <Tab eventKey="home" title="Home">\n        Tab content for Home\n      </Tab>\n      <Tab eventKey="profile" title="Profile">\n        Tab content for Profile\n      </Tab>\n      <Tab eventKey="longer-tab" title="Loooonger Tab">\n        Tab content for Loooonger Tab\n      </Tab>\n      <Tab eventKey="contact" title="Contact" disabled>\n        Tab content for Contact\n      </Tab>\n    </Tabs>\n  );\n}\n\nexport default JustifiedExample;\n'),(0,o.kt)("h2",{id:"dropdowns"},"Dropdowns?"),(0,o.kt)("p",null,"Dynamic tabbed interfaces should not contain dropdown menus, as this\ncauses both usability and accessibility issues. From a usability\nperspective, the fact that the currently displayed tab\u2019s trigger element\nis not immediately visible (as it\u2019s inside the closed dropdown menu) can\ncause confusion. From an accessibility point of view, there is currently\nno sensible way to map this sort of construct to a standard WAI ARIA\npattern, meaning that it cannot be easily made understandable to users\nof assistive technologies."),(0,o.kt)("p",null,"That said, it Dropdowns do work technically (sans focus management), but\nwe don't make any claims about support."),(0,o.kt)("h2",{id:"custom-tab-layout"},"Custom Tab Layout"),(0,o.kt)("p",null,"For more complex layouts the flexible ",(0,o.kt)("inlineCode",{parentName:"p"},"TabContainer"),","),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TabContent"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"TabPane")," components along with any\nstyle of ",(0,o.kt)("inlineCode",{parentName:"p"},"Nav")," allow you to quickly piece together your own Tabs\ncomponent with additional markup needed."),(0,o.kt)("p",null,"Create a set of NavItems each with an ",(0,o.kt)("inlineCode",{parentName:"p"},"eventKey"),"\ncorresponding to the eventKey of a ",(0,o.kt)("inlineCode",{parentName:"p"},"TabPane"),". Wrap the whole\nthing in a ",(0,o.kt)("inlineCode",{parentName:"p"},"TabContainer")," and you have fully functioning\ncustom tabs component. Check out the below example making use of the\ngrid system and pills."),(0,o.kt)(m,{language:"jsx",live:!0,previewClassName:"bs-example-tabs",mdxType:"CodeBlock"},'import Col from \'react-bootstrap/Col\';\nimport Nav from \'react-bootstrap/Nav\';\nimport Row from \'react-bootstrap/Row\';\nimport Tab from \'react-bootstrap/Tab\';\n\nfunction LeftTabsExample() {\n  return (\n    <Tab.Container id="left-tabs-example" defaultActiveKey="first">\n      <Row>\n        <Col sm={3}>\n          <Nav variant="pills" className="flex-column">\n            <Nav.Item>\n              <Nav.Link eventKey="first">Tab 1</Nav.Link>\n            </Nav.Item>\n            <Nav.Item>\n              <Nav.Link eventKey="second">Tab 2</Nav.Link>\n            </Nav.Item>\n          </Nav>\n        </Col>\n        <Col sm={9}>\n          <Tab.Content>\n            <Tab.Pane eventKey="first">First tab content</Tab.Pane>\n            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>\n          </Tab.Content>\n        </Col>\n      </Row>\n    </Tab.Container>\n  );\n}\n\nexport default LeftTabsExample;\n'),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"tabs"},"Tabs"),(0,o.kt)(d,{name:"Tabs",mdxType:"PropsTable"}),(0,o.kt)("h3",{id:"tab"},"Tab"),(0,o.kt)(d,{name:"Tab",mdxType:"PropsTable"}),(0,o.kt)("h3",{id:"tabcontainer"},"TabContainer"),(0,o.kt)(d,{name:"TabContainer",mdxType:"PropsTable"}),(0,o.kt)("h3",{id:"tabcontent"},"TabContent"),(0,o.kt)(d,{name:"TabContent",mdxType:"PropsTable"}),(0,o.kt)("h3",{id:"tabpane"},"TabPane"),(0,o.kt)(d,{name:"TabPane",mdxType:"PropsTable"}))}T.isMDXComponent=!0}}]);