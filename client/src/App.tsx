import React, { Component } from 'react';
import { User } from 'model/UserModel'
import { IUserStore } from 'store/UserStore'
import { observer, inject } from 'mobx-react'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'

type Props = { userStore?: IUserStore }
@inject('userStore')
@observer
export default class App extends Component<Props> {
  render() {
    const { user } = this.props.userStore!
    return (
      <Router>
        <div>
          <Route path="/" component={user === null ? Login : Home} />
        </div>
      </Router>
    );
  }
}