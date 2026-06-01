import Link from 'next/link'
import { Pencil } from 'lucide-react'
import { classQueries } from '@/features/classes/queries'
import { subjectService } from '../services'
import { DeleteSubjectButton } from './DeleteSubjectButton'
import { SubjectAllocationForm } from './SubjectAllocationForm'

export async function SubjectList() {
  const [subjects, classes] = await Promise.all([subjectService.getAll(), classQueries.findAll()])

  return (
    <div className="space-y-4">
      {subjects.length === 0 ? (
        <div className="rounded-xl border border-zinc-200 bg-white p-10 text-center text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
          Belum ada mata pelajaran.
        </div>
      ) : (
        subjects.map((subject) => (
          <div key={subject.id} className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{subject.name}</h3>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Dialokasikan ke {subject.classes.length} kelas.
                </p>
              </div>
              <div className="flex shrink-0 justify-end gap-1">
                <Link href={`/admin/mata-pelajaran/${subject.id}/edit`} className="inline-flex items-center justify-center rounded-md p-2 text-blue-600 transition-colors hover:bg-blue-50 hover:text-blue-800 dark:text-blue-400 dark:hover:bg-blue-500/10">
                  <Pencil className="h-4 w-4" />
                </Link>
                <DeleteSubjectButton id={subject.id} name={subject.name} />
              </div>
            </div>
            <div className="mt-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
              <SubjectAllocationForm
                subjectId={subject.id}
                classes={classes}
                selectedClassIds={subject.classes.map((item) => item.classId)}
              />
            </div>
          </div>
        ))
      )}
    </div>
  )
}
