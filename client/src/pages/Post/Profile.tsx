import React, { Component } from 'react'
import { IUserStore } from 'store/UserStore'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom';

type Props = {
  userStore?: IUserStore
}

@inject('userStore')
@observer
export default class Profile extends Component<Props> {
  render () {
    const { logout } = this.props.userStore!
    return (
      <header className="profile">
        <div className="profile__image" style={{ backgroundImage: `url(${require('assets/images/no-profile.png')})` }}></div>
        <ul className="profile__info">
          <li><Link to="/mypage">마이페이지</Link></li>
          <li><Link to="/" onClick={logout}>로그아웃</Link></li>
        </ul>
      </header>
    )
  }
}