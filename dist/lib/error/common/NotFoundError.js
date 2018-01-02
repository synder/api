"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class NotFoundError extends HttpError_1.HttpError {
  constructor(msg) {
    super(msg, 404);
    this.message = 'resource "' + msg + '" not found';
  }
}
exports.NotFoundError = NotFoundError;
