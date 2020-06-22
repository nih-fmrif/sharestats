(this.webpackJsonpnimh_ohbm=this.webpackJsonpnimh_ohbm||[]).push([[0],{273:function(e,a,t){e.exports=t(473)},278:function(e,a,t){},44:function(e,a,t){},473:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),i=t.n(l),o=(t(278),t(88)),c=t(16),s=t(220),u=(t(44),t(63)),m=t(64),d=t(72),p=t(73),h=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainContent"},r.a.createElement("h2",null,"Identifying data sharing and data reuse in full-text NIMH-funded papers"),r.a.createElement("h3",null,"Travis Riddle, Francisco Pereira, & Adam Thomas"),r.a.createElement("p",null,"Identifying and measuring data sharing and data reuse serves a number of goals that are important for scientists, funding agencies, and the public more generally. Consequently, the unmet objective of an efficient and accurate system for identification and tracking of datasets is a conspicuous shortcoming of the larger open science community."),r.a.createElement("p",null,"The work we describe here uses natural language processing (NLP) and machine learning to identify data sharing and reuse statements in the full-text papers available on PubMed Central. We limited the scope of our investigation to just those papers that listed funding from the NIMH per Federal Reporter. We obtained the full text of 57,771 papers published after 2008. These papers were linked to 11,987 NIMH grants awarded to a total of 7,342 primary investigators. We then split these documents into sentences and labeled a subset of sentences with two types of labels:"),r.a.createElement("ul",null,r.a.createElement("li",null,"A sentence is considered an instance of \u201cdata sharing\u201d if the authors are indicating that the data that they generated for the paper are deposited and available in a public repository of some sort."),r.a.createElement("li",null,"A sentence is considered \u201cdata reuse\u201d if the authors are making reference to a specific shared dataset. Here we are defining reuse as broadly as possible. We did not attempt to confirm the data was used in any analysis, but only that the reference was to a specific dataset. Typically when there's a question, we err on the side of inclusion. Brain atlases and other types of shared data products are in this category.")),r.a.createElement("p",null,"Because of the expected low base rates, we used regular expression matching of known data repositories, presence of a URL, lists published by repositories of papers that are known to have used their service, and active learning to maximize the likelihood of obtaining positive training examples. In total, we labeled 1,798 sentences for instances of data sharing, of which 71 were indicated as instances of data sharing. We labeled a partially overlapping set of 1,798 sentences for instances of data reuse, of which 129 were indicated as instances of data reuse."),r.a.createElement("p",null,"We used standard NLP techniques to obtain input features to train an AdaBoost classifier to identify instances of data sharing and data reuse. Performance was evaluated using stratified 3-fold cross validation."),r.a.createElement("p",null,"Generally, precision is higher than recall. If we average across folds and label types and extrapolate this performance, we expect our labels to accurately identify an instance of data sharing or reuse 70 percent of the time. Additionally, we expect to accurately identify (recall) 59 percent of instances of data sharing or reuse."),r.a.createElement("p",null,"Accounting for these performance metrics, after retraining on the full labeled dataset, and extrapolating from our cross-validation performance, we expect that 4,214 (7.3%) papers contain instances of data sharing and 5,167 (8.9%) contain instances of data reuse, of which 1,777 and 2,179, respectively are expected to be incorrect predictions. Additionally, we are likely to miss 1,662, and 2,038 instances of data sharing and data reuse, respectively."),r.a.createElement("p",null,"These results indicate very low rates of data sharing and reuse. Of all 434 institutions that published at least 3 NIMH funded papers, we predicted just 18/25 have data sharing/reuse statements in more than 30% of their papers (Figure 1). Similarly, of all 4,139 PI\u2019s that published at least 3 NIMH funded papers, just 301/381 are expected to have data sharing/reuse statements in more than 30% of their papers (Figure 2). Our poster will feature an error analysis and an analysis of the features of papers labeled with and without data sharing and data reuse."),r.a.createElement("p",null,"We anticipate that additional labeled data will help improve and stabilize performance of these methods. In the future, we also intend to explore the effectiveness of alternative approaches, including using a gold-standard list of dataset DOIs derived from Datacite."))}}]),t}(r.a.Component),f=t(119),g=t(17),b=t(515),E=t(534),v=t(537),y=t(77),w=t.n(y),j=t(78),O=t.n(j),k=t(76),x=t.n(k),S=t(111),C=t.n(S),_=t(42),I=t.n(_),N=t(475),T=t(26),P=t.n(T),L=Object(b.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)},paper:{marginTop:"24px"}}}}));var B=function(){var e=Object(g.g)().id,a=Object(n.useState)([]),t=Object(c.a)(a,2),l=t[0],i=t[1],o=Object(n.useState)(""),s=Object(c.a)(o,2),u=s[0],m=s[1],d="https://osaka.o18s.com:9000/orgArticles/".concat("?org_id=",e),p=Object(g.f)();Object(n.useEffect)((function(){h()}),[]);var h=function(){P.a.get(d).then((function(e){m(e.data.results[0].organization_name);var a=e.data.results;i(a)})).catch((function(e){return console.log(e)}))},b=L();return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{variant:"h4",gutterBottom:!0},u),r.a.createElement(E.a,{className:b.paper},l.map((function(e){return r.a.createElement(N.a,{fullWidth:!0},r.a.createElement(f.a,{variant:"h5"},e.title),r.a.createElement(f.a,{variant:"h6",gutterBottom:!0},e.journal_title," - ",e.journal_year),r.a.createElement(E.a,null,r.a.createElement(v.a,{label:"Pub Med",icon:r.a.createElement(I.a,null),onClick:function(){return window.open("https://www.ncbi.nlm.nih.gov/pmc/articles/PMC".concat("",e.pmcid),"_blank")}}),r.a.createElement(v.a,{label:"PMCID: ".concat(e.pmcid),icon:r.a.createElement(x.a,null),onClick:function(){return window.open("https://www.ncbi.nlm.nih.gov/pmc/articles/PMC".concat("",e.pmcid),"_blank")},variant:"outlined"}),r.a.createElement(v.a,{label:"doi.org",icon:r.a.createElement(I.a,null),onClick:function(){return window.open("https://doi.org/".concat("",e.doi),"_blank")}}),r.a.createElement(v.a,{label:"DOI: ".concat(e.doi),icon:r.a.createElement(x.a,null),onClick:function(){return window.open("https://doi.org/".concat("",e.doi),"_blank")},variant:"outlined"})),"TRUE"==e.data_share?r.a.createElement(v.a,{size:"small",label:"Data sharing",icon:r.a.createElement(w.a,null),color:"primary"}):r.a.createElement(v.a,{size:"small",label:"Data sharing",icon:r.a.createElement(O.a,null),color:"secondary"}),"TRUE"==e.open_data?r.a.createElement(v.a,{size:"small",label:"Data reuse",icon:r.a.createElement(w.a,null),color:"primary"}):r.a.createElement(v.a,{size:"small",label:"Data reuse",icon:r.a.createElement(O.a,null),color:"secondary"}),r.a.createElement(v.a,{size:"small",onClick:function(){return p.push("/sharestats/papers/".concat(e.id))},label:"edit",icon:r.a.createElement(C.a,null),variant:"outlined"}))}))))},D=t(533),M=t(518),W=t(519),A=t(520),F=t(538),z=t(34);function R(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=a[0],l=a[1],i=Object(n.useState)("https://osaka.o18s.com:9000/orgs/"),o=Object(c.a)(i,2),s=o[0],u=(o[1],Object(n.useState)("https://osaka.o18s.com:9000/orgs/")),m=Object(c.a)(u,2),d=m[0],p=m[1],h=Object(n.useState)([]),g=Object(c.a)(h,2),b=g[0],E=g[1];Object(n.useEffect)((function(){v()}),[]);var v=function(){P.a.get(d).then((function(e){var a=e.data.results;E(a)})).catch((function(e){return console.log(e)}))};return Object(F.a)((function(){v()}),1e3,[t]),r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{variant:"h2",gutterBottom:!0},"Search by Institution"),r.a.createElement(D.a,{id:"searchtext",label:"Institution Name",style:{margin:8},placeholder:"",helperText:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",value:t,onChange:function(e){var a=e.currentTarget.value;l(a),p(s.concat("?search=",a))}}),r.a.createElement(M.a,null,b.map((function(e){return r.a.createElement(z.b,{to:"/sharestats/orgs/".concat(e.id)},r.a.createElement(W.a,{button:!0},r.a.createElement(A.a,{primary:e.organization_name})))}))))}var H=t(522),U=t(523),G=t(525),q=t(521),J=t(524),K=t(539),V=t(527),Y=Object(b.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},paper:{marginTop:"24px"},table:{minWidth:650}}}));var $=function(){var e=Object(g.g)().id,a=Object(n.useState)([]),t=Object(c.a)(a,2),l=t[0],i=t[1],o=Object(n.useState)(""),s=Object(c.a)(o,2),u=s[0],m=s[1],d=Object(n.useState)(""),p=Object(c.a)(d,2),h=p[0],b=p[1],y=Object(n.useState)(""),w=Object(c.a)(y,2),j=(w[0],w[1]),O="https://osaka.o18s.com:9000/projectpapers/".concat("?id=",e);Object(n.useEffect)((function(){k()}),[]);var k=function(){P.a.get(O).then((function(e){var a=e.data.results;i(a),m("TRUE"==a[0].data_share),b("TRUE"==a[0].open_data)})).catch((function(e){return console.log(e)}))},x=Y();function S(e){alert("Your edits have been saved".concat(" Share: ",u)),console.log(l),console.log(u),console.log(h),e.preventDefault()}function C(e){m((function(e){return!e}))}function _(e){b((function(e){return!e}))}function T(e){j(e.target.value)}return r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{className:x.paper},l.map((function(e){return r.a.createElement("div",null,r.a.createElement(f.a,{variant:"h4",gutterBottom:!0},"Edit Data Policy:"),r.a.createElement(f.a,{variant:"h5",gutterBottom:!0},e.title),r.a.createElement(f.a,{variant:"h6",gutterBottom:!0},e.journal_title," - ",e.journal_year),r.a.createElement(E.a,null,r.a.createElement(v.a,{label:"Pub Med",icon:r.a.createElement(I.a,null),onClick:function(){return window.open("https://www.ncbi.nlm.nih.gov/pmc/articles/PMC".concat("",e.pmcid),"_blank")}}),r.a.createElement(v.a,{label:"doi.org",icon:r.a.createElement(I.a,null),onClick:function(){return window.open("https://doi.org/".concat("",e.doi),"_blank")}})),r.a.createElement("form",{onSubmit:S},r.a.createElement(q.a,{component:N.a},r.a.createElement(H.a,{className:x.table,"aria-label":"simple table"},r.a.createElement(U.a,null,r.a.createElement(J.a,null,r.a.createElement(G.a,{align:"right"},"Data sharing:"),r.a.createElement(G.a,{align:"left"},r.a.createElement(K.a,{checked:u,onChange:C,color:"primary",name:"dataShare",inputProps:{"aria-label":"primary checkbox"}}))),r.a.createElement(J.a,null,r.a.createElement(G.a,{align:"right"},"Data reuse:"),r.a.createElement(G.a,{align:"left"},r.a.createElement(K.a,{checked:h,onChange:_,color:"primary",name:"dataReuse",inputProps:{"aria-label":"primary checkbox"}}))),r.a.createElement(J.a,null,r.a.createElement(G.a,{align:"right"}),r.a.createElement(G.a,{align:"left"},r.a.createElement(D.a,{id:"filled-multiline-static",label:"Data Sharing Statement",fullWidth:!0,onChange:T,name:"notes",multiline:!0,rows:4,defaultValue:"",helperText:"Please copy and paste the sentence(s) from the PMC version of the paper that indicate the paper provided or made use of shared data",variant:"filled"}))),r.a.createElement(J.a,null,r.a.createElement(G.a,{align:"right"},r.a.createElement(V.a,{variant:"contained",color:"primary",onClick:S},"Save")),r.a.createElement(G.a,{align:"left"})))))))}))))};var Q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{variant:"h2",gutterBottom:!0},"Search by Institution"),r.a.createElement(f.a,{variant:"body1",gutterBottom:!0},"Here you can search for an Organization by name to find their associated paper references in our database."),r.a.createElement(D.a,{id:"searchtext",label:"Institution Name",style:{margin:8},placeholder:"",helperText:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled"}),r.a.createElement(V.a,{variant:"contained"},"Search"))},X=Object(b.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},paper:{marginTop:"24px"}}}));var Z=function(){var e=Object(g.g)().id,a=Object(n.useState)([]),t=Object(c.a)(a,2),l=t[0],i=t[1],o=Object(n.useState)(""),s=Object(c.a)(o,2),u=s[0],m=s[1],d="https://osaka.o18s.com:9000/personArticles/".concat("?pi_id=",e),p=Object(g.f)();Object(n.useEffect)((function(){h()}),[]);var h=function(){P.a.get(d).then((function(e){m(e.data.results[0].contact_pi_project_leader);var a=e.data.results;i(a)})).catch((function(e){return console.log(e)}))},b=X();return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{variant:"h4",gutterBottom:!0},u),r.a.createElement(E.a,{className:b.paper},l.map((function(e){return r.a.createElement(N.a,{fullWidth:!0},r.a.createElement(f.a,{variant:"h5"},e.title),r.a.createElement(f.a,{variant:"h6",gutterBottom:!0},e.journal_title," - ",e.journal_year),r.a.createElement(E.a,null,r.a.createElement(v.a,{label:"Pub Med",icon:r.a.createElement(I.a,null),onClick:function(){return window.open("https://www.ncbi.nlm.nih.gov/pmc/articles/PMC".concat("",e.pmcid),"_blank")}}),r.a.createElement(v.a,{label:"PMCID: ".concat(e.pmcid),icon:r.a.createElement(x.a,null),onClick:function(){return window.open("https://www.ncbi.nlm.nih.gov/pmc/articles/PMC".concat("",e.pmcid),"_blank")},variant:"outlined"}),r.a.createElement(v.a,{label:"doi.org",icon:r.a.createElement(I.a,null),onClick:function(){return window.open("https://doi.org/".concat("",e.doi),"_blank")}}),r.a.createElement(v.a,{label:"DOI: ".concat(e.doi),icon:r.a.createElement(x.a,null),onClick:function(){return window.open("https://doi.org/".concat("",e.doi),"_blank")},variant:"outlined"})),"TRUE"==e.data_share?r.a.createElement(v.a,{size:"small",label:"Data sharing",icon:r.a.createElement(w.a,null),color:"primary"}):r.a.createElement(v.a,{size:"small",label:"Data sharing",icon:r.a.createElement(O.a,null),color:"secondary"}),"TRUE"==e.open_data?r.a.createElement(v.a,{size:"small",label:"Data reuse",icon:r.a.createElement(w.a,null),color:"primary"}):r.a.createElement(v.a,{size:"small",label:"Data reuse",icon:r.a.createElement(O.a,null),color:"secondary"}),r.a.createElement(v.a,{size:"small",onClick:function(){return p.push("/sharestats/papers/".concat(e.id))},label:"edit",icon:r.a.createElement(C.a,null),variant:"outlined"}))}))))};function ee(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=a[0],l=a[1],i=Object(n.useState)("https://osaka.o18s.com:9000/people/"),o=Object(c.a)(i,2),s=o[0],u=(o[1],Object(n.useState)("https://osaka.o18s.com:9000/people/")),m=Object(c.a)(u,2),d=m[0],p=m[1],h=Object(n.useState)([]),g=Object(c.a)(h,2),b=g[0],E=g[1];Object(n.useEffect)((function(){v()}),[]);var v=function(){P.a.get(d).then((function(e){var a=e.data.results;E(a)})).catch((function(e){return console.log(e)}))};return Object(F.a)((function(){v()}),1e3,[t]),r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{variant:"h2",gutterBottom:!0},"Search by Researcher"),r.a.createElement(D.a,{id:"searchtext",label:"Researcher Name",style:{margin:8},placeholder:"",helperText:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",value:t,onChange:function(e){var a=e.currentTarget.value;l(a),p(s.concat("?search=",a))}}),r.a.createElement(M.a,null,b.map((function(e){return r.a.createElement(z.b,{to:"/sharestats/researchers/".concat(e.id)},r.a.createElement(W.a,{button:!0},r.a.createElement(A.a,{primary:e.full_name})))}))))}var ae=t(57),te=Object(n.useState)(""),ne=Object(c.a)(te,2),re=ne[0],le=ne[1],ie=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){P.a.get("https://osaka.o18s.com:9000/orgGraph/").then((function(e){le(e.data.results)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(ae.c,{width:800,height:600,margin:{top:20,right:20,bottom:20,left:20}},r.a.createElement(ae.a,null),r.a.createElement(ae.e,{dataKey:"index",type:"number",name:"Sorted Institution",unit:""}),r.a.createElement(ae.f,{dataKey:"data_score",type:"number",name:"weight",unit:""}),r.a.createElement(ae.b,{name:"Institutions",data:re,fill:"#8884d8"}),r.a.createElement(ae.d,{cursor:{strokeDasharray:"3 3"}}))}}]),t}(r.a.Component),oe=t(4),ce=t(56),se=t(152),ue="515002199508-1n4d00fma9to0sjolghkceheguu7ubfg.apps.googleusercontent.com",me=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={isLoggeded:!1,accessToken:"",fullname:"",email:""},n.login=n.login.bind(Object(ce.a)(n)),n.handleLoginFailure=n.handleLoginFailure.bind(Object(ce.a)(n)),n.logout=n.logout.bind(Object(ce.a)(n)),n.handleLogoutFailure=n.handleLogoutFailure.bind(Object(ce.a)(n)),n}return Object(m.a)(t,[{key:"login",value:function(e){e.accessToken&&this.setState((function(a){return{isLoggeded:!0,accessToken:e.accessToken,fullname:e.profileObj.name,email:e.profileObj.email,givenName:e.profileObj.givenName,imageUrl:e.profileObj.imageUrl}}))}},{key:"logout",value:function(e){this.setState((function(e){return{isLoggeded:!1,accessToken:"",fullname:"",email:""}}))}},{key:"handleLoginFailure",value:function(e){alert("Failed to log in")}},{key:"handleLogoutFailure",value:function(e){alert("Failed to log out")}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.isLoggeded?r.a.createElement(se.GoogleLogout,{clientId:ue,buttonText:"Logout",onLogoutSuccess:this.logout,onFailure:this.handleLogoutFailure}):r.a.createElement(se.GoogleLogin,{clientId:ue,buttonText:"Login",onSuccess:this.login,onFailure:this.handleLoginFailure,cookiePolicy:"single_host_origin",responseType:"code,token"}))}}]),t}(n.Component),de=t(27),pe=t(530),he=t(234),fe=t.n(he),ge=t(235),be=t.n(ge),Ee=t(529),ve=t(532),ye=t(536),we=t(526),je=t(233),Oe=t.n(je),ke=t(528),xe=t(232),Se=t.n(xe),Ce=t(231),_e=t.n(Ce),Ie=t(230),Ne=t.n(Ie),Te=t(229),Pe=t.n(Te);var Le=function(){var e=Object(g.f)();return r.a.createElement(M.a,null,r.a.createElement(W.a,{button:!0,key:"Home",onClick:function(){e.push("/sharestats")}},r.a.createElement(ke.a,null,r.a.createElement(Pe.a,null)),r.a.createElement(A.a,{primary:"Home"})),r.a.createElement(W.a,{button:!0,key:"Graphs",onClick:function(){e.push("/sharestats/graphs")}},r.a.createElement(ke.a,null,r.a.createElement(Ne.a,null)),r.a.createElement(A.a,{primary:"Graphs"})),r.a.createElement(W.a,{button:!0,key:"Institutions",onClick:function(){e.push("/sharestats/orgs")}},r.a.createElement(ke.a,null,r.a.createElement(_e.a,null)),r.a.createElement(A.a,{primary:"Institutions"})),r.a.createElement(W.a,{button:!0,key:"Researchers",onClick:function(){e.push("/sharestats/researchers")}},r.a.createElement(ke.a,null,r.a.createElement(Se.a,null)),r.a.createElement(A.a,{primary:"Researchers"})))},Be=t(531),De=Object(b.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(s.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));var Me=function(){var e=De(),a=Object(de.a)(),t=r.a.useState(!1),n=Object(c.a)(t,2),l=n[0],i=n[1];return r.a.createElement("div",{className:"App"},r.a.createElement(z.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:e.root},r.a.createElement(Ee.a,null),r.a.createElement(pe.a,{position:"fixed",className:Object(oe.a)(e.appBar,Object(o.a)({},e.appBarShift,l))},r.a.createElement(Be.a,null,r.a.createElement(we.a,{color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},edge:"start",className:Object(oe.a)(e.menuButton,l&&e.hide)},r.a.createElement(Oe.a,null)),r.a.createElement(f.a,{variant:"h6",noWrap:!0},"Data Sharing in NIMH papers"))),r.a.createElement(ye.a,{className:e.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(we.a,{onClick:function(){i(!1)}},"ltr"===a.direction?r.a.createElement(fe.a,null):r.a.createElement(be.a,null)),r.a.createElement(me,null)),r.a.createElement(ve.a,null),r.a.createElement(Le,null)),r.a.createElement("main",{className:Object(oe.a)(e.content,Object(o.a)({},e.contentShift,l))},r.a.createElement("div",{className:e.drawerHeader}),r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/sharestats/orgs",component:R}),r.a.createElement(g.a,{exact:!0,path:"/sharestats/papers",component:Q}),r.a.createElement(g.a,{exact:!0,path:"/sharestats/researchers",component:ee}),r.a.createElement(g.a,{path:"/sharestats/orgs/:id?",component:B}),r.a.createElement(g.a,{path:"/sharestats/papers/:id?",component:$}),r.a.createElement(g.a,{path:"/sharestats/researchers/:id?",component:Z}),r.a.createElement(g.a,{path:"/sharestats/graphs",component:ie}),r.a.createElement(g.a,{path:"/sharestats",component:h})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[273,1,2]]]);
//# sourceMappingURL=main.176a932e.chunk.js.map