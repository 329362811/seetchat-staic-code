import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
    mode : 'hash',//路由模式 需要本地预览 禁止用history
    routes: [

      //通配路由
      {
        path: '*',
        redirect: { name: 'index' }
      },

      //主页
      {
        name: 'index',
        path: '/index',
        component:  () => import('@/pages/index'),
        meta: {
         title: '首页'
        },
      },

      {
        name: 'index2',
        path: '/index2',
        component:  () => import('@/pages/index2'),
        meta: {
         title: '关注'
        },
      },
      

      {
        name: 'index3',
        path: '/index3',
        component:  () => import('@/pages/index3'),
        meta: {
         title: '发布需求'
        },
      },
      {
        name: 'releaseSuccess',
        path: '/releaseSuccess',
        component:  () => import('@/pages/releaseSuccess'),
        meta: {
         title: '发布需求成功'
        },
      },

      {
        name: 'index4',
        path: '/index4',
        component:  () => import('@/pages/index4'),
        meta: {
         title: '消息'
        },
      },

      {
        name: 'index5',
        path: '/index5',
        component:  () => import('@/pages/index5'),
        meta: {
         title: '我的'
        },
      },
      {
        name: 'demandDetails',
        path: '/demandDetails',
        component: () => import('@/pages/demandDetails'),
        meta: {
          title:'需求详情'
        }
      },
      {
        name: 'settlement',
        path: '/settlement',
        component: () => import('@/pages/settlement'),
        meta: {
          title:'结算'
        }
      },
      {
        name: 'settlementAgreement',
        path: '/settlementAgreement',
        component: () => import('@/pages/settlementAgreement'),
        meta: {
          title:'用户协议'
        }
      },
      {
        name: 'personalData',
        path: '/personalData',
        component:  () => import('@/pages/personalData'),
        meta: {
         title: '编辑资料'
        },
      },
      {
        name: 'withdrawDeposit',
        path: '/withdrawDeposit',
        component:  () => import('@/pages/withdrawDeposit'),
        meta: {
         title: '提现'
        },
      },
      {
        name: 'myNeed',
        path: '/myNeed',
        component:  () => import('@/pages/myNeed'),
        meta: {
         title: '我的需求'
        },
      },
      {
        name: 'accountDetails',
        path: '/accountDetails',
        component:  () => import('@/pages/accountDetails'),
        meta: {
         title: '账户明细'
        },
      },


		
    ]
  })
