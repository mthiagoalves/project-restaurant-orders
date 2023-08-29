import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { handleError } from 'src/utils/handle-error.util';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) { }

  findAll() {
    return this.prisma.order.findMany({
      select: {
        id: true,
        table: {
          select: {
            number: true
          }
        },
        user: {
          select: {
            name: true
          }
        },
        products: {
          select: {
            name: true,
            image: true,
            price: true
          }
        }
      }
    });
  }

  findOne(id: string) {
    return this.prisma.order.findUnique({
      where: { id },
      select: {
        id: true,
        table: {
          select: {
            number: true
          }
        },
        user: {
          select: {
            name: true
          }
        },
        products: {
          select: {
            name: true,
            image: true,
            price: true
          }
        }
      }
    })
  }

  create(dto: CreateOrderDto) {
    const data: Prisma.OrderCreateInput = {
      user: {
        connect: {
          id: dto.userId
        }
      },
      table: {
        connect: {
          number: dto.tableNumber
        }
      },
      products: {
        connect: dto.products.map(productId => ({
          id: productId
        }))
      },
      status: dto.status,
    };

    return this.prisma.order.create({
      data,
      select: {
        id: true,
        table: {
          select: {
            number: true
          }
        },
        user: {
          select: {
            name: true
          }
        },
        products: {
          select: {
            name: true
          }
        }
      }
    }).catch(handleError);
  }

  update(id: string, dto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }
}
