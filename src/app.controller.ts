import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Status')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAppStatus(@Req() req: Request) {
    const baseUrl = req.protocol + '://' + req.get('host');
    return this.appService.getAppStatus(baseUrl);
  }
}
