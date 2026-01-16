import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMenuDto {
  @ApiProperty({ example: "Kebab" })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 10.000 })
  @IsNumber()
  price: number;

  @ApiProperty({ example: true })
  @IsBoolean()
  isAvailable: boolean;
}
