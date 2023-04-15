import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
type Props = {
    directionLeft?: boolean;
    skill: string
}

function Skill({ directionLeft, skill }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.div
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{
                    duration: 1
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
            >
                <Image
                    className='rounded-full border border-gray-500 object-cover w-36 h-36
                        xl:w-42 xl:h-42 filter group-hover:grayscale transition duration-300 ease-in-out'
                    src={skill}
                    width={620}
                    height={620}
                    alt=''
                >

                </Image>
            </motion.div>
        </div>
    )
}

export default Skill