import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/user/entities/user.entity';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService) { }

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const { username, email, password } = loginDto;

    let user: User;

    if (username) {
      user = await this.prisma.user.findUnique({ where: { username } });
    } else if (email) {
      user = await this.prisma.user.findUnique({ where: { email } });
    }

    if (!user) {
      throw new UnauthorizedException('User not found or not registred');
    }

    const isHashValid = await bcrypt.compare(password, user.password);

    if (!isHashValid) {
      throw new UnauthorizedException('User or password incorrect')
    }

    delete user.password;

    return {
      token: this.jwtService.sign({ username }),
      user
    }
  }
}
