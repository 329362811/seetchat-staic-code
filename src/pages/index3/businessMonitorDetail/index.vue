<template>
    <div class="main">
     <!--头部导航-->
		<van-nav-bar :title="title[step]"  left-arrow @click-left="onClickLeft" ></van-nav-bar>
		<van-row class="toolbar">
			<van-col span="12" class="text-center">{{date}}<img class="icon-date" src="../../../assets/images/38/date.png" alt=""></van-col>
			<van-col span="12" class="text-center">
				<van-col span="18" class="text-left"> {{bank}}</van-col>
				<van-col span="6"><img class="icon-date" src="../../../assets/images/38/Companyname@2x.png" alt=""></van-col>
			</van-col>
		</van-row>
		<div class="table">
			<van-row class="table-hearder">
				<van-col span="7" >指标 </van-col>
				<van-col span="4" >指标值</van-col>
				<van-col span="4" >比年初</van-col>
				<van-col span="4" >比上月</van-col>
				<van-col span="4" >比上旬</van-col>
			</van-row>
			<van-row class="table-content">
				<van-col span="24" v-for="item in data" >
					<van-col span="7" class="table-left-title">{{item.title}}</van-col>
					<van-col span="4" >21.37</van-col>
					<van-col span="4" >7.39</van-col>
					<van-col span="4" >0.05</van-col>
					<van-col span="4" >-0.18</van-col>
				</van-col>
			</van-row>
		</div>
		
    </div>
</template>

<script>
	
	import NavBar from '@/components/navBar'
	import Vue from 'vue';
	import { Grid, GridItem,Image,Panel,Cell, CellGroup,Row, Col,Dialog,Toast ,Tab, Tabs } from 'vant';
	
	export default {
	data() {
		return {
			title:['业务监测'],
			step:0,
			date:'2019-11-21',
			bank:'建行江苏省分行小企业业务部',
			active:0,
			noticePan1_text:'人行口径',
			data:[
					{
						'title':"贷款金额  (亿元)",
					},
					{
						'title':'贷款客户数(户)',
					},
					{
						'title':'不良贷款额(亿元)',
					},
					{
						'title':'不良贷款率',
					},
					{
						'title':'逾期贷款额',
					},
					{
						'title':'逾期客户数(户)',
					},
					{
						'title':'逾期非不良额(亿元)',
					},
					{
						'title':'逾期非不良率',
					}
			],
		}
	},

  //数据预加载
  created(){

  },

  //网页加载完成
  mounted () {
  
  },

  //声明方法
  methods : {
      onClickLeft:function(){
		  this.$router.go(-1);
	  }
  },
  //引入组件
  components: {
	NavBar,

  }
 }
</script>

<style lang="scss" scoped>
	.content{
		padding: 0px;
		background-color: rgb(238,238,238);
		min-height: 600px;
	}
	.text-center{
		text-align: center;
	}
	.text-left{
		text-align: left;
	}
	.no-border{
		border: 0px;
	}
	.icon-date{
		width: 20px;
		height: 20px;
		vertical-align: sub;
	}
	.noticeBar{
		height: 130px;;
		background-image: linear-gradient(to right, #4bb0ff, #6149f6);
		background-size: 100% 100%;
		margin: 0px 16px;
		padding: 16px;
		border-radius: 16px;
		color: #FFFFFF;
	}
	.noticePan1{
		background-color: rgb(87,92,236);
		margin-left: -16px;
		border-radius:0px 16px 16px  0px ;
		padding: 4px 36px 4px 4px;
		width: 60%;
		text-align: right;
		border: 1px lightgray solid;
	}
	.noticePan2{
		font-size: 26px;
		padding: 10px 0px 10px 0px;
	}
	.noticePan3,.noticePan6{
		padding: 4px;
	}
	.noticePan3 span,.noticePan6 span{
		color: rgb(76,224,148);
	}
	
	.noticePan4{
		padding: 4px 4px 4px 4px;
		height: 26px;
		
	}
	.noticePan5{
		color:rgb(249,241,40);
		font-size: 26px;
		padding: 10px 0px 10px 0px;
	}
	.tip{
		padding: 0px 32px ;
	}
	.van-cell__value span{
		padding-right: 16px;;
	}
	.redColor .van-cell__value span{
		color: rgb(232,86,93);
	}
	
	.table{
		text-align: center;
	}
	.table .table-hearder{
		text-align:  center;
		color: #fff;
		padding: 16px 0px;;
		background-image: linear-gradient(to right, #4bb0ff, #6149f6);
	}
	.table-left-title{
		padding: 6px 0px;
		line-height: 20px;
		vertical-align: middle; 
		
	}
	.table-content {
		height: 48px;
		line-height: 48px;
		
	}
	.table-content>div:nth-child(2n+2){
		background-color: lightgray;
	}
</style>
