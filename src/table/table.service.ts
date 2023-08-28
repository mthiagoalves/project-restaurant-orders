import { Injectable } from '@nestjs/common';

@Injectable()

export class TableService{

  findAll(){
    return 'All Tables';
  }
}
