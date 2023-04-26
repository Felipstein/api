import { APIError } from './APIError';

export class InternalServerError extends APIError {

  constructor(message = 'Ocorreu um erro interno no nosso servidor, tente novamente mais tarde.', statusCode = 500) {
    super(message, statusCode);
  }

}
