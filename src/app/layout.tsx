import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev E-Commerce Application",
  description: "A complete e-commerce application with Next.js and Wix",
};
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className=" ">
      <body className={`overflow-x-hidden ${poppins.className} `}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
