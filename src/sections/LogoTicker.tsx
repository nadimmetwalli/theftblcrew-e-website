"use client";
import whop from '@/assets/logo-whop.png';
import traineffective from '@/assets/logo-traineffective.webp';
import retrokits from '@/assets/logo-retrokits.png';
import newkits from '@/assets/logo-newkits.png';
import goatkits from '@/assets/logo-goatkits.png';
import xbetlogo from '@/assets/logo-1xbet.png';
import Image from "next/image";
import { motion } from 'framer-motion';

export const LogoTicker = () => {
    const logos = [
        { src: goatkits, alt: 'Goat Kits Logo', width: 120, height: 48 },
        { src: whop, alt: 'Whop Logo', width: 120, height: 40 },
        { src: traineffective, alt: 'Train Effective Logo', width: 120, height: 48 },
        { src: retrokits, alt: 'Retro Kits Logo', width: 120, height: 48 },
        { src: newkits, alt: 'New Kits Logo', width: 120, height: 56 },
        { src: xbetlogo, alt: '1xBet Logo', width: 120, height: 48 },
    ];


    return (
        <div className="py-8 relative overflow-x-hidden">

            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
            
            <motion.div 
                className="flex w-[200%]"
                animate={{
                    x: ['0%', '-50%'] // Moves from right to left by half the container width
                }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop"
                }}
            >

                <div className="flex items-center flex-shrink-0">
                    {logos.map((logo, index) => (
                        <div key={`first-${index}`} className="px-6">
                            <div className="h-12 flex items-center">
                                <Image 
                                    src={logo.src} 
                                    alt={logo.alt} 
                                    width={logo.width} 
                                    height={logo.height}
                                    className="h-full w-auto object-contain max-h-[48px]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="flex items-center flex-shrink-0">
                    {logos.map((logo, index) => (
                        <div key={`second-${index}`} className="px-6">
                            <div className="h-12 flex items-center">
                                <Image 
                                    src={logo.src} 
                                    alt={logo.alt} 
                                    width={logo.width} 
                                    height={logo.height}
                                    className="h-full w-auto object-contain max-h-[48px]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}