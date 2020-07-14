<template>
    <div class="main">

     <!--头部导航-->
     <van-nav-bar :title="title[step]"  left-arrow @click-left="onClickLeft" >
     </van-nav-bar>
		<!--       拍照遮罩层-->
		<div class='popContainer'  v-show="is_open">
			<van-nav-bar left-arrow @click-left="colseOverlay"  >
			</van-nav-bar>
			<p class="craema_text">请拍摄</p>
<!--            <img src="../../../assets/images/other/02130521.png" class="img_shoot"  >-->
            <img src="../../../assets/images/idcard/103507@123123.png" class="img_shoot"  v-show="imgshow_tmp==1">
            <img src="../../../assets/images/idcard/012105736@33.png" class="img_shoot"  v-show="imgshow_tmp==2">
            <img src="../../../assets/images/idcard/1057@58.png" class="img_shoot"  v-show="imgshow_tmp==3">
            <img src="../../../assets/images/idcard/12@215545.png" class="img_shoot"  v-show="imgshow_tmp==4">
            <img src="../../../assets/images/idcard/timg.jpg" class="img_shoot"  v-show="imgshow_tmp==5">
			<p style="line-height: 10px"></p>
			<img src="../../../assets/images/other/Takeaphoto@2x.png" class="img_cmarea"  @click="add_img">

		</div>

    <div class="content">
		<progressBar :step="this.step" :stepArray="stepArray" v-show="step!=5"></progressBar>
		<div class="input-contianer" v-show="step==0">
			<div>
				<h4>企业营业执照</h4>
				<div class="idCard" @click="openOverlay(0)" :class="info.company_info.img1==2?'idCard_bk':''">
					<div class="idCard_shadow_button" ></div>
					<p>点击拍摄/上传企业营业执照</p>
				</div>
			</div>
			<van-cell-group class="bg-grey">
				<van-field label="新一代客户编号"placeholder="请输入新一代客户编号" v-model="info.company_info.customer_id" clearable label-width="120"/>
				<van-field label="统一社会信用代码" placeholder="统一社会信用代码"  v-model="info.company_info.unified_social_credit_code" clearable label-width="120"/>
				<van-field label="企业名称" placeholder="企业名称" v-model="info.company_info.company_name" clearable label-width="120"/>
				<van-field label="企业地址"placeholder="请输企业地址" v-model="info.company_info.enterprise_address" clearable label-width="120"/>
				<van-field label="法定代表人" placeholder="法定代表人"  v-model="info.company_info.legal_representative" clearable label-width="120"/>
				<van-field label="法定代表人电话" placeholder="法定代表人电话" v-model="info.company_info.mobile" clearable label-width="120"/>
				<van-field label="法定代表人地址"placeholder="请输入法定代表人地址" v-model="info.company_info.legal_representative_address" clearable label-width="120" label-color="red"/>
			</van-cell-group>
		</div>
		<div class="input-contianer" v-show="step==1">
			<div>
				<h4>企业业主身份证</h4>
				<div class="idCard_front" @click="openOverlay(0)" :class="info.company_main_info.img2_1==2?'idCard_front_bk':''">
					<div class="idCard_shadow_button"></div>
					<p>点击拍摄/上传人像面</p>
				</div>
				<div class="idCard_back" @click="openOverlay(1)" :class="info.company_main_info.img2_2==2?'idCard_back_bk':''">
					<div class="idCard_shadow_button"></div>
					<p>点击拍摄/上传国徽面</p>
				</div>
			</div>

			<van-cell-group class="bg-grey">
				<van-field label="姓名"placeholder="请输入姓名" v-model="info.company_main_info.name" clearable label-width="120"/>
				<van-field label="性别" placeholder="请输入性别" @click-right-icon="openPicker(7)" v-model="info.company_main_info.sex" clearable label-width="120" right-icon="arrow-down"/>
				<van-field label="民族" placeholder="请输入民族" v-model="info.company_main_info.ethnic" clearable label-width="120"/>
				<van-field label="出生日期"placeholder="请输入出生日期" @click-right-icon="openPicker(1)" v-model="info.company_main_info.birth" clearable label-width="120" right-icon="arrow-down"/>
				<van-field label="住址" placeholder="请输入住址"  v-model="info.company_main_info.address" clearable label-width="120"/>
				<van-field label="公民身份证号" placeholder="请输入公民身份证号" v-model="info.company_main_info.idcard" clearable label-width="120"/>
				<van-field label="有效期限"placeholder="请输入有效期限" @click-right-icon="openPicker(2)" v-model="info.company_main_info.validity_period" clearable right-icon="arrow-down" label-width="120" label-color="red"/>
				<van-field label="学历" placeholder="请输入学历" @click-right-icon="openPicker(4)" v-model="info.company_main_info.record_of_formal_schooling" clearable right-icon="arrow-down" label-width="120"/>
				<van-field label="电话号码"placeholder="请输入电话号码" v-model="info.company_main_info.mobile" clearable label-width="120" label-color="red"/>
				<van-field label="工作单位"placeholder="请输入工作单位" v-model="info.company_main_info.work" clearable label-width="120" label-color="red"/>
				<van-field label="婚姻情况" placeholder="请输入婚姻情况" @click-right-icon="openPicker(5)" v-model="info.company_main_info.marriage_status" clearable label-width="120" right-icon="arrow-down"/>
				<van-field label="家庭人数"placeholder="请输入家庭人数" @click-right-icon="openPicker(6)" v-model="info.company_main_info.households" clearable right-icon="arrow-down" label-width="120" label-color="red"/>
			</van-cell-group>
		</div>
		<div class="input-contianer" v-show="step==2">
			<div v-for="(item,index) in info.associates">
				<h4 class="cell-hearder">关联人{{index+1}}</h4>

				<div>
					<van-field label="关系" placeholder="请选择" @click-right-icon="openPicker(8,index)" v-model="item.relationship" disabled clearable label-width="120" right-icon="arrow-down"/>

					<div class="idCard_front" @click="openOverlay(0,index)" :class="info.associates[index].img3_1==2?'idCard_front_bk':''">
						<div class="idCard_shadow_button"></div>
						<p>点击拍摄/上传人像面</p>
					</div>
					<div class="idCard_back" @click="openOverlay(1,index)" :class="info.associates[index].img3_2==2?'idCard_back_bk':''">
						<div class="idCard_shadow_button"></div>
						<p>点击拍摄/上传国徽面</p>
					</div>
					<div class="idjiehun" @click="openOverlay(2,index)" v-show="item.relationship=='配偶'" :class="info.associates[index].img3_3==2?'idjiehun_bk':''">
						<div class="idCard_shadow_button" ></div>
						<p>点击拍摄/上传结婚证</p>
					</div>
				</div>
				<!--style="position: fixed;top: 34px; width:100%;"-->
				<van-cell-group class="bg-grey">
					<van-field label="姓名"placeholder="请输入姓名" v-model="item.name" clearable label-width="120"/>
				</van-cell-group>
				<van-cell-group class="bg-grey" v-show="item.open_status">
					<van-field label="性别" placeholder="性别" @click-right-icon="openPicker(7,index)" v-model="item.sex" clearable label-width="120" right-icon="arrow-down"/>
					<van-field label="民族" placeholder="请输入民族" v-model="item.ethnic" clearable label-width="120"/>
					<van-field label="出生日期"placeholder="请选择日期" @click-right-icon="openPicker(1,index)" v-model="item.birth" clearable label-width="120" right-icon="arrow-down"/>
					<van-field label="住址" placeholder="请输入住址"  v-model="item.address" clearable label-width="120"/>
					<van-field label="公民身份证号" placeholder="请输入公民身份证号" v-model="item.idcard" clearable label-width="120"/>
					<van-field label="有效期限"placeholder="请输入有效期限" @click-right-icon="openPicker(2,index)" v-model="item.validity_period" clearable label-width="120" right-icon="arrow-down" label-color="red"/>
					<van-field label="学历" placeholder="请选择学历" @click-right-icon="openPicker(4,index)" v-model="item.record_of_formal_schooling" clearable label-width="120" right-icon="arrow-down"/>
					<van-field label="电话号码"placeholder="请输入电话号码" v-model="item.mobile" clearable label-width="120" label-color="red"/>
					<van-field label="工作单位"placeholder="请输入工作单位" v-model="item.work" clearable label-width="120" label-color="red"/>
					<van-field label="婚姻情况" placeholder="请选择婚姻情况" @click-right-icon="openPicker(5,index)" v-model="item.marriage_status" clearable label-width="120" right-icon="arrow-down"/>
					<van-field label="家庭人数"placeholder="请输入家庭人数" @click-right-icon="openPicker(6,index)" v-model="item.households" clearable label-width="120" label-color="red" right-icon="arrow-down"/>
				</van-cell-group>
				<van-row type="flex" justify="center">
					<van-col span="6" class="open_close_col" v-show="!item.open_status" @click="openClose(index)"><p>展开详情<van-icon name="arrow-down" /></p></van-col>
					<van-col span="6" class="open_close_col" v-show="item.open_status" @click="openClose(index)"><p>收起<van-icon name="arrow-up" /></p></van-col>
				</van-row>
			</div>

		</div>
		<div class="input-contianer" v-show="step==3">
			<div v-for="(item,index) in info.mortgaged">
				<h4 class="cell-hearder">抵押物{{index+1}}</h4>
				<div>
<!--					<van-field label="关系" placeholder="请选择" @click-right-icon="openPicker(8,index)" v-model="item.relationship" disabled clearable label-width="120" right-icon="arrow-down"/>-->

					<div class="idFangChan" @click="openOverlay(0,index)" :class="info.mortgaged[index].img4==2?'idFangChan_bk':''">
						<div class="idCard_shadow_button" ></div>
						<p>点击拍摄/上传房产证</p>
					</div>
				</div>

				<van-cell-group class="bg-grey">
					<van-field label="权利人"placeholder="请输入权利人" v-model="item.holder" clearable label-width="120"/>
				</van-cell-group>
				<van-cell-group class="bg-grey" v-show="item.open_status">
					<van-field label="共有情况" placeholder="共有情况"  v-model="item.situations" clearable label-width="120"/>
					<van-field label="坐落" placeholder="坐落" @click-right-icon="openPicker(3,index)" v-model="item.address" clearable label-width="120" right-icon="arrow-down"/>
					<van-field label="不动产单元号"placeholder="请输入不动产单元号" v-model="item.number" clearable label-width="120"/>
					<van-field label="权利类型" placeholder="权利类型"  v-model="item.type" clearable label-width="120"/>
					<van-field label="权利性质" placeholder="权利性质" v-model="item.nature" clearable label-width="120"/>
					<van-field label="用途"placeholder="请输入用途" v-model="item.use" clearable label-width="120" label-color="red"/>
					<van-field label="面积" placeholder="请输入面积" v-model="item.area" clearable label-width="120"/>
					<van-field label="权利其他情况"placeholder="请输入权利其他情况" v-model="item.Other" clearable label-width="120" label-color="red"/>
					<van-field label="房产证号"placeholder="请输入房产证号" v-model="item.house_nubmer" clearable label-width="120" label-color="red"/>
				</van-cell-group>
				<van-row type="flex" justify="center">
					<van-col span="6" class="open_close_col" v-show="!item.open_status" @click="openClose(index)"><p>展开详情<van-icon name="arrow-down" /></p></van-col>
					<van-col span="6" class="open_close_col" v-show="item.open_status" @click="openClose(index)"><p>收起<van-icon name="arrow-up" /></p></van-col>
				</van-row>
			</div>

		</div>
		<div class="input-contianer" v-show="step==4">
			<div v-for="(item,index) in info.mortgagor" >
				<h4 class="cell-hearder" v-show="index>0">抵押人{{index}}</h4>
				<van-cell-group class="bg-grey" v-show="index>0">
					<div v-show="item.relationship=='自然人'">
						<div>
							<van-field   placeholder="请选择" @click-right-icon="openPicker(9,index)" v-model="item.relationship" clearable label-width="120" right-icon="arrow-down"/>
							<van-row type="flex" justify="center" style="height:44px;">
									<van-checkbox class="radio" @change="show_mortgagor(item.radio,index)"   checked-color="#4c62e7" v-model="item.radio">借款的企业主本人</van-checkbox>
							</van-row>
							<div class="idCard_front" @click="openOverlay(0,index)" :class="info.mortgagor[index].img5_1==2?'idCard_front_bk':''">
								<div class="idCard_shadow_button"></div>
								<p>点击拍摄/上传人像面</p>
							</div>
							<div class="idCard_back" @click="openOverlay(1,index)" :class="info.mortgagor[index].img5_2==2?'idCard_back_bk':''">
								<div class="idCard_shadow_button"></div>
								<p>点击拍摄/上传国徽面</p>
							</div>
						</div>
						<van-field label="姓名"placeholder="请输入姓名" v-model="item.name" clearable label-width="120"/>
						<van-cell-group class="bg-grey" v-show="item.open_status">
							<van-field label="性别" placeholder="性别" @click-right-icon="openPicker(7,index)" v-model="item.sex" clearable label-width="120" right-icon="arrow-down"/>
							<van-field label="民族" placeholder="请输入民族" v-model="item.ethnic" clearable label-width="120"/>
							<van-field label="出生日期"placeholder="请输入出生日期" @click-right-icon="openPicker(1,index)"v-model="item.birth" clearable label-width="120" right-icon="arrow-down"/>
							<van-field label="住址" placeholder="住址"  v-model="item.address" clearable label-width="120"/>
							<van-field label="公民身份证号" placeholder="公民身份证号" v-model="item.idcard" clearable label-width="120"/>
							<van-field label="有效期限"placeholder="请输入法定代表人地址" @click-right-icon="openPicker(2,index)" right-icon="arrow-down" v-model="item.validity_period" clearable label-width="120" label-color="red"/>
							<van-field label="抵押人联系方式" placeholder="请输入法定代表人地址" v-model="item.diyaren_mobile" clearable label-width="120" label-color="red"/>
							<div class='cell'>请选择关联抵押物(可多选)</div>
							<van-checkbox-group v-model="result">
								<van-cell-group>
									<van-cell
											v-for="(item, index) in info.mortgaged"
											clickable
											:key="item"
											:title="`房产证号 ${item.house_nubmer}`"
											@click="toggle(index)"
									>
										<van-checkbox
												:name="item.house_nubmer"
												ref="checkboxes"
												slot="right-icon"
										/>
									</van-cell>
								</van-cell-group>
							</van-checkbox-group>
						</van-cell-group>
						<van-row type="flex" justify="center">
							<van-col span="6" class="open_close_col" v-show="!item.open_status" @click="openClose(index)"><p>展开详情<van-icon name="arrow-down" /></p></van-col>
							<van-col span="6" class="open_close_col" v-show="item.open_status" @click="openClose(index)"><p>收起<van-icon name="arrow-up" /></p></van-col>
						</van-row>
					</div>
					<div v-show="item.relationship=='企业法人'">
						<van-field   placeholder="请选择" @click-right-icon="openPicker(9,index)" v-model="item.relationship" clearable label-width="120" right-icon="arrow-down"/>
						<van-row type="flex" justify="center" style="height:44px;" >
							<van-checkbox class="radio" checked-color="#4c62e7" @change="show_mortgagor(item.radio,index)"  v-model="item.radio"  >借款的企业</van-checkbox>
						</van-row>
						<div>
<!--							<van-field label="企业法人" placeholder="请输入法人名称" v-model="item.name" clearable label-width="120"/>-->
							<div class="idCard" @click="openOverlay(2,index)" :class="info.mortgagor[index].img5_3==2?'idCard_bk':''">
								<div class="idCard_shadow_button" ></div>
								<p>点击拍摄/上传企业营业执照</p>
							</div>
						</div>
						<van-cell-group class="bg-grey" v-show="item.open_status">
							<van-field label="新一代客户编号"placeholder="请输入新一代客户编号" v-model="item.customer_id" clearable label-width="120"/>
							<van-field label="统一社会信用代码" placeholder="统一社会信用代码"  v-model="item.unified_social_credit_code" clearable label-width="120"/>
							<van-field label="企业名称" placeholder="企业名称" v-model="item.company_name" clearable label-width="120"/>
							<van-field label="企业地址"placeholder="请输企业地址" v-model="item.enterprise_address" clearable label-width="120"/>
							<van-field label="法定代表人" placeholder="法定代表人"  v-model="item.legal_representative" clearable label-width="120"/>
							<van-field label="法定代表人电话" placeholder="法定代表人电话" v-model="item.mobile" clearable label-width="120"/>
							<van-field label="法定代表人地址"placeholder="请输入法定代表人地址" v-model="item.legal_representative_address" clearable label-width="120" label-color="red"/>
							<div class='cell'>请选择关联抵押物(可多选)</div>
							<van-checkbox-group v-model="result">
								<van-cell-group>
									<van-cell
											v-for="(item, index) in info.mortgaged"
											clickable
											:key="item"
											:title="`房产证号 ${item.house_nubmer}`"
											@click="toggle(index)"
									>
										<van-checkbox
												:name="item.house_nubmer"
												ref="checkboxes"
												slot="right-icon"
										/>
									</van-cell>
								</van-cell-group>
							</van-checkbox-group>
						</van-cell-group>
						<van-row type="flex" justify="center">
							<van-col span="6" class="open_close_col" v-show="!item.open_status" @click="openClose(index)"><p>展开详情<van-icon name="arrow-down" /></p></van-col>
							<van-col span="6" class="open_close_col" v-show="item.open_status" @click="openClose(index)"><p>收起<van-icon name="arrow-up" /></p></van-col>
						</van-row>
					</div>
					<div v-show="item.relationship!=='企业法人'&& item.relationship!=='自然人'">
						<van-field label="关系" placeholder="请选择" @click-right-icon="openPicker(9,index)" v-model="item.relationship" clearable label-width="120" right-icon="arrow-down"/>

						<div>
							<van-field label="企业法人" placeholder="请输入法人名称" v-model="item.name" clearable label-width="120"/>

							<div class="idCard" @click="openOverlay(2,index)" :class="info.mortgagor[index].img5_3==2?'idCard_bk':''">
								<div class="idCard_shadow_button" ></div>
								<p>点击拍摄/上传企业营业执照</p>
							</div>
						</div>
						<van-cell-group class="bg-grey" v-show="item.open_status">
							<van-field label="新一代客户编号"placeholder="请输入新一代客户编号" v-model="item.customer_id" clearable label-width="120"/>
							<van-field label="统一社会信用代码" placeholder="统一社会信用代码"  v-model="item.unified_social_credit_code" clearable label-width="120"/>
							<van-field label="企业名称" placeholder="企业名称" v-model="item.company_name" clearable label-width="120"/>
							<van-field label="企业地址"placeholder="请输企业地址" v-model="item.enterprise_address" clearable label-width="120"/>
							<van-field label="法定代表人" placeholder="法定代表人"  v-model="item.legal_representative" clearable label-width="120"/>
							<van-field label="法定代表人电话" placeholder="法定代表人电话" v-model="item.mobile" clearable label-width="120"/>
							<van-field label="法定代表人地址"placeholder="请输入法定代表人地址" v-model="item.legal_representative_address" clearable label-width="120" label-color="red"/>
							<div class='cell'>请选择关联抵押物(可多选)</div>
							<van-checkbox-group v-model="result">
								<van-cell-group>
									<van-cell
											v-for="(item, index) in info.mortgaged"
											clickable
											:key="item"
											:title="`房产证号 ${item.house_nubmer}`"
											@click="toggle(index)"
									>
										<van-checkbox
												:name="item.house_nubmer"
												ref="checkboxes"
												slot="right-icon"
										/>
									</van-cell>
								</van-cell-group>
							</van-checkbox-group>
						</van-cell-group>
					</div>
				</van-cell-group>

			</div>

		</div>
		<div class="btn_group" v-show='step!=5'>
			<p v-show="step>1" class="add_asso" @click="add_item"><span class="add">&nbsp;+&nbsp;</span>{{add_item_title}}</p>
			<div class="save_button" @click="save">保存并退出</div>
			<div class="next_button" @click="addStep">{{next}}</div>
		</div>
		<div v-show='step==5'>
			<div class="success-pan">
				<img class="success" src="../../../assets/images/other/success@2x.png" alt="">
				<p class="success-tip"> 信息采集成功</p>
				<div class="line"></div>
				<van-cell-group class="bg-grey"  >
					<div >
						<van-cell ><div class="grey" @click="go('infoDetail',{info:msg_[0]})">查看详情</div></van-cell>
						<van-cell>
							<van-col span="3"><img class="logo" src="../../../assets/images/38/Companyname@2x.png" alt=""></van-col>
							<van-col span="21"><h3>{{info.company_info.company_name}}</h3></van-col>
						</van-cell>
						<van-cell>
							<van-col span="2"></van-col>
							<van-col span="10">统一社会信用代码:</van-col>
							<van-col span="12">{{info.company_info.unified_social_credit_code}}</van-col>
						</van-cell>
						<van-cell>
							<van-col span="2"></van-col>
							<van-col span="10">企业主姓名</van-col>
							<van-col span="12">{{info.company_info.legal_representative}}</van-col>
						</van-cell>
						<van-cell>
							<van-col span="2"></van-col>
							<van-col span="10">采集时间:</van-col>
							<van-col span="12">2019-10-09</van-col>
						</van-cell>
					</div>
				</van-cell-group>
				<div class="jyButton" @click="go('creditCheck')">征信校验</div>
			</div>
		</div>
    </div>
<!--		选择器遮罩层-->
		<div class="pop_picker" v-show="time_Picker_Statue!==0">
<!--			自定义选择器-->
			<van-picker :columns="columns"  show-toolbar @cancel="onCancel"    @confirm="confirmBtn" v-show="time_Picker_Statue>3"   class="picker"/>
<!--			地址选择器-->
			<van-area :area-list="areaList" :columns-num="3" v-show="time_Picker_Statue==3" @confirm="confirmBtn"  @cancel="onCancel" class="picker"/>
			<van-datetime-picker v-show="time_Picker_Statue==1" class="picker"
								 v-model="currentDate1"
								 type="date"

								 @confirm="confirmBtn" @cancel="onCancel()"
			/>
			<van-datetime-picker v-show="time_Picker_Statue==2" class="picker"
								 v-model="currentDate2"
								 type="date"

								 @confirm="confirmBtn" @cancel="onCancel()"
			/>
		</div>
    </div>
</template>

<script>
	import areaList from '../../../area.js';
	import NavBar from '@/components/navBar'
	import progressBar from '@/components/progressBar'
	import Vue from 'vue';
	import { DropdownMenu, DropdownItem,Grid, GridItem,Image,Panel,NoticeBar,Cell, CellGroup,Row, Col,Dialog,Toast } from 'vant';
	Vue.use(DropdownMenu).use(DropdownItem);
	export default {
  data() {
    return {
		msg_:{},
		imgshow:-1,
		imgshow_tmp:0,
		next:'下一步',
		add_item_title:'添加关联人',
		areaList:areaList,
		zidingyi:3,//3性别4学历5婚姻6家庭人数
		currentDate1: new Date(),//1:开始日期  2 结束日期
		currentDate2: new Date(),
		timeValue1: '',//按确认后显示的日期  1：开始日期  2：结束日期
		timeValue2: '',
		time_Picker_Statue:0, //0：不显示 1：显示开始日期控件 2：显示结束日期控件  3：自定义控件：默认性别
		columns:['男', '女'],//默认自定义picker数据
		is_open:false,
      title : [
		'信息采集-企业信息',
		'信息采集-企业主信息',
		'信息采集-关联人信息',
		'信息采集-抵押物信息',
		'信息采集-抵押人信息',
	  ],
		step:0,
		stepArray:[
			'企业信息',
			'企业主信息',
			'关联人信息',
			'抵押物信息',
			'抵押人信息',
		],
		info_default:{
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
					relationship:'自然人', //0=自然人， 1=  企业法人
					holder:'艾仲华',
					situations:'自有',
					address:'广东省广州市天河区花城大道中海花城湾4号楼3门201',
					number:'3单元',
					type:'不动产权证',
					nature:'自有',
					use:'住宅',
					area:'120.4',
					Other:'无',
					house_nubmer:'0130031024',
					open_status:true
				}
			],
			mortgagor:[
				{
					relationship:'企业法人', //1=自然人， 0=  企业法人
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
					radio:true,
				},
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
                    radio:true,
				},
			],
            img1:0,//企业营业执照  0:默认状态，1：选中状态，2：点击拍摄
            img2_1:0,//企业业主身份证正面
            img2_2:0,//企业业主身份证反面
            img3_1:0,//关系人身份证正面
            img3_2:0,//关系人身份证反面
            img3_3:0,//关系人结婚证
            img4:0,//房产证
            img5_1:0,//抵押人身份证正面
            img5_2:0,//抵押人身份证反面
            img5_3:0,//企业营业执照
			unid:'',
			collect_time:'',
			step:0,  //贷款流程 ： 0=信息待采集 1=征信待校验 2=贷款待申请 3.合同待签订 4.待跟踪
			isPass:true,
			loan:{},
			status:0
		},
        info:{
            company_info:{
                customer_id:'',
                unified_social_credit_code:'',
                company_name:'',
                enterprise_address:'',
                legal_representative:'',
                mobile:'',
                legal_representative_address:'',
				img1:0,//企业营业执照  0:默认状态，1：选中状态，2：点击拍摄
            },
            company_main_info:{
                name:'',
                sex:'',
                ethnic:'',
                birth:'',
                address:'',
                idcard:'',
                validity_period:'' ,//有效期
                record_of_formal_schooling : '', //学历
                mobile:'',
                work:'',
                marriage_status:'',
                households:'',
				img2_1:0,//企业业主身份证正面
				img2_2:0,//企业业主身份证反面
            },
            associates:[   //关联人
                {
                    relationship:'', //0=自然人， 1=  企业法人
                    name:'',
                    sex:'',
                    ethnic:'',
                    birth:'',
                    address:'',
                    idcard:'',
                    validity_period:'' ,//有效期
                    record_of_formal_schooling : '', //学历
                    mobile:'',
                    work:'',
                    marriage_status:'',
                    households:'',
                    open_status:true,
					img3_1:0,//关系人身份证正面
					img3_2:0,//关系人身份证反面
					img3_3:0,//关系人结婚证
                }
            ],
            mortgaged:[
                {
                    relationship:'', //0=自然人， 1=  企业法人
                    holder:'',
                    situations:'',
                    address:'',
                    number:'',
                    type:'',
                    nature:'',
                    use:'',
                    area:'',
                    Other:'',
                    house_nubmer:'',
                    open_status:true,
					img4:0,//房产证
                }
            ],
            mortgagor:[
                {
                    relationship:'企业法人', //1=自然人， 0=  企业法人
                    name:'',
                    sex:'',
                    ethnic:'',
                    birth:'',
                    address:'',
                    idcard:'',
                    validity_period:'' , //有效期
                    diyaren_mobile:'',
                    diyawu:[],
                    customer_id:'',
                    unified_social_credit_code:'',
                    company_name:'',
                    enterprise_address:'',
                    legal_representative:'',
                    mobile:'',
                    legal_representative_address:'',
                    open_status:true,
                    radio:false,
					img5_1:0,//抵押人身份证正面
					img5_2:0,//抵押人身份证反面
					img5_3:0,//企业营业执照
                },
                {
                    relationship:'自然人', //0=自然人， 1=  企业法人
                    name:'',
                    sex:'',
                    ethnic:'',
                    birth:'',
                    address:'',
                    idcard:'',
                    validity_period:'' , //有效期
                    diyaren_mobile:'',
                    diyawu:[],
                    customer_id:'',
                    unified_social_credit_code:'',
                    company_name:'',
                    enterprise_address:'',
                    legal_representative:'',
                    mobile:'',
                    open_status:true,
                    radio:false,
					img5_1:0,//抵押人身份证正面
					img5_2:0,//抵押人身份证反面
					img5_3:0,//企业营业执照
                },
            ],
            unid:'',
            collect_time:'',
            step:0,  //贷款流程 ： 0=信息待采集 1=征信待校验 2=贷款待申请 3.合同待签订 4.待跟踪
            isPass:true,
            loan:{},
            status:0
        },
		result:[],
		current_index:0,
        null_data:  [
				{
					relationship: '企业法人', //0=自然人， 1=  企业法人
					name: '',
					sex: '',
					ethnic: '',
					birth: '',
					address: '',
					idcard: '',
					validity_period: '', //有效期
					diyaren_mobile: '',
					diyawu: [],
					customer_id: '',
					unified_social_credit_code: '',
					company_name: '',
					enterprise_address: '',
					legal_representative: '',
					mobile: '',
					legal_representative_address: '',
					open_status: true,
					radio: false,
				},
				{
					relationship: '自然人', //0=自然人， 1=  企业法人
					name: '',
					sex: '',
					ethnic: '',
					birth: '',
					address: '',
					idcard: '',
					validity_period: '', //有效期
					diyaren_mobile: '',
					diyawu: [],
					customer_id: '',
					unified_social_credit_code: '',
					company_name: '',
					enterprise_address: '',
					legal_representative: '',
					mobile: '',
					open_status: true,
					radio: false,
				},
			],

    }

  },

  //数据预加载
  created(){
	  var info  = this.$route.params.info;
	  if(info){
		  this.info = info;
	  }
	  //查看详情
	  var jsonStr = sessionStorage.getItem('userinfo');

	  if(jsonStr != '' && jsonStr != undefined && jsonStr != null){
		  this.msg_ = JSON.parse(jsonStr);
	  }
  },

  //网页加载完成
  mounted () {
  	var value1 = this.$route.params.step;
	  if (value1) {
	  	this.step = value1;
	  }
  },

  //声明方法
  methods : {
      show_mortgagor(flag,i){
          console.log('444'+flag+i)
              if (this.info.mortgagor[i].relationship=='企业法人') {
				  if (flag) {
					  this.info.mortgagor[i].customer_id = this.info_default.mortgagor[0].customer_id;
					  this.info.mortgagor[i].unified_social_credit_code = this.info_default.mortgagor[0].unified_social_credit_code;
					  this.info.mortgagor[i].company_name = this.info_default.mortgagor[0].company_name;
					  this.info.mortgagor[i].enterprise_address = this.info_default.mortgagor[0].enterprise_address;
					  this.info.mortgagor[i].legal_representative = this.info_default.mortgagor[0].legal_representative;
					  this.info.mortgagor[i].mobile = this.info_default.mortgagor[0].mobile;
					  this.info.mortgagor[i].idcard = this.info_default.mortgagor[0].idcard;
					  this.info.mortgagor[i].legal_representative_address = this.info_default.mortgagor[0].legal_representative_address;
				  } else {
					  this.info.mortgagor[i].customer_id = this.null_data[0].customer_id;
					  this.info.mortgagor[i].unified_social_credit_code = this.null_data[0].unified_social_credit_code;
					  this.info.mortgagor[i].company_name = this.null_data[0].company_name;
					  this.info.mortgagor[i].enterprise_address = this.null_data[0].enterprise_address;
					  this.info.mortgagor[i].legal_representative = this.null_data[0].legal_representative;
					  this.info.mortgagor[i].mobile = this.null_data[0].mobile;
					  this.info.mortgagor[i].idcard = this.null_data[0].idcard;
					  this.info.mortgagor[i].legal_representative_address = this.null_data[0].legal_representative_address;
				  }

              } else {
				  if (flag) {
					  this.info.mortgagor[i].name = this.info_default.mortgagor[1].name;
					  this.info.mortgagor[i].sex = this.info_default.mortgagor[1].sex;
					  this.info.mortgagor[i].ethnic = this.info_default.mortgagor[1].ethnic;
					  this.info.mortgagor[i].birth = this.info_default.mortgagor[1].birth;
					  this.info.mortgagor[i].address = this.info_default.mortgagor[1].address;
					  this.info.mortgagor[i].idcard = this.info_default.mortgagor[1].idcard;
					  this.info.mortgagor[i].validity_period = this.info_default.mortgagor[1].validity_period;
					  this.info.mortgagor[i].diyaren_mobile = this.info_default.mortgagor[1].diyaren_mobile;
				  } else {
					  this.info.mortgagor[i].name = this.null_data[1].name;
					  this.info.mortgagor[i].sex = this.null_data[1].sex;
					  this.info.mortgagor[i].ethnic = this.null_data[1].ethnic;
					  this.info.mortgagor[i].birth = this.null_data[1].birth;
					  this.info.mortgagor[i].address = this.null_data[1].address;
					  this.info.mortgagor[i].idcard = this.null_data[1].idcard;
					  this.info.mortgagor[i].validity_period = this.null_data[1].validity_period;
					  this.info.mortgagor[i].diyaren_mobile = this.null_data[1].diyaren_mobile;
				  }
              }
      },
	  openOverlay : function(i,index){
          this.is_open = !this.is_open;
          switch (this.step) {
              case 0 :
                  this.imgshow_tmp = 1;
                  this.info.company_info.img1 = 1;
                  break;
              case 1 :
                  if(i===1) {
                      this.info.company_main_info.img2_2 = 1;
                      this.imgshow_tmp = 3;
                  } else {
                      this.info.company_main_info.img2_1 = 1;
                      this.imgshow_tmp = 2;
                  }
                  break;
              case 2 :
                  if(i===0) {
                      this.info.associates[index].img3_1 = 1;
                      this.imgshow_tmp = 2;
                  } else if(i===1) {
                      this.info.associates[index].img3_2 = 1;
                      this.imgshow_tmp = 3;
                  } else {
                      this.info.associates[index].img3_3 = 1;
                      this.imgshow_tmp = 4;
                  }
                  break;
              case 3 :
                  this.info.mortgaged[index].img4 = true;
                  this.imgshow_tmp = 5;
                  break;
              case 4 :
                  if(i===0) {
                      this.info.mortgagor[index].img5_1 = 1;
                      this.imgshow_tmp = 2;
                  } else if(i===1) {
                      this.info.mortgagor[index].img5_2 = 1;
                      this.imgshow_tmp = 3;
                  } else {
                      this.info.mortgagor[index].img5_3 = 1;
                      this.imgshow_tmp = 1;
                  }
                  break;
              default:
                  break;
          }

	  },
	  colseOverlay() {
		  this.is_open = !this.is_open;
	  },
	  add_img() {
	      switch (this.step) {
              case 0 :
                  this.info.company_info = this.info_default.company_info;
				  this.info.company_info.img1 = 2;
				  break;
              case 1 :
                  if(this.info.company_main_info.img2_1==1) {
                      this.info.company_main_info.img2_1 = 2;
                  }
                  if(this.info.company_main_info.img2_2==1) {
                      this.info.company_main_info.img2_2 = 2;
                  }
                  if(this.info.company_main_info.img2_1==2 && this.info.company_main_info.img2_2==2) {
                      this.info.company_main_info = this.info_default.company_main_info;
					  this.info.company_main_info.img2_1 = 2;
					  this.info.company_main_info.img2_2 = 2;
                  }
                  break;
              case 2 :
              	for(var i=0;i<this.info.associates.length;i++) {
					if(this.info.associates[i].img3_1==1) {
						this.info.associates[i].img3_1 = 2;
					}
					if(this.info.associates[i].img3_2==1) {
						this.info.associates[i].img3_2 = 2;
					}
					if(this.info.associates[i].img3_3==1) {
						this.info.associates[i].img3_3 = 2;
					}
					if(this.info.associates[i].img3_2==2 && this.info.associates[i].img3_1==2) {
						var tmp = this.info.associates[i].relationship;
						var tmp2 = this.info.associates[i].open_status;
						this.info.associates[i] = this.info_default.associates[0];
						this.info.associates[i].relationship = tmp;
						this.info.associates[i].open_status = tmp2;
						this.info.associates[i].img3_1 = 2;
						this.info.associates[i].img3_2 = 2;
						// this.info.associates[i].img3_3 = 1;
					}
				}

                  break;
              case 3 :
				  for(var i=0;i<this.info.mortgaged.length;i++) {
					  let tmp2 = this.info.mortgaged[i].open_status;
					  this.info.mortgaged[i] = this.info_default.mortgaged[0];
					  this.info.mortgaged[i].open_status = tmp2;
					  this.info.mortgaged[i].img4 = 2;
				  }
                  break;
              case 4 :
				  for(var i=0;i<this.info.mortgagor.length;i++) {
					  if(this.info.mortgagor[i].img5_1==1) {
						  this.info.mortgagor[i].img5_1 = 2;
					  }
					  if(this.info.mortgagor[i].img5_2==1) {
						  this.info.mortgagor[i].img5_2 = 2;
					  }
					  if(this.info.mortgagor[i].img5_3==1) {
						  this.info.mortgagor[i].img5_3 = 2;
					  }
				  };

                  break;
              default:
                      break;
          }
		  this.is_open = !this.is_open;
		  this.info.mortgagor.radio = true;
	  },
	  openClose(i) {
	  	if (this.step==2) {
			this.info.associates[i].open_status = !this.info.associates[i].open_status;
		}
		  if (this.step==3) {
			  this.info.mortgaged[i].open_status = !this.info.mortgaged[i].open_status;
		  }
		  if (this.step==4) {
			  this.info.mortgagor[i].open_status = !this.info.mortgagor[i].open_status;
		  }
	  },
	  openPicker(i,index) {//0：不显示 1：显示开始日期控件 2：显示结束日期控件  3:自定义控件：  3地区 4学历5婚姻6家庭人数 7性别
			this.time_Picker_Statue = i;  //0127
			this.current_index = index; //当前卡片index
		  switch (i) {
			case 4:
				this.columns = ['研究生以上', '本科','大专','高中'];
				break;
			case 5:
				this.columns = ['已婚', '未婚','离异'];
				break;
			case 6:
				this.columns = [4, 3,2,1];
				break;
			case 7:
				this.columns = ['男', '女'];
				break;
			case 8:
				this.columns = ['其他','自然人', '配偶'];
				break;
			case 9:
				this.columns = ['自然人', '企业法人'];
				break;
			default:
				break;
		}
	  },
	  //自定义以及日                                                                                                 期picker---取消键
	  onCancel() {
		  this.time_Picker_Statue = 0;
	  },
	  onChange(picker, value, index){
		   Toast(`当前值：${value}, 当前索引：${index}`);
	  },
	  //自定义以及日期picker----确定键
	  confirmBtn(picker, value, index) { // 确定按钮TODO

		switch (this.time_Picker_Statue){
			case 1:{
				var d = new Date(picker);
				var str=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();

				switch(this.step){
					case 1:
						this.info.company_main_info.birth = str;
						break;
					case 2:
						this.info.associates[this.current_index].birth = str;
						break;
				}
			}
				break;
			case 2:{
				var d = new Date(picker);
				var str=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() ;

				switch(this.step){
					case 1:
						this.info.company_main_info.validity_period = str
						break;
					case 2:
						this.info.associates[this.current_index].validity_period = str;
						break;
				}
			}
				break;
			case 3:{

				switch(this.step){
					case 3:
						this.info.mortgaged[this.current_index].address = picker[0].name+' '+picker[1].name+' '+picker[2].name
						break;
				}
			}
				break;
			case 4:{
				switch(this.step){
					case 1:
						this.info.company_main_info.record_of_formal_schooling = this.columns[value]
						break;
					case 2:
						this.info.associates[this.current_index].record_of_formal_schooling = this.columns[value];
						break;
				}
			}
				break;
			case 5:{
				switch(this.step){
					case 1:
						this.info.company_main_info.marriage_status = this.columns[value]
						break;
					case 2:
						this.info.associates[this.current_index].marriage_status = this.columns[value];
						break;
				}
			}
				break;
			case 6:{
				switch(this.step){
					case 1:
						this.info.company_main_info.households = this.columns[value]
						break;
					case 2:
						this.info.associates[this.current_index].households = this.columns[value];
						break;
				}
			}
				break;
			case 7:{
				switch(this.step){
					case 1:
						this.info.company_main_info.sex = this.columns[value];
						break;
					case 2:
						this.info.associates[this.current_index].sex = this.columns[value];
						break;
					case 4:
						this.info.mortgagor[this.current_index].sex = this.columns[value];
						break;
				}
			}
				break;
			case 8:{

				switch(this.step){
					case 1:
						this.info.company_main_info.sex = this.columns[value];
						break;
					case 2:
						this.info.associates[this.current_index].relationship = this.columns[value];
						break;
					case 3:

						this.info.mortgaged[this.current_index].relationship = this.columns[value];
						break;
				}
			}
				break;
			case 9:{
				console.log('121',picker, value, index);
				switch(this.step){
					case 4:
						this.info.mortgagor[this.current_index].relationship = this.columns[value];
						break;
				}
			}
				break;
			default:
				break;
		}
		//关闭选择器
		this.time_Picker_Statue = 0;
	  },
	  timeFormat(time) { // 时间格式化 2019-09-08
		  let year = time.getFullYear();
		  let month = time.getMonth() + 1;
		  let day = time.getDate();
		  if (this.type == 2) {
			  return year + '年' + month + '月' + day +'日'
		  }
		  return year + '-' + month + '-' + day
	  },
	  onConfirm() {
		  this.$refs.item.toggle();
	  },
	addStep:function(){

		if(this.step == 4 ){
			var jsonStr = sessionStorage.getItem('userinfo');
			var infos = [];
			if(jsonStr != '' && jsonStr != undefined && jsonStr != null){
				infos = JSON.parse(jsonStr);
			}
			this.info.collect_time = (new Date()).toLocaleDateString()
			this.info.step = 1;
			//判断是编辑还是新增

			if(this.info.unid){
				for(var i=0;i<infos.length;i++){
					if(infos[i].unid == this.info.unid){

						infos[i] = this.info;
					}
				}
			}else{
				this.info.unid = Date.parse(new Date());
				infos.push(this.info);
			}
			sessionStorage.setItem('userinfo',JSON.stringify(infos))
		}
		if(this.step == 5 ){
			this.$router.go(-1);
			return;
		}
		this.step ++;
	},
	onClickLeft:function() {
		if(this.step == 5 ){
			this.$router.push({name:'index3'});
			return;
		}
		if(this.step == 0 ){
			this.$router.go(-1);
			return;
		}
		this.step=this.step-1;
	},
	add_item:function(){
		switch(this.step){
			case 2:{
				this.info.associates.push({
						name:'',
						sex:'',
						ethnic:'',
						birth:'',
						address:'',
						idcard:'',
						validity_period:'' ,//有效期
						record_of_formal_schooling : '', //学历
						mobile:'',
						work:'',
						marriage_status:'',
						households:'',
						open_status:true,
					})
			}
			break;
			case 3:{
				this.info.mortgaged.push({
					holder:'',
					situations:'',
					address:'',
					number:'',
					type:'',
					nature:'',
					use:'',
					area:'',
					Other:'',
					house_nubmer:'',
					open_status:true,
				})
			}
			break;
			case 4:{
				this.info.mortgagor.push({
						relationship:'自然人', //0=自然人， 1=  企业法人
						name:'',
						sex:'',
						ethnic:'',
						birth:'',
						address:'',
						idcard:'',
						validity_period:'' , //有效期
						diyaren_mobile:'',
						diyawu:[],
						customer_id:'',
						unified_social_credit_code:'',
						company_name:'',
						enterprise_address:'',
						legal_representative:'',
						mobile:'',
						open_status:true,
						radio:false,
					})
			}
			break;
		}
	},
	toggle:function (index) {
	    this.$refs.checkboxes[index].toggle();
	},
	save:function(){
		sessionStorage.setItem('informationAcquisition_tab','已完成' );
		var jsonStr = sessionStorage.getItem('userinfo');
		var infos = [];
		if(jsonStr != '' && jsonStr != undefined && jsonStr != null){
			infos = JSON.parse(jsonStr);
		}
		if(this.info.unid){
			for(var i=0;i<infos.length;i++){
				if(infos[i].unid == this.info.unid){
					this.info.collect_time = (new Date()).toLocaleDateString()
					console.log(this.info.collect_time)
					infos[i] = this.info;
				}
			}
		}else{
			this.info.unid = Date.parse(new Date());
			this.info.collect_time = (new Date()).toLocaleDateString()
			this.info.step = 0;
			infos.push(this.info);
		}
		sessionStorage.setItem('userinfo',JSON.stringify(infos));
		this.$router.go(-1);
	},
	  go : function(url,param){
		  this.$router.push({name:url,params:param});
	  },
  },
  watch: {
	 step: function (val, oldVal) {
	  this.next = val!=4?'下一步':'确认提交';

	  this.add_item_title = val==2?'添加关联人':val==3?'添加抵押物':'添加抵押人';
	 },
  },

  //引入组件
  components: {
	progressBar,
	NavBar,

  }
 }
</script>

<style lang="scss" scoped>
.pop_picker{
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0,0,0,0.3);
}
.bg-grey{
	position: relative;
}
.picker{
	position: absolute;
	bottom: 0;
	width: 100%;
}
.content{
	padding: 0px;
	background-color: rgb(238,238,238);
	min-height: 600px;
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
	height: 54px;
	background-color: #fff;
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
.step-text-pan.more{
	color: #4c62e7;
}
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
		.line-pan{
			margin-top: 30px;
			margin-left: 8%;
			margin-right: 8%;
		}
		.point{
			width: 16px;
			height: 16px;
			background-color: #999999;

			border-radius: 8px;
			float: left;
		}
		.point.active{
			width: 16px;
			height: 16px;
			background-image: url(../../../assets/images/24/Navigationcircle@2x.png);
			background-size: 100%;
			border-radius: 8px;
			float: left;
		}

		.progress{
			background-color: #999999;
			float: left;
			width: 18%;
			height: 2px;
			margin: 7px 0px;
		}
		.progress.active{
			background-image: url(../../../assets/images/Label2@2x.png);
			background-size: 100%;
		}
		.idCard{
			background-image: url(../../../assets/images/idcard/bg_dyw@2x.png);
			background-size: 100% 100%;
			height: 110px;
			width: 256px;
			margin: 16px auto;
			border-radius: 8px;;
			padding-top: 36px;;
			box-shadow: 0px 0px 12px 2px rgba(0,0,0,.15);
		}
		.idCard_bk{
			background-image: url(../../../assets/images/idcard/103507@123123.png);
		}
		.idFangChan{
			background-image: url(../../../assets/images/idcard/budongchanquanzheng.png);
			background-size: 100% 100%;
			height: 110px;
			width: 256px;
			margin: 16px auto;
			border-radius: 8px;;
			padding-top: 36px;;
			box-shadow: 0px 0px 12px 2px rgba(0,0,0,.15);
		}
		.idFangChan_bk{
			background-image: url(../../../assets/images/idcard/timg_mohu.jpg);
		}

		.idCard_front,.idCard_back,.idjiehun{
			padding-top: 16px;
			background-size: 100% 100%;
			width: 46%;
			margin: 0 2%;
			display: inline-block;
			height: 80px;
		}
		.idjiehun{
			background-image: url(../../../assets/images/idcard/bg_jhz@2x.png);
			margin-left: 27%;
			margin-top: 8px;

		}
		.idjiehun_bk{
			background-image: url(../../../assets/images/idcard/12@215545.png);
		}
		.idCard_front{
			background-image: url(../../../assets/images/idcard/bg_sfz_front@2x.png);
		}
		.idCard_front_bk{
			background-image: url(../../../assets/images/idcard/012105736@33.png);
		}
		.idCard_back{
			background-image: url(../../../assets/images/idcard/bg_sfz_reverse@2x.png);
		}

		.idCard_back_bk{
			background-image: url(../../../assets/images/idcard/1057@58.png);
		}
		.input-contianer{
			margin-top: 8px;
			background-color: #fff;
		}
		.idCard_shadow_button{
			background-image: url(../../../assets/images/84/Shooting@2x.png);
			background-size: 100% 100%;
			height: 40px;
			width: 40px;
			margin: 0px auto ;
		}
		.idCard p,.idCard_front p,.idCard_back p,.idFangChan p ,.idjiehun p{
			text-align: center;
			color: #4c62e7;
			font-size: 12px;
		}
		.input-contianer h4{
			padding: 8px 16px;
		}
		.btn_group{
			background: rgb(238,238,238);
			padding: 16px;
			text-align: center;
		}
		.btn_group div{
			width: 100px;
			display: inline-block;
			border-radius: 16px;
			text-align: center;
			padding: 4px 16px;
			margin: 0px 16px;
		}
		.btn_group .save_button{
			background-color: #fff;
			border: 1px solid #4c62e7;
			color: #4c62e7;
		}
		.btn_group .next_button{
			background-image: url(../../../assets/images/other/Doublebutton@2x.png);
			background-size: 100% 100%;
			color: #fff;
			padding-bottom: 10px;
			line-height: 24px;
		}
		.cell-hearder{
			background-color: rgb(238,238,238);
		}
		.add_asso{
			text-align: center;
			color: #4c62e7;
			margin-top: -6px;
		}
		.open_close_col {
			margin: 10px auto;
			height: 28px;
			border: #4c62e7 1px solid;
			border-radius: 40px;
			text-align: center;
		}
		.open_close_col p{
			line-height: 28px;
			margin: 0 0 ;
			padding: 0;
			font-size: 14px;
			color: #4c62e7;
		}
		.cell{
			height: 24px;
			padding: 10px 16px;
		}
	.popContainer{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,0.6);
		z-index: 110;
		text-align: center;
	}
	.img_shoot{
		margin-top: 55px;
		width: 380px;
		height: 260px;
        transform:rotate(90deg);
	}
.craema_text {
	color: #ffffff;
	margin-top: 50px;
	font-size: 14px;
}
.img_cmarea{
	margin-top: 74px;
	left:45% ;
	height: 80px;
	width: 80px;
}

</style>
