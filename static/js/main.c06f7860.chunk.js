(this["webpackJsonpjs-calculator"]=this["webpackJsonpjs-calculator"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),u=n.n(r),l=(n(10),n(1)),o=n(2);function i(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)([]),i=Object(o.a)(u,2),b=i[0],m=i[1],s=Object(a.useState)([]),N=Object(o.a)(s,2),g=N[0],j=N[1],S=Object(a.useState)(0),O=Object(o.a)(S,2),f=O[0],E=O[1],v=Object(a.useState)(0),d=Object(o.a)(v,2),h=d[0],k=d[1],C=Object(a.useState)(""),p=Object(o.a)(C,2),x=p[0],y=p[1],J=Object(a.useState)("0"),w=Object(o.a)(J,2),q=w[0],z=w[1],A=Object(a.useState)([]),B=Object(o.a)(A,2),I=B[0],D=B[1],F=Object(a.useState)(""),G=Object(o.a)(F,2),H=G[0],K=G[1];function L(e){var t=e.target.value;""===x?"."===t&&b.includes(".")||m((function(e){return[].concat(Object(l.a)(e),[t])})):0!==b&&("."===t&&g.includes(".")||j((function(e){return[].concat(Object(l.a)(e),[t])})))}return console.log("mini "+b.length),console.log("disp "+H.length),Object(a.useEffect)((function(){b.length>0&&E(b.reduce((function(e,t){return e+t}))),g.length>0&&k(g.reduce((function(e,t){return e+t}))),b.length>0&&z(b.reduce((function(e,t){return e+t}))),g.length>0&&z(g.reduce((function(e,t){return e+t}))),""!==n&&z(n)}),[b,g,n]),Object(a.useEffect)((function(){var e=I.toString().split(",").join("");K(e)}),[I]),c.a.createElement("div",{id:"calc"},c.a.createElement("input",{id:"mini-display",value:H.length>=37?"Number limit reached":H,disabled:!0}),c.a.createElement("input",{id:"display",value:b.length>=20||g.length>=20?"Number limit reached":q,disabled:!0}),c.a.createElement("button",{className:"ac",onClick:function(){E(0),z("0"),k(0),y(""),m([]),j([]),r(""),D([])}},"AC"),c.a.createElement("button",{className:"operators",onClick:function(){return f>0&&y("/")},value:"/"},"/"),c.a.createElement("button",{className:"operators",onClick:function(){return f>0&&y("x")},value:"*"},"x"),c.a.createElement("button",{className:"numbers",onClick:L,value:"7"},"7"),c.a.createElement("button",{className:"numbers",onClick:L,value:"8"},"8"),c.a.createElement("button",{className:"numbers",onClick:L,value:"9"},"9"),c.a.createElement("button",{className:"operators",onClick:function(){return f>0&&y("-")},value:"-"},"-"),c.a.createElement("button",{className:"numbers",onClick:L,value:"4"},"4"),c.a.createElement("button",{className:"numbers",onClick:L,value:"5"},"5"),c.a.createElement("button",{className:"numbers",onClick:L,value:"6"},"6"),c.a.createElement("button",{className:"operators",onClick:function(){return f>0&&y("+")},value:"+"},"+"),c.a.createElement("button",{className:"numbers1",onClick:L,value:"1"},"1"),c.a.createElement("button",{className:"numbers1",onClick:L,value:"2"},"2"),c.a.createElement("button",{className:"numbers1",onClick:L,value:"3"},"3"),c.a.createElement("button",{className:"dot",onClick:L,value:"."},"."),c.a.createElement("button",{className:"zero",onClick:L,value:"0"},"0"),c.a.createElement("button",{className:"equals",onClick:function(){"+"===x?(E(Number(f)+Number(h)),m([Number(f)+Number(h)]),r(Number(f)+Number(h)),y(""),j([]),D((function(e){return I.length>0?[].concat(Object(l.a)(e),[String(x)+String(h)]):[].concat(Object(l.a)(e),[String(f)+String(x)+String(h)])}))):"-"===x?(E(Number(f)-Number(h)),m([Number(f)-Number(h)]),r(Number(f)-Number(h)),y(""),j([]),D((function(e){return I.length>0?[].concat(Object(l.a)(e),[String(x)+String(h)]):[].concat(Object(l.a)(e),[String(f)+String(x)+String(h)])}))):"x"===x?(E(Number(f)*Number(h)),m([Number(f)*Number(h)]),r(Number(f)*Number(h)),y(""),j([]),D((function(e){return I.length>0?[].concat(Object(l.a)(e),[String(x)+String(h)]):[].concat(Object(l.a)(e),[String(f)+String(x)+String(h)])}))):"/"===x&&(E(Number(f)/Number(h)),m([Number(f)/Number(h)]),r(Number(f)/Number(h)),y(""),j([]),D((function(e){return I.length>0?[].concat(Object(l.a)(e),[String(x)+String(h)]):[].concat(Object(l.a)(e),[String(f)+String(x)+String(h)])})))},value:"="},"="))}u.a.render(c.a.createElement((function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"JS Calculator"),c.a.createElement(i,null))}),null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.c06f7860.chunk.js.map