"use client";

import { useMemo, useState } from "react";
import { Search, ChevronLeft, ChevronRight, Users, Filter } from "lucide-react";
import dataSiswa from "@/data/dataSiswa.json";

const PAGE_SIZE = 20;

export default function DataSiswaPage() {
  const [kelas, setKelas] = useState("Semua");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const kelasList = useMemo(
    () => ["Semua", ...Array.from(new Set(dataSiswa.map((s) => s.kelas))).sort()],
    []
  );

  const filtered = useMemo(() => {
    let data = dataSiswa;
    if (kelas !== "Semua") data = data.filter((s) => s.kelas === kelas);
    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter(
        (s) =>
          s.nama.toLowerCase().includes(q) ||
          s.namaAyah.toLowerCase().includes(q) ||
          s.namaIbu.toLowerCase().includes(q)
      );
    }
    return data;
  }, [kelas, search]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleKelasChange = (value: string) => {
    setKelas(value);
    setPage(1);
  };

  return (
    <div className="page-shell">
      <div className="page-container">
        <div className="page-hero soft-grid">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                Data Akademik
              </div>
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
                  <Users size={20} className="text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-primary sm:text-4xl">
                    Data Peserta Didik
                  </h1>
                  <p className="text-sm text-text-secondary sm:text-base">
                    Pusat data siswa SDN Kedundung 2 dengan pencarian yang lebih
                    cepat dan tampilan yang lebih nyaman dibaca.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:max-w-sm">
              <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                <div className="text-xs uppercase tracking-[0.16em] text-text-muted">
                  Total Tampil
                </div>
                <div className="mt-1 text-2xl font-bold text-primary">
                  {filtered.length}
                </div>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                <div className="text-xs uppercase tracking-[0.16em] text-text-muted">
                  Per Halaman
                </div>
                <div className="mt-1 text-2xl font-bold text-primary">
                  {PAGE_SIZE}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-card mb-6 p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
              />
              <input
                type="text"
                placeholder="Cari nama siswa, orang tua..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="w-full rounded-xl bg-surface-alt py-2.5 pl-10 pr-4 text-sm border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="relative">
              <Filter
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
              />
              <select
                value={kelas}
                onChange={(e) => handleKelasChange(e.target.value)}
                className="appearance-none cursor-pointer rounded-xl bg-surface-alt py-2.5 pl-9 pr-8 text-sm font-medium text-text-primary border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {kelasList.map((k) => (
                  <option key={k} value={k}>
                    {k}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="section-card overflow-hidden">
          <div className="table-wrapper">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="w-12 px-4 py-3 text-left font-semibold">No</th>
                  <th className="min-w-[200px] px-4 py-3 text-left font-semibold">
                    Nama
                  </th>
                  <th className="w-16 px-4 py-3 text-center font-semibold">
                    L/P
                  </th>
                  <th className="w-24 px-4 py-3 text-left font-semibold">
                    Agama
                  </th>
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
                {paginated.map((s, i) => (
                  <tr
                    key={s.id}
                    className="border-b border-border-light transition-colors hover:bg-surface-alt/50"
                  >
                    <td className="px-4 py-3 text-text-muted">
                      {(page - 1) * PAGE_SIZE + i + 1}
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
                {paginated.length === 0 && (
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
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="rounded-lg p-2 transition-colors hover:bg-surface-alt disabled:opacity-30"
                >
                  <ChevronLeft size={16} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
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
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="rounded-lg p-2 transition-colors hover:bg-surface-alt disabled:opacity-30"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
