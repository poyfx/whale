(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-poster-sharePoster"],{"1ac8":function(t,e,a){var n=a("b29c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=a("4f06").default;s("babfecd6",n,!0,{sourceMap:!1,shadowMode:!1})},3038:function(t,e,a){"use strict";var n,s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"poster"},[a("v-uni-view",{staticClass:"content_img",class:t.showimg?"":"down",on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.showimg=!1}}},[a("v-uni-image",{staticStyle:{"z-index":"100"},attrs:{src:t.poster,mode:""}})],1),a("v-uni-view",{staticClass:"content_img"},[a("v-uni-image",{attrs:{src:t.poster,mode:""}})],1),a("v-uni-view",{staticClass:"poster_content"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.havePoster,expression:"!havePoster"}],staticClass:"share",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getshare.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"../../../static/img/share.png",mode:"aspectFit"}})],1),a("v-uni-view",{staticClass:"poster_btn flex"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.havePoster,expression:"!havePoster"}],on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.createDownload.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"../../../static/img/save.png",mode:"aspectFit"}})],1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.havePoster,expression:"havePoster"}],staticClass:"poster_btn flex"},[a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.have.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"../../../static/img/have.png",mode:"aspectFit"}})],1),a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookRanking.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"../../../static/img/look_ranking.png",mode:"aspectFit"}})],1)],1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.share,expression:"share"}],staticClass:"share_success"},[a("v-uni-view",{staticClass:"suss_img"},[a("v-uni-image",{attrs:{src:"../../../static/img/share_success.png",mode:"aspectFit"}}),a("v-uni-view",{staticClass:"img_btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gogame.apply(void 0,arguments)}}},[t._v("去抽奖")])],1),a("v-uni-view",{staticClass:"suss_back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.share=!1}}},[a("v-uni-image",{attrs:{src:"../../../static/img/w_back.png",mode:"aspectFit"}})],1)],1),a("v-uni-view",{staticStyle:{position:"absolute",top:"35px",left:"5px"}},[a("music",{attrs:{pause:t.pause}})],1)],1)},o=[];a.d(e,"b",function(){return s}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return n})},"8a3a":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("c1f8"),s={getRanking:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.success,a=t.fail,s=t.complete;n.http.post("app/graph/like_count",{},{success:function(t){e&&e(t)},fail:function(t){a&&a(t)},complete:function(t){s&&s(t)}})},userVote:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.graphId,a=t.success,s=t.fail,o=t.complete;n.http.get("app/graph/vote",{params:{graphId:e},success:function(t){a&&a(t)},fail:function(t){s&&s(t)},complete:function(t){o&&o(t)}})},getUserinfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.success,a=t.fail,s=t.complete;n.http.post("app/user/queryUserInfo",{},{success:function(t){e&&e(t)},fail:function(t){a&&a(t)},complete:function(t){s&&s(t)}})},getAllinfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.graphId,a=t.success,s=t.fail,o=t.complete;n.http.get("app/graph/query_graph",{params:{graphId:e},success:function(t){a&&a(t)},fail:function(t){s&&s(t)},complete:function(t){o&&o(t)}})}};e.default=s},"91ca":function(t,e,a){"use strict";a.r(e);var n=a("3038"),s=a("cbbc");for(var o in s)"default"!==o&&function(t){a.d(e,t,function(){return s[t]})}(o);a("cf18");var i,c=a("f0c5"),r=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,"29e6a65e",null,!1,n["a"],i);e["default"]=r.exports},"958a":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a("c1f8");var n=uni.getStorageSync("Token"),s="http://api.whale.act.go-tech.cn/",o={uploadPoster:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.code,a=t.photo,o=t.success,i=t.fail,c=t.complete;uni.uploadFile({url:s+"app/graph/graph_save",filePath:a,name:"file",formData:{code:e},header:{Token:n},success:function(t){o&&o(t)},fail:function(t){i&&i(t)},complete:function(t){c&&c(t)}})},uploadPosterRink:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.code,a=t.photo,o=t.success,i=t.fail,c=t.complete;uni.uploadFile({url:s+"app/graph/rank_graph_save",filePath:a,name:"file",formData:{code:e},header:{Token:n},success:function(t){o&&o(t)},fail:function(t){i&&i(t)},complete:function(t){c&&c(t)}})}};e.default=o},b29c:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.down[data-v-29e6a65e]{display:none}.poster[data-v-29e6a65e]{width:100%;height:100vh;position:relative}.poster #cvs[data-v-29e6a65e]{position:absolute;width:%?750?%;height:100vh;top:%?-99999899?%;left:%?-99999899?%;z-index:9999}.poster .poster_content[data-v-29e6a65e]{width:100%;height:100vh;position:relative;padding:30px 40px 0;box-sizing:border-box;top:0;left:0}.poster .poster_content .share[data-v-29e6a65e]{position:absolute;top:10px;right:10px}.poster .poster_content .share uni-image[data-v-29e6a65e]{width:100px;height:50px}.poster .poster_content .poster_text[data-v-29e6a65e]{height:20vh;position:relative}.poster .poster_content .poster_text uni-text[data-v-29e6a65e]{font-size:1.6rem;font-weight:550;font-style:italic;letter-spacing:4px;color:#fff;text-shadow:4px 3px 5px rgba(0,0,0,.3)}.poster .poster_content .poster_img[data-v-29e6a65e]{height:50vh;position:relative;top:0;left:0}.poster .poster_content .poster_img uni-image[data-v-29e6a65e]{position:absolute;bottom:5px;left:50%;margin-left:-75px;width:150px}.poster .poster_content .poster_btn[data-v-29e6a65e]{width:100%;-webkit-justify-content:space-around;justify-content:space-around;position:absolute;bottom:10px;left:0}.poster .poster_content .poster_btn uni-view[data-v-29e6a65e]{text-align:center;width:50%}.poster .poster_content .poster_btn uni-view uni-image[data-v-29e6a65e]{width:100px;height:40px}.poster .share_success[data-v-29e6a65e]{width:100%;height:100vh;position:fixed;top:0;left:0;background:rgba(0,0,0,.3)}.poster .share_success .suss_img[data-v-29e6a65e]{position:absolute;top:50%;left:50%;margin:-120px 0 0 -134px}.poster .share_success .suss_img .img_btn[data-v-29e6a65e]{width:100px;position:absolute;bottom:25px;left:50%;margin-left:-50px;font-size:1rem;background:#87ceeb;border-radius:8px;color:#fff;text-align:center;padding:3px 5px}.poster .share_success .suss_img uni-image[data-v-29e6a65e]{width:279px}.poster .share_success .suss_back[data-v-29e6a65e]{position:absolute;bottom:0;right:20px}.poster .share_success .suss_back uni-image[data-v-29e6a65e]{width:68px;height:48px}',""])},cbbc:function(t,e,a){"use strict";a.r(e);var n=a("d41e"),s=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=s.a},cf18:function(t,e,a){"use strict";var n=a("1ac8"),s=a.n(n);s.a},d41e:function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(a("958a"));var s=n(a("9939")),o=n(a("8a3a")),i=n(a("4b81")),c=n(a("2ced")),r={components:{music:c.default},data:function(){return{share:!1,poster:"",appId:"",timestamp:"",nonceStr:"",signature:"",havePoster:!1,graphId:0,pause:"",showimg:!1}},onLoad:function(){this.havePoster=this.$route.params.havePoster,this.getgraphId(),this.getPoster(),this.getWXInfo(),this.pause=this.music.paused},methods:{getgraphId:function(){try{var t=uni.getStorageSync("graphId");t&&(this.graphId=t)}catch(e){}},getWXInfo:function(){var t=this,e="http://"+window.location.host;s.default.handleShare({url:e,success:function(e){200==e.statusCode&&0==e.data.code&&(t.appId=e.data.appId,t.timestamp=e.data.timestamp,t.nonceStr=e.data.nonceStr,t.signature=e.data.signature,i.default.config({debug:!1,appId:e.data.appId,timestamp:e.data.timestamp,nonceStr:e.data.nonceStr,signature:e.data.signature,jsApiList:["updateTimelineShareData","onMenuShareTimeline","onMenuShareAppMessage"]}),t.getWXConfig())},fail:function(t){console.log(t)},complete:function(t){console.log(t)}})},getWXConfig:function(){var t=this;window.location.host;o.default.getUserinfo({success:function(e){console.log(e),200==e.statusCode&&0==e.data.code&&(uni.setStorage({key:"userInfo",data:e.data}),i.default.onMenuShareTimeline({title:"速来PICK你的长安汽车蓝小鲸形象，超多鲸喜大奖等你抽取！",link:"http://wx.go-tech.cn/redirect.html?url=http%3a%2f%2fwhale.act.go-tech.cn%2f%23%2fpages%2findex%2fassistance%2fassistance%3fgraphId%3d"+e.data.data.graphId,imgUrl:"http://whale.act.go-tech.cn/public/static/share.jpg",success:function(){console.log("分享成功"),console.log(e.data.data.graphId),t.share=!0}}),i.default.onMenuShareAppMessage({title:"速来PICK你的长安汽车蓝小鲸形象，超多鲸喜大奖等你抽取！",desc:"搭配定制你喜欢的蓝小鲸形象,成为蓝小鲸制作人！",link:"http://wx.go-tech.cn/redirect.html?url=http%3a%2f%2fwhale.act.go-tech.cn%2f%23%2fpages%2findex%2fassistance%2fassistance%3fgraphId%3d"+e.data.data.graphId,imgUrl:"http://whale.act.go-tech.cn/public/static/share.jpg",type:"link",dataUrl:"",success:function(){console.log("分享成功"),console.log(e.data.data.graphId),t.share=!0}}))},fail:function(t){console.log(t)},complete:function(t){console.log(t)}})},getPoster:function(){var t=this;if(o.default.getUserinfo({success:function(e){console.log(e),200==e.statusCode&&0==e.data.code&&(uni.setStorage({key:"userInfo",data:e.data}),t.graphId=e.data.data.graphId)},fail:function(t){console.log(t)},complete:function(t){console.log(t)}}),o.default.getAllinfo({graphId:this.graphId,success:function(e){console.log(e),t.poster=e.data.data.photo},fail:function(t){console.log(t)},complete:function(t){console.log(t)}}),this.havePoster);else try{var e=uni.getStorageSync("poster");e&&(this.poster=e)}catch(a){}},createDownload:function(){this.showimg=!0},getshare:function(){uni.showModal({title:"提示",content:"请点击右上角分享页面"})},have:function(){this.$router.push({name:"assistance",params:{graphId:this.graphId}})},lookRanking:function(){uni.navigateTo({url:"../ranking/ranking"})},gogame:function(){uni.navigateTo({url:"../prize/prize"})}}};e.default=r}}]);