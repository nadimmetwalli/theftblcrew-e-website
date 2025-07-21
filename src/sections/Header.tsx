import ArrowRight from '@/assets/arrow-right.svg';
import ftblcrewlogo from '@/assets/logo.png';
import Image from "next/image";
import MenuIcon from '@/assets/menu.svg';

export const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      {/* Top black bar remains unchanged */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-small gap-3">
        <p className='text-white/60 hidden md:block'>Shop cool merch, football shirts and football products</p>
        <div className='inline-flex gap-1 items-center'>
          <p>Check out our shop now</p>
          <Image
            src={ArrowRight}
            alt="Arrow Right"
            className="h-4 w-4 inline-flex justify-center items-center"
          />
        </div>
      </div>

      {/* Main header section */}
      <div className='py-5'>
        <div className='container px-4 mx-auto'> {/* Added mx-auto for proper centering */}
          <div className='flex items-center'>
            {/* Logo - fixed width to prevent pushing */}
            <div className='mr-auto ml-10'> {/* Adjust width as needed */}
              <Image 
                src={ftblcrewlogo} 
                alt='ftblcrew-logo' 
                height={40} 
                width={40} 
                className='rounded-lg'
              />
            </div>
            
            {/* Mobile menu button - right-aligned */}
            <div className='md:hidden ml-auto'>
              <Image
                src={MenuIcon}
                alt='Menu Icon'
                className='h-5 w-5'
              />
            </div>
            
            {/* Desktop navigation - new spacing approach */}
            <div className='hidden md:flex flex-1 justify-end gap-6 -pr-31'> {/* Added gap-8 and pr-8 */}
              <nav className='flex gap-8 text-black/60 items-center'> {/* Adjust gap as needed */}
                <a href='#'>About</a>
                <a href='#'>Services</a>
                <a href='#'>Statistics</a>
                <a href='#'>Contact</a>
              </nav>
              <div className='ml-4'> {/* Extra spacing before button */}
                <button className='bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight whitespace-nowrap'>
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