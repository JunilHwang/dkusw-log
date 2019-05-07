import React from 'react'
import { Comment } from 'model/CommentModel'
import { getDateFormat } from 'utils';

const CommentCard = (props: Comment) => {
  const { writer, reg_date, content } = props
  return (
    <article className="comment-article">
      <header className="comment-article__author">
        <a href="#" className="comment-article__author--image">
          <img src={writer.profileImage} alt="Lorem" />
        </a>
        <div className="comment-article__author--name">
          <strong>{writer.name}</strong>
          <time className="comment-article__author--date">{getDateFormat(reg_date)}</time>
        </div>
      </header>
      <p className="comment-article__content">
        {content}
      </p>
    </article>
  )
}

export default CommentCard