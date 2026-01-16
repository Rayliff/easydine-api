import { PrismaClient, Role, BookingStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // ===== USERS =====
  const admin = await prisma.user.create({
    data: {
      name: 'Admin',
      email: 'admin@mail.com',
      password: '123', 
      role: Role.ADMIN,
    },
  });

  const customer = await prisma.user.create({
    data: {
      name: 'Customer',
      email: 'customer@mail.com',
      password: '123',
      role: Role.CUSTOMER,
    },
  });

  // ===== TABLES =====
  const table1 = await prisma.table.create({
    data: {
      tableNumber: 1,
      capacity: 4,
    },
  });

  const table2 = await prisma.table.create({
    data: {
      tableNumber: 2,
      capacity: 6,
    },
  });

  // ===== MENU =====
  await prisma.menu.createMany({
    data: [
      { name: 'Nasi Goreng', price: 25000 },
      { name: 'Mie Goreng', price: 23000 },
      { name: 'Es Teh', price: 5000 },
    ],
  });

  // ===== BOOKING =====
  await prisma.booking.create({
    data: {
      userId: customer.id,
      tableId: table1.id,
      bookingDate: new Date(),
      status: BookingStatus.PENDING,
    },
  });

  console.log('✅ Seeding selesai');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });