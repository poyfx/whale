<template>
	<view class="login bgcf">

		<view class="login_content ">
			<view class="login-img">
				登陆中...
			</view>
			<!-- <view class="login-btn" >
				<button type="primary" @tap="go">登录</button>
			</view> -->

		</view>
	</view>
</template>

<script>
	import loginServer from '@/api/login.js'

	import {
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				url: "", //需要切割的地址
				gourl: '', //需要跳转的地址
				token: '',
				urlHeader: "",
				seturl: '',
				urls: '',
				query: '',

			}
		},
		onLoad(option) {
			uni.removeStorageSync('Token');
			uni.removeStorageSync('userInfo');
			uni.removeStorageSync('graphId');
			uni.removeStorageSync('man');
			this.url = window.location.href
			console.log(this.url)
			if (this.url.indexOf('?token') != -1) {
				this.getURL()
			} else {
				this.go()
			}
			uni.showLoading({
				mask: true,
				title: '登陆中...',
			})

		},

		methods: {
			...mapActions(['getLogin', 'getWxInfo']),
			go() {
				this.urls = 'http://' + window.location.host + '/#/pages/index/login'
				loginServer.getWXLogin({
					urls: this.urls,
					success: (res) => {
						if (res.statusCode == 200 && res.data.code == 0) {
							window.location.href = res.data.oAuthUrl;

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
			getURL() {
				uni.getStorage({
					key: 'nextURL',
					success: (res) => {
						console.log(res)
						this.gourl = res.data.name;
						this.goRoute()
					}
				});



			},
			goRoute() {
				const num1 = this.url.indexOf("=")
				const num2 = this.url.indexOf("#")
				const num3 = this.url.indexOf('?')
				const remove = this.url.substring(num3, num2)
				this.token = this.url.substring(num1 + 1, num2);
				this.seturl = this.url.substring(num3, num2 + 1);
				this.urlHeader = this.url
				this.urlHeader = this.urlHeader.substring(0, num3)
				this.getWxInfo();
				this.getLogin(this.token)
				
				
				
				window.history.pushState({}, 0, document.URL.replace(this.seturl.substr(0, this.seturl.length - 1), ''))
				
				console.log(this.query)
				this.$router.push({
					name: this.gourl,
				})

			},


		},
	}
</script>

<style lang="scss">
	.login {
		width: 100%;
		height: 100vh;

		.login_content {


			.login-img {
				border-top: 1px solid #D4D4D4;
				padding-top: 130px;
				text-align: center;
				margin-bottom: 55px;


			}

			.login-btn {
				width: 100%;

				button {
					width: 94%;
					border: 1px solid #75BF33;
					background-color: #FFFFFF;
					color: #75BF33;
					border-radius: 5px;
					padding: 2px 0;
				}
			}
		}
	}
</style>
