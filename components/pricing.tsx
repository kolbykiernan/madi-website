"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Pricing() {
    const { ref } = useSectionInView('Pricing', .5);
    const { theme } = useTheme();

    return (
        <section 
    id="pricing" 
    className="scroll-mt-28 mb-28 sm:mb-40 text-center" 
    ref={ref}
>
    <SectionHeading>Pricing Information</SectionHeading>
    
    {/* Centered Sentence */}
    <p className="text-xl text-gray-700 dark:text-white mt-6 mb-6">
        Telehealth Sessions Only – Virtual therapy from the comfort of your home.
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        {/* Individual Session */}
        <div className="bg-gray-100 dark:bg-[#946263] p-6 rounded-lg shadow-lg w-80 sm:w-80 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-3">$225</h3>
            <p className="text-lg text-gray-700 dark:text-white">Individual Session</p>
        </div>

        {/* Family Session */}
        <div className="bg-gray-100 dark:bg-[#676394] p-6 rounded-lg shadow-lg w-80 sm:w-80 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-3">$250</h3>
            <p className="text-lg text-gray-700 dark:text-white">Family Session</p>
        </div>
    </div>
</section>

    )
}
