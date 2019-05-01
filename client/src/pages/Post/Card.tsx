import React from 'react'
import { Post } from 'model/PostModel'
import { getDateFormat } from 'utils'

const PostCard = (props: Post) => {
  const {subject, thumbnail, writer, content, comments, reg_date} = props
  return (
    <article className="post-summary">
      <a href="#" className="post-summary__thumbnail">
        <figure>
          <img src={thumbnail} alt={subject} />
        </figure>
      </a>
      <strong className="post-summary__author">
        <a href="#">
          <span className="post-summary__author--image">
            <img src={writer.profileImage} alt={writer.name} />
          </span>
          Lorem
        </a>
      </strong>
      <h4 className="post-summary__subject"><a href="#">{subject}</a></h4>
      <div className="post-summary__info">
        <time className="post-summary__date">{getDateFormat(reg_date)}</time>
        <span className="post-summary__cnt">{comments.length}개의 댓글</span>
      </div>
      <div className="post-summary__description">{content}</div>
    </article>
  )
 }

 export default PostCard