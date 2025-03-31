// app/prisma/seed.ts
import { PrismaClient, Applications } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {


  const amountOfUsers = 15;

  const applications: Applications[] = [];

  for (let i = 0; i < amountOfUsers; i++) {
  

    const application: Applications = {
      id: i,
      courseId: faker.number.int({min:1, max:10}),
      price: faker.number.int({min: 15000, max: 45000})
    };

    applications.push(application);
  }

  const addUsers = async () => await prisma.applications.createMany({ data: applications });

  addUsers();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });