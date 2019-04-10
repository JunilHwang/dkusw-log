import { Table, Column, Model, AutoIncrement, PrimaryKey, DataType, Unique } from 'sequelize-typescript';

@Table
export class Member extends Model<Member> {
  @Column
  @AutoIncrement
  @PrimaryKey
  idx: number;

  @Column
  @Unique
  id: string;

  @Column
  pw: string;

  @Column
  name: string;

  @Column
  nick: string;

  @Column
  profileImage: string;

  @Column
  googleAccessToken: string;

  @Column
  githubAccessToken: string;
}
