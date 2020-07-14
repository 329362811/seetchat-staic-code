import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import {Grid, GridItem} from 'vant'
//import {Grid, GridItem} from 'vant'
import BaiduMap from 'vue-baidu-map'
//baidu map
Vue.use(BaiduMap, {
  ak: '0ZNLmv4GF8cGYgL6mQO2CwUUFS1VFLMU'
})

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueSlideBar from 'vue-slide-bar';
Vue.component('vue-slide-bar', VueSlideBar)

//引入uant UI
Vue.use(Vant);
Vue.use(Grid);
Vue.use(GridItem)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
