import MakomtiTable from "./components/makomti-table";
import DivisionTable from "./components/division-table";
import NumberTicker from "@/components/ui/number-ticker";
import { BorderBeam } from "@/components/ui/border-beam";
import HyperText from "@/components/ui/hyper-text";
import Image from "next/image";
import { Logos } from "@/utils/types";
import { User } from "lucide-react";

const AdminDashboard = () => {

  return (
    <div className="min-h-screen space-y-4 bg-custom-black text-custom-silver">
      {/* Header */}
      <div className="flex items-center gap-4">

        {/* page title */}
        <HyperText
          text={'Admin'}
          className="font-poppins-semibold text-[2.5rem] sm:text-[3rem]"
        />
      </div>

      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
        <h2 className="text-custom-silver/80">
          Penerimaan pendaftar ke dalam divisi akan dilakukan saat{" "}
          <span className="font-semibold text-custom-silver">Mubes.</span>
        </h2>
        <div className="relative flex w-full justify-between rounded-md bg-custom-gray-dark p-3 sm:max-w-xs">
          <h1>
            <span className="font-medium text-custom-lavender">Status</span>{" "}
            Pendaftar
          </h1>
          <NumberTicker
            value={100}
            className="font-bold text-custom-silver"
          />

          <BorderBeam />
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg bg-custom-gray-dark">
        <div className="px-6 py-4 text-lg font-semibold">
          Informasi Pendaftar
        </div>
          <DivisionTable />
      </div>
    </div>
  );
};

export default AdminDashboard;
