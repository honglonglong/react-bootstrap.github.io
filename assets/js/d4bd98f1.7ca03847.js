"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[7931],{3905:(n,a,e)=>{e.d(a,{Zo:()=>d,kt:()=>b});var r=e(67294);function t(n,a,e){return a in n?Object.defineProperty(n,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[a]=e,n}function o(n,a){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),e.push.apply(e,r)}return e}function i(n){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){t(n,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(e,a))}))}return n}function l(n,a){if(null==n)return{};var e,r,t=function(n,a){if(null==n)return{};var e,r,t={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||(t[e]=n[e]);return t}(n,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(t[e]=n[e])}return t}var p=r.createContext({}),s=function(n){var a=r.useContext(p),e=a;return n&&(e="function"==typeof n?n(a):i(i({},a),n)),e},d=function(n){var a=s(n.components);return r.createElement(p.Provider,{value:a},n.children)},v="mdxType",c={inlineCode:"code",wrapper:function(n){var a=n.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(n,a){var e=n.components,t=n.mdxType,o=n.originalType,p=n.parentName,d=l(n,["components","mdxType","originalType","parentName"]),v=s(e),m=t,b=v["".concat(p,".").concat(m)]||v[m]||c[m]||o;return e?r.createElement(b,i(i({ref:a},d),{},{components:e})):r.createElement(b,i({ref:a},d))}));function b(n,a){var e=arguments,t=a&&a.mdxType;if("string"==typeof n||t){var o=e.length,i=new Array(o);i[0]=m;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=n,l[v]="string"==typeof n?n:t,i[1]=l;for(var s=2;s<o;s++)i[s]=e[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},24730:(n,a,e)=>{e.r(a),e.d(a,{assets:()=>h,contentTitle:()=>f,default:()=>D,frontMatter:()=>N,metadata:()=>u,toc:()=>k});var r=e(87462),t=(e(67294),e(3905));const o='import Container from \'react-bootstrap/Container\';\nimport Nav from \'react-bootstrap/Nav\';\nimport Navbar from \'react-bootstrap/Navbar\';\nimport NavDropdown from \'react-bootstrap/NavDropdown\';\n\nfunction BasicExample() {\n  return (\n    <Navbar expand="lg" className="bg-body-tertiary">\n      <Container>\n        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>\n        <Navbar.Toggle aria-controls="basic-navbar-nav" />\n        <Navbar.Collapse id="basic-navbar-nav">\n          <Nav className="me-auto">\n            <Nav.Link href="#home">Home</Nav.Link>\n            <Nav.Link href="#link">Link</Nav.Link>\n            <NavDropdown title="Dropdown" id="basic-nav-dropdown">\n              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>\n              <NavDropdown.Item href="#action/3.2">\n                Another action\n              </NavDropdown.Item>\n              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>\n              <NavDropdown.Divider />\n              <NavDropdown.Item href="#action/3.4">\n                Separated link\n              </NavDropdown.Item>\n            </NavDropdown>\n          </Nav>\n        </Navbar.Collapse>\n      </Container>\n    </Navbar>\n  );\n}\n\nexport default BasicExample;\n',i='import Container from \'react-bootstrap/Container\';\nimport Navbar from \'react-bootstrap/Navbar\';\n\nfunction BrandExample() {\n  return (\n    <>\n      <Navbar className="bg-body-tertiary">\n        <Container>\n          <Navbar.Brand href="#home">Brand link</Navbar.Brand>\n        </Container>\n      </Navbar>\n      <br />\n      <Navbar className="bg-body-tertiary">\n        <Container>\n          <Navbar.Brand>Brand text</Navbar.Brand>\n        </Container>\n      </Navbar>\n      <br />\n      <Navbar className="bg-body-tertiary">\n        <Container>\n          <Navbar.Brand href="#home">\n            <img\n              src="/img/logo.svg"\n              width="30"\n              height="30"\n              className="d-inline-block align-top"\n              alt="React Bootstrap logo"\n            />\n          </Navbar.Brand>\n        </Container>\n      </Navbar>\n      <br />\n      <Navbar className="bg-body-tertiary">\n        <Container>\n          <Navbar.Brand href="#home">\n            <img\n              alt=""\n              src="/img/logo.svg"\n              width="30"\n              height="30"\n              className="d-inline-block align-top"\n            />{\' \'}\n            React Bootstrap\n          </Navbar.Brand>\n        </Container>\n      </Navbar>\n    </>\n  );\n}\n\nexport default BrandExample;\n',l='import Navbar from \'react-bootstrap/Navbar\';\nimport Form from \'react-bootstrap/Form\';\nimport Button from \'react-bootstrap/Button\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\nimport Row from \'react-bootstrap/Row\';\nimport Col from \'react-bootstrap/Col\';\n\nfunction FormExample() {\n  return (\n    <Navbar className="bg-body-tertiary justify-content-between">\n      <Form inline>\n        <InputGroup>\n          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>\n          <Form.Control\n            placeholder="Username"\n            aria-label="Username"\n            aria-describedby="basic-addon1"\n          />\n        </InputGroup>\n      </Form>\n      <Form inline>\n        <Row>\n          <Col xs="auto">\n            <Form.Control\n              type="text"\n              placeholder="Search"\n              className=" mr-sm-2"\n            />\n          </Col>\n          <Col xs="auto">\n            <Button type="submit">Submit</Button>\n          </Col>\n        </Row>\n      </Form>\n    </Navbar>\n  );\n}\n\nexport default FormExample;\n',p='import Container from \'react-bootstrap/Container\';\nimport Nav from \'react-bootstrap/Nav\';\nimport Navbar from \'react-bootstrap/Navbar\';\nimport NavDropdown from \'react-bootstrap/NavDropdown\';\n\nfunction CollapsibleExample() {\n  return (\n    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">\n      <Container>\n        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>\n        <Navbar.Toggle aria-controls="responsive-navbar-nav" />\n        <Navbar.Collapse id="responsive-navbar-nav">\n          <Nav className="me-auto">\n            <Nav.Link href="#features">Features</Nav.Link>\n            <Nav.Link href="#pricing">Pricing</Nav.Link>\n            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">\n              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>\n              <NavDropdown.Item href="#action/3.2">\n                Another action\n              </NavDropdown.Item>\n              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>\n              <NavDropdown.Divider />\n              <NavDropdown.Item href="#action/3.4">\n                Separated link\n              </NavDropdown.Item>\n            </NavDropdown>\n          </Nav>\n          <Nav>\n            <Nav.Link href="#deets">More deets</Nav.Link>\n            <Nav.Link eventKey={2} href="#memes">\n              Dank memes\n            </Nav.Link>\n          </Nav>\n        </Navbar.Collapse>\n      </Container>\n    </Navbar>\n  );\n}\n\nexport default CollapsibleExample;\n',s='import Container from \'react-bootstrap/Container\';\nimport Nav from \'react-bootstrap/Nav\';\nimport Navbar from \'react-bootstrap/Navbar\';\n\nfunction ColorSchemesExample() {\n  return (\n    <>\n      <Navbar bg="dark" data-bs-theme="dark">\n        <Container>\n          <Navbar.Brand href="#home">Navbar</Navbar.Brand>\n          <Nav className="me-auto">\n            <Nav.Link href="#home">Home</Nav.Link>\n            <Nav.Link href="#features">Features</Nav.Link>\n            <Nav.Link href="#pricing">Pricing</Nav.Link>\n          </Nav>\n        </Container>\n      </Navbar>\n      <br />\n      <Navbar bg="primary" data-bs-theme="dark">\n        <Container>\n          <Navbar.Brand href="#home">Navbar</Navbar.Brand>\n          <Nav className="me-auto">\n            <Nav.Link href="#home">Home</Nav.Link>\n            <Nav.Link href="#features">Features</Nav.Link>\n            <Nav.Link href="#pricing">Pricing</Nav.Link>\n          </Nav>\n        </Container>\n      </Navbar>\n\n      <br />\n      <Navbar bg="light" data-bs-theme="light">\n        <Container>\n          <Navbar.Brand href="#home">Navbar</Navbar.Brand>\n          <Nav className="me-auto">\n            <Nav.Link href="#home">Home</Nav.Link>\n            <Nav.Link href="#features">Features</Nav.Link>\n            <Nav.Link href="#pricing">Pricing</Nav.Link>\n          </Nav>\n        </Container>\n      </Navbar>\n    </>\n  );\n}\n\nexport default ColorSchemesExample;\n',d='import Button from \'react-bootstrap/Button\';\nimport Container from \'react-bootstrap/Container\';\nimport Form from \'react-bootstrap/Form\';\nimport Nav from \'react-bootstrap/Nav\';\nimport Navbar from \'react-bootstrap/Navbar\';\nimport NavDropdown from \'react-bootstrap/NavDropdown\';\n\nfunction NavScrollExample() {\n  return (\n    <Navbar expand="lg" className="bg-body-tertiary">\n      <Container fluid>\n        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>\n        <Navbar.Toggle aria-controls="navbarScroll" />\n        <Navbar.Collapse id="navbarScroll">\n          <Nav\n            className="me-auto my-2 my-lg-0"\n            style={{ maxHeight: \'100px\' }}\n            navbarScroll\n          >\n            <Nav.Link href="#action1">Home</Nav.Link>\n            <Nav.Link href="#action2">Link</Nav.Link>\n            <NavDropdown title="Link" id="navbarScrollingDropdown">\n              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>\n              <NavDropdown.Item href="#action4">\n                Another action\n              </NavDropdown.Item>\n              <NavDropdown.Divider />\n              <NavDropdown.Item href="#action5">\n                Something else here\n              </NavDropdown.Item>\n            </NavDropdown>\n            <Nav.Link href="#" disabled>\n              Link\n            </Nav.Link>\n          </Nav>\n          <Form className="d-flex">\n            <Form.Control\n              type="search"\n              placeholder="Search"\n              className="me-2"\n              aria-label="Search"\n            />\n            <Button variant="outline-success">Search</Button>\n          </Form>\n        </Navbar.Collapse>\n      </Container>\n    </Navbar>\n  );\n}\n\nexport default NavScrollExample;\n',v='import Button from \'react-bootstrap/Button\';\nimport Container from \'react-bootstrap/Container\';\nimport Form from \'react-bootstrap/Form\';\nimport Nav from \'react-bootstrap/Nav\';\nimport Navbar from \'react-bootstrap/Navbar\';\nimport NavDropdown from \'react-bootstrap/NavDropdown\';\nimport Offcanvas from \'react-bootstrap/Offcanvas\';\n\nfunction OffcanvasExample() {\n  return (\n    <>\n      {[false, \'sm\', \'md\', \'lg\', \'xl\', \'xxl\'].map((expand) => (\n        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">\n          <Container fluid>\n            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>\n            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />\n            <Navbar.Offcanvas\n              id={`offcanvasNavbar-expand-${expand}`}\n              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}\n              placement="end"\n            >\n              <Offcanvas.Header closeButton>\n                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>\n                  Offcanvas\n                </Offcanvas.Title>\n              </Offcanvas.Header>\n              <Offcanvas.Body>\n                <Nav className="justify-content-end flex-grow-1 pe-3">\n                  <Nav.Link href="#action1">Home</Nav.Link>\n                  <Nav.Link href="#action2">Link</Nav.Link>\n                  <NavDropdown\n                    title="Dropdown"\n                    id={`offcanvasNavbarDropdown-expand-${expand}`}\n                  >\n                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>\n                    <NavDropdown.Item href="#action4">\n                      Another action\n                    </NavDropdown.Item>\n                    <NavDropdown.Divider />\n                    <NavDropdown.Item href="#action5">\n                      Something else here\n                    </NavDropdown.Item>\n                  </NavDropdown>\n                </Nav>\n                <Form className="d-flex">\n                  <Form.Control\n                    type="search"\n                    placeholder="Search"\n                    className="me-2"\n                    aria-label="Search"\n                  />\n                  <Button variant="outline-success">Search</Button>\n                </Form>\n              </Offcanvas.Body>\n            </Navbar.Offcanvas>\n          </Container>\n        </Navbar>\n      ))}\n    </>\n  );\n}\n\nexport default OffcanvasExample;\n',c='import Container from \'react-bootstrap/Container\';\nimport Navbar from \'react-bootstrap/Navbar\';\n\nfunction TextLinkExample() {\n  return (\n    <Navbar className="bg-body-tertiary">\n      <Container>\n        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>\n        <Navbar.Toggle />\n        <Navbar.Collapse className="justify-content-end">\n          <Navbar.Text>\n            Signed in as: <a href="#login">Mark Otto</a>\n          </Navbar.Text>\n        </Navbar.Collapse>\n      </Container>\n    </Navbar>\n  );\n}\n\nexport default TextLinkExample;\n',m='import Container from \'react-bootstrap/Container\';\nimport Navbar from \'react-bootstrap/Navbar\';\n\nfunction ContainerOutsideExample() {\n  return (\n    <Container>\n      <Navbar expand="lg" className="bg-body-tertiary">\n        <Container>\n          <Navbar.Brand href="#">Navbar</Navbar.Brand>\n        </Container>\n      </Navbar>\n    </Container>\n  );\n}\n\nexport default ContainerOutsideExample;\n',b='import Container from \'react-bootstrap/Container\';\nimport Navbar from \'react-bootstrap/Navbar\';\n\nfunction ContainerInsideExample() {\n  return (\n    <Navbar expand="lg" className="bg-body-tertiary">\n      <Container>\n        <Navbar.Brand href="#">Navbar</Navbar.Brand>\n      </Container>\n    </Navbar>\n  );\n}\n\nexport default ContainerInsideExample;\n',N={title:"Navbars",description:"A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more."},f=void 0,u={unversionedId:"components/navbar",id:"components/navbar",title:"Navbars",description:"A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more.",source:"@site/docs/components/navbar.mdx",sourceDirName:"components",slug:"/components/navbar",permalink:"/docs/components/navbar",draft:!1,tags:[],version:"current",frontMatter:{title:"Navbars",description:"A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more."},sidebar:"sidebar",previous:{title:"Modals",permalink:"/docs/components/modal"},next:{title:"Navs and tabs",permalink:"/docs/components/navs"}},h={},k=[{value:"Overview",id:"overview",level:2},{value:"Brand",id:"brand",level:2},{value:"Forms",id:"forms",level:2},{value:"Text and Non-nav links",id:"text-and-non-nav-links",level:2},{value:"Color schemes",id:"color-schemes",level:2},{value:"Containers",id:"containers",level:2},{value:"Placement",id:"placement",level:2},{value:"Fixed top",id:"fixed-top",level:3},{value:"Fixed bottom",id:"fixed-bottom",level:3},{value:"Sticky top",id:"sticky-top",level:3},{value:"Scrolling",id:"scrolling",level:2},{value:"Responsive behaviors",id:"responsive-behaviors",level:2},{value:"Offcanvas",id:"offcanvas",level:3},{value:"API",id:"api",level:2},{value:"Navbar",id:"navbar",level:3},{value:"NavbarBrand",id:"navbarbrand",level:3},{value:"NavbarToggle",id:"navbartoggle",level:3},{value:"NavbarCollapse",id:"navbarcollapse",level:3}],g=n=>function(a){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.kt)("div",a)},x=g("CodeBlock"),C=g("DocLink"),y=g("PropsTable"),w={toc:k},B="wrapper";function D(n){let{components:a,...e}=n;return(0,t.kt)(B,(0,r.Z)({},w,e,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"overview"},"Overview"),(0,t.kt)("p",null,"Here\u2019s what you need to know before getting started with the Navbar:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Use the ",(0,t.kt)("inlineCode",{parentName:"li"},"expand")," prop to allow for collapsing the ",(0,t.kt)("inlineCode",{parentName:"li"},"Navbar")," at lower breakpoints."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Navbar"),"s and their contents are fluid by default. Use optional\n",(0,t.kt)("a",{parentName:"li",href:"#containers"},"containers")," to limit their horizontal width."),(0,t.kt)("li",{parentName:"ul"},"Use spacing and flex utilities to size and position content")),(0,t.kt)("p",null,"A responsive navigation header, including support for branding, navigation, and more.\nHere\u2019s an example of all the sub-components included in a responsive light-themed\nnavbar that automatically collapses at the lg (large) breakpoint."),(0,t.kt)(x,{language:"jsx",live:!0,mdxType:"CodeBlock"},o),(0,t.kt)("h2",{id:"brand"},"Brand"),(0,t.kt)("p",null,"A simple flexible branding component. Images are supported but will\nlikely require custom styling to work well."),(0,t.kt)(x,{language:"jsx",live:!0,mdxType:"CodeBlock"},i),(0,t.kt)("h2",{id:"forms"},"Forms"),(0,t.kt)("p",null,"Use ",(0,t.kt)("inlineCode",{parentName:"p"},"<Form inline>")," and your various form controls within the Navbar.\nAlign the contents as needed with utility classes."),(0,t.kt)(x,{language:"jsx",live:!0,mdxType:"CodeBlock"},l),(0,t.kt)("h2",{id:"text-and-non-nav-links"},"Text and Non-nav links"),(0,t.kt)("p",null,"Loose text and links can be wrapped ",(0,t.kt)("inlineCode",{parentName:"p"},"Navbar.Text")," in order to\ncorrectly align it vertically."),(0,t.kt)(x,{language:"jsx",live:!0,mdxType:"CodeBlock"},c),(0,t.kt)("h2",{id:"color-schemes"},"Color schemes"),(0,t.kt)("p",null,"Theming the navbar has never been easier thanks to the combination of theming classes\nand background-color utilities. Choose from ",(0,t.kt)("inlineCode",{parentName:"p"},'variant="light"')," for use with light\nbackground colors, or ",(0,t.kt)("inlineCode",{parentName:"p"},'variant="dark"')," for dark background colors. Then, customize\nwith the ",(0,t.kt)("inlineCode",{parentName:"p"},"bg")," prop or any custom css!"),(0,t.kt)("admonition",{title:"Heads up!",type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"Dark variants for components were deprecated in Bootstrap v5.3.0 with the introduction\nof color modes. Instead of adding ",(0,t.kt)("inlineCode",{parentName:"p"},'variant="dark"'),", set ",(0,t.kt)("inlineCode",{parentName:"p"},'data-bs-theme="dark"')," on the\n",(0,t.kt)("inlineCode",{parentName:"p"},"Navbar"),".")),(0,t.kt)(x,{language:"jsx",live:!0,mdxType:"CodeBlock"},s),(0,t.kt)("h2",{id:"containers"},"Containers"),(0,t.kt)("p",null,"While not required, you can wrap the Navbar in a ",(0,t.kt)("inlineCode",{parentName:"p"},"<Container>")," component\nto center it on a page, or add one within to only center the contents of a\n",(0,t.kt)("a",{parentName:"p",href:"#placement"},"fixed or static top navbar"),"."),(0,t.kt)(x,{language:"jsx",live:!0,mdxType:"CodeBlock"},m),(0,t.kt)("p",null,"When the container is within your navbar, its horizontal padding is removed at\nbreakpoints lower than your specified ",(0,t.kt)("inlineCode",{parentName:"p"},"expand={'sm' | 'md' | 'lg' | 'xl' | 'xxl'}"),"\nprop. This ensures we\u2019re not doubling up on padding unnecessarily on lower\nviewports when your navbar is collapsed."),(0,t.kt)(x,{language:"jsx",live:!0,mdxType:"CodeBlock"},b),(0,t.kt)("h2",{id:"placement"},"Placement"),(0,t.kt)("p",null,"You can use Bootstrap's ",(0,t.kt)(C,{path:"/utilities/position/",mdxType:"DocLink"},"position utilities")," to\nplace navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or\nstickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed\nnavbars use ",(0,t.kt)("inlineCode",{parentName:"p"},"position: fixed"),", meaning they\u2019re pulled from the normal flow of the DOM and may\nrequire custom CSS (e.g., padding-top on the ",(0,t.kt)("inlineCode",{parentName:"p"},"<body>"),") to prevent overlap with other elements.\nAlso note that ",(0,t.kt)("inlineCode",{parentName:"p"},".sticky-top")," uses ",(0,t.kt)("inlineCode",{parentName:"p"},"position: sticky"),", which\n",(0,t.kt)("a",{parentName:"p",href:"https://caniuse.com/#feat=css-sticky"},"isn\u2019t fully supported in every browser"),"."),(0,t.kt)("p",null,"Since these positioning needs are so common for Navbars, we've added convenience props for them."),(0,t.kt)("h3",{id:"fixed-top"},"Fixed top"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx"},'<Navbar fixed="top" />\n')),(0,t.kt)("h3",{id:"fixed-bottom"},"Fixed bottom"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx"},'<Navbar fixed="bottom" />\n')),(0,t.kt)("h3",{id:"sticky-top"},"Sticky top"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx"},'<Navbar sticky="top" />\n')),(0,t.kt)("h2",{id:"scrolling"},"Scrolling"),(0,t.kt)("p",null,"You can use the ",(0,t.kt)("inlineCode",{parentName:"p"},"navbarScroll")," prop in a ",(0,t.kt)("inlineCode",{parentName:"p"},"<Nav>")," to enable vertical scrolling within the toggleable\ncontents of a collapsed navbar. See the ",(0,t.kt)(C,{path:"/components/navbar/#scrolling",mdxType:"DocLink"},"Bootstrap docs"),"\nfor more information."),(0,t.kt)(x,{language:"jsx",live:!0,mdxType:"CodeBlock"},d),(0,t.kt)("h2",{id:"responsive-behaviors"},"Responsive behaviors"),(0,t.kt)("p",null,"Use the ",(0,t.kt)("inlineCode",{parentName:"p"},"expand")," prop as well as the ",(0,t.kt)("inlineCode",{parentName:"p"},"Navbar.Toggle")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"Navbar.Collapse")," components to control\nwhen content collapses behind a button."),(0,t.kt)("p",null,"Set the ",(0,t.kt)("inlineCode",{parentName:"p"},"defaultExpanded")," prop to make the Navbar start expanded. Set ",(0,t.kt)("inlineCode",{parentName:"p"},"collapseOnSelect")," to make\nthe Navbar collapse automatically when the user selects an item. You can also finely control\nthe collapsing behavior by using the ",(0,t.kt)("inlineCode",{parentName:"p"},"expanded")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"onToggle")," props."),(0,t.kt)("admonition",{type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"Watch out! You ",(0,t.kt)("strong",{parentName:"p"},"need")," to provide a breakpoint value to ",(0,t.kt)("inlineCode",{parentName:"p"},"expand")," in order for the Navbar to collapse at all.")),(0,t.kt)(x,{language:"jsx",live:!0,mdxType:"CodeBlock"},p),(0,t.kt)("h3",{id:"offcanvas"},"Offcanvas"),(0,t.kt)("p",null,"Transform your expanding and collapsing navbar into an offcanvas drawer with the offcanvas component.\nWe extend both the offcanvas default styles and use the ",(0,t.kt)("inlineCode",{parentName:"p"},"expand")," prop to create a dynamic and\nflexible navigation sidebar."),(0,t.kt)("p",null,"In the example below, to create an offcanvas navbar that is always collapsed across all breakpoints,\nset the ",(0,t.kt)("inlineCode",{parentName:"p"},"expand")," prop to ",(0,t.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,t.kt)(x,{language:"jsx",live:!0,mdxType:"CodeBlock"},v),(0,t.kt)("h2",{id:"api"},"API"),(0,t.kt)("h3",{id:"navbar"},"Navbar"),(0,t.kt)(y,{name:"Navbar",mdxType:"PropsTable"}),(0,t.kt)("h3",{id:"navbarbrand"},"NavbarBrand"),(0,t.kt)(y,{name:"NavbarBrand",mdxType:"PropsTable"}),(0,t.kt)("h3",{id:"navbartoggle"},"NavbarToggle"),(0,t.kt)(y,{name:"NavbarToggle",mdxType:"PropsTable"}),(0,t.kt)("h3",{id:"navbarcollapse"},"NavbarCollapse"),(0,t.kt)(y,{name:"NavbarCollapse",mdxType:"PropsTable"}))}D.isMDXComponent=!0}}]);