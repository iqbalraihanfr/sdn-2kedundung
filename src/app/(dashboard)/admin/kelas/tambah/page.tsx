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
    <div className="space-y-6">
      <div>
        <Link href="/admin/kelas" className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Data Kelas
        </Link>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Tambah Kelas</h1>
        <p className="mt-1 text-zinc-500 dark:text-zinc-400">Tambahkan rombongan belajar dan wali kelas.</p>
      </div>

      <ClassForm teachers={teachers} />
    </div>
  )
}
