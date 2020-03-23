<template>
	<view class="make">
		<view class="content_img">
			<image src="../../../static/img/choose_bg.jpg" mode=""></image>
		</view>
		<view class="make_content">
			<canvas canvas-id="myCanvas" id='cvs' width="400" height="603"></canvas>
			<view class="content_img">
				<view class="accessories">
					<image :src="startList.accessoriesSrc" mode="aspectFit"></image>
				</view>
				<view class="head">
					<image :src="startList.headSrc" mode="aspectFit"></image>
				</view>
				<view class="foot">
					<image :src="startList.footSrc" mode="aspectFit"></image>
				</view>

				<view class="complete" @tap="copyFn">
					<image src="../../../static/img/complete.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="content_btn flex">
				<view :class="headshow?'active':''" @tap="showheadList">
					<image src="../../../static/img/accessories1.png" mode="aspectFit"></image>
				</view>
				<view :class="bodyshow?'active':''" @tap="showFootList">
					<image src="../../../static/img/accessories2.png" mode="aspectFit"></image>
				</view>
				<view :class="accessoriesshow?'active':''" @tap="showaccessoriesList">

					<image src="../../../static/img/accessories3.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="scrol_bg">
				<scroll-view class="bookshelf-content" scroll-x="true" @scroll="scroll" scroll-left="0" v-show="headshow">
					<block>
						<view class="item" v-for="(item,index) in headList" :key="index">
							<view class="img flex" @tap="chooseHatImg(item)">
								<image :src="item.src" mode="aspectFit"></image>
							</view>
						</view>
					</block>
				</scroll-view>

				<scroll-view class="bookshelf-content" scroll-x="true" @scroll="scroll" scroll-left="0" v-show="bodyshow">
					<block>
						<view class="item" v-for="(item,index) in footList" :key="index">
							<view class="img flex" @tap="chooseHatImg(item)">
								<image :src="item.src" mode="aspectFit"></image>
							</view>
						</view>
					</block>
				</scroll-view>
				<scroll-view class="bookshelf-content" scroll-x="true" @scroll="scroll" scroll-left="0" v-show="accessoriesshow">
					<block>
						<view class="item" v-for="(item,index) in accessoriesshowList" :key="index">
							<view class="img flex" @tap="chooseHatImg(item)">
								<image :src="item.src" mode="aspectFit"></image>
							</view>
						</view>
					</block>
				</scroll-view>

				<view class="next">
					<image src="../../../static/img/right.gif" mode="aspectFit"></image>
				</view>
			</view>

		</view>
		<view class="fish">
			<image src="../../../static/img/yun.gif" mode="aspectFit"></image>
		</view>
		<view class="" style="position: absolute; top: 5px; left: 5px;">
			<music :pause='pause'></music>
		</view>
	</view>

</template>

<script>
	import uploadServer from '@/api/uploadFile.js'
	import music from '@/components/audio.vue'
	export default {
		components: {
			music
		},
		data() {
			return {
				startList: {
					headSrc: '../../../static/img/head2.png',
					footSrc: '../../../static/img/body2.png',
					accessoriesSrc: '',
				},
				headList: [{
						src: '../../../static/img/head1.png',
						value: '基础形象帽子',
						id: 1
					},
					{
						src: '../../../static/img/head2.png',
						value: '环保战士帽子',
						id: 2
					},
					{
						src: '../../../static/img/head3.png',
						value: '基础形象帽子',
						id: 3
					},
					{
						src: '../../../static/img/head4.png',
						value: '环保战士帽子',
						id: 4
					},
					{
						src: '../../../static/img/head5.png',
						value: '基础形象帽子',
						id: 5
					},
					{
						src: '../../../static/img/head6.png',
						value: '环保战士帽子',
						id: 6
					},
					{
						src: '../../../static/img/head7.png',
						value: '环保战士帽子',
						id: 7
					},
					{
						src: '../../../static/img/head8.png',
						value: '基础形象帽子',
						id: 8
					},
					{
						src: '../../../static/img/head9.png',
						value: '环保战士帽子',
						id: 9
					},
					{
						src: '../../../static/img/head10.png',
						value: '基础形象帽子',
						id: 10
					},

				],
				footList: [{
						src: '../../../static/img/body1.png',
						value: '弓箭服饰',
						id: 1
					},
					{
						src: '../../../static/img/body2.png',
						value: '长跑服饰',
						id: 2
					},
					{
						src: '../../../static/img/body3.png',
						value: '弓箭服饰',
						id: 3
					},
					{
						src: '../../../static/img/body4.png',
						value: '长跑服饰',
						id: 4
					},
					{
						src: '../../../static/img/body5.png',
						value: '弓箭服饰',
						id: 5
					},
					{
						src: '../../../static/img/body6.png',
						value: '长跑服饰',
						id: 6
					},
					{
						src: '../../../static/img/body7.png',
						value: '长跑服饰',
						id: 7
					},
					{
						src: '../../../static/img/body8.png',
						value: '弓箭服饰',
						id: 8
					},
					{
						src: '../../../static/img/body9.png',
						value: '长跑服饰',
						id: 9
					},
					{
						src: '../../../static/img/body10.png',
						value: '弓箭服饰',
						id: 10
					},
					{
						src: '../../../static/img/body11.png',
						value: '长跑服饰',
						id: 11
					},
					{
						src: '../../../static/img/body12.png',
						value: '弓箭服饰',
						id: 12
					},
					{
						src: '../../../static/img/body13.png',
						value: '长跑服饰',
						id: 13
					},
				],
				accessoriesshowList: [{
						src: '',
						value: '长跑服饰',
						id: 0
					},
					{
						src: '../../../static/img/ass1.png',
						value: '弓箭服饰',
						id: 1
					},
					{
						src: '../../../static/img/ass2.png',
						value: '长跑服饰',
						id: 2
					},
					{
						src: '../../../static/img/ass3.png',
						value: '弓箭服饰',
						id: 3
					},
					{
						src: '../../../static/img/ass4.png',
						value: '长跑服饰',
						id: 4
					},
					{
						src: '../../../static/img/ass5.png',
						value: '弓箭服饰',
						id: 5
					},
					{
						src: '../../../static/img/ass6.png',
						value: '长跑服饰',
						id: 6
					},
					{
						src: '../../../static/img/ass7.png',
						value: '长跑服饰',
						id: 7
					},
					{
						src: '../../../static/img/ass8.png',
						value: '弓箭服饰',
						id: 8
					},
					{
						src: '../../../static/img/ass9.png',
						value: '长跑服饰',
						id: 9
					},
					{
						src: '../../../static/img/ass10.png',
						value: '弓箭服饰',
						id: 10
					},
					{
						src: '../../../static/img/ass11.png',
						value: '长跑服饰',
						id: 11
					},

				],
				headshow: true,
				bodyshow: false,
				accessoriesshow: false,
				poster: 1,
				posterCode: [1, 1, 1],
				pause: '',
				lock:true,
			};
		},
		onLoad() {
			const that = this;
			this.pause = this.music.paused;
			setTimeout(function(){
				that.lock = false;
			},3000)
		},
		methods: {
			scroll: function(e) {
				console.log(e)
			},
			copyFn() {
				if(!this.lock){
					this.lock = true;
					let ww, hh;
					const query = uni.createSelectorQuery().in(this);
					query.select('#cvs').boundingClientRect(data => { //获取canvas-dom
						ww = data.width; //准确的宽高
						hh = data.height
						var ctx = uni.createCanvasContext('myCanvas') //绑定画布
						console.log(hh)
						ctx.drawImage(this.startList.footSrc, 0, 265, 347, 300); //填充进图片
						ctx.drawImage(this.startList.headSrc, 40, 0, 286, 281); //填充进图片
						ctx.drawImage(this.startList.accessoriesSrc, 300, 300, 106, 90); //填充进图片
						ctx.setFillStyle('#000') //设置内容1的文字样式
						ctx.setTextAlign('center') //设置对于坐标点的对齐方式
						ctx.draw(); //输出到画布中
						uni.showLoading({ //增加loading等待效果
							mask: true,
							title: '图片生成中'
						})
						setTimeout(() => { //不加延迟的话，base64有时候会赋予undefined
							uni.canvasToTempFilePath({
								canvasId: 'myCanvas',
								success: (res) => {
									this.lock = false;
									// const a	= this.getblob(res.tempFilePath)
					
									// var param = new FormData();
									// param.append('source_from',a);//在formdata加入需要的参数
									// param.append('file',a);
									uni.setStorage({
										key: 'man',
										data: res.tempFilePath
									})
									const code = this.posterCode
									// console.log(String(this.posterCode))
									if (code == undefined) {
					
									} else {
										uni.navigateTo({
											url: '../poster/poster?poster=' + this.poster + '&code=' + code
										})
									}
					
					
								}
							})
							this.lock = false;
							uni.hideLoading();
						}, 1200)
					}).exec();
				}
				
				// 
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

			chooseHatImg(item) {
				console.log(item.id)
				console.log(item.src)
				console.log(item)
				if (this.headshow == true) {
					this.startList.headSrc = item.src
					this.posterCode.splice(0, 1, item.id)
				} else if (this.bodyshow == true) {
					this.startList.footSrc = item.src;
					this.poster = item.id;
					this.posterCode.splice(1, 1, item.id)
				} else {
					this.startList.accessoriesSrc = item.src
					this.posterCode.splice(2, 1, item.id)
				}

			},
			showheadList() {
				this.headshow = true;
				this.bodyshow = false;
				this.accessoriesshow = false;
			},
			showFootList() {
				this.headshow = false;
				this.bodyshow = true;
				this.accessoriesshow = false;
			},
			showaccessoriesList() {
				this.headshow = false;
				this.bodyshow = false;
				this.accessoriesshow = true;
			},
			go() {

			},
		},
	}
</script>

<style lang="scss">
	#cvs {
		position: absolute;
		width: 400px;
		height: 603px;
		top: -99999899rpx;
		left: -99999899rpx;
		z-index: 9999;

	}

	.fish {
		width: 100%;

		image {
			position: absolute;
			top: 00vh;
			left: 0;
			width: 100%;
		}
	}

	.make {
		height: 100vh;
		width: 100%;


		.make_content {
			width: 100%;
			position: absolute;
			top: 132px;
			left: 0;


			.content_img {
				position: relative;
				width: 100%;
				height: 50vh;
				top: 30px;

				.head {
					image {
						position: absolute;
						bottom: 190px;
						left: 48%;
						margin-left: -71px;
						margin-top: -98px;
						width: 171px;
						height: 167px;
						z-index: 2;
					}

				}

				.foot {
					image {
						position: absolute;
						bottom: 50px;
						left: 45%;
						margin-left: -64px;
						margin-top: -58px;
						width: 170px;
						height: 146px;
						z-index: 1;
					}
				}

				.accessories {
					image {
						position: absolute;
						bottom: 127px;
						left: 67%;
						width: 46px;
						height: 53px;
						z-index: 4;
					}
				}

				.complete {
					width: 84px;
					height: 70px;
					font-size: 0.8rem;
					position: absolute;
					text-align: center;
					font-weight: 550;
					padding: 3px;
					bottom: 16px;
					right: 14px;
				}
			}

			.content_btn {
				margin-top: 30px;
				height: 10vh;
				justify-content: space-around;
				align-content: center;
				align-items: center;


				view {
					width: 60px;
					height: 60px;
					border-radius: 50%;
					background: #FFFFFF;
					display: flex;
					justify-content: center;
					align-items: center;
					align-content: center;

					image {
						width: 48px;
						height: 48px;
					}
				}

				.active {
					background-color: #FFFFFF;
				}
			}

			.scrol_bg {
				width: 310px;
				margin: 20px auto 0;
				border-radius: 8px;
				padding: 5px 5px;
				box-sizing: border-box;
				background-color: #FFFFFF;

				.bookshelf-content {
					white-space: nowrap; // 滚动必须加的属性
					width: 300px;
					box-sizing: border-box;

					.item {
						width: 12%;
						margin-right: 15px;
						display: inline-block;
						vertical-align: top;

						.img {
							width: 46px;
							height: 31px;
							padding: 20px 16px;
							display: inline-block;
							background-color: rgba($color: #fff, $alpha: 0.5);
							border-radius: 4px;
							border: 1px dashed #85ddf7;
							position: relative;


							image {
								width: 30px;
								height: 28px;
								border-radius: 4px;
								position: absolute;
								top: 50%;
								left: 50%;
								margin: -14px 0 0 -15px;
							}
						}

						.item-title {
							display: block; // 让字体换行
							width: 90%;
							font-size: 30upx;
							line-height: 40upx;
						}
					}
				}

				.next {
					position: absolute;
					bottom: 12px;
					right: 7px;

					image {
						width: 30px;
						height: 30px;
					}
				}
			}


		}

	}
</style>
