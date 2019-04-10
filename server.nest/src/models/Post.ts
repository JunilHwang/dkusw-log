import { Table, Column, Model, AutoIncrement, PrimaryKey, DataType } from 'sequelize-typescript';

@Table
class Post extends Model<Post> {
  @Column
  @AutoIncrement
  @PrimaryKey
  idx: number;

  @Column
  subject: string;

  @Column({type: DataType.TEXT})
  content: string;
}

export default Post;
