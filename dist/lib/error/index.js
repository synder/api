"use strict";
/**
 * @author synder on 2017/2/23
 * @copyright
 * @desc
 */
Object.defineProperty(exports, "__esModule", { value: true });
const BadRequestError_1 = require("./common/BadRequestError");
exports.BadRequestError = BadRequestError_1.BadRequestError;
const ForbiddenError_1 = require("./common/ForbiddenError");
exports.ForbiddenError = ForbiddenError_1.ForbiddenError;
const HttpError_1 = require("./common/HttpError");
exports.HttpError = HttpError_1.HttpError;
const InternalServerError_1 = require("./common/InternalServerError");
exports.InternalServerError = InternalServerError_1.InternalServerError;
const NotFoundError_1 = require("./common/NotFoundError");
exports.NotFoundError = NotFoundError_1.NotFoundError;
const UnauthorizedError_1 = require("./common/UnauthorizedError");
exports.UnauthorizedError = UnauthorizedError_1.UnauthorizedError;
