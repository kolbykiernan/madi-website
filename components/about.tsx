"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0.2 1", "0.8 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.section 
      ref={sectionRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="text-xl font-serif italic tracking-wide leading-relaxed space-y-6">
        I have always been deeply interested in human connection and the ways people navigate their personal struggles.
        <br /><br />
        What attracted me to a career as a <span className="font-bold">Licensed Clinical Social Worker</span> is the opportunity to create a meaningful, supportive, and empowering space where individuals can heal, grow, and explore their full potential.
        <br /><br />
        I began my career at the <span className="font-bold">University of Kansas</span> with a <span className="font-bold">Bachelor’s in Social Work</span> and a <span className="font-bold">Minor in Behavioral Science</span>. I received my <span className="font-bold">Master’s Degree in Social Work</span> at <span className="font-bold">Wichita State University</span>.
        <br /><br />
        I have clinical experience working with youth in an <span className="font-bold">Intensive Outpatient</span> and <span className="font-bold">residential setting</span>. I also spent time working in a <span className="font-bold">Non-Public School</span> with children who have a high level of mental health needs.
        <br /><br />
        For the past <span className="font-bold">three years</span>, I have been providing <span className="font-bold">mental health therapy</span> for <span className="font-bold">children, teens, and families</span> at <span className="font-bold">Los Angeles Public Schools</span>.
      </p>
    </motion.section>
  );
}
