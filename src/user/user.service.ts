import { Injectable, UnprocessableEntityException, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  private fieldsUserSelected = {
    id: true,
    name: true,
    username: true,
    password: false,
    user_level: false,
    image: true,
    createdAt: true,
    updateAt: true
  };

  async findAll(): Promise<User[]> {
    try {
      const userCreated = await this.prisma.user.findMany({
        select: this.fieldsUserSelected
      });

      if (!userCreated || userCreated.length === 0) {
        throw new NotFoundException('Nothing user registered at the moment.');
      }

      return userCreated;

    } catch (error) {
      throw new UnprocessableEntityException(error);

    }
  }

  async findById(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({
      where: { id },
      select: this.fieldsUserSelected
    });

    if (!record) {
      throw new NotFoundException(`User as ID '${id}' was not found`);
    }

    return record;
  }

  findOne(id: string): Promise<User> {
    return this.findById(id);
  }

  async create(dto: CreateUserDto): Promise<User> {

    if (dto.password != dto.confirm_password) {
      throw new BadRequestException('Password dont mathces');
    }

    delete dto.confirm_password;

    const data: User = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10)
    };

    return this.prisma.user.create({
      data,
      select: this.fieldsUserSelected
    }).catch(this.handleError);

  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.findById(id);

    if (dto.password) {
      if (dto.password != dto.confirm_password) {
        throw new BadRequestException('Password dont mathces');
      }
    }
    delete dto.confirm_password;

    const data: Partial<User> = { ...dto };

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.user.update({
      where: { id: id },
      select: this.fieldsUserSelected,
      data
    }).catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.user.delete({ where: { id } });
  }

  private handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLines = errorLines[errorLines.length - 1]?.trim();
    throw new UnprocessableEntityException(lastErrorLines || 'Everything error');
  }
}
