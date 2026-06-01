import { classQueries } from '../queries'

export async function ClassList() {
  const classes = await classQueries.findAll()

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400">
            <tr>
              <th className="py-3 px-4 font-medium">Nama Kelas</th>
              <th className="py-3 px-4 font-medium">Jumlah Siswa</th>
              <th className="py-3 px-4 font-medium">Wali Kelas</th>
              <th className="py-3 px-4 text-right font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {classes.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-8 text-center text-zinc-500 dark:text-zinc-400">
                  Belum ada data kelas
                </td>
              </tr>
            ) : (
              classes.map((cls) => (
                <tr key={cls.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <td className="py-3 px-4 font-medium text-zinc-900 dark:text-zinc-100">{cls.name}</td>
                  <td className="py-3 px-4 text-zinc-700 dark:text-zinc-300">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300">
                      {cls._count.students} Siswa
                    </span>
                  </td>
                  <td className="py-3 px-4 text-zinc-500 dark:text-zinc-400">
                    -
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm">
                      Edit
                    </button>
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
