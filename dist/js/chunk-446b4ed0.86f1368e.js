(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-446b4ed0"],{1681:function(t,e,s){},ade39:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"no-gutters":""}},[s("form",{on:{submit:t.update}},[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"9"}},[s("v-card",{staticClass:"pa-6",attrs:{outlined:"",tile:""}},[s("v-row",[s("v-col",[s("h3",{staticClass:"pl-3 primary--text"},[t._v(" "+t._s(t.request.summary)+" ")])])],1),s("v-divider"),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",[s("v-row",[s("v-col",{attrs:{cols:"3"}},[s("p",{staticClass:"primary--text"},[t._v("Employee's Name:")])]),s("v-col",[s("label",{staticClass:"primary--text",attrs:{for:"submitted"}},[t._v(t._s(t.request.firstname))])])],1),s("v-row",[s("v-col",{attrs:{cols:"3"}},[s("p",{staticClass:"primary--text"},[t._v("Request Date:")])]),s("v-col",[s("label",{staticClass:"primary--text",attrs:{for:"submitted"}},[t._v(t._s(t.request.submitted))])])],1),s("v-row",[s("v-col",{attrs:{cols:"3"}},[s("p",{staticClass:"primary--text"},[t._v("Summary:")])]),s("v-col",[s("label",{staticClass:"primary--text",attrs:{for:"situation"}},[t._v(t._s(t.request.situation))])])],1),s("v-row",[s("v-col",{attrs:{cols:"3"}},[s("p",{staticClass:"primary--text"},[t._v("Arrangements:")])]),s("v-col",[s("label",{staticClass:"primary--text",attrs:{for:"arrangments"}},[t._v(t._s(t.request.arrangement))])])],1),s("v-row",[s("v-col",{attrs:{cols:"3"}},[s("p",{staticClass:"primary--text"},[t._v("Other Notes:")])]),s("v-col",[s("label",{staticClass:"primary--text",attrs:{for:"details"}},[t._v(t._s(t.request.anything_else))])])],1),s("v-row",[s("v-col",{attrs:{cols:"3"}},[s("p",{staticClass:"primary--text"},[t._v("Decision:")])]),s("v-col",{attrs:{cols:"4"}},[s("v-select",{attrs:{items:t.options,color:"brightBlue"},model:{value:t.request.decision,callback:function(e){t.$set(t.request,"decision",e)},expression:"request.decision"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"3"}},[s("p",{staticClass:"primary--text"},[t._v("Rationale:")])]),s("v-col",[s("v-textarea",{attrs:{outlined:"",color:"brightBlue"},model:{value:t.request.rationale,callback:function(e){t.$set(t.request,"rationale",e)},expression:"request.rationale"}})],1)],1),s("v-btn",{staticClass:"float-md-right ml-3",attrs:{rounded:"",color:"button",dark:"",value:"Update",type:"submit"}},[t._v(" Save ")]),s("v-btn",{staticClass:"float-md-right",attrs:{rounded:"",color:"button",dark:""}},[t._v(" Send ")])],1)],1)],1)],1),s("v-col",{attrs:{cols:"3"}},[s("Assistent",{attrs:{request:t.request}})],1)],1)],1)])},r=[],o=s("56d7"),i=s("3a78"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"darkBlue--text pa-3 ml-4",attrs:{color:"blueBlue",height:"100%"}},[s("v-list-item-title",{staticClass:"headline mb-1"},[s("v-icon",{attrs:{color:"darkBlue"}},[t._v(" fas fa-lightbulb ")]),t._v(" Dis-cretion assistant ")],1),s("p",[t._v("You can find some relevant policy information")]),s("ul",t._l(t.assistent.poldocs,(function(e,a){return s("li",{key:a},[s("a",{attrs:{href:e}},[t._v(t._s(e))])])})),0),s("p",[t._v("There were "),s("b",[t._v(t._s(t.assistent.cases.length))]),t._v(" similar types of requests in the last 18 months. See details "),s("a",{attrs:{href:"/"}},[t._v("here")]),t._v(". ")]),s("p",[t._v("You may use the "),s("a",{attrs:{href:"/"}},[t._v("Areas of Consideration")]),t._v(" when discussing with the colleague "+t._s(t.request.firstname)+" and/or forming arrangements for your team and the business. ")]),s("p",[s("b",[t._v("Support and Well-being")])]),s("ul",[s("li",[t._v("What would I be doing differently once I start the flexible working pattern?")]),s("li",[t._v("How would I manage a balance among study, work and life?")]),s("p",[s("b",[t._v("Operations")])]),s("li",[t._v("How would the day-to-day operations be impacted by flexible working pattern?")]),s("li",[t._v("What resources / arrangements would I need to ensure acceptable operations?")])])],1)},l=[],u={name:"Assistent",props:["request"],data:function(){return{assistent:[]}},mounted:function(){var t=this,e={row:[this.request.summary,this.request.situation,this.request.arrangement,this.request.anything_else],count:2};i["a"].addAssistent(e).then((function(e){return t.assistent=e}))},computed:{}},c=u,d=s("2877"),v=s("6544"),p=s.n(v),h=s("b0af"),m=s("132d"),f=s("5d23"),_=Object(d["a"])(c,n,l,!1,null,null,null),w=_.exports;p()(_,{VCard:h["a"],VIcon:m["a"],VListItemTitle:f["c"]});var g={name:"RequestDetails",props:["id"],data:function(){return{request:null,options:["accepted","rejected","nmi"],assistent:[]}},mounted:function(){var t=this;i["a"].getById(this.id).then((function(e){return t.request=e}))},methods:{update:function(t){t.preventDefault();var e={token:this.request.token,decision:this.request.decision};console.log(e),o["eventBus"].$emit("update-request",e)}},components:{Assistent:w}},b=g,y=s("8336"),x=s("62ad"),q=s("a523"),C=s("ce7e"),k=s("0fd9"),I=s("b974"),H=(s("a9e3"),s("5530")),V=(s("1681"),s("8654")),B=s("58df"),$=Object(B["a"])(V["a"]),N=$.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(H["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},V["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"}},genInput:function(){var t=V["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){V["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),R=Object(d["a"])(b,a,r,!1,null,null,null);e["default"]=R.exports;p()(R,{VBtn:y["a"],VCard:h["a"],VCol:x["a"],VContainer:q["a"],VDivider:C["a"],VRow:k["a"],VSelect:I["a"],VTextarea:N})}}]);
//# sourceMappingURL=chunk-446b4ed0.86f1368e.js.map