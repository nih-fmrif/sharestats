(this.webpackJsonpnimh_ohbm=this.webpackJsonpnimh_ohbm||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(2),i=n.n(l),c=(n(15),n(5)),r=n(6),s=n(1),u=n(8),g=n(9),d=n(3),m="515002199508-1n4d00fma9to0sjolghkceheguu7ubfg.apps.googleusercontent.com",h=function(e){Object(g.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).state={isLoggeded:!1,accessToken:"",fullname:"",email:""},o.login=o.login.bind(Object(s.a)(o)),o.handleLoginFailure=o.handleLoginFailure.bind(Object(s.a)(o)),o.logout=o.logout.bind(Object(s.a)(o)),o.handleLogoutFailure=o.handleLogoutFailure.bind(Object(s.a)(o)),o}return Object(r.a)(n,[{key:"login",value:function(e){e.accessToken&&this.setState((function(t){return{isLoggeded:!0,accessToken:e.accessToken,fullname:e.Tt.Bd,email:e.Tt.Du}}))}},{key:"logout",value:function(e){this.setState((function(e){return{isLoggeded:!1,accessToken:"",fullname:"",email:""}}))}},{key:"handleLoginFailure",value:function(e){alert("Failed to log in")}},{key:"handleLogoutFailure",value:function(e){alert("Failed to log out")}},{key:"render",value:function(){return a.a.createElement("div",null,this.state.isLoggeded?a.a.createElement(d.GoogleLogout,{clientId:m,buttonText:"Logout",onLogoutSuccess:this.logout,onFailure:this.handleLogoutFailure}):a.a.createElement(d.GoogleLogin,{clientId:m,buttonText:"Login",onSuccess:this.login,onFailure:this.handleLoginFailure,cookiePolicy:"single_host_origin",responseType:"code,token"}),this.state.accessToken?a.a.createElement("h5",null,this.state.fullname):null)}}]),n}(o.Component),f=n(7),p=n.n(f);n(16);var b=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Edit ",a.a.createElement("code",null,"src/App.js")," and save to reload."),a.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("nav")),i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.9c92314b.chunk.js.map