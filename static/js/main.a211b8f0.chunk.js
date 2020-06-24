(this.webpackJsonpnimh_ohbm=this.webpackJsonpnimh_ohbm||[]).push([[0],{277:function(e,a,t){e.exports=t(481)},282:function(e,a,t){},48:function(e,a,t){},481:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),o=t.n(l),c=(t(282),t(87)),i=t(15),s=t(219),u=(t(48),t(220)),m=t(221),p=t(238),d=t(239),h=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainContent"},r.a.createElement("h2",null,"Identifying data sharing and data reuse in full-text NIMH-funded papers"),r.a.createElement("h3",null,"Travis Riddle, Francisco Pereira, & Adam Thomas"),r.a.createElement("p",null,"Our ",r.a.createElement("a",{href:"https://cmn.nimh.nih.gov/dsst"},"team")," is developing a system to automatically classify data sharing and data reuse statements in NIMH-funded research texts. We have presented some of this work as a poster at ",r.a.createElement("a",{href:"https://zenodo.org/record/3894807"},"OHBM"),". Our current classification system does a serviceable job, but is not ready for 'prime time'. We need more labeled data."),r.a.createElement("p",null,r.a.createElement("b",null,"What we want from you:")),r.a.createElement("p",null,"Have a look around! Know of some papers (funded by NIMH) that share or reuse data? Make sure they're labeled correctly. Do you see some papers that are mislabeled? Fix them! If you find a false negative, it would be especially helpful if you would paste the sentence from the paper that indicates data sharing/reuse into the text box."),r.a.createElement("p",null,"Look for papers by institution, or by investigators using the menu tray at the top left. Note that investigators and institutions are determined by the grant associated with a paper, so there will almost certainly be many other authors and institutions on a paper who are not represented in these data."),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/nih-fmrif/sharestats/blob/master/README.md"},"Feedback and Frequently Asked Questions>")))}}]),t}(r.a.Component),E=t(118),f=t(17),b=t(523),g=t(542),v=t(546),y=t(76),j=t.n(y),O=t(77),w=t.n(O),k=t(75),S=t.n(k),x=t(78),C=t.n(x),_=t(45),I=t.n(_),N=t(483),T=t(72),D=t(36),B=t(24),M=t.n(B),A=Object(b.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)},paper:{marginTop:"24px"}}}}));var L=function(){var e=Object(f.g)().id,a=Object(n.useState)([]),t=Object(i.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(""),s=Object(i.a)(c,2),u=s[0],m=s[1],p="https://osaka.o18s.com:9000/orgArticles/".concat("?org_id=",e),d=Object(f.f)(),h=Object(D.c)((function(e){return e.user}));Object(n.useEffect)((function(){b()}),[]);var b=function(){M.a.get(p).then((function(e){m(e.data.results[0].organization_name);var a=e.data.results;o(a)})).catch((function(e){return console.log(e)}))},y=A();return r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{variant:"h4",gutterBottom:!0},u),r.a.createElement(g.a,{className:y.paper},l.map((function(e){return r.a.createElement(N.a,{fullWidth:!0},r.a.createElement(E.a,{variant:"h5"},e.title),r.a.createElement(E.a,{variant:"h6",gutterBottom:!0},e.journal_title," - ",e.journal_year),r.a.createElement(g.a,null,r.a.createElement(v.a,{label:"Pub Med",icon:r.a.createElement(I.a,null),onClick:function(){return window.open("https://www.ncbi.nlm.nih.gov/pmc/articles/PMC".concat("",e.pmcid),"_blank")}}),r.a.createElement(T.CopyToClipboard,{text:e.pmcid},r.a.createElement(v.a,{label:"PMCID: ".concat(e.pmcid),icon:r.a.createElement(S.a,null),variant:"outlined"})),r.a.createElement(v.a,{label:"doi.org",icon:r.a.createElement(I.a,null),onClick:function(){return window.open("https://doi.org/".concat("",e.doi),"_blank")}}),r.a.createElement(T.CopyToClipboard,{text:e.doi},r.a.createElement(v.a,{label:"DOI: ".concat(e.doi),icon:r.a.createElement(S.a,null),variant:"outlined"}))),"TRUE"==e.data_share?r.a.createElement(v.a,{size:"small",label:"Data sharing",icon:r.a.createElement(j.a,null),color:"primary"}):r.a.createElement(v.a,{size:"small",label:"Data sharing",icon:r.a.createElement(w.a,null),color:"secondary"}),"TRUE"==e.open_data?r.a.createElement(v.a,{size:"small",label:"Data reuse",icon:r.a.createElement(j.a,null),color:"primary"}):r.a.createElement(v.a,{size:"small",label:"Data reuse",icon:r.a.createElement(w.a,null),color:"secondary"}),1==h.isAuthed?r.a.createElement(v.a,{size:"small",onClick:function(){return d.push("/sharestats/papers/".concat(e.pmcid))},label:"edit",icon:r.a.createElement(C.a,null),variant:"outlined"}):r.a.createElement(v.a,{size:"small",label:"login to edit",icon:r.a.createElement(C.a,null),variant:"outlined"}))}))))},P=t(541),z=t(526),W=t(527),H=t(528),R=t(548),F=t(35);function G(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)("https://osaka.o18s.com:9000/orgs/"),c=Object(i.a)(o,2),s=c[0],u=(c[1],Object(n.useState)("https://osaka.o18s.com:9000/orgs/")),m=Object(i.a)(u,2),p=m[0],d=m[1],h=Object(n.useState)([]),f=Object(i.a)(h,2),b=f[0],g=f[1];Object(n.useEffect)((function(){v()}),[]);var v=function(){M.a.get(p).then((function(e){var a=e.data.results;g(a)})).catch((function(e){return console.log(e)}))};return Object(R.a)((function(){v()}),1e3,[t]),r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{variant:"h2",gutterBottom:!0},"Search by Institution"),r.a.createElement(P.a,{id:"searchtext",label:"Institution Name",style:{margin:8},placeholder:"",helperText:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",value:t,onChange:function(e){var a=e.currentTarget.value;l(a),d(s.concat("?search=",a))}}),r.a.createElement(z.a,null,b.map((function(e){return r.a.createElement(F.b,{to:"/sharestats/orgs/".concat(e.id)},r.a.createElement(W.a,{button:!0},r.a.createElement(H.a,{primary:e.organization_name})))}))))}var U=t(530),K=t(531),q=t(533),J=t(529),Q=t(532),V=t(549),Y=t(535),$=Object(b.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},paper:{marginTop:"24px"},table:{minWidth:650}}}));var X=function(){var e=Object(f.g)().id,a=Object(n.useState)([]),t=Object(i.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(""),s=Object(i.a)(c,2),u=s[0],m=s[1],p=Object(n.useState)(""),d=Object(i.a)(p,2),h=d[0],b=d[1],y=Object(n.useState)(""),j=Object(i.a)(y,2),O=j[0],w=j[1],k=Object(D.c)((function(e){return e.user})),S="https://osaka.o18s.com:9000/articles/".concat("?pmcid=",e);Object(n.useEffect)((function(){x()}),[]);var x=function(){M.a.get(S).then((function(e){var a=e.data.results;o(a),m(1==a[0].int_data_share),b(1==a[0].int_open_data)})).catch((function(e){return console.log(e)}))},C=$();function _(a){M.a.post("https://osaka.o18s.com:9000/articleupdates/",{pmcid:e,open_data:1==h?"TRUE":"FALSE",data_share:1==u?"TRUE":"FALSE",data_statement:O,edit_user:k.email}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),alert("Your changes have been added to our review queue."),a.preventDefault()}function T(e){m((function(e){return!e}))}function B(e){b((function(e){return!e}))}function A(e){w(e.target.value)}return r.a.createElement("div",{className:"App"},r.a.createElement(g.a,{className:C.paper},l.map((function(e){return r.a.createElement("div",null,r.a.createElement(E.a,{variant:"h4",gutterBottom:!0},"Edit Data Policy:"),r.a.createElement(E.a,{variant:"h5",gutterBottom:!0},e.title),r.a.createElement(E.a,{variant:"h6",gutterBottom:!0},e.journal_title," - ",e.journal_year),r.a.createElement(g.a,null,r.a.createElement(v.a,{label:"Pub Med",icon:r.a.createElement(I.a,null),onClick:function(){return window.open("https://www.ncbi.nlm.nih.gov/pmc/articles/PMC".concat("",e.pmcid),"_blank")}}),r.a.createElement(v.a,{label:"doi.org",icon:r.a.createElement(I.a,null),onClick:function(){return window.open("https://doi.org/".concat("",e.doi),"_blank")}})),r.a.createElement("form",{onSubmit:_},r.a.createElement(J.a,{component:N.a},r.a.createElement(U.a,{className:C.table,"aria-label":"simple table"},r.a.createElement(K.a,null,r.a.createElement(Q.a,null,r.a.createElement(q.a,{align:"right"},"Data sharing:"),r.a.createElement(q.a,{align:"left"},r.a.createElement(V.a,{checked:u,onChange:T,color:"primary",name:"dataShare",inputProps:{"aria-label":"primary checkbox"}}))),r.a.createElement(Q.a,null,r.a.createElement(q.a,{align:"right"},"Data reuse:"),r.a.createElement(q.a,{align:"left"},r.a.createElement(V.a,{checked:h,onChange:B,color:"primary",name:"dataReuse",inputProps:{"aria-label":"primary checkbox"}}))),r.a.createElement(Q.a,null,r.a.createElement(q.a,{align:"right"}),r.a.createElement(q.a,{align:"left"},r.a.createElement(P.a,{id:"filled-multiline-static",label:"Data Sharing Statement",fullWidth:!0,onChange:A,name:"notes",multiline:!0,rows:4,defaultValue:"",helperText:"Please copy and paste the sentence(s) from the PMC version of the paper that indicate the paper provided or made use of shared data",variant:"filled"}))),r.a.createElement(Q.a,null,r.a.createElement(q.a,{align:"right"},r.a.createElement(Y.a,{variant:"contained",color:"primary",onClick:_},"Save")),r.a.createElement(q.a,{align:"left"})))))))}))))};var Z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{variant:"h2",gutterBottom:!0},"Search by Institution"),r.a.createElement(E.a,{variant:"body1",gutterBottom:!0},"Here you can search for an Organization by name to find their associated paper references in our database."),r.a.createElement(P.a,{id:"searchtext",label:"Institution Name",style:{margin:8},placeholder:"",helperText:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled"}),r.a.createElement(Y.a,{variant:"contained"},"Search"))},ee=Object(b.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},paper:{marginTop:"24px"}}}));var ae=function(){var e=Object(f.g)().id,a=Object(n.useState)([]),t=Object(i.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(""),s=Object(i.a)(c,2),u=s[0],m=s[1],p="https://osaka.o18s.com:9000/personArticles/".concat("?pi_id=",e),d=Object(f.f)(),h=Object(D.c)((function(e){return e.user}));Object(n.useEffect)((function(){b()}),[]);var b=function(){M.a.get(p).then((function(e){m(e.data.results[0].contact_pi_project_leader);var a=e.data.results;o(a)})).catch((function(e){return console.log(e)}))},y=ee();return r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{variant:"h4",gutterBottom:!0},u),r.a.createElement(g.a,{className:y.paper},l.map((function(e){return r.a.createElement(N.a,{fullWidth:!0},r.a.createElement(E.a,{variant:"h5"},e.title),r.a.createElement(E.a,{variant:"h6",gutterBottom:!0},e.journal_title," - ",e.journal_year),r.a.createElement(g.a,null,r.a.createElement(v.a,{label:"Pub Med",icon:r.a.createElement(I.a,null),onClick:function(){return window.open("https://www.ncbi.nlm.nih.gov/pmc/articles/PMC".concat("",e.pmcid),"_blank")}}),r.a.createElement(T.CopyToClipboard,{text:e.pmcid},r.a.createElement(v.a,{label:"PMCID: ".concat(e.pmcid),icon:r.a.createElement(S.a,null),variant:"outlined"})),r.a.createElement(v.a,{label:"doi.org",icon:r.a.createElement(I.a,null),onClick:function(){return window.open("https://doi.org/".concat("",e.doi),"_blank")}}),r.a.createElement(T.CopyToClipboard,{text:e.doi},r.a.createElement(v.a,{label:"DOI: ".concat(e.doi),icon:r.a.createElement(S.a,null),variant:"outlined"}))),"TRUE"==e.data_share?r.a.createElement(v.a,{size:"small",label:"Data sharing",icon:r.a.createElement(j.a,null),color:"primary"}):r.a.createElement(v.a,{size:"small",label:"Data sharing",icon:r.a.createElement(w.a,null),color:"secondary"}),"TRUE"==e.open_data?r.a.createElement(v.a,{size:"small",label:"Data reuse",icon:r.a.createElement(j.a,null),color:"primary"}):r.a.createElement(v.a,{size:"small",label:"Data reuse",icon:r.a.createElement(w.a,null),color:"secondary"}),1==h.isAuthed?r.a.createElement(v.a,{size:"small",onClick:function(){return d.push("/sharestats/papers/".concat(e.pmcid))},label:"edit",icon:r.a.createElement(C.a,null),variant:"outlined"}):r.a.createElement(v.a,{size:"small",label:"login to edit",icon:r.a.createElement(C.a,null),variant:"outlined"}))}))))};function te(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)("https://osaka.o18s.com:9000/people/"),c=Object(i.a)(o,2),s=c[0],u=(c[1],Object(n.useState)("https://osaka.o18s.com:9000/people/")),m=Object(i.a)(u,2),p=m[0],d=m[1],h=Object(n.useState)([]),f=Object(i.a)(h,2),b=f[0],g=f[1];Object(n.useEffect)((function(){v()}),[]);var v=function(){M.a.get(p).then((function(e){var a=e.data.results;g(a)})).catch((function(e){return console.log(e)}))};return Object(R.a)((function(){v()}),1e3,[t]),r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{variant:"h2",gutterBottom:!0},"Search by Researcher"),r.a.createElement(P.a,{id:"searchtext",label:"Researcher Name",style:{margin:8},placeholder:"",helperText:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",value:t,onChange:function(e){var a=e.currentTarget.value;l(a),d(s.concat("?search=",a))}}),r.a.createElement(z.a,null,b.map((function(e){return r.a.createElement(F.b,{to:"/sharestats/researchers/".concat(e.id)},r.a.createElement(W.a,{button:!0},r.a.createElement(H.a,{primary:e.full_name})))}))))}var ne=t(22);var re=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)(""),c=Object(i.a)(o,2),s=c[0],u=c[1],m=Object(n.useState)({}),p=Object(i.a)(m,2),d=p[0],h=p[1];Object(n.useEffect)((function(){f()}),[]);var f=function(){M.a.get("https://osaka.o18s.com:9000/orgGraph/").then((function(e){l(e.data.results);var a={};e.data.results.forEach((function(e,t,n){e.forEach((function(e,t,n){a[e.index]=e.orgLookup})),h(a),console.log(d)}))})).catch((function(e){return console.log(e)})),M.a.get("https://osaka.o18s.com:9000/personGraph/").then((function(e){u(e.data.results)})).catch((function(e){return console.log(e)}))};return r.a.createElement("div",null,r.a.createElement(E.a,{variant:"h6"},"Most data sharing & reuse comes from a small subset of NIMH funded Institutions"),r.a.createElement(ne.d,{width:800,height:600,margin:{top:20,right:20,bottom:20,left:20}},r.a.createElement(ne.a,{strokeDasharray:"3 3"}),r.a.createElement(ne.f,{dataKey:"index",type:"number",name:"Sorted Institution",domain:[0,450],unit:""},r.a.createElement(ne.b,{value:"Sorted Institution (min 3 pubs)",offset:0,position:"insideBottom"})),r.a.createElement(ne.g,{dataKey:"data_score",type:"number",name:"weight",domain:[0,1],unit:"",label:{value:"Estimated prop of papers with data policy",angle:-90,position:"insideLeft"}}),r.a.createElement(ne.c,{name:"Institutions",data:t,fill:"#708090"}),r.a.createElement(ne.e,{cursor:{strokeDasharray:"3 3"}})),r.a.createElement(E.a,{variant:"h6"},"Most data sharing & reuse comes from a small subset of NIMH funded Investigators"),r.a.createElement(ne.d,{width:800,height:600,margin:{top:20,right:20,bottom:20,left:20}},r.a.createElement(ne.a,{strokeDasharray:"3 3"}),r.a.createElement(ne.f,{dataKey:"index",type:"number",name:"Sorted Investigators",domain:[0,4200],unit:""},r.a.createElement(ne.b,{value:"Sorted Investigators (min 3 pubs)",offset:0,position:"insideBottom"})),r.a.createElement(ne.g,{dataKey:"data_score",type:"number",name:"weight",domain:[0,1],unit:"",label:{value:"Estimated prop of papers with data policy",angle:-90,position:"insideLeft"}}),r.a.createElement(ne.c,{name:"Institutions",data:s,fill:"#708090"}),r.a.createElement(ne.e,{cursor:{strokeDasharray:"3 3"}})))},le=t(4),oe=t(151),ce="@user/Login",ie="@user/Logout";var se=function(){var e="515002199508-1n4d00fma9to0sjolghkceheguu7ubfg.apps.googleusercontent.com",a=Object(D.b)(),t=Object(n.useState)(0),l=Object(i.a)(t,2),o=l[0],c=l[1];return r.a.createElement("div",null,o?r.a.createElement(oe.GoogleLogout,{clientId:e,buttonText:"Logout",onLogoutSuccess:function(e){console.log("doing login"),c(1),a({type:ie,payload:{isAuthed:!1,fullname:"",email:""}})},onFailure:function(e){alert("Failed to log out")}}):r.a.createElement(oe.GoogleLogin,{clientId:e,buttonText:"Login",onSuccess:function(e){var t;console.log("doing login"),e.accessToken&&c(1),a((t={isAuthed:!0,fullname:e.profileObj.name,email:e.profileObj.email},{type:ce,payload:t}))},onFailure:function(e){alert("Failed to log in")},cookiePolicy:"single_host_origin",responseType:"code,token"}))},ue=t(28),me=t(538),pe=t(236),de=t.n(pe),he=t(237),Ee=t.n(he),fe=t(537),be=t(540),ge=t(544),ve=t(534),ye=t(235),je=t.n(ye),Oe=t(536),we=t(234),ke=t.n(we),Se=t(233),xe=t.n(Se),Ce=t(232),_e=t.n(Ce),Ie=t(231),Ne=t.n(Ie);var Te=function(){var e=Object(f.f)();return r.a.createElement(z.a,null,r.a.createElement(W.a,{button:!0,key:"Home",onClick:function(){e.push("/sharestats")}},r.a.createElement(Oe.a,null,r.a.createElement(Ne.a,null)),r.a.createElement(H.a,{primary:"Home"})),r.a.createElement(W.a,{button:!0,key:"Graphs",onClick:function(){e.push("/sharestats/graphs")}},r.a.createElement(Oe.a,null,r.a.createElement(_e.a,null)),r.a.createElement(H.a,{primary:"Graphs"})),r.a.createElement(W.a,{button:!0,key:"Institutions",onClick:function(){e.push("/sharestats/orgs")}},r.a.createElement(Oe.a,null,r.a.createElement(xe.a,null)),r.a.createElement(H.a,{primary:"Institutions"})),r.a.createElement(W.a,{button:!0,key:"Researchers",onClick:function(){e.push("/sharestats/researchers")}},r.a.createElement(Oe.a,null,r.a.createElement(ke.a,null)),r.a.createElement(H.a,{primary:"Researchers"})))},De=t(539),Be=Object(b.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(s.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));var Me=function(){var e=Be(),a=Object(ue.a)(),t=r.a.useState(!1),n=Object(i.a)(t,2),l=n[0],o=n[1];return r.a.createElement("div",{className:"App"},r.a.createElement(F.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:e.root},r.a.createElement(fe.a,null),r.a.createElement(me.a,{position:"fixed",className:Object(le.a)(e.appBar,Object(c.a)({},e.appBarShift,l))},r.a.createElement(De.a,null,r.a.createElement(ve.a,{color:"inherit","aria-label":"open drawer",onClick:function(){o(!0)},edge:"start",className:Object(le.a)(e.menuButton,l&&e.hide)},r.a.createElement(je.a,null)),r.a.createElement(E.a,{variant:"h6",noWrap:!0},"Data Sharing in NIMH papers"))),r.a.createElement(ge.a,{className:e.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(ve.a,{onClick:function(){o(!1)}},"ltr"===a.direction?r.a.createElement(de.a,null):r.a.createElement(Ee.a,null)),r.a.createElement(se,null)),r.a.createElement(be.a,null),r.a.createElement(Te,null)),r.a.createElement("main",{className:Object(le.a)(e.content,Object(c.a)({},e.contentShift,l))},r.a.createElement("div",{className:e.drawerHeader}),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/sharestats/orgs",component:G}),r.a.createElement(f.a,{exact:!0,path:"/sharestats/papers",component:Z}),r.a.createElement(f.a,{exact:!0,path:"/sharestats/researchers",component:te}),r.a.createElement(f.a,{path:"/sharestats/orgs/:id?",component:L}),r.a.createElement(f.a,{path:"/sharestats/papers/:id?",component:X}),r.a.createElement(f.a,{path:"/sharestats/researchers/:id?",component:ae}),r.a.createElement(f.a,{path:"/sharestats/graphs",component:re}),r.a.createElement(f.a,{path:"/sharestats",component:h})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ae=t(65),Le={isAuthed:"FALSE",fullname:"",email:""},Pe=Object(Ae.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case ce:return a.payload;case ie:return e-a.payload;default:return e}}}),ze=Object(Ae.c)(Pe);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D.a,{store:ze},r.a.createElement(Me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[277,1,2]]]);
//# sourceMappingURL=main.a211b8f0.chunk.js.map