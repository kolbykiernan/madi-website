"use client";

import Image from 'next/image'

import Headshot from '../public/Headshot.jpeg'
import { motion } from "framer-motion";
import Link from 'next/link'
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';

import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    const { ref } = useSectionInView('Home', .5);
    const { 
        setActiveSection,
        setTimeOfLastClick,
    
    } = useActiveSectionContext();

  return (
    <section 
        ref={ref}
        id="home" 
        className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
        <div className="flex items-center justify-center ">
            <div className='relative'>
                <motion.div
                    initial={{ opacity: 0, scale: 0}}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{
                        type: "tween",
                        duration: .2,
                    }}
                >
                    <Image 
                        src={Headshot} alt="Kolby's professional headshot"
                        width="192"
                        height="192"
                        quality="100"
                        priority={true}
                        className='h-24 w-24 rounded-full object-cover border-[.35rem] border-white shadow-xl transform scale-110'
                    />
                </motion.div>
                <motion.span 
                    className='absolute bottom-0 right-0 text-4xl'
                    initial={{ opacity: 0, scale: 0}}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{
                        type: 'spring',
                        stiffness: 125,
                        delay: .1,
                        duration: .7,
                    }}
                >
                    👋
                </motion.span>
            </div>
        </div>
        <motion.h1
            className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
        >
            <span className="font-bold">Hello, I&apos;m Kolby Kiernan.</span> I&apos;m a {" "}
            <span className="font-bold">full-stack developer</span> with {" "}
            <span className="font-bold">2 years</span> of experience. I enjoy being part of a team that builds {" "}
            <span className="italic">innovative and meaningful apps.</span> I specialize in {" "}
            <span className="underline">JavaScript / TypeScript / React / React Native</span>.    
        </motion.h1>
        <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
            transition={{
                delay: .1
            }}
        >
            <Link 
                href="#contact"
                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                onClick={() => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                }}  
            >
                Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
            </Link>
            <a 
                className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                href="/Resume.pdf" download={true}
            >
                Download Resume <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
            </a>
            <a 
                className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://www.linkedin.com/in/kolby-kiernan" target="_blank"
            >
                <BsLinkedin />
            </a>
            <a 
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://github.com/kolbykiernan" target="_blank"
            >
                <FaGithubSquare />
            </a>
        </motion.div>

    </section>
  )
}
