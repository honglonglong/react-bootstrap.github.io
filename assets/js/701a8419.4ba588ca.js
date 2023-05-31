"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[1009],{3905:(e,n,o)=>{o.d(n,{Zo:()=>p,kt:()=>F});var r=o(67294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var m=r.createContext({}),s=function(e){var n=r.useContext(m),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},p=function(e){var n=s(e.components);return r.createElement(m.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var o=e.components,t=e.mdxType,a=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(o),c=t,F=d["".concat(m,".").concat(c)]||d[c]||u[c]||a;return o?r.createElement(F,i(i({ref:n},p),{},{components:o})):r.createElement(F,i({ref:n},p))}));function F(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=o.length,i=new Array(a);i[0]=c;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l[d]="string"==typeof e?e:t,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},16194:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>F,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(87462),t=(o(67294),o(3905));const a={title:"Validation",description:"Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.",sidebar_position:10},i=void 0,l={unversionedId:"forms/validation",id:"forms/validation",title:"Validation",description:"Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.",source:"@site/docs/forms/validation.mdx",sourceDirName:"forms",slug:"/forms/validation",permalink:"/docs/forms/validation",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Validation",description:"Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.",sidebar_position:10},sidebar:"sidebar",previous:{title:"Layout",permalink:"/docs/forms/layout"},next:{title:"Accordion",permalink:"/docs/components/accordion"}},m={},s=[{value:"Native HTML5 form validation",id:"native-html5-form-validation",level:2},{value:"Form libraries and server-rendered styles",id:"form-libraries-and-server-rendered-styles",level:2},{value:"Tooltips",id:"tooltips",level:2},{value:"Input group validation",id:"input-group-validation",level:2},{value:"API",id:"api",level:2},{value:"Feedback",id:"feedback",level:3}],p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.kt)("div",n)},d=p("CodeBlock"),u=p("PropsTable"),c={toc:s};function F(e){let{components:n,...o}=e;return(0,t.kt)("wrapper",(0,r.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"native-html5-form-validation"},"Native HTML5 form validation"),(0,t.kt)("p",null,"For native HTML form validation\u2013",(0,t.kt)("a",{parentName:"p",href:"https://caniuse.com/#feat=form-validation"},"available in all our supported browsers"),",\nthe ",(0,t.kt)("inlineCode",{parentName:"p"},":valid")," and ",(0,t.kt)("inlineCode",{parentName:"p"},":invalid")," pseudo selectors are used to apply validation\nstyles as well as display feedback messages."),(0,t.kt)("p",null,"Bootstrap scopes the ",(0,t.kt)("inlineCode",{parentName:"p"},":valid")," and ",(0,t.kt)("inlineCode",{parentName:"p"},":invalid")," styles to parent ",(0,t.kt)("inlineCode",{parentName:"p"},".was-validated"),"\nclass, usually applied to the ",(0,t.kt)("inlineCode",{parentName:"p"},"<Form>")," (you can use the ",(0,t.kt)("inlineCode",{parentName:"p"},"validated")," prop\nas a shortcut). Otherwise, any required field without a value shows up\nas invalid on page load. This way, you may choose when to activate them\n(typically after form submission is attempted)."),(0,t.kt)("admonition",{title:"Watch out!",type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"Browsers provide their own validation UI by default on ",(0,t.kt)("inlineCode",{parentName:"p"},"form"),"s. You can disable the\ndefault UI by adding the HTML ",(0,t.kt)("inlineCode",{parentName:"p"},"noValidate")," attribute to your ",(0,t.kt)("inlineCode",{parentName:"p"},"<Form>")," or ",(0,t.kt)("inlineCode",{parentName:"p"},"<form>")," element.")),(0,t.kt)(d,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import { useState } from \'react\';\nimport Button from \'react-bootstrap/Button\';\nimport Col from \'react-bootstrap/Col\';\nimport Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\nimport Row from \'react-bootstrap/Row\';\n\nfunction FormExample() {\n  const [validated, setValidated] = useState(false);\n\n  const handleSubmit = (event) => {\n    const form = event.currentTarget;\n    if (form.checkValidity() === false) {\n      event.preventDefault();\n      event.stopPropagation();\n    }\n\n    setValidated(true);\n  };\n\n  return (\n    <Form noValidate validated={validated} onSubmit={handleSubmit}>\n      <Row className="mb-3">\n        <Form.Group as={Col} md="4" controlId="validationCustom01">\n          <Form.Label>First name</Form.Label>\n          <Form.Control\n            required\n            type="text"\n            placeholder="First name"\n            defaultValue="Mark"\n          />\n          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>\n        </Form.Group>\n        <Form.Group as={Col} md="4" controlId="validationCustom02">\n          <Form.Label>Last name</Form.Label>\n          <Form.Control\n            required\n            type="text"\n            placeholder="Last name"\n            defaultValue="Otto"\n          />\n          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>\n        </Form.Group>\n        <Form.Group as={Col} md="4" controlId="validationCustomUsername">\n          <Form.Label>Username</Form.Label>\n          <InputGroup hasValidation>\n            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>\n            <Form.Control\n              type="text"\n              placeholder="Username"\n              aria-describedby="inputGroupPrepend"\n              required\n            />\n            <Form.Control.Feedback type="invalid">\n              Please choose a username.\n            </Form.Control.Feedback>\n          </InputGroup>\n        </Form.Group>\n      </Row>\n      <Row className="mb-3">\n        <Form.Group as={Col} md="6" controlId="validationCustom03">\n          <Form.Label>City</Form.Label>\n          <Form.Control type="text" placeholder="City" required />\n          <Form.Control.Feedback type="invalid">\n            Please provide a valid city.\n          </Form.Control.Feedback>\n        </Form.Group>\n        <Form.Group as={Col} md="3" controlId="validationCustom04">\n          <Form.Label>State</Form.Label>\n          <Form.Control type="text" placeholder="State" required />\n          <Form.Control.Feedback type="invalid">\n            Please provide a valid state.\n          </Form.Control.Feedback>\n        </Form.Group>\n        <Form.Group as={Col} md="3" controlId="validationCustom05">\n          <Form.Label>Zip</Form.Label>\n          <Form.Control type="text" placeholder="Zip" required />\n          <Form.Control.Feedback type="invalid">\n            Please provide a valid zip.\n          </Form.Control.Feedback>\n        </Form.Group>\n      </Row>\n      <Form.Group className="mb-3">\n        <Form.Check\n          required\n          label="Agree to terms and conditions"\n          feedback="You must agree before submitting."\n          feedbackType="invalid"\n        />\n      </Form.Group>\n      <Button type="submit">Submit form</Button>\n    </Form>\n  );\n}\n\nexport default FormExample;\n'),(0,t.kt)("h2",{id:"form-libraries-and-server-rendered-styles"},"Form libraries and server-rendered styles"),(0,t.kt)("p",null,"It's often beneficial (especially in React) to handle form validation\nvia a library like Formik, or react-formal. In those cases, ",(0,t.kt)("inlineCode",{parentName:"p"},"isValid"),"\nand ",(0,t.kt)("inlineCode",{parentName:"p"},"isInvalid")," props can be added to form controls to manually apply\nvalidation styles. Below is a quick example integrating with\n",(0,t.kt)("a",{parentName:"p",href:"https://github.com/jaredpalmer/formik"},"Formik"),"."),(0,t.kt)(d,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Button from \'react-bootstrap/Button\';\nimport Col from \'react-bootstrap/Col\';\nimport Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\nimport Row from \'react-bootstrap/Row\';\nimport * as formik from \'formik\';\nimport * as yup from \'yup\';\n\nfunction FormExample() {\n  const { Formik } = formik;\n\n  const schema = yup.object().shape({\n    firstName: yup.string().required(),\n    lastName: yup.string().required(),\n    username: yup.string().required(),\n    city: yup.string().required(),\n    state: yup.string().required(),\n    zip: yup.string().required(),\n    terms: yup.bool().required().oneOf([true], \'Terms must be accepted\'),\n  });\n\n  return (\n    <Formik\n      validationSchema={schema}\n      onSubmit={console.log}\n      initialValues={{\n        firstName: \'Mark\',\n        lastName: \'Otto\',\n        username: \'\',\n        city: \'\',\n        state: \'\',\n        zip: \'\',\n        terms: false,\n      }}\n    >\n      {({ handleSubmit, handleChange, values, touched, errors }) => (\n        <Form noValidate onSubmit={handleSubmit}>\n          <Row className="mb-3">\n            <Form.Group as={Col} md="4" controlId="validationFormik01">\n              <Form.Label>First name</Form.Label>\n              <Form.Control\n                type="text"\n                name="firstName"\n                value={values.firstName}\n                onChange={handleChange}\n                isValid={touched.firstName && !errors.firstName}\n              />\n              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group as={Col} md="4" controlId="validationFormik02">\n              <Form.Label>Last name</Form.Label>\n              <Form.Control\n                type="text"\n                name="lastName"\n                value={values.lastName}\n                onChange={handleChange}\n                isValid={touched.lastName && !errors.lastName}\n              />\n\n              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group as={Col} md="4" controlId="validationFormikUsername">\n              <Form.Label>Username</Form.Label>\n              <InputGroup hasValidation>\n                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>\n                <Form.Control\n                  type="text"\n                  placeholder="Username"\n                  aria-describedby="inputGroupPrepend"\n                  name="username"\n                  value={values.username}\n                  onChange={handleChange}\n                  isInvalid={!!errors.username}\n                />\n                <Form.Control.Feedback type="invalid">\n                  {errors.username}\n                </Form.Control.Feedback>\n              </InputGroup>\n            </Form.Group>\n          </Row>\n          <Row className="mb-3">\n            <Form.Group as={Col} md="6" controlId="validationFormik03">\n              <Form.Label>City</Form.Label>\n              <Form.Control\n                type="text"\n                placeholder="City"\n                name="city"\n                value={values.city}\n                onChange={handleChange}\n                isInvalid={!!errors.city}\n              />\n\n              <Form.Control.Feedback type="invalid">\n                {errors.city}\n              </Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group as={Col} md="3" controlId="validationFormik04">\n              <Form.Label>State</Form.Label>\n              <Form.Control\n                type="text"\n                placeholder="State"\n                name="state"\n                value={values.state}\n                onChange={handleChange}\n                isInvalid={!!errors.state}\n              />\n              <Form.Control.Feedback type="invalid">\n                {errors.state}\n              </Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group as={Col} md="3" controlId="validationFormik05">\n              <Form.Label>Zip</Form.Label>\n              <Form.Control\n                type="text"\n                placeholder="Zip"\n                name="zip"\n                value={values.zip}\n                onChange={handleChange}\n                isInvalid={!!errors.zip}\n              />\n\n              <Form.Control.Feedback type="invalid">\n                {errors.zip}\n              </Form.Control.Feedback>\n            </Form.Group>\n          </Row>\n          <Form.Group className="mb-3">\n            <Form.Check\n              required\n              name="terms"\n              label="Agree to terms and conditions"\n              onChange={handleChange}\n              isInvalid={!!errors.terms}\n              feedback={errors.terms}\n              feedbackType="invalid"\n              id="validationFormik0"\n            />\n          </Form.Group>\n          <Button type="submit">Submit form</Button>\n        </Form>\n      )}\n    </Formik>\n  );\n}\n\nexport default FormExample;\n'),(0,t.kt)("h2",{id:"tooltips"},"Tooltips"),(0,t.kt)("p",null,"If your form layout allows it, you can use the ",(0,t.kt)("inlineCode",{parentName:"p"},"tooltip")," prop to display\nvalidation feedback in a styled tooltip. Be sure to have a parent with\n",(0,t.kt)("inlineCode",{parentName:"p"},"position: relative")," on it for tooltip positioning. In the example below,\nour column classes have this already, but your project may require an\nalternative setup."),(0,t.kt)(d,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Button from \'react-bootstrap/Button\';\nimport Col from \'react-bootstrap/Col\';\nimport Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\nimport Row from \'react-bootstrap/Row\';\nimport * as formik from \'formik\';\nimport * as yup from \'yup\';\n\nfunction FormExample() {\n  const { Formik } = formik;\n\n  const schema = yup.object().shape({\n    firstName: yup.string().required(),\n    lastName: yup.string().required(),\n    username: yup.string().required(),\n    city: yup.string().required(),\n    state: yup.string().required(),\n    zip: yup.string().required(),\n    file: yup.mixed().required(),\n    terms: yup.bool().required().oneOf([true], \'terms must be accepted\'),\n  });\n\n  return (\n    <Formik\n      validationSchema={schema}\n      onSubmit={console.log}\n      initialValues={{\n        firstName: \'Mark\',\n        lastName: \'Otto\',\n        username: \'\',\n        city: \'\',\n        state: \'\',\n        zip: \'\',\n        file: null,\n        terms: false,\n      }}\n    >\n      {({ handleSubmit, handleChange, values, touched, errors }) => (\n        <Form noValidate onSubmit={handleSubmit}>\n          <Row className="mb-3">\n            <Form.Group\n              as={Col}\n              md="4"\n              controlId="validationFormik101"\n              className="position-relative"\n            >\n              <Form.Label>First name</Form.Label>\n              <Form.Control\n                type="text"\n                name="firstName"\n                value={values.firstName}\n                onChange={handleChange}\n                isValid={touched.firstName && !errors.firstName}\n              />\n              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group\n              as={Col}\n              md="4"\n              controlId="validationFormik102"\n              className="position-relative"\n            >\n              <Form.Label>Last name</Form.Label>\n              <Form.Control\n                type="text"\n                name="lastName"\n                value={values.lastName}\n                onChange={handleChange}\n                isValid={touched.lastName && !errors.lastName}\n              />\n\n              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">\n              <Form.Label>Username</Form.Label>\n              <InputGroup hasValidation>\n                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>\n                <Form.Control\n                  type="text"\n                  placeholder="Username"\n                  aria-describedby="inputGroupPrepend"\n                  name="username"\n                  value={values.username}\n                  onChange={handleChange}\n                  isInvalid={!!errors.username}\n                />\n                <Form.Control.Feedback type="invalid" tooltip>\n                  {errors.username}\n                </Form.Control.Feedback>\n              </InputGroup>\n            </Form.Group>\n          </Row>\n          <Row className="mb-3">\n            <Form.Group\n              as={Col}\n              md="6"\n              controlId="validationFormik103"\n              className="position-relative"\n            >\n              <Form.Label>City</Form.Label>\n              <Form.Control\n                type="text"\n                placeholder="City"\n                name="city"\n                value={values.city}\n                onChange={handleChange}\n                isInvalid={!!errors.city}\n              />\n\n              <Form.Control.Feedback type="invalid" tooltip>\n                {errors.city}\n              </Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group\n              as={Col}\n              md="3"\n              controlId="validationFormik104"\n              className="position-relative"\n            >\n              <Form.Label>State</Form.Label>\n              <Form.Control\n                type="text"\n                placeholder="State"\n                name="state"\n                value={values.state}\n                onChange={handleChange}\n                isInvalid={!!errors.state}\n              />\n              <Form.Control.Feedback type="invalid" tooltip>\n                {errors.state}\n              </Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group\n              as={Col}\n              md="3"\n              controlId="validationFormik105"\n              className="position-relative"\n            >\n              <Form.Label>Zip</Form.Label>\n              <Form.Control\n                type="text"\n                placeholder="Zip"\n                name="zip"\n                value={values.zip}\n                onChange={handleChange}\n                isInvalid={!!errors.zip}\n              />\n\n              <Form.Control.Feedback type="invalid" tooltip>\n                {errors.zip}\n              </Form.Control.Feedback>\n            </Form.Group>\n          </Row>\n          <Form.Group className="position-relative mb-3">\n            <Form.Label>File</Form.Label>\n            <Form.Control\n              type="file"\n              required\n              name="file"\n              onChange={handleChange}\n              isInvalid={!!errors.file}\n            />\n            <Form.Control.Feedback type="invalid" tooltip>\n              {errors.file}\n            </Form.Control.Feedback>\n          </Form.Group>\n          <Form.Group className="position-relative mb-3">\n            <Form.Check\n              required\n              name="terms"\n              label="Agree to terms and conditions"\n              onChange={handleChange}\n              isInvalid={!!errors.terms}\n              feedback={errors.terms}\n              feedbackType="invalid"\n              id="validationFormik106"\n              feedbackTooltip\n            />\n          </Form.Group>\n          <Button type="submit">Submit form</Button>\n        </Form>\n      )}\n    </Formik>\n  );\n}\n\nexport default FormExample;\n'),(0,t.kt)("h2",{id:"input-group-validation"},"Input group validation"),(0,t.kt)("p",null,"To properly show rounded corners in an ",(0,t.kt)("inlineCode",{parentName:"p"},"<InputGroup>")," with validation,\nthe ",(0,t.kt)("inlineCode",{parentName:"p"},"<InputGroup>")," requires the ",(0,t.kt)("inlineCode",{parentName:"p"},"hasValidation")," prop."),(0,t.kt)(d,{language:"jsx",live:!0,mdxType:"CodeBlock"},"import Form from 'react-bootstrap/Form';\nimport InputGroup from 'react-bootstrap/InputGroup';\n\nfunction ValidationInputGroupExample() {\n  return (\n    <InputGroup hasValidation>\n      <InputGroup.Text>@</InputGroup.Text>\n      <Form.Control type=\"text\" required isInvalid />\n      <Form.Control.Feedback type=\"invalid\">\n        Please choose a username.\n      </Form.Control.Feedback>\n    </InputGroup>\n  );\n}\n\nexport default ValidationInputGroupExample;\n"),(0,t.kt)("h2",{id:"api"},"API"),(0,t.kt)("h3",{id:"feedback"},"Feedback"),(0,t.kt)(u,{name:"Feedback",mdxType:"PropsTable"}))}F.isMDXComponent=!0}}]);