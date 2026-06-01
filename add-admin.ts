import { db } from './src/lib/db'

async function main() {
  await db.adminWhitelist.upsert({
    where: { email: 'ratihcreativestudio@gmail.com' },
    update: {},
    create: { email: 'ratihcreativestudio@gmail.com' }
  });
  console.log('Successfully registered ratihcreativestudio@gmail.com');
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect());
