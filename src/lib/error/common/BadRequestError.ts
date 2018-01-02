import { HttpError } from './HttpError'

class BadRequestError extends HttpError {
  constructor(msg: string = 'bad request') {
    super(msg, 400)
    this.message = msg
  }
}

export { BadRequestError }
