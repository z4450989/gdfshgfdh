<template>
	<!-- 定义整个顶部的绿色部分 -->
	<div class="dingbu">
		<!-- 这里是logo -->
		<div class="tupian-tb">
			<img src="../../assets/img/logo.png" id="sdfsdf">
			<h1>Vue.js</h1>
		</div>

		<!-- 清除浮动 -->
		<div class="qcfd"></div>
		
		<!-- 这里是imput -->
   	 	<div class="soussuo">
   	 		<span><img src="../../assets/img/search.png"></span><input type="text" name="">
		</div>
		
		<!-- 这里是首页点击跳转位置	 -->
		<div class="dingbu-b">
			<ul>
				<li><router-link to="/topic/all">首页</router-link></li>
				<li><router-link to="/topic/jiaohu">交互教程</router-link></li>
				<li><router-link to="/topic/weixin">微信公众号</router-link></li>
				<li><router-link to="/topic/vueer">VUE 2.0</router-link></li>
			</ul>
			<ul>
				<li><router-link to="/topic/cankao">参考资料</router-link></li>
				<li><router-link to="/topic/route">router-linkPI</router-link></li>
				<li><router-link to="/topic/guanyu">关于</router-link></li>
				<li><router-link to="/topic/zhuce">注册</router-link></li>
				<li><router-link to="/topic/denglu">登录</router-link></li>
			</ul>
		</div>

	</div>
</template>
<script>
// import Vue from 'vue'



// console.log('sdf');
</script>
<style type="text/css">
	.dingbu{
		width:100%;
		background:#1c6132;
	}
	
	.tupian-tb{
		padding: 0.5rem 0.0rem 0rem 2.5rem;
	}
	.tupian-tb>img{
		width:5.0rem;
		height:5.0rem;
		float: left;
	}
	.tupian-tb>h1{
		float: left;
		line-height: 5rem;
		height:5.0rem;
		/*background:yellow;*/
		color:white;

	}

	.soussuo{
		height:2.5rem;
		width:25.5rem;
		background:#4f9639;
		/*opacity:0.4;*/
		margin-top:1rem;
		border-radius:1.5rem;
		padding: 0.25rem;
		margin-left:2.5rem;
	}
	.soussuo>span>img{
		width:2.5rem;
		height:2.5rem;
		float:left;
		/*margin-top:0.25rem;
		margin-left:0.25rem;*/
	}
	.soussuo>input{
    	font-size: 1.5rem;
		width:20rem;
		height:2.5rem;
		/*line-height: 5.5rem;*/
		float:left;
		border: none;
		outline:none;
		background:none;
	}
	
	.dingbu-b>ul{
		height:5rem;
		line-height: 5rem;
	}
	.dingbu-b li{
		color:white;
		font-size: 1.3rem;
		display: inline-block;
		/*background:red;*/
		margin-left:5%;
	}
	
</style>
