(this["webpackJsonpunipos-clone-front"]=this["webpackJsonpunipos-clone-front"]||[]).push([[0],{44:function(t,e,n){t.exports=n(75)},49:function(t,e,n){},71:function(t,e,n){},75:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(19),c=n.n(o),r=(n(49),n(8)),s=n(9),u=n(11),l=n(10),p=n(12),h=n(38),d=n(16),g=n(17),m=n(22);var f=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={text:""},n.textChange=n.textChange.bind(Object(g.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"textChange",value:function(t){this.setState({text:t.target.value})}},{key:"handleSubmit",value:function(t){var e,n;t.preventDefault(),e="".concat("https://givegive-api.herokuapp.com/","/api/v1/posts"),n={message:this.state.text},m.post(e,n).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),this.setState({text:""})}},{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("textarea",{onChange:this.textChange,value:this.state.text,required:!0}),i.a.createElement("input",{id:"postButton",type:"submit"}))}}]),e}(a.Component),v=n(15),b=n(7),O={isSignedIn:null,posts:[{id:1,message:"fuga",created_at:"2020-01-24T03:24:04.025Z",updated_at:"2020-01-24T03:24:04.025Z"}],claps:[]};function j(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SIGN_IN":return I(t,e);case"READ_POSTS":return E(t,e);case"CREATE_POSTS":return S(t,e);case"DELETE_POSTS":return w(t,e);default:return t}}function E(t,e){return{posts:e.posts,isSignedIn:t.isSignedIn}}function S(t,e){return{posts:this.props.posts.unshift(e.post),isSignedIn:t.isSignedIn}}function w(t,e){var n=[];for(var a in this.props.posts)this.props.posts[a].id!=e.post.id&&n.unshift(this.props.posts[a].id);return{posts:n,isSignedIn:t.isSignedIn}}function I(t,e){var n=e.isSignedIn;return{posts:t.posts,isSignedIn:n}}function k(t){return{type:"SIGN_IN",isSignedIn:t}}Object(b.d)(j);var y=n(22),C=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).handleClick=n.handleClick.bind(Object(g.a)(n)),n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"handleClick",value:function(t){var e=this;y.delete("".concat("https://givegive-api.herokuapp.com/","/api/v1/posts/").concat(t.target.id)).then((function(t){e.props.dispatch({type:"DELETE_POSTS",post:t.data.data})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return i.a.createElement("button",{id:this.props.id,onClick:this.handleClick},"\u3053\u306e\u6295\u7a3f\u3092\u524a\u9664")}}]),e}(a.Component),x=Object(v.b)((function(t){return t}))(C),A=n(22),T=function(t){function e(){return Object(r.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"790408283727-pa8lch5fm1ivr9r972j587tmm18i8hje.apps.googleusercontent.com",scope:"email"}).then((function(){window.gapi.auth2.getAuthInstance().isSignedIn.get()||(window.location.href="/login")}))})),A.get("".concat("https://givegive-api.herokuapp.com/","/api/v1/posts")).then((function(e){console.log(e);var n={type:"READ_POSTS",posts:e.data.data};t.props.dispatch(n)})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(f,null),i.a.createElement("ul",null,this.props.posts.map((function(t){return i.a.createElement("li",null,t.message," ",i.a.createElement(x,{id:t.id}))}))))}}]),e}(a.Component),_=Object(v.b)((function(t){return t}))(T),D=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).loginWithGoogle=function(){window.gapi.auth2.getAuthInstance().signIn().then((function(){var t=k(window.gapi.auth2.getAuthInstance().isSignedIn.get());n.props.dispatch(t),window.location.href="/"}))},n.logoutFromGoogle=function(){window.gapi.auth2.getAuthInstance().signOut().then((function(){var t=k(window.gapi.auth2.getAuthInstance().isSignedIn.get());n.props.dispatch(t)}))},n.state={isSignedIn:null},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"790408283727-pa8lch5fm1ivr9r972j587tmm18i8hje.apps.googleusercontent.com",scope:"email"})}))}},{key:"renderAuth",value:function(){return null===this.state.isSignedIn?i.a.createElement("div",null,"i dont know your google account"):this.state.isSignedIn?i.a.createElement("div",null,"login with google!!"):i.a.createElement("div",null,"I can not see your google account!!")}},{key:"render",value:function(){return i.a.createElement("div",null,this.renderAuth(),i.a.createElement("button",{onClick:this.loginWithGoogle},"login with google"),i.a.createElement("button",{onClick:this.logoutFromGoogle},"logout from google"))}}]),e}(a.Component),G=Object(v.b)((function(t){return t}))(D),P=(n(71),function(t){function e(){return Object(r.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h.a,null,i.a.createElement("div",null,i.a.createElement(d.a,{exact:!0,path:"/",component:_}),i.a.createElement(d.a,{exact:!0,path:"/login",component:G}))))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=n(40),R=n(41),W=n.n(R),B=n(26),F=n(42),J=n.n(F),L=n(43),M={key:"peer",storage:W.a,stateReconciler:J.a},Z=Object(B.a)(M,j),q=Object(b.d)(Z,Object(b.a)(L.a)),$=Object(B.b)(q);c.a.render(i.a.createElement(v.a,{store:q},i.a.createElement(N.a,{loading:i.a.createElement("p",null,"loading..."),persistor:$},i.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.6c559d8f.chunk.js.map