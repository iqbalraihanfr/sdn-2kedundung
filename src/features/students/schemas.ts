import { z } from 'zod'

const optionalString = z.string().optional().transform(v => v === "" ? null : v)

export const studentSchema = z.object({
  nisn: z.string().min(1, 'NISN wajib diisi'),
  name: z.string().min(1, 'Nama wajib diisi'),
  classId: z.string().min(1, 'Kelas wajib dipilih'),
  
  nipd: optionalString,
  gender: optionalString,
  birthPlace: optionalString,
  birthDate: z.string().optional().transform(v => (v && v !== "" ? new Date(v) : null)),
  nik: optionalString,
  religion: optionalString,
  address: optionalString,
  village: optionalString,
  district: optionalString,
  fatherName: optionalString,
  fatherJob: optionalString,
  motherName: optionalString,
})

export type StudentInput = z.infer<typeof studentSchema>
