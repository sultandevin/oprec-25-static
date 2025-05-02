"use client";
import React, { useState } from "react";
import JadwalWawancara from "./JadwalWawancara";
import Popup from "./Popup";

interface PilihanWaktuProps {
  variant?: string;
  onSelect?: () => void;
}

interface ScheduleSlot {
  id: string;
  sesi: Date;
  himakom: boolean;
  sessionId: string;
}

const PilihanWaktuCard = ({ variant = "omahti" }: PilihanWaktuProps) => {
  const [selectedSlot, setSelectedSlot] = useState<ScheduleSlot | null>(null);
  const [popupType, setPopupType] = useState<
    "gagal" | "berhasil" | "konfirmasi"
  >("gagal");
  // Dummy value for pilihanDivisi - set to 'frontend' to make component work
  const [pilihanDivisi, setPilihanDivisi] = useState("frontend");

  const handleSlotSelect = (
    id: string,
    sesi: Date,
    himakom: boolean,
    sessionId: string,
  ) => {
    setSelectedSlot({ id, sesi, himakom, sessionId });
    console.log(selectedSlot);
    setPopupType("konfirmasi");
  };

  // Determine if the popup should be clickable
  const isPopupClickable = selectedSlot !== null;

  return (
    <div className="flex w-full flex-col items-center rounded-xl bg-custom-gray-dark p-2 sm:p-4">
      <div className="mb-2 flex w-full items-center justify-between sm:mb-4">
        {/* OMAHTI OR HIMAKOM */}
        <div
          className={`rounded-md bg-custom-black p-2 text-sm sm:text-base ${variant === "himakom" ? `text-custom-blue` : `text-custom-orange`}`}
        >
          {variant === "himakom" ? `Himakom` : `OmahTI`}
        </div>

        {/* Apply pointer-events based on selectedSlot */}
        <Popup
          disabled={!selectedSlot}
          type={popupType}
          selectedSlot={selectedSlot}
        />
      </div>

      {/* Pass selectedSlot and handleSlotSelect to JadwalWawancara */}
      <JadwalWawancara
        variant={variant === "himakom" ? "himakom" : "omahti"}
        disabled={false}
        slugWawancara="frontend"
        pilihanDivisi={pilihanDivisi}
        selectedSlot={selectedSlot}
        onSlotSelect={handleSlotSelect}
      />
    </div>
  );
};

export default PilihanWaktuCard;
