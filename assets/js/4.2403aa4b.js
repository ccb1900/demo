(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{309:function(t,e,n){},310:function(t,e,n){},328:function(t,e,n){"use strict";var r=n(309);n.n(r).a},329:function(t,e,n){"use strict";var r=n(310);n.n(r).a},330:function(t,e,n){"use strict";var r=n(5),i=n(3),a=n(95),o=n(11),s=n(7),u=n(17),c=n(315),p=n(46),l=n(1),h=n(30),f=n(67).f,g=n(25).f,d=n(8).f,v=n(311).trim,b=i.Number,m=b.prototype,_="Number"==u(h(m)),S=function(t){var e,n,r,i,a,o,s,u,c=p(t,!1);if("string"==typeof c&&c.length>2)if(43===(e=(c=v(c)).charCodeAt(0))||45===e){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(o=(a=c.slice(2)).length,s=0;s<o;s++)if((u=a.charCodeAt(s))<48||u>i)return NaN;return parseInt(a,r)}return+c};if(a("Number",!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var $,x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(_?l((function(){m.valueOf.call(n)})):"Number"!=u(n))?c(new b(S(e)),n,x):S(e)},y=r?f(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;y.length>N;N++)s(b,$=y[N])&&!s(x,$)&&d(x,$,g(b,$));x.prototype=m,m.constructor=x,o(i,"Number",x)}},331:function(t,e,n){var r=n(182),i=n(175),a=n(332),o=n(336);t.exports=function(t,e){if(null==t)return{};var n=r(o(t),(function(t){return[t]}));return e=i(e),a(t,n,(function(t,n){return e(t,n[0])}))}},332:function(t,e,n){var r=n(102),i=n(333),a=n(94);t.exports=function(t,e,n){for(var o=-1,s=e.length,u={};++o<s;){var c=e[o],p=r(t,c);n(p,c)&&i(u,a(c,t),p)}return u}},333:function(t,e,n){var r=n(334),i=n(94),a=n(100),o=n(66),s=n(47);t.exports=function(t,e,n,u){if(!o(t))return t;for(var c=-1,p=(e=i(e,t)).length,l=p-1,h=t;null!=h&&++c<p;){var f=s(e[c]),g=n;if(c!=l){var d=h[f];void 0===(g=u?u(d,f,h):void 0)&&(g=o(d)?d:a(e[c+1])?[]:{})}r(h,f,g),h=h[f]}return t}},334:function(t,e,n){var r=n(335),i=n(99),a=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var o=t[e];a.call(t,e)&&i(o,n)&&(void 0!==n||e in t)||r(t,e,n)}},335:function(t,e,n){var r=n(183);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},336:function(t,e,n){var r=n(176),i=n(337),a=n(339);t.exports=function(t){return r(t,a,i)}},337:function(t,e,n){var r=n(98),i=n(338),a=n(177),o=n(178),s=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,a(t)),t=i(t);return e}:o;t.exports=s},338:function(t,e,n){var r=n(181)(Object.getPrototypeOf,Object);t.exports=r},339:function(t,e,n){var r=n(179),i=n(340),a=n(101);t.exports=function(t){return a(t)?r(t,!0):i(t)}},340:function(t,e,n){var r=n(66),i=n(180),a=n(341),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return a(t);var e=i(t),n=[];for(var s in t)("constructor"!=s||!e&&o.call(t,s))&&n.push(s);return n}},341:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},345:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n(9);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(3).then(n.t.bind(null,382,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},i=(n(328),n(43)),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,o=(n(329),Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,n(330),n(69)),s=n.n(o),u=n(331),c=n.n(u),p={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return c()(this.$props,s.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}};Object(i.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},385:function(t,e,n){"use strict";n.r(e);var r=n(345),i=n(346),a=n(343),o=n(344),s=n(347),u={name:"Layout",components:{Home:i.a,Page:o.a,Pagination:r.a,Sidebar:s.a,Navbar:a.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return[]},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},c=n(43),p=Object(c.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("ul",{attrs:{id:"default-layout"}},t._l(t.$pagination.pages,(function(e){return n("li",[n("router-link",{staticClass:"page-link",attrs:{to:e.path}},[t._v(t._s(e.title))])],1)})),0),t._v(" "),t.$pagination.length>1?n("Pagination"):t._e()],1)],1)}),[],!1,null,null,null);e.default=p.exports}}]);