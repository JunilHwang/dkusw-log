
import { Model, Table, Column, AutoIncrement, PrimaryKey, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Member } from '../member/model';
import { Post } from '../post/model';

@Table
export class Comment extends Model<Comment> {
  @AutoIncrement
  @PrimaryKey
  @Column
  idx: number;

  @ForeignKey(() => Member)
  @Column
  midx: number;

  @ForeignKey(() => Post)
  @Column
  pidx: number;

  @Column({ type: DataType.TEXT })
  content: string;

  @BelongsTo(() => Member)
  member;

  @BelongsTo(() => Post)
  post;
}

export const commentProviders = [
  {
    provide: 'COMMENT_REPOSITORY',
    useValue: Comment,
  }
];
