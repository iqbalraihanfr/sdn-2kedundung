import { announcementService } from '@/features/announcements/services'
import { galleryService } from '@/features/galleries/services'
import { achievementService } from '@/features/achievements/services'
import { classQueries } from '@/features/classes/queries'
import { studentService } from '@/features/students/services'
import { subjectService } from '@/features/subjects/services'
import { FileText, GraduationCap, Image as ImageIcon, Trophy, Users, LayoutDashboard } from 'lucide-react'

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
    { name: 'Total Siswa', value: students.length, icon: GraduationCap, color: 'from-emerald-500 to-emerald-600 shadow-emerald-500/30' },
    { name: 'Total Kelas', value: classes.length, icon: Users, color: 'from-purple-500 to-purple-600 shadow-purple-500/30' },
    { name: 'Mata Pelajaran', value: subjects.length, icon: FileText, color: 'from-amber-500 to-amber-600 shadow-amber-500/30' },
    { name: 'Prestasi', value: achievements.length, icon: Trophy, color: 'from-rose-500 to-rose-600 shadow-rose-500/30' },
    { name: 'Total Pengumuman', value: announcements.length, icon: FileText, color: 'from-blue-500 to-blue-600 shadow-blue-500/30' },
    { name: 'Total Galeri', value: galleries.length, icon: ImageIcon, color: 'from-primary-light to-primary shadow-primary/30' },
  ]

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
      <div className="page-hero">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-light to-primary shadow-lg shadow-primary/20">
            <LayoutDashboard size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-primary sm:text-4xl">
              Dashboard
            </h1>
            <p className="text-sm text-text-secondary sm:text-base mt-1">
              Ringkasan statistik sistem informasi SDN Kedundung 2
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat, index) => (
          <div 
            key={stat.name} 
            className={`section-card flex items-center gap-5 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-${stat.color.split('-')[1]}/10 animate-fade-in-up animate-delay-${(index % 5 + 1) * 100}`}
          >
            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color}`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-text-secondary">{stat.name}</p>
              <p className="text-2xl font-bold text-primary sm:text-3xl mt-1">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="section-card p-5 sm:p-6 lg:p-8 animate-fade-in-up animate-delay-500">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <FileText size={20} className="text-primary" />
          </div>
          <h2 className="text-xl font-bold text-primary">Pengumuman Terbaru</h2>
        </div>
        
        {announcements.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center bg-surface-alt rounded-xl border border-dashed border-border">
            <FileText className="h-10 w-10 text-text-muted mb-3" />
            <p className="text-text-secondary font-medium">Belum ada pengumuman</p>
            <p className="text-sm text-text-muted mt-1">Pengumuman baru akan muncul di sini.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {announcements.slice(0, 5).map((item) => (
              <div key={item.id} className="group flex flex-col gap-3 rounded-xl border border-border bg-white p-4 transition-all hover:border-primary/30 hover:shadow-md sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="font-semibold text-primary group-hover:text-primary-light transition-colors">{item.title}</h3>
                  <p className="max-w-3xl text-sm text-text-secondary mt-1.5 leading-relaxed">{item.content}</p>
                </div>
                <span className="shrink-0 inline-flex items-center rounded-full bg-surface-alt px-2.5 py-1 text-xs font-medium text-text-secondary border border-border">
                  {new Date(item.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
