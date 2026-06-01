'use server'

import { revalidatePath } from 'next/cache'
import { requireAdminEmail } from '@/lib/auth'
import { gradeSchema } from './schemas'
import { gradeQueries } from './queries'

export async function saveGradesAction(formData: FormData) {
  try {
    await requireAdminEmail()
    const subjectId = String(formData.get('subjectId') ?? '')
    const semester = String(formData.get('semester') ?? '')
    const records = Array.from(formData.entries())
      .filter(([key, value]) => key.startsWith('score:') && String(value).trim() !== '')
      .map(([key, value]) =>
        gradeSchema.parse({
          studentId: key.replace('score:', ''),
          subjectId,
          semester,
          score: value,
        })
      )

    if (records.length === 0) return { error: 'Tidak ada nilai untuk disimpan' }

    await gradeQueries.upsertMany(records)
    revalidatePath('/admin/nilai')
    revalidatePath('/daftar-nilai')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}
