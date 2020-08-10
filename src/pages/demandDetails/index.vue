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
					</div>
				</div>
				<van-form validate-first>
					<h2 class="dai-ma-yan-shi floatLeft">零度</h2>
					<div class="floatright">￥200</div>
					<div style="clear:both;"></div>
					<div class="padd-let">
						<span class="spanright5">深圳</span>
						<span class="spanright5">2小时前</span>
					</div>
					<div class="padd-let ">
						<van-tag round type="primary" class="van-col-woman"><van-icon name="contact"/>20</van-tag>
						<van-tag round type="success">美食</van-tag>
						<van-tag round type="danger">情感</van-tag>
						<van-tag round type="warning">休闲生活</van-tag>
						<div class="bor-bottom-solid"></div>
					</div>
				</van-form>
				<van-form validate-first>
					<h2 class="dai-ma-yan-shi">她的要求</h2>
					<h3 class="dai-ma-yan-shi2">{{value}}</h3>
					<van-field v-model="value1" label="开始时间" name="pattern" placeholder="" readonly/>
					<van-field v-model="value2" label="结束时间" name="validator" placeholder=""/>
					<van-field v-model="value3" label="发布时间" name="asyncValidator" placeholder=""/>
					<van-field v-model="value4" label="时长" name="asyncValidator" placeholder=""/>
					<van-field v-model="value5" label="需求标签" name="asyncValidator" placeholder=""/>
					<van-field v-model="value6" label="聊天方式" name="asyncValidator" placeholder=""/>
					<van-field v-model="value7" label="备注" name="asyncValidator" placeholder=""/>
					<div style="margin: 16px;">
					</div>
				</van-form>
				<van-form validate-first>
					<h2 class="dai-ma-yan-shi">个人资料</h2>
					<van-field v-model="value8" label="年龄" name="pattern" placeholder="" readonly/>
					<van-field v-model="value9" label="生日" name="validator" placeholder=""/>
					<van-field v-model="value10" label="ID号" name="asyncValidator" placeholder=""/>
					<van-field v-model="value11" label="个性签名" name="asyncValidator" placeholder=""/>
					<van-field v-model="value12" label="职业" name="asyncValidator" placeholder=""/>
					<van-field v-model="value13" label="星座" name="asyncValidator" placeholder=""/>
					<van-field v-model="value14" label="学校" name="asyncValidator" placeholder=""/>
					<van-field v-model="value15" label="爱好" name="asyncValidator" placeholder=""/>
					<div style="margin: 16px;">
					</div>
				</van-form>
				<van-form validate-first class="pl-div">
					<h2 class="dai-ma-yan-shi floatLeft">最近收到的评论（26）</h2>
					<div class="van-cell van-field">
						<div class="van-cell__title van-field__label">
							<van-image round fit="none" width="2.5rem" height="2.5rem" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
						</div>
						<div class="van-cell__value van-field__value">
							<div class="van-field__body">
								<div>李月如</div>
							</div>
							<div class="van-field__body">
								<div class="valueColor">是个话唠，聊的很愉快哈哈</div>
							</div>
							<div class="van-field__body">
								<van-image fit="contain" width="2rem" height="2rem" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
							</div>
						</div>
					</div>
					<div class="van-cell van-field">
						<div class="van-cell__title van-field__label">
							<van-image round fit="none" width="2.5rem" height="2.5rem" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
						</div>
						<div class="van-cell__value van-field__value">
							<div class="van-field__body">
								<div>伊依呀</div>
							</div>
							<div class="van-field__body">
								<div class="valueColor">一站式敏捷研发协作云平台凝聚腾讯研发方法及敏捷实践精髓助力企业研发更高效</div>
							</div>
						</div>
					</div>
					<div style="margin: 16px;">
						<van-button class="btnW50 color-rel" round block type="info" native-type="submit"><van-icon class="chat-sty" />提交</van-button>
						<van-button class="btnW50 color-redF" round block type="info" native-type="submit"><van-icon class="like-sty" />提交</van-button>
						<div style="clear:both;"></div>
					</div>
				</van-form>
			</div>
		<!--tabbar-->
		<!-- <TabBar/> -->
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
				value:"刚失恋，聊点开心的",
				value1:"2020-06-21 19:00",
				value2:"2020-06-21 19:00",
				value3:"06-20 18:26",
				value4:"60分钟",
				value5:"情感",
				value6:"文字/语音电话",
				value7:"-",
				value8:"22",
				value9:"6月20日",
				value10:"13700042455",
				value11:"-",
				value12:"学生",
				value13:"巨蟹座",
				value14:"中山大学",
				value15:"喜欢旅游",
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
		margin-bottom 50px
		.pl-div
			.van-field__label
				width 3.5em
			.van-cell__value
				text-align left
				background-color #F8F9FD
				padding 10px
				.valueColor
					color #252B3A
		.van-cell::after
			border-bottom 0px
		.dai-ma-yan-shi
			font-family PingFangSC-Medium
			color #252B3A
			font-size 22px
			padding 10px 16px
			margin 0
		.dai-ma-yan-shi2
			font-family PingFangSC-Medium
			color #252B3A
			font-size 18px
			padding 0px 16px
			margin 0
			font-weight normal
		.floatLeft
			float left
			width 70vw
		.floatright
			float left  
			width 20vw
			height 48px
			line-height 48px
			text-align center
			color #FF3434
		.van-tag
			margin-right 5px
		.van-col-woman
			background-color #FE75B6
		.padd-let
			padding: 0px 16px
			margin 5px 0px 10px 0px
		.bor-bottom-solid
			border-bottom  solid 1px #E9EEF6
			width 90vw
			height 1px
			margin-top 20px
		.spanright5
			margin-right 5px
		.btnW50
			width 45vw
			float left
		.color-rel
			background-color #F7D347
			border 1px solid #F7D347
			margin-right 2vw
		.color-redF
			background-color #FF4CA0
			border 1px solid #FF4CA0
		.chat-sty
			width 1em
			height 1em
			background url("../../../static/xiaoxi.png") center no-repeat
			background-size 100%
			position relative
			top 2px
			left -3px
		.like-sty
			width 1.2em
			height 1.2em
			background url("../../../static/guanzhu.png") center no-repeat
			background-size 100%
			position relative
			top 3px
			left -3px
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
