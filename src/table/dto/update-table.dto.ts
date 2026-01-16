import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, Min } from 'class-validator';

export class UpdateTableDto {
  @ApiProperty({ example: 2, required: false })
  @IsOptional()
  @IsInt()
  tableNumber?: number;

  @ApiProperty({ example: 6, required: false })
  @IsOptional()
  @IsInt()
  @Min(1)
  capacity?: number;

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;
}
