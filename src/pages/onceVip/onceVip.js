import React from 'react'
import ApiClient from '@/utils/api'
import { Tabs,DatePicker } from 'antd-mobile'
import './onceVip.less'
import Avatar from '@/assets/images/lesson/avatar.png'
import Icondown from '@/assets/images/lesson/up.png'

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

const tabs2 = [
  { title: '按时间选择', sub: '1' },
  { title: '按老师选择', sub: '2' },
];

class OnceVip extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        date: now,
        time:now,
        isShow1:'init',
        teacher_lists1:[
          {
            id:1,
            name:'Hallen-72',
            rate:'5.0',
            desc:'国际老师，从基础开始，中 级高级，准确发音...',
            ava:Avatar
          },{
            id:2,
            name:'Hallen-72',
            rate:'5.0',
            desc:'国际老师，从基础开始，中 级高级，准确发音...',
            ava:Avatar
          },{
            id:3,
            name:'Hallen-72',
            rate:'5.0',
            desc:'国际老师，从基础开始，中 级高级，准确发音...',
            ava:Avatar
          },{
            id:4,
            name:'Hallen-72',
            rate:'5.0',
            desc:'国际老师，从基础开始，中 级高级，准确发音...',
            ava:Avatar
          }
        ]
    }
  }
  componentWillMount() {
    // ApiClient.post('http://www.eeo.cn/partner/api/course.api.php?action=getCourseClass',{
    //   SID:'1261996',
    //   safeKey:'5331d7a2b9ac4792bd277d727d6b8eaa',
    //   timeStamp:'1548437162',
    //   courseId:'6663929'
    // })
    // .then((res) => {
    //   console.log(res);
    // })
  }
  componentDidMount() {

  }
  toggleTeacher(){
    let status = this.state.isShow1
    if(status == 'init'){
      status = true
    }else{
      status = !status
    }

    this.setState({
      isShow1:status
    })
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
          <div className="tabPane timeChoose flex-column">
             <div className="list_box padleftright">
               <DatePicker
                 mode="date"
                 value={this.state.date}
                 onChange={date => this.setState({ date })}>
                    <div className="list_item">
                      <div className="item_title">开课日期</div>
                      <div className="item_value">
                        请选择日期
                        <div className="arrow_right"></div>
                      </div>
                    </div>
               </DatePicker>
             </div>
             <div className="list_box padleftright">
               <DatePicker
                 mode="time"
                 value={this.state.time}
                 onChange={time => this.setState({ time })}>
                    <div className="list_item">
                      <div className="item_title">开课时间</div>
                      <div className="item_value">
                        请选择时间
                        <div className="arrow_right"></div>
                      </div>
                    </div>
               </DatePicker>
             </div>
             <div className="list_box padleftright">
               <div className="list_item">
                 <div className="item_title">授课老师</div>
                 <div className="item_value">
                   lisal
                   <img className="item_ava" src={Avatar} alt=""/>
                 </div>
                 <img onClick={() => this.toggleTeacher()} className={`icon_down ${this.state.isShow == 'init' ? '' : this.state.isShow ? 'downAnimate' : 'upAnimate'}`} src={Icondown} alt=""/>
               </div>
             </div>
             <div className="teacher_box" style={{display:this.state.isShow == 'init' ? 'none' : this.state.isShow ? 'block' : 'none'}}>
               <div className="teacher_tip">教师预约</div>
               <div className="teacher_group">
                 {this.state.teacher_lists.map((v,i) => (
                   <div className="teacher_item flex-row">
                     <div className="teacher_ava">
                       <img className="img_ava" src={v.ava} alt=""/>
                     </div>
                     <div className="teacher_iteminfo flex-row">
                       <div className="teacher_info flex-column">
                         <div className="info_title flex-row">
                           <div className="title_name">{v.name}</div>
                           <div className="title_rate">{v.rate}分</div>
                         </div>
                         <div className="info_desc textTwoLineHide" style={{"WebkitBoxOrient": "vertical"}}>
                            {v.desc}
                         </div>
                       </div>
                       <div className="teacher_appoint">
                         预约
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
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
