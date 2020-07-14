<template>

    <div class="main">

        <van-nav-bar
                :title='title'
                fixed
        />

        <div class="content">
                <img :src="img1" class="img" @click="gomyActivities">
                <img :src="img2" class="img" @click="gomyperformance">
				<img :src="img3" class="img" @click="goResearch">
        </div>




        <TabBar/>

    </div>

</template>

<script>

    //引入组件首字母大写
    import TabBar from '@/components/tabBar';
    import { Dialog} from 'vant';
    import Vue from 'vue';
    Vue.use(Dialog);
    export default {

        //基础数据存放处
        data (){
            return {
                title : '我的',
                img1: require('@/assets/images/other/4c429533dfa2d23c0a40430e92c8601.jpg'),
                img2: require('@/assets/images/other/wodeyeji.jpg'),
				img3: require('@/assets/images/other/8021574236234_.pic_hd.jpg'),
                //  screenWidth: document.body.clientWidth, // 屏幕尺寸
                //  screenHeight: document.body.clientHeight, // 屏幕尺寸
            }
        },

        //数据预加载
        created : function(){
            this.screenHeight = window.screenHeight;
        },

        //网页加载完成
        mounted () {
            const that = this
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth;
                    window.screenHeight = document.body.clientHeight;
                    that.screenWidth = window.screenWidth;
                    that.screenHeight = window.screenHeight;

                })()
            }
        },

        //声明方法
        methods : {

            gomyActivities : function(){
                Dialog.confirm({
                    message: "请选择身份",
                    //closeOnClickOverlay: true,
                    confirmButtonText: "普惠营销管理岗",
                    cancelButtonText: "营销主管岗" ,
                    cancelButtonColor:"#1989fa",
                }).then(()=> {
                    sessionStorage.setItem("offlineHuoDong_active","主管岗_已发布") //确认新建
                    sessionStorage.setItem("offlineHuoDongActive","已发布") //去到待审核-
                    sessionStorage.setItem("intelligenceEnablement","management")
                    sessionStorage.setItem("saveCg","false") //默认保存草稿为false
                    this.$router.push('/offlineHuoDong');
                }).catch(() => {
                    sessionStorage.setItem("offlineHuoDong_active","主管岗_已发布") //确认新建
                    sessionStorage.setItem("offlineHuoDongActive","已发布") //去到待审核-
                    sessionStorage.setItem("intelligenceEnablement","supervisor")
                    sessionStorage.setItem("saveCg","false") //默认保存草稿为false
                    this.$router.push('/offlineHuoDong');
                })
                // Dialog.confirm({
                //     message: "请选择身份",
                //     confirmButtonText: "管理岗", //改变确认按钮上显示的文字
                //     cancelButtonText: "经办岗" ,//改变取消按钮上显示的文字
                //     cancelButtonColor:"#1989fa",
                // }).then(()=> {
                //     sessionStorage.setItem("identity","management")
                //     this.$router.push('/myActivities');
                // }).catch(() => {
                //     sessionStorage.setItem("identity","handle")
                //     this.$router.push('/myActivities');
                // })
            },
            gomyperformance : function(){
                this.$router.push('./myperformance');
            },
			goResearch : function(){
			    this.$router.push('./research');
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
    .img{
        border-radius: 20px;
        width: 95%;
        padding:8px 12px 0 12px;
    };
    .main{
        background-color: rgb(238,238,238);
        margin: 0;
        padding: 0;
    };
    .content{
        height:600px;
        background-color: rgb(238,238,238);
    }
</style>
