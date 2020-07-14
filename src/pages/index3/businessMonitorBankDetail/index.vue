<template>
    <div class="main">
     <!--头部导航-->
		<van-nav-bar :title="title[step]"  left-arrow @click-left="onClickLeft" ></van-nav-bar>
		<div id="myChart"></div>
		<div class="table">
			<van-row class="table-hearder">
				<van-col span="8" >口径 </van-col>
				<van-col span="5" >不良率</van-col>
				<van-col span="5" >比上月</van-col>
				<van-col span="5" >比年期</van-col>
			</van-row>
			<van-row class="table-content">
				<van-col span="24" v-for="item in data"  class="table-row">
					<van-col span="8" class="table-left-title">{{item.title}}</van-col>
					<van-col span="5" v-for="item1 in item.value">{{item1}}</van-col>	
				</van-col>
			</van-row>
		</div>
		
    </div>
</template>

<script>
	
	import NavBar from '@/components/navBar'
	import Vue from 'vue';
	import { Grid, GridItem,Image,Panel,Cell, CellGroup,Row, Col,Dialog,Toast ,Tab, Tabs } from 'vant';
	let echarts = require('echarts/lib/echarts');
	require('echarts/lib/chart/line');
	require('echarts/lib/component/title');
	require('echarts/lib/component/legend')
	export default {
	data() {
		return {
			title:['业务监测'],
			step:0,
			date:'2019-11-21',
			bank:'建行江苏省分行小企业业务部',
			active:0,
			noticePan1_text:'人行口径',
			barData: {
				title:'人行口径资产质量情况',
				subText:'单元(亿元)',
				color:['#525EFF', '#F58220'],
				xAxis:['贷款余额','不良贷款余额'],
				yAxis:['助学贷款',' 建档立卡货款','创业担保贷款','农户经营性贷款','小欲企业主货款','个体工商户贷款','微型企业货款','小型企业贷款'],
				data:[
					[320,320, 302, 101, 34, 90,50, 40],
					[120, 132, 101, 34, 90, 50, 20],
				],
			},
			
			data:[
					{
						'title':"合计",
						'value':["1.54%","-0.08%","-0.60%" ]
					},
					{
						'title':'小型企业贷款',
						'value':["1.54%","-0.08%","-0.60%" ]
					},
					{
						'title':'微型企业贷款',
						'value':["1.54%","-0.08%","-0.60%" ]
					},
					{
						'title':'个体工商户贷款',
						'value':["1.54%","-0.08%","-0.60%" ]
					},
					{
						'title':'小微企业主贷款',
						'value':["1.54%","-0.08%","-0.60%" ]
					},
				
			],
			myChart:null,
		}
	},

  //数据预加载
  created(){

  },

  //网页加载完成
  mounted () {
  	var that = this ;
  	setTimeout(function () {
  		that.createChart();
  	},100)
  
  },

  //声明方法
  methods : {
      onClickLeft:function(){
		  this.$router.go(-1);
	  },
	  createChart: function() {
	  
	  	if(this.myChart == null){
	  		// 基于准备好的dom，初始化echarts实例
	  		this.myChart = echarts.init(document.getElementById('myChart'))
	  		let option1 =  {
				color: this.barData.color,
				tooltip : {
						trigger: 'axis',
						axisPointer : {            // 坐标轴指示器，坐标轴触发有效
							type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					  title: {
							text: this.barData.title,
							 subtext: this.barData.subText ,
							x: '20%',
							textAlign: 'center'
						}, 
				legend: {
					data: this.barData.xAxis,
					x: '40%',
				},
				grid: {
					left: '3%',
					right: '24%',
					bottom: '3%',
					top:'20%',
					containLabel: true
				},
				xAxis:  {
					type: 'value'
				},
				yAxis: {
					type: 'category',
					data: this.barData.yAxis,
					
				},
				 barWidth : 10,//柱图宽度
				series: []
			};
			var option = {
				color: this.barData.color,
				xAxis: {
				        type: 'time',
				        splitLine: {
				            show: false
				        }
				    },
				    yAxis: {
				        type: 'value',
				    },
				    grid: {
				        top: 110,
				        left: 35,
				        right: 15,
				        height: 160
				    },
					
				    series: []
			};
					
			this.barData.data.forEach((item,index)=>{  
				option.series.push(
					// {
					// 	name: this.barData.xAxis[index],
					// 	type: 'bar',
					// 	stack: '总量',
					// 	label: {
					// 		normal: {
					// 			show: true,
					// 			position: 'insideRight'
					// 		}
					// 	},
					// 	data: item
					// },
					
					 {
						name:this.barData.xAxis[index],
						type:'line',
						smooth: true,
						symbol: 'circle',
						symbolSize: 5,
						sampling: 'average',
						itemStyle: {
							normal: {
								color: '#8ec6ad'
							}
						},
						areaStyle: {
						    normal: {
						        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						            offset: 0,
						            color: '#8ec6ad'
						        }, {
						            offset: 1,
						            color: '#ffe'
						        }])
						    }
						},
						stack: 'a',
						data: item
					}
					
				);
				
			});
			
	  		// 绘制图表
	  		this.myChart.setOption(option);
	  	}
	  },
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
		// color: #fff;
		padding: 16px 0px;;
		background-color: rgb(238,238,238);
		// background-image: linear-gradient(to right, #4bb0ff, #6149f6);
	}
	.table-left-title{
		padding: 6px 0px;
		line-height: 36px;
		vertical-align: middle; 
		
	}
	.table-content {
		height: 48px;
		line-height: 48px;
		
	}
	.table-content>div:nth-child(2n+2){
		// background-color: lightgray;
	}
	.table-row div:nth-child(2) {
		color: rgb(116,165,223);
	}
	#myChart{
			width: 120%;
			height:310px;
			

		}
</style>
