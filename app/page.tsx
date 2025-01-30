
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Pricing from "@/components/pricing";
import Skills from "@/components/skills";

import Contact from "@/components/contact";
import Focus from "@/components/focus";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Focus />
      <Skills />
      <Pricing />
      <Contact />
    </main>
  );
}
