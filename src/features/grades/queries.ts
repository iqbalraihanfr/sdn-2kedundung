import { db } from '@/lib/db'

export const gradeQueries = {
  findByClassSubjectSemester: (classId: string, subjectId: string, semester: string) => {
    return db.grade.findMany({
      where: {
        subjectId,
        semester,
        student: { classId },
      },
      include: { student: true },
    })
  },

  upsertMany: async (records: { studentId: string; subjectId: string; semester: string; score: number }[]) => {
    return db.$transaction(
      records.map((record) =>
        db.grade.upsert({
          where: {
            studentId_subjectId_semester: {
              studentId: record.studentId,
              subjectId: record.subjectId,
              semester: record.semester,
            },
          },
          update: { score: record.score },
          create: record,
        })
      )
    )
  },
}
