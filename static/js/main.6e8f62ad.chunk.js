(this.webpackJsonpprueba1=this.webpackJsonpprueba1||[]).push([[0],{50:function(e,t,a){},51:function(e,t,a){},70:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),c=a.n(r),o=a(21),s=a.n(o),i=(a(50),a(51),a(22)),l=a(7),j=a(20),d=a.n(j),u=a(12),b=a(14),h=a(23),O=a(16),m=a(17),p=a(19),x=a(18),f=a(15),v=a.n(f),g=(a(37),a(70),"https://gestiondeusuariosumss.herokuapp.com"),y=function(e){Object(p.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={form:{usuario:{correo:"","contrase\xf1a":""}}},e.limitarcorreo=function(){var t=Object(h.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==a.target.value.match("^[\xd1\xf1\xed\xf3\xe1\xe9\xfa@.a-zA-Z0-9]*$")){t.next=5;break}return t.next=3,e.setState({form:Object(b.a)(Object(b.a)({},e.state.form),{},Object(u.a)({},a.target.name,a.target.value))});case 3:t.next=6;break;case 5:alert("No se aceptan espacios ni caracteres especiales");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.limitarpasswd=function(){var t=Object(h.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==a.target.value.match("^[\xd1\xf1a-zA-Z0-9]*$")){t.next=5;break}return t.next=3,e.setState({form:Object(b.a)(Object(b.a)({},e.state.form),{},Object(u.a)({},a.target.name,a.target.value))});case 3:t.next=6;break;case 5:alert("No se aceptan espacios ni caracteres especiales");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.mostrarModalResponder=function(){e.setState({modalResponder:!0})},e.ocultarModalResponder=function(){e.setState({modalResponder:!1})},e.handleChange=function(){var t=Object(h.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({form:Object(b.a)(Object(b.a)({},e.state.form),{},Object(u.a)({},a.target.name,a.target.value))});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.logearse=function(){v.a.post(g+"/logIn",e.state.form).then((function(e){"admin"===e.data.rol.nombreRol?(alert("Bienvenido de vuelta admin "),window.location.href="/TableroSolicitudes"):(alert("Bienvenido de vuelta usuario"),window.location.href="/"+e.data.idUsuario+"/SolicitudCambioRol")})).catch(console.log)},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get(g).then((function(t){console.log(t.data),e.setState({data:t.data})})).catch(console.log)}},{key:"manejadorSubmit",value:function(e){e.preventDefault()}},{key:"aprobar",value:function(){}},{key:"render",value:function(){return Object(n.jsx)("div",{class:"wrapper fadeInDown",children:Object(n.jsxs)("div",{id:"formContent",children:[Object(n.jsxs)("div",{className:"fadeIn first",children:[Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("img",{src:"https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_reactjs_icon_130205.png",width:"50px"})]}),Object(n.jsxs)("form",{onSubmit:this.manejadorSubmit,children:[Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",className:"fadeIn second",name:"correo",placeholder:"Correo",onChange:this.limitarcorreo,required:!0}),Object(n.jsx)("input",{type:"password",className:"fadeIn third",name:"contrase\xf1a",placeholder:"Contrase\xf1a",onChange:this.limitarpasswd,required:!0}),Object(n.jsx)("input",{type:"submit",className:"fadeIn fourth",value:"Log In",onClick:this.logearse})]}),Object(n.jsx)("div",{id:"formFooter",children:Object(n.jsx)("a",{className:"underlineHover",href:"#",children:"Forgot Password?"})})]})})}}]),a}(c.a.Component),S=function(e){Object(p.a)(a,e);var t=Object(x.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return"Respuesta"}}]),a}(c.a.Component);function R(e){alert("\xa1SU SOLICITUD HA SIDO ENVIADA CON EXITO!")}var C=function(e){Object(p.a)(a,e);var t=Object(x.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://gestiondeusuariosumss.herokuapp.com/solicitudes").then((function(t){console.log(t.data),e.setState({data:t.data})})).catch(console.log)}},{key:"render",value:function(){return Object(n.jsx)("div",{class:"contenido",children:Object(n.jsxs)("body",{children:[Object(n.jsx)("h3",{align:"center",children:"SOLICITUD DE CAMBIO DE ROL"}),Object(n.jsx)("h6",{children:"Motivo de solicitud:"}),Object(n.jsx)("textarea",{children:"Necesito tener mas permisos para trabajar"}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{for:"cars",children:"Roles disponibles:"}),Object(n.jsxs)("form",{action:"",method:"post",children:[Object(n.jsxs)("select",{id:"cars",name:"cars",children:[Object(n.jsx)("option",{value:"admin",children:"Admin"}),Object(n.jsx)("option",{value:"delivery",children:"Delivery"}),Object(n.jsx)("option",{value:"vendedor",children:"Vendedor"}),Object(n.jsx)("option",{value:"comprador",children:"Comprador"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{type:"submit",class:"btn btn-primary",onclick:R,children:"Enviar"})]})]})})}}]),a}(c.a.Component),k=a(84),N=a(85),I=a(86),w=a(91),D=a(87),M=a(88),A=a(89),U=a(90),F="https://gestiondeusuariosumss.herokuapp.com",T=function(e){Object(p.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:[],modalResponder:!1,form:{idUsuario:"",idSolicitud:"",nombreUsuario:"",fecha:"",rolOrigen:"",rolDestino:"",motivo:"",comentario:""}},e.mostrarModalResponder=function(t){e.setState({modalResponder:!0,form:t})},e.ocultarModalResponder=function(){e.setState({modalResponder:!1})},e.handleChange=function(t){e.setState({form:Object(b.a)(Object(b.a)({},e.state.form),{},Object(u.a)({},t.target.name,t.target.value))})},e.aprobar=function(t){v.a.post(F+"/sol_aprobada/"+t,e.state.form.rolDestino).then(console.log).catch(console.log),e.ocultarModalResponder()},e.rechazar=function(t){v.a.post(F+"/sol_rechazada/"+t).then(console.log).catch(console.log),e.ocultarModalResponder()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get(F+"/solicitudes").then((function(t){console.log(t.data),e.setState({data:t.data})})).catch(console.log)}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(k.a,{children:Object(n.jsxs)(N.a,{children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"ID"}),Object(n.jsx)("th",{children:"Nombre"}),Object(n.jsx)("th",{children:"Fecha"}),Object(n.jsx)("th",{children:"Acci\xf3n"})]})}),Object(n.jsx)("tbody",{children:this.state.data.map((function(t){return Object(n.jsxs)("tr",{children:[Object(n.jsxs)("td",{children:[t.idSolicitud," "]}),Object(n.jsx)("td",{children:t.nombreUsuario}),Object(n.jsx)("td",{children:t.fecha}),Object(n.jsx)("td",{children:Object(n.jsx)(I.a,{color:"primary",onClick:function(){return e.mostrarModalResponder(t)},children:"Responder"})})]})}))})]})}),Object(n.jsxs)(w.a,{isOpen:this.state.modalResponder,children:[Object(n.jsx)(D.a,{children:Object(n.jsx)("div",{children:Object(n.jsx)("h3",{children:"Responder"})})}),Object(n.jsxs)(M.a,{children:[Object(n.jsxs)(A.a,{children:[Object(n.jsx)("label",{children:"Id:"}),Object(n.jsx)("input",{className:"form-control",readOnly:!0,type:"text",value:this.state.form.idSolicitud})]}),Object(n.jsxs)(A.a,{children:[Object(n.jsx)("label",{children:"Nombre:"}),Object(n.jsx)("input",{className:"form-control",name:"nombre",type:"text",readOnly:!0,value:this.state.form.nombreUsuario})]}),Object(n.jsxs)(A.a,{children:[Object(n.jsx)("label",{children:"Rol Actual:"}),Object(n.jsx)("input",{className:"form-control",name:"rolA",type:"text",readOnly:!0,value:this.state.form.rolOrigen.nombreRol})]}),Object(n.jsxs)(A.a,{children:[Object(n.jsx)("label",{children:"Rol Solicitado:"}),Object(n.jsx)("input",{className:"form-control",name:"rolS",type:"text",readOnly:!0,value:this.state.form.rolDestino.nombreRol})]}),Object(n.jsxs)(A.a,{children:[Object(n.jsx)("label",{children:"fecha:"}),Object(n.jsx)("input",{className:"form-control",name:"fecha",type:"text",readOnly:!0,value:this.state.form.fecha})]}),Object(n.jsxs)(A.a,{children:[Object(n.jsx)("label",{children:"Mensaje de solicitud:"}),Object(n.jsx)("input",{className:"form-control",name:"mensajeS",type:"text",readOnly:!0,value:this.state.form.motivo})]}),Object(n.jsxs)(A.a,{children:[Object(n.jsx)("label",{children:"Mensaje de solicitud:"}),Object(n.jsx)("input",{className:"form-control",name:"mensajeS",type:"hidden",readOnly:!0,value:this.state.form.idUsuario})]}),Object(n.jsxs)(A.a,{children:[Object(n.jsx)("label",{children:"Comentario:"}),Object(n.jsx)("input",{className:"form-control",name:"comentario",type:"text",onChange:this.handleChange})]})]}),Object(n.jsxs)(U.a,{children:[Object(n.jsx)(I.a,{color:"primary",onClick:function(){return e.aprobar(e.state.form.idUsuario)},children:" Aprobar"}),Object(n.jsx)(I.a,{color:"danger",onClick:function(){return e.rechazar(e.state.form.idUsuario)},children:"Rechazar"})]})]})]})}}]),a}(c.a.Component),z=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Registro en progreso"})})};var E=function(){return Object(n.jsx)(i.a,{children:Object(n.jsxs)("div",{className:"container mt-5",children:[Object(n.jsxs)("div",{className:"btn-group",children:[Object(n.jsx)(i.b,{to:"/InicioSesion",className:"btn btn-dark",children:"Inicio de Sesion"}),Object(n.jsx)("hr",{})]}),Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{path:"RespuestaSolicitud",children:Object(n.jsx)(S,{})}),Object(n.jsx)(l.a,{path:":usuarioId/SolicitudCambioRol",children:Object(n.jsx)(C,{})}),Object(n.jsx)(l.a,{path:"InicioSesion",exact:!0,children:Object(n.jsx)(y,{})}),Object(n.jsx)(l.a,{path:"TableroSolicitudes",children:Object(n.jsx)(T,{})}),Object(n.jsx)(l.a,{path:"Registro",children:Object(n.jsx)(z,{})})]})]})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,92)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root")),L()}},[[83,1,2]]]);
//# sourceMappingURL=main.6e8f62ad.chunk.js.map