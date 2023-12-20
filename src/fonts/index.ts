import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const wiseSans = localFont({
  src: "./WiseSans-Heavy.woff2",
  display: "swap",
});

const worldWiseSans = localFont({
  src: "./WorldwiseSans-Heavy.woff2",
  display: "swap",
});

export { inter, wiseSans, worldWiseSans };
