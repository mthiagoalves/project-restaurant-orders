import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TableService {
  constructor(private readonly prisma: PrismaService){}

  findAll() {
    return this.prisma.table.findMany({
      orderBy: {
        number: 'asc'
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} table`;
  }

  create(dto: CreateTableDto) {
    const data: Table = {...dto};

    return this.prisma.table.create({ data });

  }

  update(id: number, updateTableDto: UpdateTableDto) {
    return `This action updates a #${id} table`;
  }

  remove(id: number) {
    return `This action removes a #${id} table`;
  }
}
