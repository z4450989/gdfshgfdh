<template>
  <div id="share">
    <!-- 这里设置返回首页 -->

    <div class="db-a">
      <div class="db-fh">
        <img src="../../assets/img/fanhuia.png">
          <router-link to="/all">返回</router-link>
      </div>
       <h1>话题</h1>
    </div>

    <!-- 这里获取接口显示的内容 -->
    <div v-for="item in topicList1">
      <div class="tabdw">
       <h1>{{item.tab}}</h1> 
      </div>
      <!-- 这里需要获取的是当前点击进来的index -->
        <div v-html="item.content">
        </div>
    </div>

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
topicList: [],
topicList1:{}
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
this.topicList = res.data.data;
this.topicList1 = res.data.data;
console.log(res.data.data);

}
}).catch((error) => {
console.log(error)
})
}





},
watch: {
// 检测路由信息的变化，重新发送请求
$route: function (res) {
  console.log(res);
  console.log('数据请求到了么');
// console.log(this.$route)
this._getTopicList()
console.log(res.data.data.content);
// res.data.data.content
// 发生变化获取当前的index值
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
#share{
  background:#fff;
  padding: 1.0rem 1.0rem 1.0rem 1.0rem;
  font-size:1.75rem;
  word-wrap:break-word; 
 
}
#share a{
   cursor: pointer;
}
.db-a{
  height:5rem;
  background:#1c6132;
  color:white;
}
.db-a>h1{
  float: left;
  /*background:blue;*/
  /*text-align:center;*/
  margin-left:30%;
}
.db-fh>img{
  width:4.5rem;
  height:4.5rem;
  display: block;
  float: left;
}
.db-fh{
  /*background:yellow;*/
  float: left;
  font-size:3rem;
  line-height: 4.5rem;

}


.markdown-text>p{
  margin-top:1.5rem;
  text-indent:2em;
}
.markdown-text img{
  width:50%;
}
.tabdw{
  position: absolute;
  color:white;
  top:1.0rem;
  left:36%;
}
.prettyprint{
  overflow:auto;
  background:#FAE240;
  opacity: 0.7;
}
</style>
