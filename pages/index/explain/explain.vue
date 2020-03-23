<template>
	<view class="content">
		<view class="content_img">
			<image src="../../../static/img/game_tell.png" mode=""></image>
		</view>
		<view class="content-text">
			<view class="flex list">
				<text>1. </text>
				<text>&nbsp;&nbsp;&nbsp;将搭配好的蓝小鲸形象分享至朋友圈，获得点赞排名 TOP5的蓝小鲸形象将有机会变身实体盲盒</text>
				<!-- 	<view></view> -->

			</view>
			<view class="text_img">
				<image src="../../../static/img/gift1.png" mode="aspectFit"></image>
			</view>
			<view class="list text_center">
				<text>TOP5的蓝小鲸制作人将获得如下礼品哦</text>
			</view>
			<view class="text_img">
				<image src="../../../static/img/gift.png" mode="aspectFit"></image>
			</view>
			<view class="flex list">
				<text>2. </text>
				<text>制作人成功分享朋友圈后，即可获得抽奖机会一次</text>
			</view>
			<view class="flex list">
				<text>3.</text>
				 <text>每位制作人同一账户只有1次生成蓝小鲸形象海报的机会哦~</text>
			</view>
			<view class="list text_center">
				<text>活动时间：1月18日-1月20日</text>
			</view>
		</view>
		<view class="content_btn flex">
			<view class="btn" @tap="goOtherPage">
				<image src="../../../static/img/game_start.gif" mode="aspectFit"></image>
			</view>

		</view>
		<view class="" style="position: absolute; top: 5px; left: 5px;">
			<music :pause='pause'></music>
		</view>
	</view>
</template>

<script>
	import rankServer from '@/api/ranking.js'
	import music from '@/components/audio.vue'
	export default {
		components:{
			music
		},
		data() {
			return {
				title: 'Hello',
				graphId: 0,
				pause:'',
			}
		},
		onLoad() {
			this.getUSerinfo()
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
			goOtherPage() {

				if (this.graphId > 0) {
					this.$router.push({
						"name": 'sharePoster',
						params: {
							havePoster: true
						}
					})
				} else {
					this.$router.push({
						'name': 'make'
					})
				}
			}

		}
	}
</script>

<style lang="scss">
	.content {
		height: 100Vh;
		width: 100%;
		position: relative;

		.content-text {
			position: absolute;
			left: 0;
			top: 20vh;
			padding: 0 35px;

			.list {
				color: #2b86a6;
				font-size: 1rem;
				margin-bottom: 10px;
			}

			.text_img {
				text-align: center;
				margin-bottom: 15px;

				image {
					width: 242px;
					height: 100px;
				}

			}
		}

		.content_btn {
			width: 100%;
			height: 48px;
			position: absolute;
			left: 0;
			bottom: 0;

			.btn {
				width: 81px;
				height: 35px;
				position: absolute;
				right: 5px;
				bottom: 20px;

				image {
					width: 81px;
					height: 35px;
				}
			}
		}

	}
</style>
