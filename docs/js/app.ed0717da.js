(function(t){function e(e){for(var a,o,n=e[0],r=e[1],c=e[2],d=0,p=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&p.push(l[o][0]),l[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);h&&h(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,n=1;n<i.length;n++){var r=i[n];0!==l[r]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},l={app:0},s=[];function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="<wilks2020calculator>/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],r=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var h=r;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"04dd":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("db4d");var a=i("2b0e"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-content",[i("router-view")],1)],1)},s=[],o=i("2877"),n=i("6544"),r=i.n(n),c=i("7496"),h=i("a75b"),d={},p=Object(o["a"])(d,l,s,!1,null,null,null),u=p.exports;r()(p,{VApp:c["a"],VContent:h["a"]});var f=i("f309");a["a"].use(f["a"]);var g=new f["a"]({icons:{iconfont:"mdi"}}),w=i("8c4f"),v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"inspire"}},[i("v-content",{staticClass:"bgimgH"},[i("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[null!=t.wilks2?i("v-row",{attrs:{align:"center",justify:"center"}},[i("p",{staticStyle:{"text-align":"center","font-size":"64px",color:"white",padding:"20px"}},[t._v(t._s(t.wilks2))])]):t._e(),i("v-card",{staticClass:"elevation-12"},[i("v-toolbar",{attrs:{color:"black",dark:"",flat:""}},[i("v-spacer"),i("v-toolbar-title",[t._v("Wilks 2020 Calculator")]),i("v-spacer")],1),i("v-card-text",{staticStyle:{padding:"10px 60px 10px 50px"}},[i("v-form",[i("v-col",{staticStyle:{padding:"0px"},attrs:{cols:"12"}},[i("v-row",{staticStyle:{padding:"0px"},attrs:{align:"center",justify:"center"}},[i("v-col",{staticStyle:{padding:"0px"},attrs:{justify:"center",sm:"6"}},[i("div",{staticClass:"flex-center"},[i("v-radio-group",{attrs:{column:"",align:"center"},model:{value:t.sex,callback:function(e){t.sex=e},expression:"sex"}},[i("v-radio",{attrs:{color:"black",label:"Male",value:"male"}}),i("v-radio",{attrs:{color:"black",label:"Female",value:"female"}})],1)],1)]),i("v-col",{staticStyle:{padding:"0px"},attrs:{justify:"center",sm:"6"}},[i("div",{staticClass:"flex-center"},[i("v-radio-group",{attrs:{column:"",align:"center"},model:{value:t.units,callback:function(e){t.units=e},expression:"units"}},[i("v-radio",{attrs:{color:"black",label:"kg",value:"kg"}}),i("v-radio",{attrs:{color:"black",label:"lbs",value:"lbs"}})],1)],1)])],1)],1),i("v-text-field",{attrs:{label:t.bwLabelUnits,name:"bodyweight","prepend-icon":"mdi-weight-gram",type:"number",autocomplete:"off"},model:{value:t.bodyweight,callback:function(e){t.bodyweight=e},expression:"bodyweight"}}),i("v-text-field",{attrs:{id:"total",label:t.totalLabelUnits,"prepend-icon":"mdi-weight-lifter",type:"number","browser-autocomplete":"new-password"},model:{value:t.total,callback:function(e){t.total=e},expression:"total"}})],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"white--text",attrs:{color:"black"},on:{click:function(e){return t.calculateWilks(t.sex,t.total,t.bodyweight,t.units)}}},[t._v("Calculate")]),i("v-spacer")],1)],1),i("v-row",{staticStyle:{"padding-top":"20px"}},[i("p",{staticStyle:{"text-align":"center","padding-top":"40px: margin: 10px 0px 0px 0px",color:"white"}},[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-icon",t._g({attrs:{color:"white"}},a),[t._v("mdi-information-outline")])]}}])},[i("span",[t._v(" The old wilks coefficient is calculated by dividing 500 by a value calculated using your bodyweight ("),i("a",{staticStyle:{color:"white"},attrs:{href:"https://en.wikipedia.org/wiki/Wilks_Coefficient"}},[t._v("see here")]),t._v("), the new formula has changed 500 to 600, this results in a largely different coefficient despite the formula not changing a large amount. ")])]),t._v(" If the constant in the formula did not change from 500 to 600 your wilks would be: ")],1)]),null!=t.wilks2?i("v-row",{attrs:{align:"center",justify:"center"}},[i("p",{staticStyle:{"text-align":"center","font-size":"34px",color:"white",padding:"5px",margin:"0px"}},[t._v(t._s(t.oldWilks2))])]):t._e(),i("v-row",[i("div",{staticStyle:{width:"100%"}},[i("p",{staticStyle:{"text-align":"center",padding:"10px",margin:"0px",color:"white"}},[t._v("Your old wilks score would be:")])])]),null!=t.wilks2?i("v-row",{attrs:{align:"center",justify:"center"}},[i("p",{staticStyle:{"text-align":"center","font-size":"34px",color:"white",padding:"5px",margin:"0px"}},[t._v(t._s(t.wilks))])]):t._e(),i("v-row",[i("div",{staticStyle:{width:"100%"}},[i("p",{staticStyle:{"text-align":"center",padding:"15px",margin:"0px",color:"white",width:"100%","font-size":"25px","min-height":"90px","line-height":"30px"}},[t._v(t._s(this.percentageChangeText))])])]),i("p",{staticStyle:{"text-align":"center",color:"white","font-size":"12px"}},[t._v("Log any issues at the "),i("a",{staticStyle:{color:"white"},attrs:{href:"https://gitlab.com/yorkstanham/wilksv2/issues"}},[t._v("gitlab project")])])],1)],1)],1)],1)],1)},b=[],x={props:{source:String},data(){return{sex:null,percentageChangeText:null,percentageChange:null,bodyweight:null,total:null,wilks2ceoff:null,units:null,bwLabelUnits:"Bodyweight",totalLabelUnits:"Total",M_A:-99.22855411,M_B:14.40581421,M_C:-.015415771,M_D:-769734e-9,M_E:497549e-11,M_F:-9.35418e-9,W_A:-219.6791486,W_B:19.55345493,W_C:-.167792909,W_D:406937e-9,W_E:184095e-11,W_F:-8.31427e-9,wilks2:0,oldWilks2:0,wilks:0,M_a:-216.0475144,M_b:16.2606339,M_c:-.002388645,M_d:-.00113732,M_e:701863e-11,M_f:-1.291e-8,W_a:594.31747775582,W_b:-27.23842536447,W_c:.82112226871,W_d:-.00930733913,W_e:4731582e-11,W_f:-9.054e-8}},methods:{calculateWilks:function(t,e,i,a){if("lbs"==a&&(i/=2.20462,e/=2.20462),"male"==t){i>200.95&&(this.wilks2coeff=.6153),i<=200.95&&(this.wilks2coeff=600/(this.M_A+this.M_B*i+this.M_C*i**2+this.M_D*i**3+this.M_E*i**4+this.M_F*i**5));let t=this.wilks2coeff.toFixed(4);this.wilks2=e*t,this.wilks2=this.wilks2.toFixed(2),this.oldWilks2=5*this.wilks2/6,this.oldWilks2=this.oldWilks2.toFixed(2);let a=500/(this.M_a+this.M_b*i+this.M_c*i**2+this.M_d*i**3+this.M_e*i**4+this.M_f*i**5),l=a.toFixed(4);this.wilks=e*l,this.wilks=this.wilks.toFixed(2),this.percentageChange=(100*(this.oldWilks2/this.wilks-1)).toFixed(2);let s=Math.abs(this.percentageChange);this.percentageChange>0?this.percentageChangeText="This is a "+s+"% increase at your weight from the old formula":this.percentageChange<0?this.percentageChangeText="This is a "+s+"% decrease at your weight from the old formula":0==this.percentageChange&&(this.percentageChangeText="There is no change at your weight compared to the old formula")}if("female"==t){i>150.95&&(this.wilks2coeff=.9796),i<=150.95&&(this.wilks2coeff=600/(this.W_A+this.W_B*i+this.W_C*i**2+this.W_D*i**3+this.W_E*i**4+this.W_F*i**5));let t=this.wilks2coeff.toFixed(4);this.wilks2=e*t,this.wilks2=this.wilks2.toFixed(2),this.oldWilks2=5*this.wilks2/6,this.oldWilks2=this.oldWilks2.toFixed(2);let a=500/(this.W_a+this.W_b*i+this.W_c*i**2+this.W_d*i**3+this.W_e*i**4+this.W_f*i**5),l=a.toFixed(4);this.wilks=e*l,this.wilks=this.wilks.toFixed(2),this.percentageChange=(100*(this.oldWilks2/this.wilks-1)).toFixed(2);let s=Math.abs(this.percentageChange);this.percentageChange>0?this.percentageChangeText="This is a "+s+"% increase at your weight from the old formula":this.percentageChange<0?this.percentageChangeText="This is a "+s+"% decrease at your weight from the old formula":0==this.percentageChange&&(this.percentageChangeText="There is no change at your weight compared to the old formula")}}},watch:{units:function(){"lbs"==this.units&&(this.bwLabelUnits="Bodyweight (lbs)",this.totalLabelUnits="Total (lbs)"),"kg"==this.units&&(this.bwLabelUnits="Bodyweight (kg)",this.totalLabelUnits="Total (kg)")}}},_=x,k=(i("f34e"),i("8336")),m=i("b0af"),y=i("99d9"),C=i("62ad"),W=i("a523"),M=i("4bd4"),T=i("132d"),S=i("67b6"),V=i("43a6"),j=i("0fd9"),F=i("2fa4"),O=i("8654"),L=i("71d9"),B=i("2a7f"),U=i("3a2f"),A=Object(o["a"])(_,v,b,!1,null,"2d47761a",null),P=A.exports;r()(A,{VApp:c["a"],VBtn:k["a"],VCard:m["a"],VCardActions:y["a"],VCardText:y["b"],VCol:C["a"],VContainer:W["a"],VContent:h["a"],VForm:M["a"],VIcon:T["a"],VRadio:S["a"],VRadioGroup:V["a"],VRow:j["a"],VSpacer:F["a"],VTextField:O["a"],VToolbar:L["a"],VToolbarTitle:B["a"],VTooltip:U["a"]}),a["a"].use(w["a"]);var E=new w["a"]({mode:"history",base:"<wilks2020calculator>/",routes:[{path:"/",name:"home",component:P}]});a["a"].config.productionTip=!1,new a["a"]({vuetify:g,router:E,render:t=>t(u)}).$mount("#app")},f34e:function(t,e,i){"use strict";var a=i("04dd"),l=i.n(a);l.a}});
//# sourceMappingURL=app.ed0717da.js.map