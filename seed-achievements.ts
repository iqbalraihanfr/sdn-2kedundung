import { db } from './src/lib/db';

const achievementsData = [
  {
    image: "/images/prestasi-apresiasi-senin.jpeg",
    title: "Apresiasi Upacara Hari Senin",
    eventName: "Upacara Bendera",
    rank: "Apresiasi",
    level: "Sekolah",
    note: "Pemberian apresiasi kepada siswa berprestasi pada saat upacara hari Senin."
  },
  {
    image: "/images/prestasi-best-contestant.jpeg",
    title: "Best Contestant",
    eventName: "Kompetisi Antar Sekolah",
    rank: "Terbaik",
    level: "Kota",
    note: "Meraih penghargaan sebagai kontestan terbaik."
  },
  {
    image: "/images/prestasi-best-player-u10.jpeg",
    title: "Best Player Sepakbola U-10",
    eventName: "Turnamen Sepakbola U-10",
    rank: "Pemain Terbaik",
    level: "Provinsi",
    note: "Menjadi pemain terbaik pada turnamen sepak bola kelompok umur 10 tahun."
  },
  {
    image: "/images/prestasi-futsal-permata-cup.jpeg",
    title: "Juara Futsal Permata Cup",
    eventName: "Permata Cup",
    rank: "Juara",
    level: "Kota",
    note: "Tim futsal sekolah meraih juara pada ajang Permata Cup."
  },
  {
    image: "/images/prestasi-juara1-menggambar.jpeg",
    title: "Juara 1 Lomba Menggambar",
    eventName: "Lomba Menggambar Anak",
    rank: "Juara 1",
    level: "Kecamatan",
    note: "Meraih Juara 1 dalam kompetisi menggambar tingkat kecamatan."
  },
  {
    image: "/images/prestasi-juara3-bulutangkis.jpeg",
    title: "Juara 3 Bulutangkis",
    eventName: "Kejuaraan Bulutangkis Pelajar",
    rank: "Juara 3",
    level: "Kota",
    note: "Berhasil meraih medali perunggu pada kejuaraan bulutangkis antar pelajar."
  },
  {
    image: "/images/prestasi-kaligrafi-jawa.jpeg",
    title: "Lomba Kaligrafi Aksara Jawa",
    eventName: "Festival Budaya Jawa",
    rank: "Penghargaan",
    level: "Provinsi",
    note: "Mendapat penghargaan pada lomba penulisan kaligrafi aksara Jawa."
  },
  {
    image: "/images/prestasi-kaligrafi-pramuka.jpeg",
    title: "Kaligrafi Kepramukaan",
    eventName: "Jambore Pramuka",
    rank: "Penghargaan",
    level: "Kecamatan",
    note: "Prestasi dalam bidang kaligrafi pada kegiatan Jambore Pramuka."
  },
  {
    image: "/images/prestasi-piala-pramuka.jpeg",
    title: "Piala Bergilir Pramuka",
    eventName: "Lomba Tingkat Pramuka",
    rank: "Juara Umum",
    level: "Kota",
    note: "Regu pramuka sekolah berhasil merebut piala bergilir."
  },
  {
    image: "/images/prestasi-sepakbola-u10.jpeg",
    title: "Juara Sepakbola U-10",
    eventName: "Liga Sepakbola Anak",
    rank: "Juara",
    level: "Provinsi",
    note: "Tim sepakbola sekolah meraih gelar juara pada turnamen U-10."
  },
  {
    image: "/images/prestasi-sepakbola-u11.jpeg",
    title: "Juara Sepakbola U-11",
    eventName: "Liga Pelajar U-11",
    rank: "Juara",
    level: "Provinsi",
    note: "Berhasil membawa pulang trofi kemenangan pada kompetisi kelompok umur 11 tahun."
  },
  {
    image: "/images/prestasi-tari-football.jpeg",
    title: "Penampilan Tari di Event Sepakbola",
    eventName: "Pembukaan Turnamen",
    rank: "Penampil Terbaik",
    level: "Kota",
    note: "Tim tari sekolah tampil memukau pada acara pembukaan turnamen."
  },
  {
    image: "/images/prestasi-tari-tunggal.jpeg",
    title: "Juara Tari Tradisional Tunggal",
    eventName: "Festival Seni Tari Pelajar",
    rank: "Juara 1",
    level: "Kota",
    note: "Memenangkan juara pertama dalam kategori tari tradisional secara tunggal."
  }
];

async function main() {
  // Try to load .env manually if needed, but tsx should load it or we can pass --env-file
  console.log('Fetching existing students...');
  let student = await db.student.findFirst();
  
  if (!student) {
    console.log('No student found. Creating a dummy class and student...');
    const classData = await db.class.create({
      data: {
        name: 'Kelas 6A',
      }
    });
    student = await db.student.create({
      data: {
        nisn: '1234567890',
        name: 'Siswa Berprestasi',
        classId: classData.id
      }
    });
  }

  console.log(`Using student: ${student.name} (${student.id})`);

  const existing = await db.achievement.findMany();
  const existingImages = existing.map(e => e.imageUrl);

  for (const data of achievementsData) {
    if (!existingImages.includes(data.image)) {
      console.log(`Inserting: ${data.title}...`);
      await db.achievement.create({
        data: {
          studentId: student.id,
          title: data.title,
          eventName: data.eventName,
          rank: data.rank,
          level: data.level,
          note: data.note,
          imageUrl: data.image,
          date: new Date()
        }
      });
    } else {
      console.log(`Skipping: ${data.title} (Already exists)`);
    }
  }

  console.log('Done!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });
