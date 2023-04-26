import { NextFunction, Request, Response } from 'express';
import { APIError } from '../errors/APIError';
import { env } from '../config/env.config';
import { InternalServerError } from '../errors/InternalServerError';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(error: APIError | Error, req: Request, res: Response, next: NextFunction) {

  if(error instanceof APIError && !(error instanceof InternalServerError)) {
    if(env.NODE_ENV === 'development') {
      console.warn('## API Error detected  ##');
      console.log(`${error.statusCode}: ${error.message}`);
    }

    return res.status(error.statusCode).json({ error_feedback: error.message });
  }

  console.error('############### ERROR HANDLER ###############');
  console.error(error);
  console.error('#############################################');

  return res.status(500).json({ error_feedback: error.message || 'Houve um problema interno no nosso servidor, tente novamente mais tarde.' });
}
