<template>
    <div class="main_box">
        <!--头部导航-->
        <van-nav-bar :title="title"  >

        </van-nav-bar>
        <img src="../../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
        <img src="../../../assets/images/48/create@2x.png" class="img_fliter" @click="go('collectOperation')" >
        <img src="../../../assets/images/38/searchfor@2x.png" class="img_search" @click="go('searchInfo')">
        <div class="content">
            <van-tabs v-model="activeName" @click="onTabClick" color="#4c62e7" line-width="50%" line-height=3 >
                <van-tab title="待补录" color="#4c62e7" name="待补录">
                    <div class="card_div" v-for="(item,index) in this.infos" v-show="item.step==0">
                        <van-row style="padding: 4px 12px 0">
                            <van-col class="icon_box" span="2"><img src="../../../assets/images/38/Companyname@2x.png" class="img_location" ></van-col>
                            <van-col class="" span="18"><p class="card_list2_test" >{{item.company_info.company_name}}</p></van-col>
                        </van-row>
                        <van-row style="padding: 4px 12px 0">
                            <van-col class="" span="12"><p class="card_list1_test_left" >统一社会信用代码</p></van-col>
                            <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >{{item.company_info.unified_social_credit_code}}</p></van-col>
                        </van-row>
                        <van-row style="padding: 4px 12px 0">
                            <van-col class="" span="12"><p class="card_list1_test_left" >企业主姓名</p></van-col>
                            <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >{{item.company_info.legal_representative}}</p></van-col>
                        </van-row>
                        <van-row style="padding: 4px 12px 0">
                            <van-col class="" span="12"><p class="card_list1_test_left" >采集时间</p></van-col>
                            <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >{{item.collect_time}}</p></van-col>
                        </van-row>
                        <div style="height: 6px"></div>
                        <van-row style="text-align: center;padding: 8px 12px 8PX;border-top: #dddddd 1px solid" type="flex" justify="center" @click="go('collectOperation',{info:item})">
                            <van-col class="icon_box" span=""><img src="../../../assets/images/38/Supplement@2x.png" class="img_location" ></van-col>
                            <van-col class="" span=""><p class="card_list2_test" style="padding-left: 8px;color: #f76037;font-weight: normal">补录</p></van-col>
                        </van-row>
                    </div>


                    <div style="height: 8px"></div>
                </van-tab>
                <van-tab title="已完成" color="#4c62e7" name="已完成">
                     <div class="card_div" v-for="(item,index) in this.infos" v-show="item.step!=0">
                       <van-row style="padding: 4px 12px 0">
                           <van-col class="icon_box" span="2"><img src="../../../assets/images/38/Companyname@2x.png" class="img_location" ></van-col>
                           <van-col class="" span="18"><p class="card_list2_test" >{{item.company_info.company_name}}</p></van-col>
                       </van-row>
                       <van-row style="padding: 4px 12px 0">
                           <van-col class="" span="12"><p class="card_list1_test_left" >统一社会信用代码</p></van-col>
                           <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >{{item.company_info.unified_social_credit_code}}</p></van-col>
                       </van-row>
                       <van-row style="padding: 4px 12px 0">
                           <van-col class="" span="12"><p class="card_list1_test_left" >企业主姓名</p></van-col>
                           <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >{{item.company_info.legal_representative}}</p></van-col>
                       </van-row>
                       <van-row style="padding: 4px 12px 0">
                           <van-col class="" span="12"><p class="card_list1_test_left" >采集时间</p></van-col>
                           <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >{{item.collect_time}}</p></van-col>
                       </van-row>
                        <div style="height: 6px"></div>
                        <van-row style="text-align: center;padding: 8px 12px 8PX;border-top: #dddddd 1px solid" type="flex" justify="center">
                            <van-col class="" span="12" @click="go('collectOperation',{info:item})">
                                <van-col class="icon_box2" span=""><img src="../../../assets/images/38/Signing@2x.png" class="img_location" ></van-col>
                                <van-col class="" span=""><p class="card_list2_test" style="padding-left: 8px;color: #4c62e7;font-weight: normal">修改</p></van-col>
                            </van-col>
                            <van-col class="" span="12" @click="go('infoDetail',{info:item})">
                                <van-col class="icon_box2" span=""><img src="../../../assets/images/38/Viewreport@2x.png" class="img_location"  ></van-col>
                                <van-col class="" span=""><p class="card_list2_test" style="padding-left: 8px;color: #4c62e7;font-weight: normal">查看详情</p></van-col>
                            </van-col>


                        </van-row>
                    </div>
                    <div style="height: 8px"></div>
                </van-tab>
            </van-tabs>
        </div>

    </div>
</template>

<script>

    import NavBar from '@/components/navBar'
    import Vue from 'vue';
    import { Tab, Tabs ,SubmitBar, } from 'vant';

    Vue.use(Tab).use(Tabs).use(SubmitBar);
    export default {

        data() {
            return {
                title : '信息采集',
                checked: true,
                show: false,
                show1:false,
                show2:false,
                openOverlay_title:"",
                open:true,
                step:'',
				infos:[],
                activeName:'待补录',
            }
        },


        //数据预加载
        created(){
			var jsonStr = sessionStorage.getItem('userinfo');

			if(jsonStr != '' && jsonStr != undefined && jsonStr != null){
				this.infos = JSON.parse(jsonStr);
			}

            var value = sessionStorage.getItem('informationAcquisition_tab' );
            if (value=='待补录') {
                this.activeName = value;
            } else {
                this.activeName = '已完成';
            }
        },

        //网页加载完成
        mounted  (){

        },

        //声明方法
        methods : {
            onTabClick() {
                sessionStorage.setItem('informationAcquisition_tab',this.activeName )
                console.log(this.activeName)
            },
            onClickLeft() {
                this.$router.go(-1);
                sessionStorage.setItem('informationAcquisition_tab','待补录' );
            },
            gomyperformance : function(){
                this.$router.push('./myperformance');
            },
            goactivityDetailsNotBegin : function(){
                this.$router.push('./activityDetailsNotBegin');
            },
            go : function(url,param){
                this.$router.push({name:url,params:param});
            },
            go_attendanceList() {
                this.$router.push('/attendanceList');
            },
            goactivityDetailsOver : function(){
                this.$router.push('./activityDetailsOver');
            },
            openOverlay : function(){
                this.show = true;
                this.show1 = true;
            },
            closeOverlay : function(){
                this.show = false;
                this.show1 = false;
            },
            openSecendOverlay (e){
                this.show2 = true;
                this.show1 = false;
                this.openOverlay_title = e.target.innerHTML
            },
            gobackOverlay : function(){
                this.show = true;
                this.show1 = true;
                this.show2 = false;
            },
            changeOpen(i) {
                this.step= i+1;

            },
            changeClose(i) {
                this.step= '';
            }


        },

        //计算属性
        computed: {

        },

        //引入组件
        components: {
            NavBar
        }


    }
</script>

<style lang="scss" scoped>
    .hiddin_box{
        display: none;
    }
    .hiddin_box_show{
        display: block;
    }
    .popContainer{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.3);
        z-index: 100;
    }
    .choose_box{
        height: 281px;
        position: absolute;
        bottom: 0;
        background-color: white;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width: 100%;
    }
    .choose_box_text{
        line-height: 40px;
        color: #999999;
        font-size: 16px;
        margin-block-start:0;
        margin-block-end:0;
    }
    .blue{
        color: #4c62e7;
    }
    .van_col_box{
        background-color: rgb(250,250,250);
        border: rgb(220,220,220) solid 0.5px;
    }
    .van_col_box_text{
        padding: 6px 16px;
        font-size: 12px;
        margin-block-start:0;
        margin-block-end:0;
    }
    .van_row_box{
        margin: 0 12px;
    }



    .list_right_text{
        margin-block-start:0;
        margin-block-end:0;
        font-size: 14px;
        line-height: 34px;
        color: rgb(51,51,51);
    }
    .img_open{
        position: absolute;
        bottom: 2px;
        right: 12px;
        height: 20px;
        width: 20px;
    }

    // scoped 表示私有样式
    .content{
        padding: 0px ;
        background-color: rgb(238,238,238);
        justify-content: center;
        align-items: center;
    }
    .card_list1_test_left{
        color: #999999;
        font-size: 14px;
        margin-block-start:0;
        margin-block-end:0;
        line-height: 30px;
        padding-left: 28px;
    }
    .img_return{
        position: absolute;
        top: 14px;
        left:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;
    }
    .img_fliter{
        position: absolute;
        top: 14px;
        right:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;
    }
    .img_search{
        position: absolute;
        top: 14px;
        right:40px ;
        height: 18px;
        width: 18px;
        z-index: 100;

    }
    .card_list1_test_right{
        color: #333333;
        font-size: 14px;
        margin-block-start:0;
        margin-block-end:0;
        line-height: 30px;
    }
    .card_list2_test{
        color: #333333;
        font-size: 14px;
        margin-block-start:0;
        margin-block-end:0;
        line-height: 30px;
    }
    .img_location{
        height: 18px;
        width: 18px;
    }
    .icon_box{
        margin-top: 6px;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .icon_box2{
        margin-left: 30%;
        margin-top: 6px;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .card_div{
        position: relative;
        width: auto;
        padding:0px;
        background-color: white;
        border-radius: 10px;
        margin: 8px 10px 0;
    }

    .title {
        margin-left: 12px;
        font-size: 14px;
    }
</style>
