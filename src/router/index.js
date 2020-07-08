import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ja'
import home  from '../views/Home'

import testCasePage from '../views/testCase/index'
import testPlanPage from '../views/testPlan/index'
import testRunPage from '../views/testRun/index'
import settingPage from '../views/Setting/index'

Vue.use(ElementUI, { locale })

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },{
    path: '/home',
    name: 'Home',
    redirect:"/testCaseIndex",
    component: home,
    children:[
      {
        path: '/testCaseIndex',
        name: 'testCaseIndex',
        component: testCasePage
      },
      {
        path: '/settingIndex',
        name: 'settingIndex',
        component: settingPage
      },
      {
        path: '/testPlanIndex',
        name: 'testPlanIndex',
        component: testPlanPage
      },
      {
        path: '/testRunIndex',
        name: 'testRunIndex',
        component: testRunPage
      }
    ]
  },
 
]

const router = new VueRouter({
  routes
})

export default router
