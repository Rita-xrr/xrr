// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//导入app组件
import App from './App'
//导入自定义路由模块（自己的）,我们把组件的路由抽出来形成一个index.js（
import router from './router'

Vue.config.productionTip = false


// //全局导入Mint-ui
// import MintUI from 'mint-ui'
//这里可以省略node_moudules这一层目录
import 'mint-ui/lib/style.css'
//将MintUI安装到vue中
//Vue.use(MintUI)//把所有组件注册为全局的组件

//按需导入 Mint-ui中的组件
import { Header,Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入MUI的样式
import './lib/mui/css/mui.min.css'
//导入MUI中扩展图标样式，如购物车
import  './lib/mui/css/icons-extra.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
