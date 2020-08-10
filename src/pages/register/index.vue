<template>
    <!--登录页面-->
    <div class="register">
        <van-sticky>
            <van-nav-bar style="height:50px">  
                <template #title><span style="font-size:18px">登录</span></template>
                <template #left><van-icon name="arrow-left"  size="20" color="#000000"/></template>
            </van-nav-bar>
        </van-sticky>
        <div id="succeedKuang">
            <div>
                <van-image class="succeedImg" width="230" height="196" :src="require('../../../static/denglu.png')" />
            </div>
            <span class="succeedTxt">登录或进行微信授权</span>
        </div>
        <div style="text-align:center">
            <van-button class="tiJiaoBut" round block native-type="submit">微信用户一键登录</van-button>
            <a class="succeedButTxt">手机号登录/注册</a>
        </div>
    </div>

</template>

<script>

    //引入组件首字母大写
    import { Dialog,Popup} from 'vant';
    import Vue from 'vue';
    export default {

        //基础数据存放处
        data (){
            return {
                showPopup:false,

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
           releasedBut(){
               this.showPopup = true;
           }
        },

        //计算属性
        computed: {

        },


        components: {
           
        }
    }
</script>

<style lang="stylus" scoped>
    .register
        #head
            width:100vw
            height:40px
            #headIcon
                float:right
                font-size:13px
                margin-top:20px
                margin-right:20px
        #succeedKuang
            width:100vw
            height:336px
            text-align:center
            .succeedImg
                margin-top:81px;
                margin-bottom:38px
            .succeedTxt
                font-size: 21px
                color:#252B3A
        .tiJiaoBut
            width:325px
            height:45px
            font-size:17px
            margin:78px auto 27px auto
            color:white
            background: -webkit-gradient(linear, left top, right bottom, color-stop(10%,#1DE7A7), color-stop(80%,#22D3F5))
        .succeedButTxt
            height:18px
            font-size:17px
            color:#24E3E2
</style>
