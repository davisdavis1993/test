(function(){"use strict";var t={1510:function(t,o,e){var n=e(7195),r=function(){var t=this,o=t._self._c;return o("div",{staticClass:"bg-white",attrs:{id:"root"}},[o("div",{staticClass:"w-600px mx-auto"},[o("div",{staticClass:"p-4 rounded-lg border border-gray-300"},[o("HeaderAdd",{attrs:{addTodo:t.addTodo}}),o("ListTodo",{attrs:{todos:t.todos,checkTodo:t.checkTodo,deleteTodo:t.deleteTodo}}),o("FooterItem",{attrs:{todos:t.todos,checkAllTodo:t.checkAllTodo,clearAllTodo:t.clearAllTodo}})],1)])])},d=[],l=function(){var t=this,o=t._self._c;return o("div",{staticClass:"todo-header"},[o("input",{staticClass:"w-[560px] border rounded-[4px] border-[#ccc] h-[28px] pl-[7px] pr-[7px] pt-[4px] pb-[4px] focus:outline-none focus:border focus:box-shadow",attrs:{type:"text",placeholder:"请输入你的任务名称，按回车键确认"},on:{keyup:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.add.apply(null,arguments)}}})])},s=[],i=e(9523),c={name:"HeaderAdd",props:["addTodo"],methods:{add(t){if(!t.target.value.trim())return alert("输入不能为空");const o={id:(0,i.x0)(),title:t.target.value,done:!1};this.addTodo(o),t.target.value=""}}},a=c,u=e(1001),p=(0,u.Z)(a,l,s,!1,null,null,null),f=p.exports,h=function(){var t=this,o=t._self._c;return o("div",{staticClass:"ml-[20px] p-0 rounded-[2px] border border-[#ccc]"},t._l(t.todos,(function(e){return o("ListItem",{key:e.id,attrs:{todo:e,checkTodo:t.checkTodo,deleteTodo:t.deleteTodo}})})),1)},v=[],b=function(){var t=this,o=t._self._c;return o("li",{staticClass:"h-[36px] leading-[36px] p-[0] pl-[5px] pr-[5px] border-b hover:border-bottom-none hover:bg-[#ddd]"},[o("label",{staticClass:"float-left cursor-pointer"},[o("input",{staticClass:"mr-[6px]",attrs:{type:"checkbox"},domProps:{checked:t.todo.done},on:{change:function(o){return t.handleCheck(t.todo.id)}}}),o("span",[t._v(t._s(t.todo.title))])]),o("button",{staticClass:"btn btn-danger float-right before:content-initial",on:{click:function(o){return t.handleDelete(t.todo.id)}}},[t._v("删除")])])},x=[],T={name:"ListItem",props:["todo","checkTodo","deleteTodo"],methods:{handleCheck(t){this.checkTodo(t)},handleDelete(t){confirm("确定删除吗？")&&this.deleteTodo(t)}}},k=T,m=(0,u.Z)(k,b,x,!1,null,"f370a8c4",null),g=m.exports,_={name:"ListTodo",components:{ListItem:g},props:["todos","checkTodo","deleteTodo"]},y=_,A=(0,u.Z)(y,h,v,!1,null,null,null),C=A.exports,w=function(){var t=this,o=t._self._c;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],staticClass:"h-[40px] leading-[40px] pl-[6px] mt-[5px"},[o("label",{staticClass:"display-inline-block ml-[20px] cursor-pointer"},[o("input",{staticClass:"pr top-[-1px] mr-[5px]",attrs:{type:"checkbox"},domProps:{checked:t.isALL},on:{change:t.checkALL}})]),o("span",[o("span",[t._v("已完成"+t._s(t.doneTotal))]),t._v(" / 全部"+t._s(t.total)+" ")]),o("button",{staticClass:"btn float-right mt-[5px] bg-[#da4f49] text-[#fff] border border-[#bd362f] focus:outline-none hover:text-[#fff] hover:bg-[#bd362f]",on:{click:t.clearAll}},[t._v("清除已完成任务")])])},L=[],O={name:"FooterItem",props:["todos","checkAllTodo","clearAllTodo"],computed:{total(){return this.todos.length},doneTotal(){let t=0;return this.todos.forEach((o=>{o.done&&t++})),t},isALL(){return this.doneTotal===this.total&&this.total>0}},methods:{checkALL(t){this.checkAllTodo(t.target.checked)},clearAll(){this.clearAllTodo()}}},Z=O,j=(0,u.Z)(Z,w,L,!1,null,null,null),I=j.exports,P={name:"App",components:{HeaderAdd:f,ListTodo:C,FooterItem:I},data(){return{todos:[{id:"001",title:"吃饭",done:!0},{id:"002",title:"睡觉",done:!1},{id:"003",title:"打豆豆",done:!0}]}},methods:{addTodo(t){this.todos.unshift(t)},checkTodo(t){this.todos.forEach((o=>{o.id===t&&(o.done=!o.done)}))},deleteTodo(t){this.todos=this.todos.filter((o=>o.id!==t))},checkAllTodo(t){this.todos.forEach((o=>{o.done=t}))},clearAllTodo(){this.todos=this.todos.filter((t=>!t.done))}}},E=P,F=(0,u.Z)(E,r,d,!1,null,null,null),H=F.exports;n.ZP.config.productionTip=!1,new n.ZP({el:"#app",render:t=>t(H)})}},o={};function e(n){var r=o[n];if(void 0!==r)return r.exports;var d=o[n]={exports:{}};return t[n].call(d.exports,d,d.exports,e),d.exports}e.m=t,function(){var t=[];e.O=function(o,n,r,d){if(!n){var l=1/0;for(a=0;a<t.length;a++){n=t[a][0],r=t[a][1],d=t[a][2];for(var s=!0,i=0;i<n.length;i++)(!1&d||l>=d)&&Object.keys(e.O).every((function(t){return e.O[t](n[i])}))?n.splice(i--,1):(s=!1,d<l&&(l=d));if(s){t.splice(a--,1);var c=r();void 0!==c&&(o=c)}}return o}d=d||0;for(var a=t.length;a>0&&t[a-1][2]>d;a--)t[a]=t[a-1];t[a]=[n,r,d]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var r,d,l=n[0],s=n[1],i=n[2],c=0;if(l.some((function(o){return 0!==t[o]}))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(i)var a=i(e)}for(o&&o(n);c<l.length;c++)d=l[c],e.o(t,d)&&t[d]&&t[d][0](),t[d]=0;return e.O(a)},n=self["webpackChunkffff"]=self["webpackChunkffff"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(1510)}));n=e.O(n)})();
//# sourceMappingURL=app.7a279a8b.js.map