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
    <div className="space-y-6">
      <div>
        <Link href="/admin/guru" className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Data Guru
        </Link>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Edit Guru & Staff</h1>
        <p className="mt-1 text-zinc-500 dark:text-zinc-400">Perbarui informasi {teacher.name}.</p>
      </div>

      <TeacherForm teacher={teacher} />
    </div>
  )
}
