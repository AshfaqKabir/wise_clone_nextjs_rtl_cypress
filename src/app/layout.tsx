import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import { inter, worldWiseSans, wiseSans } from "../fonts";

// app/layout.tsx
import { Providers } from "./providers";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Wise Clone",
  description: "This is a Wise Clone build by Ashfaq",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <Navbar shouldHideOnScroll>
          <NavbarBrand>
            {/* <AcmeLogo /> */}
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
          <NavbarContent
            className="hidden sm:flex gap-4"
            justify="center"
          ></NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        {/* <h1 className={`${wiseSans.className} text-5xl`}>Hello!!!!</h1>
        <h1 className={`${worldWiseSans.className} text-5xl`}>Hello!!!!</h1> */}
        <Providers>{children}</Providers>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
