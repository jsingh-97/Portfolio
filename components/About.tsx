import React from 'react';
import Image from 'next/image';
import mypic from '../assets/pic2.jpg';
import { motion } from 'framer-motion';
type Props = {};

export default function About({ }: Props) {

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 2.5
      }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row 
      max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.5
        }}
        viewport={{
          once: true
        }}
      // className="md:px-2 xl:pd-15"
      ><Image src={mypic} alt="Image" className='-mb-20 md:mb-0 flex-shrink-0 my-10 w-56 h-56 rounded-full
        object-cover md:rounded-lg md:w-[400] md:h-[500px] xl:w-[1200px] xl:h-[500px]' />
      </motion.div>
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
        <p className='text-base'>As a highly motivated and results-driven software developer,
          I possess extensive experience working with various backend technologies. My proven ability
          to deliver exceptional results has enabled me to contribute to the growth and expansion of both
          startup and enterprise-level organizations. With over five years of experience in the field,
          I have developed a deep understanding of best practices and methodologies, ensuring that my
          solutions are both efficient and effective. Additionally, I have gained exposure to front-end
          technologies, allowing me to offer a more comprehensive range of skills and expertise to any
          project.
        </p>
      </div>
    </motion.div>
  );
}
