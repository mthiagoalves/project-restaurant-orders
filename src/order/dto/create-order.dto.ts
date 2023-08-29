import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsString, IsUUID } from "class-validator";

export class CreateOrderDto {

  @IsUUID()
  @ApiProperty({
    description: 'User Id to creating order',
    example: '1596975a-16f1-44e9-b4b2-d66d4188c87b'
  })
  userId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Table number where is creating order',
    example: 1
  })
  tableNumber: number;

  @IsUUID(undefined, {each: true})
  @ApiProperty({
    description: 'Array with ID of the products in order',
    example: '["ca44ef65-8349-4086-87ec-e4cb6c5715a3", "d7a76898-aa28-4578-86c4-beac2c468548"]'
  })
  products: string[];

  @IsString()
  @ApiProperty({
    description: 'Status of the order',
    example: 'Received'
  })
  status: string
}
