import { PrismaClient } from '@prisma/client'
// import {faker} from '@faker-js/faker'
const prisma = new PrismaClient()

async function main() {

  // generate fake data for user model
//  await prisma.user.createMany({
//     data:Array.from({length:27}, () =>( {
//       email:faker.internet.email(),
//       name:faker.internet.userName(),
//       address:{
//         street:faker.location.streetAddress(),
//         city:faker.location.city(),
//         state:faker.location.state(),
//         zip:faker.location.zipCode()
//       },
//     }))
// })

// // generate fake data for todo model

// await prisma.todo.createMany({
//   data:Array.from({length:27}, () =>( {
//     title:faker.person.firstName(),
//     body:faker.lorem.paragraph()
//   }))
// })

}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })