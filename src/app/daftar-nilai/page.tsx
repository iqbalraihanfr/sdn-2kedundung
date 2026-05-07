"use client";

import { useMemo, useState } from "react";
import { FileText, Filter } from "lucide-react";
import dataNilai from "@/data/dataNilai.json";

export default function DaftarNilaiPage() {
  const [kelas, setKelas] = useState("Kelas 1");
  const [mapel, setMapel] = useState("Semua");

  const kelasList = useMemo(
    () => Array.from(new Set(dataNilai.map((n) => n.kelas))).sort(),
    []
  );
  const mapelList = useMemo(
    () => ["Semua", ...Array.from(new Set(dataNilai.map((n) => n.mapel)))],
    []
  );

  const filtered = useMemo(() => {
    let data = dataNilai.filter((n) => n.kelas === kelas);
    if (mapel !== "Semua") data = data.filter((n) => n.mapel === mapel);
    return data;
  }, [kelas, mapel]);

  const getColor = (value: number) =>
    value >= 75 ? "text-success" : value >= 60 ? "text-warning" : "text-danger";

  const getBg = (value: number) =>
    value >= 75 ? "bg-green-50" : value >= 60 ? "bg-yellow-50" : "bg-red-50";

  return (
    <div className="page-shell">
      <div className="page-container">
        <div className="page-hero">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-violet-600">
                <FileText size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-primary sm:text-4xl">
                  Daftar Nilai
                </h1>
                <p className="text-sm text-text-secondary sm:text-base">
                  Ringkasan nilai harian dan semester dengan tampilan yang lebih
                  mudah dipindai.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:max-w-sm">
              <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                <div className="text-xs uppercase tracking-[0.16em] text-text-muted">
                  Kelas
                </div>
                <div className="mt-1 text-lg font-bold text-primary">{kelas}</div>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                <div className="text-xs uppercase tracking-[0.16em] text-text-muted">
                  Mapel
                </div>
                <div className="mt-1 text-lg font-bold text-primary">{mapel}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-card mb-6 p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <Filter
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
              />
              <select
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
                className="appearance-none cursor-pointer rounded-xl bg-surface-alt py-2.5 pl-9 pr-8 text-sm font-medium border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {kelasList.map((k) => (
                  <option key={k} value={k}>
                    {k}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={mapel}
                onChange={(e) => setMapel(e.target.value)}
                className="appearance-none cursor-pointer rounded-xl bg-surface-alt px-4 py-2.5 text-sm font-medium border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {mapelList.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="section-card mb-4 flex flex-wrap gap-4 px-4 py-3 text-xs sm:px-5">
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-green-400" />
            &gt;= 75 (Baik)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            60-74 (Cukup)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            &lt; 60 (Kurang)
          </span>
        </div>

        <div className="section-card overflow-hidden">
          <div className="table-wrapper">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="w-12 px-4 py-3 text-left font-semibold">No</th>
                  <th className="min-w-[180px] px-4 py-3 text-left font-semibold">
                    Nama
                  </th>
                  <th className="min-w-[140px] px-4 py-3 text-left font-semibold">
                    Mata Pelajaran
                  </th>
                  <th className="px-4 py-3 text-center font-semibold">UH 1</th>
                  <th className="px-4 py-3 text-center font-semibold">UH 2</th>
                  <th className="px-4 py-3 text-center font-semibold">UH 3</th>
                  <th className="px-4 py-3 text-center font-semibold">UAS</th>
                  <th className="px-4 py-3 text-center font-semibold">
                    Rata-rata
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((row, i) => {
                  const avg = Math.round(
                    (row.nilaiUH1 + row.nilaiUH2 + row.nilaiUH3 + row.nilaiUAS) / 4
                  );
                  return (
                    <tr
                      key={`${row.siswaId}-${row.mapel}`}
                      className="border-b border-border-light transition-colors hover:bg-surface-alt/50"
                    >
                      <td className="px-4 py-3 text-text-muted">{i + 1}</td>
                      <td className="px-4 py-3 font-medium">{row.nama}</td>
                      <td className="px-4 py-3 text-text-secondary">{row.mapel}</td>
                      <td className={`px-4 py-3 text-center font-medium ${getColor(row.nilaiUH1)}`}>
                        <span className={`inline-block rounded px-2 py-0.5 ${getBg(row.nilaiUH1)}`}>
                          {row.nilaiUH1}
                        </span>
                      </td>
                      <td className={`px-4 py-3 text-center font-medium ${getColor(row.nilaiUH2)}`}>
                        <span className={`inline-block rounded px-2 py-0.5 ${getBg(row.nilaiUH2)}`}>
                          {row.nilaiUH2}
                        </span>
                      </td>
                      <td className={`px-4 py-3 text-center font-medium ${getColor(row.nilaiUH3)}`}>
                        <span className={`inline-block rounded px-2 py-0.5 ${getBg(row.nilaiUH3)}`}>
                          {row.nilaiUH3}
                        </span>
                      </td>
                      <td className={`px-4 py-3 text-center font-medium ${getColor(row.nilaiUAS)}`}>
                        <span className={`inline-block rounded px-2 py-0.5 ${getBg(row.nilaiUAS)}`}>
                          {row.nilaiUAS}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-block rounded-lg px-2.5 py-1 text-xs font-bold ${getBg(avg)} ${getColor(avg)}`}
                        >
                          {avg}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
