(this.webpackJsonpnimh_ohbm=this.webpackJsonpnimh_ohbm||[]).push([[0],{102:function(e,a,t){e.exports=t(131)},107:function(e,a,t){},131:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(9),s=t.n(i),o=(t(107),t(44)),l=t(15),c=t(88),u=(t(27),t(50)),d=t(51),m=t(58),h=t(59),p=function(e){Object(h.a)(t,e);var a=Object(m.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainContent"},r.a.createElement("h2",null,"Identifying data sharing and data reuse in full-text NIMH-funded papers"),r.a.createElement("h3",null,"Travis Riddle, Francisco Pereira, & Adam Thomas"),r.a.createElement("p",null,"Identifying and measuring data sharing and data reuse serves a number of goals that are important for scientists, funding agencies, and the public more generally. Consequently, the unmet objective of an efficient and accurate system for identification and tracking of datasets is a conspicuous shortcoming of the larger open science community."),r.a.createElement("p",null,"The work we describe here uses natural language processing (NLP) and machine learning to identify data sharing and reuse statements in the full-text papers available on PubMed Central. We limited the scope of our investigation to just those papers that listed funding from the NIMH per Federal Reporter. We obtained the full text of 57,771 papers published after 2008. These papers were linked to 11,987 NIMH grants awarded to a total of 7,342 primary investigators. We then split these documents into sentences and labeled a subset of sentences with two types of labels:"),r.a.createElement("ul",null,r.a.createElement("li",null,"A sentence is considered an instance of \u201cdata sharing\u201d if the authors are indicating that the data that they generated for the paper are deposited and available in a public repository of some sort."),r.a.createElement("li",null,"A sentence is considered \u201cdata reuse\u201d if the authors are making reference to a specific shared dataset. Here we are defining reuse as broadly as possible. We did not attempt to confirm the data was used in any analysis, but only that the reference was to a specific dataset. Typically when there's a question, we err on the side of inclusion. Brain atlases and other types of shared data products are in this category.")),r.a.createElement("p",null,"Because of the expected low base rates, we used regular expression matching of known data repositories, presence of a URL, lists published by repositories of papers that are known to have used their service, and active learning to maximize the likelihood of obtaining positive training examples. In total, we labeled 1,798 sentences for instances of data sharing, of which 71 were indicated as instances of data sharing. We labeled a partially overlapping set of 1,798 sentences for instances of data reuse, of which 129 were indicated as instances of data reuse."),r.a.createElement("p",null,"We used standard NLP techniques to obtain input features to train an AdaBoost classifier to identify instances of data sharing and data reuse. Performance was evaluated using stratified 3-fold cross validation."),r.a.createElement("p",null,"Generally, precision is higher than recall. If we average across folds and label types and extrapolate this performance, we expect our labels to accurately identify an instance of data sharing or reuse 70 percent of the time. Additionally, we expect to accurately identify (recall) 59 percent of instances of data sharing or reuse."),r.a.createElement("p",null,"Accounting for these performance metrics, after retraining on the full labeled dataset, and extrapolating from our cross-validation performance, we expect that 4,214 (7.3%) papers contain instances of data sharing and 5,167 (8.9%) contain instances of data reuse, of which 1,777 and 2,179, respectively are expected to be incorrect predictions. Additionally, we are likely to miss 1,662, and 2,038 instances of data sharing and data reuse, respectively."),r.a.createElement("p",null,"These results indicate very low rates of data sharing and reuse. Of all 434 institutions that published at least 3 NIMH funded papers, we predicted just 18/25 have data sharing/reuse statements in more than 30% of their papers (Figure 1). Similarly, of all 4,139 PI\u2019s that published at least 3 NIMH funded papers, just 301/381 are expected to have data sharing/reuse statements in more than 30% of their papers (Figure 2). Our poster will feature an error analysis and an analysis of the features of papers labeled with and without data sharing and data reuse."),r.a.createElement("p",null,"We anticipate that additional labeled data will help improve and stabilize performance of these methods. In the future, we also intend to explore the effectiveness of alternative approaches, including using a gold-standard list of dataset DOIs derived from Datacite."))}}]),t}(r.a.Component),f=t(60),g=t(12),b=t(170),E=t(189),v=t(38),y=t.n(v);Object(b.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));var j=function(){var e=Object(g.g)().id,a=Object(n.useState)([]),t=Object(l.a)(a,2),i=t[0],s=t[1],o="https://osaka.o18s.com:9000/projectpapers/".concat("?organization_name=",e);Object(g.f)(),Object(n.useEffect)((function(){c()}),[]);var c=function(){y.a.get(o).then((function(e){var a=e.data.results;s(a)})).catch((function(e){return console.log(e)}))};return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{variant:"h2",gutterBottom:!0},e),r.a.createElement("div",null,i.map((function(e){return r.a.createElement("div",null,r.a.createElement(f.a,{variant:"h5",gutterBottom:!0},e.title),r.a.createElement(f.a,{variant:"h6",gutterBottom:!0},e.journal_title," - ",e.journal_year),"TRUE"==e.open_data?r.a.createElement(E.a,{size:"small",label:"Data sharing",color:"primary"}):r.a.createElement(E.a,{size:"small",label:"Data sharing",color:"secondary"}),"TRUE"==e.data_share?r.a.createElement(E.a,{size:"small",label:"Data reuse",color:"primary"}):r.a.createElement(E.a,{size:"small",label:"Data reuse",color:"secondary"}))}))))},O=t(184),w=t(174),k=t(175),x=t(176),S=t(187),I=t(25);t(87);function N(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],i=a[1],s=Object(n.useState)("https://osaka.o18s.com:9000/orgs/"),o=Object(l.a)(s,2),c=o[0],u=(o[1],Object(n.useState)("https://osaka.o18s.com:9000/orgs/")),d=Object(l.a)(u,2),m=d[0],h=d[1],p=Object(n.useState)([]),b=Object(l.a)(p,2),E=b[0],v=b[1];Object(g.f)();Object(n.useEffect)((function(){j()}),[]);var j=function(){y.a.get(m).then((function(e){var a=e.data.results;v(a)})).catch((function(e){return console.log(e)}))};return Object(S.a)((function(){j()}),1e3,[t]),r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{variant:"h2",gutterBottom:!0},"Search by Institution"),r.a.createElement(O.a,{id:"searchtext",label:"Institution Name",style:{margin:8},placeholder:"",helperText:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",value:t,onChange:function(e){var a=e.currentTarget.value;i(a),h(c.concat("?search=",a))}}),r.a.createElement(w.a,null,E.map((function(e){return r.a.createElement(I.b,{to:"/sharestats/orgs/".concat(e.organization_name)},r.a.createElement(k.a,{button:!0},r.a.createElement(x.a,{primary:e.organization_name})))}))))}var L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{variant:"h2",gutterBottom:!0},"Paper"))},T=t(177);var B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{variant:"h2",gutterBottom:!0},"Search by Institution"),r.a.createElement(f.a,{variant:"body1",gutterBottom:!0},"Here you can search for an Organization by name to find their associated paper references in our database."),r.a.createElement(O.a,{id:"searchtext",label:"Institution Name",style:{margin:8},placeholder:"",helperText:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled"}),r.a.createElement(T.a,{variant:"contained"},"Search"))};var F=function(){var e=Object(g.g)().id;return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{variant:"h2",gutterBottom:!0},e))};function A(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],i=a[1],s=Object(n.useState)("https://osaka.o18s.com:9000/people/"),o=Object(l.a)(s,2),c=o[0],u=(o[1],Object(n.useState)("https://osaka.o18s.com:9000/people/")),d=Object(l.a)(u,2),m=d[0],h=d[1],p=Object(n.useState)([]),b=Object(l.a)(p,2),E=b[0],v=b[1];Object(g.f)();Object(n.useEffect)((function(){j()}),[]);var j=function(){y.a.get(m).then((function(e){var a=e.data.results;v(a)})).catch((function(e){return console.log(e)}))};return Object(S.a)((function(){j()}),1e3,[t]),r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{variant:"h2",gutterBottom:!0},"Search by Researcher"),r.a.createElement(O.a,{id:"searchtext",label:"Researcher Name",style:{margin:8},placeholder:"",helperText:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",value:t,onChange:function(e){var a=e.currentTarget.value;i(a),h(c.concat("?search=",a))}}),r.a.createElement(w.a,null,E.map((function(e){return r.a.createElement(I.b,{to:"/sharestats/researchers/".concat(e.full_name)},r.a.createElement(k.a,{button:!0},r.a.createElement(x.a,{primary:e.full_name})))}))))}var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("img",{src:"/sharestats/graph_orgs.png",alt:"Orgs graph"}),r.a.createElement("img",{src:"/sharestats/graph_pis.png",alt:"PIs graph"}))},_=t(3),H=t(36),P=t(68),W="515002199508-1n4d00fma9to0sjolghkceheguu7ubfg.apps.googleusercontent.com",z=function(e){Object(h.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={isLoggeded:!1,accessToken:"",fullname:"",email:""},n.login=n.login.bind(Object(H.a)(n)),n.handleLoginFailure=n.handleLoginFailure.bind(Object(H.a)(n)),n.logout=n.logout.bind(Object(H.a)(n)),n.handleLogoutFailure=n.handleLogoutFailure.bind(Object(H.a)(n)),n}return Object(d.a)(t,[{key:"login",value:function(e){e.accessToken&&this.setState((function(a){return{isLoggeded:!0,accessToken:e.accessToken,fullname:e.Tt.Bd,email:e.Tt.Du}}))}},{key:"logout",value:function(e){this.setState((function(e){return{isLoggeded:!1,accessToken:"",fullname:"",email:""}}))}},{key:"handleLoginFailure",value:function(e){alert("Failed to log in")}},{key:"handleLogoutFailure",value:function(e){alert("Failed to log out")}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.isLoggeded?r.a.createElement(P.GoogleLogout,{clientId:W,buttonText:"Logout",onLogoutSuccess:this.logout,onFailure:this.handleLogoutFailure}):r.a.createElement(P.GoogleLogin,{clientId:W,buttonText:"Login",onSuccess:this.login,onFailure:this.handleLoginFailure,cookiePolicy:"single_host_origin",responseType:"code,token"}))}}]),t}(n.Component),R=t(18),M=t(180),D=t(93),G=t.n(D),q=t(94),U=t.n(q),J=t(179),$=t(183),K=t(186),Q=t(182),V=t(92),X=t.n(V),Y=t(178),Z=t(69),ee=t.n(Z),ae=t(91),te=t.n(ae),ne=t(90),re=t.n(ne);var ie=function(){var e=Object(g.f)();return r.a.createElement(w.a,null,r.a.createElement(k.a,{button:!0,key:"Home",onClick:function(){e.push("/sharestats")}},r.a.createElement(Y.a,null,r.a.createElement(re.a,null)),r.a.createElement(x.a,{primary:"Home"})),r.a.createElement(k.a,{button:!0,key:"Graphs",onClick:function(){e.push("/sharestats/graphs")}},r.a.createElement(Y.a,null,r.a.createElement(ee.a,null)),r.a.createElement(x.a,{primary:"Graphs"})),r.a.createElement(k.a,{button:!0,key:"Institutions",onClick:function(){e.push("/sharestats/orgs")}},r.a.createElement(Y.a,null,r.a.createElement(te.a,null)),r.a.createElement(x.a,{primary:"Institutions"})),r.a.createElement(k.a,{button:!0,key:"Researchers",onClick:function(){e.push("/sharestats/researchers")}},r.a.createElement(Y.a,null,r.a.createElement(ee.a,null)),r.a.createElement(x.a,{primary:"Researchers"})))},se=t(181),oe=Object(b.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(c.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));var le=function(){var e=oe(),a=Object(R.a)(),t=r.a.useState(!1),n=Object(l.a)(t,2),i=n[0],s=n[1];return Object(g.f)(),r.a.createElement("div",{className:"App"},r.a.createElement(I.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:e.root},r.a.createElement(J.a,null),r.a.createElement(M.a,{position:"fixed",className:Object(_.a)(e.appBar,Object(o.a)({},e.appBarShift,i))},r.a.createElement(se.a,null,r.a.createElement(Q.a,{color:"inherit","aria-label":"open drawer",onClick:function(){s(!0)},edge:"start",className:Object(_.a)(e.menuButton,i&&e.hide)},r.a.createElement(X.a,null)),r.a.createElement(f.a,{variant:"h6",noWrap:!0},"NIMH OHBM"))),r.a.createElement(K.a,{className:e.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(Q.a,{onClick:function(){s(!1)}},"ltr"===a.direction?r.a.createElement(G.a,null):r.a.createElement(U.a,null)),r.a.createElement(z,null)),r.a.createElement($.a,null),r.a.createElement(ie,null)),r.a.createElement("main",{className:Object(_.a)(e.content,Object(o.a)({},e.contentShift,i))},r.a.createElement("div",{className:e.drawerHeader}),r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/sharestats/orgs",component:N}),r.a.createElement(g.a,{exact:!0,path:"/sharestats/papers",component:B}),r.a.createElement(g.a,{exact:!0,path:"/sharestats/researchers",component:A}),r.a.createElement(g.a,{path:"/sharestats/orgs/:id?",component:j}),r.a.createElement(g.a,{path:"/sharestats/papers/:id?",component:L}),r.a.createElement(g.a,{path:"/sharestats/researchers/:id?",component:F}),r.a.createElement(g.a,{path:"/sharestats/graphs",component:C}),r.a.createElement(g.a,{path:"/sharestats",component:p})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},27:function(e,a,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.3cb8892f.chunk.js.map