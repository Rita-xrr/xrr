<template>
<div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
.mint-swipe{height:200px;}
.mint-swipe-item { 
    /*使用sass的选择器 */
    &:nth-child(1){background-color:palevioletred;}
    &:nth-child(2){background-color: brown;}
    &:nth-child(3){background-color:grey;}
    }
</style>
