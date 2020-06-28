(this.webpackJsonpnimh_ohbm=this.webpackJsonpnimh_ohbm||[]).push([[0],{279:function(e,a,t){e.exports=t(483)},284:function(e,a,t){},48:function(e,a,t){},483:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),o=t.n(l),c=(t(284),t(87)),i=t(15),s=t(220),u=(t(48),t(221)),m=t(222),d=t(240),p=t(241),h=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainContent"},r.a.createElement("h2",null,"Identifying data sharing and data reuse in full-text NIMH-funded papers"),r.a.createElement("h3",null,"Travis Riddle, Francisco Pereira, & Adam Thomas"),r.a.createElement("p",null,"Our ",r.a.createElement("a",{href:"https://cmn.nimh.nih.gov/dsst"},"team")," is developing a system to automatically classify data sharing and data reuse statements in NIMH-funded research texts. We have presented some of this work as a poster at ",r.a.createElement("a",{href:"https://zenodo.org/record/3894807"},"OHBM"),". Our current classification system does a serviceable job, but is not ready for 'prime time'. We need more labeled data."),r.a.createElement("p",null,r.a.createElement("b",null,"What we want from you:")),r.a.createElement("p",null,"Have a look around! Know of some papers (funded by NIMH) that share or reuse data? Make sure they're labeled correctly. Do you see some papers that are mislabeled? Fix them! If you find a false negative, it would be especially helpful if you would paste the sentence from the paper that indicates data sharing/reuse into the text box."),r.a.createElement("p",null,"Look for papers by institution, or by investigators using the menu tray at the top left. Note that investigators and institutions are determined by the grant associated with a paper, so there will almost certainly be many other authors and institutions on a paper who are not represented in these data."),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/nih-fmrif/sharestats/blob/master/README.md"},"Feedback and Frequently Asked Questions>")))}}]),t}(r.a.Component),E=t(119),f=t(17),b=t(525),g=t(544),v=t(549),y=t(76),j=t.n(y),O=t(77),w=t.n(O),k=t(75),S=t.n(k),x=t(78),C=t.n(x),_=t(45),I=t.n(_),N=t(485),T=t(72),D=t(36),B=t(24),M=t.n(B),A=Object(b.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)},paper:{marginTop:"24px"}}}}));var P=function(){var e=Object(f.g)().id,a=Object(n.useState)([]),t=Object(i.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(""),s=Object(i.a)(c,2),u=s[0],m=s[1],d="https://osaka.o18s.com:9000/orgArticles/".concat("?org_id=",e),p=Object(f.f)(),h=Object(D.c)((function(e){return e.user}));Object(n.useEffect)((function(){b()}),[]);var b=function(){M.a.get(d).then((function(e){m(e.data.results[0].organization_name);var a=e.data.results;o(a)})).catch((function(e){return console.log(e)}))},y=A();return r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{variant:"h4",gutterBottom:!0},u),r.a.createElement(g.a,{className:y.paper},l.map((function(e){return r.a.createElement(N.a,{fullWidth:!0},r.a.createElement(E.a,{variant:"h5"},e.title),r.a.createElement(E.a,{variant:"h6",gutterBottom:!0},e.journal_title," - ",e.journal_year),r.a.createElement(g.a,null,r.a.createElement(v.a,{label:"Pub Med",icon:r.a.createElement(I.a,null),onClick:function(){return window.open("https://www.ncbi.nlm.nih.gov/pmc/articles/PMC".concat("",e.pmcid),"_blank")}}),r.a.createElement(T.CopyToClipboard,{text:e.pmcid},r.a.createElement(v.a,{label:"PMCID: ".concat(e.pmcid),icon:r.a.createElement(S.a,null),variant:"outlined"})),r.a.createElement(v.a,{label:"doi.org",icon:r.a.createElement(I.a,null),onClick:function(){return window.open("https://doi.org/".concat("",e.doi),"_blank")}}),r.a.createElement(T.CopyToClipboard,{text:e.doi},r.a.createElement(v.a,{label:"DOI: ".concat(e.doi),icon:r.a.createElement(S.a,null),variant:"outlined"}))),"TRUE"==e.data_share?r.a.createElement(v.a,{size:"small",label:"Data sharing",icon:r.a.createElement(j.a,null),color:"primary"}):r.a.createElement(v.a,{size:"small",label:"Data sharing",icon:r.a.createElement(w.a,null),color:"secondary"}),"TRUE"==e.open_data?r.a.createElement(v.a,{size:"small",label:"Data reuse",icon:r.a.createElement(j.a,null),color:"primary"}):r.a.createElement(v.a,{size:"small",label:"Data reuse",icon:r.a.createElement(w.a,null),color:"secondary"}),1==h.isAuthed?r.a.createElement(v.a,{size:"small",onClick:function(){return p.push("/sharestats/papers/".concat(e.pmcid))},label:"edit",icon:r.a.createElement(C.a,null),variant:"outlined"}):r.a.createElement(v.a,{size:"small",label:"login to edit",icon:r.a.createElement(C.a,null),variant:"outlined"}))}))))},L=t(543),z=t(528),W=t(529),H=t(530),R=t(550),F=t(35);function G(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)("https://osaka.o18s.com:9000/orgs/"),c=Object(i.a)(o,2),s=c[0],u=(c[1],Object(n.useState)("https://osaka.o18s.com:9000/orgs/")),m=Object(i.a)(u,2),d=m[0],p=m[1],h=Object(n.useState)([]),f=Object(i.a)(h,2),b=f[0],g=f[1];Object(n.useEffect)((function(){v()}),[]);var v=function(){M.a.get(d).then((function(e){var a=e.data.results;g(a)})).catch((function(e){return console.log(e)}))};return Object(R.a)((function(){v()}),1e3,[t]),r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{variant:"h2",gutterBottom:!0},"Search by Institution"),r.a.createElement(L.a,{id:"searchtext",label:"Institution Name",style:{margin:8},placeholder:"",helperText:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",value:t,onChange:function(e){var a=e.currentTarget.value;l(a),p(s.concat("?search=",a))}}),r.a.createElement(z.a,null,b.map((function(e){return r.a.createElement(F.b,{to:"/sharestats/orgs/".concat(e.id)},r.a.createElement(W.a,{button:!0},r.a.createElement(H.a,{primary:e.organization_name})))}))))}var U=t(532),K=t(533),q=t(535),J=t(531),Q=t(534),V=t(551),Y=t(537),$=Object(b.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},paper:{marginTop:"24px"},table:{minWidth:650}}}));var X=function(){var e=Object(f.g)().id,a=Object(n.useState)([]),t=Object(i.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(""),s=Object(i.a)(c,2),u=s[0],m=s[1],d=Object(n.useState)(""),p=Object(i.a)(d,2),h=p[0],b=p[1],y=Object(n.useState)(""),j=Object(i.a)(y,2),O=j[0],w=j[1],k=Object(D.c)((function(e){return e.user})),S="https://osaka.o18s.com:9000/articles/".concat("?pmcid=",e);Object(n.useEffect)((function(){x()}),[]);var x=function(){M.a.get(S).then((function(e){var a=e.data.results;o(a),m(1==a[0].int_data_share),b(1==a[0].int_open_data)})).catch((function(e){return console.log(e)}))},C=$();function _(a){M.a.post("https://osaka.o18s.com:9000/articleupdates/",{pmcid:e,open_data:1==h?"TRUE":"FALSE",data_share:1==u?"TRUE":"FALSE",data_statement:O,edit_user:k.email}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),alert("Your changes have been added to our review queue."),a.preventDefault()}function T(e){m((function(e){return!e}))}function B(e){b((function(e){return!e}))}function A(e){w(e.target.value)}return r.a.createElement("div",{className:"App"},r.a.createElement(g.a,{className:C.paper},l.map((function(e){return r.a.createElement("div",null,r.a.createElement(E.a,{variant:"h4",gutterBottom:!0},"Edit Data Policy:"),r.a.createElement(E.a,{variant:"h5",gutterBottom:!0},e.title),r.a.createElement(E.a,{variant:"h6",gutterBottom:!0},e.journal_title," - ",e.journal_year),r.a.createElement(g.a,null,r.a.createElement(v.a,{label:"Pub Med",icon:r.a.createElement(I.a,null),onClick:function(){return window.open("https://www.ncbi.nlm.nih.gov/pmc/articles/PMC".concat("",e.pmcid),"_blank")}}),r.a.createElement(v.a,{label:"doi.org",icon:r.a.createElement(I.a,null),onClick:function(){return window.open("https://doi.org/".concat("",e.doi),"_blank")}})),r.a.createElement("form",{onSubmit:_},r.a.createElement(J.a,{component:N.a},r.a.createElement(U.a,{className:C.table,"aria-label":"simple table"},r.a.createElement(K.a,null,r.a.createElement(Q.a,null,r.a.createElement(q.a,{align:"right"},"Data sharing:"),r.a.createElement(q.a,{align:"left"},r.a.createElement(V.a,{checked:u,onChange:T,color:"primary",name:"dataShare",inputProps:{"aria-label":"primary checkbox"}}))),r.a.createElement(Q.a,null,r.a.createElement(q.a,{align:"right"},"Data reuse:"),r.a.createElement(q.a,{align:"left"},r.a.createElement(V.a,{checked:h,onChange:B,color:"primary",name:"dataReuse",inputProps:{"aria-label":"primary checkbox"}}))),r.a.createElement(Q.a,null,r.a.createElement(q.a,{align:"right"}),r.a.createElement(q.a,{align:"left"},r.a.createElement(L.a,{id:"filled-multiline-static",label:"Data Sharing Statement",fullWidth:!0,onChange:A,name:"notes",multiline:!0,rows:4,defaultValue:"",helperText:"Please copy and paste the sentence(s) from the PMC version of the paper that indicate the paper provided or made use of shared data",variant:"filled"}))),r.a.createElement(Q.a,null,r.a.createElement(q.a,{align:"right"},r.a.createElement(Y.a,{variant:"contained",color:"primary",onClick:_},"Save")),r.a.createElement(q.a,{align:"left"})))))))}))))};var Z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{variant:"h2",gutterBottom:!0},"Search by Institution"),r.a.createElement(E.a,{variant:"body1",gutterBottom:!0},"Here you can search for an Organization by name to find their associated paper references in our database."),r.a.createElement(L.a,{id:"searchtext",label:"Institution Name",style:{margin:8},placeholder:"",helperText:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled"}),r.a.createElement(Y.a,{variant:"contained"},"Search"))},ee=Object(b.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},paper:{marginTop:"24px"}}}));var ae=function(){var e=Object(f.g)().id,a=Object(n.useState)([]),t=Object(i.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(""),s=Object(i.a)(c,2),u=s[0],m=s[1],d="https://osaka.o18s.com:9000/personArticles/".concat("?pi_id=",e),p=Object(f.f)(),h=Object(D.c)((function(e){return e.user}));Object(n.useEffect)((function(){b()}),[]);var b=function(){M.a.get(d).then((function(e){m(e.data.results[0].contact_pi_project_leader);var a=e.data.results;o(a)})).catch((function(e){return console.log(e)}))},y=ee();return r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{variant:"h4",gutterBottom:!0},u),r.a.createElement(g.a,{className:y.paper},l.map((function(e){return r.a.createElement(N.a,{fullWidth:!0},r.a.createElement(E.a,{variant:"h5"},e.title),r.a.createElement(E.a,{variant:"h6",gutterBottom:!0},e.journal_title," - ",e.journal_year),r.a.createElement(g.a,null,r.a.createElement(v.a,{label:"Pub Med",icon:r.a.createElement(I.a,null),onClick:function(){return window.open("https://www.ncbi.nlm.nih.gov/pmc/articles/PMC".concat("",e.pmcid),"_blank")}}),r.a.createElement(T.CopyToClipboard,{text:e.pmcid},r.a.createElement(v.a,{label:"PMCID: ".concat(e.pmcid),icon:r.a.createElement(S.a,null),variant:"outlined"})),r.a.createElement(v.a,{label:"doi.org",icon:r.a.createElement(I.a,null),onClick:function(){return window.open("https://doi.org/".concat("",e.doi),"_blank")}}),r.a.createElement(T.CopyToClipboard,{text:e.doi},r.a.createElement(v.a,{label:"DOI: ".concat(e.doi),icon:r.a.createElement(S.a,null),variant:"outlined"}))),"TRUE"==e.data_share?r.a.createElement(v.a,{size:"small",label:"Data sharing",icon:r.a.createElement(j.a,null),color:"primary"}):r.a.createElement(v.a,{size:"small",label:"Data sharing",icon:r.a.createElement(w.a,null),color:"secondary"}),"TRUE"==e.open_data?r.a.createElement(v.a,{size:"small",label:"Data reuse",icon:r.a.createElement(j.a,null),color:"primary"}):r.a.createElement(v.a,{size:"small",label:"Data reuse",icon:r.a.createElement(w.a,null),color:"secondary"}),1==h.isAuthed?r.a.createElement(v.a,{size:"small",onClick:function(){return p.push("/sharestats/papers/".concat(e.pmcid))},label:"edit",icon:r.a.createElement(C.a,null),variant:"outlined"}):r.a.createElement(v.a,{size:"small",label:"login to edit",icon:r.a.createElement(C.a,null),variant:"outlined"}))}))))};function te(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)("https://osaka.o18s.com:9000/people/"),c=Object(i.a)(o,2),s=c[0],u=(c[1],Object(n.useState)("https://osaka.o18s.com:9000/people/")),m=Object(i.a)(u,2),d=m[0],p=m[1],h=Object(n.useState)([]),f=Object(i.a)(h,2),b=f[0],g=f[1];Object(n.useEffect)((function(){v()}),[]);var v=function(){M.a.get(d).then((function(e){var a=e.data.results;g(a)})).catch((function(e){return console.log(e)}))};return Object(R.a)((function(){v()}),1e3,[t]),r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{variant:"h2",gutterBottom:!0},"Search by Researcher"),r.a.createElement(L.a,{id:"searchtext",label:"Researcher Name",style:{margin:8},placeholder:"",helperText:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",value:t,onChange:function(e){var a=e.currentTarget.value;l(a),p(s.concat("?search=",a))}}),r.a.createElement(z.a,null,b.map((function(e){return r.a.createElement(F.b,{to:"/sharestats/researchers/".concat(e.id)},r.a.createElement(W.a,{button:!0},r.a.createElement(H.a,{primary:e.full_name})))}))))}var ne=t(224),re=t(22);var le=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)(""),c=Object(i.a)(o,2),s=c[0],u=c[1],m=Object(n.useState)({}),d=Object(i.a)(m,2),p=(d[0],d[1]);Object(n.useEffect)((function(){h()}),[]);var h=function(){M.a.get("https://osaka.o18s.com:9000/orgGraph/").then((function(e){l(e.data.results);var a,t={},n=Object(ne.a)(e.data.results);try{for(n.s();!(a=n.n()).done;){var r=a.value;t[r.index]=t[r.data_score]}}catch(o){n.e(o)}finally{n.f()}p(t),console.log(e.data.results)})).catch((function(e){return console.log(e)})),M.a.get("https://osaka.o18s.com:9000/personGraph/").then((function(e){u(e.data.results)})).catch((function(e){return console.log(e)}))};return r.a.createElement("div",null,r.a.createElement(E.a,{variant:"h6"},"Most data sharing & reuse comes from a small subset of NIMH funded Institutions"),r.a.createElement(re.d,{width:800,height:600,margin:{top:20,right:20,bottom:20,left:20}},r.a.createElement(re.a,{strokeDasharray:"3 3"}),r.a.createElement(re.f,{dataKey:"index",type:"number",name:"Sorted Institution",domain:[0,450],unit:""},r.a.createElement(re.b,{value:"Sorted Institution (min 3 pubs)",offset:0,position:"insideBottom"})),r.a.createElement(re.g,{dataKey:"data_score",type:"number",name:"weight",domain:[0,1],unit:"",label:{value:"Estimated prop of papers with data policy",angle:-90,position:"insideLeft"}}),r.a.createElement(re.c,{name:"Institutions",data:t,fill:"#708090"}),r.a.createElement(re.e,{cursor:{strokeDasharray:"3 3"}})),r.a.createElement(E.a,{variant:"h6"},"Most data sharing & reuse comes from a small subset of NIMH funded Investigators"),r.a.createElement(re.d,{width:800,height:600,margin:{top:20,right:20,bottom:20,left:20}},r.a.createElement(re.a,{strokeDasharray:"3 3"}),r.a.createElement(re.f,{dataKey:"index",type:"number",name:"Sorted Investigators",domain:[0,4200],unit:""},r.a.createElement(re.b,{value:"Sorted Investigators (min 3 pubs)",offset:0,position:"insideBottom"})),r.a.createElement(re.g,{dataKey:"data_score",type:"number",name:"weight",domain:[0,1],unit:"",label:{value:"Estimated prop of papers with data policy",angle:-90,position:"insideLeft"}}),r.a.createElement(re.c,{name:"Institutions",data:s,fill:"#708090"}),r.a.createElement(re.e,{cursor:{strokeDasharray:"3 3"}})))},oe=t(4),ce=t(152),ie="@user/Login",se="@user/Logout";var ue=function(){var e="515002199508-1n4d00fma9to0sjolghkceheguu7ubfg.apps.googleusercontent.com",a=Object(D.b)(),t=Object(n.useState)(0),l=Object(i.a)(t,2),o=l[0],c=l[1];return r.a.createElement("div",null,o?r.a.createElement(ce.GoogleLogout,{clientId:e,buttonText:"Logout",onLogoutSuccess:function(e){console.log("doing login"),c(1),a({type:se,payload:{isAuthed:!1,fullname:"",email:""}})},onFailure:function(e){alert("Failed to log out")}}):r.a.createElement(ce.GoogleLogin,{clientId:e,buttonText:"Login",onSuccess:function(e){var t;console.log("doing login"),e.accessToken&&c(1),a((t={isAuthed:!0,fullname:e.profileObj.name,email:e.profileObj.email},{type:ie,payload:t}))},onFailure:function(e){alert("Failed to log in")},cookiePolicy:"single_host_origin",responseType:"code,token"}))},me=t(28),de=t(540),pe=t(238),he=t.n(pe),Ee=t(239),fe=t.n(Ee),be=t(539),ge=t(542),ve=t(546),ye=t(536),je=t(237),Oe=t.n(je),we=t(538),ke=t(236),Se=t.n(ke),xe=t(235),Ce=t.n(xe),_e=t(234),Ie=t.n(_e),Ne=t(233),Te=t.n(Ne);var De=function(){var e=Object(f.f)();return r.a.createElement(z.a,null,r.a.createElement(W.a,{button:!0,key:"Home",onClick:function(){e.push("/sharestats")}},r.a.createElement(we.a,null,r.a.createElement(Te.a,null)),r.a.createElement(H.a,{primary:"Home"})),r.a.createElement(W.a,{button:!0,key:"Graphs",onClick:function(){e.push("/sharestats/graphs")}},r.a.createElement(we.a,null,r.a.createElement(Ie.a,null)),r.a.createElement(H.a,{primary:"Graphs"})),r.a.createElement(W.a,{button:!0,key:"Institutions",onClick:function(){e.push("/sharestats/orgs")}},r.a.createElement(we.a,null,r.a.createElement(Ce.a,null)),r.a.createElement(H.a,{primary:"Institutions"})),r.a.createElement(W.a,{button:!0,key:"Researchers",onClick:function(){e.push("/sharestats/researchers")}},r.a.createElement(we.a,null,r.a.createElement(Se.a,null)),r.a.createElement(H.a,{primary:"Researchers"})))},Be=t(541),Me=Object(b.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(s.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));var Ae=function(){var e=Me(),a=Object(me.a)(),t=r.a.useState(!1),n=Object(i.a)(t,2),l=n[0],o=n[1];return r.a.createElement("div",{className:"App"},r.a.createElement(F.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:e.root},r.a.createElement(be.a,null),r.a.createElement(de.a,{position:"fixed",className:Object(oe.a)(e.appBar,Object(c.a)({},e.appBarShift,l))},r.a.createElement(Be.a,null,r.a.createElement(ye.a,{color:"inherit","aria-label":"open drawer",onClick:function(){o(!0)},edge:"start",className:Object(oe.a)(e.menuButton,l&&e.hide)},r.a.createElement(Oe.a,null)),r.a.createElement(E.a,{variant:"h6",noWrap:!0},"Data Sharing in NIMH papers"))),r.a.createElement(ve.a,{className:e.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(ye.a,{onClick:function(){o(!1)}},"ltr"===a.direction?r.a.createElement(he.a,null):r.a.createElement(fe.a,null)),r.a.createElement(ue,null)),r.a.createElement(ge.a,null),r.a.createElement(De,null)),r.a.createElement("main",{className:Object(oe.a)(e.content,Object(c.a)({},e.contentShift,l))},r.a.createElement("div",{className:e.drawerHeader}),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/sharestats/orgs",component:G}),r.a.createElement(f.a,{exact:!0,path:"/sharestats/papers",component:Z}),r.a.createElement(f.a,{exact:!0,path:"/sharestats/researchers",component:te}),r.a.createElement(f.a,{path:"/sharestats/orgs/:id?",component:P}),r.a.createElement(f.a,{path:"/sharestats/papers/:id?",component:X}),r.a.createElement(f.a,{path:"/sharestats/researchers/:id?",component:ae}),r.a.createElement(f.a,{path:"/sharestats/graphs",component:le}),r.a.createElement(f.a,{path:"/sharestats",component:h})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Pe=t(65),Le={isAuthed:"FALSE",fullname:"",email:""},ze=Object(Pe.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case ie:return a.payload;case se:return e-a.payload;default:return e}}}),We=Object(Pe.c)(ze);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D.a,{store:We},r.a.createElement(Ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[279,1,2]]]);
//# sourceMappingURL=main.78e1237c.chunk.js.map