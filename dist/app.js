"use strict";
/**
 * @author synder
 * @date 18/1/2
 * @desc create http server
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const compress = require("koa-compress");
const logger = require("koa-logger");
const app = new Koa();
exports.app = app;
app.use(logger());
app.use(compress());
const user_1 = require("./router/user");
app.use(user_1.userRouter.routes());
