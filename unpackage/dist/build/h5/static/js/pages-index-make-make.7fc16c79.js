(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-make-make"],{"0511":function(t,e,i){"use strict";var s,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"make"},[i("v-uni-view",{staticClass:"content_img"},[i("v-uni-image",{attrs:{src:"../../../static/img/choose_bg.jpg",mode:""}})],1),i("v-uni-view",{staticClass:"make_content"},[i("v-uni-canvas",{attrs:{"canvas-id":"myCanvas",id:"cvs",width:"400",height:"603"}}),i("v-uni-view",{staticClass:"content_img"},[i("v-uni-view",{staticClass:"accessories"},[i("v-uni-image",{attrs:{src:t.startList.accessoriesSrc,mode:"aspectFit"}})],1),i("v-uni-view",{staticClass:"head"},[i("v-uni-image",{attrs:{src:t.startList.headSrc,mode:"aspectFit"}})],1),i("v-uni-view",{staticClass:"foot"},[i("v-uni-image",{attrs:{src:t.startList.footSrc,mode:"aspectFit"}})],1),i("v-uni-view",{staticClass:"complete",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyFn.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"../../../static/img/complete.png",mode:"aspectFit"}})],1)],1),i("v-uni-view",{staticClass:"content_btn flex"},[i("v-uni-view",{class:t.headshow?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showheadList.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"../../../static/img/accessories1.png",mode:"aspectFit"}})],1),i("v-uni-view",{class:t.bodyshow?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showFootList.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"../../../static/img/accessories2.png",mode:"aspectFit"}})],1),i("v-uni-view",{class:t.accessoriesshow?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showaccessoriesList.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"../../../static/img/accessories3.png",mode:"aspectFit"}})],1)],1),i("v-uni-view",{staticClass:"scrol_bg"},[i("v-uni-scroll-view",{directives:[{name:"show",rawName:"v-show",value:t.headshow,expression:"headshow"}],staticClass:"bookshelf-content",attrs:{"scroll-x":"true","scroll-left":"0"},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[t._l(t.headList,function(e,s){return i("v-uni-view",{key:s,staticClass:"item"},[i("v-uni-view",{staticClass:"img flex",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.chooseHatImg(e)}}},[i("v-uni-image",{attrs:{src:e.src,mode:"aspectFit"}})],1)],1)})],2),i("v-uni-scroll-view",{directives:[{name:"show",rawName:"v-show",value:t.bodyshow,expression:"bodyshow"}],staticClass:"bookshelf-content",attrs:{"scroll-x":"true","scroll-left":"0"},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[t._l(t.footList,function(e,s){return i("v-uni-view",{key:s,staticClass:"item"},[i("v-uni-view",{staticClass:"img flex",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.chooseHatImg(e)}}},[i("v-uni-image",{attrs:{src:e.src,mode:"aspectFit"}})],1)],1)})],2),i("v-uni-scroll-view",{directives:[{name:"show",rawName:"v-show",value:t.accessoriesshow,expression:"accessoriesshow"}],staticClass:"bookshelf-content",attrs:{"scroll-x":"true","scroll-left":"0"},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[t._l(t.accessoriesshowList,function(e,s){return i("v-uni-view",{key:s,staticClass:"item"},[i("v-uni-view",{staticClass:"img flex",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.chooseHatImg(e)}}},[i("v-uni-image",{attrs:{src:e.src,mode:"aspectFit"}})],1)],1)})],2),i("v-uni-view",{staticClass:"next"},[i("v-uni-image",{attrs:{src:"../../../static/img/right.gif",mode:"aspectFit"}})],1)],1)],1),i("v-uni-view",{staticClass:"fish"},[i("v-uni-image",{attrs:{src:"../../../static/img/yun.gif",mode:"aspectFit"}})],1),i("v-uni-view",{staticStyle:{position:"absolute",top:"5px",left:"5px"}},[i("music",{attrs:{pause:t.pause}})],1)],1)},n=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return n}),i.d(e,"a",function(){return s})},"1a1b":function(t,e,i){"use strict";i.r(e);var s=i("0511"),a=i("7734");for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);i("c70e");var o,c=i("f0c5"),r=Object(c["a"])(a["default"],s["b"],s["c"],!1,null,"36c459b2",null,!1,s["a"],o);e["default"]=r.exports},"4fea":function(t,e,i){var s=i("f197");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("6e2b0f17",s,!0,{sourceMap:!1,shadowMode:!1})},7734:function(t,e,i){"use strict";i.r(e);var s=i("ca89"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);e["default"]=a.a},"958a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i("c1f8");var s=uni.getStorageSync("Token"),a="http://api.whale.act.go-tech.cn/",n={uploadPoster:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.code,i=t.photo,n=t.success,o=t.fail,c=t.complete;uni.uploadFile({url:a+"app/graph/graph_save",filePath:i,name:"file",formData:{code:e},header:{Token:s},success:function(t){n&&n(t)},fail:function(t){o&&o(t)},complete:function(t){c&&c(t)}})},uploadPosterRink:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.code,i=t.photo,n=t.success,o=t.fail,c=t.complete;uni.uploadFile({url:a+"app/graph/rank_graph_save",filePath:i,name:"file",formData:{code:e},header:{Token:s},success:function(t){n&&n(t)},fail:function(t){o&&o(t)},complete:function(t){c&&c(t)}})}};e.default=n},c70e:function(t,e,i){"use strict";var s=i("4fea"),a=i.n(s);a.a},ca89:function(t,e,i){"use strict";var s=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("34ef"),i("28a5");s(i("958a"));var a=s(i("2ced")),n={components:{music:a.default},data:function(){return{startList:{headSrc:"../../../static/img/head2.png",footSrc:"../../../static/img/body2.png",accessoriesSrc:""},headList:[{src:"../../../static/img/head1.png",value:"基础形象帽子",id:1},{src:"../../../static/img/head2.png",value:"环保战士帽子",id:2},{src:"../../../static/img/head3.png",value:"基础形象帽子",id:3},{src:"../../../static/img/head4.png",value:"环保战士帽子",id:4},{src:"../../../static/img/head5.png",value:"基础形象帽子",id:5},{src:"../../../static/img/head6.png",value:"环保战士帽子",id:6},{src:"../../../static/img/head7.png",value:"环保战士帽子",id:7},{src:"../../../static/img/head8.png",value:"基础形象帽子",id:8},{src:"../../../static/img/head9.png",value:"环保战士帽子",id:9},{src:"../../../static/img/head10.png",value:"基础形象帽子",id:10}],footList:[{src:"../../../static/img/body1.png",value:"弓箭服饰",id:1},{src:"../../../static/img/body2.png",value:"长跑服饰",id:2},{src:"../../../static/img/body3.png",value:"弓箭服饰",id:3},{src:"../../../static/img/body4.png",value:"长跑服饰",id:4},{src:"../../../static/img/body5.png",value:"弓箭服饰",id:5},{src:"../../../static/img/body6.png",value:"长跑服饰",id:6},{src:"../../../static/img/body7.png",value:"长跑服饰",id:7},{src:"../../../static/img/body8.png",value:"弓箭服饰",id:8},{src:"../../../static/img/body9.png",value:"长跑服饰",id:9},{src:"../../../static/img/body10.png",value:"弓箭服饰",id:10},{src:"../../../static/img/body11.png",value:"长跑服饰",id:11},{src:"../../../static/img/body12.png",value:"弓箭服饰",id:12},{src:"../../../static/img/body13.png",value:"长跑服饰",id:13}],accessoriesshowList:[{src:"",value:"长跑服饰",id:0},{src:"../../../static/img/ass1.png",value:"弓箭服饰",id:1},{src:"../../../static/img/ass2.png",value:"长跑服饰",id:2},{src:"../../../static/img/ass3.png",value:"弓箭服饰",id:3},{src:"../../../static/img/ass4.png",value:"长跑服饰",id:4},{src:"../../../static/img/ass5.png",value:"弓箭服饰",id:5},{src:"../../../static/img/ass6.png",value:"长跑服饰",id:6},{src:"../../../static/img/ass7.png",value:"长跑服饰",id:7},{src:"../../../static/img/ass8.png",value:"弓箭服饰",id:8},{src:"../../../static/img/ass9.png",value:"长跑服饰",id:9},{src:"../../../static/img/ass10.png",value:"弓箭服饰",id:10},{src:"../../../static/img/ass11.png",value:"长跑服饰",id:11}],headshow:!0,bodyshow:!1,accessoriesshow:!1,poster:1,posterCode:[1,1,1],pause:""}},onLoad:function(){this.pause=this.music.paused},methods:{scroll:function(t){console.log(t)},copyFn:function(){var t,e=this,i=uni.createSelectorQuery().in(this);i.select("#cvs").boundingClientRect(function(i){i.width,t=i.height;var s=uni.createCanvasContext("myCanvas");console.log(t),s.drawImage(e.startList.footSrc,0,265,347,300),s.drawImage(e.startList.headSrc,40,0,286,281),s.drawImage(e.startList.accessoriesSrc,300,300,106,90),s.setFillStyle("#000"),s.setTextAlign("center"),s.draw(),uni.showLoading({mask:!0,title:"图片生成中"}),setTimeout(function(){uni.canvasToTempFilePath({canvasId:"myCanvas",success:function(t){uni.setStorage({key:"man",data:t.tempFilePath});var i=e.posterCode;uni.navigateTo({url:"../poster/poster?poster="+e.poster+"&code="+i})}}),uni.hideLoading()},1200)}).exec()},getblob:function(t){for(var e=atob(t.split(",")[1]),i=t.split(",")[0].split(":")[1].split(";")[0],s=new ArrayBuffer(e.length),a=new Uint8Array(s),n=0;n<e.length;n++)a[n]=e.charCodeAt(n);return new Blob([s],{type:i})},chooseHatImg:function(t){console.log(t.id),console.log(t.src),console.log(t),1==this.headshow?(this.startList.headSrc=t.src,this.posterCode.splice(0,1,t.id)):1==this.bodyshow?(this.startList.footSrc=t.src,this.poster=t.id,this.posterCode.splice(1,1,t.id)):(this.startList.accessoriesSrc=t.src,this.posterCode.splice(2,1,t.id))},showheadList:function(){this.headshow=!0,this.bodyshow=!1,this.accessoriesshow=!1},showFootList:function(){this.headshow=!1,this.bodyshow=!0,this.accessoriesshow=!1},showaccessoriesList:function(){this.headshow=!1,this.bodyshow=!1,this.accessoriesshow=!0},go:function(){}}};e.default=n},f197:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */#cvs[data-v-36c459b2]{position:absolute;width:400px;height:603px;top:%?-99999899?%;left:%?-99999899?%;z-index:9999}.fish[data-v-36c459b2]{width:100%}.fish uni-image[data-v-36c459b2]{position:absolute;top:0;left:0;width:100%}.make[data-v-36c459b2]{height:100vh;width:100%}.make .make_content[data-v-36c459b2]{width:100%;position:absolute;top:132px;left:0}.make .make_content .content_img[data-v-36c459b2]{position:relative;width:100%;height:50vh;top:30px}.make .make_content .content_img .head uni-image[data-v-36c459b2]{position:absolute;bottom:190px;left:48%;margin-left:-71px;margin-top:-98px;width:171px;height:167px;z-index:2}.make .make_content .content_img .foot uni-image[data-v-36c459b2]{position:absolute;bottom:50px;left:45%;margin-left:-64px;margin-top:-58px;width:170px;height:146px;z-index:1}.make .make_content .content_img .accessories uni-image[data-v-36c459b2]{position:absolute;bottom:127px;left:67%;width:46px;height:53px;z-index:4}.make .make_content .content_img .complete[data-v-36c459b2]{width:84px;height:70px;font-size:.8rem;position:absolute;text-align:center;font-weight:550;padding:3px;bottom:16px;right:14px}.make .make_content .content_btn[data-v-36c459b2]{margin-top:30px;height:10vh;-webkit-justify-content:space-around;justify-content:space-around;-webkit-align-content:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.make .make_content .content_btn uni-view[data-v-36c459b2]{width:60px;height:60px;border-radius:50%;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center}.make .make_content .content_btn uni-view uni-image[data-v-36c459b2]{width:48px;height:48px}.make .make_content .content_btn .active[data-v-36c459b2]{background-color:#fff}.make .make_content .scrol_bg[data-v-36c459b2]{width:310px;margin:20px auto 0;border-radius:8px;padding:5px 5px;box-sizing:border-box;background-color:#fff}.make .make_content .scrol_bg .bookshelf-content[data-v-36c459b2]{white-space:nowrap;width:300px;box-sizing:border-box}.make .make_content .scrol_bg .bookshelf-content .item[data-v-36c459b2]{width:12%;margin-right:15px;display:inline-block;vertical-align:top}.make .make_content .scrol_bg .bookshelf-content .item .img[data-v-36c459b2]{width:46px;height:31px;padding:20px 16px;display:inline-block;background-color:hsla(0,0%,100%,.5);border-radius:4px;border:1px dashed #85ddf7;position:relative}.make .make_content .scrol_bg .bookshelf-content .item .img uni-image[data-v-36c459b2]{width:30px;height:28px;border-radius:4px;position:absolute;top:50%;left:50%;margin:-14px 0 0 -15px}.make .make_content .scrol_bg .bookshelf-content .item .item-title[data-v-36c459b2]{display:block;width:90%;font-size:%?30?%;line-height:%?40?%}.make .make_content .scrol_bg .next[data-v-36c459b2]{position:absolute;bottom:12px;right:7px}.make .make_content .scrol_bg .next uni-image[data-v-36c459b2]{width:30px;height:30px}',""])}}]);