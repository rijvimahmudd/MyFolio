import React from 'react'
import Logo from '@/components/ui/logo'
import ThemeButton from '../ThemeButton'

const Navbar = () => {
  return (
    <div className='sticky -top-2 h-24 sm:h-28 bg-gradient-to-b from-zinc-100 via-zinc-100/50 to-zinc-50/0 dark:bg-gradient-to-b dark:from-neutral-950 dark:via-neutral-950/50 dark:to-neutral-900/0 z-50'>
    <div className="w-full text-zinc-200 px-8 pt-8">
          <div className="flex items-center justify-between rounded-full py-4 backdrop-blur-lg dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 transition-all px-7 ">
        <Logo />
        <ThemeButton />
    </div>

          </div>
        </div>
        
  )
}

export default Navbar