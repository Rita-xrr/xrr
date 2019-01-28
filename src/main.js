// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//导入app组件
import App from './App'
//导入自定义路由模块
import router from './router'

Vue.config.productionTip = false


//导入Mint-ui
import MintUI from 'mint-ui'
//这里可以省略node_moudules这一层目录
import 'mint-ui/lib/style.css'
//将MintUI安装到vue中
Vue.use(MintUI)

//导入MUI的样式
import './lib/mui/css/mui.min.css'
//导入MUI中扩展图标样式，如购物车
import  './lib/mui/css/icons-extra.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
