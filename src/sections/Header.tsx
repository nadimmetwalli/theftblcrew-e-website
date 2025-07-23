"use client";
import ArrowRight from '@/assets/arrow-right.svg';
import ftblcrewlogo from '@/assets/logo.png';
import Image from "next/image";
import MenuIcon from '@/assets/menu.svg';

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className="flex justify-center items-center py-3 bg-black text-white text-small gap-3">
        <p className='text-white/60 hidden md:block'>Shop cool merch, football shirts and football products</p>
        <div className='inline-flex gap-1 items-center cursor-pointer'>
          <button 
            onClick={() => scrollToSection('shop')}
            className='hover:opacity-80 transition-opacity cursor-pointer'
          >
            <p>Check out our shop now</p>
          </button>
          <Image
            src={ArrowRight}
            alt="Arrow Right"
            className="h-4 w-4 inline-flex justify-center items-center"
          />
        </div>
      </div>

      <div className='py-5'>
        <div className='container px-4 mx-auto'>
          <div className='flex items-center'>
            <div className='mr-auto ml-10 cursor-pointer'>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='cursor-pointer'
              >
                <Image 
                  src={ftblcrewlogo} 
                  alt='ftblcrew-logo' 
                  height={40} 
                  width={40} 
                  className='rounded-lg'
                />
              </button>
            </div>
            
            <div className='md:hidden ml-auto cursor-pointer'>
              <Image
                src={MenuIcon}
                alt='Menu Icon'
                className='h-5 w-5'
              />
            </div>
            
            <div className='hidden md:flex flex-1 justify-end gap-6 -pr-31'>
              <nav className='flex gap-8 text-black/60 items-center'>
                <button 
                  onClick={() => scrollToSection('about')}
                  className='hover:text-black transition-colors cursor-pointer'
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className='hover:text-black transition-colors cursor-pointer'
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('statistics')}
                  className='hover:text-black transition-colors cursor-pointer'
                >
                  Statistics
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className='hover:text-black transition-colors cursor-pointer'
                >
                  Contact
                </button>
              </nav>
              <div className='ml-4'>
                <button 
                  onClick={() => scrollToSection('shop')}
                  className='bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight whitespace-nowrap hover:bg-gray-800 transition-colors cursor-pointer' // Added cursor-pointer
                >
                  Shop here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  ) 
}