import { db as prisma } from '../src/lib/db'
import * as fs from 'fs'
import * as path from 'path'

async function main() {
  const csvPath = path.join(process.cwd(), 'DATA PD SIMPLE.csv')
  const csvData = fs.readFileSync(csvPath, 'utf-8')

  const lines = csvData.split('\n').map(line => line.trim()).filter(line => line)
  
  let dataStartIndex = 0
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('No;Nama;NIPD')) {
      dataStartIndex = i + 2
      break
    }
  }

  const studentsData = lines.slice(dataStartIndex).map(line => {
    const parts = line.split(';')
    if (parts.length < 15 || !parts[0]) return null

    return {
      name: parts[1],
      nipd: parts[2],
      gender: parts[3],
      nisn: parts[4],
      birthPlace: parts[5],
      birthDate: parts[6] ? new Date(parts[6]) : null,
      nik: parts[7],
      religion: parts[8],
      address: parts[9],
      village: parts[10],
      district: parts[11],
      fatherName: parts[12],
      fatherJob: parts[13],
      motherName: parts[14],
      rombel: parts[15],
    }
  }).filter(Boolean)

  console.log(`Found ${studentsData.length} valid student records.`)

  const classes = [...new Set(studentsData.map(s => s?.rombel).filter(Boolean))]
  const classMap = new Map<string, string>()

  for (const className of classes) {
    let cls = await prisma.class.findFirst({ where: { name: className as string } })
    if (!cls) {
      cls = await prisma.class.create({ data: { name: className as string } })
    }
    classMap.set(className as string, cls.id)
  }

  await prisma.student.deleteMany()
  console.log('Cleared existing student data.')

  let count = 0
  for (const s of studentsData) {
    if (!s || !s.nisn) continue

    try {
      await prisma.student.create({
        data: {
          nisn: s.nisn,
          name: s.name,
          classId: classMap.get(s.rombel as string)!,
          nipd: s.nipd,
          gender: s.gender,
          birthPlace: s.birthPlace,
          birthDate: s.birthDate,
          nik: s.nik,
          religion: s.religion,
          address: s.address,
          village: s.village,
          district: s.district,
          fatherName: s.fatherName,
          fatherJob: s.fatherJob,
          motherName: s.motherName,
        }
      })
      count++
    } catch (err) {
      console.error(`Error inserting student ${s.name}:`, err)
    }
  }

  console.log(`Import completed successfully. Inserted ${count} students.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
