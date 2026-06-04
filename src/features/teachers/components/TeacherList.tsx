import Link from 'next/link'
import { Pencil } from 'lucide-react'
import { teacherService } from '../services'
import { DeleteTeacherButton } from './DeleteTeacherButton'

export async function TeacherList() {
  const teachers = await teacherService.getAll()

  return (
    <div className="overflow-hidden rounded-xl border border-white/30 bg-white/80 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="overflow-x-auto">
        <table className="min-w-[760px] w-full text-left text-sm">
          <thead className="border-b border-zinc-200 bg-zinc-50/80 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400">
            <tr>
              <th className="px-4 py-3 font-medium">Nama</th>
              <th className="px-4 py-3 font-medium">NIP</th>
              <th className="px-4 py-3 font-medium">Jabatan</th>
              <th className="px-4 py-3 font-medium">Wali Kelas</th>
              <th className="px-4 py-3 text-right font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {teachers.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-zinc-500 dark:text-zinc-400">
                  Belum ada data guru atau staff.
                </td>
              </tr>
            ) : (
              teachers.map((teacher) => (
                <tr key={teacher.id} className="transition-colors hover:bg-zinc-50/80 dark:hover:bg-zinc-800/50">
                  <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">{teacher.name}</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">{teacher.nip || '-'}</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">{teacher.position || teacher.role}</td>
                  <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">
                    {teacher.homeroomClasses.map((cls) => cls.name).join(', ') || '-'}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-1">
                      <Link href={`/admin/guru/${teacher.id}/edit`} className="inline-flex items-center justify-center rounded-md p-2 text-blue-600 transition-colors hover:bg-blue-50 hover:text-blue-800 dark:text-blue-400 dark:hover:bg-blue-500/10" aria-label={`Edit ${teacher.name}`}>
                        <Pencil className="h-4 w-4" />
                      </Link>
                      <DeleteTeacherButton id={teacher.id} name={teacher.name} />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
