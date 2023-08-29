import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsPositive, IsString } from "class-validator"

export class CreateProductDto {

  @IsString()
  @ApiProperty({
    description: 'Name of the product',
    example: 'Vegan Harumaki'
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Slug of the product generate automatic as name',
    example: 'Vegan Harumaki'
  })
  slug: string;

  @IsString()
  @ApiProperty({
    description: 'Description of the product',
    example: 'A little description about this product...'
  })
  description: string;

  @IsNumber({
    maxDecimalPlaces: 2
  })
  @IsPositive()
  @ApiProperty({
    description: 'Price of the product',
    example: 5.00
  })
  price: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Order for show the product',
    example: 1
  })
  order: number

  @IsString()
  @ApiProperty({
    description: 'Image of the product',
    example: 'https://i.imgur.com/hNE75Iw.png'
  })
  image: string
}
