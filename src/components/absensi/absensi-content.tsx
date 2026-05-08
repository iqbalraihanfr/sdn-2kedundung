"use client";

import { useMemo, useState } from "react";

import { dataAbsensi } from "@/data";
import { AbsensiFilters } from "./absensi-filters";
import { AbsensiHero } from "./absensi-hero";
import { AbsensiStats } from "./absensi-stats";
import { AbsensiTable } from "./absensi-table";

export function AbsensiContent() {
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
        <AbsensiHero bulan={bulan} kelas={kelas} />
        <AbsensiFilters
          bulan={bulan}
          bulanList={bulanList}
          kelas={kelas}
          kelasList={kelasList}
          onBulanChange={setBulan}
          onKelasChange={setKelas}
        />
        <AbsensiStats stats={totalStats} />
        <AbsensiTable rows={filtered} />
      </div>
    </div>
  );
}
