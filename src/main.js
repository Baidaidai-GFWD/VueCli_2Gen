//定义了整个项目文件的结构和需求

import Vue from 'vue'  //使用vue
import TopBanner from './TopBanner.vue'  //导入首页Banner导航栏
import router from './router/router.js'  //导入路由表
import layui from 'layui';
import '../public/layui/css/layui.css'

Vue.config.productionTip = false //关闭productionTip开发版本的警告
Vue.use(layui)

new Vue({  //应用了第一个引入的Vue
  el:'#app',
  router,  //应用了第三个引入的router
  layui,
  render: h => h(TopBanner)  //应用了第二个引入的App，目的是渲染虚拟DOM
})