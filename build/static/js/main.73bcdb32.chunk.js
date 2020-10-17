(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(e,t,a){e.exports=a(308)},306:function(e,t,a){},308:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(12),i=a.n(r),l=a(22),c=a.n(l),s=a(60),u=a(10),m=a(108),d=a(34),g=a(139),h=a(155),f=g.a,p=Object(d.a)(h,["geoPath"]),b=Object(n.createContext)(),y=function(e){var t=e.width,a=e.height,r=e.offsetX,i=e.offsetY,l=e.projection,c=e.projectionConfig,s=Object(d.a)(e,["width","height","offsetX","offsetY","projection","projectionConfig"]),m=c.center||[],g=Object(u.a)(m,2),h=g[0],y=g[1],v=c.rotate||[],E=Object(u.a)(v,3),j=E[0],C=E[1],w=E[2],O=c.parallels||[],x=Object(u.a)(O,2),N=x[0],k=x[1],S=c.scale||null,A=Object(n.useMemo)(function(){return function(e){var t=e.projectionConfig,a=void 0===t?{}:t,n=e.projection,o=void 0===n?"geoEqualEarth":n,r=e.width,i=void 0===r?800:r,l=e.height,c=void 0===l?600:l,s=e.offsetX,u=void 0===s?0:s,m=e.offsetY,d=void 0===m?0:m;if("function"===typeof o)return o;var g=a.scale||null,h=p[o]().translate([i/2+u*g/1e3,c+d*g/1e3]).rotate([82+10/60,-30]).scale(100);return[h.center?"center":null,h.rotate?"rotate":null,h.scale?"scale":null,h.parallels?"parallels":null].forEach(function(e){e&&(h=h[e](a[e]||h[e]()))}),h}({projectionConfig:{center:h||0===h||y||0===y?[h,y]:null,rotate:j||0===j||C||0===C?[j,C,w]:null,parallels:N||0===N||k||0===k?[N,k]:null,scale:S},projection:l,width:t,height:a,offsetX:r,offsetY:i})},[t,a,l,h,y,j,C,w,N,k,S,r,i]),M=Object(n.useCallback)(A,[A]),D=Object(n.useMemo)(function(){return{width:t,height:a,projection:M,path:f().projection(M)}},[t,a,M]);return o.a.createElement(b.Provider,Object.assign({value:D},s))},v=a(40),E=a(156);function j(e,t){if(Array.isArray(e))return t?t(e):e;var a=Object(E.a)(e,e.objects[Object.keys(e.objects)[0]]).features;return console.log(e.objects[Object.keys(e.objects)[0]]),t?t(a):a}function C(e){var t=e.geography,a=e.parseGeographies,o=Object(n.useContext)(b).path,r=Object(n.useState)(),i=Object(u.a)(r,2),l=i[0],c=i[1];return Object(n.useEffect)(function(){var e;"undefined"!==typeof window&&("string"===typeof t?(e=t,fetch(e).then(function(e){if(!e.ok)throw Error(e.statusText);return e.json()}).catch(function(e){console.log("There was a problem when fetching the data: ",e)})).then(function(e){e&&c(j(e,a))}):c(j(t,a)))},[t,a]),{geographies:Object(n.useMemo)(function(){return function(e,t){return e?e.map(function(e,a){return Object(v.a)({},e,{rsmKey:"geo-".concat(a),svgPath:t(e)})}):[]}(l,o)},[l,o])}}var w=function(e){var t=e.geography,a=e.children,r=e.parseGeographies,i=e.className,l=void 0===i?"":i,c=Object(d.a)(e,["geography","children","parseGeographies","className"]),s=Object(n.useContext)(b),u=s.path,m=s.projection,g=C({geography:t,parseGeographies:r}).geographies;return o.a.createElement("g",Object.assign({className:"rsm-geographies ".concat(l),height:100},c),g&&g.length>0&&a({geographies:g,path:u,projection:m}))},O=Object(n.memo)(function(e){var t=e.geography,a=e.onMouseEnter,r=e.onMouseLeave,i=e.onMouseDown,l=e.onMouseUp,c=e.onFocus,s=e.onBlur,m=e.style,g=void 0===m?{}:m,h=e.className,f=void 0===h?"":h,p=Object(d.a)(e,["geography","onMouseEnter","onMouseLeave","onMouseDown","onMouseUp","onFocus","onBlur","style","className"]),b=Object(n.useState)(!1),y=Object(u.a)(b,2),v=y[0],E=y[1],j=Object(n.useState)(!1),C=Object(u.a)(j,2),w=C[0],O=C[1];return o.a.createElement("path",Object.assign({tabIndex:"0",className:"rsm-geography ".concat(f),d:t.svgPath,onMouseEnter:function(e){O(!0),a&&a(e)},onMouseLeave:function(e){O(!1),v&&E(!1),r&&r(e)},onFocus:function(e){O(!0),c&&c(e)},onBlur:function(e){O(!1),v&&E(!1),s&&s(e)},onMouseDown:function(e){E(!0),i&&i(e)},onMouseUp:function(e){E(!1),l&&l(e)},style:g[v||w?v?"pressed":"hover":"default"]},p))}),x=function(e){var t=e.width,a=void 0===t?800:t,n=e.height,r=void 0===n?600:n,i=e.offsetX,l=void 0===i?0:i,c=e.offsetY,s=void 0===c?0:c,u=e.projection,m=void 0===u?"geoEqualEarth":u,g=e.projectionConfig,h=void 0===g?{}:g,f=e.className,p=void 0===f?"":f,b=Object(d.a)(e,["width","height","offsetX","offsetY","projection","projectionConfig","className"]);return o.a.createElement(y,{width:a,height:r,offsetX:l,offsetY:s,projection:m,projectionConfig:h},o.a.createElement("svg",Object.assign({width:a,height:r,className:"rsm-svg ".concat(p)},b)))},N=a(344),k=o.a.createContext();function S(){var e=o.a.useContext(k);if(!e)throw new Error("useGADM must be used within a GADMProvider");return e}function A(e){var t=o.a.useState({selectedTable:{tableName:"Demographic Composition",qryName:"Demographic Composition"},selectedVariable:{varName:"65 years or older",printName:"% of 65 y or older",unit:"(%)"},selectedCounty:{NAME:"Fulton",GEOID:"13121"},fetchedData:[]}),a=Object(u.a)(t,2),n=a[0],r=a[1],i=function(e){r(Object(v.a)({},n,e))},l=o.a.useMemo(function(){var e=n.selectedTable,t=n.selectedVariable,a=n.selectedCounty,o=n.fetchedData;n.firstRender;return{selectedTable:e,selectedVariable:t,selectedCounty:a,fetchedData:o,actions:{handlePageStateChange:i}}},[n]);return o.a.createElement(k.Provider,{value:l},e.children)}var M=a(37),D=M.c.hasAppClient("test-owzgf")?M.c.getAppClient("test-owzgf"):M.c.initializeAppClient("test-owzgf");function F(){var e=new M.a;return D.auth.loginWithCredential(e)}function I(){return D.auth.isLoggedIn?D.auth.user:null}function L(){var e=I();return D.auth.logoutUserWithId(e.id)}var T=o.a.createContext();function R(){var e=o.a.useContext(T);if(!e)throw new Error("useStitchAuth must be used within a StitchAuthProvider");return e}function z(e){var t=o.a.useState({isLoggedIn:D.auth.isLoggedIn,currentUser:I()}),a=Object(u.a)(t,2),n=a[0],r=a[1],i=function(){var e=Object(s.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.isLoggedIn){e.next=6;break}return e.next=4,F();case 4:t=e.sent,r(Object(v.a)({},n,{isLoggedIn:!0,currentUser:t}));case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isLoggedIn){e.next=7;break}return e.next=4,L();case 4:r(Object(v.a)({},n,{isLoggedIn:!1,currentUser:null})),e.next=8;break;case 7:console.log("can't handleLogout when no user is logged in");case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),m=o.a.useMemo(function(){return{isLoggedIn:n.isLoggedIn,currentUser:n.currentUser,actions:{handleAnonymousLogin:i,handleLogout:l}}},[n.isLoggedIn]);return o.a.createElement(T.Provider,{value:m},e.children)}a(309);var W=a(343),P=a(339),q=a(15),H=a.n(q),G="https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states/GA-13-georgia-counties.json";function B(e){var t=Object(n.useState)(0),a=Object(u.a)(t,2),r=a[0],i=a[1],l=Object(n.useState)("Fulton County"),c=Object(u.a)(l,2),s=c[0],d=c[1];console.log("init county",s);var g=Object(n.useState)(10.4),h=Object(u.a)(g,2),f=h[0],p=h[1];console.log("init val ",f);var b=S(),y=b.selectedVariable,v=(b.selectedTable,b.selectedCounty),E=b.fetchedData,j=b.actions.handlePageStateChange,C=["#D4E5F7","#85B2E0","#407FBF","#2966A3","#174C82","#0A335C"],k=Object(n.useState)(0),A=Object(u.a)(k,2),M=A[0],D=A[1],F=Object(n.useState)([]),I=Object(u.a)(F,2),L=I[0],T=I[1],R=Object(n.useState)(),z=Object(u.a)(R,2),q=z[0],B=z[1],U=Object(n.useState)(),V=Object(u.a)(U,2),X=V[0],Y=V[1];Object(n.useEffect)(function(){var e=H.a.filter(E,{subsubgroup:y.varName});console.log("var ",y.varName),console.log("fetched ",E),console.log("state ",e);var t=H.a.map(e,"value");console.log("var data ",t),t=t.filter(function(e){return"N/A"!==e}),B(Math.min.apply(Math,Object(m.a)(t)).toFixed(1)),Y(Math.max.apply(Math,Object(m.a)(t)).toFixed(1));var a=Object(N.a)().domain(t).range(C),n={};H.a.forEach(e,function(e){n[e.county]=a(e.value)}),D(n),T(a.quantiles()),console.log("sm",n)},[y,E]);var K=Object(P.a)(function(e){return{customSize:{width:130,height:50,position:"fixed",top:"10px",left:"-130px",fontSize:"0.85rem",padding:"0.7em"}}})();return Object(n.useEffect)(function(){var e=H.a.map(H.a.filter(E,{subsubgroup:y.varName,county:s}),"value");if("N/A"!==e){var t=(e+"").split(".");void 0!==t[1]&&t[1].length>2&&(e=parseFloat(e).toFixed(2))}console.log("filtered",e),p(e)},[s,E,y]),o.a.createElement("div",null,o.a.createElement("div",null,Object.keys(M).length>0?o.a.createElement("svg",{width:"280",height:"80",transform:"translate(-20,-10)"},H.a.map(L,function(e,t){return L[t]<1?o.a.createElement("text",{key:t,x:64+24*t,y:35,style:{fontSize:"0.6em"}}," ",L[t].toFixed(1)):L[t]>999999?o.a.createElement("text",{key:t,x:64+24*t,y:35,style:{fontSize:"0.6em"}}," ",(L[t]/1e6).toFixed(1)+"M"):L[t]>999?o.a.createElement("text",{key:t,x:64+24*t,y:35,style:{fontSize:"0.6em"}}," ",(L[t]/1e3).toFixed(1)+"K"):o.a.createElement("text",{key:t,x:64+24*t,y:35,style:{fontSize:"0.6em"}}," ",L[t].toFixed(1))}),o.a.createElement("text",{x:40,y:35,style:{fontSize:"0.7em"}},q),o.a.createElement("text",{x:182,y:35,style:{fontSize:"0.7em"}},X),H.a.map(C,function(e,t){return o.a.createElement("rect",{key:t,x:50+24*t,y:40,width:"22",height:"20",style:{fill:e,strokeWidth:1,stroke:e}})}),o.a.createElement("text",{x:42,y:74,style:{fontSize:"0.7em"}},"Low ",y.unit),o.a.createElement("text",{x:80+20*(C.length-1),y:74,style:{fontSize:"0.7em"}},"High ",y.unit),o.a.createElement("rect",{x:220,y:40,width:"20",height:"20",style:{fill:"#FFFFFF",strokeWidth:.5,stroke:"#000000"}}),o.a.createElement("text",{x:245,y:48,style:{fontSize:"0.7em"}}," None "),o.a.createElement("text",{x:245,y:58,style:{fontSize:"0.7em"}}," Reported ")):void 0),o.a.createElement(W.a,{id:"tooltip",placement:"top-end",open:r>-1,classes:{tooltip:K.customSize},title:o.a.createElement("p",null,s,o.a.createElement("br",null),"County stat: ",f)},o.a.createElement("div",null,o.a.createElement(x,{projection:"geoTransverseMercator","data-tip":"",width:760,height:530,strokeWidth:.5,stroke:"black",projectionConfig:{scale:6e3}},o.a.createElement(w,{geography:G,transform:"translate(10,0)"},function(e){var t=e.geographies;return o.a.createElement("svg",null,t.map(function(e){return o.a.createElement(O,{key:e.rsmKey,geography:e,onClick:function(){j({selectedCounty:e.properties})},onMouseEnter:function(){i(e.properties.GEOID),d(e.properties.NAME+" County")},onMouseLeave:function(){i(0),d(v.NAME+" County")},fill:r===e.properties.GEOID?"#f2a900":void 0===M[e.properties.NAME+" County"]?"white":M[e.properties.NAME+" County"],strokeWidth:v.GEOID===e.properties.GEOID?3.5:.5,stroke:v.GEOID===e.properties.GEOID?"#da291c":"black"})}))})))))}var U=a(345),V=a(347),X=a(348),Y=a(349),K=a(340),J=a(346),$=a(341),Q=a(352),Z=D.getServiceClient(M.b.factory,"mongodb-atlas").db("healthequity").collection("gatech");function _(e){var t=H.a.map(e.categories,"cat"),a=H.a.map(e.categories,"unit");console.log("unit ",a);var r=Object(n.useState)([]),i=Object(u.a)(r,2),l=i[0],c=i[1],s=Object(n.useState)([]),m=Object(u.a)(s,2),d=m[0],g=m[1],h=S(),f=h.selectedCounty,p=h.selectedTable,b=h.selectedVariable,y=h.fetchedData,v=h.actions.handlePageStateChange;Object(n.useEffect)(function(){!function(){var e=H.a.sortBy(H.a.filter(H.a.reject(y,["subsubgroup","% Diabetes in Medicaid Population"]),{subgroup:p.qryName,county:f.NAME+" County"}),["subsubgroup"]);console.log("subGroup",p.qryName),console.log("county",f.NAME+" County"),console.log(e),c(e);var t,a=H.a.groupBy(H.a.filter(H.a.reject(y,["subsubgroup","% Diabetes in Medicaid Population"]),{subgroup:p.qryName}),"subsubgroup");console.log("groups ",a);var n=[];for(t in a){var o=H.a.meanBy(H.a.reject(a[t],["value","N/A"]),function(e){return e.value});n.push(o.toFixed(1))}console.log("ave ",n),g(n)}()},[f,p,y]);var E=l.map(function(e,n){var r;if("N/A"!==e.value){var i=(e.value+"").split(".");r=void 0!==i[1]&&i[1].length>2?e.value.toFixed(2):e.value}else r=e.value;return o.a.createElement(U.a.Row,{key:n,onClick:function(){v({selectedVariable:{varName:e.subsubgroup,printName:t[n],unit:a[n]}})},active:b.printName===t[n]},o.a.createElement(U.a.Cell,{style:{fontSize:"0.9em",verticalAlign:"middle",textAlign:"left",paddingLeft:"0.5em"}},t[n]),o.a.createElement(U.a.Cell,{style:{fontSize:"0.9em",verticalAlign:"middle",textAlign:"center",paddingLeft:"0.2em",paddingRight:"0.2em"}},r),o.a.createElement(U.a.Cell,{style:{fontSize:"0.9em",verticalAlign:"middle",textAlign:"center",paddingLeft:"0.2em",paddingRight:"0.2em"}},d[n]))});return o.a.createElement(U.a.Body,null,E)}function ee(){var e=S(),t=e.selectedTable,a=e.actions.handlePageStateChange;return o.a.createElement(V.a,{vertical:!0,tabular:!0,inverted:!0,style:{height:"100%",width:"95%"}},o.a.createElement(V.a.Item,{name:"Demographic Composition",style:{lineHeight:"1.3em",color:"black"},color:"blue",active:"Demographic Composition"===t.tableName,onClick:function(){a({selectedTable:{tableName:"Demographic Composition",qryName:"Demographic Composition"}})}}),o.a.createElement(V.a.Item,{name:"Cardiometabolic Disease Morbidity",style:{lineHeight:"1.3em",color:"black"},color:"blue",active:"Cardiometabolic Disease Morbidity"===t.tableName,onClick:function(){a({selectedTable:{tableName:"Cardiometabolic Disease Morbidity",qryName:"Cardiometabolic disease morbidity"}})}}),o.a.createElement(V.a.Item,{name:"Clinical Events",style:{lineHeight:"1.3em",color:"black"},color:"blue",active:"Clinical Events"===t.tableName,onClick:function(){a({selectedTable:{tableName:"Clinical Events",qryName:"Clinical events"}})}}),o.a.createElement(V.a.Item,{name:"Lifestyle Related Risk Factors",style:{lineHeight:"1.3em",color:"black"},color:"blue",active:"Lifestyle Related Risk Factors"===t.tableName,onClick:function(){a({selectedTable:{tableName:"Lifestyle Related Risk Factors",qryName:"Lifestyle Related Risk Factors"}})}}),o.a.createElement(V.a.Item,{name:"Health Care",style:{lineHeight:"1.3em",color:"black"},color:"blue",active:"Healthcare"===t.tableName,onClick:function(){a({selectedTable:{tableName:"Healthcare",qryName:"Healthcare"}})}}),o.a.createElement(V.a.Item,{name:"Socioeconomic Factors",style:{lineHeight:"1.3em",color:"black"},color:"blue",active:"Socioeconomic Factors"===t.tableName,onClick:function(){a({selectedTable:{tableName:"Socioeconomic Factors",qryName:"Socioeconomic Factors"}})}}),o.a.createElement(V.a.Item,{name:"Environmental Factors",style:{lineHeight:"1.3em",color:"black"},color:"blue",active:"Environmental Factors"===t.tableName,onClick:function(){a({selectedTable:{tableName:"Environmental Factors",qryName:"Environmental Factors"}})}}))}function te(){var e=R().isLoggedIn,t=S(),a=t.selectedTable,r=(t.selectedVariable,t.selectedCounty),i=(t.fetchedData,t.actions.handlePageStateChange),l=function(){var e=Object(s.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.find({},{projection:{subgroup:1,subsubgroup:1,value:1,county:1}}).toArray();case 2:t=e.sent,i({fetchedData:t}),console.log(t);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){!0===e&&l()},[]);return o.a.createElement(X.a,null,o.a.createElement(X.a.Row,null,o.a.createElement(X.a.Column,null,o.a.createElement(Y.a,{as:"h3",style:{fontWeight:300}},"Statistics of ",r.NAME," County",o.a.createElement(Y.a.Subheader,{style:{fontWeight:300}},"The table below show diabetes-related health determinants of ",r.NAME," county.")))),o.a.createElement(X.a.Row,{columns:2},o.a.createElement(X.a.Column,{textAlign:"left",style:{paddingTop:"1em",paddingLeft:"4em"}},o.a.createElement(X.a.Row,null,o.a.createElement(Y.a,{as:"h4",style:{fontWeight:300,color:"#da291c",paddingLeft:"1em"}},o.a.createElement("i",null,o.a.createElement("b",null,"Select a category of county characteristics for display")))),o.a.createElement(X.a.Row,{style:{paddingTop:"1.2em",width:"95%"}},o.a.createElement(ee,null))),o.a.createElement(X.a.Column,{style:{paddingTop:"2.4em",textAlign:"center"}},o.a.createElement(Y.a,{block:!0,as:"h4",style:{fontWeight:550,backgroundColor:"#012169",color:"whitesmoke",verticalAlign:"center",margin:"0em",paddingTop:"0.4em",paddingBottom:"0.4em",border:"0",borderRadius:"0.6em 0em 0.6em 0em"}},a.tableName),o.a.createElement(U.a,{selectable:!0,basic:"very",fixed:!0,style:{width:"100%"}},o.a.createElement(U.a.Header,null,o.a.createElement(U.a.Row,null,o.a.createElement(U.a.HeaderCell,{style:{borderTop:0,fontWeight:500,textAlign:"center",width:"50%"}},"Characteristic"),o.a.createElement(U.a.HeaderCell,{style:{borderTop:0,fontWeight:500,textAlign:"center",width:"27%",paddingLeft:"0",paddingRight:"0"}},"County Stat"),o.a.createElement(U.a.HeaderCell,{style:{borderTop:0,fontWeight:500,textAlign:"center",width:"25%"}},"State Mean"))),o.a.createElement(_,{categories:"Demographic Composition"===a.tableName?[{cat:"% of 65 y or older",unit:"(%)"},{cat:"% Black/African American",unit:"(%)"},{cat:"% Asian",unit:"(%)"},{cat:"% Foreign born",unit:"(%)"},{cat:"% Hispanic",unit:"(%)"},{cat:"Median age (y)",unit:"(y)"},{cat:"Total Population, thousands",unit:"(k)"},{cat:"% Women",unit:"(%)"}]:"Cardiometabolic disease morbidity"===a.qryName?[{cat:"% CHD Prevalence in Medicaid population",unit:"(%)"},{cat:"% with Diabetes",unit:"(%)"},{cat:"% with Hypertension in Medicaid population",unit:"(%)"},{cat:"Newly diagnosed diabetes (new cases per 1,000)",unit:"(per k)"},{cat:"% Obese",unit:"(%)"}]:"Clinical events"===a.qryName?[{cat:"CVD deaths per 100,000",unit:"(per m)"},{cat:"CVD hospitalizations per 100,000",unit:"(per m)"},{cat:"Diabetes deaths per 100,000",unit:"(per m)"},{cat:"Diabetes hospitalizations per 100,000",unit:"(per m)"},{cat:"Kidney hospitalizations per 100,000",unit:"(per m)"}]:"Lifestyle Related Risk Factors"===a.qryName?[{cat:"% Excessive drinkers",unit:"(%)"},{cat:"% Physical inactive",unit:"(%)"},{cat:"% Insufficient sleep (<7 hours)",unit:"(%)"},{cat:"% Current Smokers",unit:"(%)"}]:"Healthcare"===a.qryName?[{cat:"Cardiologists",unit:""},{cat:"Endocrinologists",unit:""},{cat:"Primary care doctors (ratio of population to primary care physicians)",unit:""},{cat:"% Uninsured",unit:"(%)"}]:"Socioeconomic Factors"===a.qryName?[{cat:"% Graduates high school in 4 years",unit:"(%)"},{cat:"% In poverty",unit:"(%)"},{cat:"Income Inequality",unit:""},{cat:"Median income ($)",unit:"($)"},{cat:"% Unemployed",unit:"(%)"}]:"Environmental Factors"===a.qryName?[{cat:"% Exercise opportunities",unit:"(%)"},{cat:"Food environment index",unit:""},{cat:"% Severe housing problems",unit:"(%)"},{cat:"Residential segregation score",unit:""}]:void 0})))))}function ae(){var e=S(),t=e.selectedVariable;e.selectedCounty,e.actions.handlePageStateChange;return o.a.createElement(X.a,null,o.a.createElement(X.a.Row,null,o.a.createElement(X.a.Column,null,o.a.createElement(Y.a,{as:"h3",style:{fontWeight:600,paddingLeft:"2em",height:"3em",color:"#b58500"}},t.printName,o.a.createElement(Y.a.Subheader,{style:{fontWeight:300,margin:"0em"}},"The color shows the distribution of ",t.printName," across the Georgia counties.")),o.a.createElement(Y.a,{as:"h4",style:{fontWeight:300,paddingTop:"0em",paddingLeft:"4em",paddingBottom:"-1em",textAlign:"left",color:"#da291c"}},o.a.createElement("i",null,o.a.createElement("b",null,"Select a county to see detailed characteristics"))))),o.a.createElement(X.a.Row,{style:{padding:"0"}},o.a.createElement(X.a.Column,null,o.a.createElement(B,null))))}function ne(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(0),l=Object(u.a)(i,2),c=l[0],s=l[1],m=0;return Object(n.useEffect)(function(){var e=document,t=e.documentElement,a=e.body;m=window.innerWidth||t.clientWidth||a.clientWidth,s(m),m<1200&&r(!0)},[c]),console.log(c),o.a.createElement(A,null,o.a.createElement(K.a,null,o.a.createElement(X.a,{style:{paddingTop:"2em"}},o.a.createElement(X.a.Row,{centered:!0,columns:1,style:{background:"linear-gradient(to bottom, #0c2340, #012169)"}},o.a.createElement(X.a.Column,{textAlign:"center"},o.a.createElement(Y.a,{as:"h1",style:{fontWeight:500,color:"whitesmoke"}},"Georgia Diabetes Data Portal",o.a.createElement(Y.a.Subheader,{style:{fontWeight:300,color:"whitesmoke"}},"Interactive Dashboard of Diabetes-Related Health Determinants")),o.a.createElement(J.a,{bulleted:!0,style:{fontWeight:300,color:"whitesmoke"},size:"mini"},o.a.createElement(J.a.Item,null,"Click on a Characteristic on the table located ",o.a.createElement("i",null,"on the left")," ",o.a.createElement("br",null),"to see the county-level distribution on the map ",o.a.createElement("i",null,"on the right"),"."),o.a.createElement(J.a.Item,null,"Click on a county on the map located ",o.a.createElement("i",null,"on the right")," ",o.a.createElement("br",null),"to see its full statistics on the table ",o.a.createElement("i",null,"on the left"),".")))),o.a.createElement(X.a.Row,{centered:!0,columns:2,style:{display:a?"none":"block",paddingTop:"4em"}},o.a.createElement(X.a.Column,{width:8,textAlign:"center"},o.a.createElement(te,null)),o.a.createElement(X.a.Column,{width:8,textAlign:"center"},o.a.createElement(ae,null))),o.a.createElement(X.a.Row,{style:{display:a?"block":"none",textAlign:"left",color:"red",paddingTop:"4em",paddingLeft:"2em"}},o.a.createElement(X.a.Column,null,o.a.createElement($.a,{severity:"error"},o.a.createElement(Q.a,{style:{fontSize:"1.3rem"}},"Warning"),"Please expand your browser window and refresh the page to view the content. If you are using a mobile device, please use a PC to visit this page."))))))}a(305),a(306);function oe(){var e=R(),t=(e.isLoggedIn,e.actions),a=(t.handleLogout,t.handleAnonymousLogin);return Object(n.useEffect)(function(){a()},[]),o.a.createElement(ne,null)}a(307);var re=document.getElementById("root");i.a.render(o.a.createElement(function(){return o.a.createElement(z,null,o.a.createElement(oe,null))},null),re)}},[[170,1,2]]]);
//# sourceMappingURL=main.73bcdb32.chunk.js.map