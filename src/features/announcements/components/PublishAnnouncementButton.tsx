'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Globe } from 'lucide-react'
import { publishAnnouncementAction } from '../actions'

export function PublishAnnouncementButton({ id, title }: { id: string; title: string }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => {
        if (!window.confirm(`Publish pengumuman "${title}"? Pengumuman akan tampil di halaman publik.`)) return
        startTransition(async () => {
          await publishAnnouncementAction(id)
          router.refresh()
        })
      }}
      className="rounded-md p-2 text-emerald-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700 disabled:opacity-50"
      aria-label={`Publish ${title}`}
      title="Publish pengumuman"
    >
      {isPending ? (
        <div className="h-4 w-4 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
      ) : (
        <Globe className="h-4 w-4" />
      )}
    </button>
  )
}
