(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{549:function(t,e,a){"use strict";a.r(e);var s=a(65),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vue2-与-vue3-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2-与-vue3-的区别"}},[t._v("#")]),t._v(" Vue2 与 Vue3 的区别")]),t._v(" "),a("p",[a("code",[t._v("Vue3")]),t._v("由于完全由"),a("code",[t._v("TS")]),t._v("进行重写，在应用中对类型判断的定义和使用有很强的表现。同一对象的多个键返回值必须通过定义对应的接口（"),a("code",[t._v("interface")]),t._v("）来进行类型定义。要不然在 ESLint 时都会报错。")]),t._v(" "),a("p",[a("code",[t._v("vue2")]),t._v(" 的双向数据绑定是利用 "),a("code",[t._v("ES5")]),t._v(" 的一个 "),a("code",[t._v("Object.defineProperty()")]),t._v("对数据进行劫持 结合 "),a("code",[t._v("发布订阅")]),t._v("模式的方式来实现的。"),a("code",[t._v("Vue3")]),t._v(" 中使用了 "),a("code",[t._v("es6")]),t._v(" 的 "),a("code",[t._v("Proxy")]),t._v(" 对数据代理。")]),t._v(" "),a("p",[a("code",[t._v("Vue3")]),t._v("支持碎片("),a("code",[t._v("Fragments")]),t._v(")")]),t._v(" "),a("p",[t._v("Vue2 与 Vue3 最大的区别: Vue2 使用"),a("code",[t._v("Options API")]),t._v("而 Vue3 使用的"),a("code",[t._v("Composition API")])]),t._v(" "),a("p",[t._v("生命周期钩子变化:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Vue2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" vue3\nbeforeCreate  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncreated       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbeforeMount   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" onBeforeMount\nmounted       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" onMounted\nbeforeUpdate  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" onBeforeUpdate\nupdated       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" onUpdated\nbeforeDestroy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" onBeforeUnmount\ndestroyed     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" onUnmounted\nactivated     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" onActivated\ndeactivated   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" onDeactivated\n")])])]),a("h2",{attrs:{id:"介绍-vite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍-vite"}},[t._v("#")]),t._v(" 介绍 vite")]),t._v(" "),a("blockquote",[a("p",[t._v("Vite：下一代前端开发与构建工具")])]),t._v(" "),a("ul",[a("li",[t._v("💡 极速的开发服务器启动(ESM，esbuild)")]),t._v(" "),a("li",[t._v("⚡️ 轻量快速的热模块重载（HMR）")]),t._v(" "),a("li",[t._v("🛠️ 丰富的功能")]),t._v(" "),a("li",[t._v("📦 自带优化的构建")]),t._v(" "),a("li",[t._v("🔩 通用的插件接口")]),t._v(" "),a("li",[t._v("🔑 完全类型化的 API")])]),t._v(" "),a("p",[a("code",[t._v("Vite")]),t._v(" （法语意为 “迅速”，发音 /vit/）是一种全新的前端构建工具，它极大地改善了前端开发体验。")]),t._v(" "),a("p",[t._v("它主要由两部分组成：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("一个开发服务器，它基于 原生 "),a("code",[t._v("ES")]),t._v(" 模块 提供了 丰富的内建功能，如速度快到惊人的 模块热更新（HMR）。")])]),t._v(" "),a("li",[a("p",[t._v("一套构建指令，它使用 "),a("code",[t._v("Rollup")]),t._v(" 打包你的代码，并且它是预配置的，可以输出用于生产环境的优化过的静态资源。")])]),t._v(" "),a("li",[a("p",[t._v("Vite 意在提供开箱即用的配置，同时它的 插件 API 和 JavaScript API 带来了高度的"),a("code",[t._v("可扩展性")]),t._v("，并有完整的类型支持。")])])]),t._v(" "),a("h2",{attrs:{id:"使用-vite-快速创建脚手架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-vite-快速创建脚手架"}},[t._v("#")]),t._v(" 使用 vite 快速创建脚手架")]),t._v(" "),a("blockquote",[a("p",[t._v("兼容性注意:Vite 需要 "),a("code",[t._v("Node.js")]),t._v(" 版本 "),a("code",[t._v(">= 12.0.0")]),t._v("。")])]),t._v(" "),a("ol",[a("li",[t._v("第一步: 在需要创建项目文件目录下打开 "),a("code",[t._v("cmd")]),t._v(" 运行以下命令")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm 6.x")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init @vitejs/app vite_vue3_ts --template\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm 7+, 需要额外的双横线：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init @vitejs/app vite_vue3_ts -- --template\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# yarn")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" create @vitejs/app vite_vue3_ts --template\n")])])]),a("p",[t._v("这里我采用 "),a("code",[t._v("yarn")]),t._v(" 来安装")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://files.mdnice.com/user/16854/befdd482-25e0-43f9-a5e3-7b34a9d8696c.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("第二步: 选择 "),a("code",[t._v("vue")]),t._v("回车 => "),a("code",[t._v("vue-ts")]),t._v("回车")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://files.mdnice.com/user/16854/0280afe9-2ba2-4dce-bdc4-6b756151fd5a.png",alt:""}}),t._v(" "),a("img",{attrs:{src:"https://files.mdnice.com/user/16854/d1a58b76-2bc7-489b-966c-fb2a4136e39a.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("第三步: "),a("code",[t._v("cd")]),t._v(" 到项目文件夹,安装依赖,启动项目")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入项目文件夹")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" vite_vue3_ts\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" dev\n")])])]),a("p",[a("img",{attrs:{src:"https://files.mdnice.com/user/16854/64867857-9e79-426a-89e3-c92303934094.png",alt:""}})])])}),[],!1,null,null,null);e.default=r.exports}}]);