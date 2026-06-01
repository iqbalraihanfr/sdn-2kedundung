import { db } from '@/lib/db'

export const attendanceQueries = {
  findByClassAndDate: (classId: string, date: Date) => {
    return db.attendance.findMany({
      where: {
        date,
        student: { classId },
      },
      include: { student: true },
    })
  },

  upsertMany: async (records: { studentId: string; date: Date; status: string }[]) => {
    return db.$transaction(
      records.map((record) =>
        db.attendance.upsert({
          where: {
            studentId_date: {
              studentId: record.studentId,
              date: record.date,
            },
          },
          update: { status: record.status },
          create: record,
        })
      )
    )
  },
}
