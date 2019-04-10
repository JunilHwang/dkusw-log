import { Table, Column, Model, AutoIncrement, PrimaryKey, DataType } from 'sequelize-typescript';

@Table
class Category extends Model<Category> {
  @Column
  @AutoIncrement
  @PrimaryKey
  idx: number;

  @Column
  title: string;
}

export default Category;
