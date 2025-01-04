"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from '@/lib/data';
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
    const { ref } = useSectionInView('Experience', .5);
    const { theme } = useTheme();

    return (
        <section 
            id="experience" 
            className="scroll-mt-28 mb-28 sm:mb-40" 
            ref={ref}
        >
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor="">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            visible={true}
                            contentStyle={{
                                background: theme === 'light' ?  "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                                transition: "background-color 0.3s ease-in-out",
                            }}
                            contentArrowStyle={{
                                borderRight: theme === 'light' 
                                    ? ".4rem solid #9ca3af"
                                    : ".4rem solid rgba(255, 255, 255, 0.5)",
                            }}
                            iconStyle={{
                                background: theme === 'light' 
                                    ? "white"
                                    : "rgba(255, 255, 255, 0.15)",
                                fontSize: "1.5rem",
                            }}
                            icon={item.icon}
                        >
                            <div
                                onClick={() => item.url && window.open(item.url, "_blank")}
                                onMouseEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                                    if (item.url) {
                                        e.currentTarget.style.backgroundColor = theme === 'light' 
                                            ? "#e5e7eb" 
                                            : "rgba(255, 255, 255, 0.1)";
                                    }
                                }}
                                onMouseLeave={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                                    e.currentTarget.style.backgroundColor = theme === 'light' 
                                        ? "#f3f4f6" 
                                        : "rgba(255, 255, 255, 0.05)";
                                }}
                                style={{
                                    cursor: item.url ? 'pointer' : 'default',
                                    padding: "1.3rem 2rem",
                                    background: theme === 'light' ?  "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                                    borderRadius: "4px",
                                    transition: "background-color 0.3s ease-in-out"
                                }}
                            >
                                <h3 className='font-semibold capitalize'>{item.title}</h3>
                                <p className='font-normal !mt-0'>{item.location}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 !mt-1">{item.date}</p>
                                <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>{item.description}</p>
                            </div>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    )
}
