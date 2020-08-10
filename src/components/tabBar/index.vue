<template>
    <van-tabbar class="vanTabbar" v-model="active">
    <van-tabbar-item
       v-for="(icon ,index) in iconList" :key='index'
       replace
       :to="icon.route"
       >
        <span v-show="index!=2">{{icon.name}}</span><!-- v-show="index!=0" -->
        <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.active : icon.normal"
        :class="[index==2 ? 'big' : '']"
        >
    </van-tabbar-item>
    </van-tabbar>
</template>

<script>

import icon1 from '../../../static/shouye.png'
import icon1_1 from '../../../static/shouye_hover.png'
import icon2 from '../../../static/guanzhu_index.png'
import icon2_1 from '../../../static/guanzhu_index_hover.png'
import icon3 from '../../../static/fabuxuqiu.png'
import icon3_1 from '../../../static/fabuxuqiu.png'
import icon4 from '../../../static/xiaoxi_index.png'
import icon4_1 from '../../../static/xiaoxi_index_hover.png'
import icon5 from '../../../static/wode.png'
import icon5_1 from '../../../static/wode_hover.png'


 export default {

  name : 'tabBar',

  data() {
    return {
      active: 0,
      iconList : [
        {
        normal: icon1,
        active: icon1_1,
        name : '首页',
        route : '/index'
        },
        {
        normal: icon2,
        active: icon2_1,
        name : '关注',
        route : '/index2'
        },
        {
        normal: icon3,
        active: icon3_1,
        name : '发布需求',
        route : '/index3'
        },
        {
        normal: icon4,
        active: icon4_1,
        name : '消息',
        route : '/settlement',//'/index4'
        },
        {
        normal: icon5,
        active: icon5_1,
        name : '我的',
        route : '/index5'
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
  .vanTabbar img{
    height: 25px;
  }
  .vanTabbar img.big{
    width: 72px;
    height: 72px;
    position:relative;
    top: -15px;
  }
  
</style>