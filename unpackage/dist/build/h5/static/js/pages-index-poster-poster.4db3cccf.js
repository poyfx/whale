(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-poster-poster"],{"027e":function(t,e,n){t.exports=n.p+"static/img/W3.3eea0a58.png"},"06ce":function(t,e,n){t.exports=n.p+"static/img/jing3.47e66cab.png"},"0e35":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */#Rcvs[data-v-48ace66f]{position:absolute;width:375px;height:603px;top:%?-99999899?%;left:%?-99999899?%;z-index:9999}.poster[data-v-48ace66f]{width:100%;height:100vh;position:relative}.poster #cvs[data-v-48ace66f]{position:absolute;width:%?750?%;height:100%;top:%?-99999899?%;left:%?-99999899?%;z-index:9999}.poster .poster_content[data-v-48ace66f]{width:100%;height:90vh;position:relative;padding:30px 40px 0;box-sizing:border-box;top:10vh;left:0}.poster .poster_content .text_content[data-v-48ace66f]{width:100%;position:absolute;top:-2vh;left:0}.poster .poster_content .text_content uni-image[data-v-48ace66f]{position:absolute;top:-8vh;left:50%;margin-left:-160px}.poster .poster_content .poster_text[data-v-48ace66f]{height:20vh;position:absolute;top:30vh;right:10px}.poster .poster_content .poster_text uni-image[data-v-48ace66f]{width:82px;height:85px}.poster .poster_content .poster_img[data-v-48ace66f]{height:70vh;position:relative;top:0;left:0}.poster .poster_content .poster_img uni-image[data-v-48ace66f]{position:absolute;bottom:1%;left:50%;margin-left:-112px;width:225px;height:341px}.poster .poster_content .poster_btn[data-v-48ace66f]{width:100%;-webkit-justify-content:space-around;justify-content:space-around;position:relative;top:10px;left:0}.poster .poster_content .poster_btn uni-view[data-v-48ace66f]{text-align:center;width:50%}.poster .poster_content .poster_btn uni-view uni-image[data-v-48ace66f]{width:100px;height:40px}.poster .share_success[data-v-48ace66f]{width:100%;height:100vh;position:fixed;top:0;left:0;background:rgba(0,0,0,.3)}.poster .share_success .suss_img[data-v-48ace66f]{position:absolute;top:50%;left:50%;margin:-120px 0 0 -134px}.poster .share_success .suss_img uni-image[data-v-48ace66f]{width:279px}.poster .share_success .suss_back[data-v-48ace66f]{position:absolute;bottom:0;right:20px}.poster .share_success .suss_back uni-image[data-v-48ace66f]{width:68px;height:48px}',""])},"18df":function(t,e,n){t.exports=n.p+"static/img/W2.ac63b87a.png"},"38c8":function(t,e,n){"use strict";n.r(e);var a=n("d995"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},3937:function(t,e,n){"use strict";var a=n("d4f3"),i=n.n(a);i.a},"451b":function(t,e,n){t.exports=n.p+"static/img/W1.54f88a1f.png"},"8e67":function(t,e,n){t.exports=n.p+"static/img/jing2.3b8df098.png"},"958a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n("c1f8");var a=uni.getStorageSync("Token"),i="http://api.whale.act.go-tech.cn/",o={uploadPoster:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.code,n=t.photo,o=t.success,s=t.fail,c=t.complete;uni.uploadFile({url:i+"app/graph/graph_save",filePath:n,name:"file",formData:{code:e},header:{Token:a},success:function(t){o&&o(t)},fail:function(t){s&&s(t)},complete:function(t){c&&c(t)}})},uploadPosterRink:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.code,n=t.photo,o=t.success,s=t.fail,c=t.complete;uni.uploadFile({url:i+"app/graph/rank_graph_save",filePath:n,name:"file",formData:{code:e},header:{Token:a},success:function(t){o&&o(t)},fail:function(t){s&&s(t)},complete:function(t){c&&c(t)}})}};e.default=o},"9db5":function(t,e,n){t.exports=n.p+"static/img/jing1.98c50e5f.png"},ba88:function(t,e,n){"use strict";n.r(e);var a=n("cd7a"),i=n("38c8");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("3937");var s,c=n("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"48ace66f",null,!1,a["a"],s);e["default"]=r.exports},cd7a:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"poster"},[n("v-uni-view",{staticClass:"content_img"},[n("v-uni-image",{attrs:{src:t.poster,mode:""}})],1),n("v-uni-canvas",{attrs:{"canvas-id":"myCanvas",id:"cvs"}}),n("v-uni-canvas",{attrs:{"canvas-id":"RmyCanvas",id:"Rcvs",width:"375",height:"603"}}),n("v-uni-view",{staticClass:"poster_content"},[n("v-uni-view",{staticClass:"text_content"},[n("v-uni-image",{attrs:{src:t.w,mode:"aspectFit"}})],1),n("v-uni-view",{staticClass:"poster_text"},[n("v-uni-image",{attrs:{src:t.jing,mode:"aspectFit"}})],1),n("v-uni-view",{staticClass:"poster_img"},[n("v-uni-image",{attrs:{src:t.url,mode:"aspectFit"}})],1),n("v-uni-view",{staticClass:"poster_btn flex"},[n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goback.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:"../../../static/img/back_again.png",mode:"aspectFit"}})],1),n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyFn.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:"../../../static/img/generate_poster.png",mode:"aspectFit"}})],1)],1)],1),n("v-uni-view",{staticStyle:{position:"absolute",top:"5px",right:"5px"}},[n("music",{attrs:{pause:t.pause}})],1)],1)},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},d4f3:function(t,e,n){var a=n("0e35");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("00ae6712",a,!0,{sourceMap:!1,shadowMode:!1})},d995:function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("34ef"),n("28a5");var i=a(n("958a")),o=a(n("efe9")),s=a(n("451b")),c=a(n("18df")),r=a(n("027e")),u=a(n("9db5")),p=a(n("8e67")),d=a(n("06ce")),l=a(n("2ced")),f={components:{music:l.default},data:function(){return{share:!1,url:"",poster:o.default,w:"",jing:"",code:"",pause:""}},onLoad:function(t){this.pause=this.music.paused,uni.showToast({title:"载入中...",icon:"none",duration:3e3}),1==t.poster||2==t.poster||3==t.poster||4==t.poster||5==t.poster?(this.w=s.default,this.jing=u.default):6==t.poster||7==t.poster||8==t.poster||9==t.poster?(this.w=c.default,this.jing=p.default):10!=t.poster&&11!=t.poster&&12!=t.poster&&13!=t.poster||(this.w=r.default,this.jing=d.default),this.code=t.code,this.getPoster()},onReady:function(){uni.hideToast()},methods:{getPoster:function(){try{var t=uni.getStorageSync("man");t&&(this.url=t)}catch(e){}},goback:function(){uni.navigateBack({delta:1})},copyFn:function(){this.copyFnLook()},copyFnLook:function(){var t,e,n=this,a=uni.createSelectorQuery().in(this);a.select("#cvs").boundingClientRect(function(a){t=a.width,e=a.height,console.log(a);var s=uni.createCanvasContext("myCanvas");console.log(e+"_____________________10"+t),s.drawImage(o.default,0,0,t,e),s.drawImage(n.url,t/2-110,e-430,225,341),s.drawImage(n.w,t/2-150,60,298,112),s.drawImage(n.jing,t-92,260,82,85),s.setFillStyle("#000"),s.setTextAlign("center"),s.draw(),uni.showLoading({mask:!0,title:"图片生成中"}),setTimeout(function(){uni.canvasToTempFilePath({canvasId:"myCanvas",success:function(t){i.default.uploadPoster({code:n.code,photo:t.tempFilePath,success:function(t){if(200==t.statusCode){var e=JSON.parse(t.data);0==e.code?(uni.setStorage({key:"poster",data:e.whaleGraph.photo}),uni.setStorage({key:"graphId",data:e.whaleGraph.id}),n.copyFnRank()):uni.showToast({title:e.msg,icon:"none",duration:3e3})}},fail:function(t){console.log(t),uni.hideLoading(),uni.showToast({title:"生成图片超时，请检查网络环境",icon:"none",duration:3e3})},complete:function(t){console.log(t)}})}})},1200)}).exec()},copyFnRank:function(){var t=this;uni.hideLoading(),uni.showLoading({mask:!0,title:"海报上传中"});var e=uni.createSelectorQuery().in(this);e.select("#Rcvs").boundingClientRect(function(e){e.width,e.height,console.log(e);var n=uni.createCanvasContext("RmyCanvas");n.drawImage(o.default,0,0,375,603),n.drawImage(t.url,77.5,165,216,350),n.drawImage(t.w,37.5,60,298,112),n.drawImage(t.jing,283,260,82,85),n.setFillStyle("#000"),n.setTextAlign("center"),n.draw(),setTimeout(function(){uni.canvasToTempFilePath({canvasId:"RmyCanvas",success:function(e){i.default.uploadPosterRink({code:t.code,photo:e.tempFilePath,success:function(e){uni.hideLoading(),uni.showToast({title:"海报生成成功",duration:3e3,success:function(){t.$router.push({name:"sharePoster",params:{havePoster:!1}})}})},fail:function(t){console.log(t),uni.hideLoading(),uni.showToast({title:"上传超时，请检查网络环境",icon:"none",duration:3e3})},complete:function(t){console.log(t)}})}})},1200)}).exec()},getblob:function(t){for(var e=atob(t.split(",")[1]),n=t.split(",")[0].split(":")[1].split(";")[0],a=new ArrayBuffer(e.length),i=new Uint8Array(a),o=0;o<e.length;o++)i[o]=e.charCodeAt(o);return new Blob([a],{type:n})}}};e.default=f},efe9:function(t,e,n){t.exports=n.p+"static/img/poster.0b80f2e9.png"}}]);