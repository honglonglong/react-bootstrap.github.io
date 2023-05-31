"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[9257],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},v=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),v=r,u=d["".concat(p,".").concat(v)]||d[v]||m[v]||a;return n?o.createElement(u,i(i({ref:t},c),{},{components:n})):o.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=v;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}v.displayName="MDXCreateElement"},92011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={title:"Overlay",description:"A set of components for positioning beautiful overlays, tooltips, popovers, and anything else you need."},i=void 0,l={unversionedId:"components/overlays",id:"components/overlays",title:"Overlay",description:"A set of components for positioning beautiful overlays, tooltips, popovers, and anything else you need.",source:"@site/docs/components/overlays.mdx",sourceDirName:"components",slug:"/components/overlays",permalink:"/docs/components/overlays",draft:!1,tags:[],version:"current",frontMatter:{title:"Overlay",description:"A set of components for positioning beautiful overlays, tooltips, popovers, and anything else you need."},sidebar:"sidebar",previous:{title:"Offcanvas",permalink:"/docs/components/offcanvas"},next:{title:"Pagination",permalink:"/docs/components/pagination"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Overlay",id:"overlay",level:2},{value:"Creating an Overlay",id:"creating-an-overlay",level:3},{value:"Customizing Overlay rendering",id:"customizing-overlay-rendering",level:3},{value:"OverlayTrigger",id:"overlaytrigger",level:2},{value:"Customizing trigger behavior",id:"customizing-trigger-behavior",level:3},{value:"Tooltips",id:"tooltips",level:2},{value:"Examples",id:"examples",level:3},{value:"Popovers",id:"popovers",level:2},{value:"Examples",id:"examples-1",level:3},{value:"Disabled elements",id:"disabled-elements",level:2},{value:"Changing containers",id:"changing-containers",level:2},{value:"Updating position dynamically",id:"updating-position-dynamically",level:2},{value:"API",id:"api",level:2},{value:"Overlay",id:"overlay-1",level:3},{value:"OverlayTrigger",id:"overlaytrigger-1",level:3},{value:"Tooltip",id:"tooltip",level:3},{value:"Popover",id:"popover",level:3},{value:"PopoverBody",id:"popoverbody",level:3},{value:"PopoverHeader",id:"popoverheader",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=c("CodeBlock"),m=c("PropsTable"),v={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Things to know about the React-Bootstrap Overlay components."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Overlays rely on the third-party library ",(0,r.kt)("a",{parentName:"li",href:"https://popper.js.org"},"Popper.js"),".\nIt's included automatically with React-Bootstrap, but you should reference the API\nfor more advanced use cases."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"<Tooltip>")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"<Popover>")," components do not position themselves. Instead the\n",(0,r.kt)("inlineCode",{parentName:"li"},"<Overlay>")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},"<OverlayTrigger>"),") components, inject ",(0,r.kt)("inlineCode",{parentName:"li"},"ref")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"style")," props."),(0,r.kt)("li",{parentName:"ul"},"Tooltip expects specific props injected by the ",(0,r.kt)("inlineCode",{parentName:"li"},"<Overlay>")," component."),(0,r.kt)("li",{parentName:"ul"},"Tooltips for ",(0,r.kt)("inlineCode",{parentName:"li"},"disabled")," elements must be triggered on a wrapper element.")),(0,r.kt)("h2",{id:"overlay"},"Overlay"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Overlay")," is the fundamental component for positioning and\ncontrolling tooltip visibility. It's a wrapper around Popper.js, that\nadds support for transitions, and visibility toggling."),(0,r.kt)("h3",{id:"creating-an-overlay"},"Creating an Overlay"),(0,r.kt)("p",null,'Overlays consist of at least two elements, the "overlay", the element to\nbe positioned, as well as a "target", the element the overlay is\npositioned in relation to. You can also have an "arrow" element,\nlike the tooltips and popovers, but that is optional. Be sure to\ncheck out the ',(0,r.kt)("a",{parentName:"p",href:"https://popper.js.org/docs/v2"},"Popper"),"\ndocumentation for more details about the injected props."),(0,r.kt)(d,{language:"jsx",live:!0,mdxType:"CodeBlock"},"import { useState, useRef } from 'react';\nimport Button from 'react-bootstrap/Button';\nimport Overlay from 'react-bootstrap/Overlay';\n\nfunction Example() {\n  const [show, setShow] = useState(false);\n  const target = useRef(null);\n\n  return (\n    <>\n      <Button variant=\"danger\" ref={target} onClick={() => setShow(!show)}>\n        Click me to see\n      </Button>\n      <Overlay target={target.current} show={show} placement=\"right\">\n        {({\n          placement: _placement,\n          arrowProps: _arrowProps,\n          show: _show,\n          popper: _popper,\n          hasDoneInitialMeasure: _hasDoneInitialMeasure,\n          ...props\n        }) => (\n          <div\n            {...props}\n            style={{\n              position: 'absolute',\n              backgroundColor: 'rgba(255, 100, 100, 0.85)',\n              padding: '2px 10px',\n              color: 'white',\n              borderRadius: 3,\n              ...props.style,\n            }}\n          >\n            Simple tooltip\n          </div>\n        )}\n      </Overlay>\n    </>\n  );\n}\n\nexport default Example;\n"),(0,r.kt)("h3",{id:"customizing-overlay-rendering"},"Customizing Overlay rendering"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Overlay")," injects a number of props that you can use to customize the\nrendering behavior. There is a case where you would need to show the overlay\nbefore ",(0,r.kt)("inlineCode",{parentName:"p"},"Popper")," can measure and position it properly. In React-Bootstrap,\ntooltips and popovers sets the opacity and position to avoid issues where\nthe initial positioning of the overlay is incorrect. See the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Tooltip.tsx"},"Tooltip"),"\nimplementation for an example on how this is done."),(0,r.kt)("h2",{id:"overlaytrigger"},"OverlayTrigger"),(0,r.kt)("p",null,"Since the above pattern is pretty common, but verbose, we've included\n",(0,r.kt)("inlineCode",{parentName:"p"},"<OverlayTrigger>"),' component to help with common\nuse-cases. It even has functionality to delayed show or hides, and a few\ndifferent "trigger" events you can mix and match.'),(0,r.kt)("p",null,"Note that triggering components must be able to accept ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"a ref"),"\nsince ",(0,r.kt)("inlineCode",{parentName:"p"},"<OverlayTrigger>")," will attempt to add one. You can use\n",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactforwardref"},"forwardRef()")," for function components."),(0,r.kt)(d,{language:"jsx",live:!0,mdxType:"CodeBlock"},"import Button from 'react-bootstrap/Button';\nimport OverlayTrigger from 'react-bootstrap/OverlayTrigger';\nimport Tooltip from 'react-bootstrap/Tooltip';\n\nfunction TriggerExample() {\n  const renderTooltip = (props) => (\n    <Tooltip id=\"button-tooltip\" {...props}>\n      Simple tooltip\n    </Tooltip>\n  );\n\n  return (\n    <OverlayTrigger\n      placement=\"right\"\n      delay={{ show: 250, hide: 400 }}\n      overlay={renderTooltip}\n    >\n      <Button variant=\"success\">Hover me to see</Button>\n    </OverlayTrigger>\n  );\n}\n\nexport default TriggerExample;\n"),(0,r.kt)("h3",{id:"customizing-trigger-behavior"},"Customizing trigger behavior"),(0,r.kt)("p",null,"For more advanced behaviors ",(0,r.kt)("inlineCode",{parentName:"p"},"<OverlayTrigger>")," accepts a\nfunction child that passes in the injected ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," and event\nhandlers that correspond to the configured ",(0,r.kt)("inlineCode",{parentName:"p"},"trigger")," prop."),(0,r.kt)("p",null,"You can manually apply the props to any element you want or split them\nup. The example below shows how to position the overlay to a different\nelement than the one that triggers its visibility."),(0,r.kt)("admonition",{title:"Pro Tip",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Using the function form of OverlayTrigger avoids a\n",(0,r.kt)("inlineCode",{parentName:"p"},"React.findDOMNode")," call, for those trying to be strict mode\ncompliant.")),(0,r.kt)(d,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Button from \'react-bootstrap/Button\';\nimport Image from \'react-bootstrap/Image\';\nimport OverlayTrigger from \'react-bootstrap/OverlayTrigger\';\n\nfunction TriggerRendererProp() {\n  return (\n    <OverlayTrigger\n      placement="bottom"\n      overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}\n    >\n      {({ ref, ...triggerHandler }) => (\n        <Button\n          variant="light"\n          {...triggerHandler}\n          className="d-inline-flex align-items-center"\n        >\n          <Image\n            ref={ref}\n            roundedCircle\n            src="holder.js/20x20?text=J&bg=28a745&fg=FFF"\n          />\n          <span className="ms-1">Hover to see</span>\n        </Button>\n      )}\n    </OverlayTrigger>\n  );\n}\n\nexport default TriggerRendererProp;\n'),(0,r.kt)("h2",{id:"tooltips"},"Tooltips"),(0,r.kt)("p",{className:"lead"},"A tooltip component for a more stylish alternative to that anchor tag"," ",(0,r.kt)("code",null,"title")," attribute."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Hover over the links below to see tooltips."),(0,r.kt)(d,{language:"jsx",live:!0,mdxType:"CodeBlock"},"import OverlayTrigger from 'react-bootstrap/OverlayTrigger';\nimport Tooltip from 'react-bootstrap/Tooltip';\n\nfunction TooltipInCopyExample() {\n  const Link = ({ id, children, title }) => (\n    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>\n      <a href=\"#\">{children}</a>\n    </OverlayTrigger>\n  );\n\n  return (\n    <p>\n      Tight pants next level keffiyeh{' '}\n      <Link title=\"Default title\" id=\"t-1\">\n        you probably\n      </Link>{' '}\n      haven't heard of them. Farm-to-table seitan, mcsweeney's fixie sustainable\n      quinoa 8-bit american apparel{' '}\n      <Link id=\"t-2\" title=\"Another one\">\n        have a\n      </Link>{' '}\n      terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo\n      thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's\n      cleanse vegan chambray. A really ironic artisan{' '}\n      <Link title=\"Another one here too\" id=\"t-3\">\n        whatever keytar\n      </Link>\n      , scenester farm-to-table banksy Austin{' '}\n      <Link title=\"The last tip!\" id=\"t-4\">\n        twitter handle\n      </Link>{' '}\n      freegan cred raw denim single-origin coffee viral.\n    </p>\n  );\n}\n\nexport default TooltipInCopyExample;\n"),(0,r.kt)("p",null,"You can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"Overlay")," injected props directly to the\nTooltip component."),(0,r.kt)(d,{language:"jsx",live:!0,mdxType:"CodeBlock"},"import { useState, useRef } from 'react';\nimport Button from 'react-bootstrap/Button';\nimport Overlay from 'react-bootstrap/Overlay';\nimport Tooltip from 'react-bootstrap/Tooltip';\n\nfunction Example() {\n  const [show, setShow] = useState(false);\n  const target = useRef(null);\n\n  return (\n    <>\n      <Button ref={target} onClick={() => setShow(!show)}>\n        Click me!\n      </Button>\n      <Overlay target={target.current} show={show} placement=\"right\">\n        {(props) => (\n          <Tooltip id=\"overlay-example\" {...props}>\n            My Tooltip\n          </Tooltip>\n        )}\n      </Overlay>\n    </>\n  );\n}\n\nexport default Example;\n"),(0,r.kt)("p",null,"Or pass a Tooltip element to ",(0,r.kt)("inlineCode",{parentName:"p"},"OverlayTrigger")," instead."),(0,r.kt)(d,{language:"jsx",live:!0,mdxType:"CodeBlock"},"import Button from 'react-bootstrap/Button';\nimport OverlayTrigger from 'react-bootstrap/OverlayTrigger';\nimport Tooltip from 'react-bootstrap/Tooltip';\n\nfunction TooltipPositionedExample() {\n  return (\n    <>\n      {['top', 'right', 'bottom', 'left'].map((placement) => (\n        <OverlayTrigger\n          key={placement}\n          placement={placement}\n          overlay={\n            <Tooltip id={`tooltip-${placement}`}>\n              Tooltip on <strong>{placement}</strong>.\n            </Tooltip>\n          }\n        >\n          <Button variant=\"secondary\">Tooltip on {placement}</Button>\n        </OverlayTrigger>\n      ))}\n    </>\n  );\n}\n\nexport default TooltipPositionedExample;\n"),(0,r.kt)("h2",{id:"popovers"},"Popovers"),(0,r.kt)("p",{className:"lead"},"A popover component, like those found in iOS."),(0,r.kt)("h3",{id:"examples-1"},"Examples"),(0,r.kt)(d,{language:"jsx",live:!0,noInline:!0,mdxType:"CodeBlock"},'import Button from \'react-bootstrap/Button\';\nimport OverlayTrigger from \'react-bootstrap/OverlayTrigger\';\nimport Popover from \'react-bootstrap/Popover\';\n\nconst popover = (\n  <Popover id="popover-basic">\n    <Popover.Header as="h3">Popover right</Popover.Header>\n    <Popover.Body>\n      And here\'s some <strong>amazing</strong> content. It\'s very engaging.\n      right?\n    </Popover.Body>\n  </Popover>\n);\n\nconst Example = () => (\n  <OverlayTrigger trigger="click" placement="right" overlay={popover}>\n    <Button variant="success">Click me to see</Button>\n  </OverlayTrigger>\n);\n\nrender(<Example />);\n'),(0,r.kt)("p",null,"As with ",(0,r.kt)("inlineCode",{parentName:"p"},"<Tooltip>"),"s, you can control the placement of the Popover."),(0,r.kt)(d,{language:"jsx",live:!0,mdxType:"CodeBlock"},"import Button from 'react-bootstrap/Button';\nimport OverlayTrigger from 'react-bootstrap/OverlayTrigger';\nimport Popover from 'react-bootstrap/Popover';\n\nfunction PopoverPositionedExample() {\n  return (\n    <>\n      {['top', 'right', 'bottom', 'left'].map((placement) => (\n        <OverlayTrigger\n          trigger=\"click\"\n          key={placement}\n          placement={placement}\n          overlay={\n            <Popover id={`popover-positioned-${placement}`}>\n              <Popover.Header as=\"h3\">{`Popover ${placement}`}</Popover.Header>\n              <Popover.Body>\n                <strong>Holy guacamole!</strong> Check this info.\n              </Popover.Body>\n            </Popover>\n          }\n        >\n          <Button variant=\"secondary\">Popover on {placement}</Button>\n        </OverlayTrigger>\n      ))}\n    </>\n  );\n}\n\nexport default PopoverPositionedExample;\n"),(0,r.kt)("h2",{id:"disabled-elements"},"Disabled elements"),(0,r.kt)("p",null,"Elements with the ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," attribute aren\u2019t interactive,\nmeaning users cannot hover or click them to trigger a popover (or\ntooltip). As a workaround, you\u2019ll want to trigger the overlay from a\nwrapper ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"<span>")," and override the ",(0,r.kt)("inlineCode",{parentName:"p"},"pointer-events")," on the\ndisabled element."),(0,r.kt)(d,{language:"jsx",live:!0,mdxType:"CodeBlock"},"import Button from 'react-bootstrap/Button';\nimport OverlayTrigger from 'react-bootstrap/OverlayTrigger';\nimport Tooltip from 'react-bootstrap/Tooltip';\n\nfunction DisabledExample() {\n  return (\n    <OverlayTrigger overlay={<Tooltip id=\"tooltip-disabled\">Tooltip!</Tooltip>}>\n      <span className=\"d-inline-block\">\n        <Button disabled style={{ pointerEvents: 'none' }}>\n          Disabled button\n        </Button>\n      </span>\n    </OverlayTrigger>\n  );\n}\n\nexport default DisabledExample;\n"),(0,r.kt)("h2",{id:"changing-containers"},"Changing containers"),(0,r.kt)("p",null,"You can specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"container")," to control the DOM element the\noverlay is appended to. This is especially useful when styles conflict\nwith your Overlays."),(0,r.kt)(d,{language:"jsx",live:!0,previewClassName:"overlay-contained",mdxType:"CodeBlock"},"import { useState, useRef } from 'react';\nimport Button from 'react-bootstrap/Button';\nimport Overlay from 'react-bootstrap/Overlay';\nimport Popover from 'react-bootstrap/Popover';\n\nfunction Example() {\n  const [show, setShow] = useState(false);\n  const [target, setTarget] = useState(null);\n  const ref = useRef(null);\n\n  const handleClick = (event) => {\n    setShow(!show);\n    setTarget(event.target);\n  };\n\n  return (\n    <div ref={ref}>\n      <Button onClick={handleClick}>Holy guacamole!</Button>\n\n      <Overlay\n        show={show}\n        target={target}\n        placement=\"bottom\"\n        container={ref}\n        containerPadding={20}\n      >\n        <Popover id=\"popover-contained\">\n          <Popover.Header as=\"h3\">Popover bottom</Popover.Header>\n          <Popover.Body>\n            <strong>Holy guacamole!</strong> Check this info.\n          </Popover.Body>\n        </Popover>\n      </Overlay>\n    </div>\n  );\n}\n\nexport default Example;\n"),(0,r.kt)("h2",{id:"updating-position-dynamically"},"Updating position dynamically"),(0,r.kt)("p",null,"Since we can't know every time your overlay changes size, to reposition\nit, you need to take manual action if you want to update the position of\nan Overlay in response to a change."),(0,r.kt)("p",null,"For this, the Overlay component also injects a ",(0,r.kt)("inlineCode",{parentName:"p"},"popper"),"\nprop with a ",(0,r.kt)("inlineCode",{parentName:"p"},"scheduleUpdate()")," method that an overlay\ncomponent can use to reposition itself."),(0,r.kt)(d,{language:"jsx",live:!0,noInline:!0,mdxType:"CodeBlock"},"import React, { useEffect, useState } from 'react';\nimport Button from 'react-bootstrap/Button';\nimport OverlayTrigger from 'react-bootstrap/OverlayTrigger';\nimport Popover from 'react-bootstrap/Popover';\n\nconst UpdatingPopover = React.forwardRef(\n  ({ popper, children, show: _, ...props }, ref) => {\n    useEffect(() => {\n      console.log('updating!');\n      popper.scheduleUpdate();\n    }, [children, popper]);\n\n    return (\n      <Popover ref={ref} body {...props}>\n        {children}\n      </Popover>\n    );\n  },\n);\n\nconst longContent = `\n  Very long\n  Multiline content\n  that is engaging and what-not\n`;\nconst shortContent = 'Short and sweet!';\n\nfunction Example() {\n  const [content, setContent] = useState(shortContent);\n\n  useEffect(() => {\n    const timerId = setInterval(() => {\n      setContent(content === shortContent ? longContent : shortContent);\n    }, 3000);\n\n    return () => clearInterval(timerId);\n  });\n\n  return (\n    <OverlayTrigger\n      trigger=\"click\"\n      overlay={\n        <UpdatingPopover id=\"popover-contained\">{content}</UpdatingPopover>\n      }\n    >\n      <Button>Holy guacamole!</Button>\n    </OverlayTrigger>\n  );\n}\n\nrender(<Example />);\n"),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"overlay-1"},"Overlay"),(0,r.kt)(m,{name:"Overlay",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"overlaytrigger-1"},"OverlayTrigger"),(0,r.kt)(m,{name:"OverlayTrigger",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"tooltip"},"Tooltip"),(0,r.kt)(m,{name:"Tooltip",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"popover"},"Popover"),(0,r.kt)(m,{name:"Popover",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"popoverbody"},"PopoverBody"),(0,r.kt)(m,{name:"PopoverBody",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"popoverheader"},"PopoverHeader"),(0,r.kt)(m,{name:"PopoverHeader",mdxType:"PropsTable"}))}u.isMDXComponent=!0}}]);