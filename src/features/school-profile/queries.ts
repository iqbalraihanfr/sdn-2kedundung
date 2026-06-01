import { db } from '@/lib/db'
import type { SchoolProfileInput } from './schemas'

export const schoolProfileQueries = {
  getProfile: () => {
    return db.schoolProfile.findFirst()
  },

  upsertProfile: (data: SchoolProfileInput) => {
    // Karena singleton, kita buat record default jika belum ada atau update yang pertama
    return db.$transaction(async (tx) => {
      const existing = await tx.schoolProfile.findFirst()
      if (existing) {
        return tx.schoolProfile.update({
          where: { id: existing.id },
          data,
        })
      } else {
        return tx.schoolProfile.create({
          data,
        })
      }
    })
  },
}
