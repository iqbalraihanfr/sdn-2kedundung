import { studentQueries } from '../queries'

export async function StudentList() {
  const students = await studentQueries.findAll()

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400">
            <tr>
              <th className="py-3 px-4 font-medium">NISN</th>
              <th className="py-3 px-4 font-medium">Nama Siswa</th>
              <th className="py-3 px-4 font-medium">Kelas</th>
              <th className="py-3 px-4 font-medium">Tgl Dibuat</th>
              <th className="py-3 px-4 text-right font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {students.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-zinc-500 dark:text-zinc-400">
                  Belum ada data siswa
                </td>
              </tr>
            ) : (
              students.map((student) => (
                <tr key={student.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <td className="py-3 px-4 font-medium text-zinc-900 dark:text-zinc-100">{student.nisn}</td>
                  <td className="py-3 px-4 text-zinc-700 dark:text-zinc-300">{student.name}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                      {student.class?.name || 'Belum ada kelas'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-zinc-500 dark:text-zinc-400">
                    {new Date(student.createdAt).toLocaleDateString('id-ID')}
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
