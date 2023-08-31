import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(baseUrl: string) {
    return {
      status: 'Project running 🐱‍🏍🚀: \n  http://localhost:3454/api for Swagger docs...',
      docs: baseUrl + '/api'
    }
  }
}
