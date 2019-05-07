import React, { Component } from 'react'
import { Post } from 'model/PostModel';
import { Link } from 'react-router-dom';
import { getDateFormat } from 'utils';
import MyPage from './MyPage';

const MyPagePosts = ({idx, thumbnail, subject, writer, reg_date, comments, content}: Post) => {
  return (
    <article className="mypage__post">
      <header>
        <figure className="mypage__post--thumbnail">
          <img src={thumbnail} alt={subject} />
        </figure>
        <h4><Link to={`/post/${idx}`} className="mypage__post--title">{subject}</Link></h4>
        <p className="mypage__post--info">
          <span className="mypage__post--date">{getDateFormat(reg_date)}</span>
          <span className="mypage__post--cnt">{comments.length}개의 댓글</span>
        </p>
      </header>
      <p className="mypage__post--text">{content}</p>
      <footer className="mypage__post--tag">
        <a href="#">Lorem</a>
        <a href="#">Quod</a>
        <a href="#">Quaerat</a>
        <a href="#">Temporibus</a>
      </footer>
    </article>
  )
}

export default MyPagePosts