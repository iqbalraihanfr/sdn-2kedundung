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
    <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
      <div>
        <Link href="/admin/prestasi" className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Prestasi
        </Link>
        <h1 className="text-3xl font-bold text-primary">Edit Prestasi</h1>
        <p className="mt-1 text-sm text-text-secondary">Perbarui catatan prestasi {achievement.student.name}.</p>
      </div>

      <AchievementForm students={students} achievement={achievement} />
    </div>
  )
}
