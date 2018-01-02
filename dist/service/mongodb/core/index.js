"use strict";
/**
 * @author synder
 * @date 16/1/10
 * @desc
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.mongoose = mongoose;
const config_1 = require("../../config");
const CONFIG = config_1.default.mongodb.core;
if (!CONFIG) {
    throw new Error('please provide mongodb config');
}
const client = mongoose.createConnection(CONFIG.uri, {
    user: CONFIG.user,
    pass: CONFIG.pass,
});
exports.client = client;
