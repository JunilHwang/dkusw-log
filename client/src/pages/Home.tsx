import React, { Component } from 'react';
import Menu from './Menu';
import { Route } from 'react-router-dom'
import PostMain from './Post/Main'
import PostList from './Post/List'
import About from './About'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact path={`/`} component={PostMain} />
        <Route path={`/about-us`} component={About} />
        <Route path={`/posts/:category`} component={PostList} />
      </div>
    );
  }
}