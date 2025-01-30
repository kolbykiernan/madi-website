"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function Focus() {
    const { ref } = useSectionInView('Focus', 0.5);

    return (
        <section 
            ref={ref}
            id="focus" 
            className='scroll-mt-28 mb-28'
        >
            <SectionHeading>My Focus</SectionHeading>
            
            {/* Card Container */}
            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 mt-8">
                
                {/* Card 1 */}
                <motion.div 
                    className="bg-[#f3e8ff] dark:bg-[#676394] shadow-lg rounded-lg p-6 text-center max-w-sm border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center h-48"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <h3 className="text-lg font-semibold mb-2">Passion for Helping</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        I have a passion for working with children, teens, and families.
                    </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                    className="bg-[#e0f2fe] dark:bg-[#946263] shadow-lg rounded-lg p-6 text-center max-w-sm border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center h-48"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <h3 className="text-lg font-semibold mb-2">Building Strong Connections</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        As a young therapist, I am able to build a strong rapport with clients and help support them with a variety of needs.
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div 
                    className="bg-[#fef9c3] dark:bg-[#676394] shadow-lg rounded-lg p-6 text-center max-w-sm border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center h-48"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <h3 className="text-lg font-semibold mb-2">Experience & Expertise</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        I have experience working with anxiety, depression, trauma, stress management, and other issues that children and teens might experience.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
