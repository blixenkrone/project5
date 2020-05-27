
import { config } from './config/config';
import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,
  'dialect': 'postgres',
  'storage': ':memory:',
});
