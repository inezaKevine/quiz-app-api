export class HttpException extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export class BadRequestException extends HttpException {
  constructor(message = "Bad Request") {
    super(400, message);
  }
}

export class UnauthorizedException extends HttpException {
  constructor(message = "Unauthorized") {
    super(401, message);
  }
}

export class NotFoundException extends HttpException {
  constructor(message = "Not Found") {
    super(404, message);
  }
}

export class ForbiddenException extends HttpException {
  constructor(message = "Forbidden") {
    super(403, message);
  }
}

export class NotAcceptableException extends HttpException {
  constructor(message = "Not Acceptable") {
    super(406, message);
  }
}

export class RequestTimeoutException extends HttpException {
  constructor(message = "Request Timeout") {
    super(408, message);
  }
}

export class ConflictException extends HttpException {
  constructor(message = "Conflict") {
    super(409, message);
  }
}
