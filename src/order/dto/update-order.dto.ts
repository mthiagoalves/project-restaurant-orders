import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateOrderDto {
  @IsString()
  @ApiProperty({
    description: 'Updated status of the order',
    example: 'Completed'
  })
  status: string;
}
