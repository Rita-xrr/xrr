<template>
  <div id="app">
    test
    <!-- 放置顶部header区域 -->
    <mt-header fixed title="vue练手"></mt-header>
    <!-- 中间路由router-view区域 -->
    <router-view/>
    <!-- 底部tabbar区域 -->
   <nav class='mui-bar mui-bar-tab'>
     <a class='mui-tab-item mui-active' href="#tabbar">
       <span class='mui-icon mui-icon-home'></span>
       <span class='mui-tab-label'>首页</span>
     </a>
      <a class='mui-tab-item ' href="#tabbar">
       <span class='mui-icon mui-icon-email'></span>
       <span class='mui-tab-label'>邮箱</span>
     </a>
      <a class='mui-tab-item ' href="#tabbar">
       <span class='mui-icon mui-icon-contact'></span>
       <span class='mui-tab-label'>内容</span>
     </a>
   </nav>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  padding-top:40px;
}
</style>
