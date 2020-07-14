<template>

  <div class="main">

   <!--头部-->
   <van-nav-bar
    :title='title'
    fixed
   />


  <div class="content" >

	<div class="grid-container">
		<div class="box">
			<van-grid>
			  <van-grid-item icon="photo-o" text="文字" style="background-color: red;" @click="go('informationAcquisition')">
				  <img src="../../assets/images/84/InformationCollection@2x.png" alt="">
				   <p>信息采集</p>
			  </van-grid-item>
			  <van-grid-item icon="photo-o" text="文字"  @click="go('creditCheck')">
			  			  <img src="../../assets/images/84/Creditcheck1@2x.png" alt="">
			  			   <p>征信校验</p>
			  </van-grid-item>
			  <van-grid-item icon="photo-o" text="文字" @click="go('loanLaunch')">
			  			  	<img src="../../assets/images/84/Loaninitiation1@2x.png" alt="">
			  			   <p>贷款发起</p>
			  </van-grid-item>

			  <van-grid-item icon="photo-o" text="文字" @click="go('applyQuery')">
			  			 <img src="../../assets/images/84/Creditinquiry@2x.png" alt="">
			  			   <p>申贷查询</p>
			  </van-grid-item>
			</van-grid>
			<van-grid>
			<van-grid-item icon="photo-o" text="文字" @click="go('mortgageRegistration')">
						<img src="../../assets/images/84/Mortgageregistration@2x.png" alt="">
						   <p>抵押登记</p>
			</van-grid-item>
			<van-grid-item icon="photo-o" text="文字" @click="go('loanTracking')">
						 <img src="../../assets/images/84/Post-loantracking@2x.png" alt="">
						   <p>贷后跟踪</p>
			</van-grid-item>
			  <van-grid-item icon="photo-o" text="文字" @click="go('contractSign')">
			  		<img src="../../assets/images/84/signacontract@2x.png" alt="">
			  			   <p>合同签订</p>
			  </van-grid-item>

			  <van-grid-item icon="photo-o" text="文字" @click="go('businessMonitor')">
			  		<img src="../../assets/images/84/signacontract@2x.png" alt="">
			  			   <p>业务监测</p>
			  </van-grid-item>
			  <van-grid-item icon="photo-o" text="文字" @click="go('collectionManagement')">
			  		<img src="../../assets/images/84/signacontract@2x.png" alt="">
			  			   <p>催收管理</p>
			  </van-grid-item>
			</van-grid>
		</div>
	</div>
	<img src="../../assets/images/other/banner2.png" alt="" class="banner">

	<van-cell-group >
		<van-cell is-link @click="go('loanLaunch')">
		  <!-- 使用 title 插槽来自定义标题 -->
		  <template slot="title" >
			    <van-tag type="danger" class="left_tag">&nbsp;</van-tag>
				<span class="custom-title">&nbsp;&nbsp;贷款发起</span>
		  </template>
		</van-cell>
		<div class="cell-container">
			<br>
			<van-cell class="cell-box">
				<div class=" dk-pan">
					<van-col span="15"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt="">&nbsp;广州市睿智防水电器股份有限公司 </van-col>
					<van-col span="9" class="subText">采集:2019/08/15 </van-col>
					<van-col class="grey" span="9">企业主</van-col><van-col span="15">艾仲华</van-col>
					<van-col class="grey" span="9">统一社会信用代码 </van-col><van-col span="15">&nbsp;91120116MA07K2307A</van-col>
					<van-col span="24" class="detail" @click="go('loanLaunch')"><img class="detail-img" src="../../assets/images/38/Initiatingaloan@2x.png" alt="">&nbsp;&nbsp;贷款发起</van-col>
				</div>
			</van-cell>
			<van-cell class="cell-box">
				<div class=" dk-pan">
					<van-col span="15"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt=""> 广州市睿智防水电器股份有限公司 </van-col>
					<van-col span="9" class="subText">采集:2019/08/15 </van-col>
					<van-col class="grey" span="9">企业主</van-col><van-col span="15">艾仲华</van-col>
					<van-col class="grey" span="9">统一社会信用代码 </van-col><van-col span="15">&nbsp;91120116MA07K2307A</van-col>
					<van-col span="24" class="detail"  @click="go('loanLaunch')"><img class="detail-img" src="../../assets/images/38/Initiatingaloan@2x.png" alt="">&nbsp;&nbsp;贷款发起</van-col>
				</div>
			</van-cell>
		</div>

	</van-cell-group>
  </div>
  <!--tabbar-->
  <TabBar/>

  </div>

</template>

<script>
//引入组件首字母大写
import TabBar from '@/components/tabBar';
import Vue from 'vue';
import { Swipe, SwipeItem,Grid, GridItem,Image,Panel,NoticeBar,Cell, CellGroup,Row, Col } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(Image)
.use(Panel).use(NoticeBar).use(CellGroup).use(Row).use(Col);

export default {

  //基础数据存放处
  data (){
     return {
       title : '贷款',
	    current: 0,
     }
  },

  //数据预加载
  created : function(){

    console.log('hello world');

  },

  //网页加载完成
  mounted : function(){

  },

  //声明方法
  methods : {

    go : function(url){
      this.$router.push({name:url});
    },
	onBannerChange(index) {
		this.current = index;
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

<style lang="scss" scoped>
.content{
	background-color: rgb(238,238,238);
}
.msg{
  text-align: center;
  padding:10px;
}
.banner{
	display: block;
	width:100%;
	height: auto;
}
.custom-indicator{
	position: absolute;
	bottom: 0px;
	height: 44px;
	width: 200px;
	left: 50%;
	margin-left: -100px;
	text-align: center;
	line-height: 44px;
}
.indicator{
	background-color: rgba(255,255,255,0.4);
	width: 12px;
	height: 12px;
	border-radius: 6px;
	display: inline-block;
	margin: 10px 6px;
}
.indicator.active{
	background-color: rgba(255,255,255,1);
}
.grid-container{
	padding: 10px 16px 0px 16px;

	border-radius: 12px;;

}
.grid-container .box{
	border: 1px solid rgb(248,248,248);
	box-shadow: 0 2px 2px 0 rgba(0,0,0,.15);
	min-height: 200px;
	border-radius: 12px;;
}
.grid-container .grid{
	width: 25%;
	height: 80px;
	float: left;
}
.grid-container img{
	width: 25%;
	min-width: 44px;
	display: block;
	margin: 0 auto;
}
.grid-container p{
	text-align: center;
	margin: 2px;;
	font-size: 14px;;
}
.left_tag{
	background-color: rgb(90,75,234);
	padding: 0px 3px;
	border-radius: 0px;;
	height: 16px;
}
.cell-num{
	color: #f76037;
	font-size: 26px;

}
.check{
	background-color: #4c62e7;
	padding: 0px 16px;
	border-radius: 14px;
	float: right;
}
.dk-pan{
	font-size: 13px;;
	padding: 0px 20px;;

}
.dk-pan div{
	padding: 4px 0px;
}
.grey{
	color: #999999;
}
.orange{
	color: #f76037;
}
.company{
	width: 16px;
	height: 16px;
	display: inline;
	margin-left: -20px;
	vertical-align:top;
	margin-top:2px;
}
.padding-bottom-16{
	padding-bottom: 32px;;
}
.cell-container{
	padding: 0px 12px;
	background-color: rgb(238,238,238);
	margin-top: -8px;;
	padding-bottom: 64px;
}
.cell-container .cell-box{
	border-radius: 8px;
	margin-bottom: 16px;
}
.subText{
	font-size: 12px;
	color: #666666;
	text-align: right;
}
.detail{
		text-align: center;
		color: #4c62e7;
		padding: 12px 0px 8px;
		font-size: 14px;
		margin-left: -11px;
		border-top: 1px lightgray solid;
	}

	.detail-img{
		width: 14px;;
		vertical-align: text-top;
	}
</style>
