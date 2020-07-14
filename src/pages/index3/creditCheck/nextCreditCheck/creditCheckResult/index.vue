<template>
    <div class="main_box">
        <!--头部导航-->
        <van-nav-bar :title="title"  :right-text="right_text" @click-right="gocommit" v-show="step==1"></van-nav-bar>
        <van-nav-bar :title="title"  right-text="发起贷款" @click-right="go('loanLaunch')" v-show="step==2"></van-nav-bar>
        <van-nav-bar :title="title"  right-text="返回首页" @click-right="go('index')" v-show="step==3"></van-nav-bar>
        <img src="../../../../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
        <div class="content">
            <div class="popContainer" v-show="step==1">
                <img src="../../../../../assets/images/other/wait@2x.png" class="img_cmarea2"  >
                <p class="black_text">提交成功，请稍后查看征信校验结果</p>
            </div>
            <div class="popContainer" v-show="step==2">
                <img src="../../../../../assets/images/other/success@2x.png" class="img_cmarea2" >
                <p class="black_text">征信校验通过</p>
            </div>

            <div class="popContainer" v-show="step==3">
                <img src="../../../../../assets/images/other/failure@2x.png" class="img_cmarea2" >
                <p class="black_text">征信校验失败</p>
            </div>
            <div class="div_errmsg" v-show="step==3">
                <van-row class="list_row_top" >
                    <van-col class=""  style="background-color: #4c62e7;width: 10px;height: 16px;margin: 9px 4px 9px 0;"></van-col>
                    <van-col class="list_title"  style="text-align: left"><p class="list_right_text" >不通过原因</p></van-col>
                </van-row>
                <div class="border_botton">
                <van-row class="list_row " >
                    <van-col class="" span="16" style=""><p class="list_test " >征信查询授权协议异常</p></van-col>
                    <van-col class="" span="4" style=""><p class="list_test orange" >不通过</p></van-col>
                    <van-col class="" span="4" style="text-align:right "  @click="change_detail(1)">
                        <p class="list_test blue" >详情<van-icon v-show="is_show==1" name="arrow-up" style="margin: 4px 4px;"/><van-icon v-show="is_show!==1" name="arrow-down" style="margin: 4px 4px"/></p>
                    </van-col>
                </van-row>

                    <p  v-show="is_show==1" class="list_test"  style="font-size: 12px;line-height: 24px">您上传的征信查询授权存在缺失页</p>
                </div>
                <div class="border_botton">
                <van-row class="list_row " >
                    <van-col class="" span="16" style=""><p class="list_test " >征信查询结果</p></van-col>
                    <van-col class="" span="4" style=""><p class="list_test orange" >不通过</p></van-col>
                    <van-col class="" span="4" style="text-align:right "  @click="change_detail(2)">
                        <p class="list_test blue" >详情<van-icon name="arrow-up" v-show="is_show==2" style="margin: 4px 4px;"/><van-icon name="arrow-down" v-show="is_show!==2" style="margin: 4px 4px"/></p>
                    </van-col>
                </van-row>
                    <p  v-show="is_show==2" class="list_test"  style="font-size: 12px;line-height: 24px">您上传的征信查询授权存在缺失页</p>
                </div>

            </div>
            <div class="div_errmsg" v-show="step==3">
                <van-row class="list_row_top" >
                    <van-col class=""  style="background-color: #4c62e7;width: 10px;height: 16px;margin: 9px 4px 9px 0;"></van-col>
                    <van-col class="list_title"  style="text-align: left"><p class="list_right_text" >录入调查结果</p></van-col>
                </van-row>
                <textarea rows="4" cols="20" class="textarea" :disabled="save_status">该客户贷款逾期，不良情况属实*****，股权质押时间即将结束
                </textarea>
                <button class="save_btn" @click="save" :class="save_status?'gray_bg':''">保存</button>
                <div style="height: 8px;"></div>
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
                title : '征信校验',
                right_text:'完成',
                step:0,
                resule:'征信查询结果',
                is_show:0,
                save_status:false,
            }
        },


        //数据预加载
        created (){
            var num = Math.random();
            console.log(num)
            if ( num+0.5 > 0 ) {
                this.step = 2
            } else {
                this.step = 3
            }
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
                var num = Math.random();
                console.log(num)
                if ( num-0.5 > 0 ) {
                    this.step = 2
                } else {
                    this.step = 3
                }
            },
            save() {
                this.save_status = true;
            },



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
    .save_btn{
        background-color: #4c62e7;
        width: 80%;
        border-radius: 80px;
        height: 34px;
        color: white;
        margin: 0 10%;
    }
    .textarea{
        background-color: rgb(238,238,238);
        width: 95%;
        padding: 8px 8px;
    }
    .gray_bg{
        background-color:rgb(187,187,187);
    }
    .popContainer{
        text-align: center;
        height: 210px;
        margin-top: 54px;
        background-color: white;
    }

    .list_right_text{
        margin-block-start:0;
        margin-block-end:0;
        font-weight: bold;
        font-size: 14px;
        line-height: 34px;
        color: rgb(51,51,51);
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
        justify-content: center;
    }
    .craema_text {
        color: #ffffff;
        margin-top: 50px;
        font-size: 14px;
    }
    .black_text{
        font-size: 14px;
        color: #333333;
    }
    .content{
        background-color: rgb(238,238,238);
        padding: 0;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
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
        margin-top: 64px;
        height: 70px;
        width: 70px;
    }

</style>
