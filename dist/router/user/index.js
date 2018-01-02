"use strict";
/**
 * @author synder
 * @date 16/1/10
 * @desc
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const account = require("../../controller/user/account");
const userRouter = new Router({
  prefix: "/user"
});
exports.userRouter = userRouter;
userRouter.get("/", account.home);
