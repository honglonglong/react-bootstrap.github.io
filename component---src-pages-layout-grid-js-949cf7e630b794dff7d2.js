(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"3pDZ":function(e,n){e.exports='<Container fluid="md">\n  <Row>\n    <Col>1 of 1</Col>\n  </Row>\n</Container>;\n'},"5Ar+":function(e,n){e.exports="<Container>\n  <Row xs={2} md={4} lg={6}>\n    <Col>1 of 2</Col>\n    <Col>2 of 2</Col>\n  </Row>\n  <Row xs={1} md={2}>\n    <Col>1 of 3</Col>\n    <Col>2 of 3</Col>\n    <Col>3 of 3</Col>\n  </Row>\n</Container>;\n"},"5Dfp":function(e,n){e.exports="<Container fluid>\n  <Row>\n    <Col>1 of 1</Col>\n  </Row>\n</Container>;\n"},Fq2q:function(e,n){e.exports="<Container>\n  <Row md={4}>\n    <Col>1 of 3</Col>\n    <Col xs={6}>2 of 3</Col>\n    <Col>3 of 3</Col>\n  </Row>\n</Container>;\n"},W4pm:function(e,n){e.exports="<Container>\n  <Row>\n    <Col sm={8}>sm=8</Col>\n    <Col sm={4}>sm=4</Col>\n  </Row>\n  <Row>\n    <Col sm>sm=true</Col>\n    <Col sm>sm=true</Col>\n    <Col sm>sm=true</Col>\n  </Row>\n</Container>;\n"},"aK+F":function(e,n){e.exports="<Container>\n  <Row>\n    <Col xs>First, but unordered</Col>\n    <Col xs={{ order: 12 }}>Second, but last</Col>\n    <Col xs={{ order: 1 }}>Third, but second</Col>\n  </Row>\n</Container>;\n"},acEq:function(e,n){e.exports="<Container>\n  <Row>\n    <Col>1 of 2</Col>\n    <Col>2 of 2</Col>\n  </Row>\n  <Row>\n    <Col>1 of 3</Col>\n    <Col>2 of 3</Col>\n    <Col>3 of 3</Col>\n  </Row>\n</Container>;\n"},cGlE:function(e,n){e.exports="<Container>\n  {/* Stack the columns on mobile by making one full-width and the other half-width */}\n  <Row>\n    <Col xs={12} md={8}>\n      xs=12 md=8\n    </Col>\n    <Col xs={6} md={4}>\n      xs=6 md=4\n    </Col>\n  </Row>\n\n  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}\n  <Row>\n    <Col xs={6} md={4}>\n      xs=6 md=4\n    </Col>\n    <Col xs={6} md={4}>\n      xs=6 md=4\n    </Col>\n    <Col xs={6} md={4}>\n      xs=6 md=4\n    </Col>\n  </Row>\n\n  {/* Columns are always 50% wide, on mobile and desktop */}\n  <Row>\n    <Col xs={6}>xs=6</Col>\n    <Col xs={6}>xs=6</Col>\n  </Row>\n</Container>;\n"},cfqe:function(e,n){e.exports="<Container>\n  <Row>\n    <Col>1 of 3</Col>\n    <Col xs={6}>2 of 3 (wider)</Col>\n    <Col>3 of 3</Col>\n  </Row>\n  <Row>\n    <Col>1 of 3</Col>\n    <Col xs={5}>2 of 3 (wider)</Col>\n    <Col>3 of 3</Col>\n  </Row>\n</Container>;\n"},dzBW:function(e,n){e.exports="<Container>\n  <Row>\n    <Col md={4}>md=4</Col>\n    <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>\n  </Row>\n  <Row>\n    <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>\n    <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>\n  </Row>\n  <Row>\n    <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>\n  </Row>\n</Container>;\n"},"j+6L":function(e,n){e.exports="<Container>\n  <Row>\n    <Col>1 of 1</Col>\n  </Row>\n</Container>;\n"},k8J3:function(e,n){e.exports='<Container>\n  <Row className="justify-content-md-center">\n    <Col xs lg="2">\n      1 of 3\n    </Col>\n    <Col md="auto">Variable width content</Col>\n    <Col xs lg="2">\n      3 of 3\n    </Col>\n  </Row>\n  <Row>\n    <Col>1 of 3</Col>\n    <Col md="auto">Variable width content</Col>\n    <Col xs lg="2">\n      3 of 3\n    </Col>\n  </Row>\n</Container>;\n'},"oo/d":function(e,n,o){"use strict";o.r(n),o.d(n,"query",(function(){return I}));var t=o("mXGw"),a=o.n(t),l=o("+xvc"),r=o("vXRK"),s=o("1u5/"),i=o("j+6L"),c=o.n(i),d=o("5Dfp"),m=o.n(d),u=o("3pDZ"),C=o.n(u),f=o("acEq"),p=o.n(f),w=o("5Ar+"),h=o.n(w),x=o("Fq2q"),E=o.n(x),g=o("cfqe"),b=o.n(g),R=o("k8J3"),y=o.n(R),v=o("dzBW"),k=o.n(v),T=o("aK+F"),z=o.n(T),N=o("zjI9"),S=o.n(N),F=o("cGlE"),q=o.n(F),W=o("W4pm"),j=o.n(W),A=o("r+yI");n.default=Object(A.a)((function(e){var n=e.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.default,{h:"1",id:"grid"},"Grid system"),a.a.createElement("p",null,"Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with"," ",a.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes"},"flexbox")," ","and is fully responsive. Below is an example and an in-depth look at how the grid comes together."," "),a.a.createElement("p",null,a.a.createElement("strong",null,"New to or unfamiliar with flexbox?")," ",a.a.createElement("a",{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background"},"Read this CSS Tricks flexbox guide")," ","for background, terminology, guidelines, and code snippets."),a.a.createElement(l.default,{h:"2",id:"container"},"Container"),a.a.createElement("p",null,"Containers provide a means to center and horizontally pad your site’s contents. Use ",a.a.createElement("code",null,"Container")," for a responsive pixel width."),a.a.createElement(s.a,{codeText:c.a,exampleClassName:"show-grid"}),a.a.createElement(l.default,{h:"3",id:"container-fluid"},"Fluid Container"),a.a.createElement("p",null,"You can use ",a.a.createElement("code",null,"<Container fluid />")," for width: 100% across all viewport and device sizes."),a.a.createElement(s.a,{codeText:m.a,exampleClassName:"show-grid"}),a.a.createElement("p",null,"You can set breakpoints for the ",a.a.createElement("code",null,"fluid")," prop. Setting it to a breakpoint (",a.a.createElement("code",null,"sm, md, lg, xl"),") will set the"," ",a.a.createElement("code",null,"Container")," as fluid until the specified breakpoint."),a.a.createElement(s.a,{codeText:C.a,exampleClassName:"show-grid"}),a.a.createElement(l.default,{h:"2",id:"auto-layout"},"Auto-layout columns"),a.a.createElement("p",null,"When no column widths are specified the ",a.a.createElement("code",null,"Col")," component will render equal width columns"),a.a.createElement(s.a,{codeText:p.a,exampleClassName:"show-grid"}),a.a.createElement(l.default,{h:"3",id:"auto-layout-col-sizing"},"Setting one column width"),a.a.createElement("p",null,"Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column."),a.a.createElement(s.a,{codeText:b.a,exampleClassName:"show-grid"}),a.a.createElement(l.default,{h:"3",id:"auto-layout-variable-sizes"},"Variable width content"),a.a.createElement("p",null,"Set the column value (for any breakpoint size) to ",a.a.createElement("code",null,'"auto"')," to size columns based on the natural width of their content."),a.a.createElement(s.a,{codeText:y.a,exampleClassName:"show-grid"}),a.a.createElement(l.default,{h:"2",id:"responsive-grids"},"Responsive grids"),a.a.createElement("p",null,"The ",a.a.createElement("code",null,"Col")," lets you specify column widths across 5 breakpoint sizes (xs, sm, md, lg, and xl). For every breakpoint, you can specify the amount of columns to span, or set the prop to"," ",a.a.createElement("code",null,"<Col lg={true} />")," for auto layout widths."),a.a.createElement(s.a,{codeText:j.a,exampleClassName:"show-grid"}),a.a.createElement("p",null,"You can also mix and match breakpoints to create different grids depending on the screen size."),a.a.createElement(s.a,{codeText:q.a,exampleClassName:"show-grid"}),a.a.createElement("p",null,"The ",a.a.createElement("code",null,"Col")," breakpoint props also have a more complicated"," ",a.a.createElement("code",null,"object")," prop form:"," ",a.a.createElement("code",null,"{span: number, order: number, offset: number}")," for specifying offsets and ordering effects."),a.a.createElement("p",null,"You can use the ",a.a.createElement("code",null,"order")," property to control the"," ",a.a.createElement("strong",null,"visual order")," of your content."),a.a.createElement(s.a,{codeText:z.a,exampleClassName:"show-grid"}),a.a.createElement("p",null,"The ",a.a.createElement("code",null,"order")," property also supports ",a.a.createElement("code",null,"first")," (",a.a.createElement("code",null,"order: -1"),") and ",a.a.createElement("code",null,"last")," (",a.a.createElement("code",null,"order: $columns+1"),")."),a.a.createElement(s.a,{codeText:S.a,exampleClassName:"show-grid"}),a.a.createElement("p",null,"For offsetting grid columns you can set an ",a.a.createElement("code",null,"offset")," value or for a more general layout, use the margin class utilities."),a.a.createElement(s.a,{codeText:k.a,exampleClassName:"show-grid"}),a.a.createElement(l.default,{h:"3",id:"row-layout-col-sizing"},"Setting column widths in Row"),a.a.createElement("p",null,"The ",a.a.createElement("code",null,"Row")," lets you specify column widths across 5 breakpoint sizes (xs, sm, md, lg, and xl). For every breakpoint, you can specify the amount of columns that will fit next to each other."),a.a.createElement(s.a,{codeText:h.a,exampleClassName:"show-grid"}),a.a.createElement("p",null,"Note that ",a.a.createElement("code",null,"Row")," column widths will override ",a.a.createElement("code",null,"Col")," ","widths set on lower breakpoints when viewed on larger screens. The"," ",a.a.createElement("code",null,"<Col xs={6} />")," size will be overriden by"," ",a.a.createElement("code",null,"<Row md={4} />")," on medium and larger screens."),a.a.createElement(s.a,{codeText:E.a,exampleClassName:"show-grid"}),a.a.createElement(l.default,{h:"2",id:"grid-props"},"API"),a.a.createElement(r.a,{metadata:n.Container}),a.a.createElement(r.a,{metadata:n.Row}),a.a.createElement(r.a,{metadata:n.Col}))}));var I="1663251875"},"r+yI":function(e,n,o){"use strict";o.d(n,"a",(function(){return s}));o("9VmF");var t=o("mXGw"),a=o.n(t),l=o("Snbm"),r=o("aArQ");function s(e){return function(n){var o=n.location.pathname,t=r.a;return(o.startsWith("/getting-started")||o.startsWith("/layout")||o.startsWith("/components")||o.startsWith("/utilities"))&&(t=l.a),a.a.createElement(t,{location:n.location},a.a.createElement(e,n))}}},zjI9:function(e,n){e.exports="<Container>\n  <Row>\n    <Col xs={{ order: 'last' }}>First, but last</Col>\n    <Col xs>Second, but unordered</Col>\n    <Col xs={{ order: 'first' }}>Third, but first</Col>\n  </Row>\n</Container>;\n"}}]);
//# sourceMappingURL=component---src-pages-layout-grid-js-949cf7e630b794dff7d2.js.map