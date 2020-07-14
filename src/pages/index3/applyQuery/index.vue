<template>
    <div class="main_box">
        <!--        遮罩层-->
        <div class='popContainer'  v-show="is_open">
            <div  class="choose_box" >
                <el-scrollbar style="height: 170px;"> <!-- 滚动条 -->
                    <van-row class="choose_box_list" v-for="(item,i) in list" @click="choose(i)">
                        <p class="choose_box_text " :class="type == i ? 'blue' : '' ">{{item}}</p>
                    </van-row>
                </el-scrollbar>
<!--                <van-row class="choose_box_list" @click="choose(1)">-->
<!--                    <p class="choose_box_text " :class="type == 1 ? 'blue' : '' ">录入复核</p>-->
<!--                </van-row>-->
<!--                <van-row class="choose_box_list" @click="choose(2)">-->
<!--                    <p class="choose_box_text " :class="type == 2 ? 'blue' : '' ">合规审查</p>-->
<!--                </van-row>-->
<!--                <van-row class="choose_box_list" @click="choose(3)">-->
<!--                    <p class="choose_box_text " :class="type == 3 ? 'blue' : '' ">贷款审批</p>-->
<!--                </van-row>-->
            </div>

        </div>
        <!--头部导航-->
        <van-nav-bar :title="title" >

        </van-nav-bar>
        <span class="righttop_text" @click="openOverlay">{{right_text}}</span>
        <img src="../../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
        <div class="content">
            <img src="../../../assets/images/24/Pulldownselect@2x.png" class="img_is_open" v-show="!is_open" @click="openOverlay">
            <img src="../../../assets/images/24/Pullupselect@12x.png" class="img_is_open" v-show="is_open" @click="openOverlay">
            <div class="card_div" v-show="type==0|type==1">
                <van-row style="padding: 4px 12px 0">
                    <van-col class="icon_box" span="2"><img src="../../../assets/images/38/Companyname@2x.png" class="img_location" ></van-col>
                    <van-col class="" span="18"><p class="card_list2_test" >广州市睿智防水电器股份有限公司</p></van-col>
                </van-row>
                <van-row style="padding: 4px 12px 0">
                    <van-col class="" span="8"><p class="card_list1_test_left" >企业主</p></van-col>
                    <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >艾仲华</p></van-col>
                </van-row>
                <van-row style="padding: 4px 12px 0">
                    <van-col class="" span="8"><p class="card_list1_test_left" >申贷序列号</p></van-col>
                    <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >1237892584697</p></van-col>
                </van-row>
                <van-row style="padding: 4px 12px 0">
                    <van-col class="" span="8"><p class="card_list1_test_left" >产品代码</p></van-col>
                    <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >9613</p></van-col>
                </van-row>
                <van-row style="padding: 4px 12px 0">
                    <van-col class="" span="8"><p class="card_list1_test_left" >贷款状态</p></van-col>
                    <van-col class="" span="6" style="text-align: left"><p class="card_list1_test_right blue" >录入复核</p></van-col>
                    <van-col class="" span="4"><p class="card_list1_test_small" >申贷时间</p></van-col>
                    <van-col class="" span="6" style="text-align: left"><p class="card_list1_test_small" >2019/08/15</p></van-col>
                </van-row>
                <div style="height: 6px"></div>
            </div>
            <div class="card_div" v-show="type==0|type==2">
                <van-row style="padding: 4px 12px 0">
                    <van-col class="icon_box" span="2"><img src="../../../assets/images/38/Companyname@2x.png" class="img_location" ></van-col>
                    <van-col class="" span="18"><p class="card_list2_test" >北京京东金融有限公司</p></van-col>
                </van-row>
                <van-row style="padding: 4px 12px 0">
                    <van-col class="" span="8"><p class="card_list1_test_left" >企业主</p></van-col>
                    <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >张三</p></van-col>
                </van-row>
                <van-row style="padding: 4px 12px 0">
                    <van-col class="" span="8"><p class="card_list1_test_left" >申贷序列号</p></van-col>
                    <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >1237892584697</p></van-col>
                </van-row>
                <van-row style="padding: 4px 12px 0">
                    <van-col class="" span="8"><p class="card_list1_test_left" >产品代码</p></van-col>
                    <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >9613</p></van-col>
                </van-row>
                <van-row style="padding: 4px 12px 0">
                    <van-col class="" span="8"><p class="card_list1_test_left" >贷款状态</p></van-col>
                    <van-col class="" span="6" style="text-align: left"><p class="card_list1_test_right blue" >合规审查</p></van-col>
                    <van-col class="" span="4"><p class="card_list1_test_small" >申贷时间</p></van-col>
                    <van-col class="" span="6" style="text-align: left"><p class="card_list1_test_small" >2019/08/15</p></van-col>
                </van-row>
                <div style="height: 6px"></div>
                <van-row style="text-align: center;padding: 8px 12px 8PX;border-top: #dddddd 1px solid" type="flex" justify="center" @click="go('applyQueryResult')">
                    <van-col class="icon_box" span=""><img src="../../../assets/images/38/View@2x.png" class="img_location" ></van-col>
                    <van-col class="" span=""><p class="card_list2_test" style="padding-left: 8px;;font-weight: normal;color: #4c62e7">查看不通过原因</p></van-col>
                </van-row>
                <img src="../../../assets/images/other/Label9@2x.png" class="img_ispass" >
            </div>
            <!-- <div class="card_div" v-show="type==0|type==3">
                <van-row style="padding: 4px 12px 0">
                    <van-col class="icon_box" span="2"><img src="../../../assets/images/38/Companyname@2x.png" class="img_location" ></van-col>
                    <van-col class="" span="18"><p class="card_list2_test" >北京京东金融有限公司</p></van-col>
                </van-row>
                <van-row style="padding: 4px 12px 0">
                    <van-col class="" span="8"><p class="card_list1_test_left" >企业主</p></van-col>
                    <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >张三</p></van-col>
                </van-row>
                <van-row style="padding: 4px 12px 0">
                    <van-col class="" span="8"><p class="card_list1_test_left" >申贷序列号</p></van-col>
                    <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >1237892584697</p></van-col>
                </van-row>
                <van-row style="padding: 4px 12px 0">
                    <van-col class="" span="8"><p class="card_list1_test_left" >产品代码</p></van-col>
                    <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >9613</p></van-col>
                </van-row>
                <van-row style="padding: 4px 12px 0">
                    <van-col class="" span="8"><p class="card_list1_test_left" >贷款状态</p></van-col>
                    <van-col class="" span="6" style="text-align: left"><p class="card_list1_test_right blue" >贷款审批</p></van-col>
                    <van-col class="" span="4"><p class="card_list1_test_small" >申贷时间</p></van-col>
                    <van-col class="" span="6" style="text-align: left"><p class="card_list1_test_small" >2019/08/15</p></van-col>
                </van-row>
                <img src="../../../assets/images/other/Label8@2x.png" class="img_ispass" >
            </div> -->

            <div style="height: 8px"></div>

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
                title : '申贷查询',
                right_text:'贷款状态',
                open:true,
                is_open:false,
                type:0,
                active:0,
                tab2:'已校验',
                list:['全部','录入复核','合规审查','贷款审批','业务受理','信息录入','信息调查', '合规审核','贷款定价','合同签约','抵押登记','贷款放行',
'贷款放款','额度上传','贷款开户','贷款销户','贷款拒绝','申请终止', '贷款结清'
                ],
            }
        },


        //数据预加载
        created : ()=>{
        },

        //网页加载完成
        mounted : ()=>{

        },

        //声明方法
        methods : {
            onClickLeft() {
                this.$router.go(-1);
            },
            go : function(url){
                this.$router.push({name: url})
            },
            openOverlay  (){
                this.is_open = !this.is_open;
            },

            choose(i) {
                this.type = i;
                if ( i == 0) {
                    this.right_text = '贷款状态 ';
                } else {
                    this.right_text = this.list[i];
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
    .popContainer{
        position: fixed;
        top: 46px;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.3);
        z-index: 100;
    }
    .img_ispass{
        width: 68px;
        height: 68px;
        position: absolute;
        right: 20px;
        top: 12px;
    }
    .choose_box{
        float: right;
        background-color: white;
        width: 25%;
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
        font-weight: bold;
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
    .main_box{
        background-color: rgb(238,238,238);
    }
    // scoped 表示私有样式
    .content{
        padding: 0px ;
        justify-content: center;
        align-items: center;
    }
    .righttop_text{
        color: #4c62e7;
        font-size: 14px;
        position: absolute;
        right: 34px;
        top:13px;
        z-index: 100;
    }
    .card_list1_test_left{
        color: #999999;
        font-size: 14px;
        margin-block-start:0;
        margin-block-end:0;
        line-height: 30px;
        padding-left: 28px;
    }
    .card_list1_test_small{
        color: #999999;
        font-size: 10px;
        margin-block-start:0;
        margin-block-end:0;
        line-height: 30px;
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
        font-weight: bold;
        color: #333333;
        font-size: 14px;
        margin-block-start:0;
        margin-block-end:0;
        line-height: 30px;
    }
    .blue{
        color: #4c62e7;
    }
    .img_location{
        height: 18px;
        width: 18px;
    }
    .img_is_open{
        height: 18px;
        width: 18px;
        position: absolute;
        right: 14px;
        top:14px;
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
