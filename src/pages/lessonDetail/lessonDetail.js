import React from 'react'
import ApiClient from '@/utils/api'
import './lessonDetail.less'
import Img_banner from '../../assets/images/index/banner_images.png'

class LessonDetail extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  componentWillMount(){
      console.log(this.props)
  }
  render(){
    return(
       <div className="lessond">
           <div className="lessond_banner">
              <img className="banner_img" src={Img_banner} alt=""/>
           </div>
           <div className="lessond_info padleftright">
              <div className="lessond_item">
                  <div className="item_title">适应人群</div>
                  <div className="item_content">6-12岁小学生</div>
              </div>
              <div className="lessond_item">
                  <div className="item_title">学习时长</div>
                  <div className="item_content">1530课时（分6个年级）</div>
              </div>
              <div className="lessond_item">
                  <div className="item_title">课程内容和特色</div>
                  <div className="item_content">本课程出版社商实力雄厚，取材真实，内容极具综合性，话题非常丰富。采用母语学习的方式，避免繁复的填鸭式教学，课堂内设置里了丰富的教学活动。</div>
              </div>
              <div className="lessond_item">
                  <div className="item_title">教学目标</div>
                  <div className="item_content">本课程出版社商实力雄厚，取材真实，内容极具综合性，话题非常丰富。采用母语学习的方式。</div>
              </div>
           </div>
           <div className="lessond_choose padleftright">
              <div className="choose_btn">选择课程</div>
           </div>
       </div>
    )
  }
}

export default LessonDetail
