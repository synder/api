/**
 * @author synder
 * @date 16/1/10
 * @desc
 */

let NODE_ENV: any = 'dev'

if (process.env.NODE_ENV != null) {
  NODE_ENV = process.env.NODE_ENV
}

const config = require('./' + NODE_ENV.toLowerCase())

export default config
