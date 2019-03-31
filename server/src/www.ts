require('dotenv').config()
import 'source-map-support/register'
import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as logger from 'koa-morgan'

const app = new Koa()
const router = new Router()

router.get('/*', async (ctx) => {
    ctx.body = 'Hello World!'
})

app.use(logger('dev'))
app.use(router.routes())

app.listen(3000)

const debug = require('debug')('restapi:server')

console.log('Server running on port 3000')