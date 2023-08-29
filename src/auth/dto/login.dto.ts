import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class LoginDto{

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Nick of the user',
    example: 'thiaguinho-imbarie'
  })
  nickname: string;

  @IsString()
  @IsEmail({}, {message: 'Invalid email format'})
  @IsOptional()
  @ApiProperty({
    description: 'Email of the user',
    example: 'thiaguinho.imabarie@outlook.com'
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Password of the user',
    example: 'Abdc@1234'
  })
  password: string;
}
