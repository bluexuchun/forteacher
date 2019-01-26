import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Link,Switch } from 'react-router-dom';
import Authority from '@/pages/authority/authority'
import Index from '@/pages/index/index'
import Lesson from '@/pages/lesson/lesson'
import LessonDetail from '@/pages/lessonDetail/lessonDetail'
import OnceVip from '@/pages/onceVip/onceVip'
import MonthVip from '@/pages/monthVip/monthVip'
import CourseGroup from '@/pages/courseGroup/courseGroup'
import '@/assets/css/index.css';
import ApiClient from '@/utils/api'


ReactDOM.render(
  (<BrowserRouter basename="/h5">
    <Switch>
      <Route exact path="/" component={Authority}></Route>
      <Route path="/index" component={Index} onEnter={ApiClient.setTitle('首页')}></Route>
      <Route path="/lesson" component={Lesson} onEnter={ApiClient.setTitle('精选课程')}></Route>
      <Route path="/lessonDetail" component={LessonDetail} onEnter={ApiClient.setTitle('课程详情')}></Route>
      <Route path="/onceVip" component={OnceVip} onEnter={ApiClient.setTitle('次卡预约')}></Route>
      <Route path="/monthVip" component={MonthVip} onEnter={ApiClient.setTitle('月卡预约')}></Route>
      <Route path="/courseGroup" component={CourseGroup} onEnter={ApiClient.setTitle('课程套餐')}></Route>
    </Switch>
  </BrowserRouter>)
  , document.getElementById('root'));
