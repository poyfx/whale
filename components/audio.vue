<template>
	<view class="m">
		<view class="mus" @tap="choose"  >
			<image :src="autosrc" mode="aspectFit" :class="play?'':'bbb' "></image>
		</view>
	</view>
</template>

<script>
	import img1 from '@/static/img/music.png'
	import img2 from '@/static/img/music1.png'
	export default {
		props:{
			pause:{
				type:Boolean,
			}
		},
		data() {
			return {
				autosrc: img1,
				play: true,
				
			}
		},
		mounted(){
			console.log(1)
		if(this.pause){
			this.play = !this.play;
					this.autosrc = img2
				}else{
					this.autosrc = img1
					this.play = !this.play;
				}
			
		},
		methods: {
			choose() {
				this.play = !this.play;
				if (this.play) {
					this.music.stop();
					this.autosrc = img2
				} else {
					this.music.play();
					this.autosrc = img1
				}
			},
		}
	}
</script>

<style lang="scss">
	.m{
		.mus{
			width: 30px;
			height: 30px;
			image{
				width: 30px;
				height: 30px;
			}
		}
	}
	.bbb{
		animation:a 5s infinite linear ;
		z-index: 999;
	}
	@keyframes a{
		0% {
			
			transform: rotate(0deg);
		}
		100% {
			
			transform: rotate(360deg);
		}
	}
</style>
