(this["webpackJsonpunipos-clone-front"]=this["webpackJsonpunipos-clone-front"]||[]).push([[0],{44:function(t,e,n){t.exports=n(75)},49:function(t,e,n){},71:function(t,e,n){},75:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(19),c=n.n(i),r=(n(49),n(8)),s=n(9),u=n(11),l=n(10),p=n(12),g=n(38),h=n(16),d=n(17),m=n(22);var f=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={text:""},n.textChange=n.textChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"textChange",value:function(t){this.setState({text:t.target.value})}},{key:"handleSubmit",value:function(t){var e,n;t.preventDefault(),e="".concat("https://givegive-api.herokuapp.com","/api/v1/posts"),n={message:this.state.text},m.post(e,n).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),this.setState({text:""})}},{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("textarea",{onChange:this.textChange,value:this.state.text,required:!0}),a.a.createElement("input",{id:"postButton",type:"submit"}))}}]),e}(o.Component),v=n(15),b=n(7),O={isSignedIn:null,posts:[],currentUser:{}};function E(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SIGN_IN":return k(t,e);case"CREATE_USER":return w(t,e);case"READ_POSTS":return j(t,e);case"CREATE_POSTS":return S(t,e);case"DELETE_POSTS":return I(t,e);default:return t}}function j(t,e){return{posts:e.posts,isSignedIn:t.isSignedIn}}function S(t,e){var n=t.posts.slice();return n.unshift(e.post),{posts:n,isSignedIn:t.isSignedIn,currentUser:t.currentUser}}function I(t,e){var n=[];for(var o in t.posts)t.posts[o].id!=e.post.id&&n.unshift(t.posts[o].id);return{posts:n,isSignedIn:t.isSignedIn,currentUser:t.currentUser}}function w(t,e){var n={googleId:e.googleId,name:e.name};return console.log(n),{posts:t.posts,isSignedIn:t.isSignedIn,currentUser:n}}function k(t,e){var n={googleId:e.googleId,name:e.name},o=e.isSignedIn;return{posts:t.posts,isSignedIn:o,currentUser:n}}function y(t,e){return{type:"SIGN_IN",isSignedIn:t}}Object(b.d)(E);var C=n(22),x=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"handleClick",value:function(t){var e=this;C.delete("".concat("https://givegive-api.herokuapp.com","/api/v1/posts/").concat(t.target.id)).then((function(t){e.props.dispatch({type:"DELETE_POSTS",post:t.data.data})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return a.a.createElement("button",{id:this.props.id,onClick:this.handleClick},"\u3053\u306e\u6295\u7a3f\u3092\u524a\u9664")}}]),e}(o.Component),A=Object(v.b)((function(t){return t}))(x),U=n(22),T=function(t){function e(){return Object(r.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"790408283727-pa8lch5fm1ivr9r972j587tmm18i8hje.apps.googleusercontent.com",scope:"email"}).then((function(){window.gapi.auth2.getAuthInstance().isSignedIn.get()||(window.location.href="/login")}))})),U.get("".concat("https://givegive-api.herokuapp.com","/api/v1/posts")).then((function(e){console.log(e);var n={type:"READ_POSTS",posts:e.data.data};t.props.dispatch(n)})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(f,null),a.a.createElement("ul",null,this.props.posts.map((function(t){return a.a.createElement("li",null,t.message," ",a.a.createElement(A,{id:t.id}))}))))}}]),e}(o.Component),_=Object(v.b)((function(t){return t}))(T),R=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).loginWithGoogle=function(){window.gapi.auth2.getAuthInstance().signIn().then((function(){var t=window.gapi.auth2.getAuthInstance(),e=y(t.isSignedIn.get(),t.currentUser.ie.Qt);n.props.dispatch(e);var o,a={type:"CREATE_USER",googleId:(o=t.currentUser.ie.Qt).dV,name:o.Ad};n.props.dispatch(a)}))},n.logoutFromGoogle=function(){window.gapi.auth2.getAuthInstance().signOut().then((function(){var t=y(window.gapi.auth2.getAuthInstance().isSignedIn.get());n.props.dispatch(t)}))},n.state={isSignedIn:null},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"790408283727-pa8lch5fm1ivr9r972j587tmm18i8hje.apps.googleusercontent.com",scope:"email"})}))}},{key:"renderAuth",value:function(){return null===this.state.isSignedIn?a.a.createElement("div",null,"i dont know your google account"):this.state.isSignedIn?a.a.createElement("div",null,"login with google!!"):a.a.createElement("div",null,"I can not see your google account!!")}},{key:"render",value:function(){return a.a.createElement("div",null,this.renderAuth(),a.a.createElement("button",{onClick:this.loginWithGoogle},"login with google"),a.a.createElement("button",{onClick:this.logoutFromGoogle},"logout from google"))}}]),e}(o.Component),D=Object(v.b)((function(t){return t}))(R),G=(n(71),function(t){function e(){return Object(r.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(g.a,null,a.a.createElement("div",null,a.a.createElement(h.a,{exact:!0,path:"/",component:_}),a.a.createElement(h.a,{exact:!0,path:"/login",component:D}))))}}]),e}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=n(40),N=n(41),W=n.n(N),B=n(26),F=n(42),J=n.n(F),L=n(43),M={key:"peer",storage:W.a,stateReconciler:J.a},Q=Object(B.a)(M,E),q=Object(b.d)(Q,Object(b.a)(L.a)),V=Object(B.b)(q);c.a.render(a.a.createElement(v.a,{store:q},a.a.createElement(P.a,{loading:a.a.createElement("p",null,"loading..."),persistor:V},a.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.21f722f7.chunk.js.map