type AbsensiStatsValue = {
  alpa: number;
  izin: number;
  pct: number;
  sakit: number;
};

type AbsensiStatsProps = {
  stats: AbsensiStatsValue;
};

export function AbsensiStats({ stats }: AbsensiStatsProps) {
  const items = [
    {
      label: "% Kehadiran",
      value: `${stats.pct}%`,
      color: "text-success",
      bg: "bg-green-50",
    },
    {
      label: "Total Sakit",
      value: stats.sakit,
      color: "text-warning",
      bg: "bg-yellow-50",
    },
    {
      label: "Total Izin",
      value: stats.izin,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      label: "Total Alpa",
      value: stats.alpa,
      color: "text-danger",
      bg: "bg-red-50",
    },
  ];

  return (
    <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {items.map((stat) => (
        <div
          key={stat.label}
          className={`${stat.bg} rounded-2xl border border-white/70 p-4 text-center shadow-sm`}
        >
          <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
          <div className="mt-1 text-xs text-text-secondary">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
