import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TableService {
  constructor(private readonly prisma: PrismaService) { }

  findAll(): Promise<Table[]> {
    return this.prisma.table.findMany({
      orderBy: {
        number: 'asc'
      }
    });
  }

  findOne(id: string): Promise<Table> {
    return this.prisma.table.findUnique({ where: { id } });
  }

  create(dto: CreateTableDto): Promise<Table> {
    const data: Table = { ...dto };

    return this.prisma.table.create({ data });

  }

  update(id: string, dto: UpdateTableDto) {
    return `This action updates a #${id} table`;
  }

  remove(id: string) {
    return `This action removes a #${id} table`;
  }
}
