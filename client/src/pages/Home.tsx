import React, { Component } from 'react';
import Menu from './Menu';
import { Route } from 'react-router-dom'
import PostMain from './Post/Main'
import PostList from './Post/List'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact path={`/`} component={PostMain} />
        <Route exact path={`/:category`} component={PostList} />
      </div>
    );
  }
}