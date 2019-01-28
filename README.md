# myvue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 制作首页APP组件
1. 制作header区域，使用Mint-ui中的header组件
2. 底部Tabbar区域，使用MUI的Tabbar.html中的组件代码 
    --在制作购物车小图标的时候操作相对多一些
    --先将扩展图标的CSS样式，拷贝到项目中
    --再把扩展字体的ttf文件放到项目中
    --为 购物车 小图标 添加样式的类，（从相关HTML中找到）
    --如'mui-icon-extra mui-icon-extra-cart'
## 在中间区域放置一个路由的坑routerview，跳转路由来填这个坑即展示路由匹配到的组件