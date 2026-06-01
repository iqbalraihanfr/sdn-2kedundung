import * as fs from 'fs'
import * as path from 'path'
import { v4 as uuidv4 } from 'uuid'

async function main() {
  console.log('Membaca file CSV...')
  const csvPath = path.join(process.cwd(), 'DATA PD SIMPLE.csv')
  const fileContent = fs.readFileSync(csvPath, 'utf-8')
  
  const lines = fileContent.split('\n')
  const dataLines = lines.slice(6).filter(line => line.trim() !== '' && !line.startsWith(';'))
  
  const students: any[] = []
  const uniqueClasses = new Set<string>()
  
  for (const line of dataLines) {
    const columns = line.split(';')
    if (columns.length < 16) continue
    
    const name = columns[1]?.trim().replace(/'/g, "''")
    const nisn = columns[4]?.trim()
    const className = columns[15]?.trim().replace(/'/g, "''")
    
    if (name && nisn && className) {
      uniqueClasses.add(className)
      students.push({ nisn, name, className })
    }
  }

  let sql = 'BEGIN;\n'
  
  const classMap = new Map<string, string>()
  for (const className of uniqueClasses) {
    const id = uuidv4()
    classMap.set(className, id)
    sql += `INSERT INTO "classes" (id, name, "updatedAt") VALUES ('${id}', '${className}', NOW()) ON CONFLICT DO NOTHING;\n`
  }

  for (const student of students) {
    const classId = classMap.get(student.className)
    const id = uuidv4()
    sql += `INSERT INTO "students" (id, nisn, name, "classId", "updatedAt") VALUES ('${id}', '${student.nisn}', '${student.name}', '${classId}', NOW()) ON CONFLICT ("nisn") DO NOTHING;\n`
  }
  
  sql += 'COMMIT;\n'

  const outPath = path.join(process.cwd(), 'seed.sql')
  fs.writeFileSync(outPath, sql)
  console.log('Berhasil membuat seed.sql')
}

main().catch(console.error)
