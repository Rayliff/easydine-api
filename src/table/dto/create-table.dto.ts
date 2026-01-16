import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min } from 'class-validator';

export class CreateTableDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  tableNumber: number;

  @ApiProperty({ example: 4 })
  @IsInt()
  @Min(1)
  capacity: number;
}
