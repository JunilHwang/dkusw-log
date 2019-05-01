import React, { Component } from 'react';
import Menu from './Menu';
import { Route } from 'react-router-dom'
import PostList from './Post/List'
import PostMain from './Post/Main'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact path={`/`} component={PostMain} />
        <Route path={`/:category`} component={PostList} />
      </div>
    );
  }
}