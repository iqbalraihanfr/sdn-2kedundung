"use client";

import { useMemo, useState } from "react";

import { DATA_SISWA_PAGE_SIZE, dataSiswa } from "@/data";
import { DataSiswaFilters } from "./data-siswa-filters";
import { DataSiswaHero } from "./data-siswa-hero";
import { DataSiswaTable } from "./data-siswa-table";

export function DataSiswaContent() {
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

  const totalPages = Math.ceil(filtered.length / DATA_SISWA_PAGE_SIZE);
  const paginated = filtered.slice(
    (page - 1) * DATA_SISWA_PAGE_SIZE,
    page * DATA_SISWA_PAGE_SIZE
  );

  const handleKelasChange = (value: string) => {
    setKelas(value);
    setPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  return (
    <div className="page-shell">
      <div className="page-container">
        <DataSiswaHero totalShown={filtered.length} />
        <DataSiswaFilters
          kelas={kelas}
          kelasList={kelasList}
          search={search}
          onKelasChange={handleKelasChange}
          onSearchChange={handleSearchChange}
        />
        <DataSiswaTable
          page={page}
          rows={paginated}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
