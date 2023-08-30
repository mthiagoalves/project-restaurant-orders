import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entities/user.entity";

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT with automatic generation',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRoaWFndWluaG8taW1iYXJpZSIsImlhdCI6MTY5MzM4OTM4NCwiZXhwIjoxNjkzNDA3Mzg0fQ.xRrUXBeZPtEZv1vNG3S2uCjQ3tyq1KIclzHCYkwuPtw'
  })
  token: string;

  @ApiProperty({
    description: 'User Auth',
  })
  user: User;
}
