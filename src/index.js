import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Link,Switch } from 'react-router-dom';
import Authority from '@/pages/authority/authority'
import Index from '@/pages/index/index'
import '@/assets/css/index.css';
import ApiClient from '@/utils/api'


ReactDOM.render(
  (<BrowserRouter basename="/h5/index.html/">
    <Switch>
      <Route exact path="/" component={Authority}></Route>
      <Route path="/index" component={Index} onEnter={ApiClient.setTitle('首页')}></Route>
    </Switch>
  </BrowserRouter>)
  , document.getElementById('root'));
