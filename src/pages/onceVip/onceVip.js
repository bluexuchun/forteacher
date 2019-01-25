import React from 'react'
import ApiClient from '@/utils/api'
import {Tabs} from 'antd-mobile'
import './onceVip.less'

const tabs2 = [
  { title: '按时间选择', sub: '1' },
  { title: '按老师选择', sub: '2' },
];

class OnceVip extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  componentWillMount() {
    ApiClient.post('http://www.eeo.cn/partner/api/course.api.php?action=getCourseClass',{
      SID:'1261996',
      safeKey:'5331d7a2b9ac4792bd277d727d6b8eaa',
      timeStamp:'1548437162',
      courseId:'6663929'
    })
    .then((res) => {
      console.log(res);
    })
  }
  componentDidMount() {

  }
  render(){
    return (
      <div>
        <Tabs tabs={tabs2}
          initialPage={0}
          renderTab={tab => <span>{tab.title}</span>}
          tabBarTextStyle={{fontSize:'.30rem',fontWeight:'bold'}}
          tabBarActiveTextColor="#00bc7d"
          tabBarInactiveTextColor="#666666"
        >
          <div className="tabPane timeChoose">
            Content of first tab
          </div>
          <div className="tabPane teacherChoose">
            Content of second tab
          </div>
        </Tabs>
      </div>
    )
  }
}

export default OnceVip
