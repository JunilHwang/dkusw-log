import * as dotenv from 'dotenv';
dotenv.config();
export default {
  username: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
};
