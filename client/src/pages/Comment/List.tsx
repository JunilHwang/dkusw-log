import React, { Component } from 'react'
import { Comment } from 'model/CommentModel' 
import CommentCard from './Card'
import { Button } from 'react-bootstrap'

type Props = {
  comments: Comment[]
}
export default class CommentList extends Component<Props> {
  render () {
    const { comments } = this.props
    return (
      <section className="comment">
        <header className="comment__header">5개의 댓글</header>
        <form action="" method="post" className="fields">
          <fieldset className="comment__form">
            <legend className="comment__form--title">댓글작성</legend>
            <div className="form-group">
              <textarea cols={80} rows={3} className="form-control"></textarea>
            </div>
            <div className="comment__form--button">
              <Button variant="primary">작성완료</Button>
            </div>
          </fieldset>
        </form>
        { comments.map((v: Comment) => <CommentCard key={v.idx} {...v} />) }
      </section>
    )
  }
}