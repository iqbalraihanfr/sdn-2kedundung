import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ClassForm } from '@/features/classes/components/ClassForm'
import { teacherService } from '@/features/teachers/services'

export const metadata = {
  title: 'Tambah Kelas | SIPANDA Admin',
}

export default async function TambahKelasPage() {
  const teachers = await teacherService.getAll()

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
      <div>
        <Link href="/admin/kelas" className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Data Kelas
        </Link>
        <h1 className="text-3xl font-bold text-primary">Tambah Kelas</h1>
        <p className="mt-1 text-sm text-text-secondary">Tambahkan rombongan belajar dan wali kelas.</p>
      </div>

      <ClassForm teachers={teachers} />
    </div>
  )
}
