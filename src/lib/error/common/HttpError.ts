class HttpError extends Error {
  private readonly statusCode: number

  constructor(msg: string, code: number) {
    super(msg)
    this.statusCode = code
  }

  public toString() {
    return 'http error: ' + this.message + ', status code is' + this.statusCode
  }
}

export { HttpError }
