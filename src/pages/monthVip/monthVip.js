import React from 'react'
import ApiClient from '@/utils/api'
import { DatePicker,Toast } from 'antd-mobile'
import './monthVip.less'
import Avatar from '@/assets/images/lesson/avatar.png'
import Avatar1 from '@/assets/images/lesson/avatar1.png'
import Icondown from '@/assets/images/lesson/up.png'

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

function successToast(msg) {
  Toast.success(msg, 2);
}

function failToast(msg) {
  Toast.fail(msg, 2);
}

class MonthVip extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        date: now,
        time:now,
        isShow:'init',
        teacher_lists:[
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
        ]
    }
  }
  componentWillMount() {
    let hours = (this.state.time).getHours()
    this.setState({
      time:new Date(new Date(new Date().toLocaleDateString()).getTime() + hours * 60 *60 * 1000),
    })
  }
  componentDidMount() {

  }

  /**
   * 打开关闭老师列表
   */
  toggleTeacher(){
    let status = this.state.isShow

    if(status == 'init'){
      status = true
    }else{
      status = !status
    }
      this.setState({
        isShow:status
      })
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
   */
  actionAppointMonth(id){
    let choseDate,choseTime
    choseDate = this.state.dateVal
    choseTime = this.state.timeVal
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
        <div className="tabPane teacherChoose flex-column">
          <div className="list_box padleftright">
            <DatePicker
              mode="day"
              value={this.state.date}
              onChange={date => this.setState({ dateVal:date })}>
                 <div className="list_item">
                   <div className="item_title">开课日期</div>
                   <div className="item_value">
                     {this.state.dateVal ? `${this.state.dateVal.getMonth()+1}月${this.state.dateVal.getDate()}日` : '请选择日期'}
                     <div className="arrow_right"></div>
                   </div>
                 </div>
            </DatePicker>
          </div>
          <div className="list_box padleftright">
            <DatePicker
              mode="time"
              value={this.state.time}
              onChange={time => this.setState({ timeVal:time })}>
                 <div className="list_item">
                   <div className="item_title">开课时间</div>
                   <div className="item_value">
                      {this.state.timeVal ? `${this.state.timeVal.getHours()}时${this.state.timeVal.getMinutes()}分` : '请选择时间'}
                     <div className="arrow_right"></div>
                   </div>
                 </div>
            </DatePicker>
          </div>
          <div className="list_tips padleftright flex-row flex-spacebetween">
            <div className="tips_left">周一至周五（25分钟）周六周日（50分钟）</div>
            <div className="tips_right">月卡一次约课26节</div>
          </div>
          <div className="list_common padleftright">
            <div className="common_tips">常用老师</div>
            <div className="teacher_common">
                <div className="common_item flex-row">
                    <div className="common_ava">
                      <img className="img_ava" src={Avatar1} alt=""/>
                    </div>
                    <div className="common_info flex-column">
                      <div className="common_title">Hallen-72</div>
                      <div className="common_tags flex-row">
                        <div className="tags_item">国际老师</div>
                        <div className="tags_item">国际老师</div>
                        <div className="tags_item">国际老师</div>
                        <div className="tags_item">国际老师</div>
                      </div>
                    </div>
                    <div className="common_appoint" onClick={() => this.actionAppointMonth('1')}>预约</div>
                </div>
                <div className="common_item flex-row">
                    <div className="common_ava">
                      <img className="img_ava" src={Avatar1} alt=""/>
                    </div>
                    <div className="common_info flex-column">
                      <div className="common_title">Hallen-72</div>
                      <div className="common_tags flex-row">
                        <div className="tags_item">国际老师</div>
                        <div className="tags_item">国际老师</div>
                        <div className="tags_item">国际老师</div>
                        <div className="tags_item">国际老师</div>
                      </div>
                    </div>
                    <div className="common_appoint" onClick={() => this.actionAppointMonth('1')}>预约</div>
                </div>
            </div>
          </div>
          <div className="list_up">
            <div className="moretxt">{this.state.isShow == 'init' ? '更多' : this.state.isShow ? '收起' : '更多'}</div>
            <img onClick={() => this.toggleTeacher()} className={`icon_down ${this.state.isShow == 'init' ? '' : this.state.isShow ? 'downAnimate' : 'upAnimate'}`} src={Icondown} alt=""/>
          </div>
          <div className="teacher_box padleftright" style={{display:this.state.isShow == 'init' ? 'none' : this.state.isShow ? 'block' : 'none'}}>
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
                    <div className="teacher_appoint" onClick={() => this.actionAppointMonth(v.id)}>
                      预约
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MonthVip
