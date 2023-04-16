import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import prj from '../assets/oyo.png'
import { Project } from '../typings'
type Props = {
    projects: Project[]
}

export default function Projects({ projects }: Props) {
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
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
        max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>
            <div className='absolute top-[2%] w-full flex overflow-x-scroll overflow-y-hidden snap-x
            snap-mandatory z-20'>
                {projects.map((project, i) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                    items-center justify-center p-20 md:p-44 h-screen'>
                        {/* <Image className="w-40 h-40" src={prj} alt=''></Image> */}
                        <div className='space-y-7 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                {project.title}
                            </h4>
                            <p className='text-lg text-center md:text-left'>
                                {project.description}
                            </p>
                            <p className='text-lg text-center underline'><a href={project.url} >Visit Project</a></p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full absolute top-[20%] bg-[#F7AB0A]/10 left-0 h-[500px] 
            -skew-y-12'>
            </div>
        </motion.div >
    )
}