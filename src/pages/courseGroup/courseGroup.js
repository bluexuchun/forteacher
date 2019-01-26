import React from 'react'
import ApiClient from '@/utils/api'
import { Tabs,DatePicker } from 'antd-mobile'
import './courseGroup.less'

const tabs = [
  { title: '次卡套餐', sub: '1' },
  { title: '月卡套餐', sub: '2' },
];

class CourseGroup extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  componentWillMount() {

  }
  componentDidMount() {

  }
  render(){
    return (
      <div style={{height:'100vh'}}>
        <Tabs tabs={tabs}
          initialPage={1}
          renderTab={tab => <span>{tab.title}</span>}
          tabBarTextStyle={{fontSize:'.30rem'}}
          tabBarActiveTextColor="#00bc7d"
          tabBarInactiveTextColor="#666666"
        >
          <div className="tabPanebox flex-column" style={{marginTop:'0rem',justifyContent:'flex-start',position:'relative',background:'#fff'}}>
             <div className="allPrice padleftright flex-row">
                总价：<span className="pricetext">7388</span><span className="priceword">RMB</span>
             </div>
             <div className="line"></div>
             <div className="allinfo padleftright">
                <div className="info_tip">24个月套餐</div>
                <div className="info_content">
                    <div className="info_class">有效时课720节课</div>
                    <div className="info_price">平均一节课花费￥9.8</div>
                    <div className="price">￥<span className="pricetext">7388</span></div>
                </div>
             </div>
             <div className="coursebtn padleftright">
                <div className="course_btn">购买套餐</div>
             </div>
          </div>
          <div className="tabPanebox flex-column" style={{marginTop:'0rem',justifyContent:'flex-start',position:'relative',background:'#fff'}}>
              <div className="allPrice padleftright flex-row">
                 总价：<span className="pricetext">7388</span><span className="priceword">RMB</span>
              </div>
              <div className="line"></div>
              <div className="allinfo padleftright">
                 <div className="info_tip">24个月套餐</div>
                 <div className="info_content">
                     <div className="info_class">有效时课720节课</div>
                     <div className="info_price">平均一节课花费￥9.8</div>
                     <div className="price">￥<span className="pricetext">7388</span></div>
                 </div>
              </div>
              <div className="coursebtn padleftright">
                 <div className="course_btn">购买套餐</div>
              </div>
          </div>
        </Tabs>
      </div>
    )
  }
}

export default CourseGroup
