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
    <BottomBar /><!--覆盖底部导航-->
    <div class="botBarFuGaiDiv">
      <van-row >
        <van-col span="5" class="botBarFuGai" @click="opencustomer"></van-col>
      </van-row>
    </div>
    <!--客户筛选右侧弹出菜单-->
    <van-popup class="right_popup_bac" :overlay="false" v-model="huiPopupShow" position="right">
      <!--菜单头部-->
      <div class="headerTitleLan">
        <div class="headerIcon"><van-icon size="20px" name="arrow-left"/></div>
        <div class="headerTitle">客户筛选</div>
      </div>

      <div class="right_popup_mes_bac">
        <van-row class="keQunRow">
          <van-col  span="5">
            <div class="keQunText">距离：</div>
          </van-col>
          <van-col span="19" >
            <div class="keQunTabes"> 
              <van-checkbox-group v-model="distance" >
                <van-checkbox id="yuanCheckbox" class="keQunCheckbox" v-for="item in distanceS" :key="item.value" :name="item.name" >
                  {{ item.name }}
                </van-checkbox>
              </van-checkbox-group>
            </div>
          </van-col>
        </van-row>
        <van-row  class="keQunRow" @click="selectClick">
          <van-col  span="5">
            <div class="keQunText">行业：</div>
          </van-col>
          <van-col span="12" >
            <div class="keQunTabes"> 
              <van-field class="keQunCengField" v-model="industry"/>
            </div>
          </van-col>
          <van-col  span="7">
            <van-button class="keQunCengBut" type="info">选择</van-button>
          </van-col>
        </van-row>
        <van-row  class="keQunRow">
          <van-col  span="5">
            <div class="keQunText">注册资本：</div>
          </van-col>
          <van-col span="6" >
            <div class="keQunTabes"> 
              <van-field class="keQunCengField" v-model="minimumMoney"/>
            </div>
          </van-col>
          <van-col span="2" >
            <div style="width:15px;height:12px;border-bottom:1px solid;margin:auto"></div>
          </van-col>
          <van-col span="6" >
            <div class="keQunTabes"> 
              <van-field class="keQunCengField" v-model="maxMoney"/>
            </div>
          </van-col>
          <van-col  span="5" style="padding-left:5px;line-height:24px;" > 万元</van-col>
        </van-row>
        <van-row class="keQunRow">
          <van-col  span="5">
            <div class="keQunText">客户标识：</div>
          </van-col>
          <van-col span="19" >
            <div class="keQunTabes"> 
              <van-checkbox-group v-model="identification" >
                <van-checkbox id="fangCheckbox" class="keQunCheckbox" v-for="item in identificationS" :key="item.value" :name="item.name" >
                  {{ item.name }}
                </van-checkbox>
              </van-checkbox-group>
            </div>
          </van-col>
        </van-row>
        <van-row class="keQunRow">
          <van-col  span="5">
            <div class="keQunText">纳税信用：</div>
          </van-col>
          <van-col span="19" >
            <div class="keQunTabes"> 
              <van-checkbox-group v-model="credit" >
                <van-checkbox id="fangCheckbox" class="keQunCheckbox" v-for="item in creditS" :key="item.value" :name="item.name" >
                  {{ item.name }}
                </van-checkbox>
              </van-checkbox-group>
            </div>
          </van-col>
        </van-row>
        <van-row class="keQunRow">
          <van-col  span="5">
            <div class="keQunText">客户需求：</div>
          </van-col>
          <van-col span="19" >
            <div class="keQunTabes"> 
              <van-checkbox-group v-model="demand" >
                <van-checkbox id="fangCheckbox" class="keQunCheckbox" v-for="item in demandS" :key="item.value" :name="item.name" >
                  {{ item.name }}
                </van-checkbox>
              </van-checkbox-group>
            </div>
          </van-col>
        </van-row>
        <van-row class="keQunRow">
          <van-col  span="5">
            <div class="keQunText">客户分层：</div>
          </van-col>
          <van-col span="19" >
            <div class="keQunTabes"> 
              <van-checkbox-group v-model="hierarchy" >
                <van-checkbox id="fangCheckbox" class="keQunCheckbox" v-for="item in hierarchyS" :key="item.value" :name="item.name" >
                  {{ item.name }}
                </van-checkbox>
              </van-checkbox-group>
            </div>
          </van-col>
        </van-row>

      </div>

      <van-row class="keQunButRow">
        <van-col  span="11" class="keQunButLeft">
            <van-button class="keQunCengBut" type="info" @click="closeHuiPopupShow">确认</van-button>
        </van-col>
        <van-col span="2" > </van-col>
        <van-col span="11" >
            <van-button class="keQunCengBut" type="primary" @click="cancelPopupShow">取消</van-button>
        </van-col>
      </van-row>
      
    </van-popup>

    <!-- 机构选择 -->
    <van-action-sheet class="select-box" :overlay="false" :round="false" :close-on-click-overlay="false" v-model="listShow" title="行业选择">
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
      //惠点通右侧弹出菜单使用
      huiPopupShow:true,
      distance: [],//距离选中
      distanceS: [//距离数据
        { name: '500米', value: 1 },
        { name: '1公里', value: 2 },
        { name: '3公里', value: 3 },
      ],
      industry: '',//行业
      minimumMoney: null,//注册资本最低
      maxMoney: null,//注册资本最高
      identification: [],//客户标识
      identificationS:[//客户标识数据
        { name: '工商小散客户', value: 1 },
        { name: '我行客户', value: 2 },
        { name: '我行小散客户', value: 3 },
        { name: '非不良资产核销客户', value: 4 },
        { name: '非黑名单客户', value: 5 },
        { name: '高新技术企业', value: 6 },
        { name: '小微快贷客户', value: 7 },
        { name: '科创企业', value: 8 },
        { name: '科技型企业', value: 9 },
        { name: '我行缴税企业', value: 10 },
        { name: '持有国家高新技术企业证书', value: 11 },
      ],
      credit:[],//纳税信用
      creditS: [//纳税信用数据
        { name: 'A', value: 1 },
        { name: 'B', value: 2 },
        { name: 'C', value: 3 },
        { name: 'D', value: 4 },
      ],
      demand: [],//客户需求
      demandS: [//客户需求数据
        { name: '强', value: 1 },
        { name: '中', value: 2 },
        { name: '弱', value: 3 },
      ],
      hierarchy: [],//客户分层
      hierarchyS: [//客户分层数据
        { name: '优质', value: 1 },
        { name: '良好', value: 2 },
        { name: '一般', value: 3 },
      ],
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
        '房地产业',
        '租赁和商务服务业',
        '科学研究和技术服务业',
        '水利，环境和公共设施管理业',
        '居民服务、服务和其他服务业',
        '教育'
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
          case 0:
            this.navList.push('一');
            this.cellList = [
              '房地产业',
              '租赁和商务服务业',
              '科学研究和技术服务业',
              '水利，环境和公共设施管理业',
              '居民服务、服务和其他服务业',
              '教育'
            ]
            break;
          case 1:
            this.navList.push('二');
            this.cellList = [
              '研究和实验发展',
              '专业服务技术业',
              '科技推广和应用服务业'
            ]
            break;
          case 2:
            this.navList.push('三');
            this.cellList = [
              '技术推广服务',
              '科技中介服务',
              '其他科技推广和应用服务业'
            ]
            break;
          case 3:
            this.navList.push('四');
            this.cellList = [
              '农业技术推广服务',
              '生物技术推广服务',
              '新材料技术推广服务',
              '节能技术推广服务',
              '其他技术推广服务',
            ]
            break;
          case 4:
            this.coordinateList1.splice(1, 1);
            this.coordinateList1.splice(3, 1);
            this.coordinateList1.splice(6, 1);
            this.listShow = false;
            this.navList = ['一'];
            this.cellList = [
              '房地产业',
              '租赁和商务服务业',
              '科学研究和技术服务业',
              '水利，环境和公共设施管理业',
              '居民服务、服务和其他服务业',
              '教育'
            ];
          default:
            break;
        }
        
      }, 100)
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
    //点击打开客户筛选右侧弹出菜单
    opencustomer(){
      this.huiPopupShow=true;
    },
    //点击确定关闭页面
    closeHuiPopupShow(){
      this.coordinateList1.splice(3, 1);
      this.coordinateList1.splice(4, 1);
      this.coordinateList1.splice(5, 1);
      this.huiShow = false;
      this.huiPopupShow=false;
    },
    cancelPopupShow() {
      this.huiShow = false;
      this.huiPopupShow=false;
    }
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
  .right_popup_mes_bac #yuanCheckbox .van-icon-success{
    width: 14px;
    height:14px;
    line-height: 14px;
    margin-top:3px;
    border:1px solid #737373
  }
  .right_popup_mes_bac #fangCheckbox .van-icon-success{
    width: 14px;
    height:14px;
    line-height: 14px;
    border-radius: 0px;
    margin-top:3px;
    border:1px solid #737373
  }
</style>
<style lang="scss" scoped>
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
//客户筛选右侧弹出菜单
.right_popup_bac{
  height:93%;
  width: 85%;
  position: fixed;
  color:#737373;
  top: 0px !important;
  -webkit-transform: translate3d(0,0%,0) !important;
  transform: translate3d(0,0%,0) !important;
}
.headerTitleLan{
  width:100%;
  height:40px;
  line-height:40px;
  background-color:#379BF6;
  color:white;
}
.headerIcon{
  float: left;
  width:10%;
  padding-left: 10px;
  padding-top: 3px;
}
.headerTitle{
  float: left;
  width:80%;
  text-align:center;
}
.right_popup_mes_bac{
  width: 100%;
  font-size: 12px;
  padding:15px 10px;
}
.keQunRow{
  margin-bottom:13px;
}
.keQunText{
  float: right;
    margin-top:1px;
}
.keQunCheckbox{
  float: left;
  margin-bottom:5px;
  margin-right:10px;
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
//覆盖底部导航
.botBarFuGaiDiv{
  width:20%;
  position: fixed;
  bottom:0px;
  left:80%;
  z-index:1;
}
.botBarFuGai{
  width:100%;
  height: 50px;
}
.keQunButRow{
  height: 24px;
  line-height: 24px;
  margin-bottom: 15px;
}
.keQunButLeft .keQunCengBut{
  float: right;
}
</style>
