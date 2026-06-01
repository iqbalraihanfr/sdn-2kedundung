import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { AchievementForm } from '@/features/achievements/components/AchievementForm'
import { studentService } from '@/features/students/services'

export const metadata = {
  title: 'Tambah Prestasi | SIPANDA Admin',
}

export default async function TambahPrestasiPage() {
  const students = await studentService.getAll()

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/prestasi" className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Prestasi
        </Link>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Tambah Prestasi</h1>
        <p className="mt-1 text-zinc-500 dark:text-zinc-400">Pilih siswa dan catat detail prestasi.</p>
      </div>

      <AchievementForm students={students} />
    </div>
  )
}
