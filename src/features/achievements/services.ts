import { achievementQueries } from './queries'
import type { AchievementInput } from './schemas'

export const achievementService = {
  getAll() {
    return achievementQueries.findAll()
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
