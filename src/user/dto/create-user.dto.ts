import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsUrl, Matches, MinLength } from "class-validator"

export class CreateUserDto {

  @IsString()
  @ApiProperty({
    description: 'Name of the user',
    example: 'Thiago Alves'
  })
  name: string

  @IsString()
  @ApiProperty({
    description: 'Nickname of the user. Have be unique',
    example: 'thiaguinho-imbarie'
  })
  username: string

  @IsString()
  @Matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, {
    message: 'Invalid email format'
  })
  @ApiProperty({
    description: 'Email of the user. Have be unique',
    example: 'thiaguinho.imabarie@outlook.com'
  })
  email: string

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password is weak'
  })
  @ApiProperty({
    description: 'Password of the user to login',
    example: 'Abcd@1234'
  })
  password: string

  @ApiProperty({
    description: 'Just confirm password',
    example: 'Abcd@1234'
  })
  confirmPassword: string

  @IsString()
  @ApiProperty({
    description: 'User level to login',
    example: 'admin'
  })
  userLevel: string

  @IsUrl()
  @ApiProperty({
    description: 'Profile photo of the user',
    example: 'https://avatars.githubusercontent.com/u/97460632?v=4'
  })
  image: string
}
