"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@/context/theme-context";
import { useSectionInView } from "@/lib/hooks";

export default function Pricing() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const { ref: inViewRef, inView } = useInView({
      threshold: 0.3,
      triggerOnce: true,
    });
    const { ref: sectionInViewRef } = useSectionInView("Pricing");
  
    const combinedRef = (el: HTMLElement | null) => {
      inViewRef(el);
      sectionInViewRef(el);
      sectionRef.current = el;
    };
  
    return (
      <motion.section
        ref={combinedRef}
        id="pricing" 
        className="scroll-mt-28 mb-20 sm:mb-28 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading>Pricing Information</SectionHeading>

          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-800 dark:text-white mt-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <strong>Telehealth Sessions Only</strong> – Virtual therapy from the comfort of your home.
          </motion.p>

          <br />

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
            <motion.div
              className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg w-72 sm:w-80"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg sm:text-2xl font-semibold mb-3">$200</h3>
              <p className="text-sm sm:text-lg text-gray-700 dark:text-white">Individual Session</p>
            </motion.div>

            <motion.div
              className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg w-72 sm:w-80"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg sm:text-2xl font-semibold mb-3">$200</h3>
              <p className="text-sm sm:text-lg text-gray-700 dark:text-white">Family Session</p>
            </motion.div>
          </div>

          <br />
          <br />

          <motion.p
            className="text-base sm:text-lg lg:text-xl dark:text-white mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Payment is due at each appointment. Payment will be processed through SimplePractice HIPAA-compliant credit card system.
          </motion.p>

          <br />

          <motion.p
            className="text-base sm:text-lg lg:text-xl dark:text-white mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            Madison Hearne, LCSW is an out-of-network provider and does not accept insurance. However, I can provide a superbill that you can submit to your insurance provider for potential reimbursement.
          </motion.p>

          <br />

          <motion.p
            className="text-base sm:text-lg lg:text-xl dark:text-white mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            Appointments canceled or missed without <strong>24 hours notice</strong> will be charged the full rate, except in cases of emergency.
          </motion.p>
        </div>
      </motion.section>
    );
}
