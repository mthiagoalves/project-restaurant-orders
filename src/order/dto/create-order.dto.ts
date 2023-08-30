import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsString, IsUUID, ValidateNested } from "class-validator";
import { CreateOrderProductDto } from "./create-order-product.dto";
import { Type } from "class-transformer";

export class CreateOrderDto {

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Table number where is creating order',
    example: 1
  })
  tableNumber: number;

  @ValidateNested({ each: true })
  @Type(() => CreateOrderProductDto)
  @ApiProperty({
    description: 'Array with ID of the products in order',
    type: [CreateOrderProductDto]
  })
  products: CreateOrderProductDto[];

  @IsString()
  @ApiProperty({
    description: 'Status of the order',
    example: 'Received'
  })
  status: string
}
