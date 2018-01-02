import { HttpError } from './HttpError'

class UnauthorizedError extends HttpError {
  constructor(msg: string = 'unauthorized') {
    super(msg, 401)
    this.message = msg
  }
}

export { UnauthorizedError }
