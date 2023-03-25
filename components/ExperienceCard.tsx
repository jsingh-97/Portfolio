import React from 'react'
import Image from 'next/image'
import oyopic from '../assets/paytm.jpg'
import javalogo from '../assets/javalogo.svg'
import springlogo from '../assets/springboot.png'
import redislogo from '../assets/redis.png'
import awslogo from '../assets/aws.png'
import { motion } from 'framer-motion'
type Props = {}

export default function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]
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
                <Image className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px]
            object-cover object-center'
                    src={oyopic}
                    alt='oyo image'
                />
            </motion.div>
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>SOFTWARE DEVELOPER</h4>
                <p className='font-bold text-2xl mt-1'>OYO</p>
                <div className='flex space-x-2 my-2'>
                    <Image className='h-14 w-14 rounded-full'
                        src={javalogo}
                        alt="" />
                    <Image className='h-14 w-14 rounded-full'
                        src={springlogo}
                        alt="" />
                    <Image className='h-14 w-14 rounded-full'
                        src={redislogo}
                        alt="" />
                    <Image className='h-14 w-14 rounded-full'
                        src={awslogo}
                        alt="" />
                </div>
                <p className='uppercase py-5 text-gray-300'>Started work...Ended</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Designed and implemented a scalable and robust microservice for the efficient
                        retrieval of information from multiple microservices, leveraging the power of Java
                        and the Spring Boot framework</li>
                    <li>Achieved a significant improvement in hotel page response time, reducing it by 40%</li>
                    <li>Contributed to the successful migration from a monolithic to a microservices
                        architecture, as a valued member of the team</li>
                </ul>
            </div>
        </article >
    )
}