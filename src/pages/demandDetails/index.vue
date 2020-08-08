<template>

	<div class="main chat-demandDetails">

		<!--头部-->
		<van-nav-bar :title='title' fixed />

			<div class="content" >
				<div class="video-warp" id="video-warp">
					<!-- poster="img/preview.jpg" -->
					<i v-if="!isPlaying" @click="play" class="bofang"></i>
					<video id="video" src="@/assets/221aff1de192a2804a7db3ead45b32bd.mp4">                
						<source src="@/assets/221aff1de192a2804a7db3ead45b32bd.mp4" type="video/ogg"><source>                
						当前浏览器不支持 video直接播放。
					</video>
					<div class="controls" id="controls">
						<i v-if="isPlaying" @click="stop" class="pause" id="play"></i>
						<i v-else class="play" id="pause" @click="play" ></i>
						<div class="video-timer">
							<span id="currentTime">00:00</span>
						</div>
						<!--进度条-->
						<div class="progress">
							<div class="timrBar"></div>
						</div>
						<!--时长-->
						<div class="video-timer">
							<span id="duration">00:00</span>
						</div>
						<!-- <i id="sound" class="sound"></i>
						<i id="muteSound" class="sound"></i> -->
						<!-- <div class="video-sound">
							<div class="soundBar"></div>
						</div> -->
						<!-- <i id="screen"></i> -->
					</div>
				</div>
			</div>
		<!--tabbar-->
		<TabBar/>
	</div>
</template>

<script>
	//引入组件首字母大写
	import TabBar from '@/components/tabBar';
	import Vue from 'vue';
	import { Image,Panel,NoticeBar,Cell, CellGroup,Row, Col } from 'vant';
	Vue.use(Image).use(Panel).use(NoticeBar).use(CellGroup).use(Row).use(Col);

	export default {
		//基础数据存放处
		data (){
			return {
				title : '需求详情',
				current: 0,
				isShowNoticeBar:true,
				active:1,
				isPlaying:false,
				duration:"",
				currentTime:"",
			}
		},

		//数据预加载
		created (){
			//this.onloadedmetadataFunc()
		},

		//网页加载完成
		mounted() {
		},

		//声明方法
		methods : {
			onloadedmetadataFunc(){
				var v = {
					video: document.querySelector("video"),//容器框
					play: document.querySelector("play"),//播放按钮
					pause: document.querySelector("pause"),//暂停按钮
					duration: document.querySelector("duration"),//总时长
					currentTime: document.querySelector("currentTime"),//当前播放时间
					progress: document.getElementsByClassName("progress")[0],//进度条容器
					timrBar: document.getElementsByClassName("timrBar")[0], //进度条

					sound: document.getElementsByClassName("video-sound")[0], //音量容器    
					soundBar: document.getElementsByClassName("soundBar")[0],//音量
					playSpeed: document.querySelector("playSpeed"),//播放速率
					warp: document.querySelector("video-warp"), //视频区域距离左边距离
					soundPercent:0 ,//音量百分比
					fullScreen:document.querySelector("screen")/*全屏按钮*/
				};    
				//获取时长
				this.duration = this.timer(v.duration);
				this.currentTime = this.timer(v.currentTime);
				//进度条跟随
				v.video.ontimeupdate = function() {
					var currentTime = v.video.currentTime;
					var duration = v.video.duration;
					var percent = currentTime / duration * 100;
					v.timrBar.style.width = percent + "%";
					v.currentTime.innerHTML = this.timer(v.video.currentTime);
				}
				//进度条获取坐标调用 拖拽实现方法
				var enableProgressDrag = function(e) {
					var progressDrag = false;
					v.progress.onmousedown = function(e) {
						progressDrag = true;
						updateprogress(e.pageX - v.warp.offsetLeft);
					}
					document.onmouseup = function(e) {
						if(progressDrag) {
							progressDrag = false;
							updateprogress(e.pageX - v.warp.offsetLeft);
						}

					}
					v.progress.onmousemove = function(e) {
						if(progressDrag) {
							updateprogress(e.pageX - v.warp.offsetLeft);
						}
					}
				};

				enableProgressDrag();
				
				//音量获取坐标调用 拖拽实现方法
				var enableSoundDrag = function(e) {
					var soundDrag = false;
					v.sound.onmousedown = function(e) {
						soundDrag = true;
						updatesound(e.pageX - v.warp.offsetLeft);
					}
					v.sound.onmouseup = function(e) {
						if(soundDrag) {
							soundDrag = false;
							updatesound(e.pageX - v.warp.offsetLeft);
						}

					}
					v.sound.onmousemove = function(e) {
						if(soundDrag) {
							updatesound(e.pageX - v.warp.offsetLeft);
						}
					}
				};
				enableSoundDrag();
				updatesound(null, 35); //初始化音量
			},
			//时间格式化            
             timer(seconds) {
                var minute = Math.floor(seconds / 60);
                if(minute < 10) {
                    minute = "0" + minute;
                }

                var second = Math.floor(seconds % 60);
                if(second < 10) {
                    second = "0" + second;
                }
                return minute + ":" + second;
            },
			go_Page : function(url){
				this.$router.push({name:url})

			},
			
			closeNotice:function(){
				this.isShowNoticeBar = false
			},
			play(){
				var audio =document.querySelector('#video');
				if(!this.isPlaying){
					audio.play();
					this.isPlaying = true;
				}
			},
			stop(){
				var audio =document.querySelector('#video');
				if(this.isPlaying){
					audio.pause();
					this.isPlaying = false;
					audio.currentTime = 0;
				}
			},
			bofangFunc(item) {
				
				// this.bofangLink =  item.url
				// this.bofangShowHide = true;
				
				// if(!item.isbofangLinkChecked){
				// 	this.stop();
				// }else{
				// 	this.isPlaying = true;
				// 	this.play()
				// }
			
			},
		},

		//计算属性
		computed: {
			
		},

		components: {
			TabBar
		}
	}
</script>
<style lang="stylus" scoped>
.chat-demandDetails
	font-family PingFangSC-Medium
	.content
	
		.video-warp
			width: 100%;
			margin: auto;
			text-align: center;
			
			i.bofang
				display inline-block
				width 5em
				height 5em
				background url("../../../static/bofang.png") center no-repeat
				background-size 80%
				position absolute
				top 50%
				left 50%
				transform translate(-50%,-50%)
				z-index 999
				
		video
			width 100%
		.controls
			width 96%
			margin auto
			height 2em
			line-height 2em
			text-align left
			box-sizing border-box
			padding-left 5px
			position relative
			top -2.2em
		.controls i.play
			display inline-block
			width 1.6em
			height 1.6em
			background url("../../../static/seet_play.png") center no-repeat
			background-size 60%
			position relative
			top 2px

		.controls i.pause
			display inline-block
			width 1.6em
			height 1.6em
			background url("../../../static/seet_suspend.png") center no-repeat
			background-size 60%
			position relative
			top 2px
		.progress
			display inline-block
			width 65%
			margin 0 5px
			height 5px
			line-height 5px
			background #D5D3CC
			border-radius 5px
			vertical-align super
			overflow hidden
			margin-bottom 0px

		.video-timer
			display inline-block
			vertical-align top
			color #ffffff
		.timrBar
			display inline-block
			height 11px
			background #FFFFFF
		.video-sound
			position absolute
			width 100px
			height 10px
			background #e5e9ef
			bottom 5px
			right 48px
			border-radius 5px
			overflow hidden
		.soundBar
			height 100%
			background #00a1d6
            
</style>
