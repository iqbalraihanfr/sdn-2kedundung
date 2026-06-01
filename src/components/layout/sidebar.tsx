'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, CalendarCheck, ClipboardList, GraduationCap, Image as ImageIcon, LayoutDashboard, LogOut, Megaphone, School, Trophy, Users } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { logoutAction } from '@/features/auth/actions'

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Siswa', href: '/admin/data-siswa', icon: GraduationCap },
  { name: 'Kelas', href: '/admin/kelas', icon: School },
  { name: 'Guru & Staff', href: '/admin/guru', icon: Users },
  { name: 'Mata Pelajaran', href: '/admin/mata-pelajaran', icon: BookOpen },
  { name: 'Absensi', href: '/admin/absensi', icon: CalendarCheck },
  { name: 'Nilai', href: '/admin/nilai', icon: ClipboardList },
  { name: 'Prestasi', href: '/admin/prestasi', icon: Trophy },
  { name: 'Pengumuman', href: '/admin/pengumuman', icon: Megaphone },
  { name: 'Galeri', href: '/admin/galeri', icon: ImageIcon },
  { name: 'Profil Sekolah', href: '/admin/profil', icon: School },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await logoutAction()
    router.push('/login')
  }

  return (
    <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col min-h-screen sticky top-0">
      <div className="h-16 flex items-center px-6 border-b border-zinc-200 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">SIPANDA Admin</h2>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300'
                  : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100'
              }`}
            >
              <item.icon className={`h-5 w-5 ${isActive ? 'text-brand-600 dark:text-brand-400' : 'text-zinc-400'}`} />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 w-full rounded-md text-sm font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          Keluar
        </button>
      </div>
    </aside>
  )
}
