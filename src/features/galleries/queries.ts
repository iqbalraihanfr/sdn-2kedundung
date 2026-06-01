import { db } from '@/lib/db'
import type { GalleryInput } from './schemas'

export const galleryQueries = {
  findAll: () => {
    return db.gallery.findMany({
      orderBy: { createdAt: 'desc' },
    })
  },

  findById: (id: string) => {
    return db.gallery.findUnique({
      where: { id },
    })
  },

  create: (data: GalleryInput) => {
    return db.gallery.create({
      data,
    })
  },

  delete: (id: string) => {
    return db.gallery.delete({
      where: { id },
    })
  },
}
