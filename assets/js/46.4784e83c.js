(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{423:function(t,a,r){"use strict";r.r(a);var s=r(43),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"领导者-追随者模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#领导者-追随者模式"}},[t._v("#")]),t._v(" 领导者/追随者模式")]),t._v(" "),r("p",[t._v("此模式是并发处理模式之一，侧重于如何处理线程。")]),t._v(" "),r("p",[t._v("并发编程的目的是让程序同时执行多个任务，如果程序是计算密集的，并发编程并没有优势。\n反而由于任务的切换使效率降低。\n但如果程序是IO密集型的，比如经常读写文件，访问数据库，情况就不一样了。\n如果程序有多个执行线程，可以让当前所阻塞的执行线程主动放弃cpu，将执行权转移到其他cpu。\n这样就使cpu利用率显著提升。")]),t._v(" "),r("h2",{attrs:{id:"介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),r("p",[t._v("领导者只有一个，负责监听IO事件。\n其他线程都是追随者，休眠在线程池中等待成为新的领导者。当前的领导者如果检测到IO事件，首先需要从线程池中推选出新的\n领导者进程，然后处理IO事件。此时，新的领导者等待新的IO事件，而原来的领导者则处理IO事件。这就实现了并发。")]),t._v(" "),r("h2",{attrs:{id:"组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[t._v("#")]),t._v(" 组件")]),t._v(" "),r("p",[t._v("包括句柄集，线程集，事件处理器和具体的事件处理器。")]),t._v(" "),r("h3",{attrs:{id:"句柄集"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#句柄集"}},[t._v("#")]),t._v(" 句柄集")]),t._v(" "),r("p",[t._v("用于表示IO资源，在 linux下通常是一个文件描述符。")]),t._v(" "),r("h3",{attrs:{id:"线程集"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#线程集"}},[t._v("#")]),t._v(" 线程集")]),t._v(" "),r("p",[t._v("所有工作线程（包括领导者和追随者）的管理者。\n负责各线程之间的同步，以及新领导者线程的推选。\n线程在任一时间必然处于一下三种状态之一：")]),t._v(" "),r("ul",[r("li",[t._v("Leader")]),t._v(" "),r("li",[t._v("Processing")]),t._v(" "),r("li",[t._v("follower")])]),t._v(" "),r("h3",{attrs:{id:"事件处理器和具体事件处理器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事件处理器和具体事件处理器"}},[t._v("#")]),t._v(" 事件处理器和具体事件处理器")]),t._v(" "),r("h2",{attrs:{id:"缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")])])}),[],!1,null,null,null);a.default=e.exports}}]);