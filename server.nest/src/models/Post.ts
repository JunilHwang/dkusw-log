import { Table, Column, Model, AutoIncrement, PrimaryKey, DataType, ForeignKey, BelongsTo, Scopes, HasMany } from 'sequelize-typescript';
import { Member } from './Member';
import { Comment } from './Comment';
import { Category } from './Category';

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
  @Column
  @AutoIncrement
  @PrimaryKey
  idx: number;

  @Column
  subject: string;

  @Column({type: DataType.TEXT})
  content: string;

  @Column
  @ForeignKey(() => Category)
  cidx: number;

  @Column
  @ForeignKey(() => Member)
  midx: number;

  @BelongsTo(() => Category)
  category;

  @BelongsTo(() => Member)
  member;

  @HasMany(() => Comment)
  comments;
}
