webpackJsonp([1],{"4Lha":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),s=n.n(i),o=n("NYxO"),c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"center-wrap"},[n("div",{staticClass:"logo"},[t._v("blog")]),t._v(" "),n("div",{staticClass:"btns"},[n("Button",{staticClass:"active",attrs:{type:"text"},on:{click:function(e){return t.jumpPage("/article")}}},[n("Icon",{staticClass:"icons",attrs:{type:"md-book"}}),t._v("文章")],1),t._v(" "),n("Button",{attrs:{type:"text"},on:{click:function(e){return t.jumpPage("/about")}}},[n("Icon",{staticClass:"icons",attrs:{type:"ios-chatbubbles-outline"}}),t._v("关于")],1)],1),t._v(" "),n("div",{staticClass:"search-input"},[n("Input",{attrs:{placeholder:"请输入搜索内容"},model:{value:t.searchVal,callback:function(e){t.searchVal=e},expression:"searchVal"}},[n("Icon",{attrs:{slot:"prefix",type:"ios-search"},slot:"prefix"})],1)],1)])])},staticRenderFns:[]};var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"copy-right"},[e("p",[this._v("www.lokiblog.com - 洋博客 Copyright© Author时东洋 851051279@qq.com")]),this._v(" "),e("p",[this._v("浙ICP备19028749")])])])}]};var a={name:"home",components:{homeHeader:n("VU/8")({name:"homeheader",data:function(){return{searchVal:""}},created:function(){},methods:{jumpPage:function(t){this.$router.push({path:t})}}},c,!1,function(t){n("L+Ti")},null,null).exports,homeFooter:n("VU/8")({name:"homefooter"},r,!1,function(t){n("eoXD")},null,null).exports},data:function(){return{clientHeight:null,clientWidth:null,userInfo:{}}},computed:{},watch:{$route:{handler:function(t,e){this.measure()},deep:!0}},created:function(){},mounted:function(){var t=this;this.measure(),window.addEventListener("resize",function(){t.measure()},!1)},methods:s()({},Object(o.b)(["setClientHeight","setClientWidth"]),{measure:function(){var t=this;this.$nextTick(function(){t.clientHeight=document.documentElement.clientHeight,t.clientWidth=document.documentElement.clientWidth,t.setClientHeight(t.clientHeight),t.setClientWidth(t.clientWidth)})}}),destroyed:function(){window.removeEventListener("resize",this.measure(),!1)}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"content"},[e("home-header"),this._v(" "),e("router-view"),this._v(" "),e("home-footer")],1)},staticRenderFns:[]};var u=n("VU/8")(a,l,!1,function(t){n("LjDk")},null,null);e.default=u.exports},"L+Ti":function(t,e){},LjDk:function(t,e){},eoXD:function(t,e){}});