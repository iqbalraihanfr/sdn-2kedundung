import { announcementService } from '@/features/announcements/services'
import { galleryService } from '@/features/galleries/services'
import { achievementService } from '@/features/achievements/services'
import { classQueries } from '@/features/classes/queries'
import { studentService } from '@/features/students/services'
import { subjectService } from '@/features/subjects/services'
import { FileText, GraduationCap, Image as ImageIcon, Trophy, Users } from 'lucide-react'

export const metadata = {
  title: 'Dashboard Admin | SIPANDA',
}

export default async function DashboardPage() {
  // Fetch statistics
  const [announcements, galleries, students, classes, subjects, achievements] = await Promise.all([
    announcementService.getAll(),
    galleryService.getAll(),
    studentService.getAll(),
    classQueries.findAll(),
    subjectService.getAll(),
    achievementService.getAll(),
  ])

  const stats = [
    { name: 'Total Siswa', value: students.length, icon: GraduationCap, color: 'text-emerald-600 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-900/30' },
    { name: 'Total Kelas', value: classes.length, icon: Users, color: 'text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/30' },
    { name: 'Mata Pelajaran', value: subjects.length, icon: FileText, color: 'text-amber-600 bg-amber-100 dark:text-amber-400 dark:bg-amber-900/30' },
    { name: 'Prestasi', value: achievements.length, icon: Trophy, color: 'text-rose-600 bg-rose-100 dark:text-rose-400 dark:bg-rose-900/30' },
    { name: 'Total Pengumuman', value: announcements.length, icon: FileText, color: 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30' },
    { name: 'Total Galeri', value: galleries.length, icon: ImageIcon, color: 'text-brand-600 bg-brand-100 dark:text-brand-400 dark:bg-brand-900/30' },
  ]

  return (
    <div className="space-y-5 sm:space-y-6">
      <div>
        <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-2xl">Dashboard</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">Ringkasan statistik sistem informasi SDN Kedundung 2</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.name} className="flex items-center gap-4 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
            <div className={`rounded-lg p-3 sm:p-4 ${stat.color}`}>
              <stat.icon className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{stat.name}</p>
              <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
        <h2 className="text-lg font-bold mb-4">Pengumuman Terbaru</h2>
        {announcements.length === 0 ? (
          <p className="text-zinc-500 text-sm">Belum ada pengumuman.</p>
        ) : (
          <div className="space-y-4">
            {announcements.slice(0, 5).map((item) => (
              <div key={item.id} className="flex flex-col gap-2 border-b border-zinc-100 pb-4 last:border-0 last:pb-0 dark:border-zinc-800 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                  <p className="max-w-xl truncate text-sm text-zinc-500">{item.content}</p>
                </div>
                <span className="shrink-0 text-xs text-zinc-400">{new Date(item.createdAt).toLocaleDateString('id-ID')}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
