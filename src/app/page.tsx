import HeroSection from "../components/HeroSection/HeroSection";
import ProtectionSection from "../components/ProtectionSection/ProtectionSection";
import CountryListSection from "../components/CountryList/CountryListSection";
import OurMission from "../components/OurMission/OurMission";

export default function Home() {
  return (
    <main>
      <div>
        <HeroSection />
        <ProtectionSection />
        <OurMission />
        <CountryListSection />
      </div>
    </main>
  );
}
