import { subjectQueries } from './queries'
import type { SubjectInput } from './schemas'

export const subjectService = {
  async getAll() {
    return subjectQueries.findAll()
  },
  async getById(id: string) {
    const subject = await subjectQueries.findById(id)
    if (!subject) throw new Error('Mata pelajaran tidak ditemukan')
    return subject
  },
  async create(input: SubjectInput) {
    return subjectQueries.create(input)
  },
  async update(id: string, input: SubjectInput) {
    await this.getById(id)
    return subjectQueries.update(id, input)
  },
  async delete(id: string) {
    await this.getById(id)
    return subjectQueries.delete(id)
  },
}
