<template>
<div class="container">
<ul>
<li v-for="item in topicList">
<!-- 点击链接，跳转到显示该话题详情的页面 -->

<!-- 这里显示的定义的是图片显示的内容 -->
<img v-lazy="item.author.avatar_url">
<!-- <span v-html=""></span>  -->
<span>{{ item.tab }}</span>
<span>
<router-link :to="'/all/'+item.tap" @click="cindex">{{ item.title }}</router-link>  
</span>

<!-- 这里定义的是时间 -->
<span>{{ item.last_reply_at }}</span>
</li>
</ul>  

<!-- 该位置有一个loading组件 -->
<router-view></router-view>
</div>
</template>
<script>
// 用来接受时间的数组
var sjsz=[];
// 定义一个时间对象用来处理时间数据
var shijian = new Date();
// 这里是用来定义时间的
var dysj;
// 定义变量用来管理当前点击的路径
var lujing;
// 引入请求数据的方法
import { getTopicList } from '@/common/js/getData'

export default {
data () {
return {
// 这里对象数组中数据进行返回，返回到item对象中
//这用法来自与对象中这样的设定 // item:data(); 
topicList: []
}
},
// 该位置created只实例化一遍
// 生命周期函数钩子，vue实例被生成后自动调用该函数,等于页面一加载就刷新
created () {
	
	// console.log('这里有调用吗?');
this._getTopicList()
},
methods: {
_getTopicList () { 
// 定义参数
let params = {
// 这里的.tab因该来源于，下面这段代码，是vue定义的
	 // {
  //     path: '/topic/:tab',
  //     component: dhla,
  //     children: [
  //       {
  //         path: ':id',
  //         component: huati
  //       }
  //     ]
  //   },
tab: this.$route.params.tab,
};
// console.log(params);
// console.log(this.$route);
// 之所以console.log('这里也被调用了3');被调用输出是因为这里的getTopicList调用，因为这里被调用的原因是created () {}函数钩子
// 在接受到getData.js文件里面returnf回来的数据时候，进行了then()调用,调用并把(res) => {}带有参数和值的函数传递到then函数里面进行处理。。如果处理错误那么就返回错误结果到catch
getTopicList(params).then((res) => {

if (res.status === 200 && res.data.data.length) {

// 这里把当前获取到的数据进行遍历里面的对象
for(var s=0;s<res.data.data.length;s++){

// 把截取的时间字符传入时间函数处理
clsj(res.data.data,s);

// 将数组里面的对象的img路径转化为img标签字符串
// 然后将img标签字符串替换掉原本的图片路径
res.data.data[s].author.avatar_url=res.data.data[s].author.avatar_url;

// 这里定义如果不同社区不同的显示
//这里的tab因为上面let params 定义好的参数的缘故，所以能比对
if(res.data.data[s].tab=='share'){
res.data.data[s].tab='精华';
res.data.data[s].tap='share';
}else if(res.data.data[s].tab=='ask'){
res.data.data[s].tab='分享';
res.data.data[s].tap='ask';
}else if(res.data.data[s].tab=='job'){
res.data.data[s].tab='问答';
res.data.data[s].tap='job';
}
}

// 这里是把获取的到data数据赋值到topicList数组中
this.topicList = res.data.data
console.log(res.data.data);

}
}).catch((error) => {
console.log(error)
})
},
cindex :function(){

}





},
watch: {
// 检测路由信息的变化，重新发送请求
$route: function (res) {
  console.log(res);
	// console.log('数据请求到了么');
// console.log(this.$route)
this._getTopicList()
}
}
}


// 定义一个处理时间的函数
function clsj(sja,s){
// 截取时间断
var jiequ=sja[s].last_reply_at.substr(0,19);
// 进行字符串的替换，获取到时间戳
jiequ=jiequ.replace("T"," ")

var timestamp2 = Date.parse(new Date(jiequ));
// timestamp2 = timestamp2 / 1000;
//2014-07-10 10:21:12的时间戳为：1404958872 
// console.log("时间戳为：" + timestamp2);

// 获取当前的时间戳,进行时间得得对比
// shijian
var timestamp3= Date.parse(new Date());

var timestamp5= timestamp3-timestamp2;

// console.log(timestamp5);

var miao=timestamp5/1000; //这里获取的是秒

var fen=miao/60; //这里获取的是分钟

var shi =fen/60; //这里获取的是小时

var tian=shi/24; //这里获取的是天

var yue=tian/12; //这里获取的是月

var fen1=parseInt(fen);
var shi1=parseInt(shi);
var tian1=parseInt(tian);
var yue1=parseInt(yue);

// 这里定义时间戳的处理
if(tian1>1 && tian<30){
dysj=tian1+'天前';
} 
if(tian1>30){
if(yue1>6){
dysj='半年前';
}else{
dysj=yue1+'月前';
}
}
if(shi1>1 && shi1<12){
dysj=shi1+'时前';
}
if(fen1<60){
dysj=fen1+'分钟前';
}
sja[s].last_reply_at=dysj;

}
</script>
<style>
.container>ul>li{
font-size: 1.5rem;
background:white;
height:4.8rem;
overflow: hidden;


}
.container>ul>li img{
float:left;
float:left;
width:4.8rem;
height:4.8rem;
}
.container>ul>li>span:nth-child(2){
display: block;
float:left;
background:red;
width:9%;
text-align: center;
height:2rem;
line-height: 2rem;
background:#e5e5e5;
color:#a2a2a2;
font-size:1.3rem;
margin-top:1.45rem;
border-radius: 0.5rem;
margin-left:0.75rem;
/*margin-top:-1rem;*/
/*background:red;*/
}
.container>ul>li>span:nth-child(3){
/*background:red;*/
display: block;
float:left;
width:50%;
text-overflow:ellipsis; 
white-space:nowrap; 
overflow: hidden;
line-height:4.8rem;
/*color:red;*/
margin-left:0.75rem;
}
.container>ul>li{
  /*display: flex;*/
}
.container>ul>li>span:nth-child(4){
  /*background:red;*/
display: block;
float:right;
/*width:2%;*/
text-align:center;
margin-right:3.3%;
/*display: flex;*/
/*margin-left:5%;*/
height:4.8rem;
overflow: hidden;
text-align:center;
line-height: 4.8rem;

}
</style>