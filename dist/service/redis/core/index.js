"use strict";
/**
 * @author synder on 2017/2/18
 * @copyright
 * @desc
 */
Object.defineProperty(exports, "__esModule", { value: true });
const redis = require("redis");
const config_1 = require("../../config");
const CONFIG = config_1.default.redis.core;
if (CONFIG != null) {
    throw new Error('please provide redis config');
}
const client = redis.createClient({
    host: CONFIG.host,
    port: CONFIG.port,
    db: CONFIG.db,
    password: CONFIG.pass,
});
exports.client = client;
