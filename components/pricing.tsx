"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Pricing() {
    const { ref } = useSectionInView('Pricing', 0.5);
    const { theme } = useTheme();

    return (
        <section 
            id="pricing" 
            className="scroll-mt-28 mb-28 sm:mb-40 text-center" 
            ref={ref}
        >
            <div className="max-w-3xl mx-auto px-4">
                <SectionHeading>Pricing Information</SectionHeading>
                
                <p className="text-xl text-gray-700 dark:text-white mt-6 mb-6">
                    <strong>Telehealth Sessions Only</strong> – Virtual therapy from the comfort of your home.
                </p>

                <br />

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
                    
                    <div className="bg-gray-100 dark:bg-[#946263] p-6 rounded-lg shadow-lg w-80 sm:w-80 transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-3">$200</h3>
                        <p className="text-lg text-gray-700 dark:text-white">Individual Session</p>
                    </div>

                    <div className="bg-gray-100 dark:bg-[#676394] p-6 rounded-lg shadow-lg w-80 sm:w-80 transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-3">$225</h3>
                        <p className="text-lg text-gray-700 dark:text-white">Family Session</p>
                    </div>
                </div>

                <br />
                <br />

                <p className="text-xl text-gray-700 dark:text-white mt-6">
                    Payment is due at each appointment. Payment will be processed through SimplePractice HIPPA-compliant credit card system.
                </p>

                <br />

                <p className="text-xl text-gray-700 dark:text-white mt-4">
                    Madi Hearne, LCSW is an out-of-network provider and does not accept insurance. However, I can provide a superbill that you can submit to your insurance provider for potential reimbursement. 
                </p>

                <br />

                <p className="text-xl text-gray-700 dark:text-white mt-4">
                    Appointments canceled or missed without <strong>24 hours notice</strong> will be charged 
                    the full rate, except in cases of emergency.
                </p>
            </div>
        </section>
    );
}
