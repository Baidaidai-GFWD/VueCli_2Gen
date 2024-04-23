//路由管理面板

//导入区域
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AboutView_Left from '../components/AboutView_Left/LeftSide.vue'
import AboutView_Right from '../components/AboutView_Right/RightSide.vue'

Vue.use(VueRouter) //不用管它，是Node.js语法   #无需管理

//定义路由路径
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  },
  //从下面的都是自定义导入的
  {
    path: '/about/left',
    name: 'about_left_path',
    component:AboutView_Left
  },
  {
    path: '/about/right',
    name: 'about_right_path',
    component:AboutView_Right
  }
]

//VueRouter是一个Node.js组件(插件)  #无需管理
const router = new VueRouter({  
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//导出至main.js备用  #无需管理
export default router
