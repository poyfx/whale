<template>
	<view @>
		<view class="" @tap="go" style="font-size: 4rem;"> 
			点击登录
		</view>
		<view class="">
			<navigator url="index" style="font-size: 4rem;">去首页</navigator>
		</view>
	</view>
	
</template>
<script>
	import {
		mapActionsindex
	} from 'vuex'
	import loginServer from '@/api/login.js'
	export default {
		data(){
			return {
				url:''
			}
		},
		methods: {
			go() {
				this.url ='http://' + window.location.host +'/#/pages/index/login'
				loginServer.getWXLogin({
					urls: this.url,
					success: (res) => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							window.location.href = res.data.oAuthUrl
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: 'none',
								position: 'bottom',
								duration: 2000
							})
						}
					},
					fail: err => {
						console.log(err)
					},
					complete: resc => {
						console.log(resc)
					}
				})
			},
		}
	}
</script>
