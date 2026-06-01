import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { ClassForm } from '@/features/classes/components/ClassForm'
import { classService } from '@/features/classes/services'
import { teacherService } from '@/features/teachers/services'

export const metadata = {
  title: 'Edit Kelas | SIPANDA Admin',
}

export default async function EditKelasPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [classData, teachers] = await Promise.all([
    classService.getById(id).catch(() => null),
    teacherService.getAll(),
  ])

  if (!classData) notFound()

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/kelas" className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Data Kelas
        </Link>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Edit Kelas</h1>
        <p className="mt-1 text-zinc-500 dark:text-zinc-400">Perbarui data {classData.name}.</p>
      </div>

      <ClassForm classData={classData} teachers={teachers} />
    </div>
  )
}
