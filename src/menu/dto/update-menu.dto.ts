import { IsBoolean, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMenuDto {
  @ApiProperty({ example: "Kebabz" })  
  @IsOptional()
  name?: string;

  @ApiProperty({ example: 12.000 })
  @IsOptional()
  @IsNumber()
  price?: number;

  @ApiProperty({ example: true })
  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;
}
