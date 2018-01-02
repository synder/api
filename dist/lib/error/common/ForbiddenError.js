"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class ForbiddenError extends HttpError_1.HttpError {
  constructor(msg = "request forbidden") {
    super(msg, 403);
    this.message = msg;
  }
}
exports.ForbiddenError = ForbiddenError;
