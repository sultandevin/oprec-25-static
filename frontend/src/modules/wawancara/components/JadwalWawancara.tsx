// next and react modules
import React from "react";

// fetch
interface ScheduleSlot {
  id: string; // ID of the tanggal item
  sesi: Date; // Date object of the session's jam time
  himakom: boolean;
  sessionId: string;
}

type DivisionType =
  | "backend"
  | "frontend"
  | "uiux"
  | "dsai"
  | "cp"
  | "mobapps"
  | "gamedev"
  | "cysec"
  | "ipc"
  | "media"
  | "pr"
  | "hr"
  | "snf"
  | "secretary"
  | "skilldev"
  | "treasurer";

interface JadwalWawancaraProps {
  variant: "himakom" | "omahti";
  disabled?: boolean;
  slugWawancara?: string;
  pilihanDivisi?: any;
  wawancara?: {
    himakom: boolean;
    _id: string; // ID for the tanggal item
    tanggal: Date;
    sesi: {
      jam: Date;
      dipilihOleh: string[];
      slotDivisi: {
        backend: { sisaSlot: number; lokasi: string };
        frontend: { sisaSlot: number; lokasi: string };
        uiux: { sisaSlot: number; lokasi: string };
        dsai: { sisaSlot: number; lokasi: string };
        cp: { sisaSlot: number; lokasi: string };
        mobapps: { sisaSlot: number; lokasi: string };
        gamedev: { sisaSlot: number; lokasi: string };
        cysec: { sisaSlot: number; lokasi: string };
        ipc: { sisaSlot: number; lokasi: string };
        media: { sisaSlot: number; lokasi: string };
        pr: { sisaSlot: number; lokasi: string };
        snf: { sisaSlot: number; lokasi: string };
        secretary: { sisaSlot: number; lokasi: string };
        skilldev: { sisaSlot: number; lokasi: string };
        treasurer: { sisaSlot: number; lokasi: string };
        hr: { sisaSlot: number; lokasi: string };
        _id: string;
      };
      _id: string;
    }[];
  }[];
  selectedSlot: ScheduleSlot | null;
  onSlotSelect: (
    id: string,
    sesi: Date,
    himakom: boolean,
    sessionId: string,
  ) => void;
}

const JadwalWawancara: React.FC<JadwalWawancaraProps> = ({
  variant,
  disabled = false,
  slugWawancara = "frontend",
  pilihanDivisi = true,
  selectedSlot,
  onSlotSelect,
}) => {
  // Dummy data for the wawancara sessions
  const dummyWawancara = Array.from({ length: 5 }).map((_, index) => {
    const tanggalDate = new Date(2023, 7, 15 + index);
    return {
      himakom: variant === "himakom",
      _id: `tanggal_${index}`,
      tanggal: tanggalDate,
      sesi: Array.from({ length: 4 }).map((_, sesiIndex) => {
        const jamDate = new Date(tanggalDate);
        jamDate.setHours(9 + sesiIndex, 0, 0);
        return {
          jam: jamDate,
          dipilihOleh: [],
          slotDivisi: {
            backend: {
              sisaSlot: Math.floor(Math.random() * 5),
              lokasi: "Ruang Backend",
            },
            frontend: {
              sisaSlot: Math.floor(Math.random() * 5),
              lokasi: "Ruang Frontend",
            },
            uiux: {
              sisaSlot: Math.floor(Math.random() * 5),
              lokasi: "Ruang UI/UX",
            },
            dsai: {
              sisaSlot: Math.floor(Math.random() * 5),
              lokasi: "Ruang DSAI",
            },
            cp: { sisaSlot: Math.floor(Math.random() * 5), lokasi: "Ruang CP" },
            mobapps: {
              sisaSlot: Math.floor(Math.random() * 5),
              lokasi: "Ruang Mobile Apps",
            },
            gamedev: {
              sisaSlot: Math.floor(Math.random() * 5),
              lokasi: "Ruang Game Dev",
            },
            cysec: {
              sisaSlot: Math.floor(Math.random() * 5),
              lokasi: "Ruang Cyber Security",
            },
            ipc: {
              sisaSlot: Math.floor(Math.random() * 5),
              lokasi: "Ruang IPC",
            },
            media: {
              sisaSlot: Math.floor(Math.random() * 5),
              lokasi: "Ruang Media",
            },
            pr: { sisaSlot: Math.floor(Math.random() * 5), lokasi: "Ruang PR" },
            snf: {
              sisaSlot: Math.floor(Math.random() * 5),
              lokasi: "Ruang SnF",
            },
            secretary: {
              sisaSlot: Math.floor(Math.random() * 5),
              lokasi: "Ruang Secretary",
            },
            skilldev: {
              sisaSlot: Math.floor(Math.random() * 5),
              lokasi: "Ruang SkillDev",
            },
            treasurer: {
              sisaSlot: Math.floor(Math.random() * 5),
              lokasi: "Ruang Treasurer",
            },
            hr: { sisaSlot: Math.floor(Math.random() * 5), lokasi: "Ruang HR" },
            _id: `slotDivisi_${index}_${sesiIndex}`,
          },
          _id: `sesi_${index}_${sesiIndex}`,
        };
      }),
    };
  });

  return (
    <div className="relative h-auto w-full rounded-md bg-custom-silver p-4">
      <div className="grid grid-cols-1 gap-4 overflow-x-auto xxs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {dummyWawancara.map((item, i) => {
          const tanggalDate = item.tanggal;

          if (isNaN(tanggalDate.getTime())) {
            console.error("Invalid date");
            return null;
          }

          const day = tanggalDate.toLocaleDateString("id-ID", {
            weekday: "long",
          });
          const date = tanggalDate.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "short",
          });

          return (
            <div key={i} className={`${disabled && "opacity-80"}`}>
              <h3
                className={`mb-2 text-center text-base font-semibold ${variant === "himakom" ? "text-custom-blue" : "text-custom-orange"}`}
              >
                {day}
              </h3>
              <h3
                className={`mb-2 text-center text-xl font-semibold ${variant === "himakom" ? "text-custom-blue" : "text-custom-orange"}`}
              >
                {date}
              </h3>
              {item.sesi.map((session, i) => {
                const jamDate = session.jam;
                if (isNaN(jamDate.getTime())) {
                  console.error("Invalid time");
                  return null;
                }

                const timeString = jamDate.toLocaleTimeString("id-ID", {
                  hour: "2-digit",
                  minute: "2-digit",
                });

                return (
                  <div key={i}>
                    {session.slotDivisi[slugWawancara as DivisionType]
                      ?.sisaSlot > 0 ? (
                      <button
                        onClick={() =>
                          onSlotSelect(
                            item._id,
                            jamDate,
                            item.himakom,
                            session._id,
                          )
                        }
                        className={`mb-2 w-full rounded py-2 ${
                          selectedSlot?.sessionId === session._id &&
                          selectedSlot?.sesi.getTime() === jamDate.getTime()
                            ? variant === "himakom"
                              ? "bg-custom-blue text-custom-silver"
                              : `bg-custom-orange text-custom-silver hover:bg-custom-orange/80 ${
                                  disabled
                                    ? "opacity-80"
                                    : "hover:bg-custom-orange"
                                }`
                            : "bg-custom-gray-light text-custom-black transition-colors hover:bg-custom-gray-light/80"
                        } ${disabled ? "cursor-not-allowed bg-gray-400 opacity-60" : ""}`}
                        disabled={disabled}
                      >
                        {timeString}
                      </button>
                    ) : (
                      <button
                        key={session._id}
                        onClick={() =>
                          onSlotSelect(
                            item._id,
                            jamDate,
                            item.himakom,
                            session._id,
                          )
                        }
                        disabled={true}
                        className={`mb-2 w-full rounded py-2 ${
                          selectedSlot?.sessionId === session._id &&
                          selectedSlot?.sesi.getTime() === jamDate.getTime()
                            ? variant === "himakom"
                              ? "cursor-not-allowed bg-custom-blue text-custom-silver opacity-60"
                              : "cursor-not-allowed bg-custom-orange text-custom-silver opacity-60"
                            : "cursor-not-allowed bg-custom-red text-custom-black opacity-60"
                        }`}
                      >
                        {timeString}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* overlay if user hasn't picked a division */}
      {!pilihanDivisi && (
        <div className="absolute inset-0 grid place-items-center bg-custom-black/80 p-4 backdrop-blur-sm transition-all">
          <h1
            className={`text-center text-custom-silver transition-opacity duration-300`}
          >
            Isi divisi pilihanmu sebelum memilih jadwal wawancara.
          </h1>
        </div>
      )}
    </div>
  );
};

export default JadwalWawancara;
