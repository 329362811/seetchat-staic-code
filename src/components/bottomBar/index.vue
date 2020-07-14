<template>
    <van-tabbar v-model="active">
    <van-tabbar-item 
       v-for="(icon ,index) in iconList" :key='index'
       replace
       :to="icon.route"
       >
        <!-- <span v-show="index!=0">{{icon.name}}</span> -->
        <span>{{icon.name}}</span>
        <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.active : icon.normal"
        :class="index==0&&props.active ? 'big' : ''"
        >
    </van-tabbar-item>
    </van-tabbar>

</template>

<script>

import icon1_1 from '../../../src/assets/images/48/Myunselected@2x.png'
import icon1 from '../../../src/assets/images/huidiantong/1_0002s_0004.png'
import icon2_1 from '../../../src/assets/images/48/Myunselected@2x.png'
import icon2 from '../../../src/assets/images/huidiantong/1_0002s_0005.png'
import icon3_1 from '../../../src/assets/images/huidiantong/1_0002s_0001.png'
import icon3 from '../../../src/assets/images/huidiantong/1_0002s_0003.png'
import icon4_1 from '../../../src/assets/images/huidiantong/1_0002s_0000.png'
import icon4 from '../../../src/assets/images/huidiantong/1_0002s_0007.png'
import icon5_1 from '../../../src/assets/images/huidiantong/1_0002s_0002.png'
import icon5 from '../../../src/assets/images/huidiantong/1_0002s_0006.png'

 
 export default {

  name : 'tabBar',

  data() {
    return {
      active: 0,
      iconList : [
        {
        normal: icon1,
        active: icon1_1,
        name : '宏观经济',
        route : '/index4/macroeconomics'
        },
        {
        normal: icon2,
        active: icon2_1,
        name : '经营数据',
        route : '/index4/businessData'
        },
        {
        normal: icon3,
        active: icon3_1,
        name : '客群筛选',
        route : '/index4/customerGroupScreening'
        },
        {
        normal: icon4,
        active: icon4_1,
        name : '我行机构',
        route : '/index4/ourInstitution'
        },
        {
        normal: icon5,
        active: icon5_1,
        name : '客户筛选',
        route : '/index4/customerScreening'
        },
      ]
    }
  },

  //数据预加载
  created : function(){

    this.setActive();

  },

  //声明方法
  methods : {
    
    setActive : function(){
       let path = this.$route.path;
       let index = this.iconList.findIndex(res=>(res.route==path))
       this.active = index;
    }
   
    

  },


 }
</script>

<style lang="scss" scoped>
// scoped 表示私有样式
img.big{
    width: 32px;
    height: 32px;
}
.van-tabbar-item{
  color: #1989fa !important;
}
.van-tabbar-item--active {
    color: #7d7e80 !important;
}
</style>