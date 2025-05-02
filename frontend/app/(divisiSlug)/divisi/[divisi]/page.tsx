// next
import { notFound } from "next/navigation";
import Image from "next/image";
import { cookies } from "next/headers";
import { ArrowLeft } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// components
import ProjectsSwiper from "@/modules/divisi/components/ProjectSwiper";
import Penugasan from "@/modules/divisi/slug/components/Penugasan";
import Container from "@/components/Container";
import PopupUrutan from "@/modules/divisi/components/PopupUrutan";
import ButtonLink from "@/components/ui/ButtonLink";

// utils
import { Logos } from "@/utils/types";

// Define types to fix linter errors
type PenugasanData = {
  _id: string;
  judul: string;
  deskripsi: string;
  deadline: string;
  submissionLink: string;
  deskripsiPenugasan: string;
  toolsPenugasan: string;
  linkPenugasan: string;
};

// Dummy data
const dummyDivisiData = {
  _id: "d1",
  slug: "frontend",
  judul: "Frontend",
  judulPanjang: "Frontend Development",
  himakom: false,
  deskripsi:
    "Mengembangkan antarmuka pengguna website menggunakan React, NextJS dan teknologi frontend lainnya.",
  dipilihOleh: ["user1", "user2", "user3", "user4", "user5"],
  logoUrl: "/assets/logo/putih/FE.png",
  proker: [
    {
      judul: "Website OmahTI",
      deskripsi: "Pengembangan dan pemeliharaan website organisasi OmahTI",
      gambar: "https://picsum.photos/800/450",
    },
    {
      judul: "Website OPREC",
      deskripsi: "Pembuatan website untuk open recruitment anggota baru",
      gambar: "https://picsum.photos/800/450",
    },
    {
      judul: "Dashboard Admin",
      deskripsi: "Membangun dashboard untuk admin mengelola data organisasi",
      gambar: "https://picsum.photos/800/450",
    },
  ],
};

// Dummy penugasan data that matches the required structure
const dummyPenugasan: PenugasanData = {
  _id: "t1",
  judul: "Membuat Website Portfolio",
  deskripsi:
    "Buatlah website portfolio personal menggunakan React dan Tailwind CSS",
  deadline: "2024-12-25T23:59:59Z",
  submissionLink: "https://forms.gle/exampleSubmissionForm",
  deskripsiPenugasan:
    "Kembangkan website portfolio personal yang menampilkan skill, project, dan informasi kontak Anda",
  toolsPenugasan: "React, Tailwind CSS, NextJS",
  linkPenugasan: "https://github.com/yourrepo/portfolio-template",
};

// Dummy enrollment data
const dummyHasEnrolledHere = true;
const dummyPrioritiesTaken = [1, 2];
const dummyDivisionsByPriority = [
  { priority: 1, name: "Frontend", slug: "frontend", himakom: false },
  { priority: 2, name: "UI/UX", slug: "uiux", himakom: false },
];

type DivisiPageProps = {
  params: {
    divisi: string;
  };
};

// Let TypeScript know we're using module declarations for the import errors

const Page = ({ params }: DivisiPageProps) => {
  // Use dummy data instead of fetching
  const penugasan = dummyPenugasan;
  const divisiData = {
    ...dummyDivisiData,
    penugasan: dummyPenugasan,
  };
  const hasEnrolledHere = dummyHasEnrolledHere;
  const accessToken = "dummy-access-token";

  if (!divisiData) {
    notFound();
  }

  return (
    <>
      <section
        className={`relative min-h-screen bg-transparent ${divisiData.himakom === true ? "bg-gradient-to-b from-custom-blue to-custom-black to-30%" : "via-cus bg-gradient-to-b from-custom-orange to-custom-black to-30%"}`}
      >
        <Container
          className="flex flex-col gap-4 xl:flex-row"
          parentClass="bg-transparent"
        >
          {/* left side 70% */}
          <div className="space-y-6 xl:w-[70%]">
            {/* button to go back to divisi */}
            <ButtonLink href="/divisi">
              <ArrowLeft className="h-5" />
              Kembali
            </ButtonLink>

            <div className="flex flex-col justify-between space-y-3 md:flex-row md:items-end lg:flex-grow xl:pr-0">
              <Title data={divisiData} slug={params.divisi} />
              {/* Status */}
              <Progress
                progress={divisiData.dipilihOleh.length}
                params={params.divisi}
              />
            </div>

            {/* Tentang */}
            <About text={divisiData.deskripsi} />

            {/* Proyek */}
            <ProjectsSwiper divisiData={divisiData.proker} />
          </div>
          {/* right side 30% */}
          <Penugasan
            data={{
              himakom: divisiData.himakom,
              slug: params.divisi,
              penugasan: divisiData.penugasan,
            }}
            hasEnrolled={hasEnrolledHere}
            existingPenugasan={penugasan}
          />
        </Container>
      </section>
    </>
  );
};

const Title = ({
  data,
  slug,
}: {
  data: {
    himakom: boolean;
    judul: string;
    judulPanjang: string;
    logoUrl: string;
  };
  slug: string;
}) => {
  return (
    <div className="flex items-end gap-4">
      <Image
        alt="Logo"
        className="w-[4rem] sm:w-[8rem]"
        src={
          Logos[slug as keyof typeof Logos] ??
          "https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg?w=826&t=st=1729060915~exp=1729061515~hmac=dc911f470a5362d31529331c2e5ba014647fd3219c2e050b0d34e03a59d6002e"
        }
        height={0}
        width={0}
      />
      <div className="flex flex-col">
        <h1 className={`text-[2rem] font-semibold text-white sm:text-[3rem]`}>
          {data.judul}
        </h1>
        <h2 className="italic">{data.judulPanjang}</h2>
      </div>
    </div>
  );
};

const About = ({ text }: { text: string }) => {
  return (
    <div className="w-full space-y-3 xl:pr-0">
      <h1 className="text-lg font-semibold">Tentang Kami</h1>
      <div className="rounded-lg bg-custom-gray-dark p-3 text-justify">
        {text}
      </div>
    </div>
  );
};

const Progress = ({
  progress = 5,
  params,
}: {
  progress?: number;
  params: string;
}) => {
  // Use dummy data instead of fetching
  const hasEnrolledHere = dummyHasEnrolledHere;
  const hasReachedMax = false;
  const prioritiesTaken = dummyPrioritiesTaken;
  const divisionsByPriority = dummyDivisionsByPriority;

  return (
    <div className="flex h-auto w-full flex-col justify-between gap-2 rounded-lg bg-custom-gray-dark p-3 md:w-64">
      <h3 className="font-semibold">Status</h3>

      <div className="flex justify-between">
        <h4>Pendaftar</h4>
        <h4>{progress}</h4>
      </div>

      <PopupUrutan
        hasEnrolled={hasEnrolledHere}
        prioritiesTaken={prioritiesTaken}
        hasMax={hasReachedMax}
        enrolledDivisionsSorted={divisionsByPriority}
        params={params}
      />
    </div>
  );
};

export default Page;
