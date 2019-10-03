(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1074:function(e,n,o){"use strict";o.r(n),o.d(n,"query",function(){return b});var a=o(0),t=o.n(a),l=o(1065),d=o(123),i=o(1064),s=o(1172),r=o.n(s),c=o(1173),u=o.n(c),m=o(1174),h=o.n(m),p=o(1175),M=o.n(p),w=o(1176),y=o.n(w),E=o(1177),g=o.n(E),B=o(1178),f=o.n(B),S=o(1066),C=o(1075);n.default=Object(S.a)(function(e){var n=e.data;return t.a.createElement(t.a.Fragment,null,t.a.createElement(d.default,{h:"1",id:"modals"},"Modals"),t.a.createElement("p",{className:"lead"},"Add dialogs to your site for lightboxes, user notifications, or completely custom content."),t.a.createElement(d.default,{h:"2",id:"modals-overview"},"Overview"),t.a.createElement("ul",null,t.a.createElement("li",null,"Modals are positioned over everything else in the document and remove scroll from the ",t.a.createElement("code",null,"<body>")," so that modal content scrolls instead."),t.a.createElement("li",null,"Modals are ",t.a.createElement("em",null,"unmounted")," when closed."),t.a.createElement("li",null,"Bootstrap only supports ",t.a.createElement("strong",null,"one")," modal window at a time. Nested modals aren’t supported, but if you really need them the underlying ",t.a.createElement("code",null,"react-overlays")," can support them if you're willing."),t.a.createElement("li",null,'Modal\'s "trap" focus in them, ensuring the keyboard navigation cycles through the modal, and not the rest of the page.'),t.a.createElement("li",null,"Unlike vanilla Bootstrap, ",t.a.createElement("code",null,"autoFocus")," works in Modals because React handles the implementation.")),t.a.createElement(d.default,{h:"2",id:"modals-examples"},"Examples"),t.a.createElement(d.default,{h:"3",id:"modals-static"},"Static Markup"),t.a.createElement("p",null,"Below is a ",t.a.createElement("em",null,"static")," modal dialog (without the positioning) to demostrate the look and feel of the Modal."),t.a.createElement(i.a,{codeText:r.a}),t.a.createElement(d.default,{h:"3",id:"modals-live"},"Live demo"),t.a.createElement("p",null,"A modal with header, body, and set of actions in the footer. Use"," ",t.a.createElement("code",null,"<Modal/>")," in combination with other components to show or hide your Modal. The ",t.a.createElement("code",null,"<Modal/>"),' Component comes with a few convenient "sub components": ',t.a.createElement("code",null,"<Modal.Header/>"),","," ",t.a.createElement("code",null,"<Modal.Title/>"),", ",t.a.createElement("code",null,"<Modal.Body/>"),", and"," ",t.a.createElement("code",null,"<Modal.Footer/>"),", which you can use to build the Modal content."),t.a.createElement(i.a,{codeText:u.a}),t.a.createElement(d.default,{h:"3",id:"modals-live"},"Without Animation"),t.a.createElement("p",null,'A Modal can also be without an animation. For that set the "animation" prop to ',t.a.createElement("code",null,"false"),"."),t.a.createElement(i.a,{codeText:g.a}),t.a.createElement("div",{className:"bs-callout bs-callout-info"},t.a.createElement("div",{className:"h4"},"Additional Import Options"),t.a.createElement("p",null,"The Modal Header, Title, Body, and Footer components are available as static properties the ",t.a.createElement("code",null,"<Modal/>")," component, but you can also, import them directly like:"," ",t.a.createElement("code",null,'require("react-bootstrap/ModalHeader")'),".")),t.a.createElement(d.default,{h:"3",id:"modal-vertically-centered"},"Vertically centered"),t.a.createElement("p",null,'You can vertically center a modal by passing the "centered" prop.'),t.a.createElement(i.a,{codeText:y.a}),t.a.createElement(d.default,{h:"3",id:"modal-grid"},"Using the grid"),t.a.createElement("p",null,"You can use grid layouts within a model using regular grid components inside the modal content."),t.a.createElement(i.a,{codeText:f.a}),t.a.createElement(d.default,{h:"2",id:"modal-default-sizing"},"Optional Sizes"),t.a.createElement("p",null,'You can specify a bootstrap large or small modal by using the "size" prop.'),t.a.createElement(i.a,{codeText:h.a}),t.a.createElement(d.default,{h:"3",id:"modal-custom-sizing"},"Sizing modals using custom CSS"),t.a.createElement("p",null,'You can apply custom css to the modal dialog div using the "dialogClassName" prop. Example is using a custom css class with width set to 90%.'),t.a.createElement(i.a,{codeText:M.a,exampleClassName:C.custom}),t.a.createElement(d.default,{h:"2",id:"modals-props"},"API"),t.a.createElement(l.a,{metadata:n.Modal}),t.a.createElement(l.a,{metadata:n.ModalDialog}),t.a.createElement(l.a,{metadata:n.ModalHeader}),t.a.createElement(l.a,{metadata:n.ModalTitle}),t.a.createElement(l.a,{metadata:n.ModalBody}),t.a.createElement(l.a,{metadata:n.ModalFooter}))});var b="3111835207"},1172:function(e,n){e.exports='<Modal.Dialog>\n  <Modal.Header closeButton>\n    <Modal.Title>Modal title</Modal.Title>\n  </Modal.Header>\n\n  <Modal.Body>\n    <p>Modal body text goes here.</p>\n  </Modal.Body>\n\n  <Modal.Footer>\n    <Button variant="secondary">Close</Button>\n    <Button variant="primary">Save changes</Button>\n  </Modal.Footer>\n</Modal.Dialog>;\n'},1173:function(e,n){e.exports='function Example() {\n  const [show, setShow] = useState(false);\n\n  const handleClose = () => setShow(false);\n  const handleShow = () => setShow(true);\n\n  return (\n    <>\n      <Button variant="primary" onClick={handleShow}>\n        Launch demo modal\n      </Button>\n\n      <Modal show={show} onHide={handleClose}>\n        <Modal.Header closeButton>\n          <Modal.Title>Modal heading</Modal.Title>\n        </Modal.Header>\n        <Modal.Body>Woohoo, you\'re reading this text in a modal!</Modal.Body>\n        <Modal.Footer>\n          <Button variant="secondary" onClick={handleClose}>\n            Close\n          </Button>\n          <Button variant="primary" onClick={handleClose}>\n            Save Changes\n          </Button>\n        </Modal.Footer>\n      </Modal>\n    </>\n  );\n}\n\nrender(<Example />);\n'},1174:function(e,n){e.exports='function Example() {\n  const [smShow, setSmShow] = useState(false);\n  const [lgShow, setLgShow] = useState(false);\n\n  return (\n    <ButtonToolbar>\n      <Button onClick={() => setSmShow(true)}>Small modal</Button>\n      <Button onClick={() => setLgShow(true)}>Large modal</Button>\n\n      <Modal\n        size="sm"\n        show={smShow}\n        onHide={() => setSmShow(false)}\n        aria-labelledby="example-modal-sizes-title-sm"\n      >\n        <Modal.Header closeButton>\n          <Modal.Title id="example-modal-sizes-title-sm">\n            Small Modal\n          </Modal.Title>\n        </Modal.Header>\n        <Modal.Body>...</Modal.Body>\n      </Modal>\n\n      <Modal\n        size="lg"\n        show={lgShow}\n        onHide={() => setLgShow(false)}\n        aria-labelledby="example-modal-sizes-title-lg"\n      >\n        <Modal.Header closeButton>\n          <Modal.Title id="example-modal-sizes-title-lg">\n            Large Modal\n          </Modal.Title>\n        </Modal.Header>\n        <Modal.Body>...</Modal.Body>\n      </Modal>\n    </ButtonToolbar>\n  );\n}\n\nrender(<Example />);\n'},1175:function(e,n){e.exports='function Example() {\n  const [show, setShow] = useState(false);\n\n  return (\n    <>\n      <Button variant="primary" onClick={() => setShow(true)}>\n        Custom Width Modal\n      </Button>\n\n      <Modal\n        show={show}\n        onHide={() => setShow(false)}\n        dialogClassName="modal-90w"\n        aria-labelledby="example-custom-modal-styling-title"\n      >\n        <Modal.Header closeButton>\n          <Modal.Title id="example-custom-modal-styling-title">\n            Custom Modal Styling\n          </Modal.Title>\n        </Modal.Header>\n        <Modal.Body>\n          <p>\n            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde\n            commodi aspernatur enim, consectetur. Cumque deleniti temporibus\n            ipsam atque a dolores quisquam quisquam adipisci possimus\n            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod\n            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia\n            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum\n            deleniti rem!\n          </p>\n        </Modal.Body>\n      </Modal>\n    </>\n  );\n}\n\nrender(<Example />);\n'},1176:function(e,n){e.exports='function MyVerticallyCenteredModal(props) {\n  return (\n    <Modal\n      {...props}\n      size="lg"\n      aria-labelledby="contained-modal-title-vcenter"\n      centered\n    >\n      <Modal.Header closeButton>\n        <Modal.Title id="contained-modal-title-vcenter">\n          Modal heading\n        </Modal.Title>\n      </Modal.Header>\n      <Modal.Body>\n        <h4>Centered Modal</h4>\n        <p>\n          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac\n          consectetur ac, vestibulum at eros.\n        </p>\n      </Modal.Body>\n      <Modal.Footer>\n        <Button onClick={props.onHide}>Close</Button>\n      </Modal.Footer>\n    </Modal>\n  );\n}\n\nfunction App() {\n  const [modalShow, setModalShow] = React.useState(false);\n\n  return (\n    <ButtonToolbar>\n      <Button variant="primary" onClick={() => setModalShow(true)}>\n        Launch vertically centered modal\n      </Button>\n\n      <MyVerticallyCenteredModal\n        show={modalShow}\n        onHide={() => setModalShow(false)}\n      />\n    </ButtonToolbar>\n  );\n}\n\nrender(<App />);\n'},1177:function(e,n){e.exports='function Example() {\n  const [show, setShow] = useState(false);\n\n  const handleClose = () => setShow(false);\n  const handleShow = () => setShow(true);\n\n  return (\n    <>\n      <Button variant="primary" onClick={handleShow}>\n        Launch demo modal\n      </Button>\n\n      <Modal show={show} onHide={handleClose} animation={false}>\n        <Modal.Header closeButton>\n          <Modal.Title>Modal heading</Modal.Title>\n        </Modal.Header>\n        <Modal.Body>Woohoo, you\'re reading this text in a modal!</Modal.Body>\n        <Modal.Footer>\n          <Button variant="secondary" onClick={handleClose}>\n            Close\n          </Button>\n          <Button variant="primary" onClick={handleClose}>\n            Save Changes\n          </Button>\n        </Modal.Footer>\n      </Modal>\n    </>\n  );\n}\n\nrender(<Example />);\n'},1178:function(e,n){e.exports='function MydModalWithGrid(props) {\n  return (\n    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">\n      <Modal.Header closeButton>\n        <Modal.Title id="contained-modal-title-vcenter">\n          Using Grid in Modal\n        </Modal.Title>\n      </Modal.Header>\n      <Modal.Body>\n        <Container>\n          <Row className="show-grid">\n            <Col xs={12} md={8}>\n              <code>.col-xs-12 .col-md-8</code>\n            </Col>\n            <Col xs={6} md={4}>\n              <code>.col-xs-6 .col-md-4</code>\n            </Col>\n          </Row>\n\n          <Row className="show-grid">\n            <Col xs={6} md={4}>\n              <code>.col-xs-6 .col-md-4</code>\n            </Col>\n            <Col xs={6} md={4}>\n              <code>.col-xs-6 .col-md-4</code>\n            </Col>\n            <Col xs={6} md={4}>\n              <code>.col-xs-6 .col-md-4</code>\n            </Col>\n          </Row>\n        </Container>\n      </Modal.Body>\n      <Modal.Footer>\n        <Button onClick={props.onHide}>Close</Button>\n      </Modal.Footer>\n    </Modal>\n  );\n}\n\nfunction App() {\n  const [modalShow, setModalShow] = useState(false);\n\n  return (\n    <ButtonToolbar>\n      <Button variant="primary" onClick={() => setModalShow(true)}>\n        Launch modal with grid\n      </Button>\n\n      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />\n    </ButtonToolbar>\n  );\n}\n\nrender(<App />);\n'}}]);
//# sourceMappingURL=component---src-pages-components-modal-js-daad8028514c0732439f.js.map