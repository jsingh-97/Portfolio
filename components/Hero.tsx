import React from 'react'
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
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overdflow-hidden'>
        <BackgroundCircles/>
        <img className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.licdn.com/dms/image/D5603AQHP_ff4S_l7aA/profile-displayphoto-shrink_200_200
        /0/1673892850581?e=1684368000&v=beta&t=cnIHJVm5bLdfNMv4oY5Y_O-xBUywTewhypvc3XXTPPE"
        alt=''/>
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>
    </div>
  )
}