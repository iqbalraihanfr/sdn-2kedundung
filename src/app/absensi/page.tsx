"use client";

import { useState, useMemo } from "react";
import { ClipboardList, Filter } from "lucide-react";
import dataAbsensi from "@/data/dataAbsensi.json";

export default function AbsensiPage() {
  const [kelas, setKelas] = useState("Kelas 1");
  const [bulan, setBulan] = useState("Januari");

  const kelasList = useMemo(
    () => Array.from(new Set(dataAbsensi.map((a) => a.kelas))).sort(),
    []
  );
  const bulanList = useMemo(
    () => Array.from(new Set(dataAbsensi.map((a) => a.bulan))),
    []
  );

  const filtered = useMemo(
    () => dataAbsensi.filter((a) => a.kelas === kelas && a.bulan === bulan),
    [kelas, bulan]
  );

  const totalStats = useMemo(() => {
    if (filtered.length === 0) return { hadir: 0, sakit: 0, izin: 0, alpa: 0, pct: 0 };
    const t = filtered.reduce(
      (acc, r) => ({
        hadir: acc.hadir + r.hadir,
        sakit: acc.sakit + r.sakit,
        izin: acc.izin + r.izin,
        alpa: acc.alpa + r.alpa,
        total: acc.total + r.totalHari,
      }),
      { hadir: 0, sakit: 0, izin: 0, alpa: 0, total: 0 }
    );
    return { ...t, pct: Math.round((t.hadir / t.total) * 100) };
  }, [filtered]);

  return (
    <div className="pt-20 pb-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
            <ClipboardList size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-primary">
              Rekap Absensi
            </h1>
            <p className="text-text-secondary text-sm">
              Kehadiran siswa per bulan
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
          <div className="relative">
            <select
              value={bulan}
              onChange={(e) => setBulan(e.target.value)}
              className="appearance-none px-4 py-2.5 bg-surface-alt rounded-xl text-sm font-medium border-0 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
            >
              {bulanList.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {[
            { label: "% Kehadiran", value: `${totalStats.pct}%`, color: "text-success", bg: "bg-green-50" },
            { label: "Total Sakit", value: totalStats.sakit, color: "text-warning", bg: "bg-yellow-50" },
            { label: "Total Izin", value: totalStats.izin, color: "text-blue-500", bg: "bg-blue-50" },
            { label: "Total Alpa", value: totalStats.alpa, color: "text-danger", bg: "bg-red-50" },
          ].map((s) => (
            <div
              key={s.label}
              className={`${s.bg} rounded-2xl p-4 text-center`}
            >
              <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-text-secondary mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-border overflow-hidden">
          <div className="table-wrapper">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-semibold w-12">No</th>
                  <th className="px-4 py-3 text-left font-semibold min-w-[200px]">Nama</th>
                  <th className="px-4 py-3 text-center font-semibold">Total Hari</th>
                  <th className="px-4 py-3 text-center font-semibold">Hadir</th>
                  <th className="px-4 py-3 text-center font-semibold">Sakit</th>
                  <th className="px-4 py-3 text-center font-semibold">Izin</th>
                  <th className="px-4 py-3 text-center font-semibold">Alpa</th>
                  <th className="px-4 py-3 text-center font-semibold">%</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r, i) => {
                  const pct = Math.round((r.hadir / r.totalHari) * 100);
                  return (
                    <tr key={r.siswaId} className="border-b border-border-light hover:bg-surface-alt/50 transition-colors">
                      <td className="px-4 py-3 text-text-muted">{i + 1}</td>
                      <td className="px-4 py-3 font-medium">{r.nama}</td>
                      <td className="px-4 py-3 text-center text-text-secondary">{r.totalHari}</td>
                      <td className="px-4 py-3 text-center font-medium text-success">{r.hadir}</td>
                      <td className="px-4 py-3 text-center">{r.sakit > 0 ? <span className="bg-yellow-50 text-warning px-2 py-0.5 rounded-full text-xs font-medium">{r.sakit}</span> : <span className="text-text-muted">0</span>}</td>
                      <td className="px-4 py-3 text-center">{r.izin > 0 ? <span className="bg-blue-50 text-blue-500 px-2 py-0.5 rounded-full text-xs font-medium">{r.izin}</span> : <span className="text-text-muted">0</span>}</td>
                      <td className="px-4 py-3 text-center">{r.alpa > 0 ? <span className="bg-red-50 text-danger px-2 py-0.5 rounded-full text-xs font-medium">{r.alpa}</span> : <span className="text-text-muted">0</span>}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`font-semibold text-xs ${pct >= 90 ? "text-success" : pct >= 75 ? "text-warning" : "text-danger"}`}>
                          {pct}%
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
