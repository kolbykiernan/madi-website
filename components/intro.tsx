"use client";

import Image from 'next/image'

import Headshot from '../public/Headshot.jpeg'
import { motion } from "framer-motion";
import Link from 'next/link'
import { BsArrowDown } from "react-icons/bs";

import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    const { ref } = useSectionInView('Home');
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
                        src={Headshot} 
                        alt="Madi's professional headshot"
                        width="192"
                        height="192"
                        quality="100"
                        priority={true}
                        className='h-48 w-48 rounded-full object-cover object-[50%_20%] border-[.35rem] border-white shadow-xl transform scale-110'
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
        <br/>
        <motion.h1
            className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
        >
            <div className="text-3xl sm:text-5xl font-serif italic text-center">
                Madison Hearne, LCSW
            </div>
            <br />
            <div className="text-lg sm:text-3xl font-serif italic text-center">
                Providing services for children, teens, and families in California
            </div>
        </motion.h1>
        <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
            transition={{
                delay: .1
            }}
        >
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <Link 
                href="#contact"
                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                onClick={() => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                }}
            >
                Contact me here <BsArrowDown className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>
            
        </div>
        </motion.div>

    </section>
  )
}
