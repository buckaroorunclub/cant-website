import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Slogan from "@/components/Slogan";
import PhotoInterrupt from "@/components/PhotoInterrupt";
import Transition from "@/components/Transition";
import StarSection from "@/components/StarSection";
import ManifestoShirt from "@/components/ManifestoShirt";
import FirstAccess from "@/components/FirstAccess";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Manifesto />
        <Slogan />
        <PhotoInterrupt />
        <Transition />
        <StarSection />
        <ManifestoShirt />
        <FirstAccess />
      </main>
      <Footer />
    </>
  );
}
