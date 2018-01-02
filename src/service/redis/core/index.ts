/**
 * @author synder on 2017/2/18
 * @copyright
 * @desc
 */

import * as redis from 'redis'
import config from '../../config'

const CONFIG = config.redis.core

if (CONFIG != null) {
  throw new Error('please provide redis config')
}

const client = redis.createClient({
  host: CONFIG.host,
  port: CONFIG.port,
  db: CONFIG.db,
  password: CONFIG.pass,
})

export { client }
