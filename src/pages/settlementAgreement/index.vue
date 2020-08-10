<template>
    <!--结算-->
    <div class="settlementAgreement">
        <!--头部-->
		<van-nav-bar left-arrow @click-left="onClickLeft" :title='title' fixed />
        <div class="head-div">
            <div>买家在承诺全国包邮的商品购买后，无需支付运费即可买到喜爱的商品，中国大陆地区发货的运费将由商家全额承担。中国大陆地区是指除香港澳门、台湾地区以外的中国所有省、直辖市和自治区。注：部分商品不支持偏远地区如新疆、西藏等区域。</div>
        </div>

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
                title : '用户协议',
                jine:"￥200.00",
                showModel:false,
                pwdValue: '123',
                showKeyboard: false,

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
                this.$router.go(-1);
            },
            //发布
            releasedBut: function(){
                 this.$router.push("/releaseSuccess");
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
<style lang="stylus" scoped>
    .settlementAgreement
        width:100vw
        height 250px
        .van-nav-bar
            background-color unset
        .head-div
            padding 70px 20px 0px 20px
            line-height 30px

        
</style>
