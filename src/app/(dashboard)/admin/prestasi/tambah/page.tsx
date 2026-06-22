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
    <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
      <div>
        <Link href="/admin/prestasi" className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Prestasi
        </Link>
        <h1 className="text-3xl font-bold text-primary">Tambah Prestasi</h1>
        <p className="mt-1 text-sm text-text-secondary">Pilih siswa dan catat detail prestasi.</p>
      </div>

      <AchievementForm students={students} />
    </div>
  )
}
