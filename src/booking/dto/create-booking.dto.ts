import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsDateString } from 'class-validator';

export class CreateBookingDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  tableId: number;

  @ApiProperty({ example: '2026-01-20T18:00:00Z' })
  @IsDateString()
  bookingDate: string;
}
