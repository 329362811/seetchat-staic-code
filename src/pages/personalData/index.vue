<template>
    <!--个人资料页面-->
    <div class="container">
        <van-sticky>
            <div class="head">
                <van-row>
                    <van-col span="9" class="tuPiao"><van-icon  @click="fanHui" size="20" name="arrow-left" /></van-col>
                    <van-col span="8">编辑资料</van-col>
                </van-row>
            </div>
        </van-sticky>   
        <!--@submit="onSubmit"-->
        <van-form >
            <van-field v-model="myData.fenVideo" class="touLie" center clearable label="封面/视频" placeholder="上传视频跟吸引他人关注你">
                <template #button>
                    <van-icon  name="arrow" />
                </template>
            </van-field>

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

            <van-field v-model="myData.aiHao" class="touLie" rows="2" autosize label="爱好" type="textarea"  
                maxlength="100" placeholder="您的爱好100字以内"  show-word-limit/>
                
            <van-field v-model="myData.fenVideo" class="touLie" center clearable label="标签" placeholder="选择标签">
                
                    <van-tag round type="primary">标签</van-tag>
                    <van-tag round type="success">标签</van-tag>
                    <van-tag round type="primary">标签</van-tag>
                    <van-tag round type="success">标签</van-tag>
                    <van-tag round type="primary">标签</van-tag>
                    <van-tag round type="success">标签</van-tag>
                <template #button>
                    <van-icon  @click="showBiaoQian"  name="arrow" />
                </template>
            </van-field>
            
            <van-cell is-link  label="选择标签"  @click="showBiaoQian">
                <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <span class="custom-title"  style="margin-right:50px">标签</span>
                    <van-tag v-for="item in list" round   size="medium" type="danger" style="margin:3px">
                        {{item.value}}
                    </van-tag>
                </template>
            </van-cell>

            <div class="touLie" > 
                <van-button round block type="info" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>



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
             <van-checkbox-group v-model="myData.biaoQianResult">

                <van-cell-group>
                    <van-cell v-for="item in list" clickable :key="item.label" :title="`${item.value}`">
                        <template #right-icon>
                            <van-checkbox :name="item.label" ref="checkboxes" />
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
                //标签列表
                list: [
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
                //个人数据资料
                myData:{
                    fenVideo: '',      //封面和视频
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
                    biaoQianResult:[],//标签接收列表
               }

            }
        },

        //数据预加载
        created : function(){
            this.screenHeight = window.screenHeight;
        },

        //网页加载完成
        mounted () {
            
        },

        //声明方法
        methods : {
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
                this.biaoQianshow = false;
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
        .dateDiv
            margin:10px 15px 10px 15px
            color:#C1C1C1
            font-size:14px
        .touLie
            margin-top:15px
</style>
