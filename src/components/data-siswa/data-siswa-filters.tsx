import { Filter, Search } from "lucide-react";

type DataSiswaFiltersProps = {
  kelas: string;
  kelasList: string[];
  search: string;
  onKelasChange: (value: string) => void;
  onSearchChange: (value: string) => void;
};

export function DataSiswaFilters({
  kelas,
  kelasList,
  search,
  onKelasChange,
  onSearchChange,
}: DataSiswaFiltersProps) {
  return (
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
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full h-[46px] rounded-xl bg-surface-alt py-2.5 pl-10 pr-4 text-sm border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="relative sm:w-44">
          <Filter
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
          />
          <select
            value={kelas}
            onChange={(e) => onKelasChange(e.target.value)}
            className="w-full h-[46px] appearance-none cursor-pointer rounded-xl border-0 bg-surface-alt py-2.5 pl-9 pr-8 text-sm font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
  );
}
