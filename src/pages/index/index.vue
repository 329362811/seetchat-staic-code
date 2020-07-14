<template>

	<div class="main">

		<!--头部-->
		<van-nav-bar
				:title='title'
				fixed
		/>
		<img src="../../assets/images/48/Message@2x.png" class="img_massage" @click="go_Page('news')">

		<div class="content" >
			<div class="notice-bar" v-show="isShowNoticeBar">
				&nbsp;&nbsp;&nbsp;&nbsp;客户<span class="theme_color">王光明</span>进入名单池中，前往
				<div class="btn-group">
				  <span class="rob" @click="go('index2')">抢单</span>
				  <span class="close" @click="closeNotice" >X</span>
				</div>
			</div>
			<van-swipe :autoplay="3000" indicator-color="white" @change="onBannerChange">
				<van-swipe-item><img src="../../assets/images/other/banner.png" alt="" class="banner"></van-swipe-item>
				<van-swipe-item><img src="../../assets/images/other/banner3.png" alt="" class="banner"></van-swipe-item>
				<van-swipe-item><img src="../../assets/images/other/banner.png" alt="" class="banner"></van-swipe-item>
				<van-swipe-item><img src="../../assets/images/other/banner3.png" alt="" class="banner"></van-swipe-item>
				<van-swipe-item><img src="../../assets/images/other/banner.png" alt="" class="banner"></van-swipe-item>
				<div class="custom-indicator" slot="indicator">
					<ul>
						<li class="indicator " v-bind:class="{ active: current ==0  }">&nbsp;</li>
						<li class="indicator" v-bind:class="{ active: current ==1  }">&nbsp;</li>
						<li class="indicator" v-bind:class="{ active: current ==2  }">&nbsp;</li>
						<li class="indicator" v-bind:class="{ active: current ==3  }">&nbsp;</li>
						<li class="indicator" v-bind:class="{ active: current ==4  }">&nbsp;</li>
					</ul>
				</div>

			</van-swipe>

			<div class="grid-container">
				<div class="box">
					<van-grid>
						<van-grid-item v-for="item in menu" @click="go(item.url)" v-show="item.isChecked">
							<img :src="item.icon" alt="">

							<p>{{item.name}}</p>
						</van-grid-item>
						<van-grid-item @click="go('menu')">
							<img src="../../assets/images/84/custom.png">
						</van-grid-item>
					</van-grid>
				</div>
			</div>
			<van-cell-group >
				<van-cell  >
					<!-- 使用 title 插槽来自定义标题 -->
					<template slot="title">
						<van-tag type="danger" class="left_tag">&nbsp;</van-tag>
						<span class="custom-title">&nbsp;&nbsp;待办事项</span>
					</template>
				</van-cell>
				<van-cell class="padding-bottom-16">
					<van-col span="14">客户合规审核未通过</van-col>
					<van-col span="10">
						<span class="cell-num">12 </span> 户
						<van-button class="check" @click="go_Page('applyQuery')" type="primary" size="small" color="rgb(90,75,234)">查看</van-button>
					</van-col>

				</van-cell>
				<van-cell class="padding-bottom-16">

					<van-col span="14">客户贷款逾期通知</van-col>
					<van-col span="10">
						<span class="cell-num">10 </span> 户
						<van-button class="check" @click="go_Page('loanTracking')"  type="primary" size="small" color="rgb(90,75,234)">查看</van-button>
					</van-col>
				</van-cell>
				<van-cell class="padding-bottom-16">
					<van-col span="14">名下待抢单客户</van-col>
					<van-col span="10">
						<span class="cell-num"> 8 </span> 条
						<van-button class="check" type="primary" size="small" color="rgb(90,75,234)" @click="go_Page('grabMessage')">查看</van-button>
					</van-col>
				</van-cell>
			</van-cell-group>
			<van-cell-group >
				<van-cell is-link @click="go('index3')">
					<!-- 使用 title 插槽来自定义标题 -->
					<template slot="title">
						<van-tag type="danger" class="left_tag">&nbsp;</van-tag>
						<span class="custom-title">&nbsp;&nbsp;贷款查询</span>
					</template>
				</van-cell>
				<van-cell>
					<div class=" dk-pan">
						<van-col span="24"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt=""> 广州可可有限公司 </van-col>
						<van-col class="grey" span="8">企业主</van-col><van-col span="16">张三</van-col>
						<van-col class="grey" span="8">产品代码</van-col><van-col span="16">9613</van-col>
						<van-col class="grey" span="8">应还金额（元）</van-col><van-col class="orange" span="16">200,000</van-col>
						<van-col class="grey" span="8">到期时间</van-col><van-col span="16" class="orange">2019-07-15</van-col>
					</div>

				</van-cell>
				<!-- <van-cell>
					<div class=" dk-pan">
						<van-col span="24"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt=""> 广州可可有限公司 </van-col>
						<van-col class="grey" span="8">企业主</van-col><van-col span="16">张三</van-col>
						<van-col class="grey" span="8">产品代码</van-col><van-col span="16">9613</van-col>
						<van-col class="grey" span="8">应还金额（元）</van-col><van-col class="orange" span="16">200,000</van-col>
						<van-col class="grey" span="8">到期时间</van-col><van-col span="16" class="orange">2019-07-15</van-col>
					</div>

				</van-cell>
				<van-cell>
					<div class=" dk-pan">
						<van-col span="24"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt=""> 广州可可有限公司 </van-col>
						<van-col class="grey" span="8">企业主</van-col><van-col span="16">张三</van-col>
						<van-col class="grey" span="8">产品代码</van-col><van-col span="16">9613</van-col>
						<van-col class="grey" span="8">应还金额（元）</van-col><van-col class="orange" span="16">200,000</van-col>
						<van-col class="grey" span="8">到期时间</van-col><van-col span="16" class="orange">2019-07-15</van-col>
					</div>
				</van-cell> -->

				<van-cell>
					<br>
				</van-cell>

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
	import { Swipe, SwipeItem,Grid, GridItem,Image,Panel,NoticeBar,Cell, CellGroup,Row, Col,Dialog } from 'vant';
	Vue.use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(Image)
			.use(Panel).use(NoticeBar).use(CellGroup).use(Row).use(Col);

	export default {
		//基础数据存放处
		data (){
			return {
				title : '惠助你',
				current: 0,
				isShowNoticeBar:true
			}
		},

		//数据预加载
		created (){
			var jsonStr = sessionStorage.getItem('userinfo');
			if(jsonStr == '' || jsonStr == undefined || jsonStr == null){

				var infos = [
					{
						company_info:{
							customer_id:'252841000000526649',
							unified_social_credit_code:'91120116MA07K2307A',
							company_name:'广州市睿智防水电器股份有限公司',
							enterprise_address:'广州市高新技术产业开发区迎宾大道188号',
							legal_representative:'艾仲华',
							mobile:'13702137765',
							legal_representative_address:'广州市高新技术产业开发区迎宾大道188号',
						},
						company_main_info:{
							name:'艾仲华',
							sex:'女',
							ethnic:'汉族',
							birth:'1976.8.1',
							address:'广州市天河朱景新城中花城大道中海花城湾4号楼3们201',
							idcard:'120106197608016578',
							validity_period:'2030.1.1' ,//有效期
							record_of_formal_schooling : '研究生', //学历
							mobile:'13702137765',
							work:'广州市睿智防水电器股份有限公司',
							marriage_status:'已婚',
							households:'3',
						},
						associates:[   //关联人
							{
								relationship:'其他', //0=自然人， 1=  企业法人
								name:'李天明',
								sex:'男',
								ethnic:'汉族',
								birth:'1970.10.20',
								address:'广东省广州市天河区花城大道中海花城湾4号楼3门201',
								idcard:'120106197010204098',
								validity_period:'2030.1.1' ,//有效期
								record_of_formal_schooling : '研究生', //学历
								mobile:'13439078656',
								work:'无',
								marriage_status:'已婚',
								households:'3',
								open_status:true,
							}
						],
						mortgaged:[
							{
								relationship:'其他', //0=自然人， 1=  企业法人
								holder:'艾仲华',
								situations:'自由',
								address:'广东省广州市天河区花城大道中海花城湾4号楼3门201',
								number:'0130031024',
								type:'不动产权证',
								nature:'自有',
								use:'住宅',
								area:'120.4',
								Other:'无',
								house_nubmer:'0188192319',
								open_status:true
							}
						],
						mortgagor:[
							{
								relationship:'自然人', //0=自然人， 1=  企业法人
								name:'艾仲华',
								sex:'女',
								ethnic:'汉族',
								birth:'1976.8.1',
								address:'广州市天河朱景新城中花城大道中海花城湾4号楼3们201',
								idcard:'120106197608016578',
								validity_period:'2030.1.1' , //有效期
								diyaren_mobile:'13702137765',
								diyawu:[],
								customer_id:'',
								unified_social_credit_code:'',
								company_name:'',
								enterprise_address:'',
								legal_representative:'',
								mobile:'',
								open_status:true,
								radio:false,
							},
							{
								relationship:'企业法人', //0=自然人， 1=  企业法人
								name:'艾仲华',
								sex:'',
								ethnic:'',
								birth:'',
								address:'',
								idcard:'',
								validity_period:'' , //有效期
								diyaren_mobile:'',
								diyawu:[],
								customer_id:'252841000000526649',
								unified_social_credit_code:'91120116MA07K2307A',
								company_name:'广州市睿智防水电器股份有限公司',
								enterprise_address:'广州市高新技术产业开发区迎宾大道188号',
								legal_representative:'艾仲华',
								mobile:'13702137765',
								legal_representative_address:'广州市高新技术产业开发区迎宾大道188号',
								open_status:true,
								radio:false,
							}
						],
						unid:'10001',
						collect_time:'2019/10/08',
						step:0,  //贷款流程 ： 0=信息待采集 1=征信待校验 2=贷款待申请 3.合同待签订 4.待跟踪
						isPass:true,
						loan:{},
						status:0
					},
					{//已评估
						company_info:{
							customer_id:'252841000000526649',
							unified_social_credit_code:'91120116MA07K2307A',
							company_name:'广州市睿智防水电器股份有限公司',
							enterprise_address:'广州市高新技术产业开发区迎宾大道188号',
							legal_representative:'艾仲华',
							mobile:'13702137765',
							legal_representative_address:'广州市高新技术产业开发区迎宾大道188号',
						},
						company_main_info:{
							name:'艾仲华',
							sex:'女',
							ethnic:'汉族',
							birth:'1976.8.1',
							address:'广州市天河朱景新城中花城大道中海花城湾4号楼3们201',
							idcard:'120106197608016578',
							validity_period:'2030.1.1' ,//有效期
							record_of_formal_schooling : '研究生', //学历
							mobile:'13702137765',
							work:'广州市睿智防水电器股份有限公司',
							marriage_status:'已婚',
							households:'3',
						},
						associates:[   //关联人
							{
								relationship:'其他', //0=自然人， 1=  企业法人
								name:'李天明',
								sex:'男',
								ethnic:'汉族',
								birth:'1970.10.20',
								address:'广东省广州市天河区花城大道中海花城湾4号楼3门201',
								idcard:'120106197010204098',
								validity_period:'2030.1.1' ,//有效期
								record_of_formal_schooling : '研究生', //学历
								mobile:'13439078656',
								work:'无',
								marriage_status:'已婚',
								households:'3',
								open_status:true,
							}
						],
						mortgaged:[
							{
								relationship:'其他', //0=自然人， 1=  企业法人
								holder:'李锡旺',
								situations:'自由',
								address:'广东省广州市海珠区华府南路御华府24幢1号201室',
								number:'0130031024',
								type:'不动产权证',
								nature:'自有',
								use:'住宅',
								area:'120.4',
								Other:'无',
								house_nubmer:'00118810044',
								open_status:true

							}
						],
						mortgagor:[
							{
								relationship:'自然人', //0=自然人， 1=  企业法人
								name:'李锡旺',
								sex:'女',
								ethnic:'汉族',
								birth:'1976.8.1',
								address:'广州市天河朱景新城中花城大道中海花城湾4号楼3们201',
								idcard:'120106197608016578',
								validity_period:'2030.1.1' , //有效期
								diyaren_mobile:'13702137765',
								diyawu:[],
								customer_id:'',
								unified_social_credit_code:'',
								company_name:'',
								enterprise_address:'',
								legal_representative:'',
								mobile:'',
								open_status:true,
								radio:false,	},
							{
								relationship:'企业法人', //0=自然人， 1=  企业法人
								name:'艾仲华',
								sex:'',
								ethnic:'',
								birth:'',
								address:'',
								idcard:'',
								validity_period:'' , //有效期
								diyaren_mobile:'',
								diyawu:[],
								customer_id:'252841000000526649',
								unified_social_credit_code:'91120116MA07K2307A',
								company_name:'广州市睿智防水电器股份有限公司',
								enterprise_address:'广州市高新技术产业开发区迎宾大道188号',
								legal_representative:'艾仲华',
								mobile:'13702137765',
								legal_representative_address:'广州市高新技术产业开发区迎宾大道188号',
								open_status:true,
								radio:false,
							}
						],
						unid:'10002',
						collect_time:'2019/10/08',
						step:1,  //贷款流程 ： 0=信息待采集 1=征信待校验 2=贷款待申请 3.合同待签订 4.待跟踪
						isPass:true,
						loan:{},
						status:1,//
						diyawuList:1,
					},
					{
						company_info:{
							customer_id:'252841000000526649',
							unified_social_credit_code:'91120116MA07K2307A',
							company_name:'广州市睿智防水电器股份有限公司',
							enterprise_address:'广州市高新技术产业开发区迎宾大道188号',
							legal_representative:'艾仲华',
							mobile:'13702137765',
							legal_representative_address:'广州市高新技术产业开发区迎宾大道188号',
						},
						company_main_info:{
							name:'艾仲华',
							sex:'女',
							ethnic:'汉族',
							birth:'1976.8.1',
							address:'广州市天河朱景新城中花城大道中海花城湾4号楼3们201',
							idcard:'120106197608016578',
							validity_period:'2030.1.1' ,//有效期
							record_of_formal_schooling : '研究生', //学历
							mobile:'13702137765',
							work:'广州市睿智防水电器股份有限公司',
							marriage_status:'已婚',
							households:'3',
						},
						associates:[   //关联人
							{
								relationship:'其他', //0=自然人， 1=  企业法人
								name:'李天明',
								sex:'男',
								ethnic:'汉族',
								birth:'1970.10.20',
								address:'广东省广州市天河区花城大道中海花城湾4号楼3门201',
								idcard:'120106197010204098',
								validity_period:'2030.1.1' ,//有效期
								record_of_formal_schooling : '研究生', //学历
								mobile:'13439078656',
								work:'无',
								marriage_status:'已婚',
								households:'3',
								open_status:true,
							}
						],
						mortgaged:[
							{
								relationship:'其他', //0=自然人， 1=  企业法人
								holder:'艾仲华',
								situations:'自由',
								address:'广东省广州市天河区花城大道中海花城湾4号楼3门201',
								number:'0130031024',
								type:'不动产权证',
								nature:'自有',
								use:'住宅',
								area:'120.4',
								Other:'无',
								house_nubmer:'0188192319',
								open_status:true
							}
						],
						mortgagor:[
							{
								relationship:'自然人', //0=自然人， 1=  企业法人
								name:'艾仲华',
								sex:'女',
								ethnic:'汉族',
								birth:'1976.8.1',
								address:'广州市天河朱景新城中花城大道中海花城湾4号楼3们201',
								idcard:'120106197608016578',
								validity_period:'2030.1.1' , //有效期
								diyaren_mobile:'13702137765',
								diyawu:[],
								customer_id:'',
								unified_social_credit_code:'',
								company_name:'',
								enterprise_address:'',
								legal_representative:'',
								mobile:'',
								open_status:true,
								radio:false,
							},
							{
								relationship:'企业法人', //0=自然人， 1=  企业法人
								name:'艾仲华',
								sex:'',
								ethnic:'',
								birth:'',
								address:'',
								idcard:'',
								validity_period:'' , //有效期
								diyaren_mobile:'',
								diyawu:[],
								customer_id:'252841000000526649',
								unified_social_credit_code:'91120116MA07K2307A',
								company_name:'广州市睿智防水电器股份有限公司',
								enterprise_address:'广州市高新技术产业开发区迎宾大道188号',
								legal_representative:'艾仲华',
								mobile:'13702137765',
								legal_representative_address:'广州市高新技术产业开发区迎宾大道188号',
								open_status:true,
								radio:false,
							}
						],
						unid:'10003',
						collect_time:'2019/10/08',
						step:2,  //贷款流程 ： 0=信息待采集 1=征信待校验 2=贷款待申请 3.合同待签订 4.待跟踪
						isPass:true,
						loan:{},
						status:0
					},
					{
					company_info:{
						customer_id:'252841000000526649',
						unified_social_credit_code:'91120116MA07K2307A',
						company_name:'广州市睿智防水电器股份有限公司',
						enterprise_address:'广州市高新技术产业开发区迎宾大道188号',
						legal_representative:'艾仲华',
						mobile:'13702137765',
						legal_representative_address:'广州市高新技术产业开发区迎宾大道188号',
					},
					company_main_info:{
						name:'艾仲华',
						sex:'女',
						ethnic:'汉族',
						birth:'1976.8.1',
						address:'广州市天河朱景新城中花城大道中海花城湾4号楼3们201',
						idcard:'120106197608016578',
						validity_period:'2030.1.1' ,//有效期
						record_of_formal_schooling : '研究生', //学历
						mobile:'13702137765',
						work:'广州市睿智防水电器股份有限公司',
						marriage_status:'已婚',
						households:'3',
					},
					associates:[   //关联人
						{
							relationship:'其他', //0=自然人， 1=  企业法人
							name:'李天明',
							sex:'男',
							ethnic:'汉族',
							birth:'1970.10.20',
							address:'广东省广州市天河区花城大道中海花城湾4号楼3门201',
							idcard:'120106197010204098',
							validity_period:'2030.1.1' ,//有效期
							record_of_formal_schooling : '研究生', //学历
							mobile:'13439078656',
							work:'无',
							marriage_status:'已婚',
							households:'3',
							open_status:true,
						}
					],
					mortgaged:[
						{
							relationship:'其他', //0=自然人， 1=  企业法人
							holder:'艾仲华',
							situations:'自由',
							address:'广东省广州市天河区花城大道中海花城湾4号楼3门201',
							number:'0130031024',
							type:'不动产权证',
							nature:'自有',
							use:'住宅',
							area:'120.4',
							Other:'无',
							house_nubmer:'0188192319',
							open_status:true
						}
					],
					mortgagor:[
						{
							relationship:'自然人', //0=自然人， 1=  企业法人
							name:'艾仲华',
							sex:'女',
							ethnic:'汉族',
							birth:'1976.8.1',
							address:'广州市天河朱景新城中花城大道中海花城湾4号楼3们201',
							idcard:'120106197608016578',
							validity_period:'2030.1.1' , //有效期
							diyaren_mobile:'13702137765',
							diyawu:[],
							customer_id:'',
							unified_social_credit_code:'',
							company_name:'',
							enterprise_address:'',
							legal_representative:'',
							mobile:'',
							open_status:true,
							radio:false,
						},
						{
							relationship:'企业法人', //0=自然人， 1=  企业法人
							name:'艾仲华',
							sex:'',
							ethnic:'',
							birth:'',
							address:'',
							idcard:'',
							validity_period:'' , //有效期
							diyaren_mobile:'',
							diyawu:[],
							customer_id:'252841000000526649',
							unified_social_credit_code:'91120116MA07K2307A',
							company_name:'广州市睿智防水电器股份有限公司',
							enterprise_address:'广州市高新技术产业开发区迎宾大道188号',
							legal_representative:'艾仲华',
							mobile:'13702137765',
							legal_representative_address:'广州市高新技术产业开发区迎宾大道188号',
							open_status:true,
							radio:false,
						}
					],
					unid:'10004',
					collect_time:'2019/10/08',
					step:3,  //贷款流程 ： 0=信息待采集 1=征信待校验 2=贷款待申请 3.合同待签订 4.待跟踪
					isPass:true,
					loan:{},
					status:0
				},
					{
					company_info:{
						customer_id:'252841000000526649',
						unified_social_credit_code:'91120116MA07K2307A',
						company_name:'广州市睿智防水电器股份有限公司',
						enterprise_address:'广州市高新技术产业开发区迎宾大道188号',
						legal_representative:'艾仲华',
						mobile:'13702137765',
						legal_representative_address:'广州市高新技术产业开发区迎宾大道188号',
					},
					company_main_info:{
						name:'艾仲华',
						sex:'女',
						ethnic:'汉族',
						birth:'1976.8.1',
						address:'广州市天河朱景新城中花城大道中海花城湾4号楼3们201',
						idcard:'120106197608016578',
						validity_period:'2030.1.1' ,//有效期
						record_of_formal_schooling : '研究生', //学历
						mobile:'13702137765',
						work:'广州市睿智防水电器股份有限公司',
						marriage_status:'已婚',
						households:'3',
					},
					associates:[   //关联人
						{
							relationship:'其他', //0=自然人， 1=  企业法人
							name:'李天明',
							sex:'男',
							ethnic:'汉族',
							birth:'1970.10.20',
							address:'广东省广州市天河区花城大道中海花城湾4号楼3门201',
							idcard:'120106197010204098',
							validity_period:'2030.1.1' ,//有效期
							record_of_formal_schooling : '研究生', //学历
							mobile:'13439078656',
							work:'无',
							marriage_status:'已婚',
							households:'3',
							open_status:true,
						}
					],
					mortgaged:[
						{
							relationship:'其他', //0=自然人， 1=  企业法人
							holder:'艾仲华',
							situations:'自由',
							address:'广东省广州市天河区花城大道中海花城湾4号楼3门201',
							number:'0130031024',
							type:'不动产权证',
							nature:'自有',
							use:'住宅',
							area:'120.4',
							Other:'无',
							house_nubmer:'0188192319',
							open_status:true
						}
					],
					mortgagor:[
						{
							relationship:'自然人', //0=自然人， 1=  企业法人
							name:'艾仲华',
							sex:'女',
							ethnic:'汉族',
							birth:'1976.8.1',
							address:'广州市天河朱景新城中花城大道中海花城湾4号楼3们201',
							idcard:'120106197608016578',
							validity_period:'2030.1.1' , //有效期
							diyaren_mobile:'13702137765',
							diyawu:[],
							customer_id:'',
							unified_social_credit_code:'',
							company_name:'',
							enterprise_address:'',
							legal_representative:'',
							mobile:'',
							open_status:true,
							radio:false,
						},
						{
							relationship:'企业法人', //0=自然人， 1=  企业法人
							name:'艾仲华',
							sex:'',
							ethnic:'',
							birth:'',
							address:'',
							idcard:'',
							validity_period:'' , //有效期
							diyaren_mobile:'',
							diyawu:[],
							customer_id:'252841000000526649',
							unified_social_credit_code:'91120116MA07K2307A',
							company_name:'广州市睿智防水电器股份有限公司',
							enterprise_address:'广州市高新技术产业开发区迎宾大道188号',
							legal_representative:'艾仲华',
							mobile:'13702137765',
							legal_representative_address:'广州市高新技术产业开发区迎宾大道188号',
							open_status:true,
							radio:false,
						}
					],
					unid:'10005',
					collect_time:'2019/10/08',
					step:4,  //贷款流程 ： 0=信息待采集 1=征信待校验 2=贷款待申请 3.合同待签订 4.待跟踪
					isPass:true,
					loan:{},
					status:0
				}
				];

				sessionStorage.setItem('userinfo',JSON.stringify(infos));
			}


		},

		//网页加载完成
		mounted : function(){

			Dialog.setDefaultOptions({
				confirmButtonText:'查看',
				confirmButtonColor:'#4c62e7'
			})

			var textArray = [
				'您名下<span style="color:#4c62e7">8</span>个客户进入商机池<br>请点击查看',
				'您已抢单客户<span style="color:#4c62e7">王川冰</span>产品额度<br>发生变化，请点击查看',
				'您已抢单客户<span style="color:#4c62e7">白小飞</span>商机已失效<br>请点击查看',

			];
			if(Math.floor(Math.random()*10)%8 == 7){

				Dialog.confirm({
				  title: '最新消息',
				  message: textArray[Math.floor(Math.random()*10)%3]
				}).then(() => {
				  // on confirm
				}).catch(() => {
				  // on cancel
				});
			}

		},

		//声明方法
		methods : {
			go_Page : function(url){
				this.$router.push({name:url})

			},
			go : function(url){
				if(url=='offlineHuoDong'){//融智赋能
					Dialog.confirm({
						message: "请选择身份",
						//closeOnClickOverlay: true,
						confirmButtonText: "普惠营销管理岗",
						cancelButtonText: "营销主管岗" ,
						cancelButtonColor:"#1989fa",
					}).then(()=> {
						sessionStorage.setItem("intelligenceEnablement","management")
                    	sessionStorage.setItem("offlineHuoDong_active","普通岗_已发布")
						sessionStorage.setItem("saveCg","false") //默认保存草稿为false
						this.$router.push('/offlineHuoDong');
					}).catch(() => {
						sessionStorage.setItem("intelligenceEnablement","supervisor")
                    	sessionStorage.setItem("offlineHuoDong_active","主管岗_已发布")
						sessionStorage.setItem("saveCg","false") //默认保存草稿为false
						this.$router.push('/offlineHuoDong');
					})
				}else{
				 	// this.$router.push({ name: 'informationAcquisition', params: { userId: 123 }});
					this.$router.push({path:'/'+url, query: { userId: 123 }})
				}

			},
			onBannerChange(index) {
				this.current = index;
			},
			closeNotice:function(){
				this.isShowNoticeBar = false
			},
		},

		//计算属性
		computed: {
			menu:function(){
				var arr = JSON.parse(localStorage.getItem('home_menu'));
				if(arr == null || arr == undefined){
					arr = [
						{name:"信息采集",icon:require('../../assets/images/84/InformationCollection@2x.png'),url:'index3/informationAcquisition',isChecked:true},
						{name:"征信校验",icon:require('../../assets/images/84/Creditcheck1@2x.png'),url:'index3/creditCheck',isChecked:true},
						{name:"贷款发起",icon:require('../../assets/images/84/Loaninitiation1@2x.png'),url:'loanLaunch',isChecked:true},
						{name:"申贷查询",icon:require('../../assets/images/84/Creditinquiry@2x.png'),url:'index3/applyQuery',isChecked:true},
						{name:"贷后跟踪",icon:require('../../assets/images/84/Post-loantracking@2x.png'),url:'loanTracking',isChecked:false},
						{name:"合同签订",icon:require('../../assets/images/84/signacontract@2x.png'),url:'contractSign',isChecked:true},
						{name:"抵押登记",icon:require('../../assets/images/84/Mortgageregistration@2x.png'),url:'index3/mortgageRegistration',isChecked:true},
						{name:"融智赋能",icon:require('../../assets/images/84/off-lineactivity@2x.png'),url:'offlineHuoDong',isChecked:false},
						{name:"业绩展示",icon:require('../../assets/images/84/resultsshow@2x.png'),url:'myperformance',isChecked:false},
						{name:"客户抢单",icon:require('../../assets/images/84/Custmerrobsingle.png'),url:'index2',isChecked:false},
						{name:"咕咕管理",icon:require('../../assets/images/84/gugu@2x.png'),url:'gugu',isChecked:true},
						{name:"贷款催收",icon:require('../../assets/images/84/daikuancuishou.png'),url:'index3',isChecked:false},
						{name:"商机管理",icon:require('../../assets/images/84/shangjiguanli.png'),url:'index2',isChecked:false},
						{name:"贷款查询",icon:require('../../assets/images/84/daikuanguanli.png'),url:'index3',isChecked:false},
					]
					localStorage.setItem('home_menu',JSON.stringify(arr));
				}
				return arr;
			}
		},

		components: {
			TabBar
		}
	}
</script>

<style lang="scss" scoped>
	.msg{
		text-align: center;
		padding:10px;
	}
	.banner{
		width: 100%;
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
		padding: 10px 12px;

		border-radius: 8px;;

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
		padding: 0px 4px;
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
		padding: 0px 20px;;
	}
	.dk-pan div{
		padding: 4px 0px;
	}
	.img_massage{
		position: fixed;
		top: 14px;
		right:12px ;
		height: 18px;
		width: 18px;
		z-index: 1000;
	}
	.grey{
		color: #999999;
	}
	.orange{
		color: #f76037;
	}
	.company{
		width: 20px;
		height: 20px;
		display: inline;
		margin-left: -16px;
		vertical-align:text-center;
	}
	.padding-bottom-16{
		padding-bottom: 32px;;
	}
	.msg{
	  text-align: center;
	  padding:10px;
	}
	.banner{
		width: 100%;
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
		padding: 10px 12px;

		border-radius: 8px;;

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
		padding: 0px 4px;
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
		width: 20px;
		height: 20px;
		display: inline;
		margin-left: -16px;
		vertical-align:top;
		margin-top:2px;
	}
	.padding-bottom-16{
		padding-bottom: 32px;;
	}
	.notice-bar{
		position: absolute;
		top: 44px;
		width: 100%;
		z-index: 100;
		background-color: rgba(238,238,238,0.9);
		padding-top: 4px;
		font-size: 14px;
		line-height: 30px;;
	}
	.theme_color{
		color: #4c62e7;
	}
	.btn-group{
		float:right;
		margin-right: 12px;
	}
	.btn-group .rob{
		background-color: #4c62e7;
		color: #fff;
		border-radius: 15px;
		padding: 5px 24px;
		height: 30px;;
		margin-right: 8px;

	}
	.btn-group .close{
		background-color: rgb(169,169,169);
		color: #fff;
		border-radius: 16px;
		font-size: 14px;
		line-height: 20px;;
		padding: 3px 8px;
	}
</style>
