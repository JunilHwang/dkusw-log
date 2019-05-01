import { User } from './UserModel'
import { Comment } from './CommentModel'
export interface Post {
  idx: number,
  thumbnail: string,
  writer: User,
  subject: string,
  content: string,
  reg_date: number,
  comments: Comment[]
}