(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"2bdZ":function(t,e){t.exports='<>\n  <style type="text/css">\n    {`\n    .btn-flat {\n      background-color: purple;\n      color: white;\n    }\n\n    .btn-xxl {\n      padding: 1rem 1.5rem;\n      font-size: 1.5rem;\n    }\n    `}\n  </style>\n\n  <Button variant="flat" size="xxl">\n    flat button\n  </Button>\n</>;\n'},EjSf:function(t,e){t.exports='<>\n  {/* Hint: inspect the markup to see how the classes differ */}\n  <ThemeProvider prefixes={{ btn: \'my-btn\' }}>\n    <Button variant="primary">My Button</Button>\n  </ThemeProvider>{\' \'}\n  <Button bsPrefix="super-btn" variant="primary">\n    Super button\n  </Button>\n</>;\n'},Q6D8:function(t,e,n){t.exports={callout:"Callout-styles-module--callout--1_K3h",warning:"Callout-styles-module--warning--39Zw- Callout-styles-module--callout--1_K3h",danger:"Callout-styles-module--danger--19388 Callout-styles-module--callout--1_K3h"}},caff:function(t,e,n){"use strict";n.r(e);var s=n("oYCi"),o=n("h55t"),r=n("+xvc"),a=n("1u5/"),c=n("EjSf"),i=n.n(c),l=n("2bdZ"),u=n.n(l),d=n("r+yI");e.default=Object(d.a)((function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(r.default,{h:"1",id:"custom-styles",children:"Theming and customizing styles"}),Object(s.jsx)("p",{children:"Generally, if you stick to the Bootstrap defined classes and variants, there isn't anything you need to do to use a custom theme with React-Bootstrap. It just works. But we also make coloring outside the lines easy to do."}),Object(s.jsx)(r.default,{h:"2",id:"custom-styles-variants",children:"New variants and sizes"}),Object(s.jsxs)("p",{children:["Custom variants and sizes should follow the pattern of the default bootstrap variants, and define css classes matching:"," ",Object(s.jsx)("code",{children:"component-*"}),". React bootstrap builds the component"," ",Object(s.jsx)("code",{children:"classNames"})," in a consistent way that you can rely on. For instance this custom Button."]}),Object(s.jsx)(a.a,{codeText:u.a}),Object(s.jsx)(r.default,{h:"2",id:"custom-styles-prefix",children:"Prefixing components"}),Object(s.jsxs)("p",{children:['In some cases you may need to change the base class "prefix" of one or more Components. You can control how a Component prefixes its classes locally by changing the ',Object(s.jsx)("code",{children:"bsPrefix"})," prop. Or globally via the"," ",Object(s.jsx)("code",{children:"ThemeProvider"})," Component."]}),Object(s.jsx)(o.a,{theme:"warning",children:"Changing prefixes is an escape hatch and generally shouldn't be used."}),Object(s.jsx)(a.a,{codeText:i.a})]})}))},h55t:function(t,e,n){"use strict";var s=n("oYCi"),o=n("Q6D8");e.a=function(t){var e=t.title,n=t.children,r=t.theme;return Object(s.jsxs)("aside",{role:"note",className:o[r||"warning"],children:[e&&Object(s.jsx)("header",{className:"h5",children:e}),Object(s.jsx)("div",{children:n})]})}},"r+yI":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var s=n("rePB"),o=n("oYCi"),r=n("Snbm"),a=n("aArQ");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(s.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t){return function(e){var n=e.location.pathname,s=a.a;return(n.startsWith("/getting-started")||n.startsWith("/layout")||n.startsWith("/components")||n.startsWith("/utilities"))&&(s=r.a),Object(o.jsx)(s,{location:e.location,children:Object(o.jsx)(t,i({},e))})}}}}]);
//# sourceMappingURL=component---src-pages-getting-started-theming-js-1bacae370e18628c2d87.js.map