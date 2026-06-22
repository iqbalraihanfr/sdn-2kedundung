import { db as prisma } from '../src/lib/db'

async function main() {
  const subjects = [
    'Bahasa Indonesia',
    'Matematika',
    'PPKn',
    'PJOK',
    'Seni Budaya',
    'PAI'
  ]

  for (const name of subjects) {
    const existing = await prisma.subject.findFirst({ where: { name } })
    if (!existing) {
      await prisma.subject.create({ data: { name } })
    }
  }

  console.log('Successfully seeded mandatory subjects.')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
