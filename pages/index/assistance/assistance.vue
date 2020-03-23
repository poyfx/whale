<template>
	<view class="assistance">
		<view class="content_img">
			<image src="../../../static/img/ass_bg.jpg" mode=""></image>
		</view>
		<view class="assistance_content">
			<view class="ass_title flex">
				<image src="../../../static/img/ass_t.png" mode="aspectFit"></image>
			</view>
			<view class="info_box">
				<view class="info flex">
					<text>微信昵称:</text>
					<view>{{list.nickname}}</view>
				</view>
				<view class="info flex">
					<text>编&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 号:</text>
					<view>{{list.number|| 0}}</view>
				</view>
			</view>
			<view class="ass_k">
				<image src="../../../static/img/ass_k.png" mode="aspectFit" class="img_k"></image>
				<image :src="list.rank_photo" mode="aspectFit" class="img_p"></image>
			</view>

			<view class="goods flex">
				<text class="goods_nums">点赞量：{{list.num}}</text>
				<view class="goods_num flex" @tap="vote">
					<image src="../../../static/img/ass_w.gif" mode="aspectFit"></image>
					<!-- <text>1</text>
					<view>点赞</view> -->
				</view>
			</view>
			<view class="btn_box flex">
				<view class="" @tap="looRank">
					<image src="../../../static/img/look_ranking.png" mode=""></image>
				</view>
				<view class="" @tap="makePoster">
					<image src="../../../static/img/do.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="" style="position: absolute; top: 5px; left: 5px;">
			<music :pause='pause'></music>
		</view>
	</view>
</template>

<script>
	import rankServer from '@/api/ranking.js'
	import shareServer from '@/api/login.js'
	import wx from 'jweixin-module'
	import {
		mapState
	} from 'vuex'
	import music from '@/components/audio.vue'
	
	export default {
		components: {
			music
		},
		data() {
			return {
				graphId: 0,
				list: '',
				pause: '',
				appId:'',
				timestamp:'',
				nonceStr:'',
				signature:'',
			};
		},
		onLoad() {
				
			// this.graphId =this.$router.params.graphId;
			this.pause = this.music.paused;
			
			try {
				const user = uni.getStorageSync('userInfo')
				console.log(user)
				if (user) {
					this.graphId = user.data.graphId
				}
			} catch (e) {
				//TODO handle the exception
			}
			try {
				const a = uni.getStorageSync('graphId')
				console.log(a)
				if (a) {
					this.graphId = a
				}
			} catch (e) {
				//TODO handle the exception
			}
			try {
				const query = uni.getStorageSync('query')
				if (query) {
					const num = query.indexOf('=');
					const num1 = query.indexOf('&');
					if (num1 == -1) {
						this.graphId = query.substring(num + 1)
						uni.setStorage({
							key: 'graphId',
							data: this.graphId
						})
					} else {
						this.graphId = query.substring(num + 1, num1)
						uni.setStorage({
							key: 'graphId',
							data: this.graphId
						})
					}
					uni.removeStorageSync('query')
				}
			} catch (e) {
				//TODO handle the exception
			};
		this.getWXInfo();
			this.getInfo();
			
		},
		computed: {
			...mapState(['token'])
		},
		methods: {
			// 获取微信config
			getWXInfo() {
				const url = 'http://' + window.location.host
				shareServer.handleShare({
					url: url,
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							this.appId = res.data.appId;
							this.timestamp = res.data.timestamp;
							this.nonceStr = res.data.nonceStr;
							this.signature = res.data.signature;

							wx.config({
								debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
								appId: res.data.appId, // 必填，公众号的唯一标识
								timestamp: res.data.timestamp, // 必填，生成签名的时间戳
								nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
								signature: res.data.signature, // 必填，签名
								jsApiList: ['updateTimelineShareData', 'onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
							});
							this.getWXConfig()
						}
					},
					fail: err => {
						console.log(err)
					},
					complete: res => {
						console.log(res)
					}
				})
			},
			// 分享
			getWXConfig() {
				const that = this;
				const urls = 'http://' + window.location.host;
				rankServer.getUserinfo({
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							
							wx.onMenuShareTimeline({
								title: '速来PICK你的长安汽车蓝小鲸形象，超多鲸喜大奖等你抽取！', // 分享标题
								link: 'http://wx.go-tech.cn/redirect.html?url=http%3a%2f%2fwhale.act.go-tech.cn%2f%23%2fpages%2findex%2fassistance%2fassistance%3fgraphId%3d' +
									res.data.data.graphId, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: 'http://whale.act.go-tech.cn/public/static/share.jpg', // 分享图标
								success: function() {
									// 设置成功

									console.log('分享成功');
									console.log(res.data.data.graphId+'------------------------assss')
									
								}
							});
							wx.onMenuShareAppMessage({
								title: '速来PICK你的长安汽车蓝小鲸形象，超多鲸喜大奖等你抽取！', // 分享标题
								desc: '搭配定制你喜欢的蓝小鲸形象,成为蓝小鲸制作人！', // 分享描述
								link: 'http://wx.go-tech.cn/redirect.html?url=http%3a%2f%2fwhale.act.go-tech.cn%2f%23%2fpages%2findex%2fassistance%2fassistance%3fgraphId%3d' +
									res.data.data.graphId, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: 'http://whale.act.go-tech.cn/public/static/share.jpg', // 分享图标
								type: 'link', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									// 用户点击了分享后执行的回调函数
									// 设置成功
									console.log('分享成功');
									console.log(res.data.data.graphId+'------------------------assss')
								}
							});

						}
					},
					fail: err => {
						console.log(err)
					},
					complete: res => {
						console.log(res)
					}
				})



			},





			getInfo() {
				console.log(rankServer)
				rankServer.getAllinfo({
					graphId: this.graphId,
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							this.list = res.data.data
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: "none",
								duration: 3000
							})
						}
					},
					fail: err => {
						console.log(err)
					},
					complete: res => {
						console.log(res)
					}
				})
			},
			//点赞
			vote() {
				rankServer.userVote({
					graphId: this.graphId,
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							uni.showToast({
								title: '点赞成功',
								duration: 3000
							})
							this.list.num = this.list.num + 1
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: "none",
								duration: 3000
							})
						}
					},
					fail: err => {
						console.log(err)
					},
					complete: res => {
						console.log(res)
					}
				})
			},
			makePoster() {
				rankServer.getUserinfo({
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {

							if (res.data.data.graphId == 0) {
								this.$router.push({
									name: 'index'
								})
							} else {
								uni.showToast({
									title: '每个用户只能生成一次海报！',
									icon: 'none',
									duration: 3000
								})
							}
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: "none",
								duration: 3000
							})
						}
					},
					fail: err => {
						console.log(err)
					},
					complete: res => {
						console.log(res)
					}
				})
			},
			looRank() {
				uni.navigateTo({
					url: '../ranking/ranking'
				})
			},
		}
	}
</script>

<style lang="scss">
	.assistance {
		width: 100%;
		height: 100vh;

		.assistance_content {
			position: relative;
			height: 100%;
			top: 0;
			left: 0;

			.ass_title {
				position: relative;
				width: 100%;
				height: 106px;
				justify-content: center;

				image {
					position: absolute;
					top: 0;
					left: 50%;
					margin-left: -144px;
					width: 320px;
					height: 106px;
				}
			}

			.ass_k {
				width: 100%;
				height: 350px;
				overflow: hidden;
				position: relative;

				.img_k {
					position: absolute;
					top: 0;
					left: 50%;
					margin-left: -190px;
					width: 370px;
					height: 350px;
					z-index: 2;
				}

				.img_p {
					position: absolute;
					top: 10px;
					left: 50%;
					margin-left: -151px;
					width: 290px;
					height: 320px;
					z-index: 1;
				}
			}

			.info_box {
				.info {
					width: 300px;
					margin: 0 auto 5px;
					padding-left: 70px;
					justify-content: flex-start;
					align-items: center;
					align-content: center;
					font-size: 1rem;
					color: #299cb9;

					text {
						margin-right: 10px;

					}
				}

			}

			.goods {
				width: 100%;

				position: relative;
				// justify-content: space-between;

				.goods_nums {
					position: relative;
					left: 15%;
					color: #153fa4;
					font-size: 1rem;
					font-weight: 550;

				}

				image {
					width: 108px;
					height: 80px;
					display: inline-block;
					overflow: hidden;
					position: absolute;
					top: -124%;
					right: 15%;
					z-index: 3;
				}
			}

			.btn_box {
				width: 100%;
				height: 40px;
				position: absolute;
				bottom: 20px;
				left: 0;
				margin-top: 20px;

				view {
					width: 50%;
					text-align: center;

					image {
						width: 100px;
						height: 40px;
					}
				}
			}
		}
	}
</style>
