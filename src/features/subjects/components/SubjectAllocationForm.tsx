'use client'

import { useActionState } from 'react'
import { updateSubjectClassesAction } from '../actions'

const initialState = { error: '', success: false }

export function SubjectAllocationForm({
  subjectId,
  classes,
  selectedClassIds,
}: {
  subjectId: string
  classes: { id: string; name: string }[]
  selectedClassIds: string[]
}) {
  const [state, formAction, isPending] = useActionState(async (_prev: typeof initialState, formData: FormData) => {
    const result = await updateSubjectClassesAction(subjectId, formData)
    if (result?.error) return { error: result.error, success: false }
    return { error: '', success: true }
  }, initialState)

  return (
    <form action={formAction} className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {classes.map((cls) => (
          <label key={cls.id} className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors has-[:checked]:border-blue-200 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700 dark:border-zinc-700 dark:text-zinc-300 dark:has-[:checked]:border-blue-500/30 dark:has-[:checked]:bg-blue-500/10 dark:has-[:checked]:text-blue-300">
            <input type="checkbox" name="classIds" value={cls.id} defaultChecked={selectedClassIds.includes(cls.id)} className="h-3.5 w-3.5 rounded border-zinc-300 text-blue-600 focus:ring-blue-500" />
            {cls.name}
          </label>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <button type="submit" disabled={isPending} className="rounded-md bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300">
          {isPending ? 'Menyimpan...' : 'Simpan Alokasi'}
        </button>
        {state.success && <span className="text-xs text-green-600 dark:text-green-400">Tersimpan</span>}
        {state.error && <span className="text-xs text-red-600 dark:text-red-400">{state.error}</span>}
      </div>
    </form>
  )
}
