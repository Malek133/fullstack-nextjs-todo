import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
 await prisma.user.create({
    data: {
        email: 'alpha@prisma.ru',
        name: 'alphazero',
        address:{
          street: '123 Main St',
          city:'westham',
          state:"london",
          zip:"77000"
        },
      },
 })
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })