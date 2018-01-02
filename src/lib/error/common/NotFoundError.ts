import { HttpError } from './HttpError'

class NotFoundError extends HttpError {
  constructor(msg: string) {
    super(msg, 404)
    this.message = 'resource "' + msg + '" not found'
  }
}

export { NotFoundError }
