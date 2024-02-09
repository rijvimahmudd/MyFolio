import React from 'react'
import Logo from '@/components/ui/logo'
import ThemeButton from '../ThemeButton'

const Navbar = () => {
  return (
    <div className='sticky -top-2 h-24 sm:h-28 bg-gradient-to-b from-zinc-100 via-zinc-100/50 to-zinc-50/0 dark:bg-gradient-to-b dark:from-green-950/5 dark:via-green-950/5 dark:to-green-900/0 z-50 transition'>
    <div className="w-full text-zinc-200 px-8 md:px-20 pt-8">
          <div className="flex items-center justify-between rounded-full py-4 backdrop-blur-lg dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit transition-all px-7 ">
        <Logo />
        <div className=''>
          <ul className='gap-6 hidden md:flex font-medium'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Articles</li>
            <li>Snippets</li>
          </ul>
        </div>
        <ThemeButton />
    </div>

          </div>
        </div>
        
  )
}

export default Navbar