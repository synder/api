"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class UnauthorizedError extends HttpError_1.HttpError {
    constructor(msg = 'unauthorized') {
        super(msg, 401);
        this.message = msg;
    }
}
exports.UnauthorizedError = UnauthorizedError;
