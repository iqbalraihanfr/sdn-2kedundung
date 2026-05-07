"use client";

import { useState, useMemo } from "react";
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

  const handleKelasChange = (v: string) => {
    setKelas(v);
    setPage(1);
  };

  return (
    <div className="pt-20 pb-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Users size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary">
                Data Peserta Didik
              </h1>
              <p className="text-text-secondary text-sm">
                {filtered.length} siswa ditemukan
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-border p-4 mb-6 flex flex-col sm:flex-row gap-3">
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
              className="w-full pl-10 pr-4 py-2.5 bg-surface-alt rounded-xl text-sm border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
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
              className="appearance-none pl-9 pr-8 py-2.5 bg-surface-alt rounded-xl text-sm font-medium text-text-primary border-0 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
            >
              {kelasList.map((k) => (
                <option key={k} value={k}>
                  {k}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-border overflow-hidden">
          <div className="table-wrapper">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-semibold w-12">No</th>
                  <th className="px-4 py-3 text-left font-semibold min-w-[200px]">
                    Nama
                  </th>
                  <th className="px-4 py-3 text-center font-semibold w-16">
                    L/P
                  </th>
                  <th className="px-4 py-3 text-left font-semibold w-24">
                    Agama
                  </th>
                  <th className="px-4 py-3 text-left font-semibold min-w-[200px]">
                    Alamat
                  </th>
                  <th className="px-4 py-3 text-left font-semibold min-w-[180px]">
                    Nama Orang Tua
                  </th>
                  <th className="px-4 py-3 text-center font-semibold w-24">
                    Kelas
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginated.map((s, i) => (
                  <tr
                    key={s.id}
                    className="border-b border-border-light hover:bg-surface-alt/50 transition-colors"
                  >
                    <td className="px-4 py-3 text-text-muted">
                      {(page - 1) * PAGE_SIZE + i + 1}
                    </td>
                    <td className="px-4 py-3 font-medium text-text-primary">
                      {s.nama}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                          s.jenisKelamin === "L"
                            ? "bg-blue-50 text-blue-600"
                            : "bg-pink-50 text-pink-600"
                        }`}
                      >
                        {s.jenisKelamin}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-text-secondary">{s.agama}</td>
                    <td className="px-4 py-3 text-text-secondary text-xs">
                      {s.alamat}
                    </td>
                    <td className="px-4 py-3 text-text-secondary text-xs">
                      <div>{s.namaAyah || "-"}</div>
                      <div className="text-text-muted">{s.namaIbu || "-"}</div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-lg">
                        {s.kelas}
                      </span>
                    </td>
                  </tr>
                ))}
                {paginated.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-4 py-12 text-center text-text-muted"
                    >
                      Tidak ada data ditemukan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-4 py-3 border-t border-border-light">
              <span className="text-xs text-text-muted">
                Halaman {page} dari {totalPages}
              </span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="p-2 rounded-lg hover:bg-surface-alt disabled:opacity-30 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (p) => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`w-8 h-8 rounded-lg text-xs font-medium transition-colors ${
                        p === page
                          ? "bg-primary text-white"
                          : "hover:bg-surface-alt text-text-secondary"
                      }`}
                    >
                      {p}
                    </button>
                  )
                )}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="p-2 rounded-lg hover:bg-surface-alt disabled:opacity-30 transition-colors"
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
