(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{547:function(t,s,a){"use strict";a.r(s);var r=a(65),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"es6-api食用指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-api食用指南"}},[t._v("#")]),t._v(" ES6+ API食用指南")]),t._v(" "),a("h2",{attrs:{id:"object-getownpropertydescriptor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-getownpropertydescriptor"}},[t._v("#")]),t._v(" Object.getOwnPropertyDescriptor()")]),t._v(" "),a("p",[a("code",[t._v("Object.getOwnPropertyDescriptor()")]),t._v(" 静态方法返回一个对象，该对象描述给定对象上特定属性（即直接存在于对象上而不在对象的原型链中的属性）的配置。返回的对象是可变的，但对其进行更改不会影响原始属性的配置。关于属性描述符类型及其特性的更多信息可以在 "),a("RouterLink",{attrs:{to:"/blog/js/object-defineproperty.html"}},[t._v("Object.defineProperty()")]),t._v(" 中找到。")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" object1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("property1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" descriptor1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOwnPropertyDescriptor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("object1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'property1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("descriptor1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("configurable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Expected output: true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("descriptor1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Expected output: 42")]),t._v("\n")])])]),a("h2",{attrs:{id:"sharedarraybuffer-与-automics-原子操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sharedarraybuffer-与-automics-原子操作"}},[t._v("#")]),t._v(" SharedArrayBuffer 与 Automics（原子操作）")]),t._v(" "),a("p",[t._v("高级特性，js引擎核心特性"),a("code",[t._v("SharedArrayBuffer")]),t._v(" 对象用来表示一个通用的原始二进制数据缓冲区，类似于 "),a("code",[t._v("ArrayBuffer")]),t._v(" 对象，但它可以用来在共享内存上创建视图。与可转移的 ArrayBuffer 不同，SharedArrayBuffer 不是可转移对象。")]),t._v(" "),a("p",[t._v("js是单线程，"),a("code",[t._v("SharedArrayBuffer")]),t._v("共享内存，给js带来了多线程的能力。可以让"),a("code",[t._v("js主线程")]),t._v("和"),a("code",[t._v("web worker线程")]),t._v("通过"),a("code",[t._v("postMessage")]),t._v("共享内存。")]),t._v(" "),a("p",[t._v("多线程只要存在，就会存在竞争，所以就必须有锁的概念。如果要想安全的更新共享内存中的上锁数据，就必须上锁，如果没有锁的话，同时存在好几个线程在修改数据，就会存在竞争。所以在多线程中引入了"),a("code",[t._v("Automics")]),t._v("原子锁的概念，")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[t._v("#")]),t._v(" CORS")]),t._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_33820059/article/details/113080232",target:"_blank",rel:"noopener noreferrer"}},[t._v("一文带你走进同源策略以及CORS"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);