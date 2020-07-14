<template>
    <div class="main" style="position: relative">

     <!--头部导航-->
		<van-nav-bar :title="title"  ></van-nav-bar>
		<img src="../../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
    <div class="content">
		<div v-show='type==0'>
			<van-cell-group class="bg-grey"  >
				<div >
					<van-cell>
						 <van-col span="1"> <van-tag type="danger" class="left_tag">&nbsp;</van-tag></van-col>
						 <van-col span="23"><h3>{{info.company_info.company_name}}</h3></van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">全业法人营业执照:</van-col>
						 <van-col span="12"><img class="yyzz" src="../../../assets/images/other/yyzz.png" alt=""></van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">新一代客户编号:</van-col>
						 <van-col span="12">{{info.company_info.customer_id}}</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">统一社会信用代码:</van-col>
						 <van-col span="12">{{info.company_info.unified_social_credit_code}}</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">企业名称:</van-col>
						 <van-col span="12">{{info.company_info.company_name}}</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">企业地址:</van-col>
						 <van-col span="12">{{info.company_info.legal_representative_address}}</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">法定代表人:</van-col>
						 <van-col span="12">{{info.company_info.legal_representative}}</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">法定代表人电话:</van-col>
						 <van-col span="12">{{info.company_info.mobile}}</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">法定代表人地址:</van-col>
						 <van-col span="12">{{info.company_info.enterprise_address}}</van-col>
					</van-cell>
				</div>
			 </van-cell-group>
		</div>
		<div v-show='type==1'>
			<van-cell-group class="bg-grey"  >
				<div >
					<van-cell>
						 <van-col span="1"> <van-tag type="danger" class="left_tag">&nbsp;</van-tag></van-col>
						 <van-col span="23"><h3>企业主信息</h3></van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">企业主身份证:</van-col>
						 <van-col span="12"><img class="yyzz" src="../../../assets/images/idcard/sfz.png" alt=""></van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">姓名:</van-col>
						 <van-col span="12">{{info.company_main_info.name}}</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">性别:</van-col>
						 <van-col span="12">{{info.company_main_info.sex}}</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">民族:</van-col>
						 <van-col span="12">{{info.company_main_info.ethnic}}</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">出生日期:</van-col>
						 <van-col span="12">{{info.company_main_info.birth}}</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">住址:</van-col>
						 <van-col span="12">{{info.company_main_info.address}}</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">公民身份证号码:</van-col>
						 <van-col span="12">{{info.company_main_info.idcard}}</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">有效期限:</van-col>
						 <van-col span="12">{{info.company_main_info.validity_period}}</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">学历:</van-col>
						 <van-col span="12">{{info.company_main_info.record_of_formal_schooling}}</van-col>
					</van-cell><van-cell>
						 <van-col span="10">手机号码:</van-col>
						 <van-col span="12">{{info.company_main_info.mobile}}</van-col>
					</van-cell><van-cell>
						 <van-col span="10">工作单位:</van-col>
						 <van-col span="12">{{info.company_main_info.work}}</van-col>
					</van-cell><van-cell>
						 <van-col span="10">婚烟情况:</van-col>
						 <van-col span="12">{{info.company_main_info.marriage_status}}</van-col>
					</van-cell><van-cell>
						 <van-col span="10">家庭人数:</van-col>
						 <van-col span="12">{{info.company_main_info.households}}</van-col>
					</van-cell>
				</div>
			 </van-cell-group>
		</div>
		<div v-show='type==2'>
				<van-cell-group class="bg-grey"  >
					<div class="grey_bg"> </div>
					<div class="">
						<van-cell>
							<van-col span="1"> <van-tag type="danger" class="left_tag">&nbsp;</van-tag></van-col>
							<van-col span="23"><h3>关联人信息1</h3></van-col>
						</van-cell>
						<van-cell>
							<van-col span="10">关系</van-col>
							<van-col span="12">其他（默认）</van-col>
						</van-cell>
						<van-cell>
							<van-col span="10">企业主身份证:</van-col>
							<van-col span="12"><img class="yyzz" src="../../../assets/images/idcard/sfz.png" alt=""></van-col>
						</van-cell>
						<van-cell>
							<van-col span="10">姓名:</van-col>
							<van-col span="12">李天明</van-col>
						</van-cell>
						<van-cell @click="show_3" v-show="show3">
							<div class="blue_bg_box"><p class="list_text_open">展开详情<van-icon name="arrow-down" /></p></div>
						</van-cell>

					</div>
					<div class="grey_bg"> </div>
					<div v-show="!show3">
						<van-cell>
							 <van-col span="1"> <van-tag type="danger" class="left_tag">&nbsp;</van-tag></van-col>
							 <van-col span="23"><h3>关联人信息2</h3></van-col>
						</van-cell>
						<van-cell>
							 <van-col span="10">企业主身份证:</van-col>
							 <van-col span="12"><img class="yyzz" src="../../../assets/images/idcard/sfz.png" alt=""></van-col>
						</van-cell>
						<van-cell>
							 <van-col span="10">姓名:</van-col>
							 <van-col span="12">张三妻</van-col>
						</van-cell>
						<van-cell>
							 <van-col span="10">性别:</van-col>
							 <van-col span="12">女</van-col>
						</van-cell>
						<van-cell>
							 <van-col span="10">民族:</van-col>
							 <van-col span="12">汉</van-col>
						</van-cell>
						<van-cell>
							 <van-col span="10">出生日期:</van-col>
							 <van-col span="12">1990-11-21</van-col>
						</van-cell>
						<van-cell>
							 <van-col span="10">住址:</van-col>
							 <van-col span="12">广州市越秀区法政路XX号</van-col>
						</van-cell>
						<van-cell>
							 <van-col span="10">公民身份证号码:</van-col>
							 <van-col span="12">440103199011215555</van-col>
						</van-cell>
						<van-cell>
							 <van-col span="10">有效期限:</van-col>
							 <van-col span="12">2030-01-10</van-col>
						</van-cell>
						<van-cell>
							 <van-col span="10">学历:</van-col>
							 <van-col span="12">研究生或以上</van-col>
						</van-cell><van-cell>
							 <van-col span="10">手机号码:</van-col>
							 <van-col span="12">138002111111</van-col>
						</van-cell><van-cell>
							 <van-col span="10">工作单位:</van-col>
							 <van-col span="12">广州乐乐科技有限公司</van-col>
						</van-cell><van-cell>
							 <van-col span="10">婚烟情况:</van-col>
							 <van-col span="12">已婚有子女</van-col>
						</van-cell><van-cell>
							 <van-col span="10">家庭人数:</van-col>
							 <van-col span="12">3</van-col>
						</van-cell>
						<van-cell @click="show_3">
							<div class="blue_bg_box"><p class="list_text_open">收起<van-icon name="arrow-up" /></p></div>
						</van-cell>
					</div>
				 </van-cell-group>
			</div>
		<div v-show='type==3'>
			<van-cell-group class="bg-grey"  >
				<div class="grey_bg"> </div>
				<div class="">
					<van-cell>
						<van-col span="1"> <van-tag type="danger" class="left_tag">&nbsp;</van-tag></van-col>
						<van-col span="23"><h3>抵押物信息1</h3></van-col>
					</van-cell>

					<van-cell>
						<van-col span="10">不动产权证:</van-col>
						<van-col span="12"><img class="yyzz" src="../../../assets/images/other/budongchan.png" alt=""></van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">权利人:</van-col>
						<van-col span="12">艾仲华</van-col>
					</van-cell>
					<van-cell @click="show_4" v-show="show4" >
						<img src="../../../assets/images/38/Pulldown3@2x.png"  class="felx_img" v-show="show4">
					</van-cell>

				</div>
				<div class="grey_bg"> </div>
				<div v-show="!show4">
					<van-cell>
						<van-col span="1"> <van-tag type="danger" class="left_tag">&nbsp;</van-tag></van-col>
						<van-col span="23"><h3>抵押物信息2</h3></van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">企业法人：</van-col>
						<van-col span="12"><img class="yyzz" src="../../../assets/images/idcard/sfz.png" alt=""></van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">新一代客户编号:</van-col>
						<van-col span="12">44099999999</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">统一社会信用代码:</van-col>
						<van-col span="12">xxxxxxx</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">企业名称:</van-col>
						<van-col span="12">广州老地方有限公司</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">企业地址:</van-col>
						<van-col span="12">广州市越秀区法政路XX号</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">法定代表人:</van-col>
						<van-col span="12">广州市越秀区法政路XX号</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">公民身份证号码:</van-col>
						<van-col span="12">艾仲华</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">有效期限:</van-col>
						<van-col span="12">2030-01-10</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">法定代表人电话:</van-col>
						<van-col span="12">13800000000</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">法定代表人地址van-col></van-col>
						<van-col span="12">广州市越秀区法政路XX号</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">抵押人1联系方式:</van-col>
						<van-col span="12">138000000000</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10"></van-col>
						<van-col span="12">FC2384239482392</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10"></van-col>
						<van-col span="12">FC7717626617263</van-col>
					</van-cell>
					<van-cell @click="show_4" v-show="!show4" style="position: relative">
						<img src="../../../assets/images/38/Pullup__.png"  class="felx_img" v-show="!show4">
					</van-cell>

				</div>
			</van-cell-group>
		</div>
		<div v-show='type==4'>
			<van-cell-group class="bg-grey"  >
				<div class="grey_bg"> </div>
				<div class="">
					<van-cell>
						<van-col span="1"> <van-tag type="danger" class="left_tag">&nbsp;</van-tag></van-col>
						<van-col span="23"><h3>抵押人信息1</h3></van-col>
					</van-cell>
					<div >

						<van-cell>
							<van-col span="10">自然人：</van-col>
							<van-col span="12"><img class="yyzz" src="../../../assets/images/idcard/sfz.png" alt=""></van-col>
						</van-cell>

						<van-cell>
							<van-col span="10">姓名:</van-col>
							<van-col span="12">艾仲华</van-col>
						</van-cell>
						<van-cell>
							<van-col span="10">性别:</van-col>
							<van-col span="12">女</van-col>
						</van-cell>
						<van-cell>
							<van-col span="10">民族:</van-col>
							<van-col span="12">汉族</van-col>
						</van-cell>
						<van-cell>
							<van-col span="10">出生日期:</van-col>
							<van-col span="12">1976.8.1</van-col>
						</van-cell>
						<van-cell>
							<van-col span="10">住址:</van-col>
							<van-col span="12">广州市天河朱系新城中花城大道中海</van-col>
						</van-cell>
						<van-cell>
							<van-col span="10">公民身份证号码:</van-col>
							<van-col span="12">120106197608016578</van-col>
						</van-cell>
						<van-cell>
							<van-col span="10">有效期限:</van-col>
							<van-col span="12">2030-01-10</van-col>
						</van-cell>
						<van-cell>
							<van-col span="10">抵押人1联系方式:</van-col>
							<van-col span="12">13702137765</van-col>
						</van-cell>
						<van-cell>
							<van-col span="10"></van-col>
							<van-col span="12">FC7717626617263</van-col>
						</van-cell>
						<van-cell @click="show_4" v-show="!show4" style="position: relative">
							<img src="../../../assets/images/38/Pullup__.png"  class="felx_img" v-show="!show4">
						</van-cell>

					</div>

					<van-cell @click="show_4" v-show="show4" >
						<img src="../../../assets/images/38/Pulldown3@2x.png"  class="felx_img" v-show="show4">
					</van-cell>

				</div>
				<div class="grey_bg"> </div>
				<div v-show="!show4">
					<van-cell>
						<van-col span="1"> <van-tag type="danger" class="left_tag">&nbsp;</van-tag></van-col>
						<van-col span="23"><h3>抵押人信息2</h3></van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">企业法人：</van-col>
						<van-col span="12"><img class="yyzz" src="../../../assets/images/other/yyzz.png" alt=""></van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">新一代客户编号:</van-col>
						<van-col span="12">252841000000526649</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">统一社会信用代码:</van-col>
						<van-col span="12">91120116MA07K2307A</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">企业名称:</van-col>
						<van-col span="12">广州市睿智防水电器股份有限公司</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">企业地址:</van-col>
						<van-col span="12">广州市高新技术产业开发区迎宾大道188号
						</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">法定代表人:</van-col>
						<van-col span="12">艾仲华</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">公民身份证号码:</van-col>
						<van-col span="12">252841000000526649</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">有效期限:</van-col>
						<van-col span="12">2030-01-10</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">法定代表人电话:</van-col>
						<van-col span="12">13702137765</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">法定代表人地址</van-col>
						<van-col span="12">广州市高新技术产业开发区迎宾大道188号</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10">抵押人2联系方式:</van-col>
						<van-col span="12">138000000000</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10"></van-col>
						<van-col span="12">FC2384239482392</van-col>
					</van-cell>
					<van-cell>
						<van-col span="10"></van-col>
						<van-col span="12">FC7717626617263</van-col>
					</van-cell>
					<van-cell @click="show_4" v-show="!show4" style="position: relative">
						<img src="../../../assets/images/38/Pullup__.png"  class="felx_img" v-show="!show4">
					</van-cell>

				</div>
			</van-cell-group>
		</div>

	</div>

    </div>
</template>

<script>

	import NavBar from '@/components/navBar'
	import Vue from 'vue';
	import { Swipe, SwipeItem,Grid, GridItem,Image,Panel,NoticeBar,Cell, CellGroup,Row, Col,Dialog } from 'vant';
	export default {

  data() {
    return {
		show3:true,
		show4:true,
		info:{},
    }
  },


  //数据预加载
  created(){
  	console.log('query',this.$route.query.info)
	  this.info = this.$route.query.info;
  },

  //网页加载完成
  mounted : ()=>{

  },

  //声明方法
  methods : {
  	show_3 () {
  		this.show3 = !this.show3
	},
	  show_4 () {
		  this.show4=!this.show4
	  },

	  onClickLeft() {
		  this.$router.go(-1);
	  },
  },

  //计算属性
  computed: {
	 title :function  () {
			var type = localStorage.getItem('xxcj_type');

			switch (type){
				case 0:
					return '信息详情';
					break;
				case 1:
					return '信息采集详情';
					break;
				case 2:
					return '关联人信息';
					break;
				case 3:
					return '抵押物信息';
					break;
				case 4:
					return '抵押人信息';
					break;
				default:
					return '信息详情';
					break;
			}
		},
		type:function(){
			var type = localStorage.getItem('xxcj_type');

			return type ? type : 0;
		}
  },

  //引入组件
  components: {
    NavBar
  }


 }
</script>

<style lang="scss" scoped>
.content{
	padding: 0px;
	background-color: rgb(238,238,238);
	min-height: 640px;

}
.box_div{
	border-radius: 10px;
	margin: 18px 0;
	background-color: #f76037;
}
#grad {
  background: -webkit-linear-gradient(red, blue); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(red, blue); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(red, blue); /* Firefox 3.6 - 15 */
  background: linear-gradient(red, blue); /* 标准的语法 */
}
.text-center{
	text-align: center;
}
.step-container{
	padding: 12px;
	min-height: 30px;
}
.step-text-pan{
	font-size: 10px;
	width: 20%;
	padding: 2px 0px;
	float: left;
	border-radius: 14px;
	color: #666666;
}
.step-text-pan.active{
	background-image: url(../../../assets/images/other/Process@2x.png);
	background-size: 100% 100%;
	color: #fff;
	margin-top: -6px;
	padding-bottom: 12px;;
}
.blue_bg_box{
	margin: 0px auto;
	height: 30px;
	width: 100px;
	border-radius: 24px ;
	border: #4c62e7 1px solid;
	text-align: center;
}
.list_text_open{
	font-size: 14px;
	line-height: 30px;
	color: #4c62e7;
	margin-block-start: 0;
	margin-block-end: 0;
}
.felx_img{
	height: 19px;
	width:19px;
	position: relative;
	left: 48%;
};
.success{
		width: 25%;
		display: block;
		margin: 72px auto 10px;
	}
	.success-tip{
		text-align: center;
		margin-bottom: 30px;
	}
	.detail-tip{
		text-align: center;
		color: #999999;
	}
	.grey{
		color: #666666;
	}
	.field_container{
		padding: 10px 16px;;
	}
	.area_select{
			padding-left: 4px;
	}
	.area_select_pan{
		position: absolute;
		bottom: 10px;
		width: 100%;
	}
	.van-field .van-cell__value{
		border: 1px solid lightgray;
		background-color: red;
	}
	.theme_color{
		color:#4c62e7;
	}
	.logo{
			width: 22px;
			height: 24px;
			vertical-align: top;
		}
		h3,h4{
			margin: 0px;;
		}
		.line{
			border-bottom: 1px solid #dddddd;
		}
		.success-pan{
			min-height: 300px;
			background-color: #fff;
			position: relative;
		}
	.img_return{
		position: absolute;
		top: 14px;
		left:12px ;
		height: 18px;
		width: 18px;
		z-index: 100;
	}
		.jyButton{
			color: #fff;
			width: 260px;
			height: 38px;
			line-height: 38px;
			text-align: center;
			background-image: url(../../../assets/images/other/Mainbutton@2x.png);
			background-size: 100% 100%;
			position: absolute;
			bottom: -60px;
			left: 50%;
			margin-left: -130px;
			font-weight: bold;

		}
		.left_tag{
			background-color: rgb(90,75,234);
			padding: 0px 3px;
			border-radius: 0px;;
			height: 16px;
		}
		.yyzz{
			width: 100%;
		}
		.grey_bg{
			background-color: rgb(238,238,238);
			height: 8px;
		}
</style>
