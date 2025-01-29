"use client"

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';


export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section 
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: .175 }}
      id="about"
      ref={ref}
    >
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3'>
        Born and raised in <span className="font-medium">Anaheim, CA</span>, 
        I went to college at <span className="font-medium">San Diego State University</span>{" "}
        where I pursued <span className="font-medium">Army ROTC</span>{" "} and graduated with a <span className="font-medium">bachelor&apos;s</span> in{" "}
        <span className="font-medium">Economics</span>. I decided to pivot away from the military and worked in {" "}
        <span className="font-medium">Health/Wellness</span>, <span className="font-medium">Distribution</span>,
        and then <span className="font-medium">SaaS</span> and <span className="font-medium">Fintech</span>{" "}
        when I started to be immersed by <span className="font-medium">software</span>{" "} 
        that was making a difference for others. {" "}
        <span className="font-medium">This sparked my passion</span> in the world of programming,
        so I returned to <span className="font-medium">San Diego State</span> {" "}
        to learn how to become a proficient <span className="font-medium">full-stack software developer</span>.{" "}
        <span className="italic">My favorite part of programming</span>{" "} is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack is{" "}
        <span className="font-medium"> TypeScript, React, Graphql and Ruby. </span>
        I am also familiar with <span className="font-medium">Python, React Native, Next, Node.js</span>,{" "} 
        and many other languages, frameworks, and databases. 
        I am currently a full-time, contracted Software Engineer at {" "}
        <span className="font-medium italic hover:cursor-pointer bg-gradient-to-r from-purple-500 via-blue-900 via-blue-700 via-blue-400 to-cyan-300 bg-clip-text text-transparent relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:via-blue-900 after:via-blue-700 after:via-blue-400 after:to-cyan-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
          <a href="https://www.gethealthie.com/" target="_blank" rel="noopener noreferrer">
            Healthie
          </a>  
        </span>.
        </p>
        <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing beach volleyball 🏐,
        distance running 🏃, lifting weights 🏋️, golfing🏌️, tennis 🎾, snowboarding 🏂, cooking 🧑‍🍳, camping 🏕️, lake trips 🚤, playing guitar 🎸, singing 🎵, and listening to records 🎧. I am also a{" "}
        <span className="font-medium">Certified Specialist of Wine 🍷</span>, enjoy
        learning about{" "}
        <span className="font-medium">history 🗿, geography 🗺️, and general trivia 🧠,</span> and love spending time with my family 👨🏼👩🏼🐶.
        </p>
    </motion.section>
  )
}
