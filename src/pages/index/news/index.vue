<template>
    <div class="main">

        <!--头部导航-->
        <van-nav-bar :title="title" :right-text="right_text" @click-right="batch_deletion">

        </van-nav-bar>
        <img src="../../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
        <div class="main" style="height: 100%">

            <div class="content" >
                <van-tabs v-model="activeName" @click="onClick" line-width=25% line-height=3 color="#4c62e7" title-active-color="#4c62e7" style="margin-bottom: 0px;padding-bottom: 0">
                    <van-tab title="贷款" name="贷款">

                        <div class="list_div ">
                            <van-row class="list_box" type="flex" justify="center" style="position: relative" v-for="(item,i) in list">
                                <van-col  class="" span="2" v-show="delete_status==!item.checkbox_status"><van-checkbox class="check_box" checked-color="#4c62e7" v-model="item.result"></van-checkbox></van-col>
                                <van-col  class="" span="2" v-show="delete_status==item.checkbox_status"> <div v-show="!item.read" class="read_status_div"></div></van-col>
                                <van-col  class="" span="17" >
                                    <p class="list_text2" :class="item.read?'gray_text':''">{{item.text1}}<span>{{item.text2}}</span>{{item.text3}}</p>
                                </van-col>
                                <van-col  class="" span="5"  style="text-align: right;"><p class="list_text_time gray_text">{{item.text4}}</p></van-col>
                            </van-row>
                        </div>
                        <div class="popContainer" v-show="delete_status==true">
                            <van-row class="botton_box" type="flex" justify="center" style="">
                                <van-col  class="" span="2" @click="all_choose"><van-checkbox class="check_box" checked-color="#4c62e7" v-model="result"></van-checkbox></van-col>
                                <van-col  class="" span="15" >
                                    <p class="list_text2 all_choose_text"  >全选</p>
                                </van-col>
                                <van-col  class="blue_bg_box" span="7" style="text-align: center" @click="delete_msg"><p class="list_text_delete">删除</p></van-col>
                            </van-row>
                        </div>
                    </van-tab>
                    <van-tab title="商机" name="商机" >
                        <div class="content">
                            <div class="card_div" style="" >
                                <van-col  span="16"  class="shangji_card" style="width: 70%">
                                    <p class="card_list1_test_left" style="">您名下客户<span>进入抢单池</span> </p>
                                </van-col>
                                <van-col class="view_box_left" span="5"  style="width: 10%;left:73%;;border-left: #dddddd 1px solid" >
                                    <img src="../../../assets/images/38/View@2x.png" class="img_view"  >
                                </van-col>
                                <van-col class="view_box_right"  span="3" style="text-align: left;width: 28%;left:83%;height: 18%" @click="go('grabMessage')">
                                    <p class="card_list1_test_right" style="font-weight: bold;font-size: 14px">查看</p>
                                </van-col>
                                <div style="height: 15px" ></div>

                            </div>
                            <div class="card_div" style="" >
                                <van-col  span="16"  class="shangji_card" style="width: 70%">
                                    <p class="card_list1_test_left" style="">已抢单客户<span>状态发生变化    </span> </p>
                                </van-col>
                                <van-col class="view_box_left" span="5"  style="width: 10%;left:73%;;border-left: #dddddd 1px solid" >
                                    <img src="../../../assets/images/38/View@2x.png" class="img_view"  >
                                </van-col>
                                <van-col class="view_box_right"  span="3" style="text-align: left;width: 28%;left:83%;height: 18%" @click="go('statusMessage')">
                                    <p class="card_list1_test_right" style="font-weight: bold;font-size: 14px">查看</p>
                                </van-col>
                                <div style="height: 15px" ></div>
                            </div>
                            <div class="card_div" style="" >
                                    <van-col  span="16"  class="shangji_card" style="width: 70%">
                                        <p class="card_list1_test_left" style="">您已抢单客户尚未转化成功 即将 <span>退回</span>商机池 </p>
                                    </van-col>
                                    <van-col class="view_box_left" span="5"  style="width: 10%;left:73%;;border-left: #dddddd 1px solid" >
                                        <img src="../../../assets/images/38/View@2x.png" class="img_view"  >
                                    </van-col>
                                    <van-col class="view_box_right"  span="3" style="text-align: left;width: 28%;left:83%;height: 18%" @click="go('noSuccessMessage')">
                                        <p class="card_list1_test_right" style="font-weight: bold;font-size: 14px">查看</p>
                                    </van-col>
                                <div style="height: 15px" ></div>

                            </div>
                            <div class="card_div" style="" >
                                <van-col  span="16"  class="shangji_card" style="width: 70%">
                                    <p class="card_list1_test_left" style="">您管户权及业务权客户签约  <span>尚未支用</span> </p>
                                </van-col>
                                <van-col class="view_box_left" span="5"  style="width: 10%;left:73%;;border-left: #dddddd 1px solid" >
                                    <img src="../../../assets/images/38/View@2x.png" class="img_view"  >
                                </van-col>
                                <van-col class="view_box_right"  span="3" style="text-align: left;width: 28%;left:83%;height: 18%" @click="go('unspentLoansMessage')">
                                    <p class="card_list1_test_right" style="font-weight: bold;font-size: 14px">查看</p>
                                </van-col>
                                <div style="height: 15px" ></div>

                            </div>
                            <div class="card_div" style="" >
                                <van-col  span="16"  class="shangji_card" style="width: 70%">
                                    <p class="card_list1_test_left" style="">惠懂你  <span>预约开户</span> 商机</p>
                                </van-col>
                                <van-col class="view_box_left" span="5"  style="width: 10%;left:73%;;border-left: #dddddd 1px solid" >
                                    <img src="../../../assets/images/38/View@2x.png" class="img_view"  >
                                </van-col>
                                <van-col class="view_box_right"  span="3" style="text-align: left;width: 28%;left:83%;height: 18%" @click="go('accountMessage')">
                                    <p class="card_list1_test_right" style="font-weight: bold;font-size: 14px">查看</p>
                                </van-col>
                                <div style="height: 15px" ></div>

                            </div>
                            <div class="card_div" style="" >
                                <van-col  span="16"  class="shangji_card" style="width: 70%">
                                    <p class="card_list1_test_left" style="">未审核<span>业绩通报</span> </p>
                                </van-col>
                                <van-col class="view_box_left" span="5"  style="width: 10%;left:73%;;border-left: #dddddd 1px solid" >
                                    <img src="../../../assets/images/38/View@2x.png" class="img_view"  >
                                </van-col>
                                <van-col class="view_box_right"  span="3" style="text-align: left;width: 28%;left:83%;height: 18%">
                                    <p class="card_list1_test_right" style="font-weight: bold;font-size: 14px">查看</p>
                                </van-col>
                                <div style="height: 15px" ></div>
                            </div>
                            <div style="height: 15px"></div>

                        </div>
                    </van-tab>
                    <van-tab title="活动"  name="活动">
                        <div class="list_div ">
                            <van-row class="list_box" type="flex" justify="center" style="position: relative" v-for="(item,i) in list2">
                                <van-col  class="" span="2" v-show="delete_status==!item.checkbox_status"><van-checkbox class="check_box" checked-color="#4c62e7" v-model="item.result"></van-checkbox></van-col>
                                <van-col  class="" span="2" v-show="delete_status==item.checkbox_status"> <div v-show="!item.read" class="read_status_div"></div></van-col>
                                <van-col  class="" span="17" >
                                    <p class="list_text2" :class="item.read?'gray_text':''">{{item.text1}}<span>{{item.text2}}</span>{{item.text3}}<span>{{item.text5}}</span>{{item.text6}}</p>
                                </van-col>
                                <van-col  class="" span="5"  style="text-align: right;"><p class="list_text_time gray_text">{{item.text4}}</p></van-col>
                            </van-row>
                        </div>
                        <div class="popContainer" v-show="delete_status==true">
                            <van-row class="botton_box" type="flex" justify="center" style="">
                                <van-col  class="" span="2" @click="all_choose(2)"><van-checkbox class="check_box" checked-color="#4c62e7" v-model="result"></van-checkbox></van-col>
                                <van-col  class="" span="15" >
                                    <p class="list_text2 all_choose_text" >全选</p>
                                </van-col>
                                <van-col  class="blue_bg_box" span="7" style="text-align: center" @click="delete_msg(2)"><p class="list_text_delete">删除</p></van-col>
                            </van-row>
                        </div>
                    </van-tab>
                    <van-tab title="系统"  name="系统">

                    </van-tab>

                </van-tabs>

            </div>
        </div>
    </div>
</template>

<script>

    //引入组件首字母大写
    import TabBar from '@/components/tabBar'
    // import NavBar from '@/components/tabBar'
    import Vue from 'vue';
    import { Tab, Tabs } from 'vant';
    import { Row, Col } from 'vant';
    import { Checkbox, CheckboxGroup } from 'vant';
    import { Cell, CellGroup } from 'vant';

    Vue.use(Cell).use(CellGroup);
    Vue.use(Checkbox).use(CheckboxGroup);
    Vue.use(Row).use(Col);
    Vue.use(Tab).use(Tabs);
    export default {
        toggle(index) {
            this.$refs.checkboxes[index].toggle();
        },
        //基础数据存放处
        data (){
            return {
                result:false,
                right_text:'批量删除',
                title : '消息提醒',
                activeName: '贷款',
                delete_status:false,
                step:false,
                decrease_img: require('@/assets/image/my/decrease.png'),
                pull_down: require('@/assets/image/my/Pull down 4@2x.png'),
                chart: require('@/assets/images/activity/chart.png'),
                Pullup: require('@/assets/images/38/Pullup.png'),
                medal: require('@/assets/image/my/medal.png'),
                list:[
                    {checkbox_status:false,delete_status:false,result:0,read:false,text1:'信息采集不完整请及时',text2:'补录',text3:'，系统将在30天后自动清除',text4:'18:14',},
                    {checkbox_status:false,delete_status:false,result:0,read:false,text1:'信息采集成功，请及时开始',text2:'征信校验',text3:' ',text4:'昨天',},
                    {checkbox_status:false,delete_status:false,result:0,read:false,text1:'客户赵仁儿，应于2019年8月29日归还贷款本息200，000元.',text2:'',text3:' ',text4:'昨天',},
                    {checkbox_status:false,delete_status:false,result:0,read:true,text1:'客户广州可可里服装有限公司，应于2019年8月29日货款到期，请及时开始续货流程',text2:'',text3:'',text4:'2018/08/20',},
                    {checkbox_status:false,delete_status:false,result:0,read:true,text1:'信息采集成功，请及时开始征信校验',text2:'',text3:'',text4:'2018/08/20',},
                    {checkbox_status:false,delete_status:false,result:0,read:false,text1:'客户白马服装有限公司，应于2019年8月29日货款到期，请及时开始续贷流程',text2:'',text3:'',text4:'2018/08/20',},
                ],
                list2:[
                    {checkbox_status:false,delete_status:false,result:0,read:false,text1:'xxx活动将于',text2:'2019年8月12日',text3:'开始，请提前做好准备',text4:'13:36',text5:'',text6:'',},
                    {checkbox_status:false,delete_status:false,result:0,read:false,text1:'您创建的XXX活动已经',text2:'审批通过',text3:'',text4:'2018/08/21',text5:'',text6:'',},
                    {checkbox_status:false,delete_status:false,result:0,read:false,text1:'xXx活动',text2:'中止申请已审通过',text3:'，请至员工渠道PC端查看详情',text4:'2018/08/21',text5:'未通过',text6:'',},
                    {checkbox_status:false,delete_status:false,result:0,read:false,text1:'您创建的',text2:'xXX活动',text3:'审批',text4:'2018/08/21',text5:'',text6:'',},
                    {checkbox_status:false,delete_status:false,result:0,read:false,text1:'信息采集成功，请及时开始',text2:'征信校验',text3:'',text4:'2018/08/21',text5:'',text6:'',},
                    {checkbox_status:false,delete_status:false,result:0,read:true,text1:'XxXX活动将于2019年8月9日开始，请提前做好准备',text2:'',text3:'',text4:'2018/08/21',text5:'',text6:'',},
                    {checkbox_status:false,delete_status:false,result:0,read:false,text1:'XXx活动已于2019年8月1日结束，请提前做好准备',text2:'',text3:'',text4:'2018/08/21',text5:'',text6:'',},
                ],
            }
        },

        //数据预加载
        created : function(){

        },

        //网页加载完成
        mounted () {
            this.activeName = sessionStorage.getItem("activeName");
            this.right_text = sessionStorage.getItem("right_text");
        },

        //声明方法
        methods : {
            onClickLeft() {
                this.$router.go(-1);
                sessionStorage.setItem("activeName", '贷款');
            },
            batch_deletion() {
                if (this.right_text == '') {
                    return
                }
                this.delete_status = !this.delete_status;
                 if (this.delete_status) {
                     this.right_text = '取消删除'
                 } else {
                     this.right_text = '批量删除'
                 }
            },
            go : function(url){
                this.$router.push({name: url})
            },
            onCilckFlex () {
                this.step=!this.step
            },
            onClick(name) {
                sessionStorage.setItem("activeName", name);
                this.activeName = name;
                if (name=="商机" | name=="系统") {
                    sessionStorage.setItem("right_text", '');
                    this.right_text = ''
                } else {
                    sessionStorage.setItem("right_text", '批量删除');
                    this.right_text = '批量删除'
                }
            },
            all_choose(i) {
                var self = this;
                if (i==2) {
                    if (this.result == false) {
                        for (var i=0;i<self.list2.length;i++) {
                            self.list2[i].result = true;
                        }
                    } else {
                        for (var i=0;i<self.list2.length;i++) {
                            self.list2[i].result = false;
                        }
                    }
                } else {
                    if (this.result == false) {
                        for (var i=0;i<self.list.length;i++) {
                            self.list[i].result = true;
                        }
                    } else {
                        for (var i=0;i<self.list.length;i++) {
                            self.list[i].result = false;
                        }
                    }
                }

            },
            delete_msg(i) {
                var self = this;
                if (i==2) {
                    for (var  i=self.list2.length-1;i>=0;i--) {
                        if(self.list2[i].result == true) {
                            self.list2.splice(i,1);
                        }
                    }
                } else {
                    for (var  i=self.list.length-1;i>=0;i--) {
                        if(self.list[i].result == true) {
                            self.list.splice(i,1);
                        }
                    }
                }

                this.delete_status = !this.delete_status;
            }


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
    .view_box_left{
        position: absolute;
        right: 100px;
        height: 26px;
        text-align: right;
        border-left: #dddddd 1px solid;

        margin: 24px 0;
    }
    .view_box_right{
        position: absolute;
        right: 24px;
        height: 64px;
        margin: 25px 4px;
    }
    .card_list1_test_left{
        color: #333333;
        font-size: 15px;
        margin-block-start:0;
        margin-block-end:0;
        line-height: 30px;
    }
    .card_list1_test_left>span{
        color: #4c62e7;
        font-size: 15px;
        margin-block-start:0;
        margin-block-end:0;
        line-height: 30px;
    }
    .card_list1_test_right{
        color: #4c62e7;
        font-size: 12px;
        margin-block-start:0;
        margin-block-end:0;
        line-height: 30px;
    }
    .popContainer{
        border-top: #dddddd 1px solid;
        height: 80px;
        width: 100%;
        position: fixed;
        bottom: 0;
        background-color: rgba(255,255,255,0.8);
        z-index: 100;
    }
    .delete_box{
        background-color: #4c62e7;
        height: 20px;
        width:80px ;
        border-radius: 20px;
    }
    .main{
        width:100%;
        height: 100%;
        background-color: rgb(238,238,238);
    };
    .img{
        height: 19px;
        width:19px;
        position: absolute;
        bottom: 0;
    };
    .img_medal{
        height: 28px;
        width:28px;
    };
    .felx_img{
        height: 19px;
        width:19px;
        position: absolute;
        bottom: 0;
        left: 48%;
    };
    success_img_box{
        position: relative;
    };
    success_img{
        height: 110px;
        width:110px;
        background-color: brown;
        position: absolute;
        top: -20px;
        right: 0;
    };
    .img_frame{
        height: 80px;
        width:80px;
        position: absolute;
        top: 35px;
        left: 25px;
        z-index: 3;
    };
    .img_frame_head{
        height: 62px;
        width:62px;
        position: absolute;
        top: 42px;
        left: 33px;
        z-index: 2;
    };
    .img_frame_min{
        height: 52px;
        width:52px;
        position: absolute;
        top: 6px;
        left: 25px;
        z-index: 3;
    };
    .img_frame_head_min{
        height: 40px;
        width:40px;
        position: absolute;
        top: 11px;
        left: 31px;
        z-index: 2;
    };
    .img_navigation{
        height: 12px;
        width:12px;
        position: absolute;
        left: 0px;
        top:24px;
    };
    .content{
        padding-top: 0;
        background-color: rgb(238,238,238);
    };

    .business_box{
        height:143px;
        width:96%;
        margin-left: 2%;
        margin-right: 2%;
        margin-top: 8px;
        background-color: rgb(255,255,255);
        padding: 0;
        border-radius: 8px;
    };
    .manager_box{
        width:100%;
        margin-top: 8px;
        background-color: rgb(255,255,255);
    };
    manager_box1{
        height:143px;
        width:100%;
        margin-top: 8px;
        padding-left: 11px;
        padding-top: 11px;
        background-color: rgb(255,0,0);
        padding: 0;
    };
    .business_box_3{
        height:143px;
        width:96%;
        margin-left: 2%;
        margin-right: 2%;
        margin-top: 8px;
        background-color: rgb(255,255,255);
        padding: 0;
        border-radius: 8px;
        position: relative;
    };
    .business_box1{
        border-radius: 8px;
        padding: 0;
    };
    .business_box2{
        margin: 0;
        padding: 0;
    };
    .business_box3{
        height: 43px;
        margin: 0;
        padding: 0;
        position: relative;
    };
    .business_box4{
        height: 48px;
        margin: 0;
        padding: 0;
        position: relative;
    };
    .business_text{
        font-family: "Plantagenet Cherokee";
        padding-left:14px ;
        padding-top: 14px;
        font-size:16px;
        font-weight: bold;
        color:rgb(51,51,51);
        margin-block-start:0;
        margin-block-end:0;
    };
    .business_text_flex{
        font-family: "Plantagenet Cherokee";
        padding-left:14px ;
        padding-top: 14px;
        font-size:16px;
        font-weight: bold;
        color:rgb(51,51,51);
        margin-block-start:0;
        margin-block-end:0;
    };
    .card_div{
        height: 75px;
        position: relative;
        width: auto;
        padding:0px;
        background-color: white;
        border-radius: 10px;
        margin: 8px 10px 0;
    }
    .content{
        padding: 0px ;
        background-color: rgb(238,238,238);
        justify-content: center;
        align-items: center;
    }
    .read_status_div{
        height: 10px;
        width: 10px;
        border-radius: 10px;
        background-color: #f76037;
        margin: 27px auto;
    }
    .max_num{
        font-size:42px;
        font-family: "Palatino Linotype";
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 50px;
    };
    .business_text2{
        font-size:14px;
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 46px;
        margin-top: 6px;
    };
    .business_text3{
        float: left;
        font-size:14px;
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 46px;
        position: absolute;
        left: -20px;
        bottom: 0;
        color: rgb(153,153,153);
    };
    .img_return{
        position: absolute;
        top: 14px;
        left:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;
    }
    .img_view{
        height: 18px;
        width: 18px;
        margin: 6px auto;
        position: relative;
        right: 4px;
    }
    .business_text_success{
        float: left;
        font-size:12px;
        margin-block-start:0;
        margin-block-end:0;
        position: absolute;
        left: 14px;
        top: 22px;
        color: rgb(102,102,102);
    };
    .tab3_div1_text1{
        font-weight: bold;
        font-size:18px;
        line-height: 18px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(51,51,51);
    };
    .tab3_div1_box2{
        justify-content: center;
        align-items: center;
        position: relative;
        height: 115px;
        background-color: aqua;
    };
    .tab3_div1_text2{
        font-size:14px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(102,102,102);
    };
    .tab3_div1_text5{
        font-size:15px;
        text-align: right;
        line-height: 24px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(102,102,102);
    };
    .tab3_div1_text3{
        font-size:42px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(76,98,231);
        padding-left:10px ;
        padding-right: 10px;
    };
    .business_flexbox_text{
        float: left;
        font-size:14px;
        line-height: 28px;
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 14px;
        color: rgb(51,51,51);
    };
    .shangji_card{
        position: absolute;
        top: 50%;
        left:3%;
        transform: translateY(-50%);
        width: 94%;
        padding: 23px 12px
    }
    .business_flexbox_text2{
        float: left;
        font-size:14px;
        line-height: 28px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(153,153,153);
    };
    .business_text_percent{
        float: left;
        font-size:24px;
        margin-block-start:0;
        margin-block-end:0;
        position: absolute;
        bottom: 0px;
        padding-left: 10px;
        color: rgb(51,51,51);
    };
    .list_div{
        margin-top: 8px;
        background-color: #FFFFFF;
        padding: 0 12px;
    };
    .list_box{
        border-bottom: #dddddd solid 1px;

    };
    .botton_box{
        height: 64px;
        justify-content: center;
        vertical-align: center;
        padding: auto;
        position: relative;
        position: relative;
        margin: 9px 12px
    }
    .blue_bg_box{
        margin: 17px auto;
        height: 30px;
        width: 100px;
        background-color: #4c62e7;
        border-radius: 24px;
        margin-right: 12px;
    }
    .list_text_delete{
        font-size: 14px;
        line-height: 30px;
        color: #ffffff;
        margin-block-start: 0;
        margin-block-end: 0;
    }
    .check_box{
        margin: 22px auto;
        justify-content: center;
        vertical-align : middle;
    }
    .list_text1{
        font-size: 15px;
        line-height: 32px;
    };
    .list_text2{
        font-size: 13px;
        line-height: 32px;
        color: rgb(51,51,51);
        margin-block-start: 0;
        margin-block-end: 0;
        position: absolute;
        top: 50%;
        left:10%;
        transform: translateY(-50%);
        width: 70%;
        /*display: inline-block;*/
    };
    .gray_text{
        color: #999999;
    }

    .list_text2>span{
        font-size: 13px;
        line-height: 32px;
        color: #4c62e7;
        margin-block-start: 0;
        margin-block-end: 0;
    };
    .list_text_time{
        line-height: 32px;
        font-size: 10px;
        margin-block-start: 0;
        margin-block-end: 0;
        margin: 16px auto;
    };
    .list_text4{
        font-weight: bold;
        line-height: 32px;
        font-size: 15px;
        color: rgb(76,98,231)
    };
    .text-align_right{
        text-align: right;
    };
    .gray_text>span{
        color: #999999;
    }
    .all_choose_text{
        font-size: 16px;
        width: 50%;
    }





</style>
