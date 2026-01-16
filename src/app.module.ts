import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { BookingModule } from './booking/booking.module';
import { TableModule } from './table/table.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [AuthModule, UsersModule, PrismaModule, BookingModule, TableModule, MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
