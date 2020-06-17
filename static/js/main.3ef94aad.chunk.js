(this.webpackJsonpnimh_ohbm=this.webpackJsonpnimh_ohbm||[]).push([[0],{100:function(e,a,t){},125:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(8),s=t.n(i),o=(t(100),t(42)),l=t(35),c=t(80),u=(t(25),t(48)),d=t(49),h=t(54),m=t(55),p=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainContent"},r.a.createElement("h2",null,"Identifying data sharing and data reuse in full-text NIMH-funded papers"),r.a.createElement("h3",null,"Travis Riddle, Francisco Pereira, & Adam Thomas"),r.a.createElement("p",null,"Identifying and measuring data sharing and data reuse serves a number of goals that are important for scientists, funding agencies, and the public more generally. Consequently, the unmet objective of an efficient and accurate system for identification and tracking of datasets is a conspicuous shortcoming of the larger open science community."),r.a.createElement("p",null,"The work we describe here uses natural language processing (NLP) and machine learning to identify data sharing and reuse statements in the full-text papers available on PubMed Central. We limited the scope of our investigation to just those papers that listed funding from the NIMH per Federal Reporter. We obtained the full text of 57,771 papers published after 2008. These papers were linked to 11,987 NIMH grants awarded to a total of 7,342 primary investigators. We then split these documents into sentences and labeled a subset of sentences with two types of labels:"),r.a.createElement("ul",null,r.a.createElement("li",null,"A sentence is considered an instance of \u201cdata sharing\u201d if the authors are indicating that the data that they generated for the paper are deposited and available in a public repository of some sort."),r.a.createElement("li",null,"A sentence is considered \u201cdata reuse\u201d if the authors are making reference to a specific shared dataset. Here we are defining reuse as broadly as possible. We did not attempt to confirm the data was used in any analysis, but only that the reference was to a specific dataset. Typically when there's a question, we err on the side of inclusion. Brain atlases and other types of shared data products are in this category.")),r.a.createElement("p",null,"Because of the expected low base rates, we used regular expression matching of known data repositories, presence of a URL, lists published by repositories of papers that are known to have used their service, and active learning to maximize the likelihood of obtaining positive training examples. In total, we labeled 1,798 sentences for instances of data sharing, of which 71 were indicated as instances of data sharing. We labeled a partially overlapping set of 1,798 sentences for instances of data reuse, of which 129 were indicated as instances of data reuse."),r.a.createElement("p",null,"We used standard NLP techniques to obtain input features to train an AdaBoost classifier to identify instances of data sharing and data reuse. Performance was evaluated using stratified 3-fold cross validation."),r.a.createElement("p",null,"Generally, precision is higher than recall. If we average across folds and label types and extrapolate this performance, we expect our labels to accurately identify an instance of data sharing or reuse 70 percent of the time. Additionally, we expect to accurately identify (recall) 59 percent of instances of data sharing or reuse."),r.a.createElement("p",null,"Accounting for these performance metrics, after retraining on the full labeled dataset, and extrapolating from our cross-validation performance, we expect that 4,214 (7.3%) papers contain instances of data sharing and 5,167 (8.9%) contain instances of data reuse, of which 1,777 and 2,179, respectively are expected to be incorrect predictions. Additionally, we are likely to miss 1,662, and 2,038 instances of data sharing and data reuse, respectively."),r.a.createElement("p",null,"These results indicate very low rates of data sharing and reuse. Of all 434 institutions that published at least 3 NIMH funded papers, we predicted just 18/25 have data sharing/reuse statements in more than 30% of their papers (Figure 1). Similarly, of all 4,139 PI\u2019s that published at least 3 NIMH funded papers, just 301/381 are expected to have data sharing/reuse statements in more than 30% of their papers (Figure 2). Our poster will feature an error analysis and an analysis of the features of papers labeled with and without data sharing and data reuse."),r.a.createElement("p",null,"We anticipate that additional labeled data will help improve and stabilize performance of these methods. In the future, we also intend to explore the effectiveness of alternative approaches, including using a gold-standard list of dataset DOIs derived from Datacite."))}}]),t}(r.a.Component),f=t(56);var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{variant:"h2",gutterBottom:!0},"Institution"))},b=t(81),E=t.n(b),v=t(179),y=t(183),w=t(11);t(124);function O(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],i=a[1],s=Object(n.useState)("https://osaka.o18s.com:9000/orgs/"),o=Object(l.a)(s,2),c=o[0],u=(o[1],Object(n.useState)("https://osaka.o18s.com:9000/orgs/")),d=Object(l.a)(u,2),h=d[0],m=d[1],p=Object(n.useState)([]),g=Object(l.a)(p,2),b=g[0],O=g[1];Object(w.f)();Object(n.useEffect)((function(){k()}),[]);var k=function(){m(c.concat("?search=",i)),console.log(h),E.a.get(h).then((function(e){console.log(e.data.results);var a=e.data.results;O(a)})).catch((function(e){return console.log(e)}))};return Object(y.a)((function(){console.log(t)}),1e3,[t]),r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{variant:"h2",gutterBottom:!0},"Search by Institution"),r.a.createElement(v.a,{id:"searchtext",label:"Institution Name",style:{margin:8},placeholder:"",helperText:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",value:t,onChange:function(e){var a=e.currentTarget.value;i(a)}}),r.a.createElement("ul",null,b.map((function(e){return r.a.createElement("li",null,e.organization_name)}))))}var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{variant:"h2",gutterBottom:!0},"Paper"))},j=t(169);var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{variant:"h2",gutterBottom:!0},"Search by Institution"),r.a.createElement(f.a,{variant:"body1",gutterBottom:!0},"Here you can search for an Organization by name to find their associated paper references in our database."),r.a.createElement(v.a,{id:"searchtext",label:"Institution Name",style:{margin:8},placeholder:"",helperText:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled"}),r.a.createElement(j.a,{variant:"contained"},"Search"))};var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{variant:"h2",gutterBottom:!0},"Researcher"))};var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{variant:"h2",gutterBottom:!0},"Researchers"))};var L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("img",{src:"/sharestats/graph_orgs.png",alt:"Orgs graph"}),r.a.createElement("img",{src:"/sharestats/graph_pis.png",alt:"PIs graph"}))},S=t(3),B=t(34),T=t(61),F="515002199508-1n4d00fma9to0sjolghkceheguu7ubfg.apps.googleusercontent.com",A=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={isLoggeded:!1,accessToken:"",fullname:"",email:""},n.login=n.login.bind(Object(B.a)(n)),n.handleLoginFailure=n.handleLoginFailure.bind(Object(B.a)(n)),n.logout=n.logout.bind(Object(B.a)(n)),n.handleLogoutFailure=n.handleLogoutFailure.bind(Object(B.a)(n)),n}return Object(d.a)(t,[{key:"login",value:function(e){e.accessToken&&this.setState((function(a){return{isLoggeded:!0,accessToken:e.accessToken,fullname:e.Tt.Bd,email:e.Tt.Du}}))}},{key:"logout",value:function(e){this.setState((function(e){return{isLoggeded:!1,accessToken:"",fullname:"",email:""}}))}},{key:"handleLoginFailure",value:function(e){alert("Failed to log in")}},{key:"handleLogoutFailure",value:function(e){alert("Failed to log out")}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.isLoggeded?r.a.createElement(T.GoogleLogout,{clientId:F,buttonText:"Logout",onLogoutSuccess:this.logout,onFailure:this.handleLogoutFailure}):r.a.createElement(T.GoogleLogin,{clientId:F,buttonText:"Login",onSuccess:this.login,onFailure:this.handleLoginFailure,cookiePolicy:"single_host_origin",responseType:"code,token"}))}}]),t}(n.Component),H=t(173),C=t(17),P=t(175),W=t(86),M=t.n(W),R=t(87),_=t.n(R),G=t(174),z=t(178),q=t(181),D=t(177),J=t(85),U=t.n(J),$=t(168),K=t(170),Q=t(171),V=t(172),X=t(62),Y=t.n(X),Z=t(84),ee=t.n(Z),ae=t(83),te=t.n(ae);var ne=function(){var e=Object(w.f)();return r.a.createElement($.a,null,r.a.createElement(K.a,{button:!0,key:"Home",onClick:function(){e.push("/sharestats")}},r.a.createElement(Q.a,null,r.a.createElement(te.a,null)),r.a.createElement(V.a,{primary:"Home"})),r.a.createElement(K.a,{button:!0,key:"Graphs",onClick:function(){e.push("/sharestats/graphs")}},r.a.createElement(Q.a,null,r.a.createElement(Y.a,null)),r.a.createElement(V.a,{primary:"Graphs"})),r.a.createElement(K.a,{button:!0,key:"Institutions",onClick:function(){e.push("/sharestats/orgs")}},r.a.createElement(Q.a,null,r.a.createElement(ee.a,null)),r.a.createElement(V.a,{primary:"Institutions"})),r.a.createElement(K.a,{button:!0,key:"Researchers",onClick:function(){e.push("/sharestats/papers")}},r.a.createElement(Q.a,null,r.a.createElement(Y.a,null)),r.a.createElement(V.a,{primary:"Researchers"})))},re=t(176),ie=t(47),se=Object(H.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(c.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));var oe=function(){var e=se(),a=Object(C.a)(),t=r.a.useState(!1),n=Object(l.a)(t,2),i=n[0],s=n[1];return Object(w.f)(),r.a.createElement("div",{className:"App"},r.a.createElement(ie.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:e.root},r.a.createElement(G.a,null),r.a.createElement(P.a,{position:"fixed",className:Object(S.a)(e.appBar,Object(o.a)({},e.appBarShift,i))},r.a.createElement(re.a,null,r.a.createElement(D.a,{color:"inherit","aria-label":"open drawer",onClick:function(){s(!0)},edge:"start",className:Object(S.a)(e.menuButton,i&&e.hide)},r.a.createElement(U.a,null)),r.a.createElement(f.a,{variant:"h6",noWrap:!0},"NIMH OHBM"))),r.a.createElement(q.a,{className:e.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(D.a,{onClick:function(){s(!1)}},"ltr"===a.direction?r.a.createElement(M.a,null):r.a.createElement(_.a,null)),r.a.createElement(A,null)),r.a.createElement(z.a,null),r.a.createElement(ne,null)),r.a.createElement("main",{className:Object(S.a)(e.content,Object(o.a)({},e.contentShift,i))},r.a.createElement("div",{className:e.drawerHeader}),r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/sharestats/orgs",component:O}),r.a.createElement(w.a,{exact:!0,path:"/sharestats/papers",component:x}),r.a.createElement(w.a,{exact:!0,path:"/sharestats/researchers",component:N}),r.a.createElement(w.a,{path:"/sharestats/orgs/:id?",component:g}),r.a.createElement(w.a,{path:"/sharestats/papers/:id?",component:k}),r.a.createElement(w.a,{path:"/sharestats/researchers/:id?",component:I}),r.a.createElement(w.a,{path:"/sharestats/graphs",component:L}),r.a.createElement(w.a,{path:"/sharestats",component:p})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,a,t){},95:function(e,a,t){e.exports=t(125)}},[[95,1,2]]]);
//# sourceMappingURL=main.3ef94aad.chunk.js.map