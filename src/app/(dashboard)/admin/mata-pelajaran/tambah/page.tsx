import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SubjectForm } from '@/features/subjects/components/SubjectForm'

export const metadata = {
  title: 'Tambah Mata Pelajaran | SIPANDA Admin',
}

export default function TambahMapelPage() {
  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/mata-pelajaran" className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Mata Pelajaran
        </Link>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Tambah Mata Pelajaran</h1>
        <p className="mt-1 text-zinc-500 dark:text-zinc-400">Masukkan mapel baru sebelum dialokasikan ke kelas.</p>
      </div>

      <SubjectForm />
    </div>
  )
}
