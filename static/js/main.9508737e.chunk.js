(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),s=a.n(c),o=a(1),u=a.n(o),l=a(5),m=a(2),i=(a(12),function(){var e;return u.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(fetch("https://jsonplaceholder.typicode.com/posts"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})}),p=function(){var e;return u.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(fetch("https://jsonplaceholder.typicode.com/users"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})},d=function(){var e;return u.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(fetch("https://jsonplaceholder.typicode.com/comments"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})},f=function(e){var t=e.comment;return r.a.createElement("li",null,r.a.createElement("p",{className:"comment"},t.name),r.a.createElement("p",{className:"comment"},t.body),r.a.createElement("p",{className:"comment"},t.email))},E=function(e){return e.comments.map(function(e){return r.a.createElement(f,{comment:e})})},b=function(e){var t=e.post;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"user"},t.name),r.a.createElement("p",{className:"user"},t.email),r.a.createElement("p",{className:"user"},"".concat(t.address.city," ").concat(t.address.street," ").concat(t.address.suite)))},v=function(e){var t=e.post;return r.a.createElement("div",{className:"post"},r.a.createElement("p",{className:"title"},t.title),r.a.createElement("p",null,t.body),r.a.createElement("div",{className:"user"},r.a.createElement(b,{post:t})),r.a.createElement("ul",null,r.a.createElement("p",{className:"title-comment"},"Comments"),r.a.createElement(E,{comments:t.comments})))},h=function(e){var t=e.GetPosts,a=Object(n.useState)([]),c=Object(m.a)(a,2),s=c[0],o=c[1],l=Object(n.useState)(!1),i=Object(m.a)(l,2),p=i[0],d=i[1],f=Object(n.useState)(!1),E=Object(m.a)(f,2),b=E[0],h=E[1],j=Object(n.useState)(!1),y=Object(m.a)(j,2),N=y[0],w=y[1],O=Object(n.useState)([]),x=Object(m.a)(O,2),g=x[0],S=x[1],k=Object(n.useState)(""),C=Object(m.a)(k,2),I=C[0],P=C[1],G=function(){var e;return u.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,d(!0),a.next=4,u.a.awrap(t());case 4:e=a.sent,o(e),d(!1),h(!0),w(!1),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),w(!0);case 14:case"end":return a.stop()}},null,null,[[0,11]])},J=0!==I.length?g:s;return r.a.createElement("div",null,0===s.length&&!N&&!p&&r.a.createElement("button",{className:"load",type:"button",onClick:G},"Load"),p&&!N&&r.a.createElement("div",{className:"loading"},"Loading..."),b&&!p&&r.a.createElement("div",null,r.a.createElement("label",null,"Search",r.a.createElement("input",{className:"input",type:"search",onChange:function(e){return function(e){P(e);var t=s.filter(function(t){return t.title.includes(e)||t.body.includes(e)});S(t)}(e.target.value)}})),J.map(function(e){return r.a.createElement(v,{post:e,key:e.id})})),N&&r.a.createElement("div",{className:"button_container"},r.a.createElement("p",{className:"error"},"Error occurred"),r.a.createElement("button",{className:"load",type:"button",onClick:G},"Try again")))},j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Dynamic list of posts"),r.a.createElement(h,{GetPosts:function(){var e,t,a,n,r;return u.a.async(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,u.a.awrap(Promise.all([i(),p(),d()]));case 2:return e=c.sent,t=Object(m.a)(e,3),a=t[0],n=t[1],r=t[2],c.abrupt("return",a.map(function(e){var t=n.find(function(t){return t.id===e.userId}),a=r.filter(function(t){return t.postId===e.id});return Object(l.a)({},e,{name:t.name,email:t.email,address:t.address,comments:a})}));case 8:case"end":return c.stop()}})}}))};s.a.render(r.a.createElement(j,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.9508737e.chunk.js.map