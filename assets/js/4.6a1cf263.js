(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{375:function(t,e,n){},376:function(t,e,n){},406:function(t,e,n){"use strict";n(375)},407:function(t,e,n){"use strict";n(376)},408:function(t,e,n){"use strict";var r=n(9),i=n(0),a=n(2),o=n(115),s=n(18),u=n(10),c=n(358),p=n(39),l=n(89),h=n(196),f=n(3),g=n(59).f,v=n(34).f,d=n(12).f,b=n(409),m=n(347).trim,_=i.Number,S=_.prototype,y=i.TypeError,x=a("".slice),$=a("".charCodeAt),O=function(t){var e=h(t,"number");return"bigint"==typeof e?e:N(e)},N=function(t){var e,n,r,i,a,o,s,u,c=h(t,"number");if(l(c))throw y("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=m(c),43===(e=$(c,0))||45===e){if(88===(n=$(c,2))||120===n)return NaN}else if(48===e){switch($(c,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(o=(a=x(c,2)).length,s=0;s<o;s++)if((u=$(a,s))<48||u>i)return NaN;return parseInt(a,r)}return+c};if(o("Number",!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var E,I=function(t){var e=arguments.length<1?0:_(O(t)),n=this;return p(S,n)&&f((function(){b(n)}))?c(Object(e),n,I):e},P=r?g(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;P.length>T;T++)u(_,E=P[T])&&!u(I,E)&&d(I,E,v(_,E));I.prototype=S,S.constructor=I,s(i,"Number",I)}},409:function(t,e,n){var r=n(2);t.exports=r(1..valueOf)},410:function(t,e,n){var r=n(210),i=n(202),a=n(411),o=n(415);t.exports=function(t,e){if(null==t)return{};var n=r(o(t),(function(t){return[t]}));return e=i(e),a(t,n,(function(t,n){return e(t,n[0])}))}},411:function(t,e,n){var r=n(127),i=n(412),a=n(117);t.exports=function(t,e,n){for(var o=-1,s=e.length,u={};++o<s;){var c=e[o],p=r(t,c);n(p,c)&&i(u,a(c,t),p)}return u}},412:function(t,e,n){var r=n(413),i=n(117),a=n(125),o=n(88),s=n(60);t.exports=function(t,e,n,u){if(!o(t))return t;for(var c=-1,p=(e=i(e,t)).length,l=p-1,h=t;null!=h&&++c<p;){var f=s(e[c]),g=n;if("__proto__"===f||"constructor"===f||"prototype"===f)return t;if(c!=l){var v=h[f];void 0===(g=u?u(v,f,h):void 0)&&(g=o(v)?v:a(e[c+1])?[]:{})}r(h,f,g),h=h[f]}return t}},413:function(t,e,n){var r=n(414),i=n(124),a=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var o=t[e];a.call(t,e)&&i(o,n)&&(void 0!==n||e in t)||r(t,e,n)}},414:function(t,e,n){var r=n(211);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},415:function(t,e,n){var r=n(203),i=n(416),a=n(418);t.exports=function(t){return r(t,a,i)}},416:function(t,e,n){var r=n(123),i=n(417),a=n(204),o=n(205),s=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,a(t)),t=i(t);return e}:o;t.exports=s},417:function(t,e,n){var r=n(208)(Object.getPrototypeOf,Object);t.exports=r},418:function(t,e,n){var r=n(206),i=n(419),a=n(126);t.exports=function(t){return a(t)?r(t,!0):i(t)}},419:function(t,e,n){var r=n(88),i=n(207),a=n(420),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return a(t);var e=i(t),n=[];for(var s in t)("constructor"!=s||!e&&o.call(t,s))&&n.push(s);return n}},420:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},428:function(t,e,n){"use strict";n.r(e);n(6),n(15),n(19);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(3).then(n.t.bind(null,427,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},i=(n(406),n(56)),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,o=(n(407),Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,n(408),n(92)),s=n.n(o),u=n(410),c=n.n(u),p={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return c()(this.$props,s.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},l=(Object(i.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports,n(351)),h=n(349),f=n(350),g=n(352),v={name:"Layout",components:{Home:l.a,Page:f.a,Pagination:a,Sidebar:g.a,Navbar:h.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return[]},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},d=Object(i.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("ul",{attrs:{id:"default-layout"}},t._l(t.$pagination.pages,(function(e){return n("li",[n("router-link",{staticClass:"page-link",attrs:{to:e.path}},[t._v(t._s(e.title))])],1)})),0),t._v(" "),t.$pagination.length>1?n("Pagination"):t._e()],1)],1)}),[],!1,null,null,null);e.default=d.exports}}]);