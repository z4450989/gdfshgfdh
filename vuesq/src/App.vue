<template>
  <div id="app">
    <!-- <zhuti></zhuti> -->
    <!-- 这个位置是用来定义路由请求后文件的显示位置 -->

    <!-- <jinru></jinru> -->
    <keep-alive>
       <router-view></router-view>
   </keep-alive>
  </div>
</template>

<script>
import zhuti from '@/components/zhuti/zhuti'
// console.log(zhuti);


  // console.log(mydhl);
  export default {
    // 这里进行组件注册标签名字
    components: {
      
    },
    created () {
      // console.log('这里有调用吗1');
      // console.log(this.$route)
    }
  }
</script>

<style>

</style>
