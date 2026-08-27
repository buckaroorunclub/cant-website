import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Slogan from "@/components/Slogan";
import PhotoInterrupt from "@/components/PhotoInterrupt";
import StarSection from "@/components/StarSection";
import StatementSequence from "@/components/StatementSequence";
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
        <StarSection />
        <StatementSequence />
        <ManifestoShirt />
        <FirstAccess />
      </main>
      <Footer />
    </>
  );
}
