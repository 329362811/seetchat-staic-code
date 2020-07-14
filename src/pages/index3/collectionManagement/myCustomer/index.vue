<template>
    <div class="main">
		<!-- 遮罩层 -->
		<div v-show="show" class="popup" >
			<van-cell-group class="popup-cell-group"  v-if="popup==1">
				<van-icon name="close" class="close-icon" @click="showPopup()"/>
				<van-cell class="padding">
					 <van-col span="8">债项编号</van-col>
					 <van-col span="14">{{infoDetail.num}}</van-col>
				</van-cell>
				<van-cell class="padding">
					 <van-col span="8">授信品种</van-col>
					 <van-col span="14">{{infoDetail.pz}}</van-col>
				</van-cell>
				<van-cell class="padding">
					 <van-col span="8">币种</van-col>
					 <van-col span="14">{{infoDetail.bz}}</van-col>
				</van-cell>
				<van-cell class="padding">
					 <van-col span="8">债项金额</van-col>
					 <van-col span="14">{{infoDetail.je}}</van-col>
				</van-cell>
				<van-cell class="padding">
					 <van-col span="8">起始日期</van-col>
					 <van-col span="14">{{infoDetail.date1}}</van-col>
				</van-cell>
				<van-cell class="padding">
					 <van-col span="8">到期日期</van-col>
					 <van-col span="14">{{infoDetail.date2}}</van-col>
				</van-cell>
				<van-cell class="padding">
					 <van-col span="8">最近一次到期日</van-col>
					 <van-col span="14">{{infoDetail.date3}}</van-col>
				</van-cell>
				<van-cell class="padding">
					 <van-col span="8">债项余额</van-col>
					 <van-col span="14">{{infoDetail.ye}}</van-col>
				</van-cell>
				<van-cell class="padding">
					 <van-col span="8">还款方式</van-col>
					 <van-col span="14">{{infoDetail.fs}}</van-col>
				</van-cell>
				<van-cell class="padding">
					 <van-col span="8">逾期本金</van-col>
					 <van-col span="14">{{infoDetail.bj}}</van-col>
				</van-cell>
			 
				 <van-cell class="padding">
				 	 <van-col span="8">最近一次到期日</van-col>
				 	 <van-col span="14">{{infoDetail.date3}}</van-col>
				 </van-cell>
				 <van-cell class="padding">
				 	 <van-col span="8">债项余额</van-col>
				 	 <van-col span="14">{{infoDetail.ye}}</van-col>
				 </van-cell>
				 <van-cell class="padding">
				 	 <van-col span="8">还款方式</van-col>
				 	 <van-col span="14">{{infoDetail.fs}}</van-col>
				 </van-cell>
			 </van-cell-group>
			 
			 <van-cell-group class="popup-cell-group"  v-if="popup==2">
				 <van-cell class="padding" v-for="(item,index) in this.option1" @click="setValue(item)">
				 	{{item}}
				 </van-cell>
			 </van-cell-group>
		</div>
     <!--头部导航-->
		<van-nav-bar :title="title[step]"  left-arrow @click-left="onClickLeft" ></van-nav-bar>
		<van-cell-group class="margin-top" >
			<van-cell class="padding">
				 <van-col span="1"> <van-tag  type="danger"  class="left_tag">&nbsp;</van-tag></van-col>
				 <van-col span="23"><h3 class="title">基本信息</h3></van-col>
			</van-cell>
			<van-cell class="padding">
				 <van-col span="8">客户名称</van-col>
				 <van-col span="14">{{info.name}}</van-col>
			</van-cell>
			<van-cell class="padding">
				 <van-col span="8">客户编号</van-col>
				 <van-col span="14">{{info.num}}</van-col>
			</van-cell>
			<van-cell class="padding">
				 <van-col span="8">异常状态</van-col>
				 <van-col span="14">{{info.status}}</van-col>
			</van-cell>
			<van-cell class="padding">
				 <van-col span="8">信用评级</van-col>
				 <van-col span="14">{{info.level}}</van-col>
			</van-cell>
			<van-cell class="padding">
				 <van-col span="8">客户规模</van-col>
				 <van-col span="14">{{info.guimo}}</van-col>
			</van-cell>
			<van-cell class="padding">
				 <van-col span="8">办公地址</van-col>
				 <van-col span="14">{{info.address}}</van-col>
			</van-cell>
			<van-cell class="padding">
				 <van-col span="8">客户所属部门</van-col>
				 <van-col span="14">{{info.bumen}}</van-col>
			</van-cell>
			<van-cell class="padding">
				 <van-col span="8">所属行业</van-col>
				 <van-col span="14">{{info.hangye}}</van-col>
			</van-cell>
			<van-cell class="padding">
				 <van-col span="8">实际控制人</van-col>
				 <van-col span="14">{{info.kzr}}</van-col>
			</van-cell>
		 </van-cell-group>
		
		<van-tabs v-model="active" color="#4c62e7" line-width="33%" title-active-color="#4c62e7">
		  <van-tab title="债项信息" >
			  <van-row class="tab-title">
			    <van-col class="col-title" span="12">授信品种</van-col>
			  	<van-col class="col-title" span="5" ><span>债项金额</span></van-col>
			  	<van-col class="col-title" span="7" ><span>到期时间</span></van-col>
			  </van-row>
			  <van-row :class="index%2==0?'white':'gray'" v-for="(item,index) in this.infos" @click="showPopup(index,1)">
			    <van-col class="col-word" span="12">{{item.msg}}</van-col>
			  	<van-col class="col-word" span="5" ><span>{{item.account}}</span></van-col>
			  	<van-col class="col-word" span="7" ><span>{{item.date}}</span></van-col>
			  </van-row>
		  </van-tab>
		  <van-tab title="客户账户" >
			  <div class="top_bar_main_box" >
			      <van-row class="top_bar_box" >
			          <van-col :class="type!==2?'active':''" class="top_bar_box_col top_bar_box_col_left " span="12"><p class="top_bar_box_text_left" @click="changeType(1)">还款账户</p></van-col>
			          <van-col :class="type==2?'active':''" class="top_bar_box_col" span="12"><p class="top_bar_box_text_right" @click="changeType(2)">其他账户</p></van-col>
			      </van-row>
			  
			  <div class="card_div" >
			     
			  	<van-row style="padding: 14px 12px 0">
			  	    <van-col class="card" span="20"><span class="bold">代扣帐号:</span><span>35101558001052516104</span></van-col>
			  	    <van-col class="tag" ><span>正常</span></van-col>
			  	</van-row>
			      <van-row style="padding: 4px 12px 0">
			          <van-col class="" span="4"><p class="card_list1_test_left" >余额：</p></van-col>
			  		<van-col class="" span="8" style="text-align: left"><p class="card_list1_test_right" >0</p></van-col>
			          <van-col class="" span="4"><p class="card_list1_test_left" >币种：</p></van-col>
			  		<van-col class="" span="8" style="text-align: left"><p class="card_list1_test_right" >人明币元</p></van-col>
			      </van-row>
			  	<van-row class="update">
			  	    余额更新
			  	</van-row>
			  </div>
		  </div>
		  </van-tab>
		  <van-tab title="催收策略" >
			  <div class="top_bar_main_box" >
				  <van-row style="padding: 4px 12px 0" >
				  	<van-col class="tab3_col" span="14" ><span>借款人实际控制人联系方式</span></van-col>
				  	<van-col class="tab3_col" span="10" ><span>张翼(13600970732)</span></van-col>
				  </van-row>
				  <van-row style="padding: 4px 12px 0" >
				  	<van-col class="tab3_col" span="14" ><span>借款人法定代表人联系方式</span></van-col>
				  	<van-col class="tab3_col" span="10" ><span>张翼(13600970732)</span></van-col>
				  </van-row>
				  <van-row style="padding: 4px 12px 0" >
				  	<van-col class="tab3_col" span="14" ><span>借款人财务经理联系方式</span></van-col>
				  </van-row>
				  <div class="hr"/>
				  <van-cell-group class="margin-top"  >
				  	<van-cell class="padding">
				  		 <van-col span="1"> <van-tag  type="danger"  class="left_tag">&nbsp;</van-tag></van-col>
				  		 <van-col span="23"><h3 class="title">短信提醒发送对象</h3></van-col>
				  	</van-cell>
				  	<van-cell>
				  		 <van-col class="margin" span="12" v-for="(item,index) in this.list1"><van-checkbox v-model="item.checked">{{item.object}}</van-checkbox></van-col>
				  	</van-cell>
					<van-cell class="padding">
						 <van-col span="1"> <van-tag  type="danger"  class="left_tag">&nbsp;</van-tag></van-col>
						 <van-col span="23"><h3 class="title">人工坐席催收对象</h3></van-col>
					</van-cell>
					<van-cell >
						 <van-col class="margin" span="12" v-for="(item,index) in this.list2"><van-checkbox v-model="item.checked">{{item.object}}</van-checkbox></van-col>
					</van-cell>
				</van-cell-group>
			  </div>
			  <van-row class="bottom-row" >
			  	<van-col class="tab3_buttom_col" span="12" ><span>下次逾期后催收策略</span></van-col>
			  	<van-col class="tab3_buttom_col" span="12" >
					<div class="dropdown-menu" @click="showPopup('',2)">
					{{value1}}<van-icon name="arrow-down" v-show="!show"/>
					<van-icon name="arrow-up" v-show="show"/>
					</div>
				</van-col>
				<van-row class="" >
					<van-button class="save-button" round type="info">保存</van-button>
				</van-row>
			  </van-row>
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
		title:['我的客户'],
		step:0,
		active:0,
		popup:1,
		type:0,
		show: false,
		infoDetail:{num:'351009115600660828',pz:'短期小微企业信用快贷',bz:'人民币元',je:'16,000.00',date1:'2018-07-23',date2:'2019-07-23',date3:'2019-03-2116',ye:'16,000.00',fs:'按固定周期付息，任意还本',bj:'0.00'},
		info:{name:'厦门利整宾馆有限公司',num:278860472062624278,status:"本金逾期",level:'',guimo:'小型',address:'中国福建省厦门市思明区吕岭路78号鹭江新城二层',bumen:'小企业业务部',hangye:'其他住宿业',kzr:'张翼'},
		infos:[
		       {msg:'短湖小微企业信用快货',account:'16000', date:'2019-07-23'},
		       {msg:'短期小微企业信用快贷',account:'37000', date:'2019-06-21'},
		       {msg:'短阴小微企业估用快贷',account:'23000', date:'2019-03-08'},
		       {msg:'短湖小微企业估用快货',account:'32000', date:'2019-02-24'},
	   ],
	   list1:[{checked:false,object:'借款人实际控制人'},{checked:false,object:'借款人法定代表人'},{checked:false,object:'借款人财务经理'},{checked:false,object:'客户经理'},],
	   list2:[{checked:false,object:'借款人实际控制人'},{checked:false,object:'借款人法定代表人'},{checked:false,object:'借款人财务经理'},],
	   value1: '人工坐席电话催收',
	   option1: [ '无', '短信催收', '催收通知书催收', '人工坐席电话催收', '上门催收', ],
		
	}
  },
  //数据预加载
  created(){},
  //网页加载完成
  mounted () {},
  //声明方法
  methods : {
      onClickLeft:function(){
		  this.$router.go(-1);
	  },
	  showPopup(index,popup) {
		  this.popup = popup;
		this.show = !this.show;
	  },
	  //切换tab2卡片
	  changeType:function(index){
		  this.type = index;
	  },
	  setValue(value) {
		  this.value1 = value;
		  this.show = !this.show;
	  },
  },
  //引入组件
  components: {NavBar,}
 }
</script>

<style lang="scss" scoped>
	.popup{
		background-color: rgba(0,0,0, 0.3);
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top:44px;
		z-index: 100;
		padding: 0 8px;
		align-items: center;
		text-align: center;
	}
	.popup-cell-group{
		padding-top: 10px;
		padding-bottom: 10px;
		border-radius: 14px;
		position: relative;
		top: 50%; /*偏移*/
		transform: translateY(-50%);
		.close-icon{
			position: relative;
			right:-44%;
			font-size: 24px;
		}
	}
	.content{
		padding: 0px;
		background-color: rgb(238,238,238);
		min-height: 600px;
	}
	.text-center{
		text-align: center;
	}
	.main{
		background-color: rgb(235,235,235);
	}
	.margin-top{
		margin:8px 0; 
	}
	.padding{
		padding: 4px 16px;
	}
	.left_tag{
		background-color: rgb(90,75,234);
		padding: 0px 3px;
		border-radius: 0px;;
		height: 16px;
	}
	.title{
		padding:0;
		margin: 0;
	}
	.tab-title{
		background-image: linear-gradient(to right, #4bb0ff, #6149f6);
		height: 38px;
		margin-top: 8px;
	}
	.col-title{
		color: white;
		line-height: 38px;
		text-align: center;
	}
	.col-word{
		line-height: 38px;
		padding-left: 6px;
	}
	.gray{
		background-color: rgb(245,245,245);
	}
	.white{
		background-color: white;
	}
	.top_bar_main_box{
		margin-top: 1px;
		padding-top: 4px;
		padding-bottom: 14px;
		background-color: white;
	    width: 100%;
	    justify-content: center;align-items: center;text-align: center;
	}
	.top_bar_box{
	    margin: 10px auto;
	    border: #4c62e7 1px solid;
	    width: 280px;
	    height: 38px;
	    border-radius: 10px;
	}
	.top_bar_box_col_left{
	    /*background-color: #4c62e7;*/
	    border-bottom-left-radius:7px;
	    border-top-left-radius: 7px;
	}
	.top_bar_box_text_left{
	    font-size: 14px;
	    line-height: 38px;
	    color: rgb(76,98,231);
	    margin-block-start:0;
	    margin-block-end:0;
	
	    border-bottom-left-radius:7px;
	    border-top-left-radius: 7px;
	}
	.top_bar_box_text_right{
	    font-size: 14px;
	    line-height: 38px;
	    color: rgb(76,98,231);
	    margin-block-start:0;
	    margin-block-end:0;
	
	    border-bottom-right-radius:7px;
	    border-top-right-radius: 7px;
	}
	.top_bar_box_col.active .top_bar_box_text_right, .top_bar_box_col.active .top_bar_box_text_left{
		background-color: rgb(76,98,231);
		color: #fff;
	}
	.card_div{
		margin: 18px 10px ;
		border-radius: 8px;
	    width: auto;
	    padding:0px;
		border: rgb(235,235,235) solid 1px;
		position: relative;
		.card{
		    color:#4C62E7;
		}
		.bold{
		    font-weight:bold;
		}
		.tag{
			background-color: limegreen;
			border-top-left-radius: 44px;
			border-bottom-left-radius: 44px;
			position: absolute;
			right: 0px;
			top: 8px;
			color: white;
			width: 60px;
			line-height: 30px;
			
		}
		.update{
			border-radius: 44px;
			border: 1px #4C62E7 solid;
			color: #4C62E7;
			width: 120px;
			font-size: 20px;
			line-height: 32px;
			margin-left: 18px;
			margin-bottom: 8px;
		}
		.img_location{
		    height: 18px;
		    width: 18px;
		}
		.card_list2_test{
		    color: #333333;
		    font-size: 18px;
			font-weight: bold;
		    margin-block-start:0;
		    margin-block-end:0;
		    line-height: 30px;
		}
		.card_list1_test_left{
		    color: #999999;
		    font-size: 14px;
		    margin-block-start:0;
		    margin-block-end:0;
		    line-height: 30px;
		    padding-left: 8px;
		}
		.card_list1_test_right{
		    color: #333333;
		    font-size: 14px;
		    margin-block-start:0;
		    margin-block-end:0;
		    line-height: 30px;
		}
	}
	.tab3_col{
		font-size: 14px;
		text-align: left;
		line-height: 24px;
	}
	.hr{
		border: 1px rgb(235,235,235) solid;
		width: 100%;
		height: 1px;
	}
	.margin{
		margin: 4px 0 ;
	}
	.bottom-row{
		margin-top: 8px;
		padding: 14px  8px 8px;
		background-color: white;
		text-align: center;
		
		.tab3_buttom_col{
			line-height: 40px;
			height: 40px;
		}
		.tab3_buttom_col span{
			line-height: 40px;
			height: 40px;
		}
		.dropdown-menu{
			border: #999999 1px solid;
			border-radius: 34px;
			line-height: 40px;
			height: 40px;
		}
		.save-button{
			width: 180px;
			margin-top: 18px;
		}
	}
	

	
	
	
</style>
