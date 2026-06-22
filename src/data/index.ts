import {
  Apple,
  BookOpen,
  ClipboardList,
  Dumbbell,
  FileText,
  Heart,
  Moon,
  Star,
  Sun,
  Users,
} from "lucide-react";

import dataAbsensi from "./dataAbsensi.json";
import dataNilai from "./dataNilai.json";
import dataSiswa from "./dataSiswa.json";
import tataTertibData from "./tataTertib.json";

export { dataAbsensi, dataNilai, dataSiswa, tataTertibData };

export const DATA_SISWA_PAGE_SIZE = 20;

export const homeStats = [
  { label: "Siswa", value: "175" },
  { label: "Kelas", value: "6" },
  { label: "Fitur", value: "5" },
];

export const homeFeatures = [
  {
    icon: Users,
    title: "Data Peserta Didik",
    desc: "Data lengkap 175 siswa dari Kelas 1 hingga Kelas 6",
    href: "/data-siswa",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: ClipboardList,
    title: "Absensi Siswa",
    desc: "Rekap kehadiran siswa per kelas dan per bulan",
    href: "/absensi",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: FileText,
    title: "Daftar Nilai",
    desc: "Nilai Ulangan Harian dan Ulangan Akhir Semester",
    href: "/daftar-nilai",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: Heart,
    title: "Gerakan 7 KAIH",
    desc: "7 Kebiasaan Anak Indonesia Hebat - Penilaian Karakter",
    href: "/gerakan-7kaih",
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: BookOpen,
    title: "Tata Tertib",
    desc: "Peraturan dan ketentuan siswa SDN Kedundung 2",
    href: "/tata-tertib",
    color: "from-amber-500 to-amber-600",
  },
];

export const misiPoints = [
  "Membangun lingkungan sekolah yang membentuk pendidik dan murid memiliki akhlak mulia melalui rutinitas kegiatan keagamaan dan menerapkan ajaran agama melalui cara berinteraksi di sekolah.",
  "Merancang pembelajaran yang berkesadaran, bermakna, menarik dan menyenangkan yang mampu memotivasi murid untuk selalu belajar dan menemukan pembelajaran.",
  "Membangun kepedulian terhadap lingkungan sekolah, bertoleransi dalam kewargaan, mencintai budaya lokal dan menjunjung nilai gotong royong yang terintegrasi dalam pembelajaran.",
  "Mengembangkan kemandirian, nalar kritis dan kreativitas yang memfasilitasi keragaman minat dan bakat murid.",
  "Mengembangkan program sekolah yang membentuk ide dan gagasan cepat tanggap terhadap perubahan yang terjadi untuk merancang inovasi.",
  "Mengembangkan dan memfasilitasi peningkatan prestasi murid sesuai minat dan bakatnya melalui proses pendampingan dan kerja sama dengan orang tua.",
];

export const kepalaSekolah = {
  src: "/images/kepala-sekolah.jpeg",
  nama: "Kepala Sekolah SDN Kedundung 2",
};

export const prestasiImages = [
  {
    src: "/images/prestasi-juara1-menggambar.jpeg",
    alt: "Juara 1 Lomba Menggambar Bulan PRB 2025",
    siswa: "Nikita Ratu Valensya",
    kelas: "Kelas 5",
    prestasi: "Juara 1 Lomba Menggambar",
  },
  {
    src: "/images/prestasi-apresiasi-senin.jpeg",
    alt: "Senin Apresiasi - Juara Menggambar & Tari",
    siswa: "Nikita Ratu Valensya",
    kelas: "Kelas 5",
    prestasi: "Juara 1 Menggambar, Juara Harapan 4 Tari C, Juara 2 Tari B",
  },
  {
    src: "/images/prestasi-best-contestant.jpeg",
    alt: "Best Contestant Lomba Menggambar 2025",
    siswa: "Nikita Ratu Valensya",
    kelas: "Kelas 5",
    prestasi: "Best Contestant Lomba Menggambar 2025",
  },
  {
    src: "/images/prestasi-kaligrafi-jawa.jpeg",
    alt: "Juara Harapan 3 Kaligrafi Aksara Jawa HIPRADA 2025",
    siswa: "Nikita Ratu Valensya",
    kelas: "Kelas 5",
    prestasi: "Juara Harapan 3 Kaligrafi Aksara Jawa HIPRADA 2025",
  },
  {
    src: "/images/prestasi-tari-football.jpeg",
    alt: "Apresiasi Terbaik 4 Tari Tunggal C & Juara 2 Fun Game Football",
    siswa: "Gita Suluh Ati",
    kelas: "Kelas 5",
    prestasi: "Terbaik 4 Tari Tunggal C & Juara 2 Fun Game Football 2025",
  },
  {
    src: "/images/prestasi-tari-tunggal.jpeg",
    alt: "Juara Harapan Tari Tunggal Kategori C",
    siswa: "Gita Suluh Ati",
    kelas: "Kelas 5",
    prestasi: "Juara Harapan Tari Tunggal Kategori C",
  },
  {
    src: "/images/prestasi-piala-pramuka.jpeg",
    alt: "Prestasi Pramuka - Piala dan Piagam",
    siswa: "Gita Suluh Ati",
    kelas: "Kelas 5",
    prestasi: "Juara Lomba Pramuka",
  },
  {
    src: "/images/prestasi-kaligrafi-pramuka.jpeg",
    alt: "Juara 3 Lomba Kaligrafi Aksara Pramuka",
    siswa: "Siswi SDN Kedundung 2",
    kelas: "",
    prestasi: "Juara 3 Lomba Kaligrafi Aksara",
  },
  {
    src: "/images/prestasi-futsal-permata-cup.jpeg",
    alt: "Juara 3 Permata Festival Cup 2025 - Tim Futsal Arkedu",
    siswa: "Wildan (El Capitano)",
    kelas: "Tim Futsal Arkedu",
    prestasi: "Juara 3 Permata Festival Cup 2025",
  },
  {
    src: "/images/prestasi-sepakbola-u11.jpeg",
    alt: "Juara 2 Sepak Bola SISOO CUP U-11",
    siswa: "Tim Sepak Bola U-11 Arkedu",
    kelas: "",
    prestasi: "Juara 2 Sepak Bola SISOO CUP U-11",
  },
  {
    src: "/images/prestasi-sepakbola-u10.jpeg",
    alt: "Juara 3 Sepak Bola SISOO CUP U-10",
    siswa: "Tim Sepak Bola U-10 Arkedu",
    kelas: "",
    prestasi: "Juara 3 Sepak Bola SISOO CUP U-10",
  },
  {
    src: "/images/prestasi-best-player-u10.jpeg",
    alt: "Best Player Sepak Bola SISOO CUP U-10",
    siswa: "Fatian Zaki",
    kelas: "Kelas 2",
    prestasi: "Best Player Sepak Bola SISOO CUP U-10",
  },
  {
    src: "/images/prestasi-juara3-bulutangkis.jpeg",
    alt: "Juara 3 Bulutangkis",
    siswa: "Siswa SDN Kedundung 2",
    kelas: "",
    prestasi: "Juara 3 Bulutangkis",
  },
];

export const kebiasaan7Kaih = [
  {
    icon: Sun,
    title: "Bangun Pagi",
    desc: "Membiasakan bangun pagi sebelum subuh untuk memulai hari dengan semangat dan disiplin",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Star,
    title: "Beribadah",
    desc: "Melaksanakan ibadah sesuai agama dan kepercayaan masing-masing secara rutin dan khusyuk",
    color: "from-emerald-400 to-green-600",
  },
  {
    icon: Dumbbell,
    title: "Berolahraga",
    desc: "Melakukan aktivitas fisik dan olahraga secara teratur untuk menjaga kesehatan tubuh",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Apple,
    title: "Makan Sehat & Bergizi",
    desc: "Mengonsumsi makanan bergizi seimbang, menghindari jajanan tidak sehat",
    color: "from-red-400 to-rose-500",
  },
  {
    icon: BookOpen,
    title: "Gemar Belajar",
    desc: "Menumbuhkan minat membaca dan belajar untuk memperluas wawasan dan pengetahuan",
    color: "from-violet-400 to-purple-600",
  },
  {
    icon: Users,
    title: "Bermasyarakat",
    desc: "Bersosialisasi, gotong royong, dan berkontribusi positif di lingkungan sekitar",
    color: "from-teal-400 to-cyan-600",
  },
  {
    icon: Moon,
    title: "Tidur Cepat",
    desc: "Membiasakan tidur tepat waktu agar tubuh dan pikiran segar untuk hari esok",
    color: "from-indigo-400 to-indigo-600",
  },
];
