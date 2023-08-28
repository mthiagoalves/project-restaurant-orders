import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TableService } from './table.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Table } from './entities/table.entity';

@ApiTags('Tables')
@Controller('api/tables')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all tables registred'
  })
  findAll(): Promise<Table[]> {
    return this.tableService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a table for id'
  })
  findOne(@Param('id') id: string): Promise<Table> {
    return this.tableService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new table'
  })
  create(@Body() dto: CreateTableDto): Promise<Table> {
    return this.tableService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a table for id'
  })
  update(@Param('id') id: string, @Body() dto: UpdateTableDto) {
    return this.tableService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete table for id'
  })
  remove(@Param('id') id: string) {
    return this.tableService.remove(id);
  }
}
