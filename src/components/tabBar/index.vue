<template>
    <van-tabbar v-model="active">
    <van-tabbar-item
       v-for="(icon ,index) in iconList" :key='index'
       replace
       :to="icon.route"
       >
        <span v-show="index!=0">{{icon.name}}</span>
        <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.active : icon.normal"
        :class="[index==0 ? 'big' : '']"
        >
    </van-tabbar-item>
    </van-tabbar>
</template>

<script>

import icon1 from '../../../static/index.png'
import icon2 from '../../../static/2.png'
import icon2_1 from '../../../static/2-1.png'
import icon3 from '../../../static/3.png'
import icon3_1 from '../../../static/3-1.png'
import icon4 from '../../../static/4.png'
import icon4_1 from '../../../static/4-1.png'
import icon5 from '../../../static/5.png'
import icon5_1 from '../../../static/5-1.png'


 export default {

  name : 'tabBar',

  data() {
    return {
      active: 0,
      iconList : [
        {
        normal: icon1,
        active: icon1,
        name : 'home',
        route : '/index'
        },
        {
        normal: icon2,
        active: icon2_1,
        name : '商机',
        route : '/index2'
        },
        {
        normal: icon3,
        active: icon3_1,
        name : '贷款',
        route : '/index3'
        },
        {
        normal: icon4,
        active: icon4_1,
        name : '惠点通',
        route : '/index4'
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
  img.big{
    width: 32px;
    height: 32px;
  }
</style>
