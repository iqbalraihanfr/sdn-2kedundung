import { classQueries } from "@/features/classes/queries";
import { studentService } from "@/features/students/services";
import { Users } from "lucide-react";
import { StudentSearchByNisn } from "@/features/students/components/StudentSearchByNisn";

export const revalidate = 3600;

export default async function DataSiswaPage() {
  const [classes, students] = await Promise.all([
    classQueries.findAll().catch((error) => {
      console.error("Gagal memuat data kelas dari database:", error);
      return [];
    }),
    studentService.getAll().catch((error) => {
      console.error("Gagal memuat data siswa dari database:", error);
      return [];
    }),
  ]);

  return (
    <div className="page-shell">
      <div className="page-container">
        <div className="page-hero">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600">
              <Users size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary sm:text-4xl">
                Statistik Peserta Didik
              </h1>
              <p className="text-sm text-text-secondary sm:text-base">
                Ringkasan data siswa aktif berdasarkan kelas, diperbarui dari dashboard admin.
              </p>
            </div>
          </div>
        </div>
        
        <StudentSearchByNisn />
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {classes
            .filter((cls) => cls.name.toLowerCase() !== "tim sekolah")
            .map((cls) => (
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
