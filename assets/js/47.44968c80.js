(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{424:function(t,e,a){"use strict";a.r(e);var r=a(43),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"reactor-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reactor-模式"}},[t._v("#")]),t._v(" Reactor 模式")]),t._v(" "),a("p",[t._v("此模式是事件驱动架构之一，侧重于如何处理事件。")]),t._v(" "),a("h2",{attrs:{id:"事件类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件类型"}},[t._v("#")]),t._v(" 事件类型")]),t._v(" "),a("p",[t._v("服务器程序通常需要处理三类事件：")]),t._v(" "),a("ul",[a("li",[t._v("IO事件")]),t._v(" "),a("li",[t._v("定时事件")]),t._v(" "),a("li",[t._v("信号事件")])]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("Reactor 要求主线程（IO处理单元）只负责监听文件描述符上是否有事件发生，有的话就立刻将事件通知工作线程。\n除此之外，主线程不做其他任何实质性的工作。\n读写数据，接受新的连接，以及处理客户请求均在工作线程中完成。")]),t._v(" "),a("p",[t._v("使用同步IO模型实现Reactor模式的工作流程是：")]),t._v(" "),a("ol",[a("li",[t._v("主线程往epoll内核事件表注册 "),a("code",[t._v("socket")]),t._v(" 上的读就绪事件。")]),t._v(" "),a("li",[t._v("主线程调用epoll_wait等待 "),a("code",[t._v("socket")]),t._v(" 上有数据可读。")]),t._v(" "),a("li",[t._v("当socket上有数据可读时， "),a("code",[t._v("epoll_wait")]),t._v(" 通知主线程。主线程则将socket可读事件放入请求队列。")]),t._v(" "),a("li",[t._v("睡眠在请求队列上的某个工作线程被唤醒，它从 "),a("code",[t._v("socket")]),t._v(" 读取数据，并处理客户请求，然后往 "),a("code",[t._v("epoll 内核事件表")]),t._v(" 注册该 "),a("code",[t._v("socket")]),t._v(" 的写就绪事件。")]),t._v(" "),a("li",[t._v("主线程调用 · 等待 "),a("code",[t._v("socket")]),t._v(" 可写。")]),t._v(" "),a("li",[t._v("当socket可写时，epoll_wait通知主线程。主线程将可写事件放入请求队列。")]),t._v(" "),a("li",[t._v("睡眠在请求队列上的某个工作线程被唤醒，它往socket上写入服务器处理客户请求的结果。")])]),t._v(" "),a("h2",{attrs:{id:"组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[t._v("#")]),t._v(" 组件")]),t._v(" "),a("h2",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("h2",{attrs:{id:"局限性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#局限性"}},[t._v("#")]),t._v(" 局限性")]),t._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Reactor_pattern",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://en.wikipedia.org/wiki/Reactor_pattern"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://java-design-patterns.com/patterns/reactor/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://java-design-patterns.com/patterns/reactor/"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=_.exports}}]);