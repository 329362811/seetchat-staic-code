<template>
    <!--发布需求页面-->
    <div class="container">
        <van-sticky>
            <div class="head">
                <van-row>
                    <van-col span="9" class="tuPiao"><van-icon  @click="fanHui" size="20" name="arrow-left" /></van-col>
                    <van-col span="8">发布需求</van-col>
                </van-row>
            </div>
        </van-sticky>   
        <!--@submit="onSubmit"-->
        <van-form >
            
            <van-field  v-model="pdemandData.pName" class="touLie" rows="2" autosize label="需求名称" type="textarea"  
                maxlength="20" show-word-limit placeholder="20字符以内" />

                
            <van-field v-model="pdemandData.pMoney"  class="touLie" placeholder="请输入价格" 
                type="number" label="价格（元）" />

            <van-cell class="touLie" label="开始时间">
                <template #title>
                    <span class="custom-title"  style="margin-right:50px">开始时间</span>{{pdemandData.pBeginTime}}
                </template>
                <template #right-icon ><van-icon name="arrow" style="margin:5px" @click="showBeginTime"/></template>
            </van-cell>
            <van-cell label="结束时间" >
                <template #title>
                    <span class="custom-title"  style="margin-right:50px">结束时间</span>{{pdemandData.pEndTime}}
                </template>
                <template #right-icon ><van-icon name="arrow" style="margin:5px" @click="showEndTime"/></template>
            </van-cell>

            <van-cell label="聊天方式"  class="touLie">
                <template #title>
                    <span class="custom-title"  style="margin-right:50px">聊天方式</span>
                </template>
                <template #right-icon ><van-icon name="arrow" style="margin:5px"  @click="showFangShi"/></template>
            </van-cell>

            
            
            <van-cell  class="touLie" label="选择标签" >
                <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <span class="custom-title"  style="margin-right:50px">标签</span>
                    <van-tag v-for="item in listLan" round   size="medium" type="danger" style="margin:3px">
                        {{item.value}}
                    </van-tag>
                </template>
                <template #right-icon ><van-icon name="arrow" style="margin:5px" @click="showBiaoQian"/></template>
            </van-cell>
            
            <van-field  v-model="pdemandData.pBeiZhu" class="touLie" rows="2" autosize label="备注" type="textarea"  
                maxlength="200" placeholder="您的需求简介200字符以内"  show-word-limit/>



            <van-row class="touLie" >
                <van-col span="1"> </van-col>
                <van-col span="10">
                    <van-button round block >取消</van-button>
                </van-col>
                <van-col span="2"> </van-col>
                <van-col span="10">
                    <van-button  class="tiJiaoBut" round block native-type="submit">发布</van-button>
                </van-col>
            </van-row>
        </van-form>



        <!--开始时间弹出框-->
        <van-popup v-model="beginTimeShow" close-icon-position="top-left" position="bottom" :style="{ height: '50%' }">
            <van-datetime-picker v-model="currentDate" type="datetime" title="开始时间" :min-date="minDate" 
            :max-date="maxDate" @confirm="beginTimeIsOkBut('确定')" @cancel="beginTimeIsOkBut('取消')"/>
        </van-popup>
        <!--结束时间弹出框-->
        <van-popup v-model="endTimeShow" close-icon-position="top-left" position="bottom" :style="{ height: '50%' }">
            <van-datetime-picker v-model="currentDate" type="datetime" title="开始时间" :min-date="minDate" 
            :max-date="maxDate" @confirm="endTimeIsOkBut('确定')" @cancel="endTimeIsOkBut('取消')"/>

        </van-popup>
        <!--聊天方式弹出框-->
        <van-popup v-model="fangShiShow" close-icon-position="top-left" position="bottom" :style="{ height: '50%' }">
            <van-radio-group v-model="pdemandData.pFangShi">
                <van-cell-group>
                    <van-cell title="单选框 1" clickable @click="radio = '1'">
                        <template #right-icon>
                            <van-radio name="1" />
                        </template>
                    </van-cell>
                    <van-cell title="单选框 2" clickable @click="radio = '2'">
                        <template #right-icon>
                            <van-radio name="2" />
                        </template>
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
        </van-popup>

        <!-- 标签弹出框 -->
        <van-popup v-model="biaoQianshow" close-icon-position="top-left" position="bottom" :style="{ height: '100%' }">
            <van-sticky>
                <div class="head">
                    <van-row>
                        <van-col span="9" class="tuPiao"><van-icon  @click="biaoQianGuanBi" size="20" name="arrow-left" /></van-col>
                        <van-col span="8">我的标签</van-col>
                    </van-row>
                </div>
            </van-sticky>   
             <van-checkbox-group v-model="pdemandData.pBiaoQianResult">

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
                minDate: new Date(2020, 0, 1),
                maxDate: new Date(2025, 10, 1),
                currentDate: new Date(),

                beginTimeShow: false,   //开始时间弹出框判断
                endTimeShow: false,     //结束时间弹出框判断
                fangShiShow: false,     //聊天方式弹出框判断
                biaoQianshow: false,    //标签弹出框判断
                //个人数据资料
                pdemandData:{
                    pName: '',          //需求名称
                    pMoney: null,       //需求价格
                    pBeginTime: '',      //需求开始时间
                    pEndTime: '',        //需求结束时间
                    pFangShi: '',       //聊天方式
                    pBiaoQianResult:[1,2],//标签接收列表
                    pBeiZhu: '',        //备注
               },
                //标签栏展示使用
                //标签所有列表
                listFangShiLie: [
                    {label:1,value:'语音聊天'},
                    {label:2,value:'视频聊天'},
                    {label:3,value:'文字聊天'},
                    {label:4,value:'娱乐聊天'},
                    {label:5,value:'解心事聊天'},
                ],

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
            this.currentDate=this.timeFormat(this.currentDate)
        },

        //声明方法
        methods : {
            //把个人数据中的标签为数字标识符的数组转换为标签使用的带中文的展示数组
            bQResultTurnListLan: function(){
                this.listLan=[]
                for(var i=0;i<this.pdemandData.pBiaoQianResult.length;i++){
                    for(var j=0;j<this.listLie.length;j++){
                        if(this.pdemandData.pBiaoQianResult[i]==this.listLie[j].label){
                            this.listLan.push({label:this.listLie[j].label,value:this.listLie[j].value})
                        }
                    }
                }
            },
            //时间转换方法
            timeFormat(time){
                let year = time.getFullYear()
                let month = time.getMonth() + 1
                if(month<10){
                    month="0"+month
                }
                let day = time.getDate()
                if(day<10){
                    day="0"+day
                }
                let hour = time.getHours()
                if(hour<10){
                    hour="0"+hour
                }
                let minute= time.getMinutes()
                if(minute<10){
                    minute="0"+minute
                }
                return year+"-"+month+"-"+day+"    "+hour+":"+minute
            },
            //返回上一页
            fanHui:function(){
                this.$router.go(-1);
            },
            //打开开始时间弹出框
            showBeginTime: function(){
                this.beginTimeShow=true
            },
            //开始时间确定或取消按钮
            beginTimeIsOkBut: function(value){
                if(value=="确定"){
                    this.pdemandData.pBeginTime=this.timeFormat(this.currentDate)
                }
                this.beginTimeShow=false
            },
            //打开结束时间弹出框
            showEndTime: function(){
                this.endTimeShow=true
            },
            //结束时间确定或取消按钮
            endTimeIsOkBut: function(value){
                if(value=="确定"){
                    this.pdemandData.pEndTime=this.timeFormat(this.currentDate)
                }
                this.endTimeShow=false
            },
            //打开聊天方式弹出框
            showFangShi: function(){
                this.fangShiShow=true
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
