(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(22),s=n.n(c),i=(n(27),n(8)),u=n(2),j=n(3),l=n(7),o=n.n(l),h=n(1),p=function(){var e=a.a.useState(""),t=Object(j.a)(e,2),n=t[0],r=t[1],c=a.a.useState(0),s=Object(j.a)(c,2),i=s[0],u=s[1],l=a.a.useState(""),p=Object(j.a)(l,2),b=p[0],d=p[1],x=a.a.useState(""),O=Object(j.a)(x,2),f=O[0],m=O[1],v=a.a.useState(""),w=Object(j.a)(v,2),g=w[0],k=w[1],C=a.a.useRef(),N=a.a.useRef(),y=a.a.useRef(),R=a.a.useRef(),S=a.a.useRef();return Object(h.jsxs)("div",{className:"form",children:[Object(h.jsx)("h1",{children:"RPG Char Creator"}),Object(h.jsxs)("form",{className:"input-wrapper",children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(h.jsx)("input",{id:"name",type:"text",ref:C,onChange:function(e){var t=e.target;return r(t.value)},required:!0}),Object(h.jsx)("label",{htmlFor:"age",children:"Age:"}),Object(h.jsx)("input",{id:"age",type:"number",ref:N,onChange:function(e){var t=e.target;return u(t.value)},required:!0}),Object(h.jsx)("label",{htmlFor:"race",children:"Race:"}),Object(h.jsx)("input",{id:"race",type:"text",ref:y,onChange:function(e){var t=e.target;return d(t.value)},required:!0}),Object(h.jsx)("label",{htmlFor:"job",children:"Job:"}),Object(h.jsx)("input",{id:"job",type:"text",ref:R,onChange:function(e){var t=e.target;return m(t.value)},required:!0}),Object(h.jsx)("label",{htmlFor:"weapon",children:"Weapon:"}),Object(h.jsx)("input",{id:"weapon",type:"text",ref:S,onChange:function(e){var t=e.target;return k(t.value)},required:!0})]}),Object(h.jsx)("button",{className:"btn",onClick:function(){n&&i&&b&&f&&g&&!/^\s*$/.test(n,i,b,f,g)?(o.a.post("https://mern-rpgchar.herokuapp.com/insert",{name:n,age:i,race:b,job:f,weapon:g}),alert("Character created successfully!"),C.current.value="",N.current.value="",y.current.value="",R.current.value="",S.current.value=""):alert("Insert valid data.")},children:"Create"})]})},b=n(6),d=n.n(b),x=n(12),O=function(){var e=a.a.useState([]),t=Object(j.a)(e,2),n=t[0],r=t[1];a.a.useEffect((function(){var e=function(){var e=Object(x.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://mern-rpgchar.herokuapp.com/read");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var c=function(){var e=Object(x.a)(d.a.mark((function e(t){var a,c,s,i,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=prompt("Enter new name:"),c=prompt("Enter new age:"),s=prompt("Enter new race:"),i=prompt("Enter new job:"),u=prompt("Enter new weapon:"),a&&c&&s&&i&&u&&!/^\s*$/.test(a,c,s,i,u)){e.next=8;break}return alert("Invalid data."),e.abrupt("return");case 8:return e.next=10,o.a.put("https://mern-rpgchar.herokuapp.com/update",{id:t,newName:a,newAge:c,newRace:s,newJob:i,newWeapon:u});case 10:r(n.map((function(e){return e._id===t?{id:t,name:a,age:c,race:s,job:i,weapon:u}:e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(x.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.delete("https://mern-rpgchar.herokuapp.com/delete/".concat(t));case 2:r(n.filter((function(e){return e._id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"char-list",children:[Object(h.jsx)("h1",{children:"Char List"}),n.map((function(e,t){return Object(h.jsxs)("div",{className:"char",children:[Object(h.jsxs)("h3",{children:["Name: ",Object(h.jsx)("span",{children:e.name})]}),Object(h.jsxs)("h4",{children:["Age: ",Object(h.jsx)("span",{children:e.age})]}),Object(h.jsxs)("h4",{children:["Race: ",Object(h.jsx)("span",{children:e.race})]}),Object(h.jsxs)("h4",{children:["Job: ",Object(h.jsx)("span",{children:e.job})]}),Object(h.jsxs)("h4",{children:["Weapon: ",Object(h.jsx)("span",{children:e.weapon})]}),Object(h.jsxs)("div",{className:"char-btns",children:[Object(h.jsx)("button",{onClick:function(){return c(e._id)},children:"Update"}),Object(h.jsx)("button",{onClick:function(){return s(e._id)},children:"Delete"})]},t)]},t)}))]})},f=function(){return Object(h.jsx)("nav",{className:"navbar",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{className:"navlink",to:"/",children:"Create"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{className:"navlink",to:"chars",children:"Show"})})]})})};var m=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(i.a,{children:[Object(h.jsx)(f,{}),Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{path:"/",element:Object(h.jsx)(p,{})}),Object(h.jsx)(u.a,{path:"/chars",element:Object(h.jsx)(O,{})})]})]})})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.1cf26b08.chunk.js.map