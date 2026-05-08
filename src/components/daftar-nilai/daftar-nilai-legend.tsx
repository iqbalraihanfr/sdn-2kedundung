export function DaftarNilaiLegend() {
  return (
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
  );
}
