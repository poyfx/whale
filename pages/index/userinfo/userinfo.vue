<template>
	<view class="userinfo">
		<view class="content_img">
			<image src="../../../static/img/info.png" mode=""></image>
		</view>
		<view class="userinfo_content">
			<view class="close">
				<image src="../../../static/img/close.png" mode="aspectFit"></image>
			</view>
			<view class="userinfo_title flex">
				<view class="title_logo">
					<image :src="photo" mode=""></image>
				</view>
				<view class="userinfo_name">
					<view>HI,{{name}}~ </view>
					<text> 请完善以下领奖信息 </text>
				</view>

			</view>
			<view class="userinfo_input" v-show="!success">
				<view class="input_text flex">
					<text>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</text>
					<input type="text" placeholder="请输入您的姓名" v-model="realname" />
				</view>
				<view class="input_text flex">
					<text>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话</text>
					<input type="text" placeholder="请输入您的电话" v-model="mobile" />
				</view>
				<view class="input_text flex">
					<text>收货地址</text>
					<input type="text" placeholder="请输入您的地址" v-model="address" />
				</view>
				<view class="btn" @tap="commit">
					提交
				</view>
			</view>

			<view class="userinfp_success" v-show="success">
				<view class="btn">
					提交成功
				</view>
				<view class="back flex" @tap="backGame">
					<text>返回游戏</text>
					<image src="../../../static/img/b_back.png" mode="aspectFit"></image>
				</view>
			</view>
		</view>
		<view class="" style="position: absolute; top: 5px; left: 5px;">
			<music :pause='pause'></music>
		</view>
	</view>
</template>

<script>
	import prizeServer from '@/api/prize.js'
	import rankServer from '@/api/ranking.js'
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
				success: false,
				realname: '',
				mobile: '',
				address: '',
				name: '',
				photo: '',
				pause: '',
			};
		},
		onLoad() {
			this.pause = this.music.paused
			this.getUser()
		},
		computed: {
			...mapState(['token'])
		},
		methods: {
			getUser() {
				rankServer.getUserinfo({

					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							this.name = res.data.data.nickname || "亲爱的"
							this.photo = res.data.data.profilePhoto || '';
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
			commit() {
				this.realname = this.realname.trim()
				this.mobile = this.mobile.trim()
				this.address = this.address.trim()
				if (this.realname != '' && this.mobile != '' && this.address != '') {
					prizeServer.getPrize({
						realname: this.realname,
						mobile: this.mobile,
						address: this.address,
						success: res => {
							console.log(res)
							if (res.statusCode == 200 && res.data.code == 0) {
								this.success = true
							}
						},
						fail: err => {
							console.log(err)
						},
						complete: res => {
							console.log(res)
						}
					})
				} else {
					uni.showToast({
						title: '请补全信息',
						icon: 'none',
						duration: 3000
					})
				}

			},
			backGame() {
				this.$router.push({
					"name": 'sharePoster',
					params: {
						havePoster: true
					}
				})
			},
		},
	}
</script>

<style lang="scss">
	.userinfo {
		width: 100%;
		height: 100vh;

		.userinfo_content {
			width: 300px;
			padding-top: 20px;
			position: absolute;
			top: 20%;
			left: 50%;
			margin-left: -150px;

			.close {
				position: absolute;
				top: 5px;
				right: 26px;

				image {
					width: 18px;
					height: 18px;
				}
			}

			.userinfo_title {
				padding: 0 22px;
				margin-bottom: 30px;
				align-items: center;
				align-content: center;

				.title_logo {
					margin-right: 20px;

					image {
						width: 62px;
						height: 60px;
					}
				}

				.userinfo_name {
					color: #FFFFFF;
					font-weight: 550;

					view {
						font-size: 1rem;
						line-height: 30px;
					}

					text {
						font-size: 0.8rem;
					}
				}


			}

			.userinfo_input {
				padding: 0 20px;
				text-align: center;

				.input_text {
					align-items: center;
					align-content: center;
					justify-content: center;
					margin-bottom: 15px;

					text {
						font-size: 0.8rem;
						padding: 6px 8px;
						background: #24abd5;
						border-radius: 8px 0 0 8px;
						color: #FFFFFF;
						font-weight: 550;
					}

					input {
						border: 1px solid #000000;
						border-left: none;
						width: 58%;
						height: 30px;
						padding-left: 5px;
					}
				}

				.btn {
					width: 100px;
					line-height: 30px;
					color: #fff;
					font-weight: 550;
					font-size: 0.9rem;
					background: #24abd5;
					margin: 30px auto 0;
					border-radius: 4px;
					box-shadow: 2px 1px 1px 2px rgba($color: #24abd5, $alpha:0.2);
				}
			}

			.userinfp_success {
				text-align: center;

				.btn {
					width: 140px;
					line-height: 50px;
					color: #fff;
					font-weight: 550;
					font-size: 0.9rem;
					background: #24abd5;
					margin: 100px auto 0;
					border-radius: 4px;
					box-shadow: 2px 1px 1px 2px rgba($color: #24abd5, $alpha:0.2);
				}

				.back {
					justify-content: flex-end;
					align-items: center;
					align-content: center;
					margin-top: 44px;
					padding-right: 10px;

					text {
						color: #24abd5;
						font-weight: 550;
						font-size: 0.8rem;

					}

					image {
						width: 40px;
						height: 40px;
					}
				}

			}
		}
	}
</style>
