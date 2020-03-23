<template>
	<view class="prize">
		<view class="content_img">
			<image src="../../../static/img/luck.png" mode=""></image>
		</view>
		<view class="prize_content">
			<view class="prize_tell" @tap="goRule">
				<image src="../../../static/img/luck_tell.png" mode="aspectFit"></image>
			</view>

			<view class="container">

				<image src="../../../static/img/jiqi.png" mode="aspectFit" style="width: 100%;
			height: 530px;
			display: inline-block;
			overflow: hidden;
			position: relative;
			top: 24px;
			left: 0;"></image>
				<!-- 停止位置:<input :value='luckPosition' style="width:100%;text-align:center" @input='input' type='number'></input> -->
				<view class='frame_view'>
					<view class='frame_row'>
						<view class='frame_item frame_item0' :style='{"opacity":color[0].opa}' :src="images[0]">

							<!-- <view class="prize_img">
								
								<image src="../../../static/img/prize1.png" mode="aspectFit"></image>
							</view> -->
						</view>
						<view class='frame_item frame_item1' :style='{"opacity":color[1].opa}' :src="images[0]">
							<!-- <view class="prize_img">
								<image src="../../../static/img/prize2.png" mode="aspectFit"></image>
							</view> -->
						</view>
						<view class='frame_item frame_item2' :style='{"opacity":color[2].opa}' :src="images[0]">
							<!-- <view class="prize_img">
								<image src="../../../static/img/prize1.png" mode="aspectFit"></image>
							</view> -->
						</view>
					</view>

					<view class='frame_row'>
						<view class='frame_item frame_item7' :style='{"opacity":color[7].opa}' :src="images[0]">
							<!-- <view class="prize_img">
								<image src="../../../static/img/prize.png" mode="aspectFit"></image>
							</view> -->
						</view>
						<!-- <view class="changan">
							<image src="../../../static/img/changan.png" mode="aspectFit"></image>
						</view> -->
						<view class='frame_item frame_item3' :style='{"opacity":color[3].opa}' :src="images[0]">
							<!-- <view class="prize_img">
								<image src="../../../static/img/prize2.png" mode="aspectFit"></image>
							</view> -->
						</view>
					</view>

					<view class='frame_row'>
						<view class='frame_item frame_item6' :style='{"opacity":color[6].opa}' :src="images[0]">
							<!-- <view class="prize_img">
								<image src="../../../static/img/prize1.png" mode="aspectFit"></image>
							</view> -->
						</view>
						<view class='frame_item frame_item5' :style='{"opacity":color[5].opa}' :src="images[0]">
							<!-- <view class="prize_img">
								<image src="../../../static/img/prize.png" mode="aspectFit"></image>
							</view> -->
						</view>
						<view class='frame_item frame_item4' :style='{"opacity":color[4].opa}' :src="images[0]">
							<!-- <view class="prize_img">
								<image src="../../../static/img/prize1.png" mode="aspectFit"></image>
							</view> -->
						</view>
					</view>
				</view>
				<view class="prize_start" @tap="prizeGame">
					<!-- 点击开始抽奖按钮 -->
				</view>
			</view>






		</view>
		<view class="luck" v-show="noluck || luck">
			<view class="noluck_img" v-show="noluck">
				<image src="../../../static/img/no_prize.png" mode="aspectFit"></image>

				<view class="noluck_text">
					<view>很遗憾</view>
					<text>鲸喜擦肩而过~</text>
				</view>
				<view class="noluck_back" @tap="bacgGame">
					返回游戏
				</view>
				<view class="close" @tap="noluck = false">
					<!-- 关闭按钮 -->

				</view>
			</view>

			<view class="luck_img" v-show="luck">
				<image src="../../../static/img/luckly.png" mode="aspectFit"></image>

				<view class="luck_text">
					<text>恭喜您中奖了！</text>
					<view class="flex">获得{{title}}一个
						<image src="../../../static/img/gift2.png" mode="aspectFit" v-show="prizeType == 2"></image>
						<image src="../../../static/img/gift3.png" mode="aspectFit" v-show="prizeType == 3"></image>
					</view>
				</view>
				<view class="luck_back" @tap="gouserinfo">
					立即领取
				</view>
				<view class="close" @tap="luck = false">
					<!-- 关闭按钮 -->

				</view>
			</view>

		</view>
		<view class="" style="position: absolute; top: 35px; right: 5px;">
			<music :pause='pause'></music>
		</view>
	</view>
</template>

<script>
	import rankServer from '@/api/ranking.js'
	import prizeServer from '@/api/prize.js'
	var interval = null;
	//值越大旋转时间越长  即旋转速度
	var intime = 80;
	import music from '@/components/audio.vue'
	export default {
		components: {
			music
		},

		data() {
			return {
				luck: false,
				noluck: false,
				prizeType: '',
				title: '',
				color: [{
						opa: 0.9,
						name: "iPad"
					},
					{
						opa: 0.9,
						name: "再接再厉"
					},
					{
						opa: 0.9,
						name: "再接再厉"
					},
					{
						opa: 0.9,
						name: "再接再厉"
					},
					{
						opa: 0.9,
						name: "再接再厉"
					},
					{
						opa: 0.9,
						name: "再接再厉"
					},
					{
						opa: 0.9,
						name: "再接再厉"
					},
					{
						opa: 0.9,
						name: "再接再厉"
					}
				],
				images: ['../../../static/img.prize1.png', '../../../static/img.prize1.png',
					'../../../static/img.prize1.png', '../../../static/img.prize1.png',
					'../../../static/img.prize1.png', '../../../static/img.prize1.png',
					'../../../static/img.prize1.png', '../../../static/img.prize1.png',
					'../../../static/img.prize1.png'
				],
				btnconfirm: '../../static/sherpa-jiugonggedianjichoujiang.png',
				clickLuck: 'clickLuck',
				luckPosition: 0,
				pause: '',
			};
		},
		onLoad() {
			this.getUSerinfo();
			uni.hideLoading()
			// this.loadAnimation();
			this.pause = this.music.paused
		},
		methods: {
			getUSerinfo(token) {
				rankServer.getUserinfo({
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							this.graphId = res.data.data.graphId;
							uni.setStorage({
								key: 'userInfo',
								data: res.data
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
			goRule() {
				uni.navigateTo({
					url: 'prizeRule'
				})
			},
			prizeGame() {
				this.clickLucks()
				prizeServer.playPrize({
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							this.title = res.data.prize.title
							if (res.data.prize.id == 2) {
								this.luckPosition = 7;
							} else if (res.data.prize.id == 3) {
								this.luckPosition = 1;
							} else {
								this.luckPosition = 0;
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
			bacgGame() {
				this.$router.push({
					"name": 'sharePoster',
					params: {
						havePoster: true,

					}
				})
			},
			gouserinfo() {
				uni.navigateTo({
					url: '../userinfo/userinfo'
				})
			},

			input: function(e) {
				var data = Number(e.detail.value);
				this.luckPosition = data;
			},
			//点击抽奖按钮
			clickLucks: function() {
				if (this.clickLuck == 'clickLuck') {
					var e = this;
					//判断中奖位置格式
					// if (e.luckPosition == null || isNaN(e.luckPosition) || e.luckPosition > 7) {
					// 	uni.showModal({
					// 		title: '提示',
					// 		content: '请填写正确数值',
					// 		showCancel: false,
					// 		success: res => {},
					// 		fail: () => {},
					// 		complete: () => {}
					// 	});
					// 	return;
					// }

					//设置按钮不可点击
					// e.btnconfirm = '../../static/sherpa-jiugonggedianjichoujiangd.png';
					e.clickLuck = '';

					//清空计时器
					clearInterval(interval);
					var index = 0;
					//循环设置每一项的透明度
					interval = setInterval(function() {
						if (index > 7) {
							index = 0;
							e.color[7].opa = 0.5
						} else if (index != 0) {
							e.color[index - 1].opa = 0.5
						}
						e.color[index].opa = 1;
						index++;
					}, intime);
					//模拟网络请求时间  设为两秒
					var stoptime = 2000;
					setTimeout(function() {
						e.stop(e.luckPosition);
					}, stoptime)
				}
			},
			stop: function(which) {
				var e = this;
				//清空计数器
				clearInterval(interval);
				//初始化当前位置
				var current = -1;
				var color = e.color;
				for (var i = 0; i < color.length; i++) {
					if (color[i].opa == 1) {
						current = i;
					}
				}
				//下标从1开始
				var index = current + 1;
				e.stopLuck(which, index, intime, 10);
			},
			stopLuck: function(which, index, time, splittime) {
				var e = this;
				//值越大出现中奖结果后减速时间越长
				setTimeout(function() {
					//重置前一个位置
					if (index > 7) {
						index = 0;
						e.color[7].opa = 0.5
					} else if (index != 0) {
						e.color[index - 1].opa = 0.5
					}
					//当前位置为选中状态
					e.color[index].opa = 1;
					//如果旋转时间过短或者当前位置不等于中奖位置则递归执行
					//直到旋转至中奖位置
					if (time < 400 || index != which) {
						//越来越慢
						splittime++;
						time += splittime;
						//当前位置+1
						index++;
						e.stopLuck(which, index, time, splittime);
					} else {
						//1秒后显示弹窗
						setTimeout(function() {
							if (which == 0) {
								//未中奖
								e.noluck = true;
							} else {
								//中奖
								e.prizeType = e.luckPosition
								e.luck = true

							}
						}, 1000);
					}
				}, time);
			},
			loadAnimation: function() {
				var e = this;
				var index = 0;
				if (interval == null) {
					interval = setInterval(function() {
						if (index > 7) {
							index = 0;
							e.color[7].opa = 0.5
						} else if (index != 0) {
							e.color[index - 1].opa = 0.5
						}
						e.color[index].opa = 1;
						index++;
					}, 1000);
				}
			}

		},
	}
</script>

<style lang="scss">
	.prize {
		width: 100%;
		height: 100vh;

		.prize_content {
			width: 100%;
			padding: 10px 0 0 10px;

			.prize_tell {
				position: absolute;
				top: 10px;
				left: 10px;
				image {
					width: 60px;
					height: 25px;
				}
			}

			.prize_start {
				width: 140px;
				height: 60px;
				background-color: rgba($color: #000000, $alpha: 0);
				position: relative;
				bottom: 4%;
				left: 50%;
				margin: -70px;
			}
		}

		.luck {
			width: 100%;
			height: 100vh;
			position: fixed;
			top: 0;
			left: 0;
			background: rgba(0, 0, 0, 0.3);

			.luck_img {
				position: absolute;
				top: 47%;
				left: 50%;
				margin: -240px 0 0 -166px;

				image {
					width: 316px;
					height: 430px;
				}

				.luck_text {
					width: 100%;
					color: #FFFFFF;
					text-align: center;
					font-weight: 550;
					position: absolute;
					top: 47%;
					left: 0;

					text {
						font-size: 1.4rem;
						color: #fce524;
					}

					view {
						font-size: 1rem;
						align-items: center;
						align-content: center;
						justify-content: center;
					}

					image {
						width: 50px;
						height: 50px;
					}
				}

				.luck_back {
					width: 100%;
					color: #e30505;
					text-align: center;
					font-weight: 550;
					position: absolute;
					bottom: 16%;
					line-height: 48px;
					left: 0;
					font-size: 1.2rem;
				}

				.close {
					width: 30px;
					height: 30px;
					// background-color: #FFFFFF;
					position: absolute;
					top: 36%;
					right: 7px;

					image {
						width: 10px;
						height: 100px;
					}
				}
			}


			.noluck_img {
				position: absolute;
				top: 50%;
				left: 50%;
				margin: -240px 0 0 -166px;

				image {
					width: 316px;
					height: 430px;
				}

				.noluck_text {
					width: 100%;
					color: #FFFFFF;
					text-align: center;
					font-weight: 550;
					position: absolute;
					top: 40%;
					left: 0;

					view {
						font-size: 1.4rem;

					}

					text {
						font-size: 1rem;
					}
				}

				.noluck_back {
					width: 100%;
					color: #e30505;
					text-align: center;
					font-weight: 550;
					position: absolute;
					bottom: 19%;
					line-height: 48px;
					left: 0;
					font-size: 1.2rem;
				}

				.close {
					width: 30px;
					height: 30px;
					// background-color: #FFFFFF;
					position: absolute;
					top: 32%;
					right: 0;
				}
			}

		}
	}

	.container {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 5vh;
		left: 0;
	}

	.frame_view {
		position: absolute;
		top: 216px;
		left: 50%;
		margin-left: -137px;
		width: 275px;
		height: 216px;
		z-index: 3;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		border-radius: 15px;

	}

	.frame_row {
		width: 254px;
		height: 88px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.frame_item {
		width: 82px;
		height: 73px;
		background: rgba(0, 0, 0, 0.1);
		z-index: 9;
	}

	// .frame_item0 {
	// 	background: url("../../../static/img/prize1.png")no-repeat center;
	// 	background-size: 50% 50%;
	// }

	// .frame_item1 {
	// 	background: url("../../../static/img/prize2.png")no-repeat center;
	// background-size: 50% 50%;
	// }

	// .frame_item2 {
	// 	background: url("../../../static/img/prize.png")no-repeat center;
	// background-size: 50% 50%;
	// }

	// .frame_item3 {
	// 	background: url("../../../static/img/prize2.png")no-repeat center;
	// background-size: 50% 50%;
	// }

	// .frame_item4 {
	// 	background: url("../../../static/img/prize.png")no-repeat center;
	// background-size: 50% 50%;
	// }

	// .frame_item5 {
	// 	background: url("../../../static/img/prize1.png")no-repeat center;
	// background-size: 50% 50%;
	// }

	// .frame_item6 {
	// 	background: url("../../../static/img/prize2.png")no-repeat center;
	// background-size: 50% 50%;
	// }

	// .frame_item7 {
	// 	background: url("../../../static/img/prize1.png")no-repeat center;
	// background-size: 50% 50%;
	// }

	.frame_item>view {
		display: block;
		width: 100%;
		font-size: 30upx;
		color: #fff;
		z-index: 99;
		text-align: center;
	}

	.prize_img image {
		width: 58px;
		height: 50px;
	}

	.frame_item>view.title {
		line-height: 30upx;
		padding-top: 40upx;
	}

	.changan {
		background-color: #4e75e2;
	}

	.changan image {
		width: 58px;
		height: 50px;
	}
</style>
