import Link from 'next/link'
import { Pencil } from 'lucide-react'
import { achievementService } from '../services'
import { DeleteAchievementButton } from './DeleteAchievementButton'

export async function AchievementList() {
  const achievements = await achievementService.getAll()

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="overflow-x-auto">
        <table className="min-w-[760px] w-full text-left text-sm">
          <thead className="border-b border-zinc-200 bg-zinc-50 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
            <tr>
              <th className="px-4 py-3 font-medium">Siswa</th>
              <th className="px-4 py-3 font-medium">Prestasi</th>
              <th className="px-4 py-3 font-medium">Tingkat</th>
              <th className="px-4 py-3 font-medium">Tanggal</th>
              <th className="px-4 py-3 text-right font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {achievements.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-zinc-500 dark:text-zinc-400">Belum ada data prestasi.</td>
              </tr>
            ) : (
              achievements.map((item) => (
                <tr key={item.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                  <td className="px-4 py-3">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">{item.student.name}</p>
                    <p className="text-xs text-zinc-500">{item.student.class.name}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-medium text-zinc-800 dark:text-zinc-100">{item.title}</p>
                    <p className="text-xs text-zinc-500">{item.rank || '-'} - {item.eventName}</p>
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">{item.level}</td>
                  <td className="px-4 py-3 text-zinc-500">{item.date ? item.date.toLocaleDateString('id-ID') : '-'}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-1">
                      <Link href={`/admin/prestasi/${item.id}/edit`} className="inline-flex items-center justify-center rounded-md p-2 text-blue-600 transition-colors hover:bg-blue-50 hover:text-blue-800 dark:text-blue-400 dark:hover:bg-blue-500/10">
                        <Pencil className="h-4 w-4" />
                      </Link>
                      <DeleteAchievementButton id={item.id} title={item.title} />
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
