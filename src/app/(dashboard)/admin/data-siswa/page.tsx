import { StudentList } from '@/features/students/components/StudentList'
import { Plus, Users } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Data Siswa | SIPANDA Admin',
  description: 'Kelola data siswa SDN Kedundung 2',
}

export default async function DataSiswaPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const params = await searchParams

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
      <div className="page-hero">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-light to-primary shadow-lg shadow-primary/20">
              <Users size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary sm:text-4xl">Data Siswa</h1>
              <p className="mt-1 text-sm text-text-secondary sm:text-base">Kelola data induk siswa SDN Kedundung 2</p>
            </div>
          </div>
          <Link
            href="/admin/data-siswa/tambah"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-secondary to-secondary-light px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-secondary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-secondary/40"
          >
            <Plus className="h-5 w-5" />
            Tambah Siswa
          </Link>
        </div>
      </div>

      <div className="animate-fade-in-up animate-delay-100">
        <StudentList searchParams={params as any} />
      </div>
    </div>
  )
}
