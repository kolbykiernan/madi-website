import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import Image from "next/image";
import design1 from "../public/bg-design-1-transparent.png"
import design2 from "../public/bg-design-2-transparent.png"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Madison Hearne | LCSW",
  description: "This is Madison Hearne's professional website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-[#eae6df] text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Top Right Design */}
        <Image 
          src={design1}
          alt="bg design in top right corner"
          width="120"
          height="120"
          className="hidden sm:block fixed top-2 right-2 sm:right-0 lg:w-[192px] lg:h-[192px] translate-x-1/4 -translate-y-1/4 z-[-1]"
          priority
        />
        
        {/* Bottom Left Design */}
        <Image 
          src={design2}
          alt="bg design in bottom left corner"
          width="180"
          height="180"
          className="hidden sm:block fixed bottom-4 left-6 sm:left-16 lg:w-[292px] lg:h-[292px] z-[-1]"
          style={{ transform: "rotate(-6deg)" }}      
        />

        {/* Abstract Shape 1 (Top Left) */}
        <div className="fixed top-[-2rem] left-[-2rem] w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] lg:w-[25rem] lg:h-[25rem] bg-[#d37b4f] dark:bg-[#A3522C] z-[-1]"
          style={{ borderRadius: "50% 40% 60% 30% / 30% 50% 40% 70%" }}>
        </div>

        {/* Abstract Shape 2 (Wavy Background) */}
        <div className="fixed top-[-5rem] left-[-2rem] w-[20rem] h-[15rem] sm:w-[30rem] sm:h-[20rem] lg:w-[45rem] lg:h-[35rem] bg-[#7EC4C9] dark:bg-[#4D8C8F] z-[-2]"
          style={{ borderRadius: "50% 40% 60% 30% / 30% 50% 40% 70%" }}>
        </div>

        <div className="fixed top-[-5rem] left-[-2rem] w-[21rem] h-[16rem] sm:w-[31rem] sm:h-[21rem] lg:w-[46rem] lg:h-[36rem] bg-[#8ccfd3] dark:bg-[#4D8C8F] z-[-3]"
          style={{ borderRadius: "50% 40% 60% 30% / 30% 50% 40% 70%" }}>
        </div>

        {/* Abstract Shape 3 (Bottom Right) */}
        <div className="fixed bottom-[-3rem] right-[-6rem] w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] lg:w-[30rem] lg:h-[30rem] bg-[#E4A73B] dark:bg-[#B97C2D] z-[-2]"
          style={{ borderRadius: "50% 40% 60% 30% / 30% 50% 40% 70%" }}>
        </div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
