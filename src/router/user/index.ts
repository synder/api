/**
 * @author synder
 * @date 16/1/10
 * @desc
 */

import * as Router from 'koa-router'
import * as account from '../../controller/user/account'

const userRouter = new Router({
  prefix: '/user',
})

userRouter.get('/', account.home)

export { userRouter }
