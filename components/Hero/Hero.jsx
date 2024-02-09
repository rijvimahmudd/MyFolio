import React from 'react'
import { Button } from '@/components/ui/button'
import HeroImage from './HeroImage'
import Link from 'next/link'
import { EyeOpenIcon, PaperPlaneIcon } from '@radix-ui/react-icons'
import SocialIcons from '../SocialIcons'

const Hero = () => {
  return (
<div className='w-full md:min-h-[82vh] px-8 flex flex-col gap-8 pt-5 md:pt-0 select-none md:flex-row-reverse md:px-24 items-center justify-between'>
        <HeroImage/>
          <div className='flex gap-5 md:gap-6 flex-col basis-1/2'>
            <div className='h-fit'>
              <h1 className='text-xl md:text-2xl font-mono text-slate-100 font-semibold tracking-wide'>Welcome! I&apos;m</h1>
              <h1 className='text-5xl md:text-7xl font-extrabold font-[nunito] tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-200 py-1'>Rijvi</h1>
            </div>
          
        <div className='flex flex-col gap-3 md:gap-5'>
          <div>
            <h3 className='text-2xl text-slate-100 font-bold'>I build web apps!</h3>
          </div>
          <div>
            <p className='text-base text-slate-100 antialiased'>I&apos;m a full-stack web developer based in Bangladesh, specializing in cutting-edge web technologies as well as pixel-perfect designs.</p>
          </div>
        </div>
        <div className='flex flex-col gap-6 md:gap-8'>
          <div className='flex items-center'>
          <Button variant="outline" className='rounded-l-full md:rounded-l-xl md:rounded-r-none  w-40 py-6' asChild>
           <Link href="/#contact">
            <PaperPlaneIcon className='size-4 mr-2' />
            Contact me
           </Link>
           </Button>
           <Button variant="outline" className='rounded-r-full md:rounded-r-xl md:rounded-l-none text-base w-40 py-6' asChild>
           <Link href="/resume.pdf">
            
              <EyeOpenIcon className='size-4 mr-2' />
              <span className='text-slate-100'>Resume</span>
           </Link>
            </Button>
            
          </div>
          <SocialIcons/>
        </div>
        </div>
    </div>
  )
}

export default Hero