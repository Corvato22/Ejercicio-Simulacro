(this["webpackJsonpejercicio-simulacro"]=this["webpackJsonpejercicio-simulacro"]||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var c,r,a,s,i,j=n(0),o=n(26),l=n.n(o),d=n(19),x=n(3),b=n(10),u=n(45),p=n(44),m=n(11),h=n(1),O=m.a.div(c||(c=Object(b.a)(["\n    margin-top: 200px;\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n"]))),f=m.a.div(r||(r=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-top: 200px;\n"]))),v=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(O,{children:[Object(h.jsxs)(u.a,{children:[Object(h.jsxs)(u.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(h.jsx)(u.a.Label,{children:"Product Name"}),Object(h.jsx)(u.a.Control,{type:"text",placeholder:"Insert product name"}),Object(h.jsx)(u.a.Text,{className:"text-muted"})]}),Object(h.jsxs)(u.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(h.jsx)(u.a.Label,{children:"Product Price"}),Object(h.jsx)(u.a.Control,{type:"text",placeholder:"Insert product price"}),Object(h.jsx)(u.a.Text,{className:"text-muted"})]}),Object(h.jsxs)(u.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(h.jsx)(u.a.Label,{children:"Product Image Link"}),Object(h.jsx)(u.a.Control,{type:"text",placeholder:"Paste product image link"}),Object(h.jsx)(u.a.Text,{className:"text-muted"})]}),Object(h.jsx)(p.a,{variant:"primary",type:"submit",children:"Upload"})]}),Object(h.jsxs)(f,{children:[Object(h.jsx)("h3",{children:"Ejemplo de datos para insertar"}),Object(h.jsx)("p",{children:"lorem ipsum dolor sit amet, consectet"}),Object(h.jsx)("p",{children:"lorem ipsum dolor sit amet, consectet"}),Object(h.jsx)("p",{children:"lorem ipsum dolor sit amet, consectet"})]})]})})},y=n(15),g=n.n(y),E=n(23),w=n(7),k=n(18),I=n(46),N="https://test-app-front-end-jr.herokuapp.com/data/",T=m.a.div(a||(a=Object(b.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: center;\n"]))),P=function(){var e=Object(j.useState)([]),t=Object(w.a)(e,2),n=t[0],c=t[1];Object(j.useEffect)((function(){r()}),[]);var r=function(){var e=Object(E.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(N);case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,c(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=function(){var e=Object(E.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(N+t,{method:"DELETE"});case 2:r();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{children:Object(h.jsx)(T,{children:n.map((function(e){return Object(h.jsxs)(I.a,{bg:"dark",text:"light",border:"secondary",style:{width:"300px",height:""},children:[Object(h.jsx)(I.a.Img,{variant:"top",src:e.image}),Object(h.jsxs)(I.a.Body,{children:[Object(h.jsx)(I.a.Title,{children:e.name}),Object(h.jsxs)(I.a.Title,{children:[e.price,"$"]}),Object(h.jsx)(k.a,{onClick:function(){return a(e.id)},variant:"danger",children:"Delete Product"})]})]},e.id)}))})})},B=m.a.div(s||(s=Object(b.a)(["\n    width: 100%;\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),L=Object(m.a)(d.b)(i||(i=Object(b.a)(["\n    text-decoration: none;\n    font-size: 20px;\n    margin-right: 40px;\n"]))),C=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(B,{children:Object(h.jsxs)("nav",{children:[Object(h.jsx)(L,{to:"/Home",children:"HOME"}),Object(h.jsx)(L,{to:"/Edit",children:"ADD ITEMS"})]})})})},D=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(C,{}),Object(h.jsxs)(x.c,{children:[Object(h.jsx)(x.a,{exact:!0,path:"/Home",element:Object(h.jsx)(P,{})}),Object(h.jsx)(x.a,{exact:!0,path:"/Edit",element:Object(h.jsx)(v,{})})]})]})})};n(42);l.a.render(Object(h.jsx)(D,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.4ea665ef.chunk.js.map