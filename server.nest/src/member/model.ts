import { Table, Column, Model, AutoIncrement, PrimaryKey, DataType, Unique } from 'sequelize-typescript';

@Table
export class Member extends Model<Member> {
  @AutoIncrement
  @PrimaryKey
  @Column
  idx: number;

  @Unique
  @Column
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

export const memberProviders = [
  {
    provide: 'MEMBER_REPOSITORY',
    useValue: Member
  }
];
