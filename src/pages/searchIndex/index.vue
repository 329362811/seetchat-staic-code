<template>
    <!--结算-->
    <div class="searchIndex">
        <!--头部-->
		<van-nav-bar left-arrow @click-left="onClickLeft" :title='title' fixed />
        <div class="head-div">
            <form action="/">
                <van-search
                    v-model="searchValue"
                    show-action
                    placeholder="请输入搜索关键词"
                    @search="onSearch"
                    @cancel="onCancel"
                />
            </form>
        </div>

    </div>

</template>

<script>

    //引入组件首字母大写
    import { Dialog, Search, Toast } from 'vant';
    import Vue from 'vue';
    export default {

        //基础数据存放处
        data (){
            return {
                title:'搜索',
                searchValue: '',
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
            onSearch(val) {
                //Toast(val);
            },
            onCancel() {
                //Toast('取消');
                this.$router.go(-1);
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
    .searchIndex
        width:100vw
        height 250px
        .van-nav-bar
            background-color unset
        .head-div
            padding 70px 20px 0px 10px
            line-height 30px

        
</style>
