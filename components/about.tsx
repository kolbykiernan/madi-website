"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: sectionInViewRef } = useSectionInView("About");

  const combinedRef = (el: HTMLElement | null) => {
    inViewRef(el);
    sectionInViewRef(el);
    sectionRef.current = el;
  };

  return (
    <motion.section
      ref={combinedRef}
      className="mb-20 sm:mb-28 max-w-[45rem] text-center leading-7 sm:leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="text-base sm:text-lg lg:text-xl font-serif italic tracking-wide leading-relaxed space-y-4 sm:space-y-6">
        I have always been deeply interested in human connection and the ways people navigate their personal struggles.
        <br /><br />
        What attracted me to a career as a <span className="font-bold">Licensed Clinical Social Worker</span> is the opportunity to create a meaningful, supportive, and empowering space where individuals can heal, grow, and explore their full potential.
        <br /><br />
        I began my career at the <span className="font-bold">University of Kansas</span> with a <span className="font-bold">Bachelor’s in Social Work</span> and a <span className="font-bold">Minor in Behavioral Science</span>. I received my <span className="font-bold">Master’s Degree in Social Work</span> at <span className="font-bold">Wichita State University</span>.
        <br /><br />
        I have clinical experience working with youth in an <span className="font-bold">Intensive Outpatient</span> and <span className="font-bold">residential setting</span>. I also spent time working in an <span className="font-bold">Alternative School</span> with children who have a high level of mental health needs.
        <br /><br />
        For the past <span className="font-bold">three years</span>, I have been providing <span className="font-bold">mental health therapy</span> for <span className="font-bold">children, teens, and families</span> at <span className="font-bold">Los Angeles Public Schools</span>.
      </p>
    </motion.section>
  );
}
