import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('api/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all orders registred'
  })
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a order for id'
  })
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new order'
  })
  create(@Body() dto: CreateOrderDto) {
    return this.orderService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a order for id'
  })
  updateOrderStatus(@Param('id') id: string, @Body() dto: UpdateOrderDto) {
    return this.orderService.updateOrderStatus(id, dto);
  }
}
