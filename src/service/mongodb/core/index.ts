/**
 * @author synder
 * @date 16/1/10
 * @desc
 */

import * as mongoose from 'mongoose'
import config from '../../config'

mongoose.Promise = global.Promise

const CONFIG = config.mongodb.core

if (!CONFIG) {
  throw new Error('please provide mongodb config')
}

const client = mongoose.createConnection(CONFIG.uri, {
  user: CONFIG.user,
  pass: CONFIG.pass,
})

export { client, mongoose }
