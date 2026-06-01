import { studentQueries } from './queries'
import type { StudentInput } from './schemas'

export const studentService = {
  async getAll(classId?: string) {
    return studentQueries.findAll(classId)
  },
  async getById(id: string) {
    const student = await studentQueries.findById(id)
    if (!student) throw new Error('Siswa tidak ditemukan')
    return student
  },
  async create(input: StudentInput) {
    const existing = await studentQueries.findByNisn(input.nisn)
    if (existing) throw new Error('NISN sudah terdaftar')
    return studentQueries.create(input)
  },
  async update(id: string, input: StudentInput) {
    const existingNisn = await studentQueries.findByNisn(input.nisn)
    if (existingNisn && existingNisn.id !== id) {
      throw new Error('NISN sudah dipakai siswa lain')
    }
    await this.getById(id)
    return studentQueries.update(id, input)
  },
  async delete(id: string) {
    await this.getById(id)
    return studentQueries.delete(id)
  },
}
