<template>
    <div class="main" style="position: relative; ">

        <!--头部导航-->

        <van-nav-bar :title="title"  ></van-nav-bar>
        <img src="../../../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
        <div class="main">
            <div class="main_box" v-show="this.info">
                <div style="height: 8px"></div>
                <van-row class="list_row_top" >
                    <van-col class=""  style="background-color: #4c62e7;width: 10px;height: 16px;margin: 9px 4px 9px 0;"></van-col>
                    <van-col class="list_title"  style="text-align: left"><p class="list_right_text" >企业基本信息</p></van-col>
                </van-row>
                <van-row class="list_row" >
                    <van-col class="list_left"  style="text-align: left;width: 123px;"><p class="list_test gray_text" >企业名称</p></van-col>
                    <van-col class="list_right"  style="text-align: left"><p class="list_test" style="color: rgb(51,51,51)">{{this.info.company_info.company_name}}</p></van-col>
                </van-row>
                <van-row class="list_row" >
                    <van-col class="list_left"  style="text-align: left;width: 123px;"><p class="list_test gray_text" >统一社会信用代码</p></van-col>
                    <van-col class="list_right"  style="text-align: left"><p class="list_test" style="color: rgb(51,51,51)">{{this.info.company_info.unified_social_credit_code}}</p></van-col>
                </van-row>
                <van-row class="list_row" >
                    <van-col class="list_left"  style="text-align: left;width: 123px;"><p class="list_test gray_text" >企业主姓名</p></van-col>
                    <van-col class="list_right"  style="text-align: left"><p class="list_test" style="color: rgb(51,51,51)">{{this.info.company_info.legal_representative}}</p></van-col>
                </van-row>
                <van-row class="list_row" >
                    <van-col class="list_left"  style="text-align: left;width: 123px;"><p class="list_test gray_text" >采集时间</p></van-col>
                    <van-col class="list_right"  style="text-align: left"><p class="list_test" style="color: rgb(51,51,51)">{{this.info.collect_time}}</p></van-col>
                </van-row>
            </div>

            <div class="main_box">
                <div style="height: 8px"></div>
                <van-row class="list_row_top" >
                    <van-col class=""  style="background-color: #4c62e7;width: 10px;height: 16px;margin: 9px 4px 9px 0;"></van-col>
                    <van-col class="list_title"  style="text-align: left"><p class="list_right_text" >信息采集</p></van-col>
                </van-row>

                <van-row class="list_row border_botton" @click="goToDetail(0)" >

                    <van-col class="list_left"  style="text-align: left;width: 123px;"><p class="list_right_text" >企业信息</p></van-col>
                    <img src="../../../../assets/images/24/Dropright2.png" class="img_Droprighth" >
                </van-row>
                <van-row class="list_row border_botton"  @click="goToDetail(1)">
                    <img src="../../../../assets/images/24/Dropright2.png" class="img_Droprighth" >
                    <van-col class="list_left"  style="text-align: left;width: 123px;"><p class="list_right_text" >企业主信息</p></van-col>
                </van-row>
                <van-row class="list_row border_botton"  @click="goToDetail(2)">
                    <img src="../../../../assets/images/24/Dropright2.png" class="img_Droprighth" >
                    <van-col class="list_left"  style="text-align: left;width: 123px;"><p class="list_right_text" >关联人信息</p></van-col>
                </van-row>
                <van-row class="list_row border_botton"  @click="goToDetail(3)">
                    <img src="../../../../assets/images/24/Dropright2.png" class="img_Droprighth" >
                    <van-col class="list_left"  style="text-align: left;width: 123px;"><p class="list_right_text" >抵押物信息</p></van-col>
                </van-row>
                <van-row class="list_row border_botton" @click="goToDetail(4)" >
                    <img src="../../../../assets/images/24/Dropright2.png" class="img_Droprighth" >
                    <van-col class="list_left"  style="text-align: left;width: 123px;"><p class="list_right_text" >抵押人信息</p></van-col>
                </van-row>
            </div>

            <div style="height: 8px"></div>

        </div>
    </div>
</template>

<script>

    //引入组件首字母大写
    import TabBar from '@/components/tabBar'
    import { Tab, Tabs,Swipe, SwipeItem, Row, Col  } from 'vant';
    import Vue from 'vue';

    Vue.use(Swipe).use(SwipeItem).use(Col).use(Row).use(Tab).use(Tabs);
    export default {
        //基础数据存放处
        data (){
            return {
                title : '信息采集详情',
                activeName: 'a',
                current: 0,
				info:{},
            }
        },

        //数据预加载
       created(){
           console.log(this.$route.params.info)
           if(this.$route.params.info) {
               this.info = this.$route.params.info;
               sessionStorage.setItem('infoDetail',JSON.stringify(this.info))
           } else {
               this.info = JSON.parse(sessionStorage.getItem('infoDetail'))
           }
       },

        //网页加载完成
        mounted () {
        },

        //声明方法
        methods : {
            onClickLeft() {
                this.$router.go(-1);
                sessionStorage.setItem('informationAcquisition_tab','已完成' );
            },
            onChange(index) {
                this.current = index;
            },
            goviewList : function(){
                this.$router.push('./viewList');
            },

			goToDetail : function(type){
				localStorage.setItem('xxcj_type',type);

				this.$router.push({path:'/index3/infoDetail',query:{info:this.info}});

			},
            go : function(url){
                this.$router.push({name: url})
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

<style lang="scss" scoped>
    .img_swiper{
        height: 200px;
        width: auto;
    }
    .main{
        background-color: rgb(238,238,238);
    };
    .list_right_text{
        margin-block-start:0;
        margin-block-end:0;
        font-weight: bold;
        font-size: 14px;
        line-height: 34px;
        color: rgb(51,51,51);
    }
    .list_test_examine{
        line-height: 40px;
        font-size: 15px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(153,153,153);
    }
    .main_box{
        margin-top: 8px;
        width: 100%;
        background-color: white;
        border-radius: 10px;
    }
    .list_test{
        line-height: 40px;
        margin-block-start:0;
        margin-block-end:0;
        font-size: 14px;
        color: #333333;
    }
    .gray_text{
        color: #666666;
    }
    .list_test_min{
        line-height: 30px;
        font-size: 12px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(102,102,102);
    }
    .list_test_min_head{
        line-height: 30px;
        font-size: 14px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(51,51,51);
    }
    .list_test_last{
        padding-left: 4px;
        line-height: 40px;
        font-size: 14px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(51,51,51);
    }
    .list_row_top{
        padding: 0px 12px;
    }
    .img_return{
        position: absolute;
        top: 14px;
        left:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;
    }
    .img_Droprighth{
        position: absolute;
        top: 12px;
        right:0px ;
        height: 12px;
        width: 12px;
    }
    .list_row{
        padding: 0 12px ;margin:0;
    }
    .border_botton{
        border-bottom: #dddddd 1px solid;
        margin: 0 12px;
        padding-left: 0;
        position: relative;
    }
    .list_left{
        text-align: left;width: 123px;
    }
    .list_right{
        text-align: left
    }
    .secend_box{
        background-color: #FFFFFF;
        position: relative;
        top:-10px;
        width: 100%;
        height: 136px;
        margin-top: 9px;
    }
    .img_right{
        height: 16px;
        width: 16px;
        margin: 12px 0;
    }
    .not_start{
        z-index: 100;
        width: 60px;
        height: 40px;
        background-color: #f34c83 ;
        position: absolute;
        right: 0;
        top: 20px;
        justify-content: center;
        align-items: center;
        text-align: center;
    }





</style>
