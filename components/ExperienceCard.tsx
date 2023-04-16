import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import Link from 'next/link'
type Props = {
    experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[500px]
        md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.div
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                    once: true
                }}
            >
                <Link href={experience.companyUrl}>
                    <Image className='w-36 h-36 rounded-full md:rounded-full xl:w-[100px] xl:h-[100px]
            object-cover object-center'
                        src={experience.companyImage}
                        width={320}
                        height={320}
                        alt=''
                    />
                </Link>

            </motion.div>
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>SOFTWARE DEVELOPER</h4>
                <p className='font-bold text-2xl mt-1'> <a href={experience.companyUrl}>{experience.companyName}</a></p>
                <div className='flex space-x-2 my-2'>
                    {experience.technologies.map((technology, idx) => (
                        <Image className='h-16 w-16 rounded-full' src={technology} alt="" width={320} height={320} />
                    ))}
                </div>
                <p className='uppercase py-5 text-gray-300'>{experience.dateStarted}-{experience.isCurrentlyWorkingHere ? "Present" : experience.dateEnded}</p>
                {experience.points.map((points, idx) => (
                    <ul className='list-disc space-y-4 ml-5 text-sm sm:text-base'>
                        <p className='mt-2'>{points.title}</p>
                        {points.point.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                ))}

            </div>
        </article >
    )
}