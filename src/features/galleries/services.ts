import { galleryQueries } from './queries'
import type { GalleryInput } from './schemas'

export const galleryService = {
  async getAll() {
    return galleryQueries.findAll()
  },

  async getById(id: string) {
    const gallery = await galleryQueries.findById(id)
    if (!gallery) throw new Error('Foto tidak ditemukan')
    return gallery
  },

  async create(input: GalleryInput) {
    return galleryQueries.create(input)
  },

  async delete(id: string) {
    await this.getById(id)
    return galleryQueries.delete(id)
  },
}
