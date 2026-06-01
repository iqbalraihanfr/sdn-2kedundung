import { db } from '@/lib/db'
import type { SubjectInput } from './schemas'

export const subjectQueries = {
  findAll: () => {
    return db.subject.findMany({
      orderBy: { name: 'asc' },
    })
  },
  findById: (id: string) => {
    return db.subject.findUnique({
      where: { id },
    })
  },
  create: (data: SubjectInput) => {
    return db.subject.create({ data })
  },
  update: (id: string, data: SubjectInput) => {
    return db.subject.update({
      where: { id },
      data,
    })
  },
  delete: (id: string) => {
    return db.subject.delete({
      where: { id },
    })
  },
}
