import HeroSection from "@/components/home-page/HeroSection";
import Services from "@/components/home-page/Services";
import WhoWeAre from "@/components/home-page/WhoWeAre";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroSection/>
      <WhoWeAre/>
      <Services/>
    </main>
  );
}
