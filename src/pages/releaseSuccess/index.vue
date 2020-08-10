<template>
    <!--发布需求成功页面-->
    <div class="container">
        <div id="head">
            <van-icon @click="cancelBut" id="headIcon" name="cross" />
        </div>
        <div id="succeedKuang">
            <div>
                <van-image class="succeedImg" width="90" height="90" :src="require('../../assets/images/成功_slices/成功@2x.png')" />
            </div>
            <span class="succeedTxt">您的需求已经发布成功～</span>
        </div>
        <div style="text-align:center">
            <van-button  @click="releasedBut" class="tiJiaoBut" round block native-type="submit">分享微信/朋友圈</van-button>
            <a @click="closeBut" class="succeedButTxt">关闭回到首页</a>
        </div>

        <van-popup class="popup-div" round closeable v-model="showPopup">
            <van-image class="vanImg"  fit="contain" :src="require('../../../static/wxBg.png')" />
            <div class="fenxian-title">
                <h3>如何与心仪的妹子聊天提升好感度</h3>
                <div class="fenxian-ti-div">我刚聊完，发现了个有趣的平台一起来吹水吧～</div>
            </div>
            <div class="fenxian-title-right">
                <van-image width="80px" height="100px" fit="contain" :src="require('../../../static/erweima.png')" />
            </div>
            <div class="vanImg-div">
                <van-image class="fenxian-icon" :src="require('../../../static/wx.png')" />
                <div class="spanTitle">微信</div>
            </div>
            
            <div class="vanImg-div">
                <van-image class="fenxian-icon" :src="require('../../../static/pyq.png')" />
                <div class="spanTitle">朋友圈</div>
            </div>
            
            <div class="vanImg-div">
                <van-image class="fenxian-icon" :src="require('../../../static/xz.png')" />
                <div class="spanTitle">下载</div>
            </div>
        </van-popup>
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
           cancelBut:function(){
               this.$router.go(-1);
           },
           //关闭返回首页
           closeBut:function(){
               this.$router.push("/index");
           },
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
<style>
.popup-div .van-popup__close-icon{
    top:-30px;
    right:-20px;
}

.popup-div .vanImg img{
    border-top-left-radius:20px;
    border-top-right-radius:20px;
}
</style>
<style lang="stylus" scoped>
    .container
        height:667px
        width:100vw
        background-color:#F9F9FB
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
            height:309px
            text-align:center
            .succeedImg
                width:90px
                height:90px;
                margin-top:71px;
                margin-bottom:21px
            .succeedTxt
                font-size: 18px
        .tiJiaoBut
            width:250px
            height:45px
            font-size:17px
            margin:0px auto 30px auto
            color:white
            background: -webkit-gradient(linear, left top, right bottom, color-stop(10%,#1DE7A7), color-stop(80%,#22D3F5))
        .succeedButTxt
            height:18px
            font-size:17px
        .popup-div
            width 80vw
            overflow: initial
            .vanImg
                width 80vw
                border-top-left-radius 20px
                border-top-right-radius 20px
            .fenxian-title
                float left
                width 50vw
                height 130px
                padding 0px 0px 0px 3vw
                h3
                    margin 15px 0px
                .fenxian-ti-div
                    font-size 12px
            .fenxian-title-right
                float right
                width 25vw
                height 130px
            .vanImg-div
                width 26vw
                float left
                text-align center
                margin-bottom 30px
                .spanTitle
                    width 26vw
                .fenxian-icon
                    width 48px
                    margin 0 auto
                
</style>
