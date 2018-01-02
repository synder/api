import { HttpError } from './HttpError'

class ForbiddenError extends HttpError {
  constructor(msg: string = 'request forbidden') {
    super(msg, 403)
    this.message = msg
  }
}

export { ForbiddenError }
