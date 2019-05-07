import React, { Component } from 'react'

export default class MyPagePosts extends Component {
  render () {
    return (
      <article className="mypage__post">
        <header>
          <figure className="mypage__post--thumbnail">
            <img src="assets/images//no-thumbnail.png" alt="Lorem, ipsum dolor." />
          </figure>
          <h4><a href="#" className="mypage__post--title">Lorem, ipsum dolor</a></h4>
          <p className="mypage__post--info">
            <span className="mypage__post--date">1일 전</span>
            <span className="mypage__post--cnt">0개의 댓글</span>
          </p>
        </header>
        <p className="mypage__post--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ad.</p>
        <footer className="mypage__post--tag">
          <a href="#">Lorem</a>
          <a href="#">Quod</a>
          <a href="#">Quaerat</a>
          <a href="#">Temporibus</a>
        </footer>
      </article>
    )
  }
}