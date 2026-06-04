import { ChevronLeft, ChevronRight } from "lucide-react";

import { DATA_SISWA_PAGE_SIZE, dataSiswa } from "@/data";

type Student = (typeof dataSiswa)[number];

type DataSiswaTableProps = {
  page: number;
  rows: Student[];
  totalPages: number;
  onPageChange: (page: number | ((page: number) => number)) => void;
};

export function DataSiswaTable({
  page,
  rows,
  totalPages,
  onPageChange,
}: DataSiswaTableProps) {
  return (
    <div className="section-card overflow-hidden">
      <div className="table-wrapper">
        <table className="min-w-[900px] w-full text-sm">
          <thead>
            <tr className="bg-primary text-white">
              <th className="w-12 px-4 py-3 text-left font-semibold">No</th>
              <th className="min-w-[200px] px-4 py-3 text-left font-semibold">
                Nama
              </th>
              <th className="w-16 px-4 py-3 text-center font-semibold">L/P</th>
              <th className="w-24 px-4 py-3 text-left font-semibold">Agama</th>
              <th className="min-w-[200px] px-4 py-3 text-left font-semibold">
                Alamat
              </th>
              <th className="min-w-[180px] px-4 py-3 text-left font-semibold">
                Nama Orang Tua
              </th>
              <th className="w-24 px-4 py-3 text-center font-semibold">
                Kelas
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((s, i) => (
              <tr
                key={s.id}
                className="border-b border-border-light transition-colors hover:bg-surface-alt/50"
              >
                <td className="px-4 py-3 text-text-muted">
                  {(page - 1) * DATA_SISWA_PAGE_SIZE + i + 1}
                </td>
                <td className="px-4 py-3 font-medium text-text-primary">
                  {s.nama}
                </td>
                <td className="px-4 py-3 text-center">
                  <span
                    className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                      s.jenisKelamin === "L"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-pink-50 text-pink-600"
                    }`}
                  >
                    {s.jenisKelamin}
                  </span>
                </td>
                <td className="px-4 py-3 text-text-secondary">{s.agama}</td>
                <td className="px-4 py-3 text-xs text-text-secondary">
                  {s.alamat}
                </td>
                <td className="px-4 py-3 text-xs text-text-secondary">
                  <div>{s.namaAyah || "-"}</div>
                  <div className="text-text-muted">{s.namaIbu || "-"}</div>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    {s.kelas}
                  </span>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-12 text-center text-text-muted">
                  Tidak ada data ditemukan
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex flex-col gap-3 border-t border-border-light px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-text-muted">
            Halaman {page} dari {totalPages}
          </span>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => onPageChange((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="rounded-lg p-2 transition-colors hover:bg-surface-alt disabled:opacity-30"
            >
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => onPageChange(p)}
                className={`h-8 w-8 rounded-lg text-xs font-medium transition-colors ${
                  p === page
                    ? "bg-primary text-white"
                    : "text-text-secondary hover:bg-surface-alt"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => onPageChange((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="rounded-lg p-2 transition-colors hover:bg-surface-alt disabled:opacity-30"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
