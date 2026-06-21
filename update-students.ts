import { db } from './src/lib/db';

async function main() {
  // Create classes
  const getOrCreateClass = async (name: string) => {
    let cls = await db.class.findFirst({ where: { name } });
    if (!cls) {
      cls = await db.class.create({ data: { name } });
    }
    return cls;
  };

  const kelas5 = await getOrCreateClass('Kelas 5');
  const kelas2 = await getOrCreateClass('Kelas 2');
  const timClass = await getOrCreateClass('Tim Sekolah');

  // Create students
  const getOrCreateStudent = async (name: string, classId: string) => {
    let student = await db.student.findFirst({ where: { name } });
    if (!student) {
      student = await db.student.create({
        data: {
          name,
          classId,
          nisn: Math.random().toString(36).substring(2, 12),
        }
      });
    }
    return student;
  };

  const nikita = await getOrCreateStudent('NIKITA RATU VALENSYA', kelas5.id);
  const fatian = await getOrCreateStudent('FATIAN ZAKI', kelas2.id);
  const wildan = await getOrCreateStudent('WILDAN', timClass.id);
  const gita = await getOrCreateStudent('GITA SULUH ATI', kelas5.id);
  const timU10 = await getOrCreateStudent('TIM SEPAKBOLA U-10', timClass.id);
  const timU11 = await getOrCreateStudent('TIM SEPAKBOLA U-11', timClass.id);
  const timBulutangkis = await getOrCreateStudent('TIM BULUTANGKIS', timClass.id);

  // Mappings
  const mappings: Record<string, string> = {
    "/images/prestasi-apresiasi-senin.jpeg": nikita.id,
    "/images/prestasi-best-contestant.jpeg": nikita.id,
    "/images/prestasi-juara1-menggambar.jpeg": nikita.id,
    "/images/prestasi-kaligrafi-jawa.jpeg": nikita.id,
    "/images/prestasi-kaligrafi-pramuka.jpeg": nikita.id,
    
    "/images/prestasi-best-player-u10.jpeg": fatian.id,
    
    "/images/prestasi-futsal-permata-cup.jpeg": wildan.id,
    
    "/images/prestasi-piala-pramuka.jpeg": gita.id,
    "/images/prestasi-tari-football.jpeg": gita.id,
    "/images/prestasi-tari-tunggal.jpeg": gita.id,
    
    "/images/prestasi-sepakbola-u10.jpeg": timU10.id,
    "/images/prestasi-sepakbola-u11.jpeg": timU11.id,
    
    "/images/prestasi-juara3-bulutangkis.jpeg": timBulutangkis.id,
  };

  for (const [imageUrl, studentId] of Object.entries(mappings)) {
    await db.achievement.updateMany({
      where: { imageUrl },
      data: { studentId }
    });
    console.log(`Updated achievements for ${imageUrl}`);
  }

  console.log('Done updating students!');
}

main()
  .catch(console.error)
  .finally(() => process.exit(0));
