import axios from 'axios'

/**
* http://teacher.centralsofts.cn/api.php?entry=app&c=wxapp&a=userinfo&do=display
**/
axios.defaults.baseURL = 'http://teacher.centralsofts.cn'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 常用工具集合
const ApiClient = {
   /**
    * 请求接口get
    */
   async get(url,paramsData){
     console.log(paramsData)
      let axiosReturn = await axios.get(url,{params:paramsData})
      return axiosReturn
   },

   /**
    * 请求接口post
    */
   async post(url,paramsData){
     let axiosReturn = await axios.post(url,paramsData)
     return axiosReturn
   },

   /**
    * 获取code 解析url
    */
   reduceUrl(url){
      let urlTxt = url.replace("?","")
      if(urlTxt.includes('&')){
        let urlAry = urlTxt.split('&')
        let code = urlAry[0].split('=')[1]
        return code
      }else{
        return false
      }
   },

   /**
    * 根据路由修改title
    */
   setTitle(title){
     document.title = title
   }
}

export default ApiClient
