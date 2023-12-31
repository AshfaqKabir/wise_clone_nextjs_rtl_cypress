import HeroSection from "../components/HeroSection/HeroSection";
import ProtectionSection from "../components/ProtectionSection/ProtectionSection";
import OurMission from "../components/OurMission/OurMission";
import SecuritySeciton from "../components/SecuritySection/SecuritySection";
import CountryListSection from "../components/CountryList/CountryListSection";

export default function Home() {
  return (
    <main>
      <div>
        <HeroSection />
        <ProtectionSection />
        <OurMission />
        <SecuritySeciton />
        <CountryListSection />
      </div>
    </main>
  );
}
