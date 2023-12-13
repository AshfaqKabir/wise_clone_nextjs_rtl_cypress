import { Button } from "@nextui-org/button";
import CountryListSection from "../components/CountryList/CountryListSection";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <div>
        <h2>Hello</h2>
        <Button>Click me</Button>
        <CountryListSection />
      </div>
    </main>
  );
}
