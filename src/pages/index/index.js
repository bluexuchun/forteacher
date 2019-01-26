import React from 'react'
import './index.less'
import Img_banner from '@/assets/images/index/banner_images.png'
import Img_process from '@/assets/images/index/process.png'
import Img_once from '@/assets/images/index/once.png'
import Img_oncebg from '@/assets/images/index/once_bg.png'
import Img_month from '@/assets/images/index/month.png'
import Img_monthbg from '@/assets/images/index/month_bg.png'

class Index extends React.Component{
  constructor(props){
    super(props)
    this.state = {
       lesson_lists:[
         {
           id:1,
           title:'Hallen-72',
           teacher:'Liziel',
           time:'2019-01-18',
           day:'19:30',
           status:'未开始'
         },{
           id:2,
           title:'Hallen-72',
           teacher:'Liziel',
           time:'2019-01-18',
           day:'19:30',
           status:'未开始'
         },{
           id:3,
           title:'Hallen-72',
           teacher:'Liziel',
           time:'2019-01-18',
           day:'19:30',
           status:'未开始'
         }
       ]
    }
  }

  componentWillMount() {

  }

  linkTo(url){
    let newurl = '/' + url
    console.log(newurl)
    const { history } = this.props
    history.push({
      pathname:url,
    })
  }

  render(){
    return (
      <div className="index">

          <div className="index_banner">
              <img className="banner_img" src={Img_banner} alt=""/>
          </div>


          <div className="index_process">
              <img className="process_img" src={Img_process} alt=""/>
          </div>
          <div className="index_choose flex-row flex-spacebetween padleftright" onClick={() => this.props.history.push('/lesson')}>
              <div className="choose_title flex-row">
                  教材选择： <span class="choose_tips colortips">请先选择学习教材</span>
              </div>
              <div className="arrow_right"></div>
          </div>


          <div className="index_vip padleftright flex-row flex-spacebetween">
              <div className="vip_once vip_box" onClick={() => this.linkTo('onceVip')}>
                  <img className="vip_bg" src={Img_oncebg} alt=""/>
                  <div className="vip_item flex-row">
                    <img className="once vip_icon" src={Img_once} alt=""/>
                    <div className="vip_iteminfo flex-column">
                      <div className="vip_nums flex-row"><span className="bigSize">200</span>次</div>
                      <div className="vip_name">次卡预约</div>
                    </div>
                  </div>
              </div>
              <div className="vip_month vip_box" onClick={() => this.linkTo('courseGroup')}>
                  <img className="vip_bg" src={Img_monthbg} alt=""/>
                  <div className="vip_item flex-row">
                    <img className="month vip_icon" src={Img_month} alt=""/>
                    <div className="vip_iteminfo flex-column">
                      <div className="vip_nums flex-row"><span className="bigSize">0</span>次</div>
                      <div className="vip_name">月卡预约</div>
                    </div>
                  </div>
              </div>
          </div>


          <div className="index_lesson">
              <div className="lesson_tip flex-row flex-spacebetween padleftright">
                  <div className="lesson_word">未开始课节（14）</div>
                  <div className="lesson_more flex-row">
                      更多
                      <div className="arrow_right"></div>
                  </div>
              </div>
              <div className="lesson_lists padleftright">
                  { this.state.lesson_lists.map((i,v) => (
                    <div className="lesson_item flex-row flex-spacebetween">
                        <div className="item_left flex-column">
                            <div className="item_title">{i.title}</div>
                            <div className="item_teacher">教师：{i.teacher}</div>
                            <div className="item_time">时间：{i.time}  周一 {i.day}</div>
                        </div>
                        <div className="item_right flex-column">
                            <div className="item_status">{i.status}</div>
                        </div>
                    </div>
                  ))}
              </div>
          </div>
      </div>
    )
  }
}

export default Index
