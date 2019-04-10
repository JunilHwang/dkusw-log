
import { Table, Column, Model, AutoIncrement, PrimaryKey, DataType, ForeignKey, BelongsTo, Scopes, HasMany } from 'sequelize-typescript';
import { Member } from '../member/model';
import { Comment } from '../comment/model';
import { Category } from '../category/model';

@Scopes({
  full: {
    include: [
      { model: () => Category },
      { model: () => Member },
      { model: () => Comment, include: [ () => Member ] }
    ]
  }
})
@Table
export class Post extends Model<Post> {
  @AutoIncrement
  @PrimaryKey
  @Column
  idx: number;

  @Column
  subject: string;

  @Column({type: DataType.TEXT})
  content: string;

  @ForeignKey(() => Category)
  @Column
  cidx: number;

  @ForeignKey(() => Member)
  @Column
  midx: number;

  @BelongsTo(() => Category)
  category;

  @BelongsTo(() => Member)
  member;

  @HasMany(() => Comment)
  comments;
}

export const postProviders = [
  {
    provide: 'POST_REPOSITORY',
    useValue: Post
  }
];
