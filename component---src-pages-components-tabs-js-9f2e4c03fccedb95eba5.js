(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"+gK0":function(e,t,n){"use strict";n.r(t);var a=n("oYCi"),o=n("+xvc"),s=n("Gf/E"),c=n("vXRK"),i=n("1u5/"),r=n("Dc2n"),l=n.n(r),b=n("YwJH"),d=n.n(b),j=n("eGDG"),h=n.n(j),m=n("Z/LK"),u=n.n(m),p=n("r+yI");t.default=Object(p.a)((function(e){var t=e.data;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(o.default,{h:"2",id:"tabs",children:"Tabbed components"}),Object(a.jsx)("p",{className:"lead",children:"Dynamic tabbed interfaces"}),Object(a.jsx)(o.default,{h:"2",id:"tabs-examples",children:"Examples"}),Object(a.jsxs)("p",{children:["Create dynamic tabbed interfaces, as described in the"," ",Object(a.jsxs)("a",{href:"https://www.w3.org/TR/wai-aria-practices/#tabpanel",children:[Object(a.jsx)("abbr",{title:"Web Accessibility Initiative",children:"WAI"})," ",Object(a.jsx)(s.a,{})," ","Authoring Practices"]}),". ",Object(a.jsx)("code",{children:"Tabs"})," is a higher-level component for quickly creating a"," ",Object(a.jsx)("code",{children:"Nav"})," matched with a set of ",Object(a.jsx)("code",{children:"TabPane"}),"s."]}),Object(a.jsx)(i.a,{codeText:u.a,exampleClassName:"bs-example-tabs"}),Object(a.jsx)(o.default,{h:"2",id:"tabs-controlled",children:"Controlled"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("code",{children:"Tabs"})," can be controlled directly when you want to handle the selection logic personally."]}),Object(a.jsx)(i.a,{codeText:l.a,exampleClassName:"bs-example-tabs"}),Object(a.jsx)(o.default,{h:"2",id:"tabs-no-animation",children:"No animation"}),Object(a.jsxs)("p",{children:["Set the ",Object(a.jsx)("code",{children:"transition"})," prop to ",Object(a.jsx)("code",{children:"false"})]}),Object(a.jsx)(i.a,{codeText:h.a,exampleClassName:"bs-example-tabs"}),Object(a.jsx)(o.default,{h:"2",id:"tabs-with-dropdown",children:"Dropdowns?"}),Object(a.jsx)("p",{children:"Dynamic tabbed interfaces should not contain dropdown menus, as this causes both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab’s trigger element is not immediately visible (as it’s inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies."}),Object(a.jsx)("p",{children:"That said, it Dropdowns do work technically (sans focus management), but we don't make any claims about support."}),Object(a.jsx)(o.default,{h:"2",id:"tabs-custom-layout",children:"Custom Tab Layout"}),Object(a.jsxs)("p",{children:["For more complex layouts the flexible ",Object(a.jsx)("code",{children:"TabContainer"}),","," ",Object(a.jsx)("code",{children:"TabContent"}),", and ",Object(a.jsx)("code",{children:"TabPane"})," components along with any style of ",Object(a.jsx)("code",{children:"Nav"})," allow you to quickly piece together your own Tabs component with additional markup needed."]}),Object(a.jsxs)("p",{children:["Create a set of NavItems each with an ",Object(a.jsx)("code",{children:"eventKey"})," ","corresponding to the eventKey of a ",Object(a.jsx)("code",{children:"TabPane"}),". Wrap the whole thing in a ",Object(a.jsx)("code",{children:"TabContainer"})," and you have fully functioning custom tabs component. Check out the below example making use of the grid system and pills."]}),Object(a.jsx)(i.a,{codeText:d.a,exampleClassName:"bs-example-tabs"}),Object(a.jsx)(o.default,{h:"2",id:"tabs-api",children:"API"}),Object(a.jsx)(c.a,{metadata:t.Tabs}),Object(a.jsx)(c.a,{metadata:t.Tab}),Object(a.jsx)(c.a,{metadata:t.TabContainer}),Object(a.jsx)(c.a,{metadata:t.TabContent}),Object(a.jsx)(c.a,{metadata:t.TabPane})]})}))},Dc2n:function(e,t){e.exports='function ControlledTabs() {\n  const [key, setKey] = useState(\'home\');\n\n  return (\n    <Tabs\n      id="controlled-tab-example"\n      activeKey={key}\n      onSelect={(k) => setKey(k)}\n      className="mb-3"\n    >\n      <Tab eventKey="home" title="Home">\n        <Sonnet />\n      </Tab>\n      <Tab eventKey="profile" title="Profile">\n        <Sonnet />\n      </Tab>\n      <Tab eventKey="contact" title="Contact" disabled>\n        <Sonnet />\n      </Tab>\n    </Tabs>\n  );\n}\n\nrender(<ControlledTabs />);\n'},"Gf/E":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("oYCi");function o(){return Object(a.jsx)("abbr",{title:"Accessible Rich Internet Applications",children:"ARIA"})}},YwJH:function(e,t){e.exports='<Tab.Container id="left-tabs-example" defaultActiveKey="first">\n  <Row>\n    <Col sm={3}>\n      <Nav variant="pills" className="flex-column">\n        <Nav.Item>\n          <Nav.Link eventKey="first">Tab 1</Nav.Link>\n        </Nav.Item>\n        <Nav.Item>\n          <Nav.Link eventKey="second">Tab 2</Nav.Link>\n        </Nav.Item>\n      </Nav>\n    </Col>\n    <Col sm={9}>\n      <Tab.Content>\n        <Tab.Pane eventKey="first">\n          <Sonnet />\n        </Tab.Pane>\n        <Tab.Pane eventKey="second">\n          <Sonnet />\n        </Tab.Pane>\n      </Tab.Content>\n    </Col>\n  </Row>\n</Tab.Container>;\n'},"Z/LK":function(e,t){e.exports='<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">\n  <Tab eventKey="home" title="Home">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="profile" title="Profile">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="contact" title="Contact" disabled>\n    <Sonnet />\n  </Tab>\n</Tabs>;\n'},eGDG:function(e,t){e.exports='<Tabs\n  defaultActiveKey="home"\n  transition={false}\n  id="noanim-tab-example"\n  className="mb-3"\n>\n  <Tab eventKey="home" title="Home">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="profile" title="Profile">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="contact" title="Contact" disabled>\n    <Sonnet />\n  </Tab>\n</Tabs>;\n'},"r+yI":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("rePB"),o=n("oYCi"),s=n("Snbm"),c=n("aArQ");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){return function(t){var n=t.location.pathname,a=c.a;return(n.startsWith("/getting-started")||n.startsWith("/layout")||n.startsWith("/components")||n.startsWith("/utilities"))&&(a=s.a),Object(o.jsx)(a,{location:t.location,children:Object(o.jsx)(e,r({},t))})}}}}]);
//# sourceMappingURL=component---src-pages-components-tabs-js-9f2e4c03fccedb95eba5.js.map