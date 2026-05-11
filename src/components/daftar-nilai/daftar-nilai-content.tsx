"use client";

import { useMemo, useState } from "react";

import { dataNilai } from "@/data";
import { DaftarNilaiFilters } from "./daftar-nilai-filters";
import { DaftarNilaiHero } from "./daftar-nilai-hero";
import { DaftarNilaiLegend } from "./daftar-nilai-legend";
import { DaftarNilaiTable } from "./daftar-nilai-table";

export function DaftarNilaiContent() {
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
    
    // Sort by name, then by mapel
    return data.sort((a, b) => {
      const nameComp = a.nama.localeCompare(b.nama);
      if (nameComp !== 0) return nameComp;
      return a.mapel.localeCompare(b.mapel);
    });
  }, [kelas, mapel]);

  return (
    <div className="page-shell">
      <div className="page-container">
        <DaftarNilaiHero kelas={kelas} mapel={mapel} />
        <DaftarNilaiFilters
          kelas={kelas}
          kelasList={kelasList}
          mapel={mapel}
          mapelList={mapelList}
          onKelasChange={setKelas}
          onMapelChange={setMapel}
        />
        <DaftarNilaiLegend />
        <DaftarNilaiTable rows={filtered} />
      </div>
    </div>
  );
}
