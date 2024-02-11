import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { LuFocus } from "react-icons/lu";
import { cn } from '@/lib/utils';
import SectionTitle from '../ui/sectionTitle';

const Services = () => {
  return (
    <div className='py-20 px-12 md:px-24 flex flex-col space-y-24 items-center justify-center'>
       <SectionTitle backgroundText='Services'>What i do?</SectionTitle>
        <div className='w-full'>
        <div className='grid grid-cols-auto-fit-300 justify-between gap-6'>
            {Array(3).fill(0).map((_, i) => (
                <Card key={i} className={cn(
                    "bg-green-950/5 shadow-none  flex flex-row-reverse relative py-12 md:py-16 px-8 md:px-4 items-center border border-yellow-50/5 justify-between h-40 md:h-48 backdrop-blur-lg w-full",
                    // i === 2 ? "grow-0": "grow"
                )}>
                <CardHeader className='text-2xl md:text-xl text-end p-0 text-green-100 basis-2/3 md:basis-9/12 space-y-3'>
                    <CardTitle>Responsive design</CardTitle>
                    <CardDescription className='text-slate-200 text-end'>I build responsive and pixel-perfect ui.</CardDescription>
                </CardHeader>
                <CardContent className='opacity-20 p-0 self-start h-full absolute top-4 left-4'>
                    <LuFocus className='size-20 md:size-16 text-green-200/50 rotate-45 origin-center' />
                </CardContent>
            </Card>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Services