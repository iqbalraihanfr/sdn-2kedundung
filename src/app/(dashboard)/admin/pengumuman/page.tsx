import { announcementService } from '@/features/announcements/services'
import { DeleteAnnouncementButton } from '@/features/announcements/components/DeleteAnnouncementButton'
import { Megaphone, Pencil, Plus } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Manajemen Pengumuman | SIPANDA Admin',
}

export default async function PengumumanPage() {
  const announcements = await announcementService.getAll()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <Megaphone className="h-6 w-6 text-brand-500" />
            Pengumuman
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">Kelola berita dan pengumuman untuk siswa dan orang tua.</p>
        </div>
        <Link href="/admin/pengumuman/tambah" className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-md font-medium text-sm transition-colors shadow-sm">
          <Plus className="h-4 w-4" />
          Tambah Baru
        </Link>
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm overflow-hidden">
        {announcements.length === 0 ? (
          <div className="p-12 text-center text-zinc-500 dark:text-zinc-400">
            <Megaphone className="h-12 w-12 mx-auto mb-4 opacity-20" />
            <p>Belum ada pengumuman yang dibuat.</p>
          </div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800">
              <tr>
                <th className="px-6 py-3 font-medium">Judul</th>
                <th className="px-6 py-3 font-medium">Konten</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Tanggal</th>
                <th className="px-6 py-3 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {announcements.map((item) => (
                <tr key={item.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-zinc-900 dark:text-zinc-100 whitespace-nowrap">{item.title}</td>
                  <td className="px-6 py-4 text-zinc-500 truncate max-w-xs">{item.content}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${item.status === 'PUBLISHED' ? 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-300' : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300'}`}>
                      {item.status === 'PUBLISHED' ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-zinc-500 whitespace-nowrap">{new Date(item.createdAt).toLocaleDateString('id-ID')}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <Link href={`/admin/pengumuman/${item.id}/edit`} className="rounded-md p-2 text-blue-600 transition-colors hover:bg-blue-50 hover:text-blue-800 dark:text-blue-400 dark:hover:bg-blue-500/10">
                        <Pencil className="h-4 w-4" />
                      </Link>
                      <DeleteAnnouncementButton id={item.id} title={item.title} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
