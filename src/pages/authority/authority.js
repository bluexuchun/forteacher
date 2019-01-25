import React from 'react'
import ApiClient from '@/utils/api'

class Authority extends React.Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    console.log(this.props)
    let search = this.props.location.search
    console.log(search)
    let code = ApiClient.reduceUrl(search)
    console.log(code)
    /**
     * 如果有code 请求并存储用户信息
     * 再跳转
     * 否则没有code&&没有session则用户错误 暂时测试
     */
    if(code){
      ApiClient.get('api.php?entry=app&c=wxapp&a=userinfo&do=display',{code:code})
        .then((res) => {
          console.log(res);
        })
    }else{
        this.props.history.push('/onceVip')
    }
  }
  render () {
    return (
      <div className="authority">
        <div className="authority-page">正在授权中...</div>
      </div>
    )
  }
}

export default Authority;
