import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "@/lib/type";
import { useEffect } from "react";

export function useSectionInView(sectionName: SectionName) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // Detect screen sizes
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const isTablet = typeof window !== "undefined" && window.innerWidth < 1024;

  // Adjust threshold & rootMargin for better delay
  const { ref, inView } = useInView({
    threshold: isMobile ? 0.35 : isTablet ? 0.5 : 0.65, // Delays activation by requiring more visibility
    rootMargin: isMobile ? "-120px 0px -120px 0px" : isTablet ? "-160px 0px -160px 0px" : "-180px 0px -180px 0px",
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}
