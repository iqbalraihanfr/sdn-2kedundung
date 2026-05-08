import { Filter } from "lucide-react";

type AbsensiFiltersProps = {
  bulan: string;
  bulanList: string[];
  kelas: string;
  kelasList: string[];
  onBulanChange: (value: string) => void;
  onKelasChange: (value: string) => void;
};

export function AbsensiFilters({
  bulan,
  bulanList,
  kelas,
  kelasList,
  onBulanChange,
  onKelasChange,
}: AbsensiFiltersProps) {
  return (
    <div className="section-card mb-6 p-4 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative">
          <Filter
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
          />
          <select
            value={kelas}
            onChange={(e) => onKelasChange(e.target.value)}
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
            onChange={(e) => onBulanChange(e.target.value)}
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
  );
}
