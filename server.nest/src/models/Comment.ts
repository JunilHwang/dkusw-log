import { Table, Column, Model, AutoIncrement, PrimaryKey, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Member } from './Member';
import { Post } from './Post';

@Table
export class Comment extends Model<Comment> {
  @Column
  @AutoIncrement
  @PrimaryKey
  idx: number;

  @Column
  @ForeignKey(() => Member)
  midx: number;

  @Column
  @ForeignKey(() => Post)
  pidx: number;

  @Column({ type: DataType.TEXT })
  content: string;

  @BelongsTo(() => Member)
  member;

  @BelongsTo(() => Post)
  post;
}
