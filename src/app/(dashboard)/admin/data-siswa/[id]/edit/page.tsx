import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { StudentForm } from '@/features/students/components/StudentForm'
import { studentService } from '@/features/students/services'
import { classQueries } from '@/features/classes/queries'

export const metadata = {
  title: 'Edit Data Siswa | SIPANDA Admin',
}

export default async function EditSiswaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [student, classes] = await Promise.all([
    studentService.getById(id).catch(() => null),
    classQueries.findAll(),
  ])

  if (!student) notFound()

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/data-siswa" className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Data Siswa
        </Link>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Edit Siswa</h1>
        <p className="mt-1 text-zinc-500 dark:text-zinc-400">Perbarui data induk {student.name}.</p>
      </div>

      <StudentForm classes={classes} student={student} />
    </div>
  )
}
