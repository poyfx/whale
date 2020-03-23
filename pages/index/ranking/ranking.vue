<template>
	<view class="ranking">
		<view class="content_img">
			<image src="../../../static/img/ranking.png" mode=""></image>
		</view>
		<view class="ranking_content flex">
			<view class="list flex" v-for="(item,index) in list" :key="index">
				<view class="info_img">
					<image :src="item.rank_photo" mode=""></image>
				</view>
				<view class="text-content flex">
					<view class="text ">
						<text>昵称：{{item.nickname}}</text>
					</view>
					<view class="text ">
						<text>编号：{{item.number}}</text>
						
					</view>
					<view class="text ">
						<view>点赞：{{item.num}}</view>
					</view>
				</view>
				
			</view>

			
			
			
			<view class="next">
				<image src="../../../static/img/next1.png" mode="aspectFit"></image>
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
		components: {
			music
		},
		data() {
			return {
				list:[],
				pause: '',
			};
		},
		onLoad() {
			this.pause = this.music.paused
			this.getRink()
		},
		methods:{
			getRink(){
				rankServer.getRanking({
					success: res => {
						console.log(res)
						if(res.statusCode == 200 && res.data.code ==0){
							this.list = res.data.data
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
			goass(){
				uni.navigateTo({
					url:'../assistance/assistance'
				})
			},
		},
	}
</script>

<style lang="scss">
	.ranking {
		width: 100%;
		height: 100vh;
		.ranking_content {
			width: 100%;
			min-height:90vh;
			position: absolute;
			background: url('../../../static/img/raning.png');
			background-size:cover;
			top: 0;
			left: 0;
			margin-top: 10vh;
			justify-content: space-between;
			flex-wrap: wrap;
			box-sizing: border-box;
			z-index: 10;
			.list {
				width: 50%;
				    max-height: 300px;
				margin-bottom: 20px;
				justify-content: center;
				flex-direction: column;
				align-items: center;
				align-content: center;

				image {
					width: 116px;
					height: 198px;
				}
			}
			.text-content{
				flex-direction: column;
				margin-top: 10px;
				.text {
					margin-bottom: 5px;
					color: #FFFFFF;
					justify-content: flex-start;
					align-items: center;
					text {
						font-size: 0.7rem;
					}
				
					view {
						font-size: 0.8rem;
						font-weight: 550;
					}
				}
			}
			
			.next{
				width: 100%;
				position: fixed;
				bottom: 0px;
				left: 50%;
				margin-left: -25px;
				
				image{
					width: 50px;
					height: 32px;
				}
			}

		}
	}
</style>
