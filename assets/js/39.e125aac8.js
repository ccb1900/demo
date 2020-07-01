(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{415:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"爱奇艺网络协程编写高并发应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#爱奇艺网络协程编写高并发应用"}},[t._v("#")]),t._v(" 爱奇艺网络协程编写高并发应用")]),t._v(" "),a("p",[t._v("原文链接："),a("a",{attrs:{href:"https://www.infoq.cn/article/BOu7GVc9kP7CWkYP58jo",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.infoq.cn/article/BOu7GVc9kP7CWkYP58jo"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("旧时代是多线程或者多进程的方式采用阻塞通信的方式。如果某个进程或者线程耗时，将一直占用，\n浪费了操作系统的资源。")]),t._v(" "),a("p",[t._v("非阻塞式服务器应运而生。但是代码不好写。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://swtch.com/libtask/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://swtch.com/libtask/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("使网络IO协程化，使高性能网络编程变得简单。")]),t._v(" "),a("p",[t._v("使用多路复用API，将网路IO事件注册到事件处理器中。")]),t._v(" "),a("p",[t._v("设置读写事件。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"readable"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"事件处理完毕"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"writeable"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"事件处理完毕"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("当套接字可读或者可写时，事件引擎设置套接字对应的状态并返回给调用者。")]),t._v(" "),a("p",[t._v("事件循环，检查套接字是否可读或者可写。")]),t._v(" "),a("h2",{attrs:{id:"几个概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#几个概念"}},[t._v("#")]),t._v(" 几个概念")]),t._v(" "),a("ul",[a("li",[t._v("最小调度单元")]),t._v(" "),a("li",[t._v("上下文切换")]),t._v(" "),a("li",[t._v("并行与网络并发。并行受限于cpu核心数量。")])]),t._v(" "),a("p",[t._v("cpu 无法感知协程，在线程中有许多的协程。")]),t._v(" "),a("ul",[a("li",[t._v("协程创建")]),t._v(" "),a("li",[t._v("协程就绪")]),t._v(" "),a("li",[t._v("协程挂起")]),t._v(" "),a("li",[t._v("协程运行")]),t._v(" "),a("li",[t._v("协程退出")])]),t._v(" "),a("p",[t._v("切换方式")]),t._v(" "),a("ul",[a("li",[t._v("星形状切换")]),t._v(" "),a("li",[t._v("环形切换，减少了一次切换到调度器的过程")])])])}),[],!1,null,null,null);s.default=e.exports}}]);