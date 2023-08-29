import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsString, IsUUID, ValidateNested } from "class-validator";
import { CreateOrderProductDto } from "./create-order-product.dto";
import { Type } from "class-transformer";

export class CreateOrderDto {

  @IsUUID()
  @ApiProperty({
    description: 'User Id to creating order',
    example: 'daeadaf9-451e-4f41-90ea-86c68f9b916a'
  })
  userId: string;

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
