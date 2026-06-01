import { ClassList } from '@/features/classes/components/ClassList'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Data Kelas | SIPANDA Admin',
  description: 'Kelola data kelas SDN Kedundung 2',
}

export default function KelasPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Data Kelas</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">Kelola rombongan belajar SDN Kedundung 2</p>
        </div>
        <Link
          href="/admin/kelas/tambah"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition-colors text-sm font-medium"
        >
          <Plus className="w-4 h-4" />
          Tambah Kelas
        </Link>
      </div>

      <ClassList />
    </div>
  )
}
