"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/lib/hooks";

export default function MyApproach() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: sectionInViewRef } = useSectionInView("Approach");

  const combinedRef = (el: HTMLElement | null) => {
    inViewRef(el);
    sectionInViewRef(el);
    sectionRef.current = el;
  };

  return (
    <motion.section
      ref={combinedRef}
      id="approach"
      className="scroll-mt-28 mb-28"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <SectionHeading>My Approach</SectionHeading>

      <motion.p
        className="text-lg font-semibold mt-8 text-gray-900 dark:text-white text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      >
        Therapy isn’t just about managing struggles—it’s about <strong>helping people thrive.</strong>
      </motion.p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">        
        <motion.div
          className="text-sm sm:text-base bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            Tailored Therapy for Children & Teens
          </h3>
          <p className="mb-4">
            Whether your child is dealing with <strong>anxiety, depression, trauma, social challenges, or stress</strong>, I create sessions that match their needs and interests. I utilize concepts from the following modalities:
          </p>
          <ul className="list-disc pl-6">
            <li><strong>Cognitive Behavioral Therapy (CBT)</strong> – Helps kids understand and change unhelpful thoughts.</li>
            <li><strong>Trauma-Focused CBT</strong> – A specialized approach for children and teens with trauma.</li>
            <li><strong>Acceptance & Commitment Therapy (ACT)</strong> – Focuses on embracing emotions.</li>
            <li><strong>Mindfulness Therapy</strong> – Teaches calming strategies.</li>
          </ul>
        </motion.div>

        <motion.div
          className="text-sm sm:text-base bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            How Therapy Sessions Work
          </h3>
          <p className="mb-4">
            Therapy should be something kids <strong>look forward to</strong>—not just something they have to do.
          </p>
          <ul className="list-disc pl-6">
            <li><strong>Creative & Fun Activities:</strong> Art, games, and role-playing to make therapy engaging.</li>
            <li><strong>Relevant & Real Conversations:</strong> Therapy isn&apos;t just talking—it’s applying what we learn.</li>
            <li><strong>Support for Big Feelings:</strong> Helping with stress, social anxiety, and family changes.</li>
          </ul>
        </motion.div>

        <motion.div
          className="text-sm sm:text-base bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            Who I Work With
          </h3>
          <p className="mb-4">I specialize in helping kids, teens, and young adults who experience:</p>
          <ul className="list-disc pl-6">
            <li>Anxiety or worry</li>
            <li>Depression or sadness</li>
            <li>Social challenges (bullying, making friends, etc.)</li>
            <li>Managing big emotions (anger, frustration, impulsivity)</li>
            <li>Family changes (divorce, moving, etc.)</li>
            <li>Low self-esteem or confidence</li>
            <li>Behavioral struggles</li>
            <li>Past trauma or difficult experiences</li>
          </ul>
        </motion.div>

        <motion.div
          className="text-sm sm:text-base bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            For Parents: What You Can Expect
          </h3>
          <p className="mb-4">
            As a parent, you’re part of your child’s support team. I provide updates on progress and offer guidance on how to reinforce therapy strategies at home.
          </p>
          <p>Need extra support? I also offer <strong>parent sessions</strong> to help you navigate your child’s growth.</p>
        </motion.div>
      </div>

    </motion.section>
  );
}
