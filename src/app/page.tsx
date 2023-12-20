import CountryListSection from "../components/CountryList/CountryListSection";
import HeroSection from "../components/HeroSection/HeroSection";

export default function Home() {
  return (
    <main>
      <div>
        <HeroSection />
        <CountryListSection />
      </div>
    </main>
  );
}
