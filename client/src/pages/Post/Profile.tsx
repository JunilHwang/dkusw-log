import React, { Component } from 'react'
import { IUserStore } from 'store/UserStore'
import { observer, inject } from 'mobx-react'

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
          <li><a href="#">내 활동</a></li>
          <li><a href="#">마이페이지</a></li>
          <li><a href="#" onClick={logout}>로그아웃</a></li>
        </ul>
      </header>
    )
  }
}