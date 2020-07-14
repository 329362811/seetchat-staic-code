<template>
    <div class="main_box">

        <!--头部导航-->
        <van-nav-bar :title="title" >
        </van-nav-bar>
        <img src="../../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
        <img src="../../../assets/images/38/searchfor@2x.png" class="img_search" v-show="!delete_status" @click="go('searchInfo')">
        <span class="more_choose" @click="batch_choose"  v-show="active!==3">{{right_text}}</span>
        <span class="more_choose_gray" v-show="active==3">{{right_text}}</span>
        <div class="content">
            <van-tabs color="#4c62e7" @click="onTabClick" v-model="active" line-width="25%" line-height=3 style="position: relative" title-active-color="#4c62e7">
                <van-tab title="接单" color="#4c62e7">
                    <van-row  class="width_max">
                        <van-swipe-cell :right-width="right_width" class="swipe-cell" v-for="(item ,i) in list" >
                            <van-col  class=" checkbox_and_card_div" >
                                <div class="check_box">
                                    <van-checkbox v-show="delete_status"  class="radio" checked-color="#4c62e7" v-model="item.radio1"></van-checkbox>
                                </div>
                                <div class="card_div" >
                                    <van-row style="padding: 4px 12px 0">
                                        <van-col class="icon_box" span="2"><img src="../../../assets/images/38/Pawn@2x.png" class="img_location" ></van-col>
                                        <van-col class="" span="22"><p class="card_list2_test" >抵押物：{{item.name}}</p></van-col>
                                    </van-row>
                                    <van-row style="padding: 4px 12px 0">
                                        <van-col class="" span="8"><p class="card_list1_test_left" >企业主</p></van-col>
                                        <van-col class="" span="16" style="text-align: left"><p class="card_list1_test_right" >{{item.nameValue}}</p></van-col>
                                    </van-row>
                                    <van-row style="padding: 4px 12px 0">
                                        <van-col class="" span="8"><p class="card_list1_test_left" >房产证号</p></van-col>
                                        <van-col class="" span="16" style="text-align: left"><p class="card_list1_test_right" >9613662222223</p></van-col>
                                    </van-row>
                                    <van-row class="slider_content" >
<!--                                        <vue-slide-bar @change="huaKuaiChange(i)" class="sliderHua" v-model="item.huakuai_value" bar-height="10px" active-color="#ffffff" >-->
<!--                                            <div slot="button" class="custom-button" >-->
<!--                                                {{item.huakuai_title}}-->
<!--                                            </div>-->
<!--                                        </vue-slide-bar>-->
                                        <vue-slide-bar class="sliderHua" v-model="item.huakuai_value" @dragEnd="huaKuaiChange(i)" >
                                            <template slot="tooltip" slot-scope="tooltip">
                                                <div slot="button" class="custom-button">
                                                    {{item.huakuai_title}}
                                                </div>
                                            </template>
                                        </vue-slide-bar>
                                    </van-row>
                                </div>
                            </van-col>
                            <span slot="right" class="van-swipe-cell__right" @click="hulue(i)">忽略</span>
                        </van-swipe-cell>
                    </van-row>
                    <div class="null_div_8px" ></div>
                </van-tab>
                <van-tab title="待送件" color="#4c62e7">
                    <van-row  class="width_max">
                        <van-col  class=" checkbox_and_card_div"  v-for="(item ,i) in list2">
                            <div class="check_box">
                                <van-checkbox v-show="delete_status"  class="radio" checked-color="#4c62e7" v-model="item.radio2"></van-checkbox>
                            </div>
                            <div class="card_div" >
                                <van-row style="padding: 4px 12px 0">
                                    <van-col class="icon_box" span="2"><img src="../../../assets/images/38/Pawn@2x.png" class="img_location" ></van-col>
                                    <van-col class="" span="22"><p class="card_list2_test" >抵押物： {{item.name}}</p></van-col>
                                </van-row>
                                <van-row style="padding: 4px 12px 0">
                                    <van-col class="" span="12"><p class="card_list1_test_left" >企业主</p></van-col>
                                    <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >{{item.nameValue}}</p></van-col>
                                </van-row>
                                <van-row style="padding: 4px 12px 0">
                                    <van-col class="" span="12"><p class="card_list1_test_left" >房产证号</p></van-col>
                                    <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >9613662222223</p></van-col>
                                </van-row>
                                <div class="slider_content" >
<!--                                    <vue-slide @change="huaKuaiChange(i)" class="sliderHua" v-model="item.huakuai_value1" bar-height="10px" active-color="#ffffff" >-->
<!--                                        <div slot="button" class="custom-button" >-->
<!--                                            {{item.confirmSend}}-->
<!--                                        </div>-->
<!--                                    </vue-slide>-->
                                    <vue-slide-bar class="sliderHua" v-model="item.huakuai_value1" @dragEnd="huaKuaiChange(i)">
                                        <template slot="tooltip" slot-scope="tooltip">
                                            <div slot="button" class="custom-button">
                                                {{item.confirmSend}}
                                            </div>
                                        </template>
                                    </vue-slide-bar>
                                </div>
                            </div>
                        </van-col>
                    </van-row>
                    <div class="null_div_8px" ></div>
                </van-tab>
                <van-tab title="待取件" color="#4c62e7">
                    <van-row  class="width_max">
                        <van-col  class=" checkbox_and_card_div"  v-for="(item ,i) in list3">
                            <div class="check_box">
                                <van-checkbox v-show="delete_status"  class="radio" checked-color="#4c62e7" v-model="item.radio3"></van-checkbox>
                            </div>
                            <div class="card_div" >
                                <van-row style="padding: 4px 12px 0">
                                    <van-col class="icon_box" span="2"><img src="../../../assets/images/38/Pawn@2x.png" class="img_location" ></van-col>
                                    <van-col class="" span="22"><p class="card_list2_test" >抵押物： {{item.name}}</p></van-col>
                                </van-row>
                                <van-row style="padding: 4px 12px 0">
                                    <van-col class="" span="12"><p class="card_list1_test_left" >企业主</p></van-col>
                                    <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >张三</p></van-col>
                                </van-row>
                                <van-row style="padding: 4px 12px 0">
                                    <van-col class="" span="12"><p class="card_list1_test_left" >房产证号</p></van-col>
                                    <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >9613662222223</p></van-col>
                                </van-row>
                                <van-row class="slider_content" >
<!--                                    <vue-slide @change="huaKuaiChange(i)" class="sliderHua" v-model="item.huakuai_value2" bar-height="10px" active-color="#ffffff" >-->
<!--                                        <div slot="button" class="custom-button" >-->
<!--                                            {{item.confirmGet}}-->
<!--                                        </div>-->
<!--                                    </vue-slide>-->
                                    <vue-slide-bar class="sliderHua" v-model="item.huakuai_value2" @dragEnd="huaKuaiChange(i)">
                                        <template slot="tooltip" slot-scope="tooltip">
                                            <div slot="button" class="custom-button">
                                                {{item.confirmGet}}
                                            </div>
                                        </template>
                                    </vue-slide-bar>
                                </van-row>
                            </div>
                        </van-col>
                    </van-row>
                    <div class="null_div_8px" ></div>
                </van-tab>
                <van-tab title="已完成" color="#4c62e7">
                    <van-row class="width_max">
                        <van-col  class=" checkbox_and_card_div"  style="" >
                            <div class="check_box">
                                <div class="check_box_inline">
                                    <van-checkbox v-show="delete_status"   checked-color="#4c62e7" v-model="result"></van-checkbox>
                                </div>
                            </div>
                            <div class="card_div" >
                                <van-row style="padding: 4px 12px 0">
                                    <van-col class="icon_box" span="2"><img src="../../../assets/images/38/Pawn@2x.png" class="img_location" ></van-col>
                                    <van-col class="" span="22"><p class="card_list2_test" >抵押物：北京市丰台区南三环西路10号马家
                                        堡西里</p></van-col>
                                </van-row>
                                <van-row style="padding: 4px 12px 0">
                                    <van-col class="" span="12"><p class="card_list1_test_left" >企业主</p></van-col>
                                    <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >张三</p></van-col>
                                </van-row>
                                <van-row style="padding: 4px 12px 0">
                                    <van-col class="" span="12"><p class="card_list1_test_left" >房产证号</p></van-col>
                                    <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >9613662222223</p></van-col>
                                </van-row>
                            </div>
                        </van-col>
                        <van-col  class=" checkbox_and_card_div"  style="">
                            <div class="check_box">
                                <van-checkbox v-show="delete_status"   checked-color="#4c62e7" v-model="result"></van-checkbox>
                            </div>
                            <div class="card_div" >
                                <van-row style="padding: 4px 12px 0">
                                    <van-col class="icon_box" span="2"><img src="../../../assets/images/38/Pawn@2x.png" class="img_location" ></van-col>
                                    <van-col class="" span="22"><p class="card_list2_test" >抵押物：北京市朝阳区三里屯马家大院</p></van-col>
                                </van-row>
                                <van-row style="padding: 4px 12px 0">
                                    <van-col class="" span="12"><p class="card_list1_test_left" >企业主</p></van-col>
                                    <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >张三</p></van-col>
                                </van-row>
                                <van-row style="padding: 4px 12px 0">
                                    <van-col class="" span="12"><p class="card_list1_test_left" >房产证号</p></van-col>
                                    <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >9613662222223</p></van-col>
                                </van-row>
                            </div>
                        </van-col>
                        <van-col  class=" checkbox_and_card_div"  v-for="(item ,i) in list4">
                            <div class="check_box">
                                <van-checkbox v-show="delete_status"  class="radio" checked-color="#4c62e7" v-model="item.radio3"></van-checkbox>
                            </div>
                            <div class="card_div" >
                                <van-row style="padding: 4px 12px 0">
                                    <van-col class="icon_box" span="2"><img src="../../../assets/images/38/Pawn@2x.png" class="img_location" ></van-col>
                                    <van-col class="" span="22"><p class="card_list2_test" >抵押物： {{item.name}}</p></van-col>
                                </van-row>
                                <van-row style="padding: 4px 12px 0">
                                    <van-col class="" span="12"><p class="card_list1_test_left" >企业主</p></van-col>
                                    <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >张三</p></van-col>
                                </van-row>
                                <van-row style="padding: 4px 12px 0">
                                    <van-col class="" span="12"><p class="card_list1_test_left" >房产证号</p></van-col>
                                    <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" >9613662222223</p></van-col>
                                </van-row>
                            </div>
                        </van-col>
                    </van-row>
                    <div class="null_div_8px" ></div>
                </van-tab>
            </van-tabs>
        </div>
        <div class="popContainer" v-show="delete_status==true">
            <van-row class="botton_box" type="flex" justify="center" style="">
                <van-col  class="" span="2" ><van-checkbox class="all_check_box" @click="allChoose" checked-color="#4c62e7" v-model="result"></van-checkbox></van-col>
                <van-col  class="" span="12" @click="allChoose">
                    <p class="all_text" style="">全选</p>
                </van-col>
                <van-col  class="blue_bg_box" span="5" style=""><p class="list_text_delete" @click="jiedanBtn">{{allChooseTitle}}</p></van-col>
                <van-col  class="orange_bg_box" span="5" v-show="active==0"><p class="list_text_delete" @click="hulueAll">忽略</p></van-col>
            </van-row>
        </div>
    </div>
</template>

<script>

    import NavBar from '@/components/navBar'
    import Vue from 'vue';
    import { Tab, Tabs ,SubmitBar, } from 'vant';
    import { Dialog } from 'vant';
    Vue.use(Tab).use(Tabs).use(SubmitBar);
    export default {

        data() {
            return {
                title : '抵押登记',
                open:true,
                is_open:false,
                type:0,
                active:0,
                tab2:'已校验',
                huaKuai: null,
                huaKuaiName: "滑动接单",
                confirmGet:'确认取件',
                confirmSend:'确认送件',
                right_text:'多选',
                allChooseTitle:'接单',
                delete_status:false,
                right_width:65,
                result:0,
                list:[
                    {nameValue:'艾仲华',name:'广东省广州市天河区花城大道中海花城湾4号楼3门201',huakuai_value:null,huakuai_value1:null,huakuai_value2:null,huakuai_title:'滑动接单',confirmGet:'确认取件',confirmSend:'确认送件',radio3:'',radio1:'',radio2:''},
                    {nameValue:'张三',name:'北京市朝阳区三里屯马家大院',huakuai_value:null,huakuai_value1:null,huakuai_value2:null,huakuai_title:'滑动接单',confirmGet:'确认取件',confirmSend:'确认送件',radio3:'',radio1:'',radio2:''},
                    {nameValue:'张三',name:'北京市丰台区南三环西路10号',huakuai_value:null,huakuai_value1:null,huakuai_value2:null,huakuai_title:'滑动接单',confirmGet:'确认取件',confirmSend:'确认送件',radio3:'',radio1:'',radio2:''},
                    /* {nameValue:'张三',name:'北京市朝阳区三里屯马家大院',huakuai_value:null,huakuai_value1:null,huakuai_value2:null,huakuai_title:'滑动接单',confirmGet:'确认取件',confirmSend:'确认送件',radio3:'',radio1:'',radio2:''}, */
                ],
                list2:[],
                list3:[],
                list4:[],
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
            batch_choose() {
                this.result = 0;
                this.delete_status = !this.delete_status
                if (this.delete_status) {
                    this.right_text = '取消多选';
                    this.right_width = 0;
                } else {
                    this.right_text = '多选'
                    this.right_width = 65;
                };
            },
            go : function(url){
                this.$router.push({name: url})
            },
            openOverlay : function(){
                if(this.active == 1) {
                    this.is_open = !this.is_open;
                }
            },
            allChoose() {
                if (this.result==0) {
                    switch (this.active) {
                        case 0:
                            for (let i=this.list.length-1;i>=0;i--) {
                                this.list[i].radio1 = 1
                            }
                            break;
                        case 1:
                            for (let i=this.list2.length-1;i>=0;i--) {
                                this.list2[i].radio1 = 1
                            }
                            break;
                        case 2:
                            for (let i=this.list3.length-1;i>=0;i--) {
                                this.list3[i].radio1 = 1
                            }
                            break;
                        default:
                            break;
                    }
                } else {
                    switch (this.active) {
                        case 0:
                            for (let i=this.list.length-1;i>=0;i--) {
                                this.list[i].radio1 = 0
                            }
                            break;
                        case 1:
                            for (let i=this.list2.length-1;i>=0;i--) {
                                this.list2[i].radio1 = 0
                            }
                            break;
                        case 2:
                            for (let i=this.list3.length-1;i>=0;i--) {
                                this.list3[i].radio1 = 0
                            }
                            break;
                        default:
                            break;
                    }
                }


            },
            huaKuaiChange(i,valll){
                switch (this.active) {
                    case 0:
                        if(this.list[i].huakuai_value==100){
                            this.list[i].huakuai_title="确认中...";
                            Dialog.alert({
                                title: '',
                                message: '抢单成功'
                            }).then(() => {
                                this.active = 1
                            });
                            this.list2.push(this.list[i]);
                            this.list.splice(i,1);
                        }else{
                            this.list[i].huakuai_title="滑动抢单";
                        }
                        break;
                    case 1:
                        if(this.list2[i].huakuai_value1==100){
                            this.list2[i].confirmSend="确认中...";
                            Dialog.alert({
                                title: '',
                                message: '送件成功'
                            }).then(() => {
                                this.active = 2;
                            });
                            this.list3.push(this.list2[i]);
                            this.list2.splice(i,1);
                        }else{
                            this.list[i].huakuai_title="确认取件";
                        }
                        break;
                    case 2:
                        if(this.list3[i].huakuai_value2==100){
                            this.list3[i].confirmGet="确认中...";
                            Dialog.alert({
                                title: '',
                                message: '取件成功'
                            }).then(() => {
                                this.active = 3;
                            });
                            this.list4.push(this.list3[i]);
                            this.list3.splice(i,1);
                        }else{
                            this.list[i].huakuai_title="确认送件";
                        }
                        break;
                    default:
                            break;

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
                this.delete_status = false ;
                this.right_text = '多选'
                this.right_width = 65;
                this.active = index;
                switch (index) {
                    case 0:
                        this.allChooseTitle = '接单';
                        break;
                    case 1:
                        this.allChooseTitle = '送件';
                        break;
                    case 2:
                        this.allChooseTitle = '取件';
                        break;
                    default:
                        break;
                }
            },
            hulue(i) {
                this.list.splice(i,1);
            },
            hulueAll() {
                if (this.result == 1 ) {
                    this.list=[];
                }
            },
            jiedanBtn() {
                switch (this.active) {
                    case 0:
                        var count = 0;
                        for (let i=this.list.length-1;i>=0;i--) {
                            if (this.list[i].radio1) {
                                this.list2.push(this.list[i]);
                                this.list.splice(i,1);
                                count++;
                            }
                        }
                        if (count>0) {
                            Dialog.alert({
                                title: '',
                                message: '抢单成功'
                            }).then(() => {
                                // on close
                            });
                        }
                        break;
                    case 1:
                        count = 0;
                        for (let i=this.list2.length-1;i>=0;i--) {
                            if (this.list2[i].radio2) {
                                this.list3.push(this.list2[i]);
                                this.list2.splice(i,1);
                                count++;
                            }
                        }
                        if (count>0) {
                            Dialog.alert({
                                title: '',
                                message: '抢单成功'
                            }).then(() => {
                                // on close
                            });
                        }
                        break;
                    case 2:
                        count = 0;
                        for (let i=this.list3.length-1;i>=0;i--) {
                            if (this.list3[i].radio3) {
                                this.list4.push(this.list3[i]);
                                this.list3.splice(i,1);
                                count++;
                            }
                        }
                        if (count>0) {
                            Dialog.alert({
                                title: '',
                                message: '抢单成功'
                            }).then(() => {
                                // on close
                            });
                        }
                        break;
                    default:
                        break;
                }

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
    .all_text{
        font-size: 16px;
        line-height: 64px;
        padding: 0;
        margin: 0;
    }

    .swipe-cell{
        align-items:center;
        justify-content: center;
        position: relative;
    }
    .van-swipe-cell__right {
        display: inline-block;
        top:20px;
        width: 65px;
        height: 130px;
        line-height: 130px;
        margin: auto;
        font-size: 15px;
        color: #fff;
        text-align: center;
        background-color: #f76037;
    }
    .width_max{
        width: 100%;
    }
    .slider_content{
        padding: 0 16%;
        width:65%;
        line-height:40px;
        float: left;
        font-size: 12px;
        color:rgb(102,102,102);
    }
    .botton_box{
        height: 64px;
        justify-content: center;
        vertical-align: center;
        padding: auto;
        position: relative;
        position: relative;
        margin: 9px 12px
    }
    .null_div_8px{
        height: 8px;
      }
    .more_choose{
        position: absolute;
        top: 12px;
        right: 12px;
        color: #4c62e7;
        font-size: 14px;
        z-index: 100;
    }
    .more_choose_gray{
        position: absolute;
        top: 12px;
        right: 12px;
        color: #999999;
        font-size: 14px;
        z-index: 100;
    }

    .custom-button{
        line-height: 26px;
        width: 80px;
        font-size: 13px;
        text-align: center;
        border-radius: 13px;
        background-color: rgb(76,98,232);
        color: white;
        position: relative;
        top: 15px;
    }
    .sliderHua{
        margin:12px auto;
        width:75%;
        padding-top:10px !important;
        /*border: #4c62e7 1px solid;*/
        /*background-color: white;*/
    }

    .list_text_delete{
        font-size: 14px;
        line-height: 30px;
        color: #ffffff;
        margin-block-start: 0;
        margin-block-end: 0;
    }
    .blue_bg_box{
        float: right;
        margin: 17px auto;
        height: 30px;
        width: 100px;
        background-color: #4c62e7;
        border-radius: 24px;
        margin-right: 12px;
        text-align: center
    }
    .orange_bg_box{
        float: right;
        margin: 17px auto;
        height: 30px;
        width: 100px;
        background-color: #f76037;
        border-radius: 24px;
        margin-right: 12px;
        text-align: center
    }
    .checkbox_and_card_div{
        width: 115%;
        float: left;
        display: inline-block;
        justify-content: center;
        display: inline-block;
    }
    .all_check_box{
        position: relative;
        top:22px;
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
        /*justify-content: center;*/
        /*align-items: center;*/
    }
    .radio{
        background-color: white;
        width: 20px;
        border-radius: 20px;
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
        right:50px ;
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
        font-weight: bold;
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
        width: 82%;
        padding:0px;
        background-color: white;
        border-radius: 10px;
        margin: 8px 2.5% 0 ;
        float: left;display: inline-block;
    }
    .check_box{
        width: 10%;
        float: left;
        display: inline-block;
        position: relative;
        left:3.5%;
        top:80px;

    }

    .title {
        margin-left: 12px;
        font-size: 14px;
    }
    .gray{
        color: #999999;
    }
</style>
