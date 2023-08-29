import { Injectable, UnprocessableEntityException, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll(): Promise<Product[]> {
    try {
      const productCreated = await this.prisma.product.findMany({
        orderBy: {
          order: 'asc'
        }
      });

      if (!productCreated || productCreated.length === 0) {
        throw new NotFoundException('Nothing product registered at the moment.');
      }

      return productCreated;
    } catch (error) {
      throw new UnprocessableEntityException(error);

    }
  }

  async findById(id: string): Promise<Product> {
    const record = await this.prisma.product.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Product as ID '${id}' was not found`);
    }

    return record;
  }

  findOne(id: string): Promise<Product> {
    return this.findById(id);
  }

  create(dto: CreateProductDto): Promise<Product> {
    const data: Product = { ...dto };

    data.slug = this.formatSlug(data.name);

    return this.prisma.product.create({ data }).catch(handleError);

  }

  async update(id: string, dto: UpdateProductDto): Promise<Product> {
    await this.findById(id);

    const data: Partial<Product> = { ...dto };

    return this.prisma.product.update({
      where: { id: id },
      data
    }).catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.product.delete({ where: { id } });
  }

  private formatSlug(name: string): string {
    return name.replace(/\s+/g, '-').toLowerCase();
  }
}
