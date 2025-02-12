
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Pricing from "@/components/pricing";
import MyApproach from "@/components/approach";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <MyApproach />
      <About />
      <Pricing />
      <Contact />
    </main>
  );
}
