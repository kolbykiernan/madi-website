"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@/context/theme-context";

export default function Pricing() {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const { theme } = useTheme();

    return (
        <motion.section 
            id="pricing" 
            ref={ref}
            className="scroll-mt-28 mb-28 sm:mb-40 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-3xl mx-auto px-4">
                <SectionHeading>Pricing Information</SectionHeading>
                
                <motion.p
                    className="text-xl text-gray-700 dark:text-white mt-6 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                >
                    <strong>Telehealth Sessions Only</strong> – Virtual therapy from the comfort of your home.
                </motion.p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
                    <motion.div
                        className="bg-gray-100 dark:bg-[#946263] p-6 rounded-lg shadow-lg w-80 sm:w-80"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-2xl font-semibold mb-3">$200</h3>
                        <p className="text-lg text-gray-700 dark:text-white">Individual Session</p>
                    </motion.div>

                    <motion.div
                        className="bg-gray-100 dark:bg-[#676394] p-6 rounded-lg shadow-lg w-80 sm:w-80"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-2xl font-semibold mb-3">$225</h3>
                        <p className="text-lg text-gray-700 dark:text-white">Family Session</p>
                    </motion.div>
                </div>

                <motion.p
                    className="text-xl text-gray-700 dark:text-white mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                >
                    Payment is due at each appointment. Payment will be processed through SimplePractice HIPPA-compliant credit card system.
                </motion.p>

                <motion.p
                    className="text-xl text-gray-700 dark:text-white mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                >
                    Madi Hearne, LCSW is an out-of-network provider and does not accept insurance. However, I can provide a superbill that you can submit to your insurance provider for potential reimbursement.
                </motion.p>

                <motion.p
                    className="text-xl text-gray-700 dark:text-white mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                >
                    Appointments canceled or missed without <strong>24 hours notice</strong> will be charged 
                    the full rate, except in cases of emergency.
                </motion.p>
            </div>
        </motion.section>
    );
}
