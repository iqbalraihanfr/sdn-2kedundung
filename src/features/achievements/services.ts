import { achievementQueries } from './queries'
import type { AchievementInput } from './schemas'

export const achievementService = {
  getAll() {
    return achievementQueries.findAll()
  },

  async getPaginated({ page = 1, limit = 10 }: { page?: number; limit?: number }) {
    const skip = (page - 1) * limit
    const [data, total] = await Promise.all([
      achievementQueries.findPaginated({ skip, take: limit }),
      achievementQueries.countAll(),
    ])
    const totalPages = Math.ceil(total / limit)
    return { data, total, totalPages }
  },

  async getById(id: string) {
    const achievement = await achievementQueries.findById(id)
    if (!achievement) throw new Error('Prestasi tidak ditemukan')
    return achievement
  },

  create(input: AchievementInput) {
    return achievementQueries.create(input)
  },

  async update(id: string, input: AchievementInput) {
    await this.getById(id)
    return achievementQueries.update(id, input)
  },

  async delete(id: string) {
    await this.getById(id)
    return achievementQueries.delete(id)
  },
}
