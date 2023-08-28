import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';

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

  async findById(id: string): Promise<Table> {
    const record = await this.prisma.table.findUnique({ where: { id } });

    if(!record) {
      throw new NotFoundException(`Table as ID '${id}' was not found`);
    }

    return record;
  }

  findOne(id: string): Promise<Table> {
    return this.findById(id);
  }

  create(dto: CreateTableDto): Promise<Table> {
    const data: Table = { ...dto };

    return this.prisma.table.create({ data });

  }

  async update(id: string, dto: UpdateTableDto): Promise<Table> {
    await this.findById(id);

    const data: Partial<Table> = { ...dto };

    return this.prisma.table.update({
      where: { id: id },
      data
    });
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.table.delete({ where: { id } });
  }
}
