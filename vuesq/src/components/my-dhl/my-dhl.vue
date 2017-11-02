<template>
	<div id="mydhl">
		<div class="dhl-a">
			<ul>
				<li><router-link to="/all">全部</router-link></li>
				<li><router-link to="/good">精华</router-link></li>
				<li><router-link to="/share">weex</router-link></li>
				<li><router-link to="/ask">分享</router-link></li>
				<li><router-link to="/job">问答</router-link></li>
				<li><router-link to="/test">招聘</router-link></li>
			</ul>
		</div>
	</div>
</template>
<script>  

</script>
<style type="text/css">
	#mydhl{
		margin-top:2rem;
	}
	.dhl-a>ul{
		width:100%;
		height:3.8rem;
		background:#f6f6f6;
	}
	.dhl-a>ul>li{
		font-size: 1.6rem;
		height:3.8rem;
		float: left;
		line-height: 3.8rem;
		color:#2c8d0e;
		width:16.66%;
		text-align:center;
		/*margin-left:2.8rem;*/
	}
	.dhl-a>ul>li a.router-link-active{
		color: white;
		/*display:block;*/
		background: #2c8d0e;
	}
</style>
