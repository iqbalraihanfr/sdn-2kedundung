import { db } from '@/lib/db'
import type { ClassInput } from './schemas'

export const classQueries = {
  findAll: () => {
    return db.class.findMany({
      orderBy: { name: 'asc' },
    })
  },
  findById: (id: string) => {
    return db.class.findUnique({
      where: { id },
    })
  },
  create: (data: ClassInput) => {
    return db.class.create({ data })
  },
  update: (id: string, data: ClassInput) => {
    return db.class.update({
      where: { id },
      data,
    })
  },
  delete: (id: string) => {
    return db.class.delete({
      where: { id },
    })
  },
}
