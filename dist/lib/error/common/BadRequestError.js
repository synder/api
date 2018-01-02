"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class BadRequestError extends HttpError_1.HttpError {
    constructor(msg = 'bad request') {
        super(msg, 400);
        this.message = msg;
    }
}
exports.BadRequestError = BadRequestError;
