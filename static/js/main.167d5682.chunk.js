(this.webpackJsonpnimh_ohbm=this.webpackJsonpnimh_ohbm||[]).push([[0],{44:function(e,a,t){},64:function(e,a,t){e.exports=t(76)},69:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(7),s=t.n(i),l=(t(69),t(31)),o=t(59),c=t(53),d=(t(44),t(34)),u=t(35),h=t(39),p=t(41),m=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainContent"},r.a.createElement("h2",null,"Identifying data sharing and data reuse in full-text NIMH-funded papers"),r.a.createElement("h3",null,"Travis Riddle, Francisco Pereira, & Adam Thomas"),r.a.createElement("p",null,"Identifying and measuring data sharing and data reuse serves a number of goals that are important for scientists, funding agencies, and the public more generally. Consequently, the unmet objective of an efficient and accurate system for identification and tracking of datasets is a conspicuous shortcoming of the larger open science community."),r.a.createElement("p",null,"The work we describe here uses natural language processing (NLP) and machine learning to identify data sharing and reuse statements in the full-text papers available on PubMed Central. We limited the scope of our investigation to just those papers that listed funding from the NIMH per Federal Reporter. We obtained the full text of 57,771 papers published after 2008. These papers were linked to 11,987 NIMH grants awarded to a total of 7,342 primary investigators. We then split these documents into sentences and labeled a subset of sentences with two types of labels:"),r.a.createElement("ul",null,r.a.createElement("li",null,"A sentence is considered an instance of \u201cdata sharing\u201d if the authors are indicating that the data that they generated for the paper are deposited and available in a public repository of some sort."),r.a.createElement("li",null,"A sentence is considered \u201cdata reuse\u201d if the authors are making reference to a specific shared dataset. Here we are defining reuse as broadly as possible. We did not attempt to confirm the data was used in any analysis, but only that the reference was to a specific dataset. Typically when there's a question, we err on the side of inclusion. Brain atlases and other types of shared data products are in this category.")),r.a.createElement("p",null,"Because of the expected low base rates, we used regular expression matching of known data repositories, presence of a URL, lists published by repositories of papers that are known to have used their service, and active learning to maximize the likelihood of obtaining positive training examples. In total, we labeled 1,798 sentences for instances of data sharing, of which 71 were indicated as instances of data sharing. We labeled a partially overlapping set of 1,798 sentences for instances of data reuse, of which 129 were indicated as instances of data reuse."),r.a.createElement("p",null,"We used standard NLP techniques to obtain input features to train an AdaBoost classifier to identify instances of data sharing and data reuse. Performance was evaluated using stratified 3-fold cross validation."),r.a.createElement("p",null,"Generally, precision is higher than recall. If we average across folds and label types and extrapolate this performance, we expect our labels to accurately identify an instance of data sharing or reuse 70 percent of the time. Additionally, we expect to accurately identify (recall) 59 percent of instances of data sharing or reuse."),r.a.createElement("p",null,"Accounting for these performance metrics, after retraining on the full labeled dataset, and extrapolating from our cross-validation performance, we expect that 4,214 (7.3%) papers contain instances of data sharing and 5,167 (8.9%) contain instances of data reuse, of which 1,777 and 2,179, respectively are expected to be incorrect predictions. Additionally, we are likely to miss 1,662, and 2,038 instances of data sharing and data reuse, respectively."),r.a.createElement("p",null,"These results indicate very low rates of data sharing and reuse. Of all 434 institutions that published at least 3 NIMH funded papers, we predicted just 18/25 have data sharing/reuse statements in more than 30% of their papers (Figure 1). Similarly, of all 4,139 PI\u2019s that published at least 3 NIMH funded papers, just 301/381 are expected to have data sharing/reuse statements in more than 30% of their papers (Figure 2). Our poster will feature an error analysis and an analysis of the features of papers labeled with and without data sharing and data reuse."),r.a.createElement("p",null,"We anticipate that additional labeled data will help improve and stabilize performance of these methods. In the future, we also intend to explore the effectiveness of alternative approaches, including using a gold-standard list of dataset DOIs derived from Datacite."))}}]),t}(r.a.Component);var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"Papers here"))};var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"Graphs here"))},b=t(3),E=t(23),y=t(46),v="515002199508-1n4d00fma9to0sjolghkceheguu7ubfg.apps.googleusercontent.com",w=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).state={isLoggeded:!1,accessToken:"",fullname:"",email:""},n.login=n.login.bind(Object(E.a)(n)),n.handleLoginFailure=n.handleLoginFailure.bind(Object(E.a)(n)),n.logout=n.logout.bind(Object(E.a)(n)),n.handleLogoutFailure=n.handleLogoutFailure.bind(Object(E.a)(n)),n}return Object(u.a)(t,[{key:"login",value:function(e){e.accessToken&&this.setState((function(a){return{isLoggeded:!0,accessToken:e.accessToken,fullname:e.Tt.Bd,email:e.Tt.Du}}))}},{key:"logout",value:function(e){this.setState((function(e){return{isLoggeded:!1,accessToken:"",fullname:"",email:""}}))}},{key:"handleLoginFailure",value:function(e){alert("Failed to log in")}},{key:"handleLogoutFailure",value:function(e){alert("Failed to log out")}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.isLoggeded?r.a.createElement(y.GoogleLogout,{clientId:v,buttonText:"Logout",onLogoutSuccess:this.logout,onFailure:this.handleLogoutFailure}):r.a.createElement(y.GoogleLogin,{clientId:v,buttonText:"Login",onSuccess:this.login,onFailure:this.handleLoginFailure,cookiePolicy:"single_host_origin",responseType:"code,token"}),this.state.accessToken?r.a.createElement("h5",null,this.state.fullname):null)}}]),t}(n.Component),k=t(116),j=t(25),O=t(118),x=t(57),L=t.n(x),I=t(58),N=t.n(I),T=t(117),F=t(121),S=t(122),B=t(120),H=t(56),A=t.n(H),C=t(6),P=t(111),W=t(123),M=t(114),G=t(115),R=t(49),_=t.n(R),q=t(55),D=t.n(q),z=t(54),J=t.n(z);var U=function(){var e=Object(C.f)();return r.a.createElement(P.a,null,r.a.createElement(W.a,{button:!0,key:"Home",onClick:function(){e.push("/sharestats")}},r.a.createElement(M.a,null,r.a.createElement(J.a,null)),r.a.createElement(G.a,{primary:"Home"})),r.a.createElement(W.a,{button:!0,key:"Graphs",onClick:function(){e.push("/sharestats/graphs")}},r.a.createElement(M.a,null,r.a.createElement(_.a,null)),r.a.createElement(G.a,{primary:"Graphs"})),r.a.createElement(W.a,{button:!0,key:"Institutions",onClick:function(){e.push("/sharestats/papers")}},r.a.createElement(M.a,null,r.a.createElement(D.a,null)),r.a.createElement(G.a,{primary:"Institutions"})),r.a.createElement(W.a,{button:!0,key:"PIs",onClick:function(){e.push("/sharestats/papers")}},r.a.createElement(M.a,null,r.a.createElement(_.a,null)),r.a.createElement(G.a,{primary:"PIs"})))},$=t(119),K=t(42),Q=t(45),V=Object(k.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(c.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));var X=function(){var e=V(),a=Object(j.a)(),t=r.a.useState(!1),n=Object(o.a)(t,2),i=n[0],s=n[1];return Object(C.f)(),r.a.createElement("div",{className:"App"},r.a.createElement(Q.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:e.root},r.a.createElement(T.a,null),r.a.createElement(O.a,{position:"fixed",className:Object(b.a)(e.appBar,Object(l.a)({},e.appBarShift,i))},r.a.createElement($.a,null,r.a.createElement(B.a,{color:"inherit","aria-label":"open drawer",onClick:function(){s(!0)},edge:"start",className:Object(b.a)(e.menuButton,i&&e.hide)},r.a.createElement(A.a,null)),r.a.createElement(K.a,{variant:"h6",noWrap:!0},"NIMH OHBM"),r.a.createElement(w,null))),r.a.createElement(S.a,{className:e.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(B.a,{onClick:function(){s(!1)}},"ltr"===a.direction?r.a.createElement(L.a,null):r.a.createElement(N.a,null))),r.a.createElement(F.a,null),r.a.createElement(U,null)),r.a.createElement("main",{className:Object(b.a)(e.content,Object(l.a)({},e.contentShift,i))},r.a.createElement("div",{className:e.drawerHeader}),r.a.createElement(C.c,null,r.a.createElement(C.a,{path:"/sharestats/papers"},r.a.createElement(f,null)),r.a.createElement(C.a,{path:"/sharestats/graphs"},r.a.createElement(g,null)),r.a.createElement(C.a,{path:"/sharestats"},r.a.createElement(m,null))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.167d5682.chunk.js.map