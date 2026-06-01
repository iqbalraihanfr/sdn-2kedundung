import { db } from '@/lib/db'
import type { AnnouncementInput } from './schemas'

export const announcementQueries = {
  findAll: () => {
    return db.announcement.findMany({
      orderBy: { createdAt: 'desc' },
      include: { author: true },
    })
  },

  findPublished: (take = 6) => {
    return db.announcement.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: { createdAt: 'desc' },
      include: { author: true },
      take,
    })
  },

  findById: (id: string) => {
    return db.announcement.findUnique({
      where: { id },
      include: { author: true },
    })
  },

  create: (data: AnnouncementInput & { authorId: string }) => {
    return db.announcement.create({
      data,
    })
  },

  update: (id: string, data: AnnouncementInput) => {
    return db.announcement.update({
      where: { id },
      data,
    })
  },

  delete: (id: string) => {
    return db.announcement.delete({
      where: { id },
    })
  },
}
