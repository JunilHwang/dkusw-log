import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { IPostStore } from 'store/PostStore'
import PostCard from './Card'
import Profile from './Profile'
import { match } from 'react-router';

interface P { category: string }

type Props = {
  postStore?: IPostStore
  match: match<P>
}

@inject('postStore')
@observer
export default class PostList extends Component<Props> {
  constructor(props: Props) {
    super(props)
    const { getPosts } = this.props.postStore!
    getPosts(this.props.match.params.category)
  }
  render() {
    const { match } = this.props
    const { posts } = this.props.postStore!
    const title = match.params.category.toUpperCase()
    return (
      <section className="site-content-wrap post-list__wrap">
        <Profile />
        <main className="site-content">
          <section className="post-summary__section" key={title}>
            <h3 className="post-summary__title">{title}</h3>
            <div className="post-summary__wrap">
              {posts.map(post => (<PostCard key={post.idx} {...post} />))}
            </div>
          </section>
        </main>
      </section>
    )
  }
}