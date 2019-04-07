require('dotenv').config()

const baseDbSetting = {
  timezone: '+09:00',
  dialect: 'mysql',
  pool: { max: 100, min: 0, idle: 10000 },
  define: { charset: 'utf8mb4', collate: 'utf8mb4_unicode_ci', timestamps: true }
}

const prodInit = {
  username: process.env.DB_PROD_USER,
  password: process.env.DB_PROD_PW,
  host: process.env.DB_PROD_HOST,
  database: process.env.DB_PROD_NAME,
  logging: false
}
const devInit = {
  username: process.env.DB_DEV_USER,
  password: process.env.DB_DEV_PW,
  host: process.env.DB_DEV_HOST,
  database: process.env.DB_DEV_NAME,
  logging: true
}
const testInit = {
  username: process.env.DB_TEST_USER,
  password: process.env.DB_TEST_PW,
  host: process.env.DB_TEST_HOST,
  database: process.env.DB_TEST_NAME,
  logging: false
}

export default {
  production: Object.assign(prodInit, baseDbSetting),
  development: Object.assign(devInit, baseDbSetting),
  test: Object.assign(testInit, baseDbSetting)
}