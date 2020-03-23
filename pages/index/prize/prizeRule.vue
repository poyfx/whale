<template>
	<view class="content">
		<view class="content_img">
			<image src="../../../static/img/rule.png" mode=""></image>
		</view>
		<view class="content-text">
			<view class="list">
				活动时间：
				<text >
					1月18日-1月20日
				</text>
			</view>
			<view class="list">
				活动规则：<text>每个用户同一账号只有一次抽奖机会，本活动礼品限量提供先到先得！</text>
					
			</view>
			<view class="gift">
				<text>奖品设置：</text>
				<view class="">
					<image src="../../../static/img/rule_gift.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="get_gift">
				<text>如何领取你的礼品？</text>
				<view >
					获得奖品的用户再领奖页面填写姓名、联系方式以及收货地址，届时工作人员会以物流配送的方式将奖品送到你的手上！
				</view>
			</view>
			<view class="notes">
				<text>*注：由于春节假期缘故，所有奖品将于2020年2月7日开始邮寄</text>
			</view>
		</view>
		<view class="content_btn flex">
			<view class="btn" @tap="back">
					<image src="../../../static/img/w_back.png" mode="aspectFit"></image>
			</view>
		
		</view>
		<view class="" style="position: absolute; top: 5px; left: 5px;">
			<music :pause='pause'></music>
		</view>
	</view>
</template>

<script>
	import music from '@/components/audio.vue'
	export default {
		components: {
			music
		},
		data() {
			return {
				title: 'Hello',
				pause:'',
			}
		},
		onLoad() {
			this.pause = this.music.paused
		},
		methods: {
			back(){
				uni.navigateBack({
					delta:1
				})
			},
		}
	}
</script>

<style lang="scss">
	.content{
		height: 100Vh;
		width: 100%;
		position: relative;
		.content-text{
			position: absolute;
			left: 0;
			top: 20vh;
			padding: 0 56px;
			color: #0b6c8c;
			.list{
				font-weight: 550;
				font-size: 0.8rem;
				vertical-align: middle;
				text{
					font-weight: 500;
					font-size: 0.7rem;
				}
				view{
					font-size: 0.8rem;
				}
			}
			.gift{
				margin-bottom: 20px;
				text{
					font-weight: 550;
					font-size: 1rem;
				}
				view{
					text-align: center;
					margin-top: 20px;
					image{
						width: 232px;
						height: 113px;
					}
				}
			}
			.get_gift{
				margin-bottom: 20px;
				text{
					font-size: 0.8rem;
					font-weight: 550;
				}
				view{
					font-size: 0.75rem;
					line-height: 24px;
				}
			}
			.notes{
				font-size: 0.6rem;
				color: #ff062f;
			}
		}
		.content_btn{
			width: 100%;
			height: 48px;
			position: absolute;
			left: 0;
			bottom: 0;
			.btn{
				width: 81px;
				height: 35px;
				position: absolute;
				right: 5px;
				bottom: 20px;
				image{
					width: 81px;
					height: 35px;
				}
			}
		}
	
	}
</style>
