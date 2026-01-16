import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { BookingStatus } from '@prisma/client';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, dto: CreateBookingDto) {
  const table = await this.prisma.table.findUnique({
    where: { id: dto.tableId },
  });

  if (!table) {
    throw new BadRequestException('Table not found');
  }

  return this.prisma.booking.create({
    data: {
      userId,
      tableId: dto.tableId,
      bookingDate: new Date(dto.bookingDate),
      status: BookingStatus.PENDING,
    },
  });
  }

  findMyBookings(userId: number) {
    return this.prisma.booking.findMany({
      where: { userId },
      include: {
        table: true,
      },
    });
  }

  findAll() {
    return this.prisma.booking.findMany({
      include: {
        user: true,
        table: true,
      },
    });
  }

  updateStatus(bookingId: number, status: BookingStatus) {
    return this.prisma.booking.update({
      where: { id: bookingId },
      data: { status },
    });
  }
}
