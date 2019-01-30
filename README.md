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
3. 在中间区域放置一个路由的坑routerview，跳转路由来填这个坑即展示路由匹配到的组件
## 改造tabbar为router-link
## 设置路由高亮
## 点击tabbar 中的路由链接，展示对应的路由组件
## 制作首页轮播图布局
## 加载首页轮播图数据
1.获取数据，使用axios获取数据
2.自己本地模拟假数据，放在static下
##访问服务器文件，应该把 json文件放在最外层的static文件夹，
##这个文件夹是vue-cli内置服务器向外暴露的静态文件夹
3.使用get方式获取，将数据保存在data上
##一定要用get的请求方式，post就会404
4.使用v-for渲染每个item图片项，同时绑定key值
5.图片要宽高百分百
##改造九宫格区域样式