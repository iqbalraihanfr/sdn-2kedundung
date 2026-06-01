'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'
import { deleteTeacherAction } from '../actions'

export function DeleteTeacherButton({ id, name }: { id: string; name: string }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => {
        if (!window.confirm(`Hapus data ${name}?`)) return
        startTransition(async () => {
          await deleteTeacherAction(id)
          router.refresh()
        })
      }}
      className="inline-flex items-center justify-center rounded-md p-2 text-red-500 transition-colors hover:bg-red-50 hover:text-red-700 disabled:opacity-50 dark:hover:bg-red-500/10"
      aria-label={`Hapus ${name}`}
    >
      <Trash2 className="h-4 w-4" />
    </button>
  )
}
