import React, { Component } from 'react';
import Menu from './Menu';
import { Route, Switch } from 'react-router-dom'
import PostMain from './Post/Main'
import PostList from './Post/List'
import PostView from './Post/View'
import About from './About'
import MyPage from './User/MyPage'

export default class Home extends Component {
  render() {
    return (
      <Switch>
        <Route path="/post/:idx" component={PostView} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/">
          <Menu />
          <Route exact path="/" component={PostMain} />
          <Route path="/about-us" component={About} />
          <Route path="/posts/:category" component={PostList} />
        </Route>
      </Switch>
    );
  }
}