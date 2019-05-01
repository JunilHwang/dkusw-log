import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { IPostStore } from 'store/PostStore'
import PostCard from './Card'
import Profile from './Profile'

type Props = {
  postStore?: IPostStore
}

@inject('postStore')
@observer
export default class PostMain extends Component<Props> {
  constructor (props: Props) {
    super(props)
    const { getRecently, getNotice, getHots } = props.postStore!
    getRecently()
    getNotice()
    getHots()
  }
  render() {
    const { recentPosts, noticePosts, hotPosts } = this.props.postStore!
    console.log(recentPosts)
    console.log(noticePosts)
    console.log(hotPosts)
    const sections = ['Recently', 'Notice', 'Hot Posts']
    const postsOfSections = [recentPosts, noticePosts, hotPosts]
    return (
      <section className="site-content-wrap post-list__wrap">
        <Profile />
        <main className="site-content">
          {sections.map((title: string, key: number) => (
              <section className="post-summary__section" key={title}>
                <h3 className="post-summary__title">{title}</h3>
                <div className="post-summary__wrap">
                  {postsOfSections[key].map(post => (<PostCard key={post.idx} {...post} />))}
                </div>
              </section>
          ))}
        </main>
      </section>
    )
  }
}