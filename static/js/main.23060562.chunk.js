(this.webpackJsonprover=this.webpackJsonprover||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(4),s=n.n(o),i=(n(9),n(10),n(2));n(11);var a=function(e,t){var n=Object(r.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(r){return t}})),c=Object(i.a)(n,2),o=c[0],s=c[1];return[o,function(t){try{var n=t instanceof Function?t(o):t;s(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(r){}}]},l=n(0);function u(){var e=a("rover",0),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)("N"),s=Object(i.a)(o,2),u=s[0],j=s[1],d=Object(r.useState)(0),b=Object(i.a)(d,2),m=b[0],f=b[1],h=Object(r.useState)(0),O=Object(i.a)(h,2),p=O[0],x=O[1];function v(e,t){var n=Object(r.useRef)(t);Object(r.useEffect)((function(){n.current=t})),Object(r.useEffect)((function(){function t(t){t.code===e&&n.current(t)}return document.addEventListener("keypress",t),function(){return document.removeEventListener("keypress",t)}}),[e])}v("KeyR",(function(){"N"===u?j("E"):"W"===u?j("N"):"S"===u?j("W"):"E"===u&&j("S")})),v("KeyL",(function(){"N"===u?j("W"):"W"===u?j("S"):"S"===u?j("E"):"E"===u&&j("N")})),v("KeyF",(function(){"N"===u&&0!==n&&1!==n&&2!==n&&3!==n&&4!==n&&5!==n&&6!==n&&7!==n&&8!==n&&9!==n?(c((function(e){return e-10})),f(n%10),x(parseInt(n/10-1))):"W"===u&&0!==n&&10!==n&&20!==n&&30!==n&&40!==n&&50!==n&&60!==n&&70!==n&&80!==n&&90!==n?(c((function(e){return e-1})),f(n%10-1),x(parseInt(n/10))):"S"===u&&90!==n&&91!==n&&92!==n&&93!==n&&94!==n&&95!==n&&96!==n&&97!==n&&98!==n&&99!==n?(c((function(e){return e+10})),f(n%10),x(parseInt(n/10+1))):"E"===u&&9!==n&&19!==n&&29!==n&&39!==n&&49!==n&&59!==n&&69!==n&&79!==n&&89!==n&&99!==n&&(c((function(e){return e+1})),f(n%10+1),x(parseInt(n/10)))}));return Object(l.jsxs)("main",{role:"main",children:[Object(l.jsx)("div",{className:"jumbotron container-fluid",children:Object(l.jsxs)("div",{className:"container text-center",children:[Object(l.jsx)("h1",{className:"display-4 p-3 border-bottom bg-secondary text-white",children:"Projet Rover martien"}),Object(l.jsxs)("form",{className:"form-inline justify-content-center plus",children:[Object(l.jsxs)("div",{className:"form-group text-center",children:[Object(l.jsx)("label",{htmlFor:"direction",children:"D\xe9finissez une direction au rover"}),Object(l.jsxs)("select",{id:"direction",className:"form-control",value:u,onChange:function(e){j(e.target.value)},children:[Object(l.jsx)("option",{value:"N",children:"North"}),Object(l.jsx)("option",{value:"S",children:"South"}),Object(l.jsx)("option",{value:"W",children:"West"}),Object(l.jsx)("option",{value:"E",children:"East"})]})]}),Object(l.jsxs)("div",{className:"form-group text-center",children:[Object(l.jsx)("label",{htmlFor:"position",children:"S\xe9lectionner une case pour placer le rover (de 0 \xe0 99)"}),Object(l.jsx)("input",{type:"text",name:"position",id:"position",className:"form-control",value:n||function(e){var t=parseInt(e);if(Number.isNaN(t))return""}(n),onChange:function(e){c(parseInt(e.target.value))}})]})]}),Object(l.jsx)("h4",{children:"Voici la liste des commandes pour pouvoir d\xe9placer le rover"}),Object(l.jsxs)("ul",{className:"list-group",children:[Object(l.jsx)("p",{className:"list-group-item ",children:Object(l.jsx)("strong",{children:"pour avancer tout droit : 'f'"})}),Object(l.jsx)("p",{className:"list-group-item",children:Object(l.jsx)("strong",{children:" Tourner le rover \xe0 droite : 'r'"})}),Object(l.jsx)("p",{className:"list-group-item ",children:Object(l.jsx)("strong",{children:"Tourner le rover \xe0 gauche : 'l'"})})]}),Object(l.jsxs)("form",{className:"form-inline justify-content-center plus",children:[Object(l.jsxs)("div",{className:"form-group text-center",children:[Object(l.jsx)("label",{htmlFor:"coordonn\xe9esx",children:"Coordonnn\xe9es de X (horizontales)"}),Object(l.jsx)("input",{type:"text",id:"coordonn\xe9esx",className:"form-control",value:m})]}),Object(l.jsxs)("div",{className:"form-group text-center",children:[Object(l.jsx)("label",{htmlFor:"coordonn\xe9esy",children:"Coordonnn\xe9es de Y (verticales)"}),Object(l.jsx)("input",{type:"text",id:"coordonn\xe9esy",className:"form-control",value:p})]})]})]})}),Object(l.jsx)("div",{className:"bg-grille",children:Object(l.jsx)("div",{className:"grille",children:Array.from({length:100}).map((function(e,t){return Object(l.jsx)("div",{className:n===t?"gridou":"grid-item"},t)}))})})]})}var j=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(u,{})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))};n(13);s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),d()},9:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.23060562.chunk.js.map