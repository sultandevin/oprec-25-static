import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Beranda from "@/modules/beranda";
import "./globals.css";

export default async function Home() {

    return (
      <>
        <Navbar />
        <Beranda />
        <Footer />
      </>
    );
}