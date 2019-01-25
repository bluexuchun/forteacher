import React from 'react'
import ApiClient from '@/utils/api'
import cover from '@/assets/images/lesson/cover.png'
import './lesson.less'

class Lesson extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        lesson_lists:[
          {
            id:1,
            cover_img:cover,
            title:'美国国家地理小学课程',
            word:'适用于小学一年级-初中二年级',
            desc:'从听说读写方面巩固所学知识点，让学生能自如运 营所学去探究，流利描述自己的生活',
            tips:'10W家长的选择'
          },{
            id:2,
            cover_img:cover,
            title:'美国国家地理小学课程',
            word:'适用于小学一年级-初中二年级',
            desc:'从听说读写方面巩固所学知识点，让学生能自如运 营所学去探究，流利描述自己的生活',
            tips:'10W家长的选择'
          },{
            id:3,
            cover_img:cover,
            title:'美国国家地理小学课程',
            word:'适用于小学一年级-初中二年级',
            desc:'从听说读写方面巩固所学知识点，让学生能自如运 营所学去探究，流利描述自己的生活',
            tips:'10W家长的选择'
          },{
            id:4,
            cover_img:cover,
            title:'美国国家地理小学课程',
            word:'适用于小学一年级-初中二年级',
            desc:'从听说读写方面巩固所学知识点，让学生能自如运 营所学去探究，流利描述自己的生活',
            tips:'10W家长的选择'
          }
        ]
    }
  }
  componentWillMount(){

  }

  lessondetail(id){
    console.log(id)
    const { history } = this.props
    history.push({
      pathname:'/lessonDetail',
      state:{
        id:id
      }
    })
  }
  render(){
    return(
       <div className="lesson padleftright">
          <div className="lesson_list">
             {this.state.lesson_lists.map((item,index) => (
                <div className="lesson_item">
                    <img className="lesson_cover" src={item.cover_img} alt=""/>
                    <div className="lesson_info flex-column">
                        <div className="lesson_title">{item.title}</div>
                        <div className="lesson_word">{item.word}</div>
                        <div className="lesson_desc textTwoLineHide" style={{"WebkitBoxOrient": "vertical"}}>{item.desc}</div>
                        <span className="lesson_tips">{item.tips}</span>
                        <div className="lesson_btn" onClick = {() => this.lessondetail(item.id)}>查看</div>
                    </div>
                </div>
              ))}
          </div>
       </div>
    )
  }
}

export default Lesson
