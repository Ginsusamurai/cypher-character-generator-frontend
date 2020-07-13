(this["webpackJsonpcypher-character-generator-frontend"]=this["webpackJsonpcypher-character-generator-frontend"]||[]).push([[0],{23:function(e,t,a){e.exports=a(37)},35:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),i=a(4),l=a(12),s=a(7),u=a(8),d={descriptorArray:[{descriptor_name:"none1"}],typeArray:[{type_name:"none2"}],focusArray:[{focus_name:"none3"}]},m=function(e){return function(t){fetch("".concat("https://csgcharacterbuilder.herokuapp.com/","/").concat(e)).then((function(e){return e.json()})).then((function(e){t(p(e))})).catch((function(e){return console.log("fetch error",e)}))}},p=function(e){return{type:"OPTION_FETCH_SUCCESS",payload:e}},f=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{key:e.name,htmlFor:e.name},e.text),r.a.createElement("select",{onChange:e.changefunction?function(t){var a={selector:e.changetarget,value:t.target.value};console.log("setterupdate",a),e.changefunction(a),e.getDetails&&e.getDetails(a.value)}:void 0,name:"".concat(e.name,"1"),id:e.name},r.a.createElement("option",{selected:!0,disabled:!0},e.default),e.choices.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},E=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?t:null},h=function(e){return r.a.Children.map(e.children,(function(t){return r.a.cloneElement(t,{condition:e.condition})}))},g=function(e){return E(e.condition,e.children)},y=a(17),b={characterName:"nameless",descriptor:"desc",type:"typ",focus:"foc",tier:"tierish",effort:"eff",mightPool:"mCur",mightPoolMax:"mMax",mightEdge:"mEdge",speedPool:"sCur",speedPoolMax:"sMax",speedEdge:"sEdge",intellectPool:"iCur",intellectPoolMax:"iMax",intellectEdge:"iEdge",edgeLimit:"eLim",bonusPool:"bnsPool",xp:"xp#",recovery:{action:1,mins:1,hour:1,hours:1},impaired:!1,debilitated:!1,skills:{might:[],speed:[],intellect:[]},advancement:{poolIncrease:!1,edgeIncrease:!1,effortIncrease:!1,skillIncrease:!1,other:!1,total:0},abilities:[],abilityLimit:"abLim",attacks:[],weaponTraining:{light:null,medium:null,heavy:null},cyphers:{cypherList:[],cypherLimit:"null",cypherCount:0},equipment:[],equipmentDescription:"eqDesc",armor:"null",money:"null"},v="https://csgcharacterbuilder.herokuapp.com/",S={descriptorDetails:[],typeDetails:{},focusDetails:[]},T=function(e){return{type:"SET DESCRIPTOR DETAILS",payload:e}},N=function(e){return{type:"SET FOCUS DETAILS",payload:e}},D=function(e){return{type:"SET TYPE DETAILS",payload:e}};a(32).config();var O=Object(i.b)((function(e){return{options:e.options,character:e.character,descriptorDetails:e.descriptorDetails,typeDetails:e.typeDetails,focusDetails:e.focusDetails}}),(function(e){return{reset_me:function(){return e({type:"RESET"})},test_it:function(){return e({type:"TEST"})},get_options:function(t){return e(m(t))},set_name:function(t){return e({type:"SET NAME",payload:t})},set_selector:function(t){return e(function(e){return{type:"SET SELECTOR",payload:e}}(t))},get_descriptorDetails:function(t){return e((a=t,function(e){console.log("hrm","".concat(v,"/").concat("descriptor","/").concat(a)),fetch("".concat(v,"/").concat("descriptor","/").concat(a)).then((function(e){return e.json()})).then((function(t){e(T(t))})).catch((function(e){return console.log("descriptor fetch error",e)}))}));var a},get_typeDetails:function(t){return e((a=t,function(e){fetch("".concat(v,"/").concat("type","/").concat(a)).then((function(e){return e.json()})).then((function(t){e(D(t[0]))})).catch((function(e){return console.log("type fetch error",e)}))}));var a},get_focusDetails:function(t){return e((a=t,function(e){fetch("".concat(v,"/").concat("focus","/").concat(a)).then((function(e){return e.json()})).then((function(t){e(N(t))})).catch((function(e){return console.log("focus fetch error",e)}))}));var a}}}))((function(e){var t,a,n,c;return r.a.createElement("div",{id:"options",className:"basicsComplete options bound pri-bound"},r.a.createElement("input",{type:"text",id:"name",onChange:function(t){e.set_name(t.target.value)}}),r.a.createElement("br",null),r.a.createElement(h,{condition:(null===(t=e.options.descriptorArray)||void 0===t?void 0:t.length)>1},r.a.createElement(g,null,r.a.createElement(f,{choices:null===(a=e.options)||void 0===a?void 0:a.descriptorArray,default:"Adjective",name:"descriptor",text:"I am a ",changefunction:e.set_selector,changetarget:"descriptor",getDetails:e.get_descriptorDetails}),r.a.createElement(f,{choices:null===(n=e.options)||void 0===n?void 0:n.typeArray,default:"Noun",name:"type",text:", ",changefunction:e.set_selector,changetarget:"type",getDetails:e.get_typeDetails}),r.a.createElement(f,{choices:null===(c=e.options)||void 0===c?void 0:c.focusArray,default:"Verbs",name:"focus",text:" that ",changefunction:e.set_selector,changetarget:"focus",getDetails:e.get_focusDetails}))))})),_=function(e){return console.log("char","".concat(e.stat,"Edge")),r.a.createElement("section",{className:"layout border mainSize"},r.a.createElement("section",{className:"border auxStat statBottomBox"},r.a.createElement("div",{className:"border midline"},e.character["".concat(e.auxStat.toLowerCase())]),r.a.createElement("article",{className:"border label"},e.auxStat)),r.a.createElement("section",{className:"border midSection statBottomBox center"},r.a.createElement("article",{className:"border fit midline"},"+"),r.a.createElement("article",{className:"border fit midline"},e.character["".concat(e.stat.toLowerCase(),"PoolMax")]),r.a.createElement("article",{className:"border fit midline"},"-"),r.a.createElement("article",{className:"border label"},e.stat)),r.a.createElement("section",{className:"border bottomSection"},r.a.createElement("article",{className:"border statBottomBox center"},r.a.createElement("div",{className:"border midline"},e.character["".concat(e.stat.toLowerCase(),"Pool")]),r.a.createElement("div",{className:"border label"},"POOL")),r.a.createElement("article",{className:"border statBottomBox center"},r.a.createElement(h,{condition:"?"===e.character["".concat(e.stat.toLowerCase(),"Edge")]},r.a.createElement(g,null,r.a.createElement("div",{className:"border midline"},"+"))),r.a.createElement("div",{className:"border midline"},e.character["".concat(e.stat.toLowerCase(),"Edge")]),r.a.createElement(h,{condition:"?"===e.character["".concat(e.stat.toLowerCase(),"Edge")]},r.a.createElement(g,null,r.a.createElement("div",{className:"border midline"},"-"))),r.a.createElement("div",{className:"border label"},"EDGE"))))},x=Object(i.b)((function(e){return{character:e.character}}),(function(e){return{}}))((function(e){return r.a.createElement("div",{className:"basicsComplete stats bound"},r.a.createElement(_,{character:e.character,stat:"MIGHT",auxStat:"TIER"}),r.a.createElement(_,{character:e.character,stat:"SPEED",auxStat:"EFFORT"}),r.a.createElement(_,{character:e.character,stat:"INTELLECT",auxStat:"XP"}))})),C=Object(i.b)((function(e){return{options:e.options,optionDetails:e.optionDetails}}),(function(e){return{reset_me:function(){return e({type:"RESET"})},test_it:function(){return e({type:"TEST"})},get_options:function(t){return e(m(t))}}}))((function(e){return Object(n.useEffect)((function(){e.get_options("loadSelectors")}),[]),r.a.createElement("div",{id:"App"},r.a.createElement(O,null),r.a.createElement(x,null),r.a.createElement("div",{className:"status bound"},r.a.createElement("div",{className:"recovery bound"},"recovery"),r.a.createElement("div",{className:"damageTrack bound"},"damageTrack")),r.a.createElement("div",{className:"skills bound"},"skills"),r.a.createElement("div",{className:"advancement bound"},"advancement"),r.a.createElement("div",{className:"abilities bound"},"abilities"),r.a.createElement("div",{className:"attacks bound"},"attacks"),r.a.createElement("div",{className:"marquee bound"},"marquee"),r.a.createElement("div",{className:"cyphers bound"},"cyphers"),r.a.createElement("div",{className:"equipment bound"},"equipment"))})),L=a(5),A=a(22),P=Object(L.combineReducers)({options:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:JSON.parse(JSON.stringify(d)),t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;return Object(s.a)(e,(function(e){switch(a){case"TEST":e.mysteryOption="i am a banana!",e.typeArray[0].type_name="no thank you";break;case"RESET":e=d;break;case"OPTION_FETCH_SUCCESS":e.descriptorArray=n.descriptorArray.reduce((function(e,t,a){return e.push(t.descriptor_name),e}),[]),e.typeArray=n.typeArray.reduce((function(e,t,a){return e.push(t.type_name),e}),[]),e.focusArray=n.focusArray.reduce((function(e,t,a){return e.push(t.focus_name),e}),[]);default:return e}}))},optionDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:JSON.parse(JSON.stringify(S)),t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;return Object(s.a)(e,(function(e){switch(a){case"SET DESCRIPTOR DETAILS":console.log("in desc",n),e.descriptorDetails=n;break;case"SET FOCUS DETAILS":console.log(n),e.focusDetails=n;break;case"SET TYPE DETAILS":for(var t in console.log(n),n)console.log("x",t,n[t]),e.typeDetails[t]=n[t];break;default:return e}}))},character:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:JSON.parse(JSON.stringify(b)),t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;return Object(s.a)(e,(function(e){switch(a){case"SET NAME":e.characterName=n;break;case"SET SELECTOR":e[n.selector]=n.value;break;case"SET TYPE DETAILS":e.mightPoolMax=n.might,e.speedPoolMax=n.speed,e.intellectPoolMax=n.intellect,e.effort=n.effort,e.bonusPool=n.extra;var t=n.edge.split("/"),r=Object(y.a)(t,3);e.mightEdge=r[0],e.speedEdge=r[1],e.intellectEdge=r[2],e.edgeLimit=n.edge_limit,e.cyphers.cypherLimit=n.cypher,e.abilityLimit=n.abilities,e.equipmentDescription=n.starting_items;var c=n.weapons.split("/").reduce((function(e,t){return e.push("x"!==t),e}),[]),o=Object(y.a)(c,3);e.weaponTraining.light=o[0],e.weaponTraining.medium=o[1],e.weaponTraining.heavy=o[2];default:return e}}))}}),k=Object(L.createStore)(P,Object(A.composeWithDevTools)(Object(L.applyMiddleware)(u.a)));a(35);function I(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{store:k},r.a.createElement(C,null)))}var j=document.getElementById("root");o.a.render(r.a.createElement(I,null),j)}},[[23,1,2]]]);
//# sourceMappingURL=main.bb6e23dc.chunk.js.map