"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function MyApproach() {
  const { ref } = useSectionInView("Approach", 0.5);

  return (
    <section ref={ref} id="my-approach" className="scroll-mt-28 mb-28">
      <SectionHeading>My Approach</SectionHeading>

      {/* Centered Grid Container */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        
        {/* Card 1 - Tailored Therapy */}
        <motion.div
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            Tailored Therapy for Children & Teens
          </h3>
          <p className="mb-4">
            Whether your child is dealing with <strong>anxiety, depression, trauma, social challenges, or stress</strong>, I create sessions that match their needs and interests.
          </p>
          <ul className="list-disc pl-6">
            <li><strong>Cognitive Behavioral Therapy (CBT)</strong> – Helps kids understand and change unhelpful thoughts.</li>
            <li><strong>Trauma-Focused CBT</strong> – A specialized approach for children and teens with trauma.</li>
            <li><strong>Acceptance & Commitment Therapy (ACT)</strong> – Focuses on embracing emotions.</li>
            <li><strong>Mindfulness Therapy</strong> – Teaches calming strategies.</li>
          </ul>
        </motion.div>

        {/* Card 2 - How Therapy Sessions Work */}
        <motion.div
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
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

        {/* Card 3 - Who I Work With */}
        <motion.div
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            Who I Work With
          </h3>
          <p className="mb-4">I specialize in helping kids and teens who experience:</p>
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

        {/* Card 4 - For Parents */}
        <motion.div
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
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

      {/* Closing Statement */}
      <motion.p
        className="text-lg font-semibold mt-8 text-gray-900 dark:text-white text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
      >
        Therapy isn’t just about managing struggles—it’s about <strong>helping kids and teens thrive.</strong>
      </motion.p>
    </section>
  );
}
