(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{557:function(t,a,r){"use strict";r.r(a);var e=r(65),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"js执行机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#js执行机制"}},[t._v("#")]),t._v(" JS执行机制")]),t._v(" "),r("p",[t._v("todo")]),t._v(" "),r("h2",{attrs:{id:"基础概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基础概念"}},[t._v("#")]),t._v(" 基础概念")]),t._v(" "),r("h3",{attrs:{id:"执行上下文-execute-context"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文-execute-context"}},[t._v("#")]),t._v(" 执行上下文（Execute Context）")]),t._v(" "),r("p",[t._v("简而言之，执行上下文就是当前 JavaScript 代码被解析和执行时所在环境的抽象概念， JavaScript 中运行任何的代码都是在执行上下文中运行。")]),t._v(" "),r("p",[t._v("执行上下文总共有三种类型：")]),t._v(" "),r("ul",[r("li",[t._v("全局执行上下文： 这是默认的、最基础的执行上下文。不在任何函数中的代码都位于全局执行上下文中。它做了两件事：1. 创建一个全局对象，在浏览器中这个全局对象就是 window 对象。2. 将 this 指针指向这个全局对象。一个程序中只能存在一个全局执行上下文。")]),t._v(" "),r("li",[t._v("函数执行上下文： 每次调用函数时，都会为该函数创建一个新的执行上下文。每个函数都拥有自己的执行上下文，但是只有在函数被调用的时候才会被创建。一个程序中可以存在任意数量的函数执行上下文。每当一个新的执行上下文被创建，它都会按照特定的顺序执行一系列步骤，具体过程将在本文后面讨论。")]),t._v(" "),r("li",[t._v("Eval 函数执行上下文： 运行在 eval 函数中的代码也获得了自己的执行上下文，但由于 Javascript 开发人员不常用 eval 函数，所以在这里不再讨论。")])]),t._v(" "),r("h3",{attrs:{id:"执行上下文栈-execute-context-stack"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文栈-execute-context-stack"}},[t._v("#")]),t._v(" 执行上下文栈（Execute Context Stack）")]),t._v(" "),r("p",[t._v("简称ECS，又称为调用栈（Callee Stack）。")]),t._v(" "),r("h2",{attrs:{id:"javascript执行流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascript执行流程"}},[t._v("#")]),t._v(" javascript执行流程")]),t._v(" "),r("h2",{attrs:{id:"javascript调用栈"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascript调用栈"}},[t._v("#")]),t._v(" JavaScript调用栈")]),t._v(" "),r("p",[t._v("又被称为执行上下文栈（Execution Context Stack），用于管理函数的执行上下文。")]),t._v(" "),r("h3",{attrs:{id:"创建执行上下文场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建执行上下文场景"}},[t._v("#")]),t._v(" 创建执行上下文场景")]),t._v(" "),r("h3",{attrs:{id:"调用栈执行过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#调用栈执行过程"}},[t._v("#")]),t._v(" 调用栈执行过程")]),t._v(" "),r("h3",{attrs:{id:"栈溢出"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#栈溢出"}},[t._v("#")]),t._v(" 栈溢出")]),t._v(" "),r("p",[t._v("调用栈是有大小限制的，当入栈的执行上下文超过一定数目 JavaScript 引擎就会报错，尤其在递归时很容易出现栈溢出，可以通过将递归调用改成其他形式，或使用定时器将任务拆解等方式来避免栈溢出。")]),t._v(" "),r("h2",{attrs:{id:"event-loop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-loop"}},[t._v("#")]),t._v(" Event Loop")]),t._v(" "),r("h3",{attrs:{id:"事件循环机制进一步补充"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事件循环机制进一步补充"}},[t._v("#")]),t._v(" 事件循环机制进一步补充")]),t._v(" "),r("h3",{attrs:{id:"单独说说定时器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#单独说说定时器"}},[t._v("#")]),t._v(" 单独说说定时器")]),t._v(" "),r("h3",{attrs:{id:"settimeout而不是setinterval"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#settimeout而不是setinterval"}},[t._v("#")]),t._v(" setTimeout而不是setInterval")]),t._v(" "),r("h3",{attrs:{id:"事件循环进阶-macrotask与microtask"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事件循环进阶-macrotask与microtask"}},[t._v("#")]),t._v(" 事件循环进阶：macrotask与microtask")]),t._v(" "),r("h3",{attrs:{id:"补充-使用mutationobserver实现microtask"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#补充-使用mutationobserver实现microtask"}},[t._v("#")]),t._v(" 补充：使用MutationObserver实现microtask")]),t._v(" "),r("h2",{attrs:{id:"参考文档"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://taligarsiel.com/Projects/howbrowserswork1.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("How browsers work"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://book.douban.com/subject/25910556/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebKit技术内幕"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/10/event-loop.html#comment-text",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 运行机制详解：再谈Event Loop"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/KMFF6bg3YspPVzjYbMsm0Q",target:"_blank",rel:"noopener noreferrer"}},[t._v("V8 执行 JavaScript 的过程"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.kancloud.cn/cyyspring/more/1843999",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript代码的执行"),r("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);