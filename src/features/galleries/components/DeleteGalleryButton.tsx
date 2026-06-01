'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'
import { deleteGalleryAction } from '../actions'

export function DeleteGalleryButton({ id }: { id: string }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => {
        if (!window.confirm('Hapus foto galeri ini?')) return
        startTransition(async () => {
          await deleteGalleryAction(id)
          router.refresh()
        })
      }}
      className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-sm disabled:opacity-50"
      aria-label="Hapus foto"
    >
      <Trash2 className="h-5 w-5" />
    </button>
  )
}
