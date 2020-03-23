<template>
	<view class="poster">
		<view class="content_img">
			<image :src="poster" mode=""></image>

		</view>
		<canvas canvas-id="myCanvas" id='cvs' ></canvas>
		<canvas canvas-id="RmyCanvas" id='Rcvs' width="375" height="603"></canvas>

		<view class="poster_content">
			<view class="text_content">
				<image :src="w" mode="aspectFit"></image>
			</view>
			<view class="poster_text">
				<image :src="jing" mode="aspectFit"></image>
			</view>
			<view class="poster_img">
				<image :src="url" mode="aspectFit"></image>
			</view>
			<view class="poster_btn flex">
				<!-- 返回重搭 -->
				<view class="" @tap='goback'>
					<image src="../../../static/img/back_again.png" mode="aspectFit"></image>
				</view>
				<!-- 生成海报 -->
				<view class="" @tap="copyFn">
					<image src="../../../static/img/generate_poster.png" mode="aspectFit"></image>
				</view>
			</view>
			<!-- <view class="poster_btn flex" v-show="showshare">
				<view class="">
					<image src="../../../static/img/save.png" mode="aspectFit"></image>
				</view>
			</view> -->
		</view>
		<view class="" style="position: absolute; top: 5px; right: 5px;">
			<music :pause='pause'></music>
		</view>
	</view>
</template>

<script>
	import uploadServer from '@/api/uploadFile.js'
	import img from '../../../static/img/poster.png'
	import w1 from '../../../static/img/W1.png'
	import w2 from '../../../static/img/W2.png'
	import w3 from '../../../static/img/W3.png'
	import jing1 from '../../../static/img/jing1.png'
	import jing2 from '../../../static/img/jing2.png'
	import jing3 from '../../../static/img/jing3.png'
	import music from '@/components/audio.vue'
	export default {
		components: {
			music
		},
		data() {
			return {

				share: false,
				url: '',
				poster: img,
				w: '',
				jing: '',
				code: '',
				pause: '',
			};
		},
		onLoad(option) {
			this.pause = this.music.paused
			uni.showToast({
				title: '载入中...',
				icon: 'none',
				duration: 3000,
			})
			if (option.poster == 1 || option.poster == 2 || option.poster == 3 || option.poster == 4 || option.poster == 5) {
				this.w = w1;
				this.jing = jing1
			} else if (option.poster == 6 || option.poster == 7 || option.poster == 8 || option.poster == 9) {
				this.w = w2;
				this.jing = jing2;
			} else if (option.poster == 10 || option.poster == 11 || option.poster == 12 || option.poster == 13) {
				this.w = w3;
				this.jing = jing3;
			}
			this.code = option.code;
			this.getPoster()
		},
		onReady() {
			uni.hideToast()
		},
		methods: {
			//获取生成的图片
			getPoster() {
				try {
					const value = uni.getStorageSync('man');
					if (value) {
						this.url = value;
					}
				} catch (e) {
					// error
				}
			},
			// 返回重搭
			goback() {
				uni.navigateBack({
					delta: 1
				})
			},
			copyFn() {
				this.copyFnLook();
			},


			// 生成海报页面显示
			copyFnLook() {
				let ww, hh;
				const query = uni.createSelectorQuery().in(this);
				query.select('#cvs').boundingClientRect(data => { //获取canvas-dom
					ww = data.width; //准确的宽高
					hh = data.height
					console.log(data)
					var ctx = uni.createCanvasContext('myCanvas') //绑定画布
				
					console.log(hh + '_____________________10' + ww)
					ctx.drawImage(img, 0, 0, ww, hh); //填充进图片
					ctx.drawImage(this.url, ww / 2 - 110, hh-430, 225, 341); //填充进图片
					ctx.drawImage(this.w, ww / 2 - 150, 60, 298, 112); //填充进图片
					ctx.drawImage(this.jing, ww - 92, 260, 82, 85); //填充进图片
					ctx.setFillStyle('#000') //设置内容1的文字样式
					ctx.setTextAlign('center') //设置对于坐标点的对齐方式
					ctx.draw(); //输出到画布中
					uni.showLoading({ //增加loading等待效果
						mask: true,
						title: '图片生成中',
					})
					setTimeout(() => { //不加延迟的话，base64有时候会赋予undefined
						uni.canvasToTempFilePath({
							canvasId: 'myCanvas',
							success: (res) => {

								uploadServer.uploadPoster({
									code: this.code,
									photo: res.tempFilePath,
									success: res => {

										// uni.showToast({
										// 	title: '海报生成成功',
										// 	duration: 3000,
										// 	success: () => {
										if (res.statusCode == 200) {

											const data = JSON.parse(res.data)

											if (data.code == 0) {
												// uni.removeStorage({
												// 	key:'man'
												// })

												uni.setStorage({
													key: 'poster',
													data: data.whaleGraph.photo
												})
												uni.setStorage({
													key: 'graphId',
													data: data.whaleGraph.id
												})
												this.copyFnRank()

											} else {
												uni.showToast({
													title: data.msg,
													icon: 'none',
													duration: 3000
												})
											}
										}
										// 	}
										// })

									},
									fail: err => {
										console.log(err)
										uni.hideLoading();
										uni.showToast({
											title:'生成图片超时，请检查网络环境',
											icon:'none',
											duration:3000,
										})
									},
									complete: res => {
										console.log(res)
									}
								})
								// this.base64 = res.tempFilePath
							}
						})
						
					}, 1200)
				}).exec();
			},
			//海报排行榜
			copyFnRank() {
				uni.hideLoading();
				uni.showLoading({ //增加loading等待效果
					mask: true,
					title: '海报上传中'
				})
				let ww, hh;
				const query = uni.createSelectorQuery().in(this);
				query.select('#Rcvs').boundingClientRect(data => { //获取canvas-dom
					ww = data.width; //准确的宽高
					hh = data.height
					console.log(data)
					var ctx = uni.createCanvasContext('RmyCanvas') //绑定画布

					ctx.drawImage(img, 0, 0, 375, 603); //填充进图片
					ctx.drawImage(this.url, 375 / 2 - 110, 165, 216, 350); //填充进图片
					ctx.drawImage(this.w, 375 / 2 - 150, 60, 298, 112); //填充进图片
					ctx.drawImage(this.jing, 375 - 92, 260, 82, 85); //填充进图片

					ctx.setFillStyle('#000') //设置内容1的文字样式
					ctx.setTextAlign('center') //设置对于坐标点的对齐方式
					ctx.draw(); //输出到画布中
					
					setTimeout(() => { //不加延迟的话，base64有时候会赋予undefined
						uni.canvasToTempFilePath({
							canvasId: 'RmyCanvas',
							success: (res) => {

								uploadServer.uploadPosterRink({
									code: this.code,
									photo: res.tempFilePath,
									success: res => {
										uni.hideLoading();
										uni.showToast({
											title: '海报生成成功',
											duration: 3000,
											success: () => {
												this.$router.push({
													name: 'sharePoster',
													params: {
														havePoster: false
													}
												})
											}
										})



									},
									fail: err => {
										console.log(err)
										uni.hideLoading();
										uni.showToast({
											title:'上传超时，请检查网络环境',
											icon:'none',
											duration:3000,
										})
									},
									complete: res => {
										console.log(res)
									}
								})
								// this.base64 = res.tempFilePath
							}
						})
						
					}, 1200)
				}).exec();

			},
			getblob(dataURI) {
				var byteString = atob(dataURI.split(',')[1]);
				var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
				var ab = new ArrayBuffer(byteString.length);
				var ia = new Uint8Array(ab);
				for (var i = 0; i < byteString.length; i++) {
					ia[i] = byteString.charCodeAt(i);
				}
				return new Blob([ab], {
					type: mimeString
				});
			},


		},
	}
</script>

<style lang="scss">
	#Rcvs {
		position: absolute;
		width: 375px;
		height: 603px;
		top: -99999899rpx;
		left: -99999899rpx;
		z-index: 9999;

	}

	.poster {
		width: 100%;
		height: 100vh;
		position: relative;

		#cvs {
			position: absolute;
			width: 750upx;
			height: 100%;
			top: -99999899rpx;
			left: -99999899rpx;
			z-index: 9999;

		}

		.poster_content {
			width: 100%;
			height: 90vh;
			position: relative;
			padding: 30px 40px 0;
			box-sizing: border-box;
			top: 10vh;
			left: 0;

			.text_content {
				width: 100%;
				position: absolute;
				top: -2vh;
				left: 0px;

				image {
					position: absolute;
					top: -8vh;
					left: 50%;
					margin-left: -160px;
				}
			}

			.poster_text {
				height: 20vh;
				position: absolute;
				top: 30vh;
				right: 10px;

				image {
					width: 82px;
					height: 85px;
				}
			}

			.poster_img {
				height: 70vh;
				position: relative;
				top: 0vh;
				left: 0px;

				image {
					position: absolute;
					bottom: 1%;
					;
					left: 50%;
					margin-left: -112px;
					width: 225px;
					height: 341px;
				}
			}

			.poster_btn {
				width: 100%;
				justify-content: space-around;
				position: relative;
				top: 10px;
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
