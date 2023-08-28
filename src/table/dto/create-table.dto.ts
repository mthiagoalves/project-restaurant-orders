import { IsNumber, IsPositive } from "class-validator";
import { ApiProperty } from "@nestjs/swagger/dist";

export class CreateTableDto {

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Number of the table',
    example: 1
  })
  number: number;
}
