import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';

@Injectable()
export class TableService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateTableDto) {
    return this.prisma.table.create({ data: dto });
  }

  findAll() {
    return this.prisma.table.findMany({
      orderBy: { tableNumber: 'asc' },
    });
  }

  update(id: number, dto: UpdateTableDto) {
    return this.prisma.table.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.table.delete({
      where: { id },
    });
  }
}
