import { Table, Column, Model, AutoIncrement, PrimaryKey } from 'sequelize-typescript';

@Table
export class Category extends Model<Category> {
  @Column
  @AutoIncrement
  @PrimaryKey
  idx: number;

  @Column
  title: string;
}