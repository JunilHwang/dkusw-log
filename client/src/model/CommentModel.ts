import { User } from './UserModel'
export interface Comment {
  idx: number,
  writer: User,
  content: string,
  reg_date: number
}