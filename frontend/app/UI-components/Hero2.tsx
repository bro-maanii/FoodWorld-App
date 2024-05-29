import Image from 'next/image'
import React from 'react'
import heroImage from '@/public/hero-img.png'
import { Button } from '@/components/ui/button'

export default function Hero2() {
  return (
    <div className='flex justify-stretch align-middle items-center'>
        {/* left side */}
        <div className='w-1/2 '>
            <div className='flex flex-col justify-center align-middle items-center'>
            <h1 className='text-5xl sm:text-7xl md:text-8xl  first-letter:text-white font-bold'>Food</h1>
            <h1 className='text-5xl sm:text-7xl md:text-8xl first-letter:text-white font-bold'>Is</h1>
            <h1 className='text-5xl sm:text-7xl md:text-8xl first-letter:text-white font-bold'>Life</h1>
            </div>
            <div className='flex justify-around'>
                <Button className='mt-5 text-lg hover:italic hover:bg-blue-600 bg-blue-500  text-black' >Order Now</Button>
                <Button className='mt-5 text-lg hover:italic hover:bg-blue-600 bg-blue-500 text-black' >Book Now</Button>
            </div>
        </div>
        {/* right side */}
        <div className='w-1/2 '>
            <Image alt='hero' className="object-cover object-center h-auto w-auto "
            width={460}
            height={400}
            src={heroImage} />
        </div>
    </div>
  )
}
