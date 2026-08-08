import { announcementService } from '@/features/announcements/services'
import { DeleteAnnouncementButton } from '@/features/announcements/components/DeleteAnnouncementButton'
import { PublishAnnouncementButton } from '@/features/announcements/components/PublishAnnouncementButton'
import { Megaphone, Pencil, Plus } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Manajemen Pengumuman | SIPANDA Admin',
}

export default async function PengumumanPage() {
  const announcements = await announcementService.getAll()

  return (
    <div className="space-y-6">
      <div className="page-hero">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/20">
              <Megaphone size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary sm:text-4xl">Pengumuman</h1>
              <p className="mt-1 text-sm text-text-secondary sm:text-base">Kelola berita dan pengumuman untuk siswa dan orang tua.</p>
            </div>
          </div>
          <Link
            href="/admin/pengumuman/tambah"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-secondary to-secondary-light px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-secondary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-secondary/40"
          >
            <Plus className="h-5 w-5" />
            Tambah Baru
          </Link>
        </div>
      </div>

      <div className="section-card overflow-hidden animate-fade-in-up animate-delay-100">
        {announcements.length === 0 ? (
          <div className="p-12 text-center text-text-muted">
            <Megaphone className="h-12 w-12 mx-auto mb-4 opacity-20" />
            <p>Belum ada pengumuman yang dibuat.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-[800px] w-full text-left text-sm">
              <thead className="bg-surface-alt text-text-secondary border-b border-border">
                <tr>
                  <th className="px-6 py-4 font-semibold">Judul</th>
                  <th className="px-6 py-4 font-semibold">Konten</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Tanggal</th>
                  <th className="px-6 py-4 font-semibold text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {announcements.map((item) => (
                  <tr key={item.id} className="hover:bg-surface-alt/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-primary whitespace-nowrap">{item.title}</td>
                    <td className="px-6 py-4 text-text-secondary truncate max-w-xs">{item.content}</td>
                    <td className="px-6 py-4">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${item.status === 'PUBLISHED' ? 'bg-emerald-100 text-emerald-700' : 'bg-surface-alt text-text-secondary border border-border'}`}>
                        {item.status === 'PUBLISHED' ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-text-secondary whitespace-nowrap">{new Date(item.createdAt).toLocaleDateString('id-ID')}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1">
                        {item.status === 'DRAFT' && (
                          <PublishAnnouncementButton id={item.id} title={item.title} />
                        )}
                        <Link href={`/admin/pengumuman/${item.id}/edit`} className="rounded-md p-2 text-primary transition-colors hover:bg-primary/10">
                          <Pencil className="h-4 w-4" />
                        </Link>
                        <DeleteAnnouncementButton id={item.id} title={item.title} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
