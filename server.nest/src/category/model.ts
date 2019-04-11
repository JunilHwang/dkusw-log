import { Table, Column, Model, AutoIncrement, PrimaryKey, AllowNull } from 'sequelize-typescript';

@Table
export class Category extends Model<Category> {

  @AutoIncrement
  @PrimaryKey
  @Column
  idx: number;

  @Column
  title: string;
}

export const categoryProviders = [
  {
    provide: 'CATEGORY_REPOSITORY',
    useValue: Category,
  }
];
