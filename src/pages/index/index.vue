<template>

	<div class="main chat-container">

		<!--头部-->
		<van-nav-bar :title='title' fixed />

		<div class="content" >
			<van-icon class="search-icon" name="search" @click="searchFunc" />
			<van-tabs class="vanTabs" line-width="10px" color="#000000" v-model="active" animated>
				<van-tab title="最新求聊">最新求聊</van-tab>
				<van-tab class="tabs-2" title="人气榜单">
					<van-cell class="vanCell-33" title="女" is-link arrow-direction="down" value="" />
					<van-cell class="vanCell-33" title="单量" is-link arrow-direction="down" value="" />
					<van-cell class="vanCell-33" title="深圳" is-link arrow-direction="down" value="" />
					<div class="vanDiv-img">
						<van-image radius="5px" class="vanImage" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						<div class="name-title">妲己nn</div>
						<div class="name-vlog">一个来自江湖的大佬</div>
					</div>
					<div class="vanDiv-img">
						<van-image radius="5px" class="vanImage" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						<div class="name-title">妲己nn</div>
						<div class="name-vlog">一个来自江湖的大佬</div>
					</div>
					<div class="vanDiv-img">
						<van-image radius="5px" class="vanImage" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						<div class="name-title">妲己nn</div>
						<div class="name-vlog">一个来自江湖的大佬</div>
					</div>
					<div class="vanDiv-img">
						<van-image radius="5px" class="vanImage" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						<div class="name-title">妲己nn</div>
						<div class="name-vlog">一个来自江湖的大佬</div>
					</div>
					<div class="vanDiv-img">
						<van-image radius="5px" class="vanImage" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						<div class="name-title">妲己nn</div>
						<div class="name-vlog">一个来自江湖的大佬</div>
					</div>
					<div class="vanDiv-img">
						<van-image radius="5px" class="vanImage" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						<div class="name-title">妲己nn</div>
						<div class="name-vlog">一个来自江湖的大佬</div>
					</div>
					<div class="vanDiv-img">
						<van-image radius="5px" class="vanImage" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						<div class="name-title">妲己nn</div>
						<div class="name-vlog">一个来自江湖的大佬</div>
					</div>
				</van-tab>
				<van-tab class="tabs-3" title="同城">
					<div class="vanDiv-img">
						<van-image radius="5px" class="vanImage" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						<div class="name-title">妲己nn</div>
						<div class="name-title-right">1.6KM</div>
						<div class="name-vlog">一个来自江湖的大佬</div>
					</div>
					<div class="vanDiv-img">
						<van-image radius="5px" class="vanImage" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						<div class="name-title">妲己nn</div>
						<div class="name-vlog">一个来自江湖的大佬</div>
					</div>
					<div class="vanDiv-img">
						<van-image radius="5px" class="vanImage" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						<div class="name-title">妲己nn</div>
						<div class="name-vlog">一个来自江湖的大佬</div>
					</div>
					<div class="vanDiv-img">
						<van-image radius="5px" class="vanImage" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						<div class="name-title">妲己nn</div>
						<div class="name-vlog">一个来自江湖的大佬</div>
					</div>
					<div class="vanDiv-img">
						<van-image radius="5px" class="vanImage" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						<div class="name-title">妲己nn</div>
						<div class="name-vlog">一个来自江湖的大佬</div>
					</div>
					<div class="vanDiv-img">
						<van-image radius="5px" class="vanImage" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						<div class="name-title">妲己nn</div>
						<div class="name-vlog">一个来自江湖的大佬</div>
					</div>
					<div class="vanDiv-img">
						<van-image radius="5px" class="vanImage" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						<div class="name-title">妲己nn</div>
						<div class="name-vlog">一个来自江湖的大佬</div>
					</div>
				</van-tab>
			</van-tabs>
		</div>
		<!--tabbar-->
		<TabBar/>
	</div>
</template>

<script>
	//引入组件首字母大写
	import TabBar from '@/components/tabBar';
	import Vue from 'vue';
	import { Image,Panel,NoticeBar,Cell, CellGroup,Row, Col,Dialog } from 'vant';
	Vue.use(Image).use(Panel).use(NoticeBar).use(CellGroup).use(Row).use(Col);

	export default {
		//基础数据存放处
		data (){
			return {
				title : '找我聊',
				current: 0,
				isShowNoticeBar:true,
				active:1,
			}
		},

		//数据预加载
		created (){
			var jsonStr = sessionStorage.getItem('userinfo');

			Dialog.confirm({
				confirmButtonText:'去完善',
				message: '请您完善资料<br />会帮您赢得更多青睐～',
			})
			.then(() => {
				// on confirm
			})
			.catch(() => {
				// on cancel
			});
		},

		//网页加载完成
		mounted : function(){

			Dialog.setDefaultOptions({
				confirmButtonText:'查看',
				confirmButtonColor:'#4c62e7'
			})

		},

		//声明方法
		methods : {
			go_Page : function(url){
				this.$router.push({name:url})

			},
			
			closeNotice:function(){
				this.isShowNoticeBar = false
			},
			searchFunc(){
				this.$router.push("/searchIndex")
			}
		},

		//计算属性
		computed: {
			
		},

		components: {
			TabBar
		}
	}
</script>
<style>
.van-tab{font-size: 13px;}
.van-tab--active {
    font-size:21px;
}
.van-tabs__nav--line{
	width: 75vw;
	border: none !important;
}
[class*=van-hairline]::after{
	border: none !important;
}
.search-icon{
	position: fixed;
    top: 46px;
    right: 5vw;
    width: 20vw;
	text-align: right;
    line-height: 45px;
	z-index: 99;
}
</style>
<style lang="stylus" scoped>
.chat-container
	font-family PingFangSC-Medium
	.content
		.vanTabs
			.tabs-2
				.vanCell-33
					width 33%
					float left
				.vanDiv-img
					margin 12px 0 0 4vw
					width 44vw
					float left
					position relative
					font-size 12px
					color #ffffff
					.vanImage
						width 100%
						height 12rem
					.name-title
						margin-left 10px
						position absolute
						bottom 25px
						font-size 13px
					.name-vlog
						margin-left 10px
						position absolute
						bottom 10px
			.tabs-3
				.vanDiv-img
					margin 12px 0 0 4vw
					width 44vw
					float left
					position relative
					font-size 12px
					color #ffffff
					.vanImage
						width 100%
						height 12rem
					.name-title
						margin-left 10px
						position absolute
						bottom 25px
						font-size 14px
					.name-title-right
						position absolute
						bottom 25px
						right 10px
						font-size: 12px;
					.name-vlog
						margin-left 10px
						position absolute
						bottom 10px
</style>
