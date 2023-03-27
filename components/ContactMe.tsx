import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
type Props = {}
type Inputs = {
    name: String,
    email: String,
    subject: String,
    message: String
}
export default function ContactMe({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:jaswindervirk.jv.js@gmail.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}.${formData.message}`;
    }
    return (
        <div className='relative h-screen flex flex-col text-center md:text-left md:flex-row 
        max-w-7xl px-10 justify-evenly items-center mx-auto'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact Me
            </h3>
            <div className='flex flex-col spacy-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have got just what you need.{" "}
                    <span className='underline decoration-[#F7AB0A]/50'>Lets Talk.</span>
                </h4>
                <div className='space-y-10 py-4'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>
                            +15147186488
                        </p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>
                            jaswindervik.jv.js@gmail.com
                        </p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>
                            Canada
                        </p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex flex-row space-x-2'>
                        <input {...register('name')} type="text" className="contactInput" placeholder='Name' />
                        <input {...register('email')} type="email" className="contactInput" placeholder='Email' />
                    </div>

                    <input {...register('subject')} type="text" className="contactInput" placeholder='Subject' />
                    <textarea {...register('message')} className="contactInput" placeholder='Message' />
                    <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold
                    text-lg
                     '>Submit</button>
                </form>
            </div>
        </div>
    )
}