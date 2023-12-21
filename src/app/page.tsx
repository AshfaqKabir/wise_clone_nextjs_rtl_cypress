import HeroSection from "../components/HeroSection/HeroSection";
import ProtectionSection from "../components/ProtectionSection/ProtectionSection";
import CountryListSection from "../components/CountryList/CountryListSection";

export default function Home() {
  return (
    <main>
      <div>
        <HeroSection />
        <ProtectionSection />
        <CountryListSection />
      </div>
    </main>
  );
}
