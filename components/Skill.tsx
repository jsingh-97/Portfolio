import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import github from '../assets/github.png'
type Props = {
    directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {
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
                    className='rounded-full border border-gray-500 object-cover w-28 h-28
                        xl:w-36 xl:h-36 filter group-hover:grayscale transition duration-300 ease-in-out'
                    src={github}
                    alt=''
                >

                </Image>
            </motion.div>
        </div>
    )
}

export default Skill