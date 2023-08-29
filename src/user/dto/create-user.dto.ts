import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsUrl, Matches, MinLength } from "class-validator"

export class CreateUserDto {

  @IsString()
  @ApiProperty({
    description: 'Name of the user',
    example: 1
  })
  name: string

  @IsString()
  @ApiProperty({
    description: 'Nickname of the user. Have be unique',
    example: 1
  })
  username: string

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
  confirm_password: string

  @IsString()
  @ApiProperty({
    description: 'User level to login',
    example: 'admin'
  })
  user_level: string

  @IsUrl()
  @ApiProperty({
    description: 'Profile photo of the user',
    example: 'https://avatars.githubusercontent.com/u/97460632?v=4'
  })
  image: string
}
