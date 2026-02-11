import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionOne from "@/components/SectionOne";
import SectionWhyJoin from "@/components/SectionWhyJoin";
import SectionWhySchools from "@/components/SectionWhySchools";
import SectionWhyStudents from "@/components/SectionWhyStudents";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SectionOne />

      {/* New Sections Test */}
      
      <SectionWhyJoin />
      <SectionWhySchools />
      <SectionWhyStudents />
    </>
  );
}
