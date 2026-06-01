import Link from 'next/link'
import { Plus, Trophy } from 'lucide-react'
import { AchievementList } from '@/features/achievements/components/AchievementList'

export const metadata = {
  title: 'Prestasi Siswa | SIPANDA Admin',
}

export default function AdminPrestasiPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            <Trophy className="h-6 w-6 text-brand-500" />
            Prestasi Siswa
          </h1>
          <p className="mt-1 text-zinc-500 dark:text-zinc-400">Catat prestasi siswa berdasarkan tingkat, peringkat, dan lomba.</p>
        </div>
        <Link href="/admin/prestasi/tambah" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          Tambah Prestasi
        </Link>
      </div>

      <AchievementList />
    </div>
  )
}
