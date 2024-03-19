(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{524:function(t,a,s){"use strict";s.r(a);var e=s(65),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"浏览器兼容之bfcache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器兼容之bfcache"}},[t._v("#")]),t._v(" 浏览器兼容之bfcache")]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("移动端浏览器开发，常常会遇到"),s("code",[t._v("bfcache")]),t._v("的问题。举个🌰：\n假设有A，B两个页面")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("A：商品列表页\nB：商品收藏页\n")])])]),s("p",[t._v("在A页面中调用接口收藏商品C，收藏完成，点击收藏按钮前往B页面查看收藏列表；在B页面取消商品C的收藏，然后点击浏览器"),s("code",[t._v("后退")]),t._v("按钮/页面返回按钮，返回到A页面，这时候会发现商品C依然是收藏状态。")]),t._v(" "),s("h2",{attrs:{id:"分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),s("p",[t._v("通过抓包工具或者"),s("code",[t._v("vconsole")]),t._v("查看，会发现页面A根本没有重新调用接口，通过调试发现，返回到页面A时不会重新执行页面"),s("code",[t._v("onload")]),t._v("逻辑（"),s("code",[t._v("vue")]),t._v("中为"),s("code",[t._v("onMounted")]),t._v(","),s("code",[t._v("react")]),t._v("中为"),s("code",[t._v("componentDidMount")]),t._v("事件），经过google发现，这是"),s("code",[t._v("webkit")]),t._v("内核根据"),s("code",[t._v("Firefox的1.5")]),t._v("的一个新功能"),s("code",[t._v("bfcache")]),t._v("，做的一个浏览器页面访问的自身优化。")]),t._v(" "),s("p",[t._v("所以，由于某些浏览器"),s("code",[t._v("bf-cache")]),t._v("的存在，我们在测试时发现，我们的代码块根本就没有执行。既然bug产生了，我们该如何去解决它？")]),t._v(" "),s("p",[t._v("测试得到的事实：\n这个"),s("code",[t._v("issue")]),t._v("在"),s("code",[t._v("andriod")]),t._v("和"),s("code",[t._v("ios")]),t._v("中各个浏览器的表现并不一致，并不是每一次的返回都会从缓存中读取数据。既然bug产生了，我们该如何去解决它？")]),t._v(" "),s("h2",{attrs:{id:"bfcache-探秘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfcache-探秘"}},[t._v("#")]),t._v(" bfcache 探秘")]),t._v(" "),s("h3",{attrs:{id:"定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching",target:"_blank",rel:"noopener noreferrer"}},[t._v("bf-cache"),s("OutboundLink")],1),t._v("，即"),s("code",[t._v("back-forward cache")]),t._v("，可称“往返缓存”，可以在用户使用浏览器的“后退”和“前进”按钮时加快页面的转换速度。这个缓存不仅保存页面数据，还保存了"),s("code",[t._v("DOM")]),t._v("和"),s("code",[t._v("JS")]),t._v("的状态，实际上是将整个页面都保存在内存中，如果页面位于"),s("code",[t._v("bfcache")]),t._v("中，那么再次打开页面就不会触发"),s("code",[t._v("onload")]),t._v("事件。")]),t._v(" "),s("p",[t._v("我理解"),s("code",[t._v("bfcache")]),t._v("就是类似于“快照”的技术。浏览器解析 HTML、CSS、JS等各类媒体资源后，会把这一个结果暂存起来。用户返回的时候，浏览器可以不用重新解析 HTML、CSS、JS等等，直接将这个“快照”拿出来就可以了。这样在移动端能节省大量的资源。在交互体验上也有很大的优势。比如说在渲染懒加载的长列表的时候，返回到上一页，所有之前请求到的接口数据、DOM 节点都不会被销毁。用户点击进入长列表的某一项查看详情，点击返回的时候能够立即继续查看。这一点采用"),s("code",[t._v("SPA")]),t._v("方案的话，"),s("code",[t._v("vue")]),t._v("得使用"),s("a",{attrs:{href:"https://v3.cn.vuejs.org/api/built-in-components.html#keep-alive",target:"_blank",rel:"noopener noreferrer"}},[t._v("keep-alive"),s("OutboundLink")],1),t._v("，"),s("code",[t._v("react")]),t._v("目前还做不到这一点，但已经有了提案"),s("a",{attrs:{href:"https://github.com/facebook/react/issues/13206",target:"_blank",rel:"noopener noreferrer"}},[t._v("offscreen API"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"浏览器差异"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器差异"}},[t._v("#")]),t._v(" 浏览器差异")]),t._v(" "),s("p",[s("code",[t._v("chrome")]),t._v(" 在 "),s("code",[t._v("Android")]),t._v(" 系统上现在 用的是 "),s("code",[t._v("blink")]),t._v(" 内核，根据相关资料[1]显示，在很久以前就已经将"),s("code",[t._v("PageCache")]),t._v("（即"),s("code",[t._v("bfcache")]),t._v("）这部分代码移除了，也就是说现在的chrome应该是没有这个东西的。可以确定的是，"),s("code",[t._v("chrome")]),t._v("以前的版本中，"),s("code",[t._v("bfcache")]),t._v("的实现是从"),s("code",[t._v("webkit")]),t._v("中拿来的，由于移动端项目目前面向的用户主体就是 iOS + Android，iOS下是基于"),s("code",[t._v("Webkit")]),t._v("，"),s("code",[t._v("Android")]),t._v("基于"),s("code",[t._v("chrome")]),t._v("（且这部分功能也是源于webkit）。因此追溯这个问题，我们只要专注于研究"),s("code",[t._v("webkit")]),t._v("里"),s("code",[t._v("bfcache")]),t._v("的逻辑即可。")]),t._v(" "),s("h2",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案：")]),t._v(" "),s("h3",{attrs:{id:"_1、disable-bfcache-未做过测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、disable-bfcache-未做过测试"}},[t._v("#")]),t._v(" 1、disable bfcache（未做过测试）")]),t._v(" "),s("p",[t._v("业务上添加如下代码：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bfWorker "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Worker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createObjectURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Blob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unload'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里绑个事件，构造一个闭包，以免 worker 被垃圾回收导致逻辑失效")]),t._v("\n        bfWorker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("terminate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if you want to do something here.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2、利用pageshow事件-推荐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、利用pageshow事件-推荐"}},[t._v("#")]),t._v(" 2、利用"),s("code",[t._v("pageshow")]),t._v("事件（推荐）")]),t._v(" "),s("p",[t._v("个人认为最合理的解决方式其实是监听"),s("code",[t._v("pageshow")]),t._v("事件，目前"),s("a",{attrs:{href:"https://caniuse.com/?search=pageshow",target:"_blank",rel:"noopener noreferrer"}},[t._v("兼容性"),s("OutboundLink")],1),t._v("达到了97%以上。这个事件在页面显示时触发，无论页面是否来自"),s("code",[t._v("bfcache")]),t._v("。在重新加载页面中，"),s("code",[t._v("pageshow")]),t._v("会在"),s("code",[t._v("load")]),t._v("事件触发后触发；而对于"),s("code",[t._v("bfcache")]),t._v("中的页面，"),s("code",[t._v("pageshow")]),t._v("会在页面状态完全恢复的那一刻触发。\n当页面加载"),s("code",[t._v("bfcache")]),t._v("时"),s("code",[t._v("onload")]),t._v("事件不会被触发。相反，可以检查"),s("code",[t._v("onpageshow")]),t._v("事件的持久性属性值"),s("code",[t._v("persisted")]),t._v("。对于"),s("code",[t._v("pageshow")]),t._v("事件，初始页面加载时"),s("code",[t._v("persisted")]),t._v("值为"),s("code",[t._v("false")]),t._v("；如果页面是从"),s("code",[t._v("bfcache")]),t._v("中加载的，那么"),s("code",[t._v("persisted")]),t._v("的值就是"),s("code",[t._v("true")]),t._v("。")]),t._v(" "),s("p",[t._v("解决思路：\n页面在点击回退按钮时，会触发pageshow事件，如果这个页面是从缓存加载的，那么persisted的值为true，此时调用reload，强制刷新，可以阻止页面进入bfcache。或者重新调用一次收藏接口。\n业务上添加如下代码：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pageshow'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("persisted"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reload，这时候会发现页面展现之后会再有一个重新加载的过程，对用户不是太友好")]),t._v("\n      window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重新调用接口/其他逻辑")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3、js监听pagehiden事件阻止页面进入bfcache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、js监听pagehiden事件阻止页面进入bfcache"}},[t._v("#")]),t._v(" 3、js监听pagehiden事件阻止页面进入bfcache")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pagehide'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("persisted"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dom "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    dom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      dom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"<script type='text/javascript'>window.location.reload();<\/script>\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_4、设置meta标签-清除页面缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、设置meta标签-清除页面缓存"}},[t._v("#")]),t._v(" 4、设置meta标签，清除页面缓存")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Cache-Control"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("no-cache, no-store, must-revalidate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Pragma"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("no-cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Expires"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[s("code",[t._v("Cache-Control")]),t._v("指定请求和响应遵循的缓存机制。在请求消息或响应消息中设置"),s("code",[t._v("Cache-Control")]),t._v("并不会修改另一个消息处理过程中的缓存处理过程。")]),t._v(" "),s("ul",[s("li",[t._v("no-cache：指示请求或响应消息不能使用强缓存")]),t._v(" "),s("li",[t._v("no-store：用于防止重要的信息被无意的发布。在请求消息中发送将使得请求和响应消息都不使用缓存。")]),t._v(" "),s("li",[t._v("must-revalidate：告诉浏览器、缓存服务器，本地副本过期前，可以使用本地副本；本地副本一旦过期，必须去源服务器进行有效性校验。")])]),t._v(" "),s("h2",{attrs:{id:"参考文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=229605",target:"_blank",rel:"noopener noreferrer"}},[t._v("chromium issues"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/WebKit/webkit/blob/0fce2cb9b2fd61f9f249f09a14b40ac163ab16c6/Source/WebCore/history/PageCache.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webkit中bfcache相关逻辑"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/LeuisKen/leuisken.github.io/issues/6",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器往返缓存（Back/Forward cache）问题的分析与解决"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developers.google.com/web/updates/2019/02/back-forward-cache",target:"_blank",rel:"noopener noreferrer"}},[t._v("back-forward-cache"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"http://back-forward-cache-tester.glitch.me",target:"_blank",rel:"noopener noreferrer"}},[t._v("BFCache测试地址"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://webkit.org/blog/516/webkit-page-cache-ii-the-unload-event/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webkit page cache"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);