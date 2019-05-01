import { User } from './UserModel'
export interface Comment {
  writer: User,
  content: string,
  reg_date: number
}