'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const MONTHS = [
  { value: '01', label: 'Januari' },
  { value: '02', label: 'Februari' },
  { value: '03', label: 'Maret' },
  { value: '04', label: 'April' },
  { value: '05', label: 'Mei' },
  { value: '06', label: 'Juni' },
  { value: '07', label: 'Juli' },
  { value: '08', label: 'Agustus' },
  { value: '09', label: 'September' },
  { value: '10', label: 'Oktober' },
  { value: '11', label: 'November' },
  { value: '12', label: 'Desember' },
]

function getYears() {
  const current = new Date().getFullYear()
  return Array.from({ length: 5 }, (_, i) => current - 2 + i)
}

export function MonthFilter({
  classes,
  classId,
  monthYearVal,
  basePath,
}: {
  classes: { id: string; name: string }[]
  classId: string
  monthYearVal: string // "2026-06"
  basePath: string
}) {
  const router = useRouter()

  const initialMonth = monthYearVal.split('-')[1] ?? '01'
  const initialYear = monthYearVal.split('-')[0] ?? String(new Date().getFullYear())

  const [month, setMonth] = useState(initialMonth)
  const [year, setYear] = useState(initialYear)
  const [cls, setCls] = useState(classId)

  const handleSubmit = () => {
    const monthYear = `${year}-${month}`
    router.push(`${basePath}?classId=${cls}&monthYear=${monthYear}`)
  }

  return (
    <div className="section-card flex flex-col gap-4 p-5 sm:flex-row sm:items-end animate-fade-in-up animate-delay-100">
      <label className="space-y-2 sm:flex-1">
        <span className="block text-sm font-semibold text-primary">Kelas</span>
        <select
          value={cls}
          onChange={(e) => setCls(e.target.value)}
          className="w-full h-11 rounded-xl border border-border bg-white px-4 text-sm text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
        >
          {classes.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </label>

      <label className="space-y-2 sm:flex-1">
        <span className="block text-sm font-semibold text-primary">Bulan</span>
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="w-full h-11 rounded-xl border border-border bg-white px-4 text-sm text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
        >
          {MONTHS.map((m) => (
            <option key={m.value} value={m.value}>{m.label}</option>
          ))}
        </select>
      </label>

      <label className="space-y-2 sm:flex-1">
        <span className="block text-sm font-semibold text-primary">Tahun</span>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full h-11 rounded-xl border border-border bg-white px-4 text-sm text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
        >
          {getYears().map((y) => (
            <option key={y} value={String(y)}>{y}</option>
          ))}
        </select>
      </label>

      <div className="flex gap-3 sm:flex-none">
        <button
          type="button"
          onClick={handleSubmit}
          className="h-11 rounded-xl bg-primary px-6 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
        >
          Tampilkan
        </button>
        <Link
          href={basePath}
          className="inline-flex h-11 items-center rounded-xl border border-border bg-white px-6 text-sm font-medium text-text-secondary transition-all hover:bg-surface-alt hover:text-primary shadow-sm"
        >
          Reset
        </Link>
      </div>
    </div>
  )
}
