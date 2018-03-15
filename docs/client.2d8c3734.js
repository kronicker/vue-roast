webpackJsonp([0],[,,function(t,e,s){"use strict";var n=s(11),a=s(14),i=s(16),o=s(19);e.a={components:{Demo:n.a,Guide:a.a,Hero:i.a,Navbar:o.a}}},function(t,e,s){"use strict";e.a={data:function(){return{message:{title:"",body:"",footer:"",level:"info"}}},methods:{toast:function(){this.$toast(Object.assign({},this.message))}}}},function(t,e,s){"use strict";var n=s(31);e.a={props:{position:{type:String,required:!0},transition:{type:String,required:!0},toasts:{type:Array,default:function(){return[]}}},methods:{close:function(t){var e=this.toasts.findIndex(function(e){return e.id===t});this.toasts.splice(e,1)}},components:{ToastMessage:n.a}}},function(t,e,s){"use strict";e.a={props:{id:{type:Number,required:!0},title:{type:String,default:""},body:{type:String,default:""},footer:{type:String,default:""},level:{type:String,required:!0},options:{action:{placeholder:String,method:Function},truncateAfter:{type:Number,required:!1}},timer:{type:Object,required:!0}},computed:{content:function(){var t=this.options.truncateAfter;return t?this.body:this.body.substr(0,t)}},methods:{close:function(){this.$emit("close",this.id)}},mounted:function(){this.timer.action=this.close}}},function(t,e,s){t.exports=s(7)},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(8),a=(s.n(n),s(9)),i=s(23),o=s(27);i.a.use(o.a),new i.a({el:"#demo",render:function(t){return t(a.a)}})},,function(t,e,s){"use strict";function n(t){s(10)}var a=s(2),i=s(22),o=s(0),r=n,v=o(a.a,i.a,!1,r,null,null);e.a=v.exports},function(t,e){},function(t,e,s){"use strict";function n(t){s(12)}var a=s(3),i=s(13),o=s(0),r=n,v=o(a.a,i.a,!1,r,"data-v-bfc52c30",null);e.a=v.exports},function(t,e){},function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"demo"}},[s("h2",[t._v("Demo")]),t._v(" "),s("h5",[t._v("Message")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("label",[t._v("Title")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.message.title,expression:"message.title"}],attrs:{type:"text"},domProps:{value:t.message.title},on:{input:function(e){e.target.composing||t.$set(t.message,"title",e.target.value)}}}),t._v(" "),s("label",[t._v("Footer")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.message.footer,expression:"message.footer"}],attrs:{type:"text"},domProps:{value:t.message.footer},on:{input:function(e){e.target.composing||t.$set(t.message,"footer",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col"},[s("label",[t._v("Body")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.message.body,expression:"message.body"}],attrs:{type:"text"},domProps:{value:t.message.body},on:{input:function(e){e.target.composing||t.$set(t.message,"body",e.target.value)}}}),t._v(" "),s("label",[t._v("Level")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.message.level,expression:"message.level"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.message,"level",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"info"}},[t._v("Info")]),t._v(" "),s("option",{attrs:{value:"warning"}},[t._v("Warning")]),t._v(" "),s("option",{attrs:{value:"error"}},[t._v("Error")])])])]),t._v(" "),s("button",{on:{click:t.toast}},[t._v("TOAST")])])},a=[],i={render:n,staticRenderFns:a};e.a=i},function(t,e,s){"use strict";var n=s(15),a=s(0),i=a(null,n.a,!1,null,null,null);e.a=i.exports},function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"guide"},[s("div",{attrs:{id:"install"}},[s("h2",[t._v("Install")]),t._v(" "),s("h5",[t._v("Via npm")]),t._v(" "),s("p",[s("code",[t._v("npm i vue-roast")])]),t._v(" "),s("h5",[t._v("Register plugin")]),t._v(" "),s("pre",[t._v("      "),s("code",[t._v("\n        import VueRoast from 'vue-roast';\n        Vue.use(VueRoast, config);\n      ")]),t._v("\n    ")]),t._v(" "),s("h4",[t._v("Config")]),t._v(" "),s("table",{staticClass:"table table-striped table-bordered"},[s("thead",[s("tr",[s("th",[t._v("Prop")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),s("th",[t._v("Possible")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ttl")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("Default toast message ttl")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("5000")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("threshold")]),t._v(" "),s("td",[t._v("Number | Boolean")]),t._v(" "),s("td",[t._v("Max number of displayed toasts at a time (false to disable)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("position")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Position of toast messages")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("‘bottom-left’")]),t._v(" "),s("td",[t._v("[‘top’, ‘bottom’] - [‘left’, ‘middle’, ‘right’]")])])])])]),t._v(" "),s("div",{attrs:{id:"guide"}},[s("h2",[t._v("Guide")]),t._v(" "),s("p",[t._v("In component:")]),t._v(" "),s("pre",[s("code",[t._v("this.$toast(message, options);")])]),t._v(" "),s("p",[t._v("Outside of component")]),t._v(" "),s("pre",[s("code",[t._v("Vue.toast(message, options);")])]),t._v(" "),s("h4",[t._v("Message")]),t._v(" "),s("table",{staticClass:"table table-striped table-bordered"},[s("thead",[s("tr",[s("th",[t._v("Prop")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),s("th",[t._v("Possible")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("‘’")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("body")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("‘’")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("footer")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("‘’")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("level")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("‘info’")]),t._v(" "),s("td",[t._v("[‘info’, ‘warning’, ‘error’]")])])])]),t._v(" "),s("h4",[s("a"),t._v("Options")]),t._v(" "),s("table",{staticClass:"table table-striped table-bordered"},[s("thead",[s("tr",[s("th",[t._v("Prop")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ttl")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("Toast message display time in miliseconds")])]),t._v(" "),s("tr",[s("td",[t._v("truncateAfter")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("Max message char length to display")])]),t._v(" "),s("tr",[s("td",[t._v("action")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("Action triggered on toast click")])]),t._v(" "),s("tr",[s("td",[t._v("action.placeholder")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Action placeholder")])]),t._v(" "),s("tr",[s("td",[t._v("action.method")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Method to be invoked on click")])])])])])])}],i={render:n,staticRenderFns:a};e.a=i},function(t,e,s){"use strict";function n(t){s(17)}var a=s(18),i=s(0),o=n,r=i(null,a.a,!1,o,"data-v-cd8531f6",null);e.a=r.exports},function(t,e){},function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero container center text-center"},[s("div",[s("img",{staticClass:"logo",attrs:{src:"/logo.png",alt:"vue-roast"}}),t._v(" "),s("div",{staticClass:"horizontal-align"},[s("a",{attrs:{href:"https://www.npmjs.com/package/vue-roast"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/vue-roast.svg"}}),t._v(" "),s("img",{attrs:{src:"https://img.shields.io/npm/dt/vue-roast.svg"}}),t._v(" "),s("img",{attrs:{src:"https://img.shields.io/npm/l/vue-roast.svg"}})]),t._v(" "),s("a",{attrs:{href:"https://vuejs.org/"}},[s("img",{attrs:{src:"https://img.shields.io/badge/vue-2.0-orange.svg"}})])]),t._v(" "),s("p",[t._v("Vue.js plugin for easy display of toast messages.")])])])}],i={render:n,staticRenderFns:a};e.a=i},function(t,e,s){"use strict";function n(t){s(20)}var a=s(21),i=s(0),o=n,r=i(null,a.a,!1,o,"data-v-8e5d4b3a",null);e.a=r.exports},function(t,e){},function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"nav horizontal-align"},[s("div",{staticClass:"nav-item"},[s("a",{attrs:{href:"#install"}},[t._v("Installation")])]),t._v(" "),s("div",{staticClass:"nav-item"},[s("a",{attrs:{href:"#guide"}},[t._v("Guide")])]),t._v(" "),s("div",{staticClass:"nav-item"},[s("a",{attrs:{href:"#demo"}},[t._v("Demo")])]),t._v(" "),s("div",{staticClass:"nav-item vertical-align"},[s("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user=kronicker&repo=vue-roast&type=star&count=true",frameborder:"0",scrolling:"0",width:"95px",height:"22px"}})])])}],i={render:n,staticRenderFns:a};e.a=i},function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"app"},[s("navbar"),t._v(" "),s("hero"),t._v(" "),s("div",{staticClass:"container"},[s("guide"),t._v(" "),s("demo")],1)],1)},a=[],i={render:n,staticRenderFns:a};e.a=i},,,,,function(t,e,s){"use strict";function n(t){return"top-middle"===t?"slide-fade-down":"bottom-middle"===t?"slide-fade-up":t.includes("right")?"slide-fade-left":"slide-fade-right"}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ttl||c,s=t.threshold||u,a=t.positionClass||l,i=n(a),o=a.includes("top")?"unshift":"push";Object.assign(_,{ttl:e,threshold:s,position:a,transition:i,pushAction:o})}function i(t){var e=Math.ceil(Date.now()*Math.random());return t.includes(e)?i(t):e}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t.title||t.body||t.footer){d.length===_.threshold&&d.shift(),e.ttl=e.ttl||_.ttl;var s=i(d.map(function(t){return t.id})),n=new r.a(e.ttl);d[_.pushAction]({id:s,message:t,options:e,timer:n})}}var r=s(28),v=s(29),l="bottom-left",c=5e3,u=3,d=[],_={};e.a={install:function(t){a(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});var e=t.extend(v.a),s=_.position,n=_.transition,i=new e({propsData:{position:s,transition:n,toasts:d}}).$mount();document.body.appendChild(i.$el),t.toast=o,t.prototype.$toast=o}}},function(t,e,s){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}s.d(e,"a",function(){return i});var a=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),i=function(){function t(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Function.prototype;n(this,t),this.ttl=e,this.action=s}return a(t,[{key:"start",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.ttl;this.timer=setTimeout(this.action,t)}},{key:"stop",value:function(){clearTimeout(this.timer)}},{key:"restart",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.ttl;this.stop(),this.start(t)}}]),t}()},function(t,e,s){"use strict";function n(t){s(30)}var a=s(4),i=s(34),o=s(0),r=n,v=o(a.a,i.a,!1,r,null,null);e.a=v.exports},function(t,e){},function(t,e,s){"use strict";function n(t){s(32)}var a=s(5),i=s(33),o=s(0),r=n,v=o(a.a,i.a,!1,r,null,null);e.a=v.exports},function(t,e){},function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"toast-message",class:t.level,attrs:{role:"alert"}},[s("div",{staticClass:"toast-header"},[s("span",{staticClass:"title bigger"},[t._v(t._s(t.title))]),t._v(" "),s("span",{staticClass:"close-btn smaller",attrs:{role:"button"},on:{click:t.close}},[t._v("✖")])]),t._v(" "),s("div",{staticClass:"toast-body"},[s("span",[t._v(t._s(t.content))]),t._v(" "),t.options.action?s("span",{attrs:{role:"button"},on:{click:t.options.action.method}},[t._v("\n      "+t._s(t.options.action.placeholder)+"\n    ")]):t._e()]),t._v(" "),s("div",{staticClass:"toast-footer"},[s("span",{staticClass:"smaller"},[t._v(t._s(t.footer))])])])},a=[],i={render:n,staticRenderFns:a};e.a=i},function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"toast-container",class:t.position},[s("transition-group",{attrs:{name:t.transition}},t._l(t.toasts,function(e){var n=e.id,a=e.message,i=e.timer,o=e.options;return s("toast-message",t._b({key:n,attrs:{id:n,options:o,timer:i},on:{close:t.close}},"toast-message",a,!1))}))],1)},a=[],i={render:n,staticRenderFns:a};e.a=i}],[6]);