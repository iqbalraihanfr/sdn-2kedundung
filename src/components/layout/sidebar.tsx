'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, CalendarCheck, ClipboardList, GraduationCap, Image as ImageIcon, LayoutDashboard, Megaphone, School, Trophy, Users, X } from 'lucide-react'

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

export function Sidebar({
  isOpen = false,
  onClose,
}: {
  isOpen?: boolean
  onClose?: () => void
}) {
  const pathname = usePathname()

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <nav className="flex-1 space-y-1 overflow-y-auto p-4 pt-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))
        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={onClick}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              isActive
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'text-text-secondary hover:bg-surface-alt hover:text-primary'
            }`}
          >
            <item.icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-text-secondary'}`} />
            <span className={isActive ? 'text-white' : ''}>{item.name}</span>
          </Link>
        )
      })}
    </nav>
  )

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-zinc-950/40 transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-surface-alt border-r border-border shadow-xl transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <h2 className="text-lg font-bold text-primary">Menu Admin</h2>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-surface-alt hover:text-primary"
            aria-label="Tutup menu admin"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <NavLinks onClick={onClose} />
      </aside>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:shrink-0 lg:border-r lg:border-border lg:bg-surface-alt">
        <NavLinks />
      </aside>
    </>
  )
}
