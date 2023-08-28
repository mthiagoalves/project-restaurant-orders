// src/error.middleware.ts

import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';

@Catch()
export class ErrorMiddleware implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let message =
      exception instanceof HttpException
        ? exception.getResponse()
        : 'Erro interno do servidor';

    if (exception instanceof Error) {
      message = exception.message || message;
    }
    console.error(exception);

    response.status(status).json({
      timestamp: new Date().toISOString(),
      path: request.url,
      error: message,
    });
  }
}
