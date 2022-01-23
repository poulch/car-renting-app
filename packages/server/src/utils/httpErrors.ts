import { STATUS, RESPONSE } from './constants';

export class HttpError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;

    Object.setPrototypeOf(this, HttpError.prototype);
  }
}

export const BadRequestError = (message: string = RESPONSE.BAD_REQUEST) =>
  new HttpError(STATUS.BAD_REQUEST, message);

export const UnautorizedError = (message: string = RESPONSE.UNAUTHORIZED) =>
  new HttpError(STATUS.UNAUTHORIZED, message);

export const ForbiddenError = (message: string = RESPONSE.FORBIDDEN) =>
  new HttpError(STATUS.FORBIDDEN, message);

export const NotFoundError = (message: string = RESPONSE.NOT_FOUND) =>
  new HttpError(STATUS.NOT_FOUND, message);

export const ConflictError = (message: string = RESPONSE.CONFLICT) =>
  new HttpError(STATUS.CONFLICT, message);

export const InternalServerError = (message: string = RESPONSE.INTERNAL_ERROR) =>
  new HttpError(STATUS.INTERNAL_ERROR, message);
