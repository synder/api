"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpError extends Error {
    constructor(msg, code) {
        super(msg);
        this.statusCode = code;
    }
    toString() {
        return 'http error: ' + this.message + ', status code is' + this.statusCode;
    }
}
exports.HttpError = HttpError;
