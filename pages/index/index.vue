<template>
	<view class="content">
		<view class="content_img">
			<image src="../../static/img/index_bg.jpg" mode=""></image>
		</view>
		<view class="content_next" @tap="go">
			<image src="../../static/img/next.png" mode="aspectFit"></image>
		</view>
		<view class="cars">
			<image src="../../static/img/car.gif" mode="aspectFit"></image>
		</view>
		<view class="fish">
			<image src="../../static/img/fish.gif" mode="aspectFit"></image>
		</view>
		<view class="" style="position: absolute; top: 5px; left: 5px;">
			<music :pause='pause'></music>
		</view>
	</view>
</template>

<script>
	import music from '@/components/audio.vue'
	export default {
		components:{
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
			console.log(this.music.onStop())
			uni.removeStorageSync('query');
			
			
		},
		
		methods: {
			play(){
				console.log(this.music.play())
				this.music.play()
				
			},
			stop(){
				console.log(1)
				this.music.stop()
			},
			go(){
				uni.navigateTo({
					url:'start/start'
				})
			},
		},
		
	}
</script>

<style lang="scss">
	.content{
		height: 100Vh;
		width: 100%;
		position: relative;
		.cars{
			position: absolute;
			bottom: 21%;
			left: 0%;
			image{
				width: 350px;
				height: 300px;
			}
		}
		.fish{
			width: 100%;
			
			image{
				position: absolute;
				top: 10vh;
				left: 0;
				width: 100%;
				z-index: 10;
			}
		}
		.content_next{
			width: 200px;
			height: 100px;
			position: absolute;
			top: 50%;
			right: 10px;
			margin-top: -50px;
			z-index: 1;
			animation: tonext 1.2s linear infinite;
			image{
				position: absolute;
				width: 36px;
				height: 100px;
				top: 0;
				right: 0;
			}
		}
	
	}
	@keyframes tonext
	{
	from {right: 25px;}
	to {right:5px}
	}
</style>
