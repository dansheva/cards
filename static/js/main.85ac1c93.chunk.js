(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{10:function(e,t,n){e.exports={default:"SuperButton_default__3S9x5",button:"SuperButton_button__2R1Gc",red:"SuperButton_red__1KMqM"}},11:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1IfT8",label:"SuperCheckbox_label__1fgrK"}},15:function(e,t,n){e.exports={column:"TestPage_column__2Kep6"}},24:function(e,t,n){},25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(8),s=n.n(a),o=(n(24),n(25),n(2)),j=n(1),u=function(){return Object(j.jsx)("h1",{children:"Profile"})},i=function(){return Object(j.jsx)("h1",{children:"Registration"})},l=n(4),h=n(15),b=n.n(h),d=n(5),p=n(6),x=n(10),O=n.n(x),g=function(e){var t=e.red,n=e.className,c=Object(p.a)(e,["red","className"]),r="".concat(O.a.button," ").concat(t?O.a.red:O.a.default," ").concat(n);return Object(j.jsx)("button",Object(d.a)({className:r},c))},f=n(7),m=n.n(f),_=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=e.className,o=e.spanClassName,u=Object(p.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(m.a.error," ").concat(o||""),l="".concat(m.a.input," ").concat(a?m.a.errorInput:m.a.superInput," ").concat(s);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("input",Object(d.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:l},u)),a&&Object(j.jsx)("span",{className:i,children:a})]})})},v=n(11),C=n.n(v),N=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(p.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(C.a.checkbox," ").concat(c||"");return Object(j.jsxs)("label",{className:C.a.label,children:[Object(j.jsx)("input",Object(d.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),r&&Object(j.jsx)("span",{className:C.a.spanClassName,children:r})]})},y=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=n?"":"Error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(c.useState)(!1),u=Object(l.a)(o,2),i=u[0],h=u[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Test Page"}),Object(j.jsxs)("div",{className:b.a.column,children:[Object(j.jsx)(_,{value:n,onChangeText:r,onEnter:s,error:a}),Object(j.jsx)(_,{className:b.a.blue}),Object(j.jsx)(g,{children:"default"}),Object(j.jsx)(g,{red:!0,onClick:s,children:"delete "}),Object(j.jsx)(g,{disabled:!0,children:"disabled"}),Object(j.jsx)(N,{checked:i,onChangeChecked:h,children:"Some text "}),Object(j.jsx)(N,{checked:i,onChange:function(e){return h(e.currentTarget.checked)}})]})]})},k=function(){return Object(j.jsx)("h1",{children:"NewPassword"})},T=function(){return Object(j.jsx)("h1",{children:"Login"})},S=function(){return Object(j.jsx)("h1",{children:"ForgotYourPassword"})},I=function(){return Object(j.jsx)("h1",{children:"404"})},P="/profile",w="/registration",F="/test",K="/new-password",E="/login",B="/forgot-my-password";var L=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",element:Object(j.jsx)(y,{})}),Object(j.jsx)(o.a,{path:P,element:Object(j.jsx)(u,{})}),Object(j.jsx)(o.a,{path:w,element:Object(j.jsx)(i,{})}),Object(j.jsx)(o.a,{path:F,element:Object(j.jsx)(y,{})}),Object(j.jsx)(o.a,{path:K,element:Object(j.jsx)(k,{})}),Object(j.jsx)(o.a,{path:E,element:Object(j.jsx)(T,{})}),Object(j.jsx)(o.a,{path:B,element:Object(j.jsx)(S,{})}),Object(j.jsx)(o.a,{path:"*",element:Object(j.jsx)(I,{})})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},J=n(14),R=n(19),q=n(12),A={},D={},G={},Q={},U={},Y=n(18),Z=Object(q.b)({forgotMyPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;return t.type,e},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;return t.type,e},newPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;return t.type,e},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;return t.type,e},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;return t.type,e}}),z=Object(q.c)(Z,Object(q.a)(Y.a));s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(R.a,{store:z,children:Object(j.jsx)(J.a,{children:Object(j.jsx)(L,{})})})}),document.getElementById("root")),M()},7:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3QLT1",errorInput:"SuperInputText_errorInput__3srZ5",error:"SuperInputText_error__2om_I",input:"SuperInputText_input__3KLUF"}}},[[33,1,2]]]);
//# sourceMappingURL=main.85ac1c93.chunk.js.map