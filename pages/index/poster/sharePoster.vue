<template>
	<view class="poster">
		<view class="content_img" :class="showimg?'':'down'" @touchstart='showimg=false'>
			<image :src="poster" mode="" style="z-index: 100;"></image>
		
		</view>
		
		<view class="content_img" style="">
			<image :src="poster" mode=""></image>

		</view>

		<view class="poster_content">
			<!-- 分享 -->
			<view class="share" @tap="getshare" v-show="!havePoster">
				<image src="../../../static/img/share.png" mode="aspectFit"></image>
			</view>
			<view class="poster_btn flex">
				<!-- 保存道手机 -->
				<view class="" v-show="!havePoster"  @touchstart="createDownload">
					<image src="../../../static/img/save.png" mode="aspectFit"></image>
				</view>
			</view>

			<view class="poster_btn flex" v-show="havePoster">
				<!-- 保存道手机 -->
				<view class="" @tap="have">
					<image src="../../../static/img/have.png" mode="aspectFit"></image>
				</view>

				<view class="" @tap="lookRanking">
					<image src="../../../static/img/look_ranking.png" mode="aspectFit"></image>
				</view>
			</view>

		</view>
		<!-- 分享成功后 -->
		<view class="share_success" v-show="share">
			<view class="suss_img">
				<image src="../../../static/img/share_success.png" mode="aspectFit"></image>
				<view class="img_btn" @tap="gogame">
					去抽奖
				</view>
			</view>
			<view class="suss_back" @tap="share = false">
				<image src="../../../static/img/w_back.png" mode="aspectFit"></image>
			</view>
		</view>
		<view class="" style="position: absolute; top: 35px; left: 5px;">
			<music :pause='pause'></music>
		</view>
	</view>
</template>

<script>
	import uploadServer from '@/api/uploadFile.js'
	import shareServer from '@/api/login.js'
	import rankinServer from '@/api/ranking.js'
	import wx from 'jweixin-module'
	import music from '@/components/audio.vue'
	export default {
		components: {
			music
		},
		data() {
			return {
				share: false,
				poster: '',
				appId: '',
				timestamp: '',
				nonceStr: '',
				signature: '',
				havePoster: false,
				graphId: 0,
				pause:'',
				showimg:false,
			};
		},
		onLoad() {
			this.havePoster = this.$route.params.havePoster;
			this.getgraphId()
			this.getPoster();
			this.getWXInfo()
			this.pause = this.music.paused
		},
		methods: {

			getgraphId() {



				try {
					const data = uni.getStorageSync('graphId')
					if (data) {
						this.graphId = data

					}
				} catch (e) {}


			},
			getWXInfo() {
				const url = 'http://' + window.location.host
				shareServer.handleShare({
					url: url,
					success: res => {
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
			getWXConfig() {
				const that = this;
				const urls = 'http://' + window.location.host;
				rankinServer.getUserinfo({
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							uni.setStorage({
								key: 'userInfo',
								data: res.data
							})
							wx.onMenuShareTimeline({
								title: '速来PICK你的长安汽车蓝小鲸形象，超多鲸喜大奖等你抽取！', // 分享标题
								link: 'http://wx.go-tech.cn/redirect.html?url=http%3a%2f%2fwhale.act.go-tech.cn%2f%23%2fpages%2findex%2fassistance%2fassistance%3fgraphId%3d' +
									res.data.data.graphId, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: 'http://whale.act.go-tech.cn/public/static/share.jpg', // 分享图标
								success: function() {
									// 设置成功

									console.log('分享成功');
									console.log(res.data.data.graphId)
									that.share = true;
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
									console.log(res.data.data.graphId)
									that.share = true;
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
			//获取生成的图片
			getPoster() {
				rankinServer.getUserinfo({
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							uni.setStorage({
								key: 'userInfo',
								data: res.data
							})
							this.graphId = res.data.data.graphId
						}
					},
					fail: err => {
						console.log(err)
					},
					complete: res => {
						console.log(res)
					}
				});
				rankinServer.getAllinfo({
					graphId: this.graphId,
					success: res => {
						console.log(res)
						this.poster = res.data.data.photo;

					},
					fail: err => {
						console.log(err)
					},
					complete: res => {
						console.log(res)
					},

				})
				if (this.havePoster) {} else {
					try {
						const value = uni.getStorageSync('poster');
						if (value) {
							this.poster = value;
						}
					} catch (e) {
						// error
					}
				}

			},

			createDownload() {
				this.showimg = true
				// console.log(this.poster)
				// 	window.open(this.poster)
						// const downloadTask = uni.downloadFile({
						// 	url: this.poster,
						// 	success: (res) => {
						// 		if (res.statusCode === 200) {
						// 			uni.showToast({
						// 				title: "正在下载",
						// 				icon: "none"
						// 			});
						// 			uni.saveImageToPhotosAlbum({
						// 				filePath: res.tempFilePath,
						// 					success: function() {
						// 						uni.showToast({
						// 							title: "保存成功",
						// 							icon: "none"
						// 					});
						// 				},
						// 				fail: function() {
						// 					uni.showToast({
						// 						title: "保存失败，请稍后重试",
						// 						icon: "none"
						// 					});
						// 				}
						// 			});
						// 		}
						// 	}
						// });
				
				// var dtask = plus.downloader.createDownload(this.poster, {}, function(d, status) {
				// 	// 下载完成
				// 	if (status == 200) {
				// 		console.log("Download success: " + d.filename);
				// 	} else {
				// 		console.log("Download failed: " + status);
				// 	}
				// });
				// //dtask.addEventListener("statechanged", onStateChanged, false);
				// dtask.start();
			},
			getshare() {
				uni.showModal({
					title: '提示',
					content: '请点击右上角分享页面'
				})

			},
			have() {
				this.$router.push({
					name: 'assistance',
					params: {
						graphId: this.graphId
					}
				})

			},
			lookRanking() {
				uni.navigateTo({
					url: '../ranking/ranking'
				})
			},
			gogame() {
				uni.navigateTo({
					url: '../prize/prize'
				})
			},

		},
	}
</script>

<style lang="scss">
	.down{
		display: none;
	}
	.poster {
		width: 100%;
		height: 100vh;
		position: relative;

		#cvs {
			position: absolute;
			width: 750upx;
			height: 100vh;
			top: -99999899rpx;
			left: -99999899rpx;
			z-index: 9999;

		}

		.poster_content {
			width: 100%;
			height: 100vh;
			position: relative;
			padding: 30px 40px 0;
			box-sizing: border-box;
			top: 0vh;
			left: 0;

			.share {
				position: absolute;
				top: 10px;
				right: 10px;

				image {
					width: 100px;
					height: 50px;
				}
			}

			.poster_text {
				height: 20vh;
				position: relative;

				text {
					font-size: 1.6rem;
					font-weight: 550;
					font-style: italic;
					letter-spacing: 4px;
					color: #FFFFFF;
					text-shadow: 4px 3px 5px rgba($color: #000000, $alpha: 0.3);
				}
			}

			.poster_img {
				height: 50vh;
				position: relative;
				top: 0vh;
				left: 0px;

				image {
					position: absolute;
					bottom: 5px;
					left: 50%;
					margin-left: -75px;
					width: 150px;
				}
			}

			.poster_btn {
				width: 100%;
				justify-content: space-around;
				position: absolute;
				bottom: 10px;
				left: 0;

				view {
					text-align: center;
					width: 50%;

					image {
						width: 100px;
						height: 40px;
					}
				}
			}
		}

		.share_success {
			width: 100%;
			height: 100vh;
			position: fixed;
			top: 0;
			left: 0;
			background: rgba(0, 0, 0, 0.3);

			.suss_img {
				position: absolute;
				top: 50%;
				left: 50%;
				margin: -120px 0 0 -134px;

				.img_btn {
					    width: 100px;
					    position: absolute;
					    bottom: 25px;
					    left: 50%;
					    margin-left: -50px;
					    font-size: 1rem;
					    background: #87ceeb;
					    border-radius: 8px;
					    color: #fff;
					    text-align: center;
					    padding: 3px 5px;
				}

				image {
					width: 279px;
				}
			}

			.suss_back {
				position: absolute;
				bottom: 0px;
				right: 20px;

				image {
					width: 68px;
					height: 48px;
				}
			}
		}
	}
</style>
