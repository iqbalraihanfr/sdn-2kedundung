import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { TeacherForm } from '@/features/teachers/components/TeacherForm'
import { teacherService } from '@/features/teachers/services'

export const metadata = {
  title: 'Edit Guru & Staff | SIPANDA Admin',
}

export default async function EditGuruPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const teacher = await teacherService.getById(id).catch(() => null)
  if (!teacher) notFound()

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
      <div>
        <Link href="/admin/guru" className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Data Guru
        </Link>
        <h1 className="text-3xl font-bold text-primary">Edit Guru & Staff</h1>
        <p className="mt-1 text-sm text-text-secondary">Perbarui informasi {teacher.name}.</p>
      </div>

      <TeacherForm teacher={teacher} />
    </div>
  )
}
