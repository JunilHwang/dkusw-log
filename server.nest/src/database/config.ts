import * as dotenv from 'dotenv';
import { isNumber } from 'util';
dotenv.config();
export default {
  username: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT)
};
