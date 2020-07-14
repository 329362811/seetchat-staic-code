<template>
  <div id="app">
    <!--路由对应的页面-->
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">

//取消点击屏幕时，会出现的灰块
*{-webkit-text-size-adjust: 100%;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}

//取消a标签点击后出现闪动或灰色背景
a{
  -webkit-tap-highlight-color:rgba(255,0,0,0);
  transition: background 0.2s ease 0s;
}

body {
  color: #333;
  font-family: "Hiragino Sans GB", "Microsoft YaHei","WenQuanYi Micro Hei", sans-serif !important;
  -webkit-user-select: none;
  -webkit-overflow-scrolling : touch;
  overflow-x: hidden;
  background: #FFFFFF;
  //font-weight: lighter;
  //抗锯齿渲染   MacOs上有效
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
}
.content{
  padding-top:46px;
}
.van-nav-bar--fixed{
  z-index: 999 !important;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/  
	::-webkit-scrollbar  
	{  
	    width: 0px;    
	    background-color: #FFFFFF;  
	}  

	/*定义滚动条轨道 内阴影+圆角*/  
	::-webkit-scrollbar-track  
	{  
	    border-radius: 10px;  
	    background-color: #FFFFFF;  
	}  

	/*定义滑块 内阴影+圆角*/  
	::-webkit-scrollbar-thumb  
	{  
	    border-radius: 10px;
	    background-color: #FFFFFF;  
	}  
	/*定义最上方和最下方的按钮*/
	::-webkit-scrollbar-button{
	     background-color: #FFFFFF;
	     border:1px solid #FFFFFF;
	}
</style>
