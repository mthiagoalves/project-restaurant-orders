import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const user = req.user;

    if (!user) {
      throw new UnauthorizedException('User not authenticated');
    }

    // // Verificar o userLevel e permitir ou negar o acesso
    // if (user.userLevel === 'user' || user.userLevel === 'admin') {
    //   // Permite o acesso para user e admin
    //   next();
    // } else {
    //   throw new UnauthorizedException('Insufficient privileges');
    // }
  }
}
