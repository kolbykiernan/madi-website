"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from '@/components/submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView('Contact');
    

  return (
   <motion.section 
        ref={ref}
        id="contact" 
        className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center '
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1
        }}
        viewport={{
            once: true,
        }}
    >
    <SectionHeading>Contact Me</SectionHeading>
    <div className="mt-6 text-center text-lg text-gray-900 dark:text-white">
    <p>Please reach out to me directly to schedule an appointment or free consultation:</p>

    <div className="mt-3 text-xl font-medium">
        <a 
            href="mailto:madisonhearnetherapy@gmail.com" 
            className="hover:underline cursor-pointer"
        >
            madisonhearnetherapy@gmail.com
        </a> 
        <span className="mx-3 text-gray-500">|</span>
        <a 
            href="tel:+14244429183"
            className="hover:underline cursor-pointer"
        >
            (424) 442-9183
        </a>
    </div>

    <p className="mt-4 text-gray-700 dark:text-white/80">Or reach out via the contact form.</p>
</div>


    <form 
        className='mt-10 flex flex-col dark:text-black'
        action={async (formData) => {
            const { data, error } = await sendEmail(formData)

            if (error) {
                toast.error(error);
                return;
            }

            toast.success("Email sent successfully")
        }}
    >
        <input 
            className='h-14 px-4 rounded-lg border borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'  
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
        />
        <textarea 
            className='h-52 my-3 rounded-lg borderBlack p-4'
            name="message"
            placeholder='Your message'
            required
            maxLength={5000}
        />
        <SubmitBtn />
    </form>
   </motion.section>
  )
}
