<template>
	<view class="content">
		<view class="content_img">
			<image src="../../../static/img/start_bg.jpg" mode=""></image>
		</view>
		<view class="content_title flex">
			<image src="../../../static/img/start_title.png" mode="aspectFit"></image>
		</view>
		<view class="fish">
			<image src="../../../static/img/fish.gif" mode="aspectFit"></image>
		</view>
		<view class="content_start">
			<image src="../../../static/img/start.png" mode="aspectFit"></image>
		</view>
		<view class="content_btn flex">
			<view class="btn" @tap="go">
				<image src="../../../static/img/start_btn.gif" mode="aspectFit"></image>
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
				pause: '',
			}
		},
		onLoad() {
			console.log(this.music.paused)
			this.pause = this.music.paused
		},
		methods: {
			go() {
				uni.navigateTo({
					url: '../explain/explain'
				})
			},
		}
	}
</script>

<style lang="scss">
	.content {
		height: 100Vh;
		width: 100%;
		position: relative;

		.content_title {
			width: 100%;
			justify-content: center;
			position: absolute;
			top: 2vh;
			left: 0;

			image {
				position: absolute;
				top: 0;
				left: 50%;
				margin-left: -160px;
				height: 200px;
			}
		}

		.fish {
			width: 100%;

			image {
				position: absolute;
				top: 20vh;
				left: 0;
				width: 100%;
				z-index: 10;
			}
		}

		.content_start {
			width: 100%;
			justify-content: center;
			position: absolute;
			top: 32vh;
			left: 0;
			animation: a 2s infinite linear alternate;

			image {
				position: absolute;
				top: 0;
				left: 50%;
				margin-left: -160px;
				height: 300px;
			}
		}

		.content_btn {
			width: 100%;
			position: absolute;
			left: 0;
			bottom: 80px;

			.btn {
				width: 140px;
				height: 50px;
				position: absolute;
				left: 50%;
				margin-left: -70px;
				bottom: -20px;

				image {
					width: 140px;
					height: 50px;
				}
			}
		}

	}

	@keyframes a {
		0% {

			top: 30vh;
		}

		100% {

			top: 34vh;
		}
	}
</style>
