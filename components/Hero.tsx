import React from 'react'
import Image from 'next/image'
import mypic from '../assets/mypic.jpg'

import { Cursor,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
type Props = {}

export default function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words:["Hi, The name is Jaswinder Singh","I love writing code","I am java developer" ],
        loop:true,
        delaySpeed:2000
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <Image className='relative rounded-full h-32 w-32 mx-auto object-cover'
              src={mypic}
              width={400}
              height={400}
              alt=""
            />
        <div>
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>
        </div>
    </div>
  )
}