import axios from 'axios'
import { topicParams, APIRootUrl } from '@/config/index'

// 请求话题列表并导出
export function getTopicList (params) {
	// console.log('这里也被调用了3');
  let path = APIRootUrl + '/topics'
  // 关于默认参数的配置
  // Object.assign() 组合对象，从前到后，相同属性覆盖，不同属性继承

  // 这里的意思是当页面刷新的时候params的值还未定义，是空的，那么assign这个方法就将
  // topicParams，里面定义的值赋值给paramsData
  //如果在发起新请求的时候因为params值的来源是my-dhla文件内的getTopicList()函数的执行定义的
  //最终先赋值topicParams的值给paramsData，然后params有值，就把params的值赋值给paramsData。覆盖调了topicParams原本的值
  let paramsData = Object.assign({}, topicParams, params)
  // console.log(paramsData)
  // 这里把最终的到的路劲和定好的值get()调用到axios对象里面进行处理
  //等于向服务器发起了一个请求，然后返回数据，并且把返回的数据发送到my-dhla.vue文件里面getTopicList()这里函数调用处
  return axios.get(path, {
    params: paramsData
  })
}
// console.log(axios);
