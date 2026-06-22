import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { SubjectForm } from '@/features/subjects/components/SubjectForm'
import { subjectService } from '@/features/subjects/services'

export const metadata = {
  title: 'Edit Mata Pelajaran | SIPANDA Admin',
}

export default async function EditMapelPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const subject = await subjectService.getById(id).catch(() => null)
  if (!subject) notFound()

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
      <div>
        <Link href="/admin/mata-pelajaran" className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Mata Pelajaran
        </Link>
        <h1 className="text-3xl font-bold text-primary">Edit Mata Pelajaran</h1>
        <p className="mt-1 text-sm text-text-secondary">Perbarui data {subject.name}.</p>
      </div>

      <SubjectForm subject={subject} />
    </div>
  )
}
