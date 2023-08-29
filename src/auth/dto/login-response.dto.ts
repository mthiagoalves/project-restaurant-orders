import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entities/user.entity";

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT with automatic generation',
    example: 'TOKEN_GENERATED'
  })
  token: string;

  @ApiProperty({
    description: 'User Auth',
  })
  user: User;
}
