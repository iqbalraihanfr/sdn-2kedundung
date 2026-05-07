"use client";

import { useState, useMemo } from "react";
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

  const getColor = (v: number) =>
    v >= 75 ? "text-success" : v >= 60 ? "text-warning" : "text-danger";

  const getBg = (v: number) =>
    v >= 75 ? "bg-green-50" : v >= 60 ? "bg-yellow-50" : "bg-red-50";

  return (
    <div className="pt-20 pb-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center">
            <FileText size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-primary">
              Daftar Nilai
            </h1>
            <p className="text-text-secondary text-sm">
              Ulangan Harian & Ulangan Akhir Semester
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-border p-4 mb-6 flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <select
              value={kelas}
              onChange={(e) => setKelas(e.target.value)}
              className="appearance-none pl-9 pr-8 py-2.5 bg-surface-alt rounded-xl text-sm font-medium border-0 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
            >
              {kelasList.map((k) => (
                <option key={k} value={k}>{k}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={mapel}
              onChange={(e) => setMapel(e.target.value)}
              className="appearance-none px-4 py-2.5 bg-surface-alt rounded-xl text-sm font-medium border-0 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
            >
              {mapelList.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Legend */}
        <div className="flex gap-4 mb-4 text-xs">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-green-400" /> ≥ 75 (Baik)</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-yellow-400" /> 60-74 (Cukup)</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-red-400" /> &lt; 60 (Kurang)</span>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-border overflow-hidden">
          <div className="table-wrapper">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-semibold w-12">No</th>
                  <th className="px-4 py-3 text-left font-semibold min-w-[180px]">Nama</th>
                  <th className="px-4 py-3 text-left font-semibold min-w-[140px]">Mata Pelajaran</th>
                  <th className="px-4 py-3 text-center font-semibold">UH 1</th>
                  <th className="px-4 py-3 text-center font-semibold">UH 2</th>
                  <th className="px-4 py-3 text-center font-semibold">UH 3</th>
                  <th className="px-4 py-3 text-center font-semibold">UAS</th>
                  <th className="px-4 py-3 text-center font-semibold">Rata-rata</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r, i) => {
                  const avg = Math.round(
                    (r.nilaiUH1 + r.nilaiUH2 + r.nilaiUH3 + r.nilaiUAS) / 4
                  );
                  return (
                    <tr key={`${r.siswaId}-${r.mapel}`} className="border-b border-border-light hover:bg-surface-alt/50 transition-colors">
                      <td className="px-4 py-3 text-text-muted">{i + 1}</td>
                      <td className="px-4 py-3 font-medium">{r.nama}</td>
                      <td className="px-4 py-3 text-text-secondary">{r.mapel}</td>
                      <td className={`px-4 py-3 text-center font-medium ${getColor(r.nilaiUH1)}`}>
                        <span className={`inline-block px-2 py-0.5 rounded ${getBg(r.nilaiUH1)}`}>{r.nilaiUH1}</span>
                      </td>
                      <td className={`px-4 py-3 text-center font-medium ${getColor(r.nilaiUH2)}`}>
                        <span className={`inline-block px-2 py-0.5 rounded ${getBg(r.nilaiUH2)}`}>{r.nilaiUH2}</span>
                      </td>
                      <td className={`px-4 py-3 text-center font-medium ${getColor(r.nilaiUH3)}`}>
                        <span className={`inline-block px-2 py-0.5 rounded ${getBg(r.nilaiUH3)}`}>{r.nilaiUH3}</span>
                      </td>
                      <td className={`px-4 py-3 text-center font-medium ${getColor(r.nilaiUAS)}`}>
                        <span className={`inline-block px-2 py-0.5 rounded ${getBg(r.nilaiUAS)}`}>{r.nilaiUAS}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-block px-2.5 py-1 rounded-lg font-bold text-xs ${getBg(avg)} ${getColor(avg)}`}>
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
