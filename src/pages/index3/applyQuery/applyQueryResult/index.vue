<template>
    <div class="main_box">
        <!--头部导航-->
        <van-nav-bar :title="title"   ></van-nav-bar>
        <img src="../../../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
        <div class="content">
            <div style="height: 8px"></div>
            <div class="popContainer" >
                <img src="../../../../assets/images/other/Fail@2x.png" class="img_cmarea2" >
                <p class="black_text">合规审查不通过</p>
                <div style=" width: 70%;margin: 16px 15% 0;border-bottom: #dddddd 1px solid;" />
            </div>

            <div style="background-color: #ffffff;padding: 2px 12px">
                <van-row>
                    <van-col class=""  style="background-color: #4c62e7;width: 10px;height: 16px;margin: 9px 4px 9px 0;"></van-col>
                    <van-col class="list_title"  style="text-align: left"><p class="list_right_text" >企业基本信息</p></van-col>
                </van-row>
                <van-row>
                    <van-col span="8"><p class="text1">企业名称</p></van-col>
                    <van-col span="12"><p class="text1">北京京东金融有限公司</p></van-col>
                </van-row>
                <van-row>
                    <van-col span="8"><p class="text1">企业主</p></van-col>
                    <van-col span="12"><p class="text1">张三</p></van-col>
                </van-row>
                <van-row>
                    <van-col span="8"><p class="text1">申货序列号</p></van-col>
                    <van-col span="12"><p class="text1">1237892584697</p></van-col>
                </van-row>
                <van-row>
                    <van-col span="8"><p class="text1">申请时间</p></van-col>
                    <van-col span="12"><p class="text1">2019-8-15</p></van-col>
                </van-row>
                <van-row>
                    <van-col span="8"><p class="text1">产品代码</p></van-col>
                    <van-col span="12"><p class="text1">9613</p></van-col>
                </van-row>
            </div>
            <div class="div_errmsg" >
                <van-row class="list_row_top" >
                    <van-col class=""  style="background-color: #4c62e7;width: 10px;height: 16px;margin: 9px 4px 9px 0;"></van-col>
                    <van-col class="list_title"  style="text-align: left"><p class="list_right_text" >不通过原因</p></van-col>
                </van-row>
                <!-- <div class="border_botton">
                    <van-row class="list_row " >
                        <van-col class="" span="15" style=""><p class="list_test " >个人近12个月还款记录</p></van-col>
                        <van-col class="" span="4" style=""><p class="list_test orange" >不通过</p></van-col>
                        <van-col class="" span="5" style="text-align:right "  @click="change_detail(1)">
                            <p class="list_test blue" >详情<van-icon v-show="is_show==1" name="arrow-up" style="margin: 4px 4px;"/><van-icon v-show="is_show!==1" name="arrow-down" style="margin: 4px 4px"/></p>
                        </van-col>
                    </van-row>

                    <p  v-show="is_show==1" class="list_test"  style="font-size: 12px;line-height: 24px">您最近12个月存在<span class="orange">5</span>次途期还款记录，其中有<span class="orange">3</span>次涵期超时<span class="orange">2</span>个月</p>
                </div> -->
                <div class="border_botton">
                    <van-row class="list_row " >
                        <van-col class="" span="15" style=""><p class="list_test " >股权质押异常检查</p></van-col>
                        <van-col class="" span="4" style=""><p class="list_test orange" >不通过</p></van-col>
                        <van-col class="" span="5" style="text-align:right "  @click="change_detail(2)">
                            <p class="list_test blue" >详情<van-icon name="arrow-up" v-show="is_show==2" style="margin: 4px 4px;"/><van-icon name="arrow-down" v-show="is_show!==2" style="margin: 4px 4px"/></p>
                        </van-col>
                    </van-row>
                    <p  v-show="is_show==2" class="list_test"  style="font-size: 12px;line-height: 24px">您上传的征信查询授权存在缺失页</p>
                </div>
            </div>
            <div class="result_box" >
                <van-row class="list_row_top" >
                    <van-col class=""  style="background-color: #4c62e7;width: 10px;height: 16px;margin: 9px 4px 9px 0;"></van-col>
                    <van-col class="list_title"  style="text-align: left"><p class="list_right_text " >录入调查结果</p></van-col>
                </van-row>
                <div style="background-color: rgb(228,228,228);padding:6px 12px;height: 100px">
                    <textarea rows="3" class="textarea_box" :disabled="inptuStatus">该客户贷款逾期，不良情况属实**********，股权质押时间即将结束</textarea>
<!--                    <p class="list_right_text grey" style="line-height: 30px">该客户贷款逾期，不良情况属实**********，股权质押时间即将结束</p>-->
                </div>
                <div class="save_box" :class="inptuStatus?'':'blue_bg'" @click="saveBtn">
                    <p class="list_right_text white" >保存</p>
                </div>
            </div>
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
                title : '贷款详情',
                right_text:'完成',
                step:1,
                resule:'征信查询结果',
                is_show:0,
                inptuStatus:false,
            }
        },


        //数据预加载
        created (){

        },

        //网页加载完成
        mounted : ()=>{

        },

        //声明方法
        methods : {
            onClickLeft() {
                this.$router.go(-1);
            },
            change_detail(i) {
                if (this.is_show == i) {
                    this.is_show = 0
                } else {
                    this.is_show = i;
                }
            },
            go : function(url){
                this.$router.push({name: url})
            },
            gocommit : function(){
                console.log('123')
                var num = Math.random();
                console.log(num)
                if ( num-0.5 > 0 ) {
                    this.step = 2
                } else {
                    this.step = 3
                }
            },
            saveBtn() {
                this.inptuStatus = true;
                this.$router.go(-1);
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
    .popContainer{
        text-align: center;
        background-color: white;
    }
    .result_box{
        background-color: white;
        padding: 0 12px;
    }
    .list_right_text{
        margin-block-start:0;
        margin-block-end:0;
        font-weight: bold;
        font-size: 14px;
        line-height: 34px;
        color: rgb(51,51,51);
    }

    .save_box{
        text-align: center;
        margin: 8px auto 18px;
        background-color: rgb(200,200,200);
        height: 28px;
        border-radius: 28px;
        width: 70%;
    }
    .textarea_box{
        background-color: rgb(228,228,228);
        width: 100%;
        border: 0;
    }
    .white{
        color: white;
        line-height: 28px;
    }
    .list_test{
        margin-block-start:0;
        margin-block-end:0;
        font-size: 14px;
        line-height: 34px;
        color: #666666;
    }
    .border_botton{
        border-bottom: #dddddd 1px solid;
    }
    .blue{
        color: #4c62e7;
    }
    .orange{
        color: #f76037;
    }
    .div_errmsg{
        background-color: white;
        margin-top: 8px;
        padding: 0 12px;
    }
    .text1{
        line-height: 40px;
        margin-block-start:0;
        margin-block-end:0;
    }
    .craema_text {
        color: #ffffff;
        margin-top: 50px;
        font-size: 14px;
    }
    .black_text{
        font-size: 14px;
        color: #333333;
        margin-block-start:0;
        margin-block-end:0;
    }
    .content{
        background-color: rgb(238,238,238);
        padding: 0;
    }

    .img_return{
        position: absolute;
        top: 14px;
        left:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;
    }


    .img_cmarea2{
        margin-top: 22px;
        height: 70px;
        width: 70px;
    }
    .grey{
        color: #666666;
    }
    .blue_bg{
        background-color: #4c62e7;
    }
</style>
