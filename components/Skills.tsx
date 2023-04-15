import React from 'react'
import { motion } from 'framer-motion'
import Skill from '../components/Skill'
type Props = {
    skills: string[]
}

export default function Skills({ skills }: Props) {
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
            className='flex relative flex-col text-center md:text-left
            xl:flex-row max-w=[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0
            mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Skills
            </h3>
            {/* <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
                Hover over a skill for current proficiency
            </h3> */}
            <div className='absolute top-48 grid grid-cols-4 gap-5'>
                {skills.map((skill, idx) => (
                    <Skill skill={skill} />
                )
                )}
            </div>
        </motion.div>
    )
}