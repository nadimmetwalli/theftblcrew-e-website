import logo from '@/assets/logo.png';
import Image from 'next/image';
import instaLogo from '@/assets/insta-logo.png';
import ytLogo from '@/assets/yt-logo.png';
import xLogo from '@/assets/x-logo.png';


export const Footer = () => {
    return (
        <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
            <div className="container">
                <div className='inline-flex relative before:content-[""] before:top-2 before:buttom-0 before:w-full before:blur before:bg-[linear-gradient(to_right, #F87BFF, #FB92CF, #FFDD9B, #C2F0B1, #2FD8FE )] before:absolute'>
                    <Image
                    src={logo}
                    alt='Logo'
                    height={40}
                    className='relative'
                    />
                </div>

                <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
                    <a href='#'>About</a>
                    <a href='#'>Services</a>
                    <a href='#'>Statistics</a>
                    <a href='#'>Contact</a>
                </nav>

                <div className='flex justify-center gap-6 mt-6'>
                    <Image
                    src={instaLogo}
                    alt='Instagram logo'
                    width={40}
                    className=''
                    />
                    
                    <Image
                    src={xLogo}
                    alt='Instagram logo'
                    width={40}
                    className=''
                    />
                    
                    <Image
                    src={ytLogo}
                    alt='Instagram logo'
                    width={40}
                    className=''
                    />

                </div>

                <p className='mt-6'>
                    &copy; 2024 The Football Crew, Inc. All rights reserved.
                </p>

            </div>
        </footer>
    )
}