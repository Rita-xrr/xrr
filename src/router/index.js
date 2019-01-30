import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

//导入对应的路由组件
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import ShopcarContainer from '../components/tabbar/ShopcarContainer.vue'
import NewsList from '../components/news/NewsList.vue'
//导入axios
import axios from 'axios'
Vue.prototype.$axios=axios
export default new Router({
  //tabbar底部active时样式
  linkActiveClass:'mui-active',//覆盖默认的路由高亮的类router-link-active
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      //path与routerlink建立路由关系，routerlink to啥写啥
      path: '/home',//如果你的路由是/home，对应的组件就是下面的
      name: 'HomeContainer',//可以不写name
      component: HomeContainer
    },
    {path:'/member', component:MemberContainer},
    {path:'/shopcar', component:ShopcarContainer},
    {path:'/search', component:SearchContainer},
    {path:'/home/newslist',component:NewsList}
  ]
})
