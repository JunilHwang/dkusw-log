import { Sequelize } from 'sequelize-typescript';
import { Post } from '../post/model';
import { Comment } from '../comment/model';
import { Category } from '../category/model';
import { Member } from '../member/model';
import config from './config';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        ...config,
        dialect: 'mariadb'
      });
      sequelize.addModels([ Post, Comment, Category, Member ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];