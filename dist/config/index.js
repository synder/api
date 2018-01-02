"use strict";
/**
 * @author synder
 * @date 16/1/10
 * @desc
 */
Object.defineProperty(exports, "__esModule", { value: true });
let NODE_ENV = "dev";
if (process.env.NODE_ENV != null) {
  NODE_ENV = process.env.NODE_ENV;
}
const config = require("./" + NODE_ENV.toLowerCase());
exports.default = config;
