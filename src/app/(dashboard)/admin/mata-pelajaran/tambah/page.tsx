import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SubjectForm } from '@/features/subjects/components/SubjectForm'

export const metadata = {
  title: 'Tambah Mata Pelajaran | SIPANDA Admin',
}

export default function TambahMapelPage() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
      <div>
        <Link href="/admin/mata-pelajaran" className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Mata Pelajaran
        </Link>
        <h1 className="text-3xl font-bold text-primary">Tambah Mata Pelajaran</h1>
        <p className="mt-1 text-sm text-text-secondary">Masukkan mapel baru sebelum dialokasikan ke kelas.</p>
      </div>

      <SubjectForm />
    </div>
  )
}
