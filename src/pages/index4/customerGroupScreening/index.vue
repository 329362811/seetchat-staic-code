<template>
  <div class="main">
    <!-- <van-nav-bar
      :title='title'
      fixed
    />-->
    <div class="menu-sc">
      <div class="img_return"  @click="onClickLeft"></div>
      <van-search style="height:25px;" placeholder="请输入客户名称" class="vv-search" />
      <van-button class="vbtn-small" size="small" type="default">搜索</van-button>
      <img class="dy-icon" src="../../../assets/images/huidiantong/1_0001s_0003.png" alt />
      <span class="span-dw">思明区</span>
    </div>
    <div class="region-module" v-show="value1==0">
      <span class="region-modulespan" style="margin-right:20px;">
        <img class="region-module-icon" src="../../../assets/images/huidiantong/1_0001s_0009.png" alt />
        <p class="module-p">我行</p>
      </span>
      <span class="region-modulespan">
        <img class="region-module-icon" src="../../../assets/images/huidiantong/1_0001s_0008.png" alt />
        <p class="module-p">非我行</p>
      </span>
    </div>

    <div class="region-module" v-show="value1==1">
      <span class="region-modulespan" style="margin-right:8px;">
        <img class="region-module-icon" src="../../../assets/images/huidiantong/1_0001s_0006.png" alt />
        <p class="module-p">强</p>
      </span>
      <span class="region-modulespan" style="margin-right:8px;">
        <img class="region-module-icon" src="../../../assets/images/huidiantong/1_0001s_0004.png" alt />
        <p class="module-p">中</p>
      </span>
      <span class="region-modulespan" style="margin-right:8px;">
        <img class="region-module-icon" src="../../../assets/images/huidiantong/1_0001s_0007.png" alt />
        <p class="module-p">弱</p>
      </span>
      <span class="region-modulespan">
        <img class="region-module-icon" src="../../../assets/images/huidiantong/1_0001s_0005.png" alt />
        <p class="module-p">无数据</p>
      </span>
    </div>

    <div class="region-module" style="padding:0px 3px;" v-show="value1==2">
      <span class="region-modulespan" style="margin-right:3px;">
        <img class="region-module-icon" src="../../../assets/images/huidiantong/1_0001s_0006.png" alt />
        <p class="module-p">优质</p>
      </span>
      <span class="region-modulespan" style="margin-right:3px;">
        <img class="region-module-icon" src="../../../assets/images/huidiantong/1_0001s_0004.png" alt />
        <p class="module-p">良好</p>
      </span>
      <span class="region-modulespan" style="margin-right:3px;">
        <img class="region-module-icon" src="../../../assets/images/huidiantong/1_0001s_0007.png" alt />
        <p class="module-p">一般</p>
      </span>
      <span class="region-modulespan">
        <img class="region-module-icon" src="../../../assets/images/huidiantong/1_0001s_0005.png" alt />
        <p class="module-p">无数据</p>
      </span>
    </div>

    <div class="region-slectModule">
      <van-dropdown-menu id="slectModule" :overlay="false" style="height:30px;">
        <van-dropdown-item style="height:170px;" v-model="value1" @change="chaVal" :options="option1" />
      </van-dropdown-menu>
    </div>

    <!-- <div class="content">
      <baidu-map id="container" :mapClick="false" :center="center" :zoom="zoom" @ready="handler">
        <div v-for="(marker, i) of markers" :key="i">
          <bm-marker :position="{lng: subSSS(marker.center,0), lat: subSSS(marker.center,1)}" @click="infoWindowOpen(i)" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
            <bm-info-window :width="60" :title="marker.pname" :show="marker.showFlag" @close="infoWindowClose(i)" @open="infoWindowOpen(i)">
              <div class="fosize">客户需求：中</div>
              <div class="fosize">客户分层：一般</div>
            </bm-info-window>
          </bm-marker>
        </div>
      </baidu-map>
    </div> -->
    <div class="map-content">
      <div class="map-bg"><img :src="bgImg" alt=""></div>
      <div class="coordinate" v-for="(item, index) in coordinateList1" :style="item.style" @click="showTips(index)">
        <img :src="item.img" alt="">
        <div class="popup-box" v-show="item.show" :style="item.style">
          <div v-if="item.type == 2" key="company">
            <div @click="goTo('customerInfo')">
              <div>广州市睿智防水电器股份有限公司</div>
              <div>客户需求：强</div>
              <div>客户分层：优质</div>
            </div>
            <div class="mg-top" @click="go(item.status)">客户：{{item.status}}</div>
          </div>
          <div v-if="item.type == 1" key="bank">
            <div class="bank">
              <img class="bank-img" :src="bankImg" alt="">
              <div>建行银行天河路支行</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--底部导航-->
    <BottomBar />
    <!--覆盖底部导航-->
    <div class="botBarFuGaiDiv">
      <van-row >
        <van-col span="5" class="botBarFuGai" @click="opencustomer"></van-col>
      </van-row>
    </div>
    <!--惠点通上拉菜单-->
    <van-action-sheet class="hui_Action_ke" :overlay="false" :round="false" :close-on-click-overlay="false" v-model="huiShow" title="客群筛选">
      <div class="hui_bac">

        <van-row class="keQunRow">
          <van-col  span="5">
            <div class="keQunText">客群类别：</div>
          </van-col>
          <van-col span="19" >
            <div class="keQunTabes"> 
              <van-checkbox-group v-model="customerType" >
                <van-checkbox class="keQunCheckbox" v-for="item in customerTypeS" :key="item.value" :name="item.name" >
                  {{ item.name }}
                </van-checkbox>
              </van-checkbox-group>
            </div>
          </van-col>
        </van-row>
        <van-row  class="keQunRow">
          <van-col  span="5">
            <div class="keQunText">客群平台：</div>
          </van-col>
          <van-col span="19" >
            <div class="keQunTabes"> 
              <van-checkbox-group v-model="platform" >
                <van-checkbox class="keQunCheckbox" v-for="item in platformS" :key="item.value" :name="item.name" >
                  {{ item.name }}
                </van-checkbox>
              </van-checkbox-group>
            </div>
          </van-col>
        </van-row>
        <van-row  class="keQunRow">
          <van-col  span="9">
            <div class="keQunText">小微企业客户群编号：</div>
          </van-col>
          <van-col span="15" >
            <div class="keQunTabes"> 
              <van-field class="keQunField" v-model="clientId" placeholder="请输入" />
            </div>
          </van-col>
        </van-row>
        <van-row  class="keQunRow">
          <van-col  span="9">
            <div class="keQunText">小微企业客户群名称：</div>
          </van-col>
          <van-col span="15" >
            <div class="keQunTabes"> 
              <van-field class="keQunField" v-model="clientName" placeholder="请输入" />
            </div>
          </van-col>
        </van-row>
        <van-row  class="keQunRow">
          <van-col  span="9">
            <div class="keQunText">标签编号：</div>
          </van-col>
          <van-col span="15" >
            <div class="keQunTabes"> 
              <van-field class="keQunField" v-model="tagId" placeholder="请输入" />
            </div>
          </van-col>
        </van-row>
        <van-row  class="keQunRow">
          <van-col  span="9">
            <div class="keQunText">标签名称：</div>
          </van-col>
          <van-col span="15" >
            <div class="keQunTabes"> 
              <van-field class="keQunField" v-model="tagName" placeholder="请输入" />
            </div>
          </van-col>
        </van-row>
        <van-row  class="keQunRow" @click="selectClick">
          <van-col  span="9">
            <div class="keQunText">客群层级：</div>
          </van-col>
          <van-col span="10" >
            <div class="keQunTabes"> 
              <van-field class="keQunCengField" v-model="clientHierarchy" placeholder="请输入" />
            </div>
          </van-col>
          <van-col  span="5">
            <van-button class="keQunCengBut" type="info">选择</van-button>
          </van-col>
        </van-row>
        <van-row  class="keQunRow" @click="selectClick">
          <van-col  span="9">
            <div class="keQunText">标签层级：</div>
          </van-col>
          <van-col span="10" >
            <div class="keQunTabes"> 
              <van-field class="keQunCengField" v-model="tagHierarchy" placeholder="请输入" />
            </div>
          </van-col>
          <van-col  span="5">
            <van-button class="keQunCengBut" type="info">选择</van-button>
          </van-col>
        </van-row>
        
      </div>
      <van-row class="keQunButRow">
        <van-col  span="11" class="keQunButLeft" @click="sure">
            <van-button class="keQunCengBut" type="info">确认</van-button>
        </van-col>
        <van-col span="2" > </van-col>
        <van-col span="11" >
            <van-button class="keQunCengBut" type="primary" @click="keQunResetBut">重置</van-button>
        </van-col>
      </van-row>
    </van-action-sheet>

    <!-- 机构选择 -->
    <van-action-sheet class="select-box" :overlay="false" :round="false" :close-on-click-overlay="false" v-model="listShow" title="选择机构">
      <div class="nav">
        <div class="nav-item" v-for="item in navList">{{item}}级</div>
      </div>
      <div>
        <div class="cell" v-for="(item, index) in cellList" @click="select(index)">
          <div class="cell-left">
            <div class="point" :class="[active == index? 'active' : '']"></div>
            <div>{{item}}</div>
          </div>
          <div class="more">
            <img src="../../../assets/images/24/more@2x.png" alt="">
          </div>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>
<script>
//引入组件首字母大写
import BottomBar from "@/components/bottomBar";
import iconCar from '../../../assets/images/huidiantong/1_0001s_0003.png'; //以import的方式导入图片文件
import bankImg from '@/assets/images/huidiantong/bank-img.jpg';
import bgImg from '@/assets/images/huidiantong/bg.jpg';
import img1 from '@/assets/images/huidiantong/coordinate1.png';
import img2 from '@/assets/images/huidiantong/coordinate2.png';
import img3 from '@/assets/images/huidiantong/coordinate3.png';
import img4 from '@/assets/images/huidiantong/coordinate4.png';
import img5 from '@/assets/images/huidiantong/coordinate5.png';
import img6 from '@/assets/images/huidiantong/coordinate6.png';

export default {
  //基础数据存放处
  data() {
    return {
      //切换模式
      value1: 0,
      option1: [
        { text: '客户拓展模式', value: 0 },
        { text: '客户需求模式', value: 1 },
        { text: '客户分层模式', value: 2 }
      ],

      title: "惠点通",
      //修改地图底色
      mapStyle: {
        style: "midnight"
      },
      //聚合列表 项目名称坐标设备数量
      markers: [
        {
          center: "113.27147,23.131669",
          showFlag: false,
          pname: "厦门连平方科技有限公司",
          pSbNum: 3
        },
        {
          center: "113.263423,23.131963",
          showFlag: false,
          pname: "厦门连平方科技有限公司",
          pSbNum: 4
        },
        {
          center: "113.298996,23.099108",
          showFlag: false,
          pname: "厦门连平方科技有限公司",
          pSbNum: 5
        },
        {
          center: "113.241863,23.091626",
          showFlag: false,
          pname: "厦门连平方科技有限公司",
          pSbNum: 7
        },
        {
          center: "113.214159,23.074407",
          showFlag: false,
          pname: "厦门连平方科技有限公司",
          pSbNum: 9
        }
      ],
      center: { lng: 113.27147, lat: 23.131669 },
      zoom: 3,
      show: true,
      //惠点通上拉菜单使用
      huiShow:true,
      customerType: [],//客群类型选中
      customerTypeS: [//客群类型数据
        { name: '核心客群', value: 1 },
        { name: '主力客群', value: 2 },
        { name: '大众客群', value: 3 },
      ],
      platform: [],//客群平台选中
      platformS: [//客群平台数据
        { name: '商业聚类', value: 1 },
        { name: '政府聚类', value: 2 },
        { name: '内部聚类', value: 3 },
        { name: '数据驱动聚类', value: 4 },
      ],
      clientId: null,//小微企业客户群编号
      clientName: '',//小微企业客户群名称
      tagId: null,//标签id
      tagName: '',//标签名称
      clientHierarchy: '',//客群层级
      tagHierarchy: '',//标签层级
      bankImg,
      bgImg,
      coordinateList1: [
        {
          img: img1,
          style: {
            top: '200px',
            left: '100px'
          },
          show: false,
          type: 1
        },
        {
          img: img2,
          style: {
            top: '240px',
            left: '160px'
          },
          show: false,
          type: 2,
          status: '待完成'
        },
        {
          img: img1,
          style: {
            top: '320px',
            left: '80px'
          },
          show: false,
          type: 1
        },
        {
          img: img2,
          style: {
            top: '236px',
            left: '286px'
          },
          show: false,
          type: 2,
          status: '已抢单'
        },
        {
          img: img2,
          style: {
            top: '400px',
            left: '100px'
          },
          show: false,
          type: 2,
          status: '待完成'
        },
        {
          img: img1,
          style: {
            top: '300px',
            left: '300px'
          },
          show: false,
          type: 1
        },
        {
          img: img2,
          style: {
            top: '344px',
            left: '208px'
          },
          show: false,
          type: 2,
          status: '已抢单'
        },
        {
          img: img1,
          style: {
            top: '500px',
            left: '102px'
          },
          show: false,
          type: 1
        },
        {
          img: img2,
          style: {
            top: '460px',
            left: '198px'
          },
          show: false,
          type: 2,
          status: '已抢单'
        },
        {
          img: img1,
          style: {
            top: '500px',
            left: '188px'
          },
          show: false,
          type: 1
        },
      ],
      listShow: false,
      navList: ['一'],
      cellList: [
        '中国建设银行总行'
      ],
      active: -1,
    };
  },

  //数据预加载
  created: function() {},

  //网页加载完成
  mounted: function() {
    /* const map = new BMap.Map("container");
    const point = new BMap.Point(113.27147, 23.131669);
    map.centerAndZoom(point, 15);
    map.setCurrentCity("guangzhou");
    const deviceSize = new BMap.Size(48,48);
    const deviceIcon = new BMap.Icon(iconCar, deviceSize, { //会以base64的方式传参iconCar
        imageSize: deviceSize
    });
    const marker = new BMap.Marker(point, {
        icon: deviceIcon
    }); */

  },

  //声明方法
  methods: {
    onClickLeft() {
      this.$router.push({name: 'index'})
    },
    selectClick() {
      this.listShow = true;
    },
    select(index) {
      this.active = index;
      setTimeout(() => {
        this.active = -1;
        switch (this.navList.length) {
          case 1:
            this.navList.push('二');
            this.cellList = [
              '建行北京市分行',
              '建行河北市分行',
              '建行天津市分行',
              '建行山西市分行',
            ]
            break;
          case 2:
            this.navList.push('三');
            this.cellList = [
              '建行总营业部',
              '建行北京华贸支行（汇总）',
              '建行北京华贸支行（汇总）2',
              '建行北京华贸支行（汇总）3',
              '建行北京华贸支行（汇总）4',
            ]
            break;
          case 3:
            this.navList.push('四');
            this.cellList = [
              '建行北京新航城支行',
              '建行北京朝阳北路支行',
              '建行北京双桥支行',
              '建行北京双桥南路支行',
              '建行北京东二环中路支行',
            ]
            break;
          case 4:
            this.coordinateList1.splice(1, 1);
            this.coordinateList1.splice(3, 1);
            this.coordinateList1.splice(6, 1);
            this.listShow = false;
            this.navList = ['一'];
            this.cellList = ['中国建设银行总行'];
          default:
            break;
        }
        
      }, 100)
    },
    sure() {
      this.coordinateList1.splice(2, 1);
      this.coordinateList1.splice(5, 1);
      this.coordinateList1.splice(7, 1);
      this.huiShow = false;
    },
    showTips(index) {
      this.coordinateList1.forEach((item) => {
        item.show = false;
      })
      this.coordinateList1[index].show = true;
      console.log(index)
    },
    chaVal(){
      console.log(this.value1)
      this.coordinateList1 = [
        {
          img: this.value1 == 0 ? img1 : img3,
          style: {
            top: '200px',
            left: '100px'
          },
          show: false,
          status: '已抢单',
          type: this.value1 == 0 ? 1 : 2
        },
        {
          img: this.value1 == 0 ? img2 : this.value1 == 2 ? img4 : img5,
          style: {
            top: '240px',
            left: '160px'
          },
          show: false,
          status: '待完成',
          type: 2
        },
        {
          img: this.value1 == 0 ? img1 : this.value1 == 0 ? img5 : img4,
          style: {
            top: '320px',
            left: '80px'
          },
          show: false,
          status: '待完成',
          type: this.value1 == 0 ? 1 : 2
        },
        {
          img: this.value1 == 0 ? img2 : img6,
          style: {
            top: '236px',
            left: '286px'
          },
          show: false,
          status: '已抢单',
          type: 2
        },
        {
          img: this.value1 == 0 ? img2 : img6,
          style: {
            top: '400px',
            left: '100px'
          },
          show: false,
          status: '已抢单',
          type: 2
        },
        {
          img: this.value1 == 0 ? img1 : img5,
          style: {
            top: '300px',
            left: '300px'
          },
          show: false,
          status: '待完成',
          type: this.value1 == 0 ? 1 : 2
        },
        {
          img: this.value1 == 0 ? img2 : this.value1 == 2 ? img4 : img5,
          style: {
            top: '344px',
            left: '208px'
          },
          show: false,
          status: '待完成',
          type: 2
        },
        {
          img: this.value1 == 0 ? img1 : img3,
          style: {
            top: '500px',
            left: '102px'
          },
          show: false,
          status: '已抢单',
          type: this.value1 == 0 ? 1 : 2
        },
        {
          img: this.value1 == 0 ? img2 : this.value1 == 2 ? img5 : img4,
          style: {
            top: '460px',
            left: '198px'
          },
          show: false,
          status: '已抢单',
          type: 2
        },
        {
          img: this.value1 == 0 ? img1 : img4,
          style: {
            top: '500px',
            left: '188px'
          },
          show: false,
          status: '待完成',
          type: this.value1 == 0 ? 1 : 2
        },
      ]
    },
    goTo(url) {
      this.$router.push({name: url});
    },
    go: function(type) {
      if (type == '已抢单') {
        // this.$router.push({path: '/shangParticulars/1'});
        this.$router.push({name: 'grabSingleYi'});
      } else {
        this.$router.push({name: 'applyQueryResult'});
      }
    },

    handler({ BMap, map }) {
      //默认经纬度
      this.center.lng = 113.27147;
      this.center.lat = 23.131669;
      this.zoom = 18;
    },
    //坐标截取
    subSSS(row, xy) {
      var indexRow = row.split(",");
      return indexRow[xy];
    },
    infoWindowClose(marker) {
      this.markers[marker].showFlag = false;
    },
    infoWindowOpen(marker) {
      this.markers[marker].showFlag = true;
    },
    //点击打开客群筛选上拉菜单
    opencustomer(){
      this.huiShow=true;
    },
    //客群筛选重置按钮
    keQunResetBut(){
      this.customerType=[];//客群类型选中
      this.platform=[];//客群平台选中
      this.clientId= null;//小微企业客户群编号
      this.clientName= '';//小微企业客户群名称
      this.tagId= null;//标签id
      this.tagName= '';//标签名称
      this.clientHierarchy= '';//客群层级
      this.tagHierarchy= '';//标签层级
    },
  },

  //计算属性
  computed: {},

  components: {
    BottomBar
  }
};
</script>

<style lang="scss" scoped>
.select-box{
  height: 300px;
  position:absolute ;
  bottom:50px;
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
    justify-content: space-between;
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
.map-content{
  position: relative;
  img{
    display: block;
    width: 100%;
  }
  .map-bg{
    width: 375px;
  }
  .popup-box{
    width: 150px;
    padding: 8px;
    padding-left: 12px;
    background-color: rgba(255, 255, 255, .8);
    z-index: 2;
    transform: translate(-50%, -140%);
    font-size: 14px;
  }
  .mg-top{
    line-height: 32px;
  }
  .bank{
    display: flex;
    align-items: center;
  }
  .bank-img{
    width: 22px;
    height: 18px;
  }
  .coordinate{
    position: absolute;
    width: 19px;
    height: 28px;
    z-index: 1;
  }
}
  .hui_Action_ke .van-action-sheet__header{
    line-height: 40px;
    font-size: 15px;
    background-color: #379BF6;
    color: white;
  }
   .hui_Action_ke .van-icon{
    color: white;
  }
  .keQunTabes .van-icon-success{
    width: 14px;
    height:14px;
    line-height: 14px;
    border-radius: 0px;
    margin-top:5px;
    border:1px solid #737373
  }
  .keQunTabes .van-checkbox__label{
      color:#737373;
  }
</style>
<style lang="scss" scoped>
.region-modulespan{
  float: left;
}
.region-module-icon{
  width: 11px;
  float: left;
  margin: 8px 5px;
}
.dy-icon {
  position: relative;
  top: 3px;
  width: 13px;
  margin-right: 3px;
}
.span-dw {
  color: #ffffff;
  font-size: 15px;
}
.van-cell {
  line-height: 28px !important;
}
.vbtn-small {
  margin: 10px 5px 0px 0px;
  border-radius: 3px;
  height: 28px;
  line-height: 28px;
}
.van-search__content {
  height: 28px;
  line-height: 28px;
}
.van-search .van-cell {
  padding: 0px 8px 0px 0px;
}
.menu-sc {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 46px;
  line-height: 46px;
  text-align: center;
  background-color: #379bf6;
  z-index: 1;
}
.img_return{
    position: absolute;
    top: 17px;
    left: 12px;
    height: 12px;
    width: 12px;
    z-index: 100;
    border-top: 1px solid #ffffff;
    border-left:  1px solid #ffffff;
    transform: rotate(-45deg);
}
.region-module{
  position: fixed;
  top: 58px;
  left: 10px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #ffffff;
  border:solid 0.5px #eeeeee;  
  border-radius: 8px;
  z-index: 1;
  padding:0px 15px 0px 10px;
}
.module-p{
  float:left;
  margin: 0;
  font-size: 14px;
  color: #333;
}
.region-slectModule{
  position: fixed;
  top: 58px;
  right: 10px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #ffffff;
  border:solid 0.5px #eeeeee;  
  border-radius: 8px;
  z-index: 1;
  padding:0px 10px 0px 8px;
}
#slectModule .van-dropdown-item--down {
    width: 170px !important;
}
#near {
  width: 100%;
  height: 100%;
  position: absolute;
}
#container {
  width: 100%;
  height: 100%;
  height: 736px;
  float: left;
}
.vv-search {
  width: auto;
  // min-width: 60%;
  float: left;
  line-height: 28px;
  height: 28px;
  margin: 11px 0px 0px 30px;
  padding: 0px;
  border-radius: 15px;
}
 //惠点通上拉菜单
  .hui_Action_ke{
    position:absolute ;
    bottom:50px;
  }
  .hui_bac{
    font-size: 13px;
    height: auto;
    padding:10px 10px;
  }
  .keQunRow{
    margin-bottom:13px;
  }
  .keQunText{
    text-align: right;
    color:#737373;
    margin-top:5px;
  }
  .keQunTabes{
    width:100%;
  }
  .keQunCheckbox{
    float: left;
    height: 26px;
    margin-right: 19px;
  }
  .keQunField{
    width:90%;
    height: 24px;
    line-height: 24px;
    font-size: 13px;
    padding:0px 10px;
    border:1px solid #737373
  }
  .keQunCengField{
    width:98%;
    height: 24px;
    line-height: 24px;
    font-size: 13px;
    padding:0px 10px;
    border:1px solid #737373
  }
  .keQunCengBut{
    width:53px;;
    height: 24px;
    line-height: 24px;
    padding:0px;
    font-size: 13px;
  }
  .keQunButRow{
    height: 24px;
    line-height: 24px;
    margin-bottom: 15px;
  }
  .keQunButLeft .keQunCengBut{
    border:1px solid;
    float: right;
  }
  //结束
//覆盖底部导航
.botBarFuGaiDiv{
  width:20%;
  position: fixed;
  bottom:0px;
  left:40%;
  z-index:1;
}
.botBarFuGai{
  width:100%;
  height: 50px;
}
</style>
