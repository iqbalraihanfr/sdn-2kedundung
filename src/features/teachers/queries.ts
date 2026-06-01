import { randomUUID } from 'node:crypto'
import { db } from '@/lib/db'
import type { TeacherInput } from './schemas'

export const teacherQueries = {
  findAll: () => {
    return db.profile.findMany({
      where: {
        role: { in: ['TEACHER', 'STAFF', 'ADMIN', 'SUPERADMIN'] },
      },
      orderBy: { name: 'asc' },
      include: { homeroomClasses: true },
    })
  },

  findById: (id: string) => {
    return db.profile.findUnique({
      where: { id },
      include: { homeroomClasses: true },
    })
  },

  create: (data: TeacherInput) => {
    return db.profile.create({
      data: {
        id: randomUUID(),
        name: data.name,
        nip: data.nip || null,
        position: data.position,
        role: data.role || 'TEACHER',
      },
    })
  },

  update: (id: string, data: TeacherInput) => {
    return db.profile.update({
      where: { id },
      data: {
        name: data.name,
        nip: data.nip || null,
        position: data.position,
        role: data.role || 'TEACHER',
      },
    })
  },

  delete: (id: string) => {
    return db.profile.delete({ where: { id } })
  },
}
