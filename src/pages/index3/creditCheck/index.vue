<template>
    <div class="main_box">
        <!--        遮罩层-->
        <div class='popContainer'  v-show="is_open">
            <div  class="choose_box" >
                <van-row class="choose_box_list" @click="choose(0)">
                    <p class="choose_box_text " :class="type == 0 ? 'blue' : '' ">全部</p>
                </van-row>
                <van-row class="choose_box_list" @click="choose(1)">
                    <p class="choose_box_text " :class="type == 1 ? 'blue' : '' ">通过</p>
                </van-row>
                <van-row class="choose_box_list" @click="choose(2)">
                    <p class="choose_box_text " :class="type == 2 ? 'blue' : '' ">未通过</p>
                </van-row>
            </div>

        </div>
        <!--头部导航-->
        <van-nav-bar :title="title" >

        </van-nav-bar>
        <img src="../../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
        <img src="../../../assets/images/38/searchfor@2x.png" class="img_search" @click="go('searchInfo')">
        <div class="content">
            <van-tabs color="#4c62e7" @click="onTabClick" v-model="active" line-width="50%" line-height=3 style="position: relative" title-active-color="#4c62e7">
                <img src="../../../assets/images/24/Pulldownselect@2x.png" class="img_is_open" v-show="!is_open" @click="openOverlay">
                <img src="../../../assets/images/24/Pullupselect@12x.png" class="img_is_open" v-show="is_open" @click="openOverlay">
                <van-tab title="待校验" color="#4c62e7">
                    <div class="card_div" v-for="(item, index) in infos" v-show="item.step == 1">
                        <van-row style="padding: 4px 12px 0">
                            <van-col class="icon_box" span="2"><img src="../../../assets/images/38/Companyname@2x.png" class="img_location" ></van-col>
                            <van-col class="" span="18"><p class="card_list2_test" >{{item.company_info.company_name}}</p></van-col>
                        </van-row>
                        <van-row style="padding: 4px 12px 0">
                            <van-col class="" span="12"><p class="card_list1_test_left" >企业主</p></van-col>
                            <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >{{item.company_info.legal_representative}}</p></van-col>
                        </van-row>
                        <van-row style="padding: 4px 12px 0">
                            <van-col class="" span="12"><p class="card_list1_test_left" >统一社会信用代码</p></van-col>
                            <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >{{item.company_info.unified_social_credit_code}}</p></van-col>
                        </van-row>
                        <van-row style="padding: 4px 12px 0">
                            <van-col class="" span="12"><p class="card_list1_test_left" >采集时间</p></van-col>
                            <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >{{item.collect_time}}</p></van-col>
                        </van-row>
                        <div style="height: 6px"></div>
                        <van-row style="text-align: center;padding: 8px 12px 8PX;border-top: #dddddd 1px solid" type="flex" justify="center" @click="go('nextCreditCheck',item.unid)">
                            <van-col class="icon_box" span=""><img src="../../../assets/images/38/Creditcheck@2x.png" class="img_location" ></van-col>
                            <van-col class="" span=""><p class="card_list2_test" style="padding-left: 8px;;font-weight: normal;color: #4c62e7">征信校验</p></van-col>
                        </van-row>
                    </div>
                    <div style="height: 8px"></div>
                </van-tab>
                <van-tab :title="tab2" color="#4c62e7" >
                    <div class="card_div" style="position: relative" v-for="(item,index) in this.infos" v-show="item.step == 2&&tab2!=='未通过'">
                        <van-row style="padding: 4px 12px 0">
                            <van-col class="icon_box" span="2"><img src="../../../assets/images/38/Companyname@2x.png" class="img_location" ></van-col>
                            <van-col class="" span="18"><p class="card_list2_test" >{{item.company_info.company_name}}</p></van-col>
                            <img src="../../../assets/images/other/Label11@2x.png" v-show="item.isPass" class="img_pass" >
							<img src="../../../assets/images/other/Label12@2x.png" v-show="!item.isPass"  class="img_pass" >
                        </van-row>
                        <van-row style="padding: 4px 12px 0">
                            <van-col class="" span="12"><p class="card_list1_test_left" >企业主</p></van-col>
                            <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >{{item.company_info.legal_representative}}</p></van-col>
                        </van-row>
                        <van-row style="padding: 4px 12px 0">
                            <van-col class="" span="12"><p class="card_list1_test_left" >统一社会信用代码</p></van-col>
                            <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >{{item.company_info.unified_social_credit_code}}</p></van-col>
                        </van-row>
                        <van-row style="padding: 4px 12px 0">
                            <van-col class="" span="12"><p class="card_list1_test_left" >采集时间</p></van-col>
                            <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >{{item.collect_time}}</p></van-col>
                        </van-row>
                        <div style="height: 6px"></div>
                    </div>

                    <div class="null_box"></div>
                </van-tab>
            </van-tabs>
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
                open:true,
                is_open:false,
                type:0,
                active:0,
                tab2:'已校验',
				infos:[],
            }
        },


        //数据预加载
        created : ()=>{
        },

        //网页加载完成
        mounted (){
			var infos =  sessionStorage.getItem('userinfo')

			if(null != infos && undefined != infos && '' != infos){
				this.infos = JSON.parse(infos);
                console.log(this.infos);
			}
		},

        //声明方法
        methods : {
            onClickLeft() {
                // this.$router.push({path:'/'});
                this.$router.go(-1);
            },
            go : function(url,params = false){
				if(params){
					this.$router.push({name: url,query:{unid:params}})
				}else{
					 this.$router.push({name: url})
				}

            },
            openOverlay : function(){
                if(this.active == 1) {
                    this.is_open = !this.is_open;
                }
            },
            choose(i) {
                if ( i == 1) {
                    this.tab2 = '通过';
                } else if ( i == 2) {
                    this.tab2 = '未通过';
                } else {
                    this.tab2 = '已校验';
                }

                this.is_open = false;
                this.type = i;
            },
            onTabClick(index) {
                this.active = index
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
    .hiddin_box{
        display: none;
    }
    .hiddin_box_show{
        display: block;
    }
    .null_box{
        height: 8px;
    }
    .popContainer{
        position: fixed;
        top: 90px;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.3);
        z-index: 100;
    }
    .choose_box{
        float: right;
        background-color: white;
        width: 50%;
    }
    .choose_box_list{
        text-align: center;
    }
    .choose_box_text{
        line-height: 34px;
        color: #999999;
        font-size: 16px;
        margin-block-start:0;
        margin-block-end:0;
    }
    .blue{
        color: #4c62e7;
    }
    .van_col_box{
        background-color: rgb(250,250,250);
        border: rgb(220,220,220) solid 0.5px;
    }
    .van_col_box_text{
        padding: 6px 16px;
        font-size: 12px;
        margin-block-start:0;
        margin-block-end:0;
    }
    .van_row_box{
        margin: 0 12px;
    }



    .list_right_text{
        margin-block-start:0;
        margin-block-end:0;
        font-size: 14px;
        line-height: 34px;
        color: rgb(51,51,51);
    }
    .img_open{
        position: absolute;
        bottom: 2px;
        right: 12px;
        height: 20px;
        width: 20px;
    }

    // scoped 表示私有样式
    .content{
        padding: 0px ;
        background-color: rgb(238,238,238);
        justify-content: center;
        align-items: center;
    }
    .card_list1_test_left{
        color: #999999;
        font-size: 14px;
        margin-block-start:0;
        margin-block-end:0;
        line-height: 30px;
        padding-left: 28px;
    }
    .img_return{
        position: absolute;
        top: 14px;
        left:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;
    }
    .img_fliter{
        position: absolute;
        top: 14px;
        right:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;
    }
    .img_search{
        position: absolute;
        top: 14px;
        right:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;

    }
    .card_list1_test_right{
        color: #333333;
        font-size: 14px;
        margin-block-start:0;
        margin-block-end:0;
        line-height: 30px;
    }
    .card_list2_test{
        color: #333333;
        font-size: 14px;
        margin-block-start:0;
        margin-block-end:0;
        line-height: 30px;
    }
    .img_location{
        height: 18px;
        width: 18px;
    }
    .img_is_open{
        height: 18px;
        width: 18px;
        position: absolute;
        right: 13%;
        top:12px;
        z-index: 100;
    }
    .img_pass{
        position: absolute;
        right: 10px;
        top:-0px;
        height: 44px;
        width: 68px;
    }
    .icon_box{
        margin-top: 6px;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .icon_box2{
        margin-left: 30%;
        margin-top: 6px;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .card_div{
        position: relative;
        width: auto;
        padding:0px;
        background-color: white;
        border-radius: 10px;
        margin: 8px 10px 0;
    }

    .title {
        margin-left: 12px;
        font-size: 14px;
    }
</style>
