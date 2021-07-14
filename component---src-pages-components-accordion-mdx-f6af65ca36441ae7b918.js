(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+LHD":function(e,n){e.exports='<Accordion defaultActiveKey="0" flush>\n  <Accordion.Item eventKey="0">\n    <Accordion.Header>Accordion Item #1</Accordion.Header>\n    <Accordion.Body>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum.\n    </Accordion.Body>\n  </Accordion.Item>\n  <Accordion.Item eventKey="1">\n    <Accordion.Header>Accordion Item #2</Accordion.Header>\n    <Accordion.Body>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum.\n    </Accordion.Body>\n  </Accordion.Item>\n</Accordion>;\n'},"4AS7":function(e,n){e.exports='function CustomToggle({ children, eventKey }) {\n  const decoratedOnClick = useAccordionButton(eventKey, () =>\n    console.log(\'totally custom!\'),\n  );\n\n  return (\n    <button\n      type="button"\n      style={{ backgroundColor: \'pink\' }}\n      onClick={decoratedOnClick}\n    >\n      {children}\n    </button>\n  );\n}\n\nfunction Example() {\n  return (\n    <Accordion defaultActiveKey="0">\n      <Card>\n        <Card.Header>\n          <CustomToggle eventKey="0">Click me!</CustomToggle>\n        </Card.Header>\n        <Accordion.Collapse eventKey="0">\n          <Card.Body>Hello! I\'m the body</Card.Body>\n        </Accordion.Collapse>\n      </Card>\n      <Card>\n        <Card.Header>\n          <CustomToggle eventKey="1">Click me!</CustomToggle>\n        </Card.Header>\n        <Accordion.Collapse eventKey="1">\n          <Card.Body>Hello! I\'m another body</Card.Body>\n        </Accordion.Collapse>\n      </Card>\n    </Accordion>\n  );\n}\n\nrender(<Example />);\n'},"8Sn+":function(e,n){e.exports='function ContextAwareToggle({ children, eventKey, callback }) {\n  const { activeEventKey } = useContext(AccordionContext);\n\n  const decoratedOnClick = useAccordionButton(\n    eventKey,\n    () => callback && callback(eventKey),\n  );\n\n  const isCurrentEventKey = activeEventKey === eventKey;\n\n  return (\n    <button\n      type="button"\n      style={{ backgroundColor: isCurrentEventKey ? \'pink\' : \'lavender\' }}\n      onClick={decoratedOnClick}\n    >\n      {children}\n    </button>\n  );\n}\n\nfunction Example() {\n  return (\n    <Accordion defaultActiveKey="0">\n      <Card>\n        <Card.Header>\n          <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>\n        </Card.Header>\n        <Accordion.Collapse eventKey="0">\n          <Card.Body>Hello! I\'m the body</Card.Body>\n        </Accordion.Collapse>\n      </Card>\n      <Card>\n        <Card.Header>\n          <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>\n        </Card.Header>\n        <Accordion.Collapse eventKey="1">\n          <Card.Body>Hello! I\'m another body</Card.Body>\n        </Accordion.Collapse>\n      </Card>\n    </Accordion>\n  );\n}\n\nrender(<Example />);\n'},Q6D8:function(e,n,o){e.exports={callout:"Callout-styles-module--callout--1_K3h",warning:"Callout-styles-module--warning--39Zw- Callout-styles-module--callout--1_K3h",danger:"Callout-styles-module--danger--19388 Callout-styles-module--callout--1_K3h"}},d3um:function(e,n,o){"use strict";o.r(n),o.d(n,"_frontmatter",(function(){return v})),o.d(n,"default",(function(){return j}));var t=o("rePB"),i=o("zLVn"),c=(o("mXGw"),o("7ljp")),a=o("Snbm"),d=(o("h55t"),o("vXRK")),r=o("1u5/"),l=o("yEIy"),u=o.n(l),s=o("j80X"),m=o.n(s),p=o("+LHD"),y=o.n(p),A=o("4AS7"),x=o.n(A),b=o("8Sn+"),C=o.n(b);function g(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function f(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?g(Object(o),!0).forEach((function(n){Object(t.a)(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):g(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}var v={},h={query:"3960324890",_frontmatter:v},O=a.a;function j(e){var n=e.components,o=Object(i.a)(e,["components"]);return Object(c.mdx)(O,f(f(f({},h),o),{},{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("h1",f({},{id:"accordion"}),"Accordion"),Object(c.mdx)("p",{className:"lead"},"Build vertically collapsing accordions in combination with the Collapse component."),Object(c.mdx)("h2",f({},{id:"examples"}),"Examples"),Object(c.mdx)("p",null,"Click the accordions below to expand/collapse the accordion content."),Object(c.mdx)("h3",f({},{id:"basic-example"}),"Basic Example"),Object(c.mdx)(r.a,{codeText:u.a,mdxType:"ReactPlayground"}),Object(c.mdx)("h3",f({},{id:"fully-collapsed-state"}),"Fully Collapsed State"),Object(c.mdx)("p",null,"If you want your ",Object(c.mdx)("inlineCode",{parentName:"p"},"Accordion")," to start in a fully-collapsed state, then simply don't pass in a ",Object(c.mdx)("inlineCode",{parentName:"p"},"defaultActiveKey")," prop to ",Object(c.mdx)("inlineCode",{parentName:"p"},"Accordion"),"."),Object(c.mdx)(r.a,{codeText:m.a,mdxType:"ReactPlayground"}),Object(c.mdx)("h3",f({},{id:"flush"}),"Flush"),Object(c.mdx)("p",null,"Add ",Object(c.mdx)("inlineCode",{parentName:"p"},"flush")," to remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container."),Object(c.mdx)(r.a,{codeText:y.a,mdxType:"ReactPlayground"}),Object(c.mdx)("h2",f({},{id:"custom-accordions"}),"Custom Accordions"),Object(c.mdx)("p",null,"You can still create card-based accordions like those in Bootstrap 4. You can hook\ninto the Accordion toggle functionality via ",Object(c.mdx)("inlineCode",{parentName:"p"},"useAccordionButton")," to make custom\ntoggle components."),Object(c.mdx)("h3",f({},{id:"custom-toggle"}),"Custom Toggle"),Object(c.mdx)(r.a,{codeText:x.a,mdxType:"ReactPlayground"}),Object(c.mdx)("h3",f({},{id:"custom-toggle-with-expansion-awareness"}),"Custom Toggle with Expansion Awareness"),Object(c.mdx)("p",null,"You may wish to have different styles for the toggle if it's associated section is expanded,\nthis can be achieved with a custom toggle that is context aware and also takes advantage of the ",Object(c.mdx)("inlineCode",{parentName:"p"},"useAccordionButton")," hook."),Object(c.mdx)(r.a,{codeText:C.a,mdxType:"ReactPlayground"}),Object(c.mdx)("h2",f({},{id:"api"}),"API"),Object(c.mdx)(d.a,{metadata:o.data.Accordion,mdxType:"ComponentApi"}),Object(c.mdx)(d.a,{metadata:o.data.AccordionItem,exportedBy:o.data.Accordion,mdxType:"ComponentApi"}),Object(c.mdx)(d.a,{metadata:o.data.AccordionHeader,exportedBy:o.data.Accordion,mdxType:"ComponentApi"}),Object(c.mdx)(d.a,{metadata:o.data.AccordionBody,exportedBy:o.data.Accordion,mdxType:"ComponentApi"}),Object(c.mdx)(d.a,{metadata:o.data.AccordionButton,exportedBy:o.data.Accordion,mdxType:"ComponentApi"}),Object(c.mdx)(d.a,{metadata:o.data.AccordionCollapse,exportedBy:o.data.Accordion,mdxType:"ComponentApi"}),Object(c.mdx)("h3",f({},{id:"useaccordionbutton"}),"useAccordionButton"),Object(c.mdx)("pre",null,Object(c.mdx)("code",f({parentName:"pre"},{className:"language-js"}),"import { useAccordionButton } from 'react-bootstrap/AccordionButton';\n\nconst decoratedOnClick = useAccordionButton(eventKey, onClick);\n")))}j.isMDXComponent=!0},h55t:function(e,n,o){"use strict";var t=o("oYCi"),i=o("Q6D8");n.a=function(e){var n=e.title,o=e.children,c=e.theme;return Object(t.jsxs)("aside",{role:"note",className:i[c||"warning"],children:[n&&Object(t.jsx)("header",{className:"h5",children:n}),Object(t.jsx)("div",{children:o})]})}},j80X:function(e,n){e.exports='<Accordion>\n  <Accordion.Item eventKey="0">\n    <Accordion.Header>Accordion Item #1</Accordion.Header>\n    <Accordion.Body>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum.\n    </Accordion.Body>\n  </Accordion.Item>\n  <Accordion.Item eventKey="1">\n    <Accordion.Header>Accordion Item #2</Accordion.Header>\n    <Accordion.Body>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum.\n    </Accordion.Body>\n  </Accordion.Item>\n</Accordion>;\n'},yEIy:function(e,n){e.exports='<Accordion defaultActiveKey="0">\n  <Accordion.Item eventKey="0">\n    <Accordion.Header>Accordion Item #1</Accordion.Header>\n    <Accordion.Body>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum.\n    </Accordion.Body>\n  </Accordion.Item>\n  <Accordion.Item eventKey="1">\n    <Accordion.Header>Accordion Item #2</Accordion.Header>\n    <Accordion.Body>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum.\n    </Accordion.Body>\n  </Accordion.Item>\n</Accordion>;\n'}}]);
//# sourceMappingURL=component---src-pages-components-accordion-mdx-f6af65ca36441ae7b918.js.map