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
    <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
      <div>
        <Link href="/admin/kelas" className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Data Kelas
        </Link>
        <h1 className="text-3xl font-bold text-primary">Edit Kelas</h1>
        <p className="mt-1 text-sm text-text-secondary">Perbarui data {classData.name}.</p>
      </div>

      <ClassForm classData={classData} teachers={teachers} />
    </div>
  )
}
