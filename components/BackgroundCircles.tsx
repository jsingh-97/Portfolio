import React from 'react'
import {motion} from "framer-motion"
type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div initial={{
        opacity:0
    }}
    animate={{
        scale:1,
        opacity:[0.1,0.2,0.5,1.0],
        borderRadius:["20%","50%"]
    }}
    transition={{
        duration:2
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-gray-500 rounded-full h-[200px] w-[200px] mt-32 
        animate-ping'></div>
        {/* <div className='border border-gray-500 rounded-full h-[300px] w-[300px] absolute mt-52'></div>
        <div className='border border-gray-500 rounded-full h-[500px] w-[500px] absolute mt-52'></div> 
        <div className='border rounded-full border-[#F7AB0A] opacity-20 h-[650px] w-[650px] absolute 
        mt-52 animate-pulse'></div>
        <div className='border rounded-full border-[#F7AB0A] opacity-20 h-[800px] w-[800px] absolute 
        mt-52'></div> */}
    </motion.div>
  )
}