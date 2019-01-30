<template>
<div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
        <mt-swipe-item  v-for='(item,index) in swiperList' :key='index'>
            <img :src='item.img' alt=''>
        </mt-swipe-item>
        
    </mt-swipe>
    <!-- 九宫格到六宫格的改造过程 -->

    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to='/home/newslist'>
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">news</div>
                        </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link >
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div>
                        </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link>
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div>
                        </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link>
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div>
                        </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link>
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div>
                        </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link>
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div>
                        </router-link></li>
		        </ul> 
</div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            swiperList:[]//保存轮播图的数组
        }
    },
    created(){
        this.getSwipe();
    },
    methods:{
        getSwipe(){//获取轮播图据的方法
            this.$axios.get('http://localhost:8080/static/swipe.json')
            .then(result=>{
               //console.log(result.data)
               // if(result.data.status==0){
                    //成功，保存数据
                    this.swiperList=result.data.message
               //     }
               //else{
                  // Toast('加载轮播图失败。。。')
               //}
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
<style scoped lang="scss">
.mint-swipe{height:200px;}
.mint-swipe-item { 
    /*使用sass的选择器 */
    &:nth-child(1){background-color:palevioletred;}
    &:nth-child(2){background-color: brown;}
    &:nth-child(3){background-color:grey;}
    img {
        width:100%;
        height:100%;
      }
    }
.mui-grid-view mui-grid-9{
    background-color: #fff;border:none;
}
.mui-grid-view mui-grid-9 mui-table-view-cell{
    border:none;
}
</style>
