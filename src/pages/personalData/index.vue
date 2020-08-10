<template>
    <!--个人资料页面-->
    <div class="personalData">
        <van-sticky>
            <van-nav-bar style="height:50px">  
                <template #title><span style="font-size:18px">编辑资料</span></template>
                <template #left><van-icon name="arrow-left"  size="20" color="#000000" @click="fanHui"/></template>
            </van-nav-bar>
        </van-sticky>
        <!--@submit="onSubmit"-->
        <van-form >
            <van-cell class="touLie" label="上传视频跟吸引他人关注你">
                <template #title>
                    <span class="custom-title"  style="margin-right:25px">封面/视频</span>
                    <van-uploader  :after-read="afterRead" preview-size="40px" :max-count="4"  v-model="myData.fenVideo">
                    
                        <van-icon class="imgJianTou" name="arrow" />
                    </van-uploader>
                </template>
            </van-cell>

            <!--<div role="button" tabindex="0" class="van-cell van-cell--clickable">
                <div class="van-cell__title">
                    <span>单元格</span>
                </div>
                <div class="van-cell__value">
                    <span>上传视频跟吸引他人关注你</span>
                </div>
                <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
            </div>-->

            <van-field  v-model="myData.geXInQIanMing" class="touLie" rows="2" autosize label="个新签名" type="textarea"  
                maxlength="30" placeholder="展示我的态度30字以内"  show-word-limit/>

            <van-field v-model="myData.niCheng" class="touLie"  name="昵称" label="昵称" placeholder="请输入昵称"
                :rules="[{ required: true, message: '请输入昵称' }]"/>
            <van-field  v-model="myData.XingBie" name="性别" label="性别" placeholder="性别"
                :rules="[{ required: true, message: '请输入性别' }]" />
            <van-field  v-model="myData.nianLing" name="年龄" label="年龄" placeholder="请输入年龄"
                :rules="[{ required: true, message: '请输入年龄' }]" />
            <van-field  v-model="myData.shengRi" name="生日" label="生日" placeholder="请输入生日"
                :rules="[{ required: true, message: '请输入生日' }]" />



            <van-field v-model="myData.idHao" class="touLie"  name="ID号" label="ID号" placeholder="ID号"
                :rules="[{ required: true, message: '请输入收ID号' }]"/>
            <van-field  v-model="myData.zhiYe" name="职业" label="职业" placeholder="请输入职业"
                :rules="[{ required: true, message: '请输入职业' }]" />
            <van-field  v-model="myData.xingZuo" name="星座" label="星座" placeholder="请输入星座"
                :rules="[{ required: true, message: '请输入星座' }]" />
            <van-field  v-model="myData.xueXiao" name="学校" label="学校" placeholder="请输入学校"
                :rules="[{ required: true, message: '请输入学校' }]" />
            <van-field  v-model="myData.suoZaiDi" name="所在地" label="所在地" placeholder="请输入所在地"
                :rules="[{ required: true, message: '请输入所在地' }]" />

            <van-field v-model="myData.aiHao"  class="touLie" rows="2" autosize label="爱好" type="textarea"  
                maxlength="100" placeholder="您的爱好100字以内"  show-word-limit/>
                

            
            <van-cell class="touLie" label="选择标签">
                <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <span class="custom-title"  style="margin-right:50px">标签</span>
                    <van-tag v-for="item in listLan" round   size="medium" type="danger" style="margin:3px">
                        {{item.value}}
                    </van-tag>
                </template>
                <template #right-icon >
                    <van-icon name="arrow" style="margin:10px" @click="showBiaoQian"/>
                </template>
            </van-cell>

            <van-row class="touLie" >
                <van-col span="1"> </van-col>
                <van-col span="10">
                    <van-button round block >取消</van-button>
                </van-col>
                <van-col span="2"> </van-col>
                <van-col span="10">
                    <van-button  class="tiJiaoBut" round block native-type="submit">提交</van-button>
                </van-col>
            </van-row>
        </van-form>

        
        <!-- 标签弹出框 -->
        <van-popup v-model="biaoQianshow" close-icon-position="top-left" position="bottom" :style="{ height: '100%' }">
            <van-sticky>
                <van-nav-bar style="height:50px">  
                    <template #title><span style="font-size:18px">我的标签</span></template>
                    <template #left><van-icon name="arrow-left"  size="20" color="#000000" @click="biaoQianGuanBi"/></template>
                </van-nav-bar>
            </van-sticky>
             <van-checkbox-group v-model="myData.biaoQianResult">

                <van-cell-group>
                    <van-cell v-for="item in listLie" clickable :key="item.label" :title="`${item.value}`">
                        <template #right-icon>
                            <van-checkbox :name="item.label" checked-color="#4CD4D2" ref="checkboxes" />
                        </template>
                    </van-cell>
                </van-cell-group>

            </van-checkbox-group>
        </van-popup>

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
                biaoQianshow: false,
                //个人数据资料
                myData:{
                    fenVideo: [],   //封面和视频
                    geXInQIanMing: '', //个性签名
                    niCheng: '',        //昵称
                    XingBie: '',        //性别
                    nianLing: '',       //年龄
                    shengRi: '',        //生日
                    idHao: '',          //id号
                    zhiYe: '',          //职业
                    xingZuo: '',        //星座
                    xueXiao: '',        //学校
                    suoZaiDi: '',       //所在地
                    aiHao: '',          //爱好
                    biaoQianResult:[1,2],//标签接收列表
               },
                //标签栏展示使用
                listLan:[],
                //标签所有列表
                listLie: [
                    {label:1,value:'情感'},
                    {label:2,value:'美食'},
                    {label:3,value:'职场'},
                    {label:4,value:'户外'},
                    {label:5,value:'跳舞'},
                    {label:6,value:'看电影'},
                    {label:7,value:'打游戏'},
                    {label:8,value:'情感'},
                    {label:9,value:'美食'},
                    {label:10,value:'职场'},
                    {label:11,value:'户外'},
                    {label:12,value:'跳舞'},
                    {label:13,value:'看电影'},
                    {label:14,value:'打游戏'},
                    {label:15,value:'职场'},
                    {label:16,value:'户外'},
                    {label:17,value:'跳舞'},
                    {label:18,value:'看电影'},
                    {label:19,value:'打游戏'},
                ],

            }
        },

        //数据预加载
        created : function(){
            this.screenHeight = window.screenHeight;
        },

        //网页加载完成
        mounted () {
            this.bQResultTurnListLan()
        },

        //声明方法
        methods : {
            //把个人数据中的标签为数字标识符的数组转换为标签使用的带中文的展示数组
            bQResultTurnListLan: function(){
                this.listLan=[]
                for(var i=0;i<this.myData.biaoQianResult.length;i++){
                    for(var j=0;j<this.listLie.length;j++){
                        if(this.myData.biaoQianResult[i]==this.listLie[j].label){
                            this.listLan.push({label:this.listLie[j].label,value:this.listLie[j].value})
                        }
                    }
                }
            },
            //返回上一页
            fanHui:function(){
                this.$router.go(-1);
            },
            //打开标签页
            showBiaoQian: function(){
                this.biaoQianshow=true
            },
            //标签弹出框关闭
            biaoQianGuanBi() {
                this.bQResultTurnListLan()
                this.biaoQianshow = false;
            },
            //文件上传完毕后会触发 after-read 回调函数，获取到对应的 file 对象。
            afterRead:function(file){
                console.log(file)
            }
           
        },

        //计算属性
        computed: {

        },


        components: {
           
        }
    }
</script>
<<style>
.personalData .van-uploader {
    width:66vw;
}
/*.personalData .van-uploader__input-wrapper {
    position: absolute;
    right: 0px;
}*/

</style>

<style lang="stylus" scoped>
    .personalData
        height:667px
        width:100vw
        background-color:#F9F9FB
        .dateDiv
            margin:10px 15px 10px 15px
            color:#C1C1C1
            font-size:14px
        .touLie
            padding-top:10px
            padding-bottom:10px
            margin-top:15px
            .imgJianTou
                padding:0px
            .tiJiaoBut
                color:white
                background: -webkit-gradient(linear, left top, right bottom, color-stop(10%,#1DE7A7), color-stop(80%,#22D3F5))
</style>
