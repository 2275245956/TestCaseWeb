import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ja'
import home  from '../views/Home'
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
    component:home
  }
]

const router = new VueRouter({
  routes
})

export default router
