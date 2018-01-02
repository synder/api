"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class InternalServerError extends HttpError_1.HttpError {
    constructor(msg = 'internal server') {
        super(msg, 500);
        this.message = msg;
    }
}
exports.InternalServerError = InternalServerError;
