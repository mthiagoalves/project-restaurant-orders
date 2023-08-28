import { Injectable, UnprocessableEntityException, NotFoundException } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TableService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll(): Promise<Table[]> {
    try {
      const tableCreated = await this.prisma.table.findMany({
        orderBy: {
          number: 'asc'
        }
      });

      if (!tableCreated || tableCreated.length === 0) {
        throw new NotFoundException('Nothing tables registered at the moment.');
      }

      return tableCreated;
    } catch (error) {
      throw new UnprocessableEntityException(error);

    }
  }

  async findById(id: string): Promise<Table> {
    const record = await this.prisma.table.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Table as ID '${id}' was not found`);
    }

    return record;
  }

  findOne(id: string): Promise<Table> {
    return this.findById(id);
  }

  create(dto: CreateTableDto): Promise<Table> {
    const data: Table = { ...dto };

    return this.prisma.table.create({ data }).catch(this.handleError);

  }

  async update(id: string, dto: UpdateTableDto): Promise<Table> {
    await this.findById(id);

    const data: Partial<Table> = { ...dto };

    return this.prisma.table.update({
      where: { id: id },
      data
    }).catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.table.delete({ where: { id } });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLines = errorLines[errorLines.length - 1]?.trim();
    throw new UnprocessableEntityException(lastErrorLines || 'Everything error');
  }
}
