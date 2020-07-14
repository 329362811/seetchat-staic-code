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
      <img class="dy-icon" src="../../assets/images/huidiantong/1_0001s_0003.png" alt />
      <span class="span-dw">思明区</span>
    </div>
    <div class="region-module" v-show="value1==0">
      <span class="region-modulespan" style="margin-right:20px;">
        <img class="region-module-icon" src="../../assets/images/huidiantong/1_0001s_0009.png" alt />
        <p class="module-p">我行</p>
      </span>
      <span class="region-modulespan">
        <img class="region-module-icon" src="../../assets/images/huidiantong/1_0001s_0008.png" alt />
        <p class="module-p">非我行</p>
      </span>
    </div>

    <div class="region-module" v-show="value1==1">
      <span class="region-modulespan" style="margin-right:8px;">
        <img class="region-module-icon" src="../../assets/images/huidiantong/1_0001s_0006.png" alt />
        <p class="module-p">强</p>
      </span>
      <span class="region-modulespan" style="margin-right:8px;">
        <img class="region-module-icon" src="../../assets/images/huidiantong/1_0001s_0004.png" alt />
        <p class="module-p">中</p>
      </span>
      <span class="region-modulespan" style="margin-right:8px;">
        <img class="region-module-icon" src="../../assets/images/huidiantong/1_0001s_0007.png" alt />
        <p class="module-p">弱</p>
      </span>
      <span class="region-modulespan">
        <img class="region-module-icon" src="../../assets/images/huidiantong/1_0001s_0005.png" alt />
        <p class="module-p">无数据</p>
      </span>
    </div>

    <div class="region-module" style="padding:0px 3px;" v-show="value1==2">
      <span class="region-modulespan" style="margin-right:3px;">
        <img class="region-module-icon" src="../../assets/images/huidiantong/1_0001s_0006.png" alt />
        <p class="module-p">优质</p>
      </span>
      <span class="region-modulespan" style="margin-right:3px;">
        <img class="region-module-icon" src="../../assets/images/huidiantong/1_0001s_0004.png" alt />
        <p class="module-p">良好</p>
      </span>
      <span class="region-modulespan" style="margin-right:3px;">
        <img class="region-module-icon" src="../../assets/images/huidiantong/1_0001s_0007.png" alt />
        <p class="module-p">一般</p>
      </span>
      <span class="region-modulespan">
        <img class="region-module-icon" src="../../assets/images/huidiantong/1_0001s_0005.png" alt />
        <p class="module-p">无数据</p>
      </span>
    </div>

    <div class="map-content">
      <!-- <baidu-map id="container" :mapClick="false" :center="center" :zoom="zoom" @ready="handler">
        <div v-for="(marker, i) of markers" :key="i">
          <bm-marker :position="{lng: subSSS(marker.center,0), lat: subSSS(marker.center,1)}" @click="infoWindowOpen(i)" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
            <bm-info-window :width="60" :title="marker.pname" :show="marker.showFlag" @close="infoWindowClose(i)" @open="infoWindowOpen(i)">
              <div @click="cllFunc">
                <div class="fosize">客户需求：中</div>
                <div class="fosize">客户分层：一般</div>
              </div>
            </bm-info-window>
          </bm-marker>
        </div>
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      </baidu-map> -->

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
    <!-- 客户模式 -->
    <div class="region-slectModule">
      <van-dropdown-menu id="slectModule" :overlay="false" :style="{width: '100%', height: '30px'}">
        <van-dropdown-item v-model="value1" @change="chaVal" :options="option1" />
      </van-dropdown-menu>
    </div>
    <!--底部导航-->
    <BottomBar />
  </div>
</template>
<script>
//引入组件首字母大写
import BottomBar from "@/components/bottomBar";
import iconCar from '../../assets/images/huidiantong/1_0001s_0003.png'; //以import的方式导入图片文件
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
    showTips(index) {
      this.coordinateList1.forEach((item) => {
        item.show = false;
      })
      this.coordinateList1[index].show = true;
      console.log(index)
    },
    cllFunc(){
      this.$router.push("customerInfo");
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
  // height: 30px;
  // line-height: 30px;
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
</style>
