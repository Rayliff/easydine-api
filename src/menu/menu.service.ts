import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateMenuDto) {
    return this.prisma.menu.create({ data: dto });
  }

  findAll() {
    return this.prisma.menu.findMany();
  }

  findOne(id: number) {
    return this.prisma.menu.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateMenuDto) {
    return this.prisma.menu.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.menu.delete({ where: { id } });
  }
}
