import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { TeacherForm } from '@/features/teachers/components/TeacherForm'

export const metadata = {
  title: 'Tambah Guru & Staff | SIPANDA Admin',
}

export default function TambahGuruPage() {
  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/guru" className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Data Guru
        </Link>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Tambah Guru & Staff</h1>
        <p className="mt-1 text-zinc-500 dark:text-zinc-400">Masukkan data pendidik dan tenaga kependidikan.</p>
      </div>

      <TeacherForm />
    </div>
  )
}
