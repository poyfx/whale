import Vue from 'vue'
import App from './App'
import Router from 'uni-simple-router'
import 'common/css/base.css'
import store from './store/index.js'
Vue.config.productionTip = false
import titles from './components/title.vue'
Vue.component('titles', titles)
import wx from 'jweixin-module'
import uniIcons from "./components/uni-icons/uni-icons.vue"
Vue.component('uniIcons', uniIcons)
import uniPopup from "./components/uni-popup/uni-popup.vue"
Vue.component('uniPopup', uniPopup)


Vue.prototype.$store = store
Vue.prototype.wx = wx



        var music = null;
	
        music = uni.createInnerAudioContext(); //创建播放器对象
        music.src= "../static/mus/hovie.mp3"; //选择播放的音频
		music.autoplay = true;
        music.play(); //执行播放
		music.loop = true;
		Vue.prototype.music = music


Vue.use(Router)
const router = new Router({
	routes: [{
			"path": "/pages/index/index",
			"name": 'index',
			"meta": {
				"title": "小鲸灵首页",
				"needToken": true,
			}
		},
		{
			"path": "/pages/index/login",
			"name": 'login',
			"meta": {
				"title": "登录跳转",
				"needToken": false,
			}
		},
		{
			"path": "/pages/index/content",
			"name": 'content',
			"meta": {
				"title": "模拟入口",
				"needToken": false,
			}
		},
		{
			"path": "/pages/index/start/start",
			"name": 'start',
			"meta": {
				"title": "游戏说明",
				"needToken": true,
			}
		},
		{
			"path": "/pages/index/make/make",
			"name": 'make',
			"meta": {
				"title": "制作海报",
				"needToken": true,
			}
		},
		{
			"path": "/pages/index/explain/explain",
			"name": 'explain',
			"meta": {
				"title": "游戏说明",
				"needToken": true,
			}
		},
		{
			"path": "/pages/index/poster/poster",
			"name": 'poster',
			"meta": {
				"title": "海报页",
				"needToken": true,
			}
		},
		{
			"path": "/pages/index/poster/sharePoster",
			"name": 'sharePoster',
			"meta": {
				"title": "分享海报页",
				"needToken": true,
			}
		},
		{
			"path": "/pages/index/prize/prize",
			"name": 'prize',
			"meta": {
				"title": "抽奖",
				"needToken": true,
			}
		},
		{
			"path": "/pages/index/prize/prizeRule",
			"name": 'prizeRule',
			"meta": {
				"title": "抽奖规则",
				"needToken": true,
			}
		},
		{
			"path": "/pages/index/userinfo/userinfo",
			"name": 'userinfo',
			"meta": {
				"title": "用户信息",
				"needToken": true,
			}
		},
		{
			"path": "/pages/index/assistance/assistance",
			"name": 'assistance',
			"meta": {
				"title": "助力",
				"needToken": true,
			}
		},
		{
			"path": "/pages/index/ranking/ranking",
			"name": 'ranking',
			"meta": {
				"title": "排行榜",
				"needToken": true,
			}
		},
	]
})



const turnTo = (to, next) => {

	if (to.meta.needToken && !store.state.Token) {
		// console.log(window.location.href.indexOf('graphId'))
		if (window.location.href.indexOf('graphId') != -1) {
			uni.setStorageSync('query', window.location.href)
		}

		uni.setStorageSync('nextURL', to)
		next({
			name: 'login',
		})
	} else {
		next()
	}
}

router.beforeEach((to, from, next) => {

	if (store.state.hasLogin) {
		next()
	} else {
		turnTo(to, next);
	}

})

setTimeout(function(){
	console.log(store.state.appId)
	wx.config({
		debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		appId: store.state.appId, // 必填，公众号的唯一标识
		timestamp: store.state.timestamp, // 必填，生成签名的时间戳
		nonceStr: store.state.nonceStr, // 必填，生成签名的随机串
		signature: store.state.signature, // 必填，签名
		jsApiList: ['updateTimelineShareData', 'onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
	});
	
	
	const urls = 'http://' + window.location.host;
	
	wx.onMenuShareTimeline({
		title: '速来PICK你的长安汽车蓝小鲸形象，超多鲸喜大奖等你抽取！', // 分享标题
		link: urls + '/#/pages/index/index', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		imgUrl: 'http://whale.act.go-tech.cn/public/static/share.jpg', // 分享图标
		success: function() {
			// 设置成功
			console.log('success')
		}
	})
	wx.onMenuShareAppMessage({
		title: '速来PICK你的长安汽车蓝小鲸形象，超多鲸喜大奖等你抽取！', // 分享标题
		desc: '搭配定制你喜欢的蓝小鲸形象,成为蓝小鲸制作人！', // 分享描述
		link: urls + '/#/pages/index/index', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		imgUrl: 'http://whale.act.go-tech.cn/public/static/share.jpg', // 分享图标
		type: 'link', // 分享类型,music、video或link，不填默认为link
		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		success: function() {
			// 用户点击了分享后执行的回调函数
			// 设置成功
			console.log('分享成功');
		}
	});
	
},2000)



App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
