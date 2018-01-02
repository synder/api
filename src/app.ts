/**
 * @author synder
 * @date 18/1/2
 * @desc create http server
 */

import * as Koa from 'koa'
import * as compress from 'koa-compress'
import * as logger from 'koa-logger'

const app = new Koa()

app.use(logger())
app.use(compress())

import { userRouter } from './router/user'

app.use(userRouter.routes())

export { app }
