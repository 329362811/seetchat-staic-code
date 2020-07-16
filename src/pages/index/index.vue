<template>

	<div class="main">

		<!--头部-->
		<van-nav-bar :title='title' fixed />

		<div class="content" >
			<van-icon class="search-icon" name="search" />
			<van-tabs line-width="10px" color="#000000" v-model="active" animated>
				<van-tab title="最新求聊">最新求聊</van-tab>
				<van-tab title="人气榜单">人气榜单</van-tab>
				<van-tab title="同城">同城</van-tab>
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
    font-size:22px;
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
    right: 0;
    width: 25vw;
	text-align: center;
    line-height: 45px;
}
</style>
