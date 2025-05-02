import { Button } from "@/components/ui/button";
import Link from "next/link";

const Wawancara = () => (
  <div className="mt-10 flex flex-col items-center justify-between gap-3 rounded-lg bg-custom-gray-dark p-4 sm:flex-row">
    <h1 className="ml-2 text-pretty text-center sm:text-start">
      Setelah menyelesaikan tugas, jangan lupa untuk mengisi jadwal wawancara
    </h1>
    <Link href={`wawancara`}>
      <Button
        variant={`white`}
        size={`lg`}
        className="w-full shrink-0 text-center text-base font-semibold text-custom-black sm:px-10 sm:py-6 lg:w-fit"
      >
        Halaman Wawancara
      </Button>
    </Link>
  </div>
);

export default Wawancara;
