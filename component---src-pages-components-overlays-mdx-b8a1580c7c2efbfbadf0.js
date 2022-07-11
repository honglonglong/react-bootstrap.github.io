(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"/02+":function(e,t){e.exports="import OverlayTrigger from 'react-bootstrap/OverlayTrigger';\nimport Tooltip from 'react-bootstrap/Tooltip';\n\nfunction TooltipInCopyExample() {\n  const Link = ({ id, children, title }) => (\n    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>\n      <a href=\"#\">{children}</a>\n    </OverlayTrigger>\n  );\n\n  return (\n    <p>\n      Tight pants next level keffiyeh{' '}\n      <Link title=\"Default title\" id=\"t-1\">\n        you probably\n      </Link>{' '}\n      haven't heard of them. Farm-to-table seitan, mcsweeney's fixie sustainable\n      quinoa 8-bit american apparel{' '}\n      <Link id=\"t-2\" title=\"Another one\">\n        have a\n      </Link>{' '}\n      terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo\n      thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's\n      cleanse vegan chambray. A really ironic artisan{' '}\n      <Link title=\"Another one here too\" id=\"t-3\">\n        whatever keytar\n      </Link>\n      , scenester farm-to-table banksy Austin{' '}\n      <Link title=\"The last tip!\" id=\"t-4\">\n        twitter handle\n      </Link>{' '}\n      freegan cred raw denim single-origin coffee viral.\n    </p>\n  );\n}\n\nexport default TooltipInCopyExample;\n"},"/xTU":function(e,t){e.exports="import Button from 'react-bootstrap/Button';\nimport OverlayTrigger from 'react-bootstrap/OverlayTrigger';\nimport Tooltip from 'react-bootstrap/Tooltip';\n\nfunction TooltipPositionedExample() {\n  return (\n    <>\n      {['top', 'right', 'bottom', 'left'].map((placement) => (\n        <OverlayTrigger\n          key={placement}\n          placement={placement}\n          overlay={\n            <Tooltip id={`tooltip-${placement}`}>\n              Tooltip on <strong>{placement}</strong>.\n            </Tooltip>\n          }\n        >\n          <Button variant=\"secondary\">Tooltip on {placement}</Button>\n        </OverlayTrigger>\n      ))}\n    </>\n  );\n}\n\nexport default TooltipPositionedExample;\n"},"2SAL":function(e,t){e.exports="import React, { useState, useRef } from 'react';\nimport Button from 'react-bootstrap/Button';\nimport Overlay from 'react-bootstrap/Overlay';\nimport Popover from 'react-bootstrap/Popover';\n\nfunction Example() {\n  const [show, setShow] = useState(false);\n  const [target, setTarget] = useState(null);\n  const ref = useRef(null);\n\n  const handleClick = (event) => {\n    setShow(!show);\n    setTarget(event.target);\n  };\n\n  return (\n    <div ref={ref}>\n      <Button onClick={handleClick}>Holy guacamole!</Button>\n\n      <Overlay\n        show={show}\n        target={target}\n        placement=\"bottom\"\n        container={ref}\n        containerPadding={20}\n      >\n        <Popover id=\"popover-contained\">\n          <Popover.Header as=\"h3\">Popover bottom</Popover.Header>\n          <Popover.Body>\n            <strong>Holy guacamole!</strong> Check this info.\n          </Popover.Body>\n        </Popover>\n      </Overlay>\n    </div>\n  );\n}\n\nrender(<Example />);\n"},"5Pna":function(e,t){e.exports="import Button from 'react-bootstrap/Button';\nimport OverlayTrigger from 'react-bootstrap/OverlayTrigger';\nimport Popover from 'react-bootstrap/Popover';\n\nfunction PopoverPositionedExample() {\n  return (\n    <>\n      {['top', 'right', 'bottom', 'left'].map((placement) => (\n        <OverlayTrigger\n          trigger=\"click\"\n          key={placement}\n          placement={placement}\n          overlay={\n            <Popover id={`popover-positioned-${placement}`}>\n              <Popover.Header as=\"h3\">{`Popover ${placement}`}</Popover.Header>\n              <Popover.Body>\n                <strong>Holy guacamole!</strong> Check this info.\n              </Popover.Body>\n            </Popover>\n          }\n        >\n          <Button variant=\"secondary\">Popover on {placement}</Button>\n        </OverlayTrigger>\n      ))}\n    </>\n  );\n}\n\nexport default PopoverPositionedExample;\n"},"6K3x":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return D})),n.d(t,"default",(function(){return _}));var o,r=n("wx14"),a=n("zLVn"),i=(n("mXGw"),n("7ljp")),l=n("Snbm"),p=n("vXRK"),s=n("1u5/"),c=n("h55t"),d=n("afGt"),m=n.n(d),u=n("oGE0"),g=n.n(u),v=n("lQ6g"),y=n.n(v),h=n("RCzV"),b=n.n(h),x=n("BZ6w"),f=n.n(x),O=n("2SAL"),T=n.n(O),j=n("5Pna"),w=n.n(j),C=n("trmH"),P=n.n(C),B=n("/02+"),k=n.n(B),N=n("O0ME"),R=n.n(N),E=n("/xTU"),S=n.n(E),A=n("bTvO"),H=n.n(A),I=["components"],D={},L=(o="PageHeader",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.mdx)("div",e)}),M={query:"3295368559",_frontmatter:D},U=l.a;function _(e){var t=e.components,n=Object(a.a)(e,I);return Object(i.mdx)(U,Object(r.a)({},M,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(L,{title:"Overlays",subTitle:"A set of components for positioning beautiful overlays, tooltips, popovers, and anything else you need.",mdxType:"PageHeader"}),Object(i.mdx)("h2",{id:"overview"},"Overview"),Object(i.mdx)("p",null,"Things to know about the React-Boostrap Overlay components."),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Overlays rely on the third-party library ",Object(i.mdx)("a",{parentName:"li",href:"https://popper.js.org"},"Popper.js"),".\nIt's included automatically with React-Bootstrap, but you should reference the API\nfor more advanced use cases."),Object(i.mdx)("li",{parentName:"ul"},"The ",Object(i.mdx)("inlineCode",{parentName:"li"},"<Tooltip>")," and ",Object(i.mdx)("inlineCode",{parentName:"li"},"<Popover>"),"\ncomponents do not position themselves. Instead the ",Object(i.mdx)("inlineCode",{parentName:"li"},"<Overlay>")," (or ",Object(i.mdx)("inlineCode",{parentName:"li"},"<OverlayTrigger>"),")\ncomponents, inject ",Object(i.mdx)("inlineCode",{parentName:"li"},"ref")," and ",Object(i.mdx)("inlineCode",{parentName:"li"},"style")," props."),Object(i.mdx)("li",{parentName:"ul"},"Tooltip expects specific props injected by the ",Object(i.mdx)("inlineCode",{parentName:"li"},"<Overlay>")," component"),Object(i.mdx)("li",{parentName:"ul"},"Tooltips for ",Object(i.mdx)("inlineCode",{parentName:"li"},"disabled")," elements must be triggered on a wrapper element.")),Object(i.mdx)("h2",{id:"overlay"},"Overlay"),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"Overlay")," is the fundamental component for positioning and\ncontrolling tooltip visibility. It's a wrapper around Popper.js, that\nadds support for transitions, and visibility toggling."),Object(i.mdx)("h3",{id:"creating-an-overlay"},"Creating an Overlay"),Object(i.mdx)("p",null,'Overlays consist of at least two elements, the "overlay", the element to\nbe positioned, as well as a "target", the element the overlay is\npositioned in relation to. You can also also have an "arrow" element,\nlike the tooltips and popovers, but that is optional. Be sure to\ncheck out the ',Object(i.mdx)("a",{parentName:"p",href:"https://popper.js.org/docs/v2"},"Popper"),"\ndocumentation for more details about the injected props."),Object(i.mdx)(s.a,{codeText:g.a,mdxType:"ReactPlayground"}),Object(i.mdx)("h2",{id:"overlaytrigger"},"OverlayTrigger"),Object(i.mdx)("p",null,"Since the above pattern is pretty common, but verbose, we've included\n",Object(i.mdx)("inlineCode",{parentName:"p"},"<OverlayTrigger>"),' component to help with common\nuse-cases. It even has functionality to delayed show or hides, and a few\ndifferent "trigger" events you can mix and match.'),Object(i.mdx)("p",null,"Note that triggering components must be able to accept ",Object(i.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"a ref"),"\nsince ",Object(i.mdx)("inlineCode",{parentName:"p"},"<OverlayTrigger>")," will attempt to add one. You can use\n",Object(i.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactforwardref"},"forwardRef()")," for function components."),Object(i.mdx)(s.a,{codeText:y.a,mdxType:"ReactPlayground"}),Object(i.mdx)("h3",{id:"customizing-trigger-behavior"},"Customizing trigger behavior"),Object(i.mdx)("p",null,"For more advanced behaviors ",Object(i.mdx)("inlineCode",{parentName:"p"},"<OverlayTrigger>")," accepts a\nfunction child that passes in the injected ",Object(i.mdx)("inlineCode",{parentName:"p"},"ref")," and event\nhandlers that correspond to the configured ",Object(i.mdx)("inlineCode",{parentName:"p"},"trigger")," prop."),Object(i.mdx)("p",null,"You can manually apply the props to any element you want or split them\nup. The example below shows how to position the overlay to a different\nelement than the one that triggers its visibility."),Object(i.mdx)(c.a,{mdxType:"Callout"},Object(i.mdx)("strong",null,"Pro Tip:")," Using the function form of OverlayTrigger avoids a",Object(i.mdx)("code",null,"React.findDOMNode")," call, for those trying to be strict mode compliant."),Object(i.mdx)(s.a,{codeText:b.a,mdxType:"ReactPlayground"}),Object(i.mdx)("h2",{id:"tooltips"},"Tooltips"),Object(i.mdx)("p",{className:"lead"},"A tooltip component for a more stylish alternative to that anchor tag"," ",Object(i.mdx)("code",null,"title")," attribute."),Object(i.mdx)("h3",{id:"examples"},"Examples"),Object(i.mdx)("p",null,"Hover over the links below to see tooltips."),Object(i.mdx)(s.a,{codeText:k.a,showCode:!1,mdxType:"ReactPlayground"}),Object(i.mdx)("p",null,"You can pass the ",Object(i.mdx)("inlineCode",{parentName:"p"},"Overlay")," injected props directly to the\nTooltip component."),Object(i.mdx)(s.a,{codeText:R.a,mdxType:"ReactPlayground"}),Object(i.mdx)("p",null,"Or pass a Tooltip element to ",Object(i.mdx)("inlineCode",{parentName:"p"},"OverlayTrigger")," instead."),Object(i.mdx)(s.a,{codeText:S.a,mdxType:"ReactPlayground"}),Object(i.mdx)("h2",{id:"popovers"},"Popovers"),Object(i.mdx)("p",{className:"lead"},"A popover component, like those found in iOS."),Object(i.mdx)("h3",{id:"examples-1"},"Examples"),Object(i.mdx)(s.a,{codeText:f.a,mdxType:"ReactPlayground"}),Object(i.mdx)("p",null,"As with ",Object(i.mdx)("inlineCode",{parentName:"p"},"<Tooltip>"),"s, you can control the placement of the Popover."),Object(i.mdx)(s.a,{codeText:w.a,mdxType:"ReactPlayground"}),Object(i.mdx)("h2",{id:"disabled-elements"},"Disabled elements"),Object(i.mdx)("p",null,"Elements with the ",Object(i.mdx)("inlineCode",{parentName:"p"},"disabled")," attribute aren’t interactive,\nmeaning users cannot hover or click them to trigger a popover (or\ntooltip). As a workaround, you’ll want to trigger the overlay from a\nwrapper ",Object(i.mdx)("inlineCode",{parentName:"p"},"<div>")," or ",Object(i.mdx)("inlineCode",{parentName:"p"},"<span>")," and override the ",Object(i.mdx)("inlineCode",{parentName:"p"},"pointer-events")," on the\ndisabled element."),Object(i.mdx)(s.a,{codeText:m.a,mdxType:"ReactPlayground"}),Object(i.mdx)("h2",{id:"changing-containers"},"Changing containers"),Object(i.mdx)("p",null,"You can specify a ",Object(i.mdx)("inlineCode",{parentName:"p"},"container")," to control the DOM element the\noverlay is appended to. This is especially useful when styles conflict\nwith your Overlays."),Object(i.mdx)(s.a,{codeText:T.a,exampleClassName:H.a.overlayContained,mdxType:"ReactPlayground"}),Object(i.mdx)("h2",{id:"updating-position-dynamically"},"Updating position dynamically"),Object(i.mdx)("p",null,"Since we can't know every time your overlay changes size, to reposition\nit, you need to take manual action if you want to update the position of\nan Overlay in response to a change."),Object(i.mdx)("p",null,"For this, the Overlay component also injects a a ",Object(i.mdx)("inlineCode",{parentName:"p"},"popper"),"\nprop with a ",Object(i.mdx)("inlineCode",{parentName:"p"},"scheduleUpdate()")," method that an overlay\ncomponent can use to reposition itself."),Object(i.mdx)(s.a,{codeText:P.a,mdxType:"ReactPlayground"}),Object(i.mdx)("h2",{id:"api"},"API"),Object(i.mdx)(p.a,{metadata:n.data.Overlay,mdxType:"ComponentApi"}),Object(i.mdx)(p.a,{metadata:n.data.OverlayTrigger,mdxType:"ComponentApi"}),Object(i.mdx)(p.a,{metadata:n.data.Tooltip,mdxType:"ComponentApi"}),Object(i.mdx)(p.a,{metadata:n.data.Popover,mdxType:"ComponentApi"}),Object(i.mdx)(p.a,{metadata:n.data.PopoverBody,mdxType:"ComponentApi"}),Object(i.mdx)(p.a,{metadata:n.data.PopoverHeader,mdxType:"ComponentApi"}))}_.isMDXComponent=!0},BZ6w:function(e,t){e.exports='import Button from \'react-bootstrap/Button\';\nimport OverlayTrigger from \'react-bootstrap/OverlayTrigger\';\nimport Popover from \'react-bootstrap/Popover\';\n\nconst popover = (\n  <Popover id="popover-basic">\n    <Popover.Header as="h3">Popover right</Popover.Header>\n    <Popover.Body>\n      And here\'s some <strong>amazing</strong> content. It\'s very engaging.\n      right?\n    </Popover.Body>\n  </Popover>\n);\n\nconst Example = () => (\n  <OverlayTrigger trigger="click" placement="right" overlay={popover}>\n    <Button variant="success">Click me to see</Button>\n  </OverlayTrigger>\n);\n\nrender(<Example />);\n'},O0ME:function(e,t){e.exports="import React, { useState, useRef } from 'react';\nimport Button from 'react-bootstrap/Button';\nimport Overlay from 'react-bootstrap/Overlay';\nimport Tooltip from 'react-bootstrap/Tooltip';\n\nfunction Example() {\n  const [show, setShow] = useState(false);\n  const target = useRef(null);\n\n  return (\n    <>\n      <Button ref={target} onClick={() => setShow(!show)}>\n        Click me!\n      </Button>\n      <Overlay target={target.current} show={show} placement=\"right\">\n        {(props) => (\n          <Tooltip id=\"overlay-example\" {...props}>\n            My Tooltip\n          </Tooltip>\n        )}\n      </Overlay>\n    </>\n  );\n}\n\nrender(<Example />);\n"},Q6D8:function(e,t,n){e.exports={callout:"Callout-styles-module--callout--1_K3h",warning:"Callout-styles-module--warning--39Zw- Callout-styles-module--callout--1_K3h",danger:"Callout-styles-module--danger--19388 Callout-styles-module--callout--1_K3h"}},RCzV:function(e,t){e.exports='import Button from \'react-bootstrap/Button\';\nimport Image from \'react-bootstrap/Image\';\nimport OverlayTrigger from \'react-bootstrap/OverlayTrigger\';\n\nfunction TriggerRendererProp() {\n  return (\n    <OverlayTrigger\n      placement="bottom"\n      overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}\n    >\n      {({ ref, ...triggerHandler }) => (\n        <Button\n          variant="light"\n          {...triggerHandler}\n          className="d-inline-flex align-items-center"\n        >\n          <Image\n            ref={ref}\n            roundedCircle\n            src="holder.js/20x20?text=J&bg=28a745&fg=FFF"\n          />\n          <span className="ms-1">Hover to see</span>\n        </Button>\n      )}\n    </OverlayTrigger>\n  );\n}\n\nexport default TriggerRendererProp;\n'},afGt:function(e,t){e.exports="import Button from 'react-bootstrap/Button';\nimport OverlayTrigger from 'react-bootstrap/OverlayTrigger';\nimport Tooltip from 'react-bootstrap/Tooltip';\n\nfunction DisabledExample() {\n  return (\n    <OverlayTrigger overlay={<Tooltip id=\"tooltip-disabled\">Tooltip!</Tooltip>}>\n      <span className=\"d-inline-block\">\n        <Button disabled style={{ pointerEvents: 'none' }}>\n          Disabled button\n        </Button>\n      </span>\n    </OverlayTrigger>\n  );\n}\n\nexport default DisabledExample;\n"},bTvO:function(e,t,n){e.exports={listGroup:"examples-module--list-group--IXNCn",ratioExamples:"examples-module--ratio-examples--Gv1Nw",staticDropdownMenu:"examples-module--static-dropdown-menu--kkfyD clearfix",customDropdownMenu:"examples-module--custom-dropdown-menu--2e_DR",overlayContained:"examples-module--overlay-contained--11C4s"}},h55t:function(e,t,n){"use strict";var o=n("oYCi"),r=n("Q6D8");t.a=function(e){var t=e.title,n=e.children,a=e.theme;return Object(o.jsxs)("aside",{role:"note",className:r[a||"warning"],children:[t&&Object(o.jsx)("header",{className:"h5",children:t}),Object(o.jsx)("div",{children:n})]})}},lQ6g:function(e,t){e.exports="import Button from 'react-bootstrap/Button';\nimport OverlayTrigger from 'react-bootstrap/OverlayTrigger';\nimport Tooltip from 'react-bootstrap/Tooltip';\n\nfunction TriggerExample() {\n  const renderTooltip = (props) => (\n    <Tooltip id=\"button-tooltip\" {...props}>\n      Simple tooltip\n    </Tooltip>\n  );\n\n  return (\n    <OverlayTrigger\n      placement=\"right\"\n      delay={{ show: 250, hide: 400 }}\n      overlay={renderTooltip}\n    >\n      <Button variant=\"success\">Hover me to see</Button>\n    </OverlayTrigger>\n  );\n}\n\nexport default TriggerExample;\n"},oGE0:function(e,t){e.exports="import React, { useState, useRef } from 'react';\nimport Button from 'react-bootstrap/Button';\nimport Overlay from 'react-bootstrap/Overlay';\n\nfunction Example() {\n  const [show, setShow] = useState(false);\n  const target = useRef(null);\n\n  return (\n    <>\n      <Button variant=\"danger\" ref={target} onClick={() => setShow(!show)}>\n        Click me to see\n      </Button>\n      <Overlay target={target.current} show={show} placement=\"right\">\n        {({ placement, arrowProps, show: _show, popper, ...props }) => (\n          <div\n            {...props}\n            style={{\n              position: 'absolute',\n              backgroundColor: 'rgba(255, 100, 100, 0.85)',\n              padding: '2px 10px',\n              color: 'white',\n              borderRadius: 3,\n              ...props.style,\n            }}\n          >\n            Simple tooltip\n          </div>\n        )}\n      </Overlay>\n    </>\n  );\n}\n\nrender(<Example />);\n"},trmH:function(e,t){e.exports="import React, { useEffect, useState } from 'react';\nimport Button from 'react-bootstrap/Button';\nimport OverlayTrigger from 'react-bootstrap/OverlayTrigger';\nimport Popover from 'react-bootstrap/Popover';\n\nconst UpdatingPopover = React.forwardRef(\n  ({ popper, children, show: _, ...props }, ref) => {\n    useEffect(() => {\n      console.log('updating!');\n      popper.scheduleUpdate();\n    }, [children, popper]);\n\n    return (\n      <Popover ref={ref} body {...props}>\n        {children}\n      </Popover>\n    );\n  },\n);\n\nconst longContent = `\n  Very long\n  Multiline content\n  that is engaging and what-not\n`;\nconst shortContent = 'Short and sweet!';\n\nfunction Example() {\n  const [content, setContent] = useState(shortContent);\n\n  useEffect(() => {\n    const timerId = setInterval(() => {\n      setContent(content === shortContent ? longContent : shortContent);\n    }, 3000);\n\n    return () => clearInterval(timerId);\n  });\n\n  return (\n    <OverlayTrigger\n      trigger=\"click\"\n      overlay={\n        <UpdatingPopover id=\"popover-contained\">{content}</UpdatingPopover>\n      }\n    >\n      <Button>Holy guacamole!</Button>\n    </OverlayTrigger>\n  );\n}\n\nrender(<Example />);\n"}}]);
//# sourceMappingURL=component---src-pages-components-overlays-mdx-b8a1580c7c2efbfbadf0.js.map