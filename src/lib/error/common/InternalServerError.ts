import { HttpError } from './HttpError'

class InternalServerError extends HttpError {
  constructor(msg: string = 'internal server') {
    super(msg, 500)
    this.message = msg
  }
}

export { InternalServerError }
