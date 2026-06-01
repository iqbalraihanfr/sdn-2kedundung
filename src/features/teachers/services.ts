import { teacherQueries } from './queries'
import type { TeacherInput } from './schemas'

export const teacherService = {
  getAll() {
    return teacherQueries.findAll()
  },

  async getById(id: string) {
    const teacher = await teacherQueries.findById(id)
    if (!teacher) throw new Error('Data guru/staff tidak ditemukan')
    return teacher
  },

  create(input: TeacherInput) {
    return teacherQueries.create(input)
  },

  async update(id: string, input: TeacherInput) {
    await this.getById(id)
    return teacherQueries.update(id, input)
  },

  async delete(id: string) {
    await this.getById(id)
    return teacherQueries.delete(id)
  },
}
