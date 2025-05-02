import PilihanWaktu from "./components/PilihanJam";
import WaktuPilihan from "./components/WaktuPilihan";


const Divisi = () => {
  return (
    <>
      <Title />
      <WaktuPilihan />
      <PilihanWaktu  />
    </>
  );
}

const Title = () => (
  <div className="mb-8">
    <h1 className="text-2xl font-semibold sm:text-4xl">Wawancara</h1>
    <p className={``}>
      Kamu hanya bisa memilih{" "}
      <span className={`font-semibold`}>Satu jadwal Himakom</span> dan{" "}
      <span className={`font-semibold`}>Satu jadwal OmahTI</span>
    </p>
  </div>
);

export default Divisi;