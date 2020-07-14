<template>
    <div class="main_box collectOperation">
        <!--        遮罩层-->
        <div class='popContainer'  v-show="is_open">
            <img src="../../../../assets/images/38/return@2x.png" class="img_return" @click="openOverlay(-1)" >
            <van-nav-bar  >
            </van-nav-bar>
            <p class="craema_text">{{text}}</p>
            <img src="../../../../assets/images/other/file.png" class="img_shoot"  >
            <p style="line-height: 10px"></p>
            <img src="../../../../assets/images/other/Takeaphoto@2x.png" class="img_cmarea"  @click="add_img">

        </div>
        <!--头部导航-->
        <van-nav-bar :title="title"  :right-text="right_text" @click-right="addStep">

        </van-nav-bar>
        <img src="../../../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
        <progressBar :step="this.step" :stepArray="stepArray" v-show="step!=5" class="progressBar"></progressBar>
        <div class="content" v-show="step==0">
            <div style="height: 8px;"></div>
            <van-row  class="picture_div" >
                <p>请上传征信查询授权协议</p>
            </van-row>
            <van-row  class="picture_div" >
                <van-col  class="picture_col gray_border" span="7"  v-for="(item) in list[0]">
                    <img src="../../../../assets/images/other/02130521.png" class="img_file"  >
                    <img src="../../../../assets/images/24/Empty@2x.png" class="img_close" @click="remove_img(0)" >
                </van-col>
                <van-col class="picture_col blue_border" span="7" @click="openOverlay(0,'请拍摄征信查询授权协议')" >
                    <img src="../../../../assets/images/84/Shooting@2x.png" class="img_cmarea2"  >
                    <p class="add_text">点击拍摄</p>
                </van-col>
            </van-row>
            <van-row  class="picture_div" >
                <p>请上传客户手持征信查询授权协议的影像</p>
            </van-row>
            <van-row  class="picture_div" >
                <van-col  class="picture_col gray_border" span="7"  v-for="(item) in list[1]">
                    <img src="../../../../assets/images/other/shouchi.jpg" class="img_file"  >
                    <img src="../../../../assets/images/24/Empty@2x.png" class="img_close" @click="remove_img(1)" >
                </van-col>
                <van-col class="picture_col blue_border" span="7" @click="openOverlay(1,'请拍摄手持征信查询授权协议的影像')" >
                    <img src="../../../../assets/images/84/Shooting@2x.png" class="img_cmarea2"  >
                    <p class="add_text">点击拍摄</p>
                </van-col>
            </van-row>
        </div>
        <div class="content" v-show="step==1">
            <div style="height: 8px;"></div>
            <van-row  class="picture_div" >
                <p>请上传业务申请书</p>
            </van-row>
            <van-row  class="picture_div" >
                <van-col  class="picture_col gray_border" span="7"  v-for="(item) in list[2]">
                    <img src="../../../../assets/images/other/02130521.png" class="img_file"  >
                    <img src="../../../../assets/images/24/Empty@2x.png" class="img_close" @click="remove_img(2)" >
                </van-col>
                <van-col class="picture_col blue_border" span="7" @click="openOverlay(2,'请拍摄业务申请书的影像')" >
                    <img src="../../../../assets/images/84/Shooting@2x.png" class="img_cmarea2"  >
                    <p class="add_text">点击拍摄</p>
                </van-col>
            </van-row>
            <van-row  class="picture_div" >
                <p>请上传客户手持业务申请书的影像</p>
            </van-row>
            <van-row  class="picture_div" >
                <van-col  class="picture_col gray_border" span="7"  v-for="(item) in list[3]">
                    <img src="../../../../assets/images/other/shouchi.jpg" class="img_file"  >
                    <img src="../../../../assets/images/24/Empty@2x.png" class="img_close" @click="remove_img(3)" >
                </van-col>
                <van-col class="picture_col blue_border" span="7" @click="openOverlay(3,'请拍摄手持业务申请书的影像')" >
                    <img src="../../../../assets/images/84/Shooting@2x.png" class="img_cmarea2"  >
                    <p class="add_text">点击拍摄</p>
                </van-col>
            </van-row>
        </div>
        <div class="content" v-show="step==2">
            <div style="height: 8px;"></div>
            <van-row  class="picture_div" >
                <p>请上传企业主手持本人身份证的影像</p>
            </van-row>
            <van-row  class="picture_div" >
                <van-col  class="picture_col gray_border" span="7"  v-for="(item) in list[4]">
                    <img src="../../../../assets/images/other/certificate.jpg" class="img_file"  >
                    <img src="../../../../assets/images/24/Empty@2x.png" class="img_close" @click="remove_img(4)" >
                </van-col>
                <van-col class="picture_col blue_border" span="7" @click="openOverlay(4,'请拍摄企业主手持本人身份证的影像')" >
                    <img src="../../../../assets/images/84/Shooting@2x.png" class="img_cmarea2"  >
                    <p class="add_text">点击拍摄</p>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>

    import "../../../../assets/resetui.scss";
    import Vue from 'vue';
    import { Tab, Tabs ,SubmitBar, } from 'vant';
    import progressBar from '@/components/progressBar'
    Vue.use(Tab).use(Tabs).use(SubmitBar);
    export default {

        data() {
            return {
				text:'请拍摄征信查询授权协议',
                info:{},
                Indexe1:'',
                Indexe2:'',
                title : '征信采集信息',
                step:0,
                stepArray:[
                    '征信查询授权协议',
                    '业务申请书',
                    '企业主信息' ,
                ],
                unid:'',
                right_text:'下一步',
                checked: true,
                is_open:false,
                type:0,
                // list:[
                //       [false,true,false,true,],
                //       [false,true,false,true,],
                //       [false,true,false,true,],
                // ],
                list:[
                    [],[],[],[],[],

                ],
            }
        },


        //数据预加载
        created : ()=>{
        },

        //网页加载完成
        mounted(){
            this.unid = this.$route.query.unid;
            var jsonStr = sessionStorage.getItem('userinfo');
            this.info = JSON.parse(jsonStr);
            console.log(this.unid);
            console.log(this.info);
        },

        //声明方法
        methods : {
            onClickLeft() {
                if(this.step == 0 ){
                    this.$router.go(-1);
                    return;
                }
                this.step--;
                this.right_text='下一步';
            },
            onClickRight:function(url){
                if (this.step == 2) {
                    this.go(url);
                }
			},
            go : function(url){
                this.$router.push({name: url})
            },
            openOverlay : function(i,text){
				if (text) {
				    this.text = text;
				}
                if (i!==-1) {
                    this.type = i;
                }
                this.is_open = !this.is_open;
            },
            onTabClick(index) {
                this.active = index
            },
            remove_img(i) {
                this.list[i].pop();
            },
            add_img() {
                this.list[this.type].push(1)
                this.is_open = !this.is_open;
            },
            addStep:function(){
                if(this.step == 2){
                    this.right_text = '发起校验';
                    this.go('creditCheckResult');
                    this.setInfoStep();
                    return
                }
                this.step ++;
                if(this.step == 2){
                    this.right_text = '发起校验';
                }
            },
            setInfoStep() {
                for (let i = 0; i <this.info.length ; i++) {
                    if (this.info[i].unid == this.unid) {
                        this.info[i].step = 2;
                    }
                }
                sessionStorage.setItem('userinfo',JSON.stringify(this.info));
            },


        },

        //计算属性
        computed: {

        },

        //引入组件
        components: {
            progressBar,
        }


    }
</script>

<style lang="scss" scoped>
    .popContainer{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.6);
        z-index: 110;
        text-align: center;
    }
    .choose_box{
        float: right;
        background-color: white;
        width: 50%;
    }
    .blue{
        color: #4c62e7;
    }
    .craema_text {
        color: #ffffff;
        margin-top: 50px;
        font-size: 14px;
    }
    .picture_div p{
        margin: 0;
        padding: 0;
        line-height: 40px;

    }
    .picture_col{
        text-align: center;
        position: relative;
        padding: 4px auto;
        margin: 8px 4px;
        height: 155px;
        margin-right: 4px;
    }
    .blue_border{
        border: #4c62e7 1px dashed;
        border-radius: 2px;
        text-align: center;
    }
    .gray_border{
        border: #666666 1px solid;
        border-radius: 2px;
       margin-right: 8px;
    }
    .main_box{
        background-color: rgb(238,238,238);
    }
    .content{
        margin-top: 8px;
        padding: 0 12px ;
        background-color: white;
    }

    .img_return{
        position: absolute;
        top: 14px;
        left:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;
    }
    .img_close{
        position: absolute;
        top: 5px;
        right:8px ;
        height: 24px;
        width: 24px;
        z-index: 10;
    }
    .img_file{
        width: 90%;
        height: 95%;
        margin: 2px auto;

    }

    .img_cmarea{
       margin-top: 14px;
        left:45% ;
        height: 80px;
        width: 80px;
    }
    .img_cmarea2{
        margin-top: 40px;
        height: 50px;
        width: 50px;
    }
    .img_shoot{
        margin-top: 10px;
        width: 260px;
        height: 380px;
    }
    .add_text{
        color: #4c62e7;
        font-size: 14px;
        line-height: 34px;
        margin: 0;
    }

</style>
