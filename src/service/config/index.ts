/**
 * @author synder
 * @date 16/1/10
 * @desc
 */

let ENV: any = 'dev'

if (process.env.NODE_ENV != null) {
  ENV = process.env.NODE_ENV
}

const config = require('./' + ENV.toLowerCase())

export default config
