import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) { }

  findAll() {
    return this.prisma.order.findMany({
      select: {
        id: true,
        status: true,
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
            quantity: true,
            note: true,
            product: {
              select: {
                name: true,
                image: true,
                price: true
              }
            }
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
        status: true,
        table: {
          select: {
            number: true
          }
        },
        user: {
          select: {
            name: true,
            username: true
          }
        },
        products: {
          select: {
            quantity: true,
            note: true,
            product: {
              select: {
                name: true,
                image: true,
                price: true
              }
            }
          }
        }
      }
    })
  }

  create(userId: string, dto: CreateOrderDto) {
    const data: Prisma.OrderCreateInput = {
      user: {
        connect: {
          id: userId
        }
      },
      table: {
        connect: {
          number: dto.tableNumber
        }
      },
      products: {
        createMany: {
          data: dto.products.map((createOrderProductDto) => ({
            productId: createOrderProductDto.productId,
            quantity: createOrderProductDto.quantity,
            note: createOrderProductDto.note
          }))
        }
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
            name: true,
            username: true
          }
        },
        products: {
          select: {
            quantity: true,
            note: true,
            product: {
              select: {
                name: true,
                image: true,
                price: true
              }
            }
          }
        },
        status: true
      }
    }).catch(handleError);
  }

  updateOrderStatus(id: string, dto: UpdateOrderDto) {
    const data = { ...dto };

    return this.prisma.order.update({
      where: { id: id },
      data,
      select: {
        id: true,
        status: true,
        table: {
          select: {
            number: true
          }
        },
        products: {
          select: {
            product: {
              select: {
                name: true,
                image: true,
                price: true
              }
            }
          }
        },
        user: {
          select: {
            name: true,
            username: true
          }
        }
      }
    });
  }

}
