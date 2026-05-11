import { dataNilai } from "@/data";

type NilaiRow = (typeof dataNilai)[number];

type DaftarNilaiTableProps = {
  rows: NilaiRow[];
};

const getColor = (value: number) =>
  value >= 75 ? "text-success" : value >= 60 ? "text-warning" : "text-danger";

const getBg = (value: number) =>
  value >= 75 ? "bg-green-50" : value >= 60 ? "bg-yellow-50" : "bg-red-50";

export function DaftarNilaiTable({ rows }: DaftarNilaiTableProps) {
  return (
    <div className="section-card overflow-hidden">
      <div className="table-wrapper">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-primary text-white">
              <th className="w-12 px-4 py-3 text-left font-semibold">No</th>
              <th className="min-w-[180px] px-4 py-3 text-left font-semibold">
                Nama
              </th>
              <th className="min-w-[140px] px-4 py-3 text-left font-semibold">
                Mata Pelajaran
              </th>
              <th className="px-4 py-3 text-center font-semibold">UH 1</th>
              <th className="px-4 py-3 text-center font-semibold">UH 2</th>
              <th className="px-4 py-3 text-center font-semibold">UH 3</th>
              <th className="px-4 py-3 text-center font-semibold">UAS</th>
              <th className="px-4 py-3 text-center font-semibold">
                Rata-rata
              </th>
            </tr>
          </thead>
          <tbody>
            {(() => {
              let studentCounter = 0;
              return rows.map((row, i) => {
                const isFirstRow = i === 0 || rows[i - 1].nama !== row.nama;
                if (isFirstRow) studentCounter++;
                
                const avg = Math.round(
                  (row.nilaiUH1 + row.nilaiUH2 + row.nilaiUH3 + row.nilaiUAS) / 4
                );

                const rowSpan = isFirstRow 
                  ? rows.filter(r => r.nama === row.nama).length 
                  : 0;

                return (
                  <tr
                    key={`${row.siswaId}-${row.mapel}`}
                    className="border-b border-border-light transition-colors hover:bg-surface-alt/50"
                  >
                    {isFirstRow && (
                      <>
                        <td 
                          rowSpan={rowSpan} 
                          className="border-r border-border-light px-4 py-3 text-text-muted align-top"
                        >
                          {studentCounter}
                        </td>
                        <td 
                          rowSpan={rowSpan} 
                          className="border-r border-border-light px-4 py-3 font-medium align-top"
                        >
                          {row.nama}
                        </td>
                      </>
                    )}
                    <td className="px-4 py-3 text-text-secondary">{row.mapel}</td>
                    <td className={`px-4 py-3 text-center font-medium ${getColor(row.nilaiUH1)}`}>
                      <span className={`inline-block rounded px-2 py-0.5 ${getBg(row.nilaiUH1)}`}>
                        {row.nilaiUH1}
                      </span>
                    </td>
                    <td className={`px-4 py-3 text-center font-medium ${getColor(row.nilaiUH2)}`}>
                      <span className={`inline-block rounded px-2 py-0.5 ${getBg(row.nilaiUH2)}`}>
                        {row.nilaiUH2}
                      </span>
                    </td>
                    <td className={`px-4 py-3 text-center font-medium ${getColor(row.nilaiUH3)}`}>
                      <span className={`inline-block rounded px-2 py-0.5 ${getBg(row.nilaiUH3)}`}>
                        {row.nilaiUH3}
                      </span>
                    </td>
                    <td className={`px-4 py-3 text-center font-medium ${getColor(row.nilaiUAS)}`}>
                      <span className={`inline-block rounded px-2 py-0.5 ${getBg(row.nilaiUAS)}`}>
                        {row.nilaiUAS}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`inline-block rounded-lg px-2.5 py-1 text-xs font-bold ${getBg(avg)} ${getColor(avg)}`}
                      >
                        {avg}
                      </span>
                    </td>
                  </tr>
                );
              });
            })()}
          </tbody>
        </table>
      </div>
    </div>
  );
}
