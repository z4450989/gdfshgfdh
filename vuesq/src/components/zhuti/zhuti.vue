<template>
  <div id="zhuti">
	<!-- 这里是搜索栏位置的的 -->
  	<mynav></mynav>
  	<!-- 这里是选项卡位置 -->
  	<mydhl></mydhl>

  	<!-- 主题位置 -->
    <mydhla></mydhla>
    <!-- <router-view></router-view> -->
   
  </div>
</template>

<script>
import mydhl from '@/components/my-dhl/my-dhl'
import mynav from '@/components/my-nav/my-nav'
import mydhla from '@/components/my-dhla/my-dhla'

console.log(mydhl);

  // console.log(mydhl);
  export default {
    // 这里进行组件注册标签名字
    components: {
      mydhl,
      mynav,
      mydhla
    },
    created () {
      // console.log('这里有调用吗1');
      // console.log(this.$route)
    }
  }
</script>

<style>

</style>
