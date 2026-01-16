import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Get,
  Patch,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingStatusDto } from './dto/update-booking-status.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Booking')
@ApiBearerAuth()
@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  // CUSTOMER — create booking
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create booking (Customer)' })
  create(@Request() req, @Body() dto: CreateBookingDto) {
    return this.bookingService.create(req.user.userId, dto);
  }

  // CUSTOMER — lihat booking sendiri
  @UseGuards(JwtAuthGuard)
  @Get('me')
  @ApiOperation({ summary: 'Get my bookings' })
  findMy(@Request() req) {
    return this.bookingService.findMyBookings(req.user.userId);
  }

  // ADMIN — lihat semua booking
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get()
  @ApiOperation({ summary: 'Get all bookings (Admin)' })
  findAll() {
    return this.bookingService.findAll();
  }

  // ADMIN — update status
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Patch(':id/status')
  @ApiOperation({ summary: 'Update booking status (Admin)' })
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateBookingStatusDto,
  ) {
    return this.bookingService.updateStatus(id, dto.status);
  }
}
