import React from 'react'
import ApiClient from '@/utils/api'
import './onceVip.less'
import Avatar from '@/assets/images/lesson/avatar.png'
import Avatar1 from '@/assets/images/lesson/avatar1.png'
import Icondown from '@/assets/images/lesson/up.png'
import { Tabs,DatePicker,Toast } from 'antd-mobile'

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

const tabs2 = [
  { title: '按时间选择', sub: '1' },
  { title: '按老师选择', sub: '2' },
];

function successToast(msg) {
  Toast.success(msg, 2);
}

function failToast(msg) {
  Toast.fail(msg, 2);
}

class OnceVip extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        dateone: now,
        timeone:now,
        isShowone:'init',
        teacher_listsone:[
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
        ],
        datetwo: now,
        timetwo:now,
        isShowtwo:'init',
        teacher_liststwo:[
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
        ],
        tag_lists:[
          {
            id:1,
            title:'青少年',
            ischecked:false
          },{
            id:1,
            title:'商务英语',
            ischecked:false
          },{
            id:1,
            title:'雅思',
            ischecked:false
          },{
            id:1,
            title:'托福',
            ischecked:false
          },{
            id:1,
            title:'幼儿启蒙',
            ischecked:false
          },{
            id:1,
            title:'新标签',
            ischecked:false
          },
        ],
        sex_lists:[
          {
            id:1,
            title:'女',
            ischecked:true
          },
          {
            id:2,
            title:'男',
            ischecked:false
          }
        ],
    }
  }
  componentWillMount() {
    let hours = (this.state.timeone).getHours()
    this.setState({
      timeone:new Date(new Date(new Date().toLocaleDateString()).getTime() + hours * 60 *60 * 1000),
      timetwo:new Date(new Date(new Date().toLocaleDateString()).getTime() + hours * 60 *60 * 1000)
    })
  }
  componentDidMount() {

  }

  /**
   * 打开关闭老师列表
   */
  toggleTeacher(type){
    let status;
    if(type == 'one'){
      status = this.state.isShowone
    }else{
      status = this.state.isShowtwo
    }

    if(status == 'init'){
      status = true
    }else{
      status = !status
    }

    if(type == 'one'){
      this.setState({
        isShowone:status
      })
    }else{
      this.setState({
        isShowtwo:status
      })
    }
  }

  /**
   * 选择分类
   */
  chooseCate(type,key){
    console.log(type)
    let catelists
    if(type == 'sex'){
      catelists = this.state.sex_lists
      catelists.map((v,i) => {
        v.ischecked = false
        if(key == i){
          v.ischecked = true
        }
      })
      this.setState({
        sex_lists:catelists
      })
    }else{
      catelists = this.state.tag_lists
      catelists.map((v,i) => {
        v.ischecked = false
        if(key == i){
          v.ischecked = true
        }
      })
      this.setState({
        tag_lists:catelists
      })
    }
  }

  /**
   * 预约
   * type = time 时间选择
   * type = teacher 老师选择
   */
  actionAppoint(id,type){
    let choseDate,choseTime
    if(type == 'time'){
      choseDate = this.state.timeDate
      choseTime = this.state.timeTime
    }else{
      choseDate = this.state.teacherDate
      choseTime = this.state.teacherTime
    }
    console.log(choseDate,choseTime)
    if(choseDate && choseDate != "" && choseTime && choseTime != ""){
      let { history } = this.props
      successToast('预约成功')
      setTimeout(() => {
        history.push({
          pathname:'/index'
        })
      },2000)
    }else{
      failToast('请选择日期、时间')
    }
  }

  render(){
    return (
      <div>
        <Tabs tabs={tabs2}
          initialPage={0}
          renderTab={tab => <span>{tab.title}</span>}
          tabBarTextStyle={{fontSize:'.30rem'}}
          tabBarActiveTextColor="#00bc7d"
          tabBarInactiveTextColor="#666666"
        >
          <div className="tabPane timeChoose flex-column">
             <div className="list_box padleftright">
               <DatePicker
                 mode="day"
                 value={this.state.dateone}
                 onChange={date => this.setState({timeDate:date})}>
                    <div className="list_item">
                      <div className="item_title">开课日期</div>
                      <div className="item_value">
                        {this.state.timeDate ? `${this.state.timeDate.getMonth()+1}月${this.state.timeDate.getDate()}日` : '请选择日期'}
                        <div className="arrow_right"></div>
                      </div>
                    </div>
               </DatePicker>
             </div>
             <div className="list_box padleftright">
               <DatePicker
                 mode="time"
                 value={this.state.timeone}
                 minuteStep={30}
                 onChange={time => this.setState({ timeTime:time })}>
                    <div className="list_item">
                      <div className="item_title">开课时间</div>
                      <div className="item_value">
                        {this.state.timeTime ? `${this.state.timeTime.getHours()}时${this.state.timeTime.getMinutes()}分` : '请选择时间'}
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
                 <img onClick={() => this.toggleTeacher('one')} className={`icon_down ${this.state.isShowone == 'init' ? '' : this.state.isShowone ? 'downAnimate' : 'upAnimate'}`} src={Icondown} alt=""/>
               </div>
             </div>
             <div className="teacher_box" style={{display:this.state.isShowone == 'init' ? 'none' : this.state.isShowone ? 'block' : 'none'}}>
               <div className="teacher_tip">教师预约</div>
               <div className="teacher_group">
                 {this.state.teacher_listsone.map((v,i) => (
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
                       <div className="teacher_appoint" onClick={() => this.actionAppoint(v.id,'time')}>
                         预约
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
          <div className="tabPane teacherChoose flex-column" style={{marginTop:'0rem'}}>
            <div className="list_common">
              <div className="common_tips" style={{marginBottom:'.2rem',paddingLeft:'.26rem',paddingRight:'.26rem'}}>常用老师</div>
              <div className="teacher_common padleftright">
                  <div className="common_item flex-row">
                      <div className="common_ava">
                        <img className="img_ava" src={Avatar1} alt=""/>
                      </div>
                      <div className="common_info flex-column">
                        <div className="common_title">Hallen-72</div>
                        <div className="common_desc textTwoLineHide" style={{"WebkitBoxOrient": "vertical"}}>
                           国际老师，从基础开始，中 级高级，准确发音...
                        </div>
                      </div>
                      <div className="common_appoint" onClick={() => this.actionAppoint('1','teacher')}>预约</div>
                  </div>
                  <div className="common_item flex-row">
                      <div className="common_ava">
                        <img className="img_ava" src={Avatar1} alt=""/>
                      </div>
                      <div className="common_info flex-column">
                        <div className="common_title">Hallen-72</div>
                        <div className="common_desc textTwoLineHide" style={{"WebkitBoxOrient": "vertical"}}>
                           国际老师，从基础开始，中 级高级，准确发音...
                        </div>
                      </div>
                      <div className="common_appoint" onClick={() => this.actionAppoint('1','teacher')}>预约</div>
                  </div>
              </div>
            </div>
            <div className="list_up">
              <div className="moretxt">{this.state.isShowtwo == 'init' ? '更多' : this.state.isShowtwo ? '收起' : '更多'}</div>
              <img onClick={() => this.toggleTeacher('two')} className={`icon_down ${this.state.isShowtwo == 'init' ? '' : this.state.isShowtwo ? 'downAnimate' : 'upAnimate'}`} src={Icondown} alt=""/>
            </div>
            <div className="teacher_box" style={{display:this.state.isShowtwo == 'init' ? 'none' : this.state.isShowtwo ? 'block' : 'none'}}>
              <div className="teacher_category flex-column">
                  <div className="teacher_sex flex-row">
                      {this.state.sex_lists.map((v,i) => (
                        <div className={`cate_item ${v.ischecked ? 'cate_itemactive' : ''}`} onClick={() => this.chooseCate('sex',i)}>{v.title}</div>
                      ))}

                  </div>
                  <div className="teacher_cate flex-row">
                      {this.state.tag_lists.map((v,i) => (
                        <div className={`cate_item ${v.ischecked ? 'cate_itemactive' : ''}`} onClick={() => this.chooseCate('cate',i)}>{v.title}</div>
                      ))}
                  </div>
              </div>
              <div className="teacher_tip">教师预约</div>
              <div className="teacher_group">
                {this.state.teacher_liststwo.map((v,i) => (
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
                      <div className="teacher_appoint" onClick={() => this.actionAppoint(v.id,'teacher')}>
                        预约
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="list_box padleftright">
              <DatePicker
                mode="day"
                value={this.state.datetwo}
                onChange={date => this.setState({ teacherDate:date })}
                >
                   <div className="list_item">
                     <div className="item_title">开课日期</div>
                     <div className="item_value">
                       {this.state.teacherDate ? `${this.state.teacherDate.getMonth()+1}月${this.state.teacherDate.getDate()}日` : '请选择日期'}
                       <div className="arrow_right"></div>
                     </div>
                   </div>
              </DatePicker>
            </div>
            <div className="list_box padleftright">
              <DatePicker
                mode="time"
                value={this.state.timetwo}
                minuteStep={30}
                onChange={time => this.setState({ teacherTime:time })}>
                   <div className="list_item">
                     <div className="item_title">开课时间</div>
                     <div className="item_value">
                       {this.state.teacherTime ? `${this.state.teacherTime.getHours()}时${this.state.teacherTime.getMinutes()}分` : '请选择时间'}
                       <div className="arrow_right"></div>
                     </div>
                   </div>
              </DatePicker>
            </div>
          </div>
        </Tabs>
      </div>
    )
  }
}

export default OnceVip
