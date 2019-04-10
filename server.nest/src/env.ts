import * as dotenv from 'dotenv';
import * as path from 'path';

const { NODE_ENV } = process.env;

console.log(process.env);

dotenv.config({
  path: path.resolve(process.cwd(), NODE_ENV === 'development' ? '.env.development.local' : '.env.production.local'),
});
