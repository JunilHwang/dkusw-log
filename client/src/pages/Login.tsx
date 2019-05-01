import React, { Component } from 'react';
import LoginForm from './LoginForm'

const Visual = () => (
  <div className="login-visual">
    <span className="middle"></span>
    <div>
      <h2>
        <span>단국대학교</span><br />
        소프트웨어학과 커뮤니티
      </h2>
      <dl>
        <dt>DKU.SW.LOG</dt>
        <dd>
          <p>과목 정보 공유</p>
          <p>과제 정보 공유</p>
          <p>취업 정보 공유</p>
          <p>개발 정보 공유</p>
          <p>팀 프로젝트 모집 및 관리</p>
        </dd>
      </dl>
    </div>
  </div>
)

export default class Login extends Component {
  render() {
    return (
      <section className="login-wrap">
        <Visual />
        <LoginForm />
      </section>
    );
  }
}