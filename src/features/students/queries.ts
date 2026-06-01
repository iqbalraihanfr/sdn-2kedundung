import { db } from '@/lib/db'
import type { StudentInput } from './schemas'

export const studentQueries = {
  findAll: (classId?: string) => {
    return db.student.findMany({
      where: classId ? { classId } : undefined,
      include: { class: true },
      orderBy: { name: 'asc' },
    })
  },
  findById: (id: string) => {
    return db.student.findUnique({
      where: { id },
      include: { class: true },
    })
  },
  findByNisn: (nisn: string) => {
    return db.student.findUnique({
      where: { nisn },
    })
  },
  create: (data: StudentInput) => {
    return db.student.create({ data })
  },
  update: (id: string, data: StudentInput) => {
    return db.student.update({
      where: { id },
      data,
    })
  },
  delete: (id: string) => {
    return db.student.delete({
      where: { id },
    })
  },
}
