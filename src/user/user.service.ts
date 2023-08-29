import { BadRequestException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  private fieldsUserSelected = {
    id: true,
    name: true,
    username: true,
    password: false,
    userLevel: false,
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

    if (dto.password != dto.confirmPassword) {
      throw new BadRequestException('Password dont mathces');
    }
    delete dto.confirmPassword;

    const data: User = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10)
    };

    return this.prisma.user.create({
      data,
      select: this.fieldsUserSelected
    }).catch(handleError);

  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.findById(id);

    if (dto.password) {
      if (dto.password != dto.confirmPassword) {
        throw new BadRequestException('Password dont mathces');
      }
    }
    delete dto.confirmPassword;

    const data: Partial<User> = { ...dto };

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.user.update({
      where: { id: id },
      select: this.fieldsUserSelected,
      data
    }).catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.user.delete({ where: { id } });
  }
}
