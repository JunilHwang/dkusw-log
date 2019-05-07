import React, { Component } from 'react'
import Profile from './Profile';
import { observer, inject } from 'mobx-react'
import IPostStore from 'store/PostStore'
import { match } from 'react-router'
import { Post } from 'model/PostModel'
import { getDateFormat } from 'utils'
import CommentList from '../Comment/List'

interface P { idx: string }
type Props = {
  postStore?: IPostStore
  match: match<P>
}

@inject('postStore')
@observer
export default class PostView extends Component<Props> {
  constructor(props: Props) {
    super(props)
    const match = this.props.match
    const { getPost } = this.props.postStore!
    getPost(~~match.params.idx)
  }
  render () {
    const { post } = this.props.postStore!
    const PostRender = (post: Post) => (
      <main className="site-content">
        <article className="post-detail">
          <header className="post-detail__head">
            <h1 className="post-detail__subject"><a href="#">{post.subject}</a></h1>
            <div className="post-detail__info">
              <div className="post-detail__author">
                <a href="#" className="post-detail__author--image">
                  <img src={post.writer.profileImage} alt={post.subject} />
                </a>
                <div className="post-detail__author--name">
                  <strong>{post.writer.name}</strong>
                  <time className="post-detail__date">{getDateFormat(post.reg_date)}</time>
                  <p>{post.writer.email}</p>
                </div>
              </div>
            </div>
          </header>
          <div className="post-detail__content">
            {post.content}
          </div>
          <footer className="post-detail__tag">
            <a href="#">Lorem</a>
            <a href="#">Ipsum</a>
            <a href="#">Provident</a>
            <a href="#">Minus</a>
            <a href="#">Quibusdam</a>
          </footer>
        </article>
      </main>
    )
    return (
      <section className="site-content-wrap post-view__wrap">
        <Profile />
        {post ? PostRender(post) : null}
        {post ? <CommentList comments={post.comments} /> : null}
      </section>
    )
  }
}