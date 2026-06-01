import { classQueries } from "@/features/classes/queries";
import { studentService } from "@/features/students/services";

export const revalidate = 3600;

export default async function DataSiswaPage() {
  const [classes, students] = await Promise.all([
    classQueries.findAll(),
    studentService.getAll(),
  ]);

  return (
    <div className="page-shell">
      <div className="page-container">
        <section className="page-hero">
          <span className="page-eyebrow">Data Siswa</span>
          <h1 className="page-title">Statistik Peserta Didik</h1>
          <p className="page-description">
            Ringkasan data siswa aktif berdasarkan kelas, diperbarui dari dashboard admin.
          </p>
        </section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls) => (
            <div key={cls.id} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-text-secondary">{cls.homeroom?.name ? `Wali Kelas: ${cls.homeroom.name}` : "Wali kelas belum ditetapkan"}</p>
              <h2 className="mt-2 text-2xl font-bold text-primary">{cls.name}</h2>
              <p className="mt-4 text-4xl font-black text-secondary">{cls._count.students}</p>
              <p className="text-sm text-text-secondary">Siswa aktif</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-border bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-text-secondary">Total Siswa</p>
          <p className="mt-1 text-3xl font-black text-primary">{students.length}</p>
        </div>
      </div>
    </div>
  );
}
