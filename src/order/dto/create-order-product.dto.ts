import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsString, IsUUID } from "class-validator";

export class CreateOrderProductDto {

  @IsUUID()
  @ApiProperty({
    description: 'Product Id',
    example: '3feefa82-574e-4134-9633-bf7b5e170d12'
  })
  productId: string

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Quatity of products have in order',
    example: 2
  })
  quantity: number;

  @IsString()
  @ApiProperty({
    description: 'Add note of the order',
    example: 'Only Salmon'
  })
  note: string;
}
