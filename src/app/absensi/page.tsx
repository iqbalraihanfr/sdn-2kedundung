"use client";

import { useMemo, useState } from "react";
import { ClipboardList, Filter } from "lucide-react";
import { dataAbsensi } from "@/data";

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
    if (filtered.length === 0) {
      return { hadir: 0, sakit: 0, izin: 0, alpa: 0, pct: 0 };
    }

    const total = filtered.reduce(
      (acc, row) => ({
        hadir: acc.hadir + row.hadir,
        sakit: acc.sakit + row.sakit,
        izin: acc.izin + row.izin,
        alpa: acc.alpa + row.alpa,
        total: acc.total + row.totalHari,
      }),
      { hadir: 0, sakit: 0, izin: 0, alpa: 0, total: 0 }
    );

    return { ...total, pct: Math.round((total.hadir / total.total) * 100) };
  }, [filtered]);

  return (
    <div className="page-shell">
      <div className="page-container">
        <div className="page-hero">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600">
                <ClipboardList size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-primary sm:text-4xl">
                  Rekap Absensi
                </h1>
                <p className="text-sm text-text-secondary sm:text-base">
                  Pantau kehadiran siswa per kelas dan per bulan dalam satu
                  tampilan ringkas.
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
                  Bulan
                </div>
                <div className="mt-1 text-lg font-bold text-primary">{bulan}</div>
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
            <div className="relative">
              <select
                value={bulan}
                onChange={(e) => setBulan(e.target.value)}
                className="appearance-none cursor-pointer rounded-xl bg-surface-alt px-4 py-2.5 text-sm font-medium border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {bulanList.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            {
              label: "% Kehadiran",
              value: `${totalStats.pct}%`,
              color: "text-success",
              bg: "bg-green-50",
            },
            {
              label: "Total Sakit",
              value: totalStats.sakit,
              color: "text-warning",
              bg: "bg-yellow-50",
            },
            {
              label: "Total Izin",
              value: totalStats.izin,
              color: "text-blue-500",
              bg: "bg-blue-50",
            },
            {
              label: "Total Alpa",
              value: totalStats.alpa,
              color: "text-danger",
              bg: "bg-red-50",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`${stat.bg} rounded-2xl border border-white/70 p-4 text-center shadow-sm`}
            >
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-text-secondary">{stat.label}</div>
            </div>
          ))}
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
                  <th className="px-4 py-3 text-center font-semibold">Total Hari</th>
                  <th className="px-4 py-3 text-center font-semibold">Hadir</th>
                  <th className="px-4 py-3 text-center font-semibold">Sakit</th>
                  <th className="px-4 py-3 text-center font-semibold">Izin</th>
                  <th className="px-4 py-3 text-center font-semibold">Alpa</th>
                  <th className="px-4 py-3 text-center font-semibold">%</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((row, i) => {
                  const pct = Math.round((row.hadir / row.totalHari) * 100);
                  return (
                    <tr
                      key={row.siswaId}
                      className="border-b border-border-light transition-colors hover:bg-surface-alt/50"
                    >
                      <td className="px-4 py-3 text-text-muted">{i + 1}</td>
                      <td className="px-4 py-3 font-medium">{row.nama}</td>
                      <td className="px-4 py-3 text-center text-text-secondary">
                        {row.totalHari}
                      </td>
                      <td className="px-4 py-3 text-center font-medium text-success">
                        {row.hadir}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {row.sakit > 0 ? (
                          <span className="rounded-full bg-yellow-50 px-2 py-0.5 text-xs font-medium text-warning">
                            {row.sakit}
                          </span>
                        ) : (
                          <span className="text-text-muted">0</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {row.izin > 0 ? (
                          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-500">
                            {row.izin}
                          </span>
                        ) : (
                          <span className="text-text-muted">0</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {row.alpa > 0 ? (
                          <span className="rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-danger">
                            {row.alpa}
                          </span>
                        ) : (
                          <span className="text-text-muted">0</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`text-xs font-semibold ${
                            pct >= 90
                              ? "text-success"
                              : pct >= 75
                                ? "text-warning"
                                : "text-danger"
                          }`}
                        >
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
