import { FaGoogle, FaGithub, FaSignInAlt, FaPowerOff } from 'react-icons/fa'
import React, { Component} from 'react';
import { observer, inject } from 'mobx-react'
import { User } from 'model/UserModel'
import { IUserStore } from 'store/UserStore'

type Props = { userStore?: IUserStore }

@inject('userStore')
@observer
export default class LoginForm extends Component<Props> {
  render () {
    const { login } = this.props.userStore!
    return (
      <main className="login__form">
        <span className="middle"></span>
        <section>
          <h3>SNS를 통해 로그인할 수 있습니다.</h3>
          <ul>
            <li>
              <a href="#" className="login__button login__button--github">
                <FaGithub size="24px" />
                GitHub 로그인
              </a>
            </li>
            <li>
              <a href="#" className="login__button login__button--google">
                <FaGoogle size="24px" />
                Google 로그인
              </a>
            </li>
            <li>
              <a href="#" className="login__button login__button--none">
                <FaSignInAlt size="24px" />
                로그인 하지 않고 둘러보기
              </a>
            </li>
          </ul>
          <p className="login__form--division">
            <span>OR</span>
          </p>
          <a href="#" className="login__button login__button--temp" onClick={login}>
            <FaPowerOff size="24px" />
            임시 로그인
          </a>
        </section>
      </main>
    )
  }
}