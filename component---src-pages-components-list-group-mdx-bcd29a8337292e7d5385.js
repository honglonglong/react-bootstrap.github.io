(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"1SCY":function(t,e){t.exports="import ListGroup from 'react-bootstrap/ListGroup';\n\nfunction HorizontalResponsiveExample() {\n  return (\n    <>\n      {['sm', 'md', 'lg', 'xl', 'xxl'].map((breakpoint) => (\n        <ListGroup key={breakpoint} horizontal={breakpoint} className=\"my-2\">\n          <ListGroup.Item>This ListGroup</ListGroup.Item>\n          <ListGroup.Item>renders horizontally</ListGroup.Item>\n          <ListGroup.Item>on {breakpoint}</ListGroup.Item>\n          <ListGroup.Item>and above!</ListGroup.Item>\n        </ListGroup>\n      ))}\n    </>\n  );\n}\n\nexport default HorizontalResponsiveExample;\n"},"1pZn":function(t,e){t.exports="import ListGroup from 'react-bootstrap/ListGroup';\n\nfunction HorizontalExample() {\n  return (\n    <ListGroup horizontal>\n      <ListGroup.Item>This</ListGroup.Item>\n      <ListGroup.Item>ListGroup</ListGroup.Item>\n      <ListGroup.Item>renders</ListGroup.Item>\n      <ListGroup.Item>horizontally!</ListGroup.Item>\n    </ListGroup>\n  );\n}\n\nexport default HorizontalExample;\n"},H9co:function(t,e){t.exports='import ListGroup from \'react-bootstrap/ListGroup\';\n\nfunction NumberedExample() {\n  return (\n    <ListGroup as="ol" numbered>\n      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>\n      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>\n      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>\n    </ListGroup>\n  );\n}\n\nexport default NumberedExample;\n'},HCbN:function(t,e){t.exports='import Col from \'react-bootstrap/Col\';\nimport ListGroup from \'react-bootstrap/ListGroup\';\nimport Row from \'react-bootstrap/Row\';\nimport Tab from \'react-bootstrap/Tab\';\n\nimport Sonnet from \'../../components/Sonnet\';\n\nfunction TabsExample() {\n  return (\n    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">\n      <Row>\n        <Col sm={4}>\n          <ListGroup>\n            <ListGroup.Item action href="#link1">\n              Link 1\n            </ListGroup.Item>\n            <ListGroup.Item action href="#link2">\n              Link 2\n            </ListGroup.Item>\n          </ListGroup>\n        </Col>\n        <Col sm={8}>\n          <Tab.Content>\n            <Tab.Pane eventKey="#link1">\n              <Sonnet />\n            </Tab.Pane>\n            <Tab.Pane eventKey="#link2">\n              <Sonnet />\n            </Tab.Pane>\n          </Tab.Content>\n        </Col>\n      </Row>\n    </Tab.Container>\n  );\n}\n\nexport default TabsExample;\n'},Q6D8:function(t,e,n){t.exports={callout:"Callout-styles-module--callout--1_K3h",warning:"Callout-styles-module--warning--39Zw- Callout-styles-module--callout--1_K3h",danger:"Callout-styles-module--danger--19388 Callout-styles-module--callout--1_K3h"}},U9aP:function(t,e){t.exports='import ListGroup from \'react-bootstrap/ListGroup\';\n\nfunction LinkedExample() {\n  const alertClicked = () => {\n    alert(\'You clicked the third ListGroupItem\');\n  };\n\n  return (\n    <ListGroup defaultActiveKey="#link1">\n      <ListGroup.Item action href="#link1">\n        Link 1\n      </ListGroup.Item>\n      <ListGroup.Item action href="#link2" disabled>\n        Link 2\n      </ListGroup.Item>\n      <ListGroup.Item action onClick={alertClicked}>\n        This one is a button\n      </ListGroup.Item>\n    </ListGroup>\n  );\n}\n\nexport default LinkedExample;\n'},WVYW:function(t,e){t.exports='import ListGroup from \'react-bootstrap/ListGroup\';\n\nfunction StyleActionsExample() {\n  return (\n    <ListGroup>\n      <ListGroup.Item>No style</ListGroup.Item>\n      <ListGroup.Item variant="primary">Primary</ListGroup.Item>\n      <ListGroup.Item action variant="secondary">\n        Secondary\n      </ListGroup.Item>\n      <ListGroup.Item action variant="success">\n        Success\n      </ListGroup.Item>\n      <ListGroup.Item action variant="danger">\n        Danger\n      </ListGroup.Item>\n      <ListGroup.Item action variant="warning">\n        Warning\n      </ListGroup.Item>\n      <ListGroup.Item action variant="info">\n        Info\n      </ListGroup.Item>\n      <ListGroup.Item action variant="light">\n        Light\n      </ListGroup.Item>\n      <ListGroup.Item action variant="dark">\n        Dark\n      </ListGroup.Item>\n    </ListGroup>\n  );\n}\n\nexport default StyleActionsExample;\n'},"ZXI+":function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return B})),n.d(e,"default",(function(){return K}));var o,a=n("wx14"),r=n("zLVn"),i=(n("mXGw"),n("7ljp")),s=n("Snbm"),p=n("h55t"),m=(n("tc9R"),n("vXRK")),u=n("1u5/"),l=(n("r+yI"),n("dT55")),d=n.n(l),c=n("U9aP"),b=n.n(c),x=n("eCiS"),G=n.n(x),L=n("hmu2"),f=n.n(L),h=n("lNSw"),I=n.n(h),j=n("WVYW"),y=n.n(j),g=n("rJDD"),O=n.n(g),v=n("H9co"),C=n.n(v),N=n("xzuU"),w=n.n(N),T=n("1pZn"),k=n.n(T),P=n("1SCY"),D=n.n(P),S=n("HCbN"),E=n.n(S),R=n("bTvO"),z=n.n(R),A=["components"],B={},H=(o="PageHeader",function(t){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.mdx)("div",t)}),W={query:"2505902352",_frontmatter:B},M=s.a;function K(t){var e=t.components,n=Object(r.a)(t,A);return Object(i.mdx)(M,Object(a.a)({},W,n,{components:e,mdxType:"MDXLayout"}),Object(i.mdx)(H,{title:"List groups",subTitle:"List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.",mdxType:"PageHeader"}),Object(i.mdx)("h2",{id:"basic-example"},"Basic Example"),Object(i.mdx)(u.a,{codeText:d.a,exampleClassName:z.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)("h3",{id:"active-items"},"Active items"),Object(i.mdx)("p",null,"Set the ",Object(i.mdx)("inlineCode",{parentName:"p"},"active")," prop to indicate the list groups current active selection."),Object(i.mdx)(u.a,{codeText:G.a,exampleClassName:z.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)("h3",{id:"disabled-items"},"Disabled items"),Object(i.mdx)("p",null,"Set the ",Object(i.mdx)("inlineCode",{parentName:"p"},"disabled")," prop to prevent actions on a ",Object(i.mdx)("inlineCode",{parentName:"p"},"<ListGroup.Item>"),". For elements\nthat aren't naturally disable-able (like anchors) ",Object(i.mdx)("inlineCode",{parentName:"p"},"onClick")," handlers are added\nthat call ",Object(i.mdx)("inlineCode",{parentName:"p"},"preventDefault")," to mimick disabled behavior."),Object(i.mdx)(u.a,{codeText:f.a,exampleClassName:z.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)("h3",{id:"actionable-items"},"Actionable items"),Object(i.mdx)("p",null,"Toggle the ",Object(i.mdx)("inlineCode",{parentName:"p"},"action")," prop to create ",Object(i.mdx)("em",null,"actionable")," list group\nitems, with disabled, hover and active styles. List item actions will render\na ",Object(i.mdx)("inlineCode",{parentName:"p"},"<button>")," or ",Object(i.mdx)("inlineCode",{parentName:"p"},"<a>")," (depending on the presence of an ",Object(i.mdx)("inlineCode",{parentName:"p"},"href"),") by default but\ncan be overridden by setting the ",Object(i.mdx)("inlineCode",{parentName:"p"},"as")," prop as usual."),Object(i.mdx)("p",null,"List items ",Object(i.mdx)("inlineCode",{parentName:"p"},"actions")," are distinct from plain items to ensure that click or tap\naffordances aren't applied to non-interactive items."),Object(i.mdx)(u.a,{codeText:b.a,exampleClassName:z.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)("h3",{id:"flush"},"Flush"),Object(i.mdx)("p",null,"Add the ",Object(i.mdx)("inlineCode",{parentName:"p"},"flush")," variant to remove outer borders and rounded corners to render list group items\nedge-to-edge in a parent container ",Object(i.mdx)("a",{parentName:"p",href:"/components/cards/#list-groups"},"such as a ",Object(i.mdx)("inlineCode",{parentName:"a"},"Card")),"."),Object(i.mdx)(u.a,{codeText:O.a,exampleClassName:z.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)("h3",{id:"numbered"},"Numbered"),Object(i.mdx)("p",null,"Add the ",Object(i.mdx)("inlineCode",{parentName:"p"},"numbered")," prop to opt into numbered list group items. Numbers are generated via CSS\n(as opposed to a ",Object(i.mdx)("inlineCode",{parentName:"p"},"<ol>"),"s default browser styling) for better placement inside list group items\nand to allow for better customization."),Object(i.mdx)(u.a,{codeText:C.a,exampleClassName:z.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)("p",null,"These work great with custom content as well."),Object(i.mdx)(u.a,{codeText:w.a,exampleClassName:z.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)("h3",{id:"horizontal"},"Horizontal"),Object(i.mdx)("p",null,"Use the ",Object(i.mdx)("inlineCode",{parentName:"p"},"horizontal")," prop to make the ListGroup render horizontally. Currently ",Object(i.mdx)("strong",{parentName:"p"},"horizontal list groups cannot be combined with flush list groups.")),Object(i.mdx)(u.a,{codeText:k.a,exampleClassName:z.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)("p",null,"There are responsive variants to ",Object(i.mdx)("inlineCode",{parentName:"p"},"horizontal"),": setting it to ",Object(i.mdx)("inlineCode",{parentName:"p"},"{sm|md|lg|xl|xxl}")," makes the list group horizontal starting at that breakpoint’s ",Object(i.mdx)("inlineCode",{parentName:"p"},"min-width"),"."),Object(i.mdx)(u.a,{codeText:D.a,exampleClassName:z.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)("h3",{id:"contextual-classes"},"Contextual classes"),Object(i.mdx)("p",null,"Use contextual variants on ",Object(i.mdx)("inlineCode",{parentName:"p"},"<ListGroup.Item>"),"s to style them with a stateful background and color."),Object(i.mdx)(u.a,{codeText:I.a,exampleClassName:z.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)("p",null,"When paired with ",Object(i.mdx)("inlineCode",{parentName:"p"},"action"),"s, additional hover and active styles apply."),Object(i.mdx)(u.a,{codeText:y.a,exampleClassName:z.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)(p.a,{title:"Conveying meaning to assistive technologies",mdxType:"Callout"},"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the ",Object(i.mdx)("code",null,".visually-hidden")," ","class."),Object(i.mdx)("h2",{id:"tabbed-interfaces"},"Tabbed Interfaces"),Object(i.mdx)("p",null,"You can also use the ",Object(i.mdx)("a",{parentName:"p",href:"/components/tabs/"},"Tab")," components to create ARIA compliant tabbable\ninterfaces with the ",Object(i.mdx)("inlineCode",{parentName:"p"},"<ListGroup>")," component. Swap out the ",Object(i.mdx)("inlineCode",{parentName:"p"},"<Nav>")," component\nfor the list group and you are good to go."),Object(i.mdx)(u.a,{codeText:E.a,exampleClassName:z.a.listGroup,mdxType:"ReactPlayground"}),Object(i.mdx)("h2",{id:"api"},"API"),Object(i.mdx)(m.a,{metadata:n.data.ListGroup,mdxType:"ComponentApi"}),Object(i.mdx)(m.a,{metadata:n.data.ListGroupItem,exportedBy:n.data.ListGroup,mdxType:"ComponentApi"}))}K.isMDXComponent=!0},bTvO:function(t,e,n){t.exports={listGroup:"examples-module--list-group--IXNCn",ratioExamples:"examples-module--ratio-examples--Gv1Nw",staticDropdownMenu:"examples-module--static-dropdown-menu--kkfyD clearfix",customDropdownMenu:"examples-module--custom-dropdown-menu--2e_DR",overlayContained:"examples-module--overlay-contained--11C4s"}},dT55:function(t,e){t.exports="import ListGroup from 'react-bootstrap/ListGroup';\n\nfunction DefaultExample() {\n  return (\n    <ListGroup>\n      <ListGroup.Item>Cras justo odio</ListGroup.Item>\n      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>\n      <ListGroup.Item>Morbi leo risus</ListGroup.Item>\n      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>\n      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>\n    </ListGroup>\n  );\n}\n\nexport default DefaultExample;\n"},eCiS:function(t,e){t.exports='import ListGroup from \'react-bootstrap/ListGroup\';\n\nfunction ActiveExample() {\n  return (\n    <ListGroup as="ul">\n      <ListGroup.Item as="li" active>\n        Cras justo odio\n      </ListGroup.Item>\n      <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>\n      <ListGroup.Item as="li" disabled>\n        Morbi leo risus\n      </ListGroup.Item>\n      <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>\n    </ListGroup>\n  );\n}\n\nexport default ActiveExample;\n'},h55t:function(t,e,n){"use strict";var o=n("oYCi"),a=n("Q6D8");e.a=function(t){var e=t.title,n=t.children,r=t.theme;return Object(o.jsxs)("aside",{role:"note",className:a[r||"warning"],children:[e&&Object(o.jsx)("header",{className:"h5",children:e}),Object(o.jsx)("div",{children:n})]})}},hmu2:function(t,e){t.exports="import ListGroup from 'react-bootstrap/ListGroup';\n\nfunction DisabledExample() {\n  return (\n    <ListGroup>\n      <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>\n      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>\n      <ListGroup.Item>Morbi leo risus</ListGroup.Item>\n      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>\n    </ListGroup>\n  );\n}\n\nexport default DisabledExample;\n"},lNSw:function(t,e){t.exports='import ListGroup from \'react-bootstrap/ListGroup\';\n\nfunction StyleExample() {\n  return (\n    <ListGroup>\n      <ListGroup.Item>No style</ListGroup.Item>\n      <ListGroup.Item variant="primary">Primary</ListGroup.Item>\n      <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>\n      <ListGroup.Item variant="success">Success</ListGroup.Item>\n      <ListGroup.Item variant="danger">Danger</ListGroup.Item>\n      <ListGroup.Item variant="warning">Warning</ListGroup.Item>\n      <ListGroup.Item variant="info">Info</ListGroup.Item>\n      <ListGroup.Item variant="light">Light</ListGroup.Item>\n      <ListGroup.Item variant="dark">Dark</ListGroup.Item>\n    </ListGroup>\n  );\n}\n\nexport default StyleExample;\n'},"r+yI":function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var o=n("rePB"),a=n("Snbm"),r=n("aArQ"),i=n("oYCi");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t){return function(e){var n=e.location.pathname,o=r.a;return(n.startsWith("/getting-started")||n.startsWith("/layout")||n.startsWith("/components")||n.startsWith("/utilities"))&&(o=a.a),Object(i.jsx)(o,{location:e.location,children:Object(i.jsx)(t,p({},e))})}}},rJDD:function(t,e){t.exports="import ListGroup from 'react-bootstrap/ListGroup';\n\nfunction FlushExample() {\n  return (\n    <ListGroup variant=\"flush\">\n      <ListGroup.Item>Cras justo odio</ListGroup.Item>\n      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>\n      <ListGroup.Item>Morbi leo risus</ListGroup.Item>\n      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>\n    </ListGroup>\n  );\n}\n\nexport default FlushExample;\n"},xzuU:function(t,e){t.exports='import Badge from \'react-bootstrap/Badge\';\nimport ListGroup from \'react-bootstrap/ListGroup\';\n\nfunction DefaultExample() {\n  return (\n    <ListGroup as="ol" numbered>\n      <ListGroup.Item\n        as="li"\n        className="d-flex justify-content-between align-items-start"\n      >\n        <div className="ms-2 me-auto">\n          <div className="fw-bold">Subheading</div>\n          Cras justo odio\n        </div>\n        <Badge bg="primary" pill>\n          14\n        </Badge>\n      </ListGroup.Item>\n      <ListGroup.Item\n        as="li"\n        className="d-flex justify-content-between align-items-start"\n      >\n        <div className="ms-2 me-auto">\n          <div className="fw-bold">Subheading</div>\n          Cras justo odio\n        </div>\n        <Badge bg="primary" pill>\n          14\n        </Badge>\n      </ListGroup.Item>\n      <ListGroup.Item\n        as="li"\n        className="d-flex justify-content-between align-items-start"\n      >\n        <div className="ms-2 me-auto">\n          <div className="fw-bold">Subheading</div>\n          Cras justo odio\n        </div>\n        <Badge bg="primary" pill>\n          14\n        </Badge>\n      </ListGroup.Item>\n    </ListGroup>\n  );\n}\n\nexport default DefaultExample;\n'}}]);
//# sourceMappingURL=component---src-pages-components-list-group-mdx-bcd29a8337292e7d5385.js.map