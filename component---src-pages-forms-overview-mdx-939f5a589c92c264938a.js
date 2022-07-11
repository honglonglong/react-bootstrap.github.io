(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{DxHo:function(e,n,o){"use strict";o.r(n),o.d(n,"_frontmatter",(function(){return F})),o.d(n,"default",(function(){return j}));var t,a=o("wx14"),r=o("zLVn"),m=(o("mXGw"),o("7ljp")),l=o("Snbm"),i=o("vXRK"),d=o("1u5/"),s=o("Jdld"),p=o.n(s),c=o("n3XQ"),b=o.n(c),u=o("cgdb"),x=o.n(u),h=["components"],F={},f=(t="PageHeader",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),Object(m.mdx)("div",e)}),y={query:"4050936089",_frontmatter:F},O=l.a;function j(e){var n=e.components,o=Object(r.a)(e,h);return Object(m.mdx)(O,Object(a.a)({},y,o,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)(f,{title:"Forms",subTitle:"Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.",mdxType:"PageHeader"}),Object(m.mdx)("h2",{id:"overview"},"Overview"),Object(m.mdx)("p",null,"The ",Object(m.mdx)("inlineCode",{parentName:"p"},"<FormControl>")," component renders a form control with Bootstrap styling.\nThe ",Object(m.mdx)("inlineCode",{parentName:"p"},"<FormGroup>")," component wraps a form control with proper spacing, along\nwith support for a label, help text, and validation state. To ensure\naccessibility, set ",Object(m.mdx)("inlineCode",{parentName:"p"},"controlId")," on ",Object(m.mdx)("inlineCode",{parentName:"p"},"<FormGroup>"),", and use ",Object(m.mdx)("inlineCode",{parentName:"p"},"<FormLabel>")," for\nthe label."),Object(m.mdx)(d.a,{codeText:p.a,mdxType:"ReactPlayground"}),Object(m.mdx)("p",null,"The ",Object(m.mdx)("inlineCode",{parentName:"p"},"<FormControl>")," component directly renders the ",Object(m.mdx)("inlineCode",{parentName:"p"},"<input>")," or other specified\ncomponent. If you need to access the value of an uncontrolled ",Object(m.mdx)("inlineCode",{parentName:"p"},"<FormControl>"),",\nattach a ",Object(m.mdx)("inlineCode",{parentName:"p"},"ref")," to it as you would with an uncontrolled input, then call\n",Object(m.mdx)("inlineCode",{parentName:"p"},"ReactDOM.findDOMNode(ref)")," to get the DOM node. You can then interact with that\nnode as you would with any other uncontrolled input."),Object(m.mdx)("p",null,"If your application contains a large number of form groups, we recommend\nbuilding a higher-level component encapsulating a complete field group\nthat renders the label, the control, and any other necessary components.\nWe don't provide this out-of-the-box, because the composition of those\nfield groups is too specific to an individual application to admit a\ngood one-size-fits-all solution."),Object(m.mdx)("h2",{id:"disabled-forms"},"Disabled forms"),Object(m.mdx)("p",null,"Add the ",Object(m.mdx)("inlineCode",{parentName:"p"},"disabled")," boolean attribute on an input to prevent user interactions and\nmake it appear lighter."),Object(m.mdx)(d.a,{codeText:x.a,mdxType:"ReactPlayground"}),Object(m.mdx)("p",null,"Add the ",Object(m.mdx)("inlineCode",{parentName:"p"},"disabled")," attribute to a ",Object(m.mdx)("inlineCode",{parentName:"p"},"<fieldset>")," to disable all the controls within."),Object(m.mdx)(d.a,{codeText:b.a,mdxType:"ReactPlayground"}),Object(m.mdx)("p",null,"Browsers treat all native form controls (",Object(m.mdx)("inlineCode",{parentName:"p"},"<input>"),", ",Object(m.mdx)("inlineCode",{parentName:"p"},"<select>")," and ",Object(m.mdx)("inlineCode",{parentName:"p"},"<button>")," elements)\ninside ",Object(m.mdx)("inlineCode",{parentName:"p"},"<fieldset disabled>")," as disabled, preventing both keyboard and mouse interactions\non them."),Object(m.mdx)("p",null,"However, if your form also includes custom button-like elements such as\n",Object(m.mdx)("inlineCode",{parentName:"p"},'<a ... class="btn btn-*">'),", these will only be given a style of ",Object(m.mdx)("inlineCode",{parentName:"p"},"pointer-events: none"),",\nmeaning they are still focusable and operable using the keyboard. In this case, you must\nmanually modify these controls by adding ",Object(m.mdx)("inlineCode",{parentName:"p"},'tabindex="-1"')," to prevent them from receiving\nfocus and ",Object(m.mdx)("inlineCode",{parentName:"p"},'aria-disabled="disabled"')," to signal their state to assistive technologies."),Object(m.mdx)("h2",{id:"api"},"API"),Object(m.mdx)(i.a,{metadata:o.data.Form,mdxType:"ComponentApi"}),Object(m.mdx)(i.a,{metadata:o.data.FormLabel,exportedBy:o.data.Form,mdxType:"ComponentApi"}))}j.isMDXComponent=!0},Jdld:function(e,n){e.exports='import Button from \'react-bootstrap/Button\';\nimport Form from \'react-bootstrap/Form\';\n\nfunction BasicExample() {\n  return (\n    <Form>\n      <Form.Group className="mb-3" controlId="formBasicEmail">\n        <Form.Label>Email address</Form.Label>\n        <Form.Control type="email" placeholder="Enter email" />\n        <Form.Text className="text-muted">\n          We\'ll never share your email with anyone else.\n        </Form.Text>\n      </Form.Group>\n\n      <Form.Group className="mb-3" controlId="formBasicPassword">\n        <Form.Label>Password</Form.Label>\n        <Form.Control type="password" placeholder="Password" />\n      </Form.Group>\n      <Form.Group className="mb-3" controlId="formBasicCheckbox">\n        <Form.Check type="checkbox" label="Check me out" />\n      </Form.Group>\n      <Button variant="primary" type="submit">\n        Submit\n      </Button>\n    </Form>\n  );\n}\n\nexport default BasicExample;\n'},cgdb:function(e,n){e.exports='import Form from \'react-bootstrap/Form\';\n\nfunction FormDisabledInputExample() {\n  return (\n    <>\n      <Form.Group className="mb-3">\n        <Form.Label>Disabled input</Form.Label>\n        <Form.Control placeholder="Disabled input" disabled />\n      </Form.Group>\n      <Form.Group className="mb-3">\n        <Form.Label>Disabled select menu</Form.Label>\n        <Form.Select disabled>\n          <option>Disabled select</option>\n        </Form.Select>\n      </Form.Group>\n      <Form.Group className="mb-3">\n        <Form.Check type="checkbox" label="Can\'t check this" disabled />\n      </Form.Group>\n    </>\n  );\n}\n\nexport default FormDisabledInputExample;\n'},n3XQ:function(e,n){e.exports='import Button from \'react-bootstrap/Button\';\nimport Form from \'react-bootstrap/Form\';\n\nfunction FormDisabledExample() {\n  return (\n    <Form>\n      <fieldset disabled>\n        <Form.Group className="mb-3">\n          <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>\n          <Form.Control id="disabledTextInput" placeholder="Disabled input" />\n        </Form.Group>\n        <Form.Group className="mb-3">\n          <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>\n          <Form.Select id="disabledSelect">\n            <option>Disabled select</option>\n          </Form.Select>\n        </Form.Group>\n        <Form.Group className="mb-3">\n          <Form.Check\n            type="checkbox"\n            id="disabledFieldsetCheck"\n            label="Can\'t check this"\n          />\n        </Form.Group>\n        <Button type="submit">Submit</Button>\n      </fieldset>\n    </Form>\n  );\n}\n\nexport default FormDisabledExample;\n'}}]);
//# sourceMappingURL=component---src-pages-forms-overview-mdx-939f5a589c92c264938a.js.map