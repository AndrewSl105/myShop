(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},107:function(e,t,a){},110:function(e,t,a){},112:function(e,t,a){},114:function(e,t,a){},124:function(e,t,a){},126:function(e,t,a){},153:function(e,t,a){},155:function(e,t,a){},158:function(e,t,a){},160:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),o=(a(80),a(26)),i=a(2),u=(a(82),a(63)),m=a.n(u),s=a(64),d=a.n(s),p=a(15),E=function(){return r.a.createElement("div",{className:"nav-cont"},r.a.createElement("div",{className:"logo-cont"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{src:m.a,alt:"logo fashion hub"}),r.a.createElement("h1",null,"Style Hub"))),r.a.createElement("div",{className:"cart-cont"},r.a.createElement("img",{src:d.a,alt:"logo fashion hub"})),r.a.createElement("div",{className:"nav-left-cont"},r.a.createElement("ul",{className:"nav-items-list"},r.a.createElement(p.b,{to:"/auth"},"Log in"),r.a.createElement(p.b,{to:"/dashboard"},"Admin"),r.a.createElement(p.b,{to:"/catalog"},"Catalog"))))},v=(a(88),a(3)),b=(a(91),a(43)),f=a(11),g=a(40),h=a(171),N=a(18);function j(){var e=Object(N.a)(["\n  query productsQuery {\n    products {\n      id\n      name\n      image\n    }\n  }\n"]);return j=function(){return e},e}var O=Object(o.b)(j()),P=Object(g.a)(Object(h.a)(O)),y=(a(97),function(e){var t=e.product;return r.a.createElement("div",{className:"product-item-cont"},r.a.createElement(p.b,{to:"/product/?id=".concat(t.id)},r.a.createElement("div",{className:"product-img"},r.a.createElement("img",{src:t.image})),r.a.createElement("div",{className:"product-decription"},r.a.createElement("h2",null,t.name))))}),C=(a(99),a(101),a(12)),x=function(e){console.log(e);var t=function(){return e.perPage*e.currentPage>=e.totalItemsCount},a=function(){var t=Math.ceil(e.totalItemsCount/e.perPage),a=e.currentPage||1,n=e.pagesToShow||9,r=[];r.push(a);for(var c=n-1,l=0;l<c;l++)r.length<n&&Math.min.apply(null,r)>1&&r.push(Math.min.apply(null,r)-1),r.length<n&&Math.max.apply(null,r)<t&&r.push(Math.max.apply(null,r)+1);return r.sort(function(e,t){return e-t}),r}().map(function(t){var a="page-item";return t===e.currentPage&&(a+=" active"),r.a.createElement("li",{key:t,className:a,onClick:function(){var a;a=t,e.onGoPage(a)}},r.a.createElement(C.Button,{className:"p-button-outlined p-button-danger"},t))}),n="page-item";1===e.currentPage&&(n+=" disabled");var c=r.a.createElement("li",{className:n},r.a.createElement(C.Button,{className:"p-button-outlined p-button-danger",onClick:function(){e.onPrevPage()},tabIndex:"-1"},"Previous")),l="page-item";t()&&(l+=" disabled");var o=r.a.createElement("li",{className:l},r.a.createElement(C.Button,{disabled:t(),onClick:function(){e.onNextPage()},className:"p-button-outlined p-button-danger"},"Next"));return r.a.createElement("nav",{className:"pagination-cont"},r.a.createElement("ul",{className:"pagination"},c,a,o))},S=a(45),w=a(70),I=P(function(e){var t=e.data,a=(void 0===t?{}:t).products,c=void 0===a?[]:a;if(!c.length)return r.a.createElement(w.ProgressSpinner,null);var l=Object(n.useState)({currentPage:1,perPage:8}),o=Object(f.a)(l,2),i=o[0],u=o[1];return r.a.createElement("div",{className:"product-list-cont"},r.a.createElement("div",{className:"product-list"},function(e,t){if(!t||!t.perPage||!t.currentPage)return e;var a=t.perPage*(t.currentPage-1)||0;return e.slice(a,a+t.perPage)}(c,i).map(function(e){return r.a.createElement(y,{key:e.id,product:e})})),r.a.createElement(x,{totalItemsCount:c.length,currentPage:i.currentPage,perPage:i.perPage,pagesToShow:8,onGoPage:function(e){u(Object(b.a)({},i,{currentPage:e}))},onPrevPage:function(){var e=Object(b.a)({},i);e.currentPage=i.currentPage-1,u(e)},onNextPage:function(){u(Object(b.a)({},i,{currentPage:i.currentPage+1}))}}))}),$=function(){return r.a.createElement("div",{className:"home-cont"},r.a.createElement(I,null))},k=(a(107),a(20)),T=(a(110),function(){return r.a.createElement("form",{className:"log-in"},r.a.createElement(k.InputText,{placeholder:"log-in"}),r.a.createElement(k.InputText,{placeholder:"e-mail"}),r.a.createElement(k.InputText,{placeholder:"password"}),r.a.createElement(C.Button,{variant:"contained",color:"primary"},"Next"))}),q=function(){return r.a.createElement("div",{className:"auth-cont"},r.a.createElement(T,null))},B=(a(112),a(114),a(71)),D=a(74),z=function(){var e=Object(v.g)().url,t=Object(n.useState)(),a=Object(f.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",{class:"sidebar-cont"},r.a.createElement(B.Sidebar,{visible:c,onHide:function(){return l(!1)}},r.a.createElement("ul",{class:"dash-side-list"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"".concat(e)},"Home")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"".concat(e,"/dashProducts")},"Products")))),r.a.createElement(C.Button,{className:"side-btn",onClick:function(e){return l(!0)}},r.a.createElement(D.a,null)))},H=(a(124),function(){return r.a.createElement("div",{className:"main-cont"},r.a.createElement("span",null,"Main"))});function M(){var e=Object(N.a)(["\n  query productsQuery {\n    products {\n      id\n      name\n      quantity\n      description\n      size\n      price\n    }\n  }\n"]);return M=function(){return e},e}var A=Object(o.b)(M()),Q=Object(g.a)(Object(h.a)(A)),L=(a(126),a(49)),R=a(28),G=a(35),J=a(96);function W(){var e=Object(N.a)(["\n  mutation deleteProduct($id: ID) {\n    deleteProduct(id: $id) {\n      id\n    }\n  }\n"]);return W=function(){return e},e}var F=Object(o.b)(W()),K=function(e){return r.a.createElement("div",{style:{display:"flex",width:"100%",justifyContent:"center"}},r.a.createElement(J.a,{mutation:F,variables:{id:e.data}},function(e){return r.a.createElement(C.Button,{shape:"round",value:"large",type:"primary",onClick:e},"Delete")}))},U=Q(function(e){var t=e.data,a=(void 0===t?{}:t).products,c=(void 0===a?[]:a).map(function(e){return e}),l=Object(n.useState)(null),o=Object(f.a)(l,2),i=o[0],u=o[1],m=Object(n.useState)(!1),s=Object(f.a)(m,2),d=s[0],p=s[1],E=Object(n.useState)(!1),v=Object(f.a)(E,2),b=v[0],g=v[1],h=Object(n.useState)(!1),N=Object(f.a)(h,2),j=(N[0],N[1]),O=Object(n.useState)(""),P=Object(f.a)(O,2),y=P[0],x=P[1];return r.a.createElement("div",{className:"products-table"},r.a.createElement(L.DataTable,{value:c,expandedRows:i,onRowToggle:function(e){return u(e.data)},rowExpansionTemplate:function(e){return r.a.createElement("div",{className:"orders-subtable"},r.a.createElement("h5",null,"Orders for ",e.name),r.a.createElement(L.DataTable,{value:e.orders},r.a.createElement(R.Column,{field:"id",header:"Id",sortable:!0}),r.a.createElement(R.Column,{field:"customer",header:"Customer",sortable:!0}),r.a.createElement(R.Column,{field:"date",header:"Date",sortable:!0})))},dataKey:"id",sortable:!0},r.a.createElement(R.Column,{field:"name",header:"Name",sortable:!0}),r.a.createElement(R.Column,{field:"quantity",header:"Quantity",sortable:!0}),r.a.createElement(R.Column,{field:"size",header:"Sizes",sortable:!0}),r.a.createElement(R.Column,{field:"price",header:"Price",sortable:!0}),r.a.createElement(R.Column,{body:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.Button,{icon:"pi pi-pencil",className:"p-button-rounded p-button-text p-button-outlined p-button-success p-mr-2",onClick:function(){p(!0)}}),r.a.createElement(C.Button,{style:{marginLeft:"4rem"},icon:"pi pi-trash",className:"p-button-rounded p-button-danger",onClick:function(){return t=e,g(!0),void x(t.id);var t}}))}})),r.a.createElement(G.Dialog,{visible:d,style:{width:"450px"},header:"Product Edit",modal:!0,className:"p-fluid",onHide:function(){j(!1),p(!1)}}),r.a.createElement(G.Dialog,{visible:b,style:{width:"450px"},header:"Are you sure to delete?",modal:!0,onHide:function(){g(!1)}},r.a.createElement(K,{data:y})))}),V=(a(153),a(155),a(72));function X(){var e=Object(N.a)(["\n  mutation addProduct($name: String!, $description: String!, $quantity: Int!, $image: String!, $size: String!, $price: Int!) {\n    addProduct(name: $name, description: $description, quantity: $quantity, image: $image, size: $size, price: $price) {\n      name\n    }\n  }\n"]);return X=function(){return e},e}var Y=Object(o.b)(X()),Z=function(){var e=Object(n.useState)(),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),o=Object(f.a)(l,2),i=o[0],u=o[1],m=Object(n.useState)(),s=Object(f.a)(m,2),d=s[0],p=s[1],E=Object(n.useState)(),v=Object(f.a)(E,2),b=v[0],g=v[1],h=Object(n.useState)(),N=Object(f.a)(h,2),j=N[0],O=N[1],P=Object(n.useState)(),y=Object(f.a)(P,2),x=y[0],S=y[1],w=parseInt(x),I=parseInt(d);return r.a.createElement("div",null,r.a.createElement("div",{className:"add-form-cont"},r.a.createElement("form",null,r.a.createElement("div",{className:"input-cont"},r.a.createElement(k.InputText,{placeholder:"Name",value:a,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"input-cont"},r.a.createElement(V.InputTextarea,{placeholder:"Description",value:i,onChange:function(e){return u(e.target.value)}})),r.a.createElement("div",{className:"input-cont"},r.a.createElement(k.InputText,{placeholder:"Quantity",value:d,onChange:function(e){return p(e.target.value)}})),r.a.createElement("div",{className:"input-cont"},r.a.createElement(k.InputText,{placeholder:"Image",value:b,onChange:function(e){return g(e.target.value)}})),r.a.createElement("div",{className:"input-cont"},r.a.createElement(k.InputText,{placeholder:"Size",value:j,onChange:function(e){return O(e.target.value)}})),r.a.createElement("div",{className:"input-cont"},r.a.createElement(k.InputText,{placeholder:"Price",value:x,onChange:function(e){return S(e.target.value)}})),r.a.createElement(J.a,{mutation:Y,variables:{name:a,description:i,quantity:I,image:b,size:j,price:w}},function(e){return r.a.createElement(C.Button,{shape:"round",value:"large",type:"primary",onClick:e},"Add Product")}))))},_=function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("center"),o=Object(f.a)(l,2),i=o[0],u=o[1],m={displayPosition:c};return r.a.createElement("div",{className:"dialog-demo"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"p-grid p-dir-col"},r.a.createElement("div",{className:"p-col"},r.a.createElement(C.Button,{onClick:function(){return e="top",m["".concat("displayPosition")](!0),void(e&&u(e));var e},style:{position:"absolut",top:"25%",left:"90%"}},"Add new"))),r.a.createElement(G.Dialog,{visible:a,position:i,modal:!0,style:{width:"30vw"},onHide:function(){m["".concat("displayPosition")](!1)}},r.a.createElement(Z,null))))},ee=function(){return r.a.createElement("div",{className:"list-cont"},r.a.createElement(_,null),r.a.createElement(U,null))},te=function(){var e=Object(v.g)().path;return r.a.createElement("div",{className:"dashbord-main-cont"},r.a.createElement(z,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:e},r.a.createElement(H,null)),r.a.createElement(v.a,{path:e},r.a.createElement(ee,null))))},ae=function(){return r.a.createElement("div",null)},ne=(a(158),function(e){var t=e.product;return r.a.createElement("div",{className:"product-details"},r.a.createElement("div",{className:"product-cont"},r.a.createElement("div",{className:"product-img"},r.a.createElement("img",{src:t.image})),r.a.createElement("div",{className:"product-description"},r.a.createElement("h2",null,t.name),r.a.createElement("p",null,t.description),r.a.createElement("p",{className:"product-price"},t.price),r.a.createElement("p",null,t.quantity))))});a(160);function re(){var e=Object(N.a)(["\n    query product($Id: ID!) {\n        product(id: $Id) {\n            name\n            description\n            image\n            quantity\n            price\n        }\n    }\n"]);return re=function(){return e},e}var ce=Object(o.b)(re()),le=function(){var e=Object(v.f)().search,t=new URLSearchParams(e).get("id");return r.a.createElement(J.b,{query:ce,variables:{Id:t}},function(e){var t=e.data;if(!t)return r.a.createElement(S.ProgressBar,{mode:"indeterminate"});var a=t.product;return r.a.createElement("div",{className:"product-details-cont"},r.a.createElement(ne,{product:a}))})};function oe(){return r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",exact:!0,component:$}),r.a.createElement(v.a,{path:"/auth",component:q}),r.a.createElement(v.a,{path:"/dashboard",component:te}),r.a.createElement(v.a,{path:"/catalog",component:ae}),r.a.createElement(v.a,{path:"/product",component:le}))}var ie=a(73),ue=Object(ie.a)(),me=(a(162),a(164),a(166),new o.a({uri:"http://localhost:5000/graphql"}));var se=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.b,{client:me},r.a.createElement(p.a,{history:ue},r.a.createElement(E,null),r.a.createElement(oe,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},63:function(e,t,a){e.exports=a.p+"static/media/logo.af0f6470.png"},64:function(e,t,a){e.exports=a.p+"static/media/cart.62265274.svg"},75:function(e,t,a){e.exports=a(168)},80:function(e,t,a){},82:function(e,t,a){},88:function(e,t,a){},91:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){}},[[75,2,1]]]);
//# sourceMappingURL=main.15a510f4.chunk.js.map