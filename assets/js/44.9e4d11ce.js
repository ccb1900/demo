(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{421:function(t,a,s){"use strict";s.r(a);var v=s(43),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"io-模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#io-模型"}},[t._v("#")]),t._v(" IO 模型")]),t._v(" "),s("p",[t._v("让进程干更多的事，充分利用cpu时间。")]),t._v(" "),s("h2",{attrs:{id:"同步io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步io"}},[t._v("#")]),t._v(" 同步IO")]),t._v(" "),s("p",[t._v("通知IO就绪事件（用户将数据在内核缓冲区和用户缓冲区之间的移动了）")]),t._v(" "),s("p",[t._v("IO的读写操作，都是在IO事件发生之后，由应用程序完成的。")]),t._v(" "),s("p",[t._v("读写过程的时间仍然需要应用程序花费。")]),t._v(" "),s("p",[t._v("包括 阻塞/非阻塞IO，IO复用，信号驱动。")]),t._v(" "),s("h3",{attrs:{id:"阻塞io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阻塞io"}},[t._v("#")]),t._v(" 阻塞IO")]),t._v(" "),s("p",[t._v("由于无法立刻完成，被所在进程将被系统挂起，后续代码无法执行，一直到等待的事件发生为止。")]),t._v(" "),s("p",[t._v("程序阻塞于读写函数。")]),t._v(" "),s("h3",{attrs:{id:"非阻塞io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非阻塞io"}},[t._v("#")]),t._v(" 非阻塞IO")]),t._v(" "),s("p",[t._v("无论事件是否已经发生，都会立刻返回。")]),t._v(" "),s("p",[t._v("因此通常需要和其他IO通知机制一起使用，比如IO复用和SIGIO信号。\n这样就可以做到应用程序不用等待事件发生，高效的利用cpu分配的时间。")]),t._v(" "),s("h3",{attrs:{id:"io复用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#io复用"}},[t._v("#")]),t._v(" IO复用")]),t._v(" "),s("p",[t._v("IO复用函数本身是阻塞的。阻塞在相关的系统调用。\n对IO本身的读写操作是非阻塞的。")]),t._v(" "),s("p",[t._v("提高效率的原因是IO复用具有同时监听多个事件的能力。")]),t._v(" "),s("p",[t._v("应用程序通过IO复用函数向内核注册一组事件，内核通过IO复用函数\n把其中就绪的事件通知给应用程序。")]),t._v(" "),s("h3",{attrs:{id:"信号驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#信号驱动"}},[t._v("#")]),t._v(" 信号驱动")]),t._v(" "),s("h2",{attrs:{id:"异步io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步io"}},[t._v("#")]),t._v(" 异步IO")]),t._v(" "),s("p",[t._v("通知IO完成事件。数据在内核缓冲区和用户缓冲区之间的移动是由内核完成的。\n没有阻塞过程。")]),t._v(" "),s("h3",{attrs:{id:"异步io-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步io-2"}},[t._v("#")]),t._v(" 异步IO")]),t._v(" "),s("p",[t._v("暂时未实现。")])])}),[],!1,null,null,null);a.default=_.exports}}]);