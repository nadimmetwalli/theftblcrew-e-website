import ArrowIcon from '@/assets/arrow-right.svg';
import ftblcrewlogo from '@assets/theftblcrew-logo.png';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';
import React from 'react';

export const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className="flex justify-center items-center py-3 bg-black text-white text-small gap-3">
          <p className='text-white/60 hidden md:block'>Shop cool merch, football shirts and football products</p>
        <div className='inline-flex gap-1 items-center'>
          <p>Check out our shop now</p>
          <ArrowIcon className="h-4 w-4 inline-flex justify-center items-center"/>
        </div>
      </div>
      <div className='py-5'>
        <div className='container'>
          <div className='flex items-center justify-between'>
          <Image src={ftblcrewlogo} alt='ftblcrew-logo' height={40} width={40} className='rounded-lg'/>
          <MenuIcon className='h-5 w-5 md:hidden' />
          <nav className='hidden md:flex gap-6 text-black/60 items-center'>
            <a href='#'>About</a>
            <a href='#'>Statistics</a>
            <a href='#'>Customers</a>
            <a href='#'>Services</a>
            <a href='#'>Help</a>
            <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight'>Shop here</button>
          </nav>
          </div>
        </div>
      </div>
    </header>
  ) 
}