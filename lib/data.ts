import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import The_Nest from "@/public/The_Nest.png";
import Aora from "@/public/Aora.png";
import Rest_Rant from "@/public/Rest-Rant.png";
import Guitar_Guru from "@/public/Guitar_Guru.png";
import My_Portfolio from "@/public/My_Portfolio.png";
import Todo_List from "@/public/Todo_List.png";
import { StaticImageData } from "next/image";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Focus",
    hash: "#focus",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Pricing",
    hash: "#pricing",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData = [
 "Active Listening",
"Empathy & Compassion",
"Rapport Building",
"Crisis Intervention",
"Psychoeducation",
"Trauma-Informed Care",
"Strength-Based Approach",
"Mindfulness & Emotional Regulation",
"Cultural Competency",
"Cognitive Behavioral Therapy (CBT)",
"Dialectical Behavior Therapy (DBT)",
"Acceptance and Commitment Therapy (ACT)",
"Trauma-Focused CBT (TF-CBT)",
"Play Therapy",
"Family Systems Therapy",
"Person-Centered Therapy",
"Motivational Interviewing (MI)",
"Mindfulness-Based Stress Reduction (MBSR)",
"Solution-Focused Brief Therapy (SFBT)",
"Coping Skills Training",
"Anxiety & Mood Disorders",
"PTSD & Trauma Work",
"Grief & Loss Counseling",
"LGBTQ+ Affirming Therapy",
"Life Transitions & Adjustment Issues",
] as const;