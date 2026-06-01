import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { AchievementForm } from '@/features/achievements/components/AchievementForm'
import { achievementService } from '@/features/achievements/services'
import { studentService } from '@/features/students/services'

export const metadata = {
  title: 'Edit Prestasi | SIPANDA Admin',
}

export default async function EditPrestasiPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [achievement, students] = await Promise.all([
    achievementService.getById(id).catch(() => null),
    studentService.getAll(),
  ])

  if (!achievement) notFound()

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/prestasi" className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Prestasi
        </Link>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Edit Prestasi</h1>
        <p className="mt-1 text-zinc-500 dark:text-zinc-400">Perbarui catatan prestasi {achievement.student.name}.</p>
      </div>

      <AchievementForm students={students} achievement={achievement} />
    </div>
  )
}
