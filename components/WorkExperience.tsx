import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

type Props = {
    experiences: Experience[]
}

export default function WorkExperience({ experiences }: Props) {
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
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
        max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Work Experience
            </h3>
            <div className=' absolute top-32 w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory
            scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {experiences.map(experience => (
                    <ExperienceCard key={experience.id} experience={experience}></ExperienceCard>
                ))}
            </div>
        </motion.div>
    )
}