(function(t){function e(e){for(var a,i,c=e[0],o=e[1],u=e[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,c=1;c<s.length;c++){var o=s[c];0!==n[o]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},n={app:0},r=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/todo-vue-testing/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"02f1":function(t,e,s){},1223:function(t,e,s){"use strict";var a=s("fe5b"),n=s.n(a);n.a},4042:function(t,e,s){"use strict";var a=s("da96"),n=s.n(a);n.a},"415b":function(t,e,s){},"43ff":function(t,e,s){"use strict";var a=s("b7b1"),n=s.n(a);n.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"app"}},[s("router-view")],1)},r=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("toolbar-component"),s("div",{staticClass:"row mt-4 d-flex justify-content-between mx-0"},[t._l(t.tasks,(function(e,a){return s("card-component",{attrs:{status:t.statusDel,item:e,index:a}})})),t.del?s("modal-content",{on:{close:function(e){t.del=!1}}}):t._e()],2)],1)},c=[],o=(s("a9e3"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card col-12 col-md-3 px-0 mb-3 myCard"},[s("div",{staticClass:"card-header d-flex justify-content-between"},[s("div",[s("router-link",{staticClass:"fa fa-edit fa-2x ml-auto myIcon",attrs:{tag:"i",to:{name:"task",params:{id:t.index}}}})],1),s("div",[s("i",{staticClass:"fa fa-times fa-2x myIcon",attrs:{id:t.index},on:{click:t.status}})])]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(t.item.name))]),t._l(t.item.todoList,(function(e,a){return a<=1?s("div",{staticClass:"card-text"},[s("div",{staticClass:"form-check",class:{success:!0===e.state}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"list.state"}],staticClass:"form-check-input",attrs:{type:"checkbox",disabled:"",id:"customCheck1"},domProps:{checked:Array.isArray(e.state)?t._i(e.state,null)>-1:e.state},on:{change:function(s){var a=e.state,n=s.target,r=!!n.checked;if(Array.isArray(a)){var i=null,c=t._i(a,i);n.checked?c<0&&t.$set(e,"state",a.concat([i])):c>-1&&t.$set(e,"state",a.slice(0,c).concat(a.slice(c+1)))}else t.$set(e,"state",r)}}}),s("label",{staticClass:"form-check-label",attrs:{for:"customCheck1"}},[t._v(t._s(e.text))])])]):t._e()}))],2),s("div",{staticClass:"card-footer text-muted"},[t._v(" "+t._s(t.item.date)+" ")])])}),u=[],l={name:"CardComponent",props:["index","status","item"],data:function(){return{}}},d=l,f=(s("1223"),s("2877")),m=Object(f["a"])(d,o,u,!1,null,null,null),p=m.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-body"},[s("p",[t._v(t._s(t.objModal.textModal))])]),s("div",{staticClass:"modal-footer d-flex justify-content-center"},[t.objModal.state?s("div",{staticClass:"w-100 d-flex justify-content-between"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.closeModal}},[t._v(" Отмена ")]),"back"!==this.$store.getters.getModalState?s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteModal}},[t._v("Удалить")]):"back"===this.$store.getters.getModalState?s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.goHome}},[t._v(" "+t._s(t.objModal.textBtn))]):t._e()]):t.objModal.state?t._e():s("div",{staticClass:"d-flex justify-content-center"},[s("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.goHome}},[t._v("Ok")])])])])])])},b=[],k=(s("96cf"),s("1da1")),j={name:"DeleteComponent",data:function(){return{objModal:{state:!0,textModal:"Вы точно хотите удалить заметку?",textBtn:"На главную",back:!1}}},methods:{closeModal:function(){this.$emit("close"),this.$store.dispatch("backModal","")},deleteModal:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("deleteTask",t.$store.getters.getDelId);case 2:t.objModal.state=!1,t.objModal.textModal="Операция прошла успешна!";case 4:case"end":return e.stop()}}),e)})))()},goHome:function(){this.closeModal(),this.$router.push({path:"/todo-testing"})}},beforeMount:function(){"back"===this.$store.getters.getModalState&&(this.objModal.textModal="Выйти из меню редактирования?")}},v=j,g=(s("43ff"),Object(f["a"])(v,h,b,!1,null,null,null)),x=g.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"d-flex flex-column bg-dark justify-content-center align-items-center text-white myNav"},[s("div",{staticClass:"p-2"},[s("a",{staticClass:"create-task d-flex align-items-center",on:{click:function(e){t.create=!t.create}}},[s("i",{staticClass:"fa fa-plus-circle fa-2x pr-2 task-icon"}),t._v("Создать новую заметку")])]),s("transition",{attrs:{name:"fade"}},[t.create?s("div",{staticClass:" justify-content-center align-items-center text-center w-100 create"},[s("div",{staticClass:"col-12 col-md-4 mt-4 mb-4 mx-auto text-center input-group",attrs:{id:"name"}},[s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("Заголовок")])]),s("input",{staticClass:"form-control",attrs:{type:"text"}})]),t._l(t.list,(function(e,a){return s("div",{staticClass:"col-12 col-md-6 m-3 text-center input-group mx-auto",attrs:{id:a}},[s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("-")])]),s("input",{staticClass:"form-control  mr-2 task-item",attrs:{type:"text"}}),s("i",{staticClass:"fa fa-minus-circle fa-2x task-icon",attrs:{id:a},on:{click:t.deleteItem}})])})),s("div",{staticClass:"col-12 col-md-6 text-center mx-auto  mb-3"},[s("div",{staticClass:"row d-flex flex-row justify-content-between"},[s("div",{staticClass:"col-12 col-md-6 mb-2"},[s("button",{staticClass:"btn btn-primary ",on:{click:function(e){return t.list.push(1)}}},[t._v("Добавить новую запись")])]),s("div",{staticClass:"col-12 col-md-6"},[s("button",{staticClass:"btn btn-success ",on:{click:t.createTask}},[t._v("Создать заметку")])])])])],2):t._e()])],1)},C=[],w=(s("4160"),s("a434"),s("159b"),s("c1df")),S=s.n(w),_={name:"ToolbarComponent",props:["creat"],data:function(){return{create:!1,list:[0]}},methods:{deleteItem:function(t){var e,s=t.target.parentNode.parentNode.childNodes;s.forEach((function(s){s.id===t.target.id&&(e=s)})),t.target.parentNode.parentNode.removeChild(e)},pushItem:function(){var t=document.querySelector(".create"),e=[];return t.childNodes.forEach((function(t){""!==t.id&&e.push(t.childNodes[1].value)})),e},createTask:function(){var t=this.pushItem(),e={name:"",todoList:[],date:""};e.name=t[0],t.splice(0,1),t.forEach((function(t){""!==t&&e.todoList.push({state:!1,text:t})})),e.date=S()().format("MMMM Do YYYY, h:mm a"),this.$store.dispatch("setNewTask",e),this.tasksList=!this.tasksList}}},T=_,M=(s("8626"),Object(f["a"])(T,y,C,!1,null,null,null)),O=M.exports,$={name:"Home",components:{ModalContent:x,CardComponent:p,ToolbarComponent:O},data:function(){return{tasks:[],del:!1,id:""}},beforeMount:function(){this.tasks=this.$store.getters.getArr},methods:{statusDel:function(t){this.del=!0,this.$store.dispatch("delId",Number(t.target.id))}}},I=$,N=(s("4042"),Object(f["a"])(I,i,c,!1,null,null,null)),z=N.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"card px-0 mt-3 myCard"},[s("div",{staticClass:"card-header d-flex justify-content-between"},[s("div",[s("i",{staticClass:"fa fa-home fa-2x ml-auto myIcon",on:{click:t.backHome}})]),s("div",[s("i",{staticClass:"fa fa-times fa-2x myIcon",on:{click:t.statusDel}})])]),s("div",{staticClass:"card-body"},[s("div",{staticClass:"card-title"},[s("div",{staticClass:"input-group mb-3"},[t._m(1),s("input",{directives:[{name:"model",rawName:"v-model",value:t.task.name,expression:"task.name"}],staticClass:"form-control task-name",attrs:{type:"text","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.task.name},on:{input:[function(e){e.target.composing||t.$set(t.task,"name",e.target.value)},t.changeState]}})])]),t._l(t.task.todoList,(function(e,a){return s("div",{staticClass:"card-text",attrs:{id:a}},[s("div",{staticClass:"form-check"},[s("div",{staticClass:"input-group mb-3"},[s("div",{staticClass:"input-group-prepend"},[s("div",{staticClass:"input-group-text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"list.state"}],staticClass:"task-state",attrs:{type:"checkbox","aria-label":"Checkbox for following text input"},domProps:{checked:Array.isArray(e.state)?t._i(e.state,null)>-1:e.state},on:{input:t.changeState,change:function(s){var a=e.state,n=s.target,r=!!n.checked;if(Array.isArray(a)){var i=null,c=t._i(a,i);n.checked?c<0&&t.$set(e,"state",a.concat([i])):c>-1&&t.$set(e,"state",a.slice(0,c).concat(a.slice(c+1)))}else t.$set(e,"state",r)}}})])]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"list.text"}],staticClass:"form-control mr-2 task-state-text",attrs:{type:"text","aria-label":"Text input with checkbox"},domProps:{value:e.text},on:{input:[function(s){s.target.composing||t.$set(e,"text",s.target.value)},t.changeState]}}),s("i",{staticClass:"fa fa-minus-circle fa-2x task-icon delIcon",attrs:{id:a},on:{click:t.deleteListItem}})])])])})),s("div",[s("button",{staticClass:"btn btn-primary w-100",on:{click:t.pushNewListItem}},[t._v("Добавить запись")])])],2),s("p",{staticClass:"m-2 task-date"},[t._v(t._s(t.task.date))]),s("div",{staticClass:"card-footer  d-flex justify-content-between"},[s("button",{staticClass:"btn btn-success",on:{click:t.saveTask}},[t._v("Сохранить")]),s("div",[s("i",{staticClass:"fa fa-arrow-left fa-2x mr-2 myIcon",on:{click:t.stateBack}}),s("i",{staticClass:"fa fa-arrow-right fa-2x myIcon",on:{click:t.stateStraight}})])])]),t.del?s("modal-content",{on:{close:function(e){t.del=!1}}}):t._e()],1)},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"text-white bg-dark text-center p-3"},[s("h3",[t._v("Изменение заметки")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-default"}},[t._v("Название заметки")])])}],A=(s("b0c0"),s("dca8"),{name:"Task",data:function(){return{task:{},del:!1,arrState:[],idTemp:0}},components:{ModalContent:x},methods:{statusDel:function(){this.del=!0,this.$store.dispatch("delId",Number(this.$route.params["id"]))},saveTask:function(){var t=this;this.task.date=S()().format("MMMM Do YYYY, h:mm a"),this.task.todoList.forEach((function(e,s){""===e.text&&t.task.todoList.splice(s,1)})),this.$store.dispatch("saveTask",{id:Number(this.$route.params["id"]),task:this.task}),this.arrState=[]},deleteListItem:function(t){this.task.todoList.splice(t.target.id,1),this.changeState("delete",t.target.id)},pushNewListItem:function(){this.task.todoList.push({state:!1,text:""}),this.changeState("push")},backHome:function(){this.$store.dispatch("backModal","back"),this.del=!0,this.arrState=[]},changeState:function(t,e){var s=this.createStateTask();"delete"===t?s.todoList.splice(e,1):"push"===t&&s.todoList.push({state:!1,text:""}),this.arrState.push(s),console.log(this.arrState)},setIdTemp:function(){var t=this;this.arrState.forEach((function(e,s){JSON.stringify(e)===JSON.stringify(t.task)&&(t.idTemp=s)}))},stateBack:function(){this.setIdTemp(),0!==this.idTemp&&(this.task.name=this.arrState[this.idTemp-1].name,this.task.todoList=this.arrState[this.idTemp-1].todoList,this.task.date=this.arrState[this.idTemp-1].date)},stateStraight:function(){this.setIdTemp(),this.idTemp!==this.arrState[this.arrState.length]&&(this.task.name=this.arrState[this.idTemp+1].name,this.task.todoList=this.arrState[this.idTemp+1].todoList,this.task.date=this.arrState[this.idTemp+1].date)},createStateTask:function(){var t=document.querySelector(".task-name"),e=document.querySelectorAll(".task-state"),s=document.querySelectorAll(".task-state-text"),a=document.querySelectorAll(".task-date"),n={name:t.value,todoList:[],date:a[0].textContent};return e.forEach((function(t,e){n.todoList.push({state:t.checked,text:s[e].value})})),Object.freeze(n),n}},beforeMount:function(){this.$store.dispatch("returnTask",this.$route.params["id"]),this.task=this.$store.getters.getTask},mounted:function(){this.$store.dispatch("pushTaskState",this.createStateTask()),this.arrState.push(Object.freeze(this.createStateTask()))}}),R=A,D=(s("d5c9"),Object(f["a"])(R,L,E,!1,null,null,null)),P=D.exports,Y={data:function(){return{}},components:{Task:P,Home:z},mounted:function(){null===localStorage.getItem("tasks")&&localStorage.setItem("tasks",JSON.stringify([]))}},q=Y,H=(s("5c0b"),Object(f["a"])(q,n,r,!1,null,null,null)),J=H.exports,B=s("8c4f");a["a"].use(B["a"]);var G=[{path:"/todo-testing",component:z},{path:"/todo-testing/:id",component:P,name:"task"}],U=new B["a"]({mode:"history",base:"/todo-vue-testing/",routes:G}),F=U,K=s("2f62");a["a"].use(K["a"]);var Q=new K["a"].Store({state:{arrTasks:JSON.parse(localStorage.getItem("tasks")),task:"",delId:"",modalState:"",taskState:[]},mutations:{setTasks:function(t,e){localStorage.setItem("tasks",JSON.stringify(e))},Tasks:function(t,e){t.arrTasks=e},pushTask:function(t,e){t.arrTasks.push(e)},delTask:function(t,e){t.arrTasks.splice(e,1)},oneTask:function(t,e){t.arrTasks.forEach((function(s,a){a===Number(e)&&(t.task=s)}))},setDelID:function(t,e){t.delId=e},save:function(t,e){t.arrTasks.forEach((function(t,s){s===Number(e.id)&&e.task}))},setBackModal:function(t,e){t.modalState=e},setTaskState:function(t,e){t.taskState.push(e)}},actions:{setNewTask:function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(e,s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.commit("pushTask",s);case 2:return t.next=4,e.commit("setTasks",e.getters.getArr);case 4:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}(),delId:function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(e,s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.commit("setDelID",s);case 2:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}(),deleteTask:function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(e,s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.commit("delTask",s);case 2:return t.next=4,e.commit("setTasks",e.getters.getArr);case 4:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}(),returnTask:function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(e,s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.commit("oneTask",s));case 1:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}(),saveTask:function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(e,s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.commit("save",s);case 2:return t.next=4,e.commit("setTasks",e.getters.getArr);case 4:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}(),backModal:function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(e,s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.commit("setBackModal",s);case 2:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}(),pushTaskState:function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(e,s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.commit("setTaskState",s);case 2:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}()},modules:{},getters:{getArr:function(t){return t.arrTasks},getTask:function(t){return t.task},getDelId:function(t){return t.delId},getModalState:function(t){return t.modalState},getTaskState:function(t){return t.taskState}}});a["a"].config.productionTip=!1,new a["a"]({router:F,store:Q,render:function(t){return t(J)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),n=s.n(a);n.a},8626:function(t,e,s){"use strict";var a=s("02f1"),n=s.n(a);n.a},"9c0c":function(t,e,s){},b7b1:function(t,e,s){},d5c9:function(t,e,s){"use strict";var a=s("415b"),n=s.n(a);n.a},da96:function(t,e,s){},fe5b:function(t,e,s){}});
//# sourceMappingURL=app.060c3bb5.js.map