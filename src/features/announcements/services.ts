import { announcementQueries } from './queries'
import type { AnnouncementInput } from './schemas'

export const announcementService = {
  async getAll() {
    return announcementQueries.findAll()
  },

  async getPublished(take?: number) {
    return announcementQueries.findPublished(take)
  },

  async getById(id: string) {
    const announcement = await announcementQueries.findById(id)
    if (!announcement) throw new Error('Pengumuman tidak ditemukan')
    return announcement
  },

  async create(input: AnnouncementInput, authorId: string) {
    return announcementQueries.create({ ...input, authorId })
  },

  async update(id: string, input: AnnouncementInput) {
    // Memastikan pengumuman ada
    await this.getById(id)
    return announcementQueries.update(id, input)
  },

  async delete(id: string) {
    await this.getById(id)
    return announcementQueries.delete(id)
  },

  async publish(id: string) {
    await this.getById(id)
    return announcementQueries.publish(id)
  },
}
