import Image from "next/image";

// app/page.tsx
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <main >
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <div>
        <h2>Hello</h2>
        <Button>Click me</Button>
      </div>
    </main>
  );
}
