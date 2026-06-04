'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Sidebar } from '@/components/layout/sidebar'

export function DashboardShell({
  email,
  children,
}: {
  email?: string
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen overflow-x-hidden bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header email={email} onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="min-w-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  )
}
