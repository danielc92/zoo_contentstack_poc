(this.webpackJsonpzoo=this.webpackJsonpzoo||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),i=n.n(a),s=n(6),o=n.n(s),l=(n(16),n(3)),r=n(5),d=n(7),j="blt5fb46dfbc59c25f3",b="cs5393e87306d4835587b441d0",h="publish",u={FALLBACK_DEFAULT:"en-au",SPANISH:"es"},O=(n.n(d).a.Region.EU,n(17),n(8));var g=function(){var e,t,n=Object(a.useState)({data:null,error:!1,loading:!1}),i=Object(r.a)(n,2),s=i[0],o=i[1],d=Object(a.useState)({data:null,error:!1,loading:!1}),g=Object(r.a)(d,2),m=g[0],_=g[1],x=function(e,t){o(Object(l.a)(Object(l.a)({},s),{},{loading:!0})),fetch("https://eu-cdn.contentstack.com/v3/content_types/".concat(t,"/entries?environment=").concat(h,"&include_fallback=true&locale=").concat(e),{headers:{api_key:j,access_token:b}}).then((function(e){return e.json()})).then((function(e){console.log(e),o(Object(l.a)(Object(l.a)({},s),{},{data:e,loading:!1}))})).catch((function(e){console.error(e),o(Object(l.a)(Object(l.a)({},s),{},{error:!0,loading:!1}))}))},f=function(e){o(Object(l.a)(Object(l.a)({},s),{},{loading:!0})),fetch("https://eu-cdn.contentstack.com/v3/content_types/daniels_zoo_page/entries?environment=".concat(h,"&include_fallback=true&locale=").concat(e),{headers:{api_key:j,access_token:b}}).then((function(e){return e.json()})).then((function(e){console.log(e),_(Object(l.a)(Object(l.a)({},s),{},{data:e,loading:!1}))})).catch((function(e){console.error(e),_(Object(l.a)(Object(l.a)({},s),{},{error:!0,loading:!1}))}))};Object(a.useEffect)((function(){x(u.FALLBACK_DEFAULT,"daniels_zoo_animal"),f(u.FALLBACK_DEFAULT)}),[]);var p=s.data,v=s.error,L=s.loading;return Object(c.jsxs)(c.Fragment,{children:[m.data&&Object(c.jsxs)(O.a,{children:[Object(c.jsx)("title",{children:m.data.entries[0].title}),Object(c.jsx)("meta",{name:"keywords",content:m.data.entries[0].tags.join(",")})]}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("button",{onClick:function(){x(u.FALLBACK_DEFAULT,"daniels_zoo_animal"),f(u.FALLBACK_DEFAULT)},children:"English"}),Object(c.jsx)("button",{onClick:function(){x(u.SPANISH,"daniels_zoo_animal"),f(u.SPANISH)},children:"Espanol"}),m.data&&Object(c.jsx)("h1",{children:m.data.entries[0].title}),(null===m||void 0===m||null===(e=m.data)||void 0===e||null===(t=e.entries[0])||void 0===t?void 0:t.modular_blocks)&&m.data.entries[0].modular_blocks.map((function(e){return Object(c.jsxs)("div",{className:"welcome-banner welcome-banner--".concat(e.welcome_banner.variant),children:[Object(c.jsx)("h3",{children:e.welcome_banner.single_line}),Object(c.jsx)("p",{children:e.welcome_banner.subheading})]})})),Object(c.jsx)("h2",{children:"Our animals"}),Object(c.jsx)("p",{children:"View a list of animals we currently house at our Zoo."}),v?Object(c.jsx)("p",{children:"We have encountered an error please try again later."}):L?Object(c.jsx)("p",{children:"Loading please wait..."}):p?Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["Found ",Object(c.jsx)("strong",{children:p.entries.length})," results."]}),p.entries.map((function(e){return Object(c.jsxs)("div",{className:"zoo-card",children:[Object(c.jsx)("img",{src:e.file.url+"?width=800",className:"zoo-card__image"}),Object(c.jsxs)("div",{className:"zoo-card__content",children:[Object(c.jsx)("h3",{children:e.title}),Object(c.jsx)("p",{children:e.animal_description}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Height (cm):"})," ",e.height,"."," ",Object(c.jsx)("strong",{children:"Weight (grams):"})," ",e.weight,"."]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Birth date:"})," ",new Date(e.animal_birth_date).toLocaleDateString()]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Location:"})," ",e.animal_location[0]]}),e.has_discount&&Object(c.jsxs)("p",{className:"text--sale",children:["We are currently offering a 20% discount for tickets to visit ",e.title,"."]}),Object(c.jsxs)("p",{className:"text--help",children:["Last updated: ",e.updated_at]})]}),e.has_discount&&Object(c.jsx)("div",{className:"sale-badge",children:"Flash Sale"})]})}))]}):null]})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),m()}},[[21,1,2]]]);
//# sourceMappingURL=main.c05233a1.chunk.js.map