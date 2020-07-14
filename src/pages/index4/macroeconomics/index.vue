<template>
    <div class="main_box">
        <!--头部导航-->
        <van-nav-bar :title="title"  class="theme_color" left-arrow   @click-left="onClickLeft"></van-nav-bar>
        <van-row class="location_div" >
            <van-col class="relative" span="1" >
                <img src="../../../assets/images/huidiantong/location@12.jpg" class="img_location"  >
            </van-col>
            <van-col class="text_align_left" span="11" @click="openPicker"><p class="location_div_text" >{{locationTitle}}</p></van-col>
            <van-col class="text_align_right" span="12" ><p class="location_div_text" >数据日期：201903</p></van-col>
        </van-row>
        <img src="../../../assets/images/huidiantong/lianzi.jpg" class="img_lianzi1"  >
        <img src="../../../assets/images/huidiantong/lianzi.jpg" class="img_lianzi2"  >

        <div class="content">
            <div  v-for="(item) in list_">
                <van-row class="" type="flex" justify="space-between">
                    <van-col class="tag_box"  span="12" >
                        <van-row class="top_row" span="12">
                            <van-col class="left_top_col"  ><p class="test_left" >{{item.title1}}</p></van-col>
                            <van-col class="right_top_col" span="8" ><p class="test_right" >单位</p></van-col>
                        </van-row>
                        <div style="height: 4px"></div>
                        <van-row class="top_row" span="12">
                            <van-col class="left_top_col"   ><p class="test_left" >{{item.num1}}</p></van-col>
                            <van-col class="right_botton_col" span="6" ><p class="test_botton_right" >{{item.unit1}}</p></van-col>
                        </van-row>
                    </van-col>
                    <van-col class="tag_box"  span="12" >
                        <van-row class="top_row" span="12">
                            <van-col class="left_top_col"  span="16" ><p class="test_left" >{{item.title2}}</p></van-col>
                            <van-col class="right_top_col" span="8" ><p class="test_right" >单位</p></van-col>
                        </van-row>
                        <div style="height: 4px"></div>
                        <van-row class="top_row" span="12">
                            <van-col class="left_top_col"  span="18" ><p class="test_left" >{{item.num2}}</p></van-col>
                            <van-col class="right_botton_col" span="6" ><p class="test_botton_right" >{{item.unit2}}</p></van-col>
                        </van-row>
                    </van-col>


                </van-row>
                <div style="height: 8px"></div>
            </div>

            <div style="height: 8px"></div>

        </div>
        <van-action-sheet class="select-box" :overlay="false" :round="false" :close-on-click-overlay="false" v-model="listShow" title="请选择省份">
            <van-row class="cell" v-for="(item, index) in columns" @click="select(index)">
                <van-col span="2" class="cell-left"> <div class="point" :class="[active == index? 'active' : '']"></div></van-col>
                <van-col span="20" class="shengfen">{{item}}</van-col>
                <van-col span="2"> </van-col>
            </van-row>
        </van-action-sheet>

    </div>
</template>

<script>

    import NavBar from '@/components/navBar'
    import Vue from 'vue';
    import { Tab, Tabs ,SubmitBar,Picker  } from 'vant';

    Vue.use(Tab).use(Tabs).use(SubmitBar).use(Picker);
    export default {

        data() {
            return {
                active:0,
                listShow: false,
                title : '宏观经济数据',
                pickerShow:false,
                locationTitle:'全国',
                list_:[
                    {title1:'GDP',num1:21342.8,unit1:'亿元', title2:'GDP同比',num2:6.8,unit2:'%'},
                    {title1:'GPI',num1:2.8,unit1:'%', title2:'PPI同比',num2:0.80,unit2:'%'},
                    {title1:'社会融资规模',num1:45444.8,unit1:'亿元', title2:'固定资产投资',num2:0.08,unit2:'%'},
                    {title1:'房地产投资',num1:4536744,unit1:'亿元', title2:'房地产同比',num2:5.8,unit2:'%'},
                    {title1:'财政收入',num1:121.8,unit1:'亿元', title2:'财政收入同比',num2:11.8,unit2:'%'},
                ],
                columns: ['全国','北京市', '天津市', '上海市', '重庆市', '河北省', '河北省', '安徽省', '山东省', '湖北省', '湖南省', '山西省', '黑龙江省', '浙江省', '江西省', '河南省', '辽宁省', '吉林省', '江苏省', '福建省', '广东省', '海南省', '四川省', '贵州省', '云南省', '陕西省', '甘肃省', '青海省', '台湾省', '内蒙古自治区', '广西壮族自治区', '西藏自治区', '宁夏回族自治区', '新疆维吾尔自治区', '香港特别行政区', '澳门特别行政区'],
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
                this.$router.replace({name:'index4'});
            },
            go : function(url){
                this.$router.push({name: url})
            },
            openPicker() {
                this.listShow = true;
            },
            select( index) {
                var that = this;
                setTimeout(function(){
                    that.locationTitle = that.columns[index];// (`当前值：${value}, 当前索引：${index}`);
                    that.active = index;
                    that.listShow = false;
                },200
                )

            },
            onCancel() {
                this.listShow = false;
            },



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
    .blue{
        color: #4c62e7;
        font-weight: bold;
    }
    .top_bar{
        background-color:rgb(56,155,246);
        color: white;
    }
    .main_box{
        background-color: rgb(238,238,238);
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
    }
    .content{
        padding: 0px ;
        background-color: rgb(238,238,238);
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .content{
        padding: 0 18px;
    }
    .picker_box{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 5;
        height: 300px;
    }
    .img_location{
        position: absolute;
        top: 5px;
        left:8px ;
        height: 20px;
        width: 14px;
    }
    /*.van-nav-bar__title,.van-icon.van-icon-arrow-left.van-nav-bar__arrow{*/
    /*    color:#fff;*/
    /*}*/
    .img_lianzi1{
        position: absolute;
        top: 94px;
        left:10% ;
        height: 18px;
        width: 4px;
    }
    .img_lianzi2{
        position: absolute;
        top: 94px;
        left:90%;
        height: 18px;
        width: 4px;
    }
    .img_return{
        position: absolute;
        top: 14px;
        left:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;
    }
    .top_row{
        padding: 0 12px;
    }
    .left_top_col{
        width: 65%;
    }
    .theme_color{
        background-color: rgb(56,155,246);
    }
    .van-nav-bar__title,.van-icon.van-icon-arrow-left.van-nav-bar__arrow{
        color:#fff;
    }
    .right_top_col{
        border-radius: 4px;
        background-color: rgb(56,155,246);
        height: 22px;
        width: 35%;
        text-align: center;
        margin: 5px auto;
    }
    .right_botton_col{
        width: 35%;
    }
    .blue{
        color: #4c62e7;
    }
    .text_align_left{
        text-align: left;
        padding-left: 8px;
    }
    .text_align_right{
        text-align: right;
        padding-right: 12px;
    }
    .relative{
        position: relative;
    }
    .location_div{
        height: 30px;
        background-color: rgb(56,155,246);
        width: auto;
        margin: 18px 8px;
    }
    .location_div_text{
        margin: 0;
        padding: 0;
        line-height: 30px;
        font-size: 14px;
        color: white;
    }
    .tag_box{
        background-image:  url(../../../assets/images/huidiantong/1004184105.png);
        background-repeat:no-repeat;
        background-size:100% 100%;
        height: 68px;
        width: 47%;
    }
    .test_left{
        margin: 0;
        padding-left: 0;
        line-height: 32px;
        font-size: 12px;
    }
    .test_botton_right{
        margin: 0;
        line-height: 32px;
        font-size: 12px;
        padding-left: 20px;
    }
    .test_right{
        font-size: 8px;
        line-height: 22px;
        padding: 0;
        margin: 0;
        color: white;
    }
    .select-box{
        height: 300px;
        position:absolute ;
        bottom:0px;
        .shengfen{
            text-align: center;
        }
        .van-action-sheet__header{
            line-height: 40px;
            font-size: 15px;
            background-color: #379BF6;
            color: white;
        }
        .van-icon{
            color: white;
        }
        .cell{
            display: flex;

            align-items: center;
            padding: 8px 12px;
            &:not(:last-child){
                border-bottom: 1px solid #cccccc;
            }
            .cell-left{
                display: flex;
                align-items: center;
                padding-left: 20px;
                position: relative;
                .point{
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    left: 0px;
                    top: 50%;
                    transform: translateY(-50%);
                    border-radius: 50%;
                    border: 1px solid #379BF6;
                }
                .active{
                    &::after{
                        content: '';
                        position: absolute;
                        left: 2px;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 6px;
                        height: 6px;
                        border-radius: 50%;
                        background-color: #379BF6;
                    }
                }
            }
            .more{
                width: 12px;
                height: 12px;
                img{
                    display: block;
                    width: 100%;
                }
            }
        }
        .nav{

            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #cccccc;
            .nav-item{
                flex: 1;
                text-align: center;
            }
            .nav-item:not(:first-child){
                border-left: 1px solid #999999;
            }
        }
    }


</style>
