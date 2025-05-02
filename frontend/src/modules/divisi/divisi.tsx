// components
import DivisiPilihan from "./components/DivisiPilihan";
import DivisiLengkap from "./components/DivisiLengkap";
import Wawancara from "./components/Wawancara";

// Dummy data for user's division choices
const pilihanDivisi = [
  {
    _id: "p1",
    urutanPrioritas: 1,
    divisiId: {
      _id: "d1",
      slug: "frontend",
      nama: "Frontend",
      himakom: false,
      deskripsi:
        "Mengembangkan antarmuka pengguna website menggunakan React, NextJS dan teknologi frontend lainnya.",
      tugas: ["Membuat UI/UX website", "Mengintegrasikan dengan backend"],
    },
  },
  {
    _id: "p2",
    urutanPrioritas: 2,
    divisiId: {
      _id: "d2",
      slug: "hr",
      nama: "Human Resources",
      himakom: true,
      deskripsi:
        "Mengelola sumber daya manusia dan mengembangkan potensi anggota.",
      tugas: ["Rekrutmen anggota baru", "Pengembangan soft skill"],
    },
  },
];

// Dummy data for all divisions
const divisi = {
  otiDivisi: [
    {
      _id: "d1",
      slug: "frontend",
      nama: "Frontend",
      himakom: false,
      deskripsi:
        "Mengembangkan antarmuka pengguna website menggunakan React, NextJS dan teknologi frontend lainnya.",
      tugas: ["Membuat UI/UX website", "Mengintegrasikan dengan backend"],
    },
    {
      _id: "d2",
      slug: "dsai",
      nama: "DSAI",
      himakom: false,
      deskripsi:
        "Mengembangkan Data Science dan AI",
      tugas: ["Membuat UI/UX website", "Mengintegrasikan dengan backend"],
    },
    {
      _id: "d3",
      slug: "uiux",
      nama: "UI/UX",
      himakom: false,
      deskripsi: "Merancang pengalaman pengguna dan antarmuka yang intuitif.",
      tugas: ["Desain mockup", "User research", "Prototyping"],
    },
    {
      _id: "d4",
      slug: "backend",
      nama: "Backend",
      himakom: false,
      deskripsi: "Membangun logika server dan database untuk aplikasi.",
      tugas: ["Membuat API", "Database management", "Server deployment"],
    },
    {
      _id: "d5",
      slug: "mobapps",
      nama: "Mobile Apps",
      himakom: false,
      deskripsi: "Mengembangkan aplikasi mobile untuk iOS dan Android.",
      tugas: [
        "Membuat aplikasi native/cross-platform",
        "Integrasi dengan backend",
      ],
    },
  ],
  himakomDivisi: [
    {
      _id: "d2",
      slug: "hr",
      nama: "Human Resources",
      himakom: true,
      deskripsi:
        "Mengelola sumber daya manusia dan mengembangkan potensi anggota.",
      tugas: ["Rekrutmen anggota baru", "Pengembangan soft skill"],
    },
    {
      _id: "d6",
      slug: "ipc",
      nama: "Informatics Peer Counseling",
      himakom: true,
      deskripsi:
        "Memberikan konseling akademis dan non-akademis untuk mahasiswa informatika.",
      tugas: ["Membimbing mahasiswa", "Menyelenggarakan acara konseling"],
    },
    {
      _id: "d7",
      slug: "kominfo",
      nama: "Komunikasi dan Informasi",
      himakom: true,
      deskripsi: "Mengelola media sosial dan publikasi untuk Himakom.",
      tugas: ["Content creation", "Social media management"],
    },
    {
      _id: "d7",
      slug: "skilldev",
      nama: "Skill Development",
      himakom: true,
      deskripsi: "Mengembangkan skill anak CS",
      tugas: ["Follow @kevinnstg", "Social media management"],
    },
    {
      _id: "d8",
      slug: "media",
      nama: "Media",
      himakom: true,
      deskripsi: "Mengelola media sosial dan publikasi untuk Himakom.",
      tugas: ["Content creation", "Social media management"],
    },
  ],
};

const Divisi = () => {
  return (
    <>
      <Title />
      {/* kelas yang dipilih user */}
      <DivisiPilihan pilihanDivisi={pilihanDivisi} />

      {/* kelas lengkap omahti dan himakom */}
      <div className="mt-4 flex flex-col gap-4">
        <DivisiLengkap variant="omahti" divisi={divisi.otiDivisi} />
        <DivisiLengkap variant="himakom" divisi={divisi.himakomDivisi} />
      </div>

      <Wawancara />
    </>
  );
};

const Title = () => (
  <div className="mb-8">
    <h1 className="text-2xl font-semibold sm:text-4xl">Divisi</h1>
    <p className={``}>
      Kamu hanya bisa memilih{" "}
      <span className={`font-semibold`}>Dua Divisi Himakom</span> dan{" "}
      <span className={`font-semibold`}>Dua Divisi OmahTI</span>
    </p>
  </div>
);

export default Divisi;
