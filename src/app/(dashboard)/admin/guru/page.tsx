import Link from 'next/link'
import { Plus, Users } from 'lucide-react'
import { TeacherList } from '@/features/teachers/components/TeacherList'

export const metadata = {
  title: 'Data Guru & Staff | SIPANDA Admin',
}

export default function GuruPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            <Users className="h-6 w-6 text-brand-500" />
            Data Guru & Staff
          </h1>
          <p className="mt-1 text-zinc-500 dark:text-zinc-400">Kelola profil guru, staff, NIP, jabatan, dan wali kelas.</p>
        </div>
        <Link href="/admin/guru/tambah" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          Tambah Guru
        </Link>
      </div>

      <TeacherList />
    </div>
  )
}
