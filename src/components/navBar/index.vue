<template>
   <van-nav-bar
    :title="title"
    z-index="999"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    />
</template>

<script>


 
 export default {

  name : 'navBar',
  props : {
     title : String
  },
  //声明方法
  methods : {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  


 }
</script>

<style lang="scss" scoped>
// scoped 表示私有样式

</style>