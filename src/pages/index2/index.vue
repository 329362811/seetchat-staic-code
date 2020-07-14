<template>
  <!--抢单页-->
  <div class="main">
    <!--底部路由-->
    <TabBar/>
   
    <div class="content"> 
      <!--头部导航-->
      <van-row  gutter="10" class="daohangKuang">
        <van-col class="skipCaiDan">
           <van-row>
             <van-col span="10"></van-col>
            <van-col>
              <div class="navLeft">抢单</div>
            </van-col>
            <van-col>
              <div  class="navRight"  @click="onClickRight">已抢单</div>
            </van-col>
          </van-row>
        </van-col>
        <van-col>
          <van-icon @click="searchBut" name="search" size="24px" color="#4c62e7"/>
        </van-col>
      </van-row>
    </div>
    
    <div>
      <van-dropdown-menu id="shaiLeft" style="height:44px;">
        <van-dropdown-item v-model="TheSorting1" :options="TheSortings1"/>
        <van-dropdown-item v-model="TheSorting2" :options="TheSortings2" />
        <div class="shaiXuanLeft" @click="shaixuanBut"></div>
      </van-dropdown-menu>
      
      
      <div class="bac" >
        <div class="daiWanCheng" v-show="typeOneShow">
          <van-row  @click="particularsCardBut(1)">
            <van-col class="qiangDanCol" span="17">
              <div class="qiangGongSi">{{enterprise|textJue(textJueIsOk)}}</div><div class="qiangGongLu">(<20KM)</div>
            </van-col>
            <van-col style="line-height:20px;" span="4"></van-col>
            <van-col style="line-height:20px;" span="3">
              <div class="jingZhuenWan">精准</br>测额</div>
            </van-col>
            <van-col v-if="false" style="line-height:20px;" span="4">
              <div class="yunShuiDaiWan">云税贷</br>破冰行动</div>
            </van-col>
          </van-row>
          <van-row gutter="15" @click="particularsCardBut(1)">
            <van-col class="kuang" span="6">
              <div class="kuangHangOrange">
                <div class="kuangTop">信用快贷</div><div class="kuangBottom">188万</div>
              </div>
            </van-col>
            <van-col class="kuang" span="6">
              <div class="kuangHangOrange">
                <div class="kuangTop">抵押快贷</div><div class="kuangBottom">300万</div>
              </div>
            </van-col>
            <van-col class="kuang" span="6">
              <div class="kuangHang">
                <div class="kuangTop">交易快贷</div><div class="kuangBottom">300万</div>
              </div>
            </van-col>
            <van-col class="kuang" span="6">
              <div class="kuangHang">
                <div class="kuangTop">质押快贷</div><div class="kuangBottom">800万</div>
              </div>
            </van-col>
          </van-row>
          <van-row  gutter="10" @click="particularsCardBut(1)">
            <van-col><div class ="BKuang" >法人</div></van-col>
            <van-col><div class ="BKuang" >个人征信</div></van-col>
          </van-row>
          <van-row  gutter="10">
            <div>
              <div class ="timeKuang" >
                <!-- <van-slider @change="huaKuaiChange()" class="sliderHua" v-model="huaKuai" bar-height="10px" active-color="#e5e5e5" >
                  <div slot="button" class="custom-button" >
                    {{huaKuaiName}}
                  </div>
                </van-slider> -->
                <vue-slide-bar class="sliderHua" v-model="huaKuai" @dragEnd="huaKuaiChange">
                  <template slot="tooltip" slot-scope="tooltip">
                    <div slot="button" class="custom-button">
                      {{huaKuaiName}}
                    </div>
                  </template>
                </vue-slide-bar>
              </div>
              <div class ="huaTime" @click="particularsCardBut(1)" >{{toDay}}</br><span class="timeSpan">09:00</span></div>
            </div>
          </van-row>
        </div>
      
        <div class="daiWanCheng"  v-show="typeTwoShow">
          <van-row @click="particularsCardBut(2)">
            <van-col class="qiangDanCol" span="17">
              <div class="qiangGongSi">{{enterpriseTwo|textJue(textJueIsOkTwo)}}</div><div class="qiangGongLu">(<20KM)</div>
            </van-col>
            <van-col style="line-height:20px;" span="4"></van-col>
            <van-col style="line-height:20px;" span="3">
              <div class="jingZhuenWan">精准</br>测额</div>
            </van-col>
          </van-row>
          <van-row gutter="15" @click="particularsCardBut(2)">
            <van-col class="kuang" span="6">
              <div class="kuangHang">
                <div class="kuangTop">信用快贷</div><div class="kuangBottom">188万</div>
              </div>
            </van-col>
            <van-col class="kuang" span="6">
              <div class="kuangHangOrange">
                <div class="kuangTop">抵押快贷</div><div class="kuangBottom">850万</div>
              </div>
            </van-col>
            <van-col class="kuang" span="6">
              <div class="kuangHang">
                <div class="kuangTop">交易快贷</div><div class="kuangBottom">300万</div>
              </div>
            </van-col>
            <van-col class="kuang" span="6">
              <div class="kuangHang">
                <div class="kuangTop">质押快贷</div><div class="kuangBottom">800万</div>
              </div>
            </van-col>
          </van-row>
          <van-row  gutter="10"@click="particularsCardBut(2)">
            <van-col><div class ="BKuang" >基本户</div></van-col>
            <van-col><div class ="BKuang" >法人</div></van-col>
            <van-col><div class ="BKuang" >企业征信</div></van-col>
            <van-col><div class ="BKuang" >个人征信</div></van-col>
          </van-row>
          <van-row  gutter="10">
            <div>
              <div class ="timeKuang" >
                <!-- <van-slider @change="huaKuaiChangeTwo()" class="sliderHua" v-model="huaKuaitwo" bar-height="10px" active-color="#e5e5e5" >
                  <div slot="button" class="custom-button" >
                    {{huaKuaiNameTwo}}
                  </div>
                </van-slider> -->
                <vue-slide-bar class="sliderHua" v-model="huaKuaitwo" @dragEnd="huaKuaiChangeTwo">
                  <template slot="tooltip" slot-scope="tooltip">
                    <div slot="button" class="custom-button">
                      {{huaKuaiNameTwo}}
                    </div>
                  </template>
                </vue-slide-bar>
              </div>
              <div class ="huaTime" @click="particularsCardBut(2)">{{toDay}}</br><span class="timeSpan">09:00</span></div>
            </div>
          </van-row>
        </div>

      </div>

      
    </div>
  </div>
  
</template>

<script>
//引入组件首字母大写
import TabBar from '@/components/tabBar';
import { Dialog } from 'vant';
import { Divider } from 'vant';
export default {

  //基础数据存放处
  data (){
     return {

       title : '商机',
       enterprise:'广州智慧科技有限公司',
       enterpriseTwo:'广州市睿智防水电器股份有限公司',
       activeName: 'a',
       activeTabs:'a',
       TheSorting1: 1,
       TheSorting2: 1,
       TheSortings1: [
         { text: '默认排序', value: 1 },
         { text: '发布时间排序', value: 2 },
         { text: '距离排序', value: 3 },
       ],
       TheSortings2: [
         { text: '筛选', value: 1 },
         { text: '新款商品', value: 2 },
         { text: '活动商品', value: 3 }
       ],
       huaKuai: null,
       huaKuaitwo: null,
       huaKuaiName: "滑动抢单",
       huaKuaiNameTwo: "滑动抢单",
       value3:36,
       active: 'b',
       textJueIsOk: false,//判断是否抢单成功用于企业信息打码,未成功false，成功true，第一个
       textJueIsOkTwo: false,//判断是否抢单成功用于企业信息打码,未成功false，成功true，第二个
       typeOneShow:true,
       typeTwoShow:true,
       toDay: '',//当前日期
     }
  },

  //数据预加载
  created : function(){

  },

  //网页加载完成
  mounted : function(){
    var enterpriseStatus = sessionStorage.getItem('enterpriseStatus')
    if(enterpriseStatus=="YiQiangDan"||enterpriseStatus=="YiFangQi"){
      this.typeOneShow=false
    }else{
      this.typeOneShow=true
    }
    var enterpriseTwoStatus = sessionStorage.getItem('enterpriseTwoStatus')
    if(enterpriseTwoStatus=="YiQiangDan"||enterpriseTwoStatus=="YiFangQi"){
      this.typeTwoShow=false
    }else{
      this.typeTwoShow=true
    }
    this.getDataTime()
  },
  //vue过滤器
  filters: {
    //文字抢单前字体截取
    textJue(value,isOk){
      if(isOk==false){
        if (value.length > 2) {
          return value.slice(0,2) + '*********'
        }
        return value
      }
      return value
    },
  },
  
  //声明方法
  methods : {
    go : function(){
      this.$router.push('/more');
    },
    //获取当前日期
    getDataTime(){
      this.toDay=new Date().getFullYear()
      if(new Date().getMonth()+1<10){
        this.toDay+="/"+0+(new Date().getMonth()+1)
      }else{
        this.toDay+="/"+(new Date().getMonth()+1)
      }
      if(new Date().getDate()<10){
        this.toDay+="/"+0+new Date().getDate()
      }else{
        this.toDay+="/"+new Date().getDate()
      }
    },
    //已抢单中放弃按钮
    fangQiBut(){
      this.fangQiButShow = true
    },
    //已抢单按钮,跳到已抢单页面
    onClickRight(){
      let activeNameHui="a"
      this.$router.push('/grabSingleYi/'+activeNameHui);
    },
    //滑动进度变化且结束拖动后触发1
    huaKuaiChange(valll){
      this.huaKuai = valll.value;
      if(this.huaKuai==100){
        this.huaKuaiName="抢单中..."
        Dialog.alert({
          message: '抢单成功',
          confirmButtonText: "确定",
        }).then(() => {
          this.huaKuaiName="抢单成功"
					sessionStorage.setItem("enterpriseStatus","YiQiangDan")
          this.typeOneShow=false
          this.textJueIsOk=true
        });
      }else{
        this.huaKuaiName="滑动抢单"
        this.textJueIsOk=false
      }
    },
    //滑动进度变化且结束拖动后触发2
    huaKuaiChangeTwo(valll){
      this.huaKuaitwo = valll.value;
      if(this.huaKuaitwo==100){
        this.huaKuaiNameTwo="抢单中..."
        Dialog.alert({
          message: '抢单成功',
          confirmButtonText: "确定",
        }).then(() => {
          this.huaKuaiNameTwo="抢单成功"
					sessionStorage.setItem("enterpriseTwoStatus","YiQiangDan")
          this.typeTwoShow=false
          this.textJueIsOkTwo=true
        });
      }else{
        this.textJueIsOkTwo=false
        this.huaKuaiNameTwo="滑动抢单"
      }
    },
    //点击信息卡背景打开详情信息
    particularsCardBut(id){
      this.$router.push('/shangParticulars/'+id);
    },
    //点击打开搜索
    searchBut(){
      this.$router.push('/searchShang');
    },

    //点击打开筛选页
    shaixuanBut(){
      this.$router.push('/filtrateYe');
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
<style>
  #shaiLeft .van-dropdown-menu__item:nth-of-type(1){
    border-bottom:3px solid #4c62e7;
  }
  .el-slider__button{
    width: 80px;
    height: 26px;
    border-radius:15px;
    background-color: #4c62e8;
    color: white;
    border:none;
  }
</style>
<style lang="scss" scoped>

  //头部导航
  .daohangKuang{
    position: fixed;
    top:0px;
    width:100%;
    height:44px;
    line-height:44px;
    margin-top:0px;
    padding-top:10px;
  }
  .skipCaiDan{
    width: 90%;
    margin:auto;
  }
  .navLeft{ 
    width:60px;
    height:30px;
    line-height: 30px;
    font-size: 13px;
    text-align: center;
    border-bottom-left-radius:7px;
    border-top-left-radius: 7px;
    border:1px solid #4c62e7;
    color: white;
    background-color: #4c62e7;
  }
  .navRight{ 
    width:60px;
    height:30px;
    line-height: 30px;
    font-size: 13px;
    text-align: center;
    border-bottom-right-radius:7px;
    border-top-right-radius: 7px;
    border:1px solid #4c62e7;
    color: #4c62e7;
  }
  //结束

  .bac{
    width: 100%;
    min-height: 630px;
    height: 100%;
    overflow:auto;
    margin: 0px;
    padding-top: 1px;
    padding-bottom: 8px;
    background-color: #E7EAF5;
  }
  .daiWanCheng{
    width: 90%;
    height:174px;
    margin: 8px auto 0px auto;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: white;
  }
  .shaiXuanLeft{
    width:50%;
    height:50px;
    position:absolute;
    right:0px;
    top:0px; 
  }
  .daiWanCheng .qiangDanCol{
    line-height:20px;
    margin-top:15px;
  }
  .qiangDanCol .qiangGongSi{
    float: left;
    max-width:180px;
    font-weight:bold;
    font-size:15px;
    color: rgb(51,51,51);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .qiangDanCol .qiangGongLu{
    font-size:11px;
  }
  .jingZhuenWan{
    width: 36px;
    height: 34px;
    color: white;
    line-height: 12px;
    padding-top:4px;
    text-align: center;
    font-size: 4px;
    background-size: 100%;
    background-image: url(../../assets/images/Label1@2x.png);
  }
  .yunShuiDaiWan{
    width: 56px;
    height: 34px;
    color: white;
    line-height: 12px;
    text-align: center;
    padding-top:4px;
    font-size: 5px;
    background-image: url(../../assets/images/Label2@2x.png);
    background-size: 100%;
  }
  .kuangHang{
    height: 42px;
    border-radius: 5px;
    border:1px dashed rgb(76,98,232);
  }
  .kuang {
    font-weight: bold;
    height:36px;
    margin-top:12px;
    margin-bottom:5px;
    padding:auto;
  }
  .kuang .kuangTop{
    width:100%;
    line-height: 21px;
    color: rgb(51,51,51);
    text-align: center;
    font-size: 13px;
  }
   .kuang .kuangBottom{
    width:100%;
    color: rgb(76,98,232);
    text-align: center;
    line-height: 15px;
    font-size: 13px;
  }
  .kuangHangOrange{
    height: 42px;
    border-radius: 5px;
    border:1px dashed orange;
  }
  .kuangHangOrange .kuangBottom{
    color: orange;
  }
  .BKuang{
    width: 55px;
    line-height:20px;
    margin-top:14px;
    font-size: 10px;
    border-radius: 15px;
    text-align: center;
    color: rgb(76,98,232);;
    box-shadow:0 0 1px rgb(76,98,232);
    border:1px solid rgb(76,98,232);
  }
  .daiWanCheng .timeKuang{
    width:65%;
    line-height:40px;
    float: left;
    font-size: 12px;
    color:rgb(102,102,102);
  }
  .daiWanCheng .timeKuang span{
    font-size: 14px;
  }
  //部分
  .huaTime{
    float: right;
    width: 80px;
    font-size: 12px;
    line-height: 15px;
    margin-top: 10px;
   }
  .huaTime .timeSpan{
    float: right;
    line-height: 20px;
    margin-right:12px;
  }
  .timeKuang .sliderHua{
    margin-top:7px;//20px;
    margin-left: 42px;
    width:75%;
    padding-top:15px !important;
  }
  .timeKuang .sliderHua .custom-button{
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
</style>
