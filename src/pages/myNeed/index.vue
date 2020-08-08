<template>
    <!--我的需求页面'-->
    <div class="container">
        <div class="head">
            <van-row>
                <van-col span="9" class="tuPiao"><van-icon  @click="fanHui" size="20" name="arrow-left" /></van-col>
                <van-col span="8">我的需求</van-col>
            </van-row>
        </div>
        <div class="xuQiuKa">
            <div class="xuQiuTile">刚失恋，聊点开心的</div>
            <div class="timeLie">
                <span>120分钟</span>
                <span class="faBuTime">1小时前</span>
            </div>
            <div class="moneyLie">
                <span class="xuQiuMoney">￥600</span>
                <span><van-button plain round type="primary" color="#4CD4D2" class="xuQiuDel">删除</van-button></span>
            </div>
        </div>
        <div class="xuQiuKa">
            <div class="xuQiuTile">刚毕业聊聊求职如何避坑</div>
            <div class="timeLie">
                <span>120分钟</span>
                <span class="faBuTime">2小时前</span>
            </div>
            <div class="moneyLie">
                <span class="xuQiuMoney">￥210</span>
                <span><van-button plain round type="primary" color="#4CD4D2" class="xuQiuDel">删除</van-button></span>
            </div>
        </div>


    </div>

</template>

<script>

    //引入组件首字母大写
    import { Dialog} from 'vant';
    import Vue from 'vue';
    export default {

        //基础数据存放处
        data (){
            return {
               shouKuanRen: '',
               shouKuanHao: '',
               money: 0,
            }
        },

        //数据预加载
        created : function(){
            this.screenHeight = window.screenHeight;
        },

        //网页加载完成
        mounted () {
            
        },

        //声明方法
        methods : {
           //返回上一页
           fanHui:function(){
                this.$router.go(-1);
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
    .container
        height:667px
        width:100vw
        background-color:#F9F9FB
        .head
            padding-left: 15px;
            padding-top:20px
            background-color:white
            font-size:18px
            height:36px;
            width:100vw
            .tuPiao
                margin-top:3px
        .xuQiuKa
            width:auto
            height:110px
            margin-top:10px
            padding:15px
            background-color:white
            .xuQiuTile
                font-size:16px
                font-weight:bold
            .timeLie
                font-size:14px
                margin-top:8px
                color:#C1C1C1
                .faBuTime
                    margin-left:15px
            .moneyLie
                line-height:60px
                .xuQiuMoney
                    float: left
                    font-size:18px
                    color:#F23744
                .xuQiuDel
                    float: right
                    height:35px

</style>
