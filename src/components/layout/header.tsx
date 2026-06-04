'use client'

import { Menu } from 'lucide-react'

export function Header({
  email,
  onMenuClick,
}: {
  email?: string
  onMenuClick: () => void
}) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-4 dark:border-zinc-800 dark:bg-zinc-900 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={onMenuClick}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-800 lg:hidden"
        aria-label="Buka menu admin"
      >
        <Menu className="h-5 w-5" />
      </button>
      <div className="ml-auto flex min-w-0 items-center gap-3">
        <div className="min-w-0 text-right text-sm">
          <p className="font-medium text-zinc-900 dark:text-zinc-100">Administrator</p>
          <p className="max-w-[11rem] truncate text-xs text-zinc-500 dark:text-zinc-400 sm:max-w-xs">{email}</p>
        </div>
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 font-bold text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
          A
        </div>
      </div>
    </header>
  )
}
