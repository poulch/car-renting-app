export enum STATUS {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_ERROR = 500,
}

export enum RESPONSE {
  BAD_REQUEST = 'The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).',
  UNAUTHORIZED = 'The request has not been applied because it lacks valid authentication credentials for the target resource.',
  FORBIDDEN = 'The server understood the request but refuses to authorize it.',
  NOT_FOUND = 'The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.',
  CONFLICT = 'The request could not be completed due to a conflict with the current state of the target resource. This code is used in situations where the user might be able to resolve the conflict and resubmit the request.',
  INTERNAL_ERROR = 'The server encountered an unexpected condition that prevented it from fulfilling the request.',
}
