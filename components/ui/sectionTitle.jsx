import React from 'react'

const SectionTitle = ({backgroundText, children}) => {
  return (
<div className='relative w-full'>
    <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 hidden md:block'>
        <h1 className='text-9xl text-zinc-200 dark:text-neutral-800/50 tracking-tight sm:tracking-wide font-bold'>{backgroundText}</h1>
    </div>
<div className='text-4xl md:text-5xl font-bold sm:font-extrabold uppercase tracking-wide bg-gradient-to-r from-green-500  to-yellow-300 bg-clip-text text-transparent text-center w-full'>
    <h1 className='underline md:no-underline decoration-green-500/10 underline-offset-8'>{children}</h1>
</div>
</div>
  )
}

export default SectionTitle