<template>
    <!--结算-->
    <div class="settlement">
        <!--头部-->
		<van-nav-bar left-arrow @click-left="onClickLeft" :title='title' fixed />
        <div class="head-div">
            <h2>购买须知</h2>
            <div>找我聊服务类产品，一经售出不予退还</div>
        </div>

        <div class="jine-div">
            <div class="yfje">应付金额</div>
            <h1>{{jine}}</h1>
        </div>
        <div class="btn-div">
            <van-button @click="openPwdfunc" class="btn-ljgm" round type="primary" size="large">立即购买</van-button>
            <div class="btn-next-title">购买即视为同意<span @click="goSettlementAgreement" class="btn-next-span">《找我聊用户协议》</span></div>
        </div>

        <van-dialog class="van-dialog-div" v-model="showModel" title="请输入支付密码" confirmButtonText="">
            <van-icon @click="showModel=false;showKeyboard=false;" class="van-icon-close" name="cross" />
            <div class="jine-div2">
                <div class="van-dialog__header">找我聊</div>
                <h1>{{jine}}</h1>
            </div>
            <div class="posab-div">
                <van-cell value="支付方式" is-link>
                <template #title>
                    <span class="custom-title">建设银行卡</span>
                </template>
                </van-cell>
                <!-- 密码输入框 -->
                <van-password-input :value="pwdValue" :focused="showKeyboard" @focus="showKeyboard = true" />
            </div>
        </van-dialog>

        <van-number-keyboard  :show="showKeyboard" @blur="showKeyboard = false" @input="onInput" @delete="onDelete" />
    </div>

</template>

<script>

    //引入组件首字母大写
    import { Dialog, PasswordInput, NumberKeyboard, Toast } from 'vant';
    import Vue from 'vue';
    export default {

        //基础数据存放处
        data (){
            return {
                title : '结算',
                jine:"￥200.00",
                showModel:false,
                pwdValue: '123',
                showKeyboard: false,
                minDate: new Date(2020, 0, 1),
                maxDate: new Date(2025, 10, 1),
                currentDate: new Date(),

                beginTimeShow: false,   //开始时间弹出框判断
                endTimeShow: false,     //结束时间弹出框判断
                fangShiShow: false,     //聊天方式弹出框判断
                biaoQianshow: false,    //标签弹出框判断
                //个人数据资料
                pdemandData:{
                    pName: '',          //需求名称
                    pMoney: null,       //需求价格
                    pBeginTime: '',      //需求开始时间
                    pEndTime: '',        //需求结束时间
                    pFangShi: null,       //聊天方式
                    pBiaoQianResult:[1,2],//标签接收列表
                    pBeiZhu: '',        //备注
               },

            }
        },

        //数据预加载
        created : function(){
        },

        //网页加载完成
        mounted () {
        },

        //声明方法
        methods : {
            //返回上一页
            onClickLeft:function(){
                //this.$router.go(-1);
                
                 this.$router.push("/index");
            },
            //发布
            goSettlementAgreement: function(){
                 this.$router.push("/settlementAgreement");
            },
            openPwdfunc(){
                this.showModel = !this.showModel
                this.showKeyboard = !this.showKeyboard
            },
            onInput(key) {
                this.pwdValue = (this.pwdValue + key).slice(0, 6);
                if(this.pwdValue.length==6){
                    this.showModel = false
                    this.showKeyboard = false
                }
            },
            onDelete() {
                this.pwdValue = this.pwdValue.slice(0, this.pwdValue.length - 1);
            },
        },

        //计算属性
        computed: {

        },


        components: {
           
        }
    }
</script>
<style>
    .settlement .van-nav-bar__title{
        color: #FFFFFF;
    }
    .settlement .van-nav-bar__left .van-icon{
        color: #FFFFFF;
    }
    .settlement .van-dialog-div .van-dialog__footer{
        display: none;
    }
</style>
<style lang="stylus" scoped>
    .settlement
        width:100vw
        height 250px
        background url("../../../static/jiesuan.png") center no-repeat
        .van-nav-bar
            background-color unset

        [class*=van-hairline]::after
            border none
        .head-div
            padding: 44px 20px 0px 20px
            width 100vw
            color #FFFFFF
            h2
                margin-top 10px
        .jine-div
            position absolute
            top 50%
            left 50%
            transform translate(-50%,-50%)
            text-align center
            h1
                font-size 48px
            .yfje
                font-size 22px
        .btn-div
            position absolute
            bottom 80px
            width 100vw
            text-align center
            .btn-ljgm
                width 60vw
            .btn-next-title
                margin-top 20px
                .btn-next-span
                    color #07c160
        .van-dialog-div
            width 80vw
            height 250px
            .van-icon-close
                cursor pointer
                position absolute
                top 28px
                left 28px
            .jine-div2
                text-align center
                h1
                    font-size 40px
                    margin 0px 0px
                .van-dialog__header
                    padding-top 8px
            .posab-div
                position absolute
                bottom 70px
                height 50px
                width 80vw
            .van-password-input__security
                border 1px solid #ebedf0
                border-top none
                border-right none
                li
                    border-right 1px solid #ebedf0
        .van-number-keyboard
            z-index 9999

</style>
