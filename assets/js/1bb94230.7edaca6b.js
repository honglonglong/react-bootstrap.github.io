"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[1110],{3905:(e,o,t)=>{t.d(o,{Zo:()=>p,kt:()=>b});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),m=function(e){var o=n.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},p=function(e){var o=m(e.components);return n.createElement(s.Provider,{value:o},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(t),u=r,b=d["".concat(s,".").concat(u)]||d[u]||c[u]||a;return t?n.createElement(b,i(i({ref:o},p),{},{components:t})):n.createElement(b,i({ref:o},p))}));function b(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<a;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},81592:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=t(87462),r=(t(67294),t(3905));const a={title:"Forms",description:"Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.",sidebar_label:"Overview",sidebar_position:1},i=void 0,l={unversionedId:"forms/overview",id:"forms/overview",title:"Forms",description:"Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.",source:"@site/docs/forms/overview.mdx",sourceDirName:"forms",slug:"/forms/overview",permalink:"/docs/forms/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Forms",description:"Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.",sidebar_label:"Overview",sidebar_position:1},sidebar:"sidebar",previous:{title:"Stacks",permalink:"/docs/layout/stack"},next:{title:"Form controls",permalink:"/docs/forms/form-control"}},s={},m=[{value:"Overview",id:"overview",level:2},{value:"Disabled forms",id:"disabled-forms",level:2},{value:"API",id:"api",level:2},{value:"Form",id:"form",level:3},{value:"FormLabel",id:"formlabel",level:3}],p=e=>function(o){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",o)},d=p("CodeBlock"),c=p("PropsTable"),u={toc:m};function b(e){let{components:o,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<FormControl>")," component renders a form control with Bootstrap styling.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"<FormGroup>")," component wraps a form control with proper spacing, along\nwith support for a label, help text, and validation state. To ensure\naccessibility, set ",(0,r.kt)("inlineCode",{parentName:"p"},"controlId")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"<FormGroup>"),", and use ",(0,r.kt)("inlineCode",{parentName:"p"},"<FormLabel>")," for\nthe label."),(0,r.kt)(d,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Button from \'react-bootstrap/Button\';\nimport Form from \'react-bootstrap/Form\';\n\nfunction BasicExample() {\n  return (\n    <Form>\n      <Form.Group className="mb-3" controlId="formBasicEmail">\n        <Form.Label>Email address</Form.Label>\n        <Form.Control type="email" placeholder="Enter email" />\n        <Form.Text className="text-muted">\n          We\'ll never share your email with anyone else.\n        </Form.Text>\n      </Form.Group>\n\n      <Form.Group className="mb-3" controlId="formBasicPassword">\n        <Form.Label>Password</Form.Label>\n        <Form.Control type="password" placeholder="Password" />\n      </Form.Group>\n      <Form.Group className="mb-3" controlId="formBasicCheckbox">\n        <Form.Check type="checkbox" label="Check me out" />\n      </Form.Group>\n      <Button variant="primary" type="submit">\n        Submit\n      </Button>\n    </Form>\n  );\n}\n\nexport default BasicExample;\n'),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<FormControl>")," component directly renders the ",(0,r.kt)("inlineCode",{parentName:"p"},"<input>")," or other specified\ncomponent. If you need to access the value of an uncontrolled ",(0,r.kt)("inlineCode",{parentName:"p"},"<FormControl>"),",\nattach a ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," to it as you would with an uncontrolled input, then call\n",(0,r.kt)("inlineCode",{parentName:"p"},"ReactDOM.findDOMNode(ref)")," to get the DOM node. You can then interact with that\nnode as you would with any other uncontrolled input."),(0,r.kt)("p",null,"If your application contains a large number of form groups, we recommend\nbuilding a higher-level component encapsulating a complete field group\nthat renders the label, the control, and any other necessary components.\nWe don't provide this out-of-the-box, because the composition of those\nfield groups is too specific to an individual application to admit a\ngood one-size-fits-all solution."),(0,r.kt)("h2",{id:"disabled-forms"},"Disabled forms"),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," boolean attribute on an input to prevent user interactions and\nmake it appear lighter."),(0,r.kt)(d,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Form from \'react-bootstrap/Form\';\n\nfunction FormDisabledInputExample() {\n  return (\n    <>\n      <Form.Group className="mb-3">\n        <Form.Label>Disabled input</Form.Label>\n        <Form.Control placeholder="Disabled input" disabled />\n      </Form.Group>\n      <Form.Group className="mb-3">\n        <Form.Label>Disabled select menu</Form.Label>\n        <Form.Select disabled>\n          <option>Disabled select</option>\n        </Form.Select>\n      </Form.Group>\n      <Form.Group className="mb-3">\n        <Form.Check type="checkbox" label="Can\'t check this" disabled />\n      </Form.Group>\n    </>\n  );\n}\n\nexport default FormDisabledInputExample;\n'),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," attribute to a ",(0,r.kt)("inlineCode",{parentName:"p"},"<fieldset>")," to disable all the controls within."),(0,r.kt)(d,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Button from \'react-bootstrap/Button\';\nimport Form from \'react-bootstrap/Form\';\n\nfunction FormDisabledExample() {\n  return (\n    <Form>\n      <fieldset disabled>\n        <Form.Group className="mb-3">\n          <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>\n          <Form.Control id="disabledTextInput" placeholder="Disabled input" />\n        </Form.Group>\n        <Form.Group className="mb-3">\n          <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>\n          <Form.Select id="disabledSelect">\n            <option>Disabled select</option>\n          </Form.Select>\n        </Form.Group>\n        <Form.Group className="mb-3">\n          <Form.Check\n            type="checkbox"\n            id="disabledFieldsetCheck"\n            label="Can\'t check this"\n          />\n        </Form.Group>\n        <Button type="submit">Submit</Button>\n      </fieldset>\n    </Form>\n  );\n}\n\nexport default FormDisabledExample;\n'),(0,r.kt)("p",null,"Browsers treat all native form controls (",(0,r.kt)("inlineCode",{parentName:"p"},"<input>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<select>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<button>")," elements)\ninside ",(0,r.kt)("inlineCode",{parentName:"p"},"<fieldset disabled>")," as disabled, preventing both keyboard and mouse interactions\non them."),(0,r.kt)("p",null,"However, if your form also includes custom button-like elements such as\n",(0,r.kt)("inlineCode",{parentName:"p"},'<a ... class="btn btn-*">'),", these will only be given a style of ",(0,r.kt)("inlineCode",{parentName:"p"},"pointer-events: none"),",\nmeaning they are still focusable and operable using the keyboard. In this case, you must\nmanually modify these controls by adding ",(0,r.kt)("inlineCode",{parentName:"p"},'tabindex="-1"')," to prevent them from receiving\nfocus and ",(0,r.kt)("inlineCode",{parentName:"p"},'aria-disabled="disabled"')," to signal their state to assistive technologies."),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"form"},"Form"),(0,r.kt)(c,{name:"Form",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"formlabel"},"FormLabel"),(0,r.kt)(c,{name:"FormLabel",mdxType:"PropsTable"}))}b.isMDXComponent=!0}}]);