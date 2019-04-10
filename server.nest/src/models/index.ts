import { Sequelize } from 'sequelize-typescript'
import config from './config';
import { Post } from './Post';
import { Member } from './Member';

const sequelize = new Sequelize({
  ...config,
  dialect: 'mariadb',
  modelPaths: [__dirname + '/models'],
});

const models = {
  Sequelize,
  sequelize,
  Post,
  Member,
};

Object.values(models).forEach((model: any) => {
  if (model.associate) {
    model.associate(models);
  }
});

export default models;
