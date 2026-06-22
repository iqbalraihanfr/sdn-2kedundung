import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { TeacherForm } from '@/features/teachers/components/TeacherForm'

export const metadata = {
  title: 'Tambah Guru & Staff | SIPANDA Admin',
}

export default function TambahGuruPage() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
      <div>
        <Link href="/admin/guru" className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Data Guru
        </Link>
        <h1 className="text-3xl font-bold text-primary">Tambah Guru & Staff</h1>
        <p className="mt-1 text-sm text-text-secondary">Masukkan data pendidik dan tenaga kependidikan.</p>
      </div>

      <TeacherForm />
    </div>
  )
}
