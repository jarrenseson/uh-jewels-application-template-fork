// import { PrismaClient, Role } from '@prisma/client';
// import { hash } from 'bcrypt';
// import * as config from '../config/settings.development.json';

// const prisma = new PrismaClient();

// async function main() {
//   console.log('Seeding the database');
//   const password = await hash('changeme', 10);
//   config.defaultAccounts.forEach(async (account) => {
//     let role: Role = 'USER';
//     if (account.role === 'ADMIN') {
//       role = 'ADMIN';
//     }
//     console.log(`  Creating user: ${account.email} with role: ${role}`);
//     await prisma.user.upsert({
//       where: { email: account.email },
//       update: {},
//       create: {
//         email: account.email,
//         password,
//         role,
//       },
//     });
//     config.defaultJewels.forEach(async (jewels, index) => {
//       console.log(`  Adding jewels: ${jewels.name}`);
//       await prisma.jewels.upsert({
//         where: { id: index },
//         update: {},
//         create: {
//           name: jewels.name,
//           price: jewels.price,
//           image: jewels.image,
//           owner: jewels.owner,
//           description: jewels.description,
//         },
//       });
//     });
//   });
// }
// main()
//   .then(() => prisma.$disconnect())
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

import { PrismaClient, Role } from '@prisma/client';
import { hash } from 'bcrypt';
import * as config from '../config/settings.development.json';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding the database');

  const password = await hash('changeme', 10);

  // Create users
  await Promise.all(
    config.defaultAccounts.map(async (account) => {
      try {
        const role: Role = account.role === 'ADMIN' ? 'ADMIN' : 'USER';
        console.log(`  Creating user: ${account.email} with role: ${role}`);
        await prisma.user.upsert({
          where: { email: account.email },
          update: {}, // No updates in this case, just upsert
          create: {
            email: account.email,
            password,
            role,
          },
        });
      } catch (error) {
        console.error(`Failed to create user ${account.email}:`, error);
      }
    }),
  );

  // Create jewels
  await Promise.all(
    config.defaultJewels.map(async (jewel) => {
      try {
        console.log(`  Adding jewel: ${jewel.name}`);
        await prisma.jewels.upsert({
          where: { name: jewel.name }, // Ensure 'name' is unique in your schema
          update: {}, // No updates in this case, just upsert
          create: {
            name: jewel.name,
            price: jewel.price,
            image: jewel.image,
            owner: jewel.owner,
            description: jewel.description,
          },
        });
      } catch (error) {
        console.error(`Failed to add jewel ${jewel.name}:`, error);
      }
    }),
  );

  console.log('Database seeding completed.');
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
