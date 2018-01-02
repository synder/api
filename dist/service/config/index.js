"use strict";
/**
 * @author synder
 * @date 16/1/10
 * @desc
 */
Object.defineProperty(exports, "__esModule", { value: true });
let ENV = 'dev';
if (process.env.NODE_ENV != null) {
    ENV = process.env.NODE_ENV;
}
const config = require('./' + ENV.toLowerCase());
exports.default = config;
