import React, { Component } from 'react';
import { IUserStore } from 'store/UserStore'
import { observer, inject } from 'mobx-react'
import { User } from 'model/UserModel'
import { Switch, Route } from 'react-router';
import MyPagePosts from './Posts'
import MyPageDetail from './Detail'
import { NavLink } from 'react-router-dom';
import { IPostStore } from 'store/PostStore';
import { Post } from 'model/PostModel';

type Props = {
  userStore?: IUserStore
  postStore?: IPostStore
}

@inject('userStore', 'postStore')
@observer
export default class MyPage extends Component<Props> {
  componentDidMount () {
    const { getUserPosts } = this.props.postStore!
    const { user } = this.props.userStore!
    if (user) getUserPosts(user.idx)
  }
  render () {
    const { user } = this.props.userStore!
    const { userPosts } = this.props.postStore!
    const MyPageHeader = (user: User) => (
      <header className="mypage__header">
        <figure className="mypage__header--image">
          <img src={user.profileImage} alt={user.name} />
        </figure>
        <div className="mypage__header--info">
          <h3 className="mypage__header--name">{user.name}</h3>
          <p className="mypage__header--description">Lorem ipsum dolor sit.</p>
          <p className="mypage__header--link"><a href="#"><i className="far fa-envelope"></i> {user.email}</a></p>
          <p className="mypage__header--link"><a href="#"><i className="fas fa-link"></i> http://junil-hwang.com</a></p>
          <ul className="mypage__header--social">
            <li><a href="#"><i className="fab fa-github"></i></a></li>
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
          </ul>
        </div>
      </header>
    )
    const MyPageMain = (user: User) => (
      <main className="site-content mypage">
        <MyPageHeader {...user} />
        <section className="mypage__content">
          <header>
            <nav className="mypage__content--navigation">
              <ul>
                <li><NavLink exact to="/mypage" activeClassName="active">작성한 글</NavLink></li>
                <li><NavLink to="/mypage/detail" activeClassName="active">상세 소개</NavLink></li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/mypage/detail" component={MyPageDetail} />
            <Route exact path="/mypage">
              {userPosts.map((v: Post) => <MyPagePosts key={v.idx} {...v} />)}
            </Route>
          </Switch>
        </section>
      </main>
    )
    return (
      <section className="site-content-wrap mypage__wrap">
        {user ? <MyPageMain {...user} /> : null}
      </section>
    )
  }
}