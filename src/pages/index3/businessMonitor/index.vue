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
		<van-row class="noticeBar">
			<van-col span="12" class="text-center">
				<div class="noticePan1" @click="gotoBankDetail">{{noticePan1_text}}</div>
				<div class="noticePan2">不良率</div>
				<div class="noticePan3">比年初: <span>-0.60%</span></div>
			</van-col>
			<van-col span="12" class="text-center">
				<div class="noticePan4">2019/07/03</div>
				<div class="noticePan5">1.54%</div>
				<div class="noticePan6">比上月: <span>-0.08%</span></div>
			</van-col>
		</van-row>
		<p class="tip">责任口径不良排名</p>
		<van-tabs v-model="active" color="#4c62e7" line-width="150"   >
		  <van-tab v-bind:title="item.title" v-for="item in data" >
			  <van-cell v-bind:class="{redColor:item1.isOver}" v-bind:title="item1.bank" v-for="item1 in item.data"  is-link  @click="gotoDetail(item1)" v-bind:value="item1.rate"  />
		  </van-tab>
		 
		</van-tabs>
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
				'title':'二级分行不良率',
				data:[
					{
						'bank':'建行徐州泉山支行(汇总)',
						'rate':'35.80%',
						'isOver':true,
					},{
						'bank':'建行徐州泉山支行(汇总)',
						'rate':'25.80%',
						'isOver':true,
					},{
						'bank':'建行徐州泉山支行(汇总)',
						'rate':'1.80%',
						'isOver':false,
					},{
						'bank':'建行徐州泉山支行',
						'rate':'1.01%',
						'isOver':false,
					}
				]
			},
			{
				'title':'经办行不良率',
				data:[
					{
						'bank':'建行徐州泉山支行(汇总)',
						'rate':'35.80%',
					}
				]
			}
		]
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
	  },
	  gotoBankDetail:function(){
		  this.$router.push({path:'/index3/businessMonitorBankDetail'})
	  },
	  gotoDetail:function(obj){
		this.$router.push({path:'/index3/businessMonitorDetail', query: obj})
		 
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
</style>
