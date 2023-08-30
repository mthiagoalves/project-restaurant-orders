import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from 'src/user/entities/user.entity';


@ApiTags('Orders')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('api/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

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
  create(@LoggedUser() user: User, @Body() dto: CreateOrderDto) {
    return this.orderService.create(user.id, dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a order for id'
  })
  updateOrderStatus(@Param('id') id: string, @Body() dto: UpdateOrderDto) {
    return this.orderService.updateOrderStatus(id, dto);
  }
}
function AuthGuards(): Function | import("@nestjs/common").CanActivate {
  throw new Error('Function not implemented.');
}

