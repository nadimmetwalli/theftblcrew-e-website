import whop from '@/assets/logo-whop.png';
import traineffective from '@/assets/logo-traineffective.webp';
import retrokits from '@/assets/logo-retrokits.png';
import newkits from '@/assets/logo-newkits.png';
import goatkits from '@/assets/logo-goatkits.png';
import xbetlogo from '@/assets/logo-1xbet.png';
import Image from "next/image";

export const LogoTicker = () => {
    const logos = [
        { src: goatkits, alt: 'Goat Kits Logo', width: 120, height: 48 }, // Reduced size
        { src: whop, alt: 'Whop Logo', width: 120, height: 40 },         // Reduced size
        { src: traineffective, alt: 'Train Effective Logo', width: 120, height: 48 },
        { src: retrokits, alt: 'Retro Kits Logo', width: 120, height: 48 },
        { src: newkits, alt: 'New Kits Logo', width: 120, height: 56 },  // Reduced size
        { src: xbetlogo, alt: '1xBet Logo', width: 120, height: 48 },
    ];

    return (
        <div className="py-8 relative overflow-x-hidden"> {/* Reduced padding */}
            {/* Gradient fade edges */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" /> {/* Narrower fade */}
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
            
            {/* Logo container */}
            <div className="flex w-[200%]">
                {/* Duplicate logos for seamless looping */}
                <div className="flex items-center animate-slide flex-shrink-0">
                    {logos.map((logo, index) => (
                        <div key={`first-${index}`} className="px-6"> {/* Reduced padding */}
                            <div className="h-12 flex items-center"> {/* Reduced container height */}
                                <Image 
                                    src={logo.src} 
                                    alt={logo.alt} 
                                    width={logo.width} 
                                    height={logo.height}
                                    className="h-full w-auto object-contain max-h-[48px]" // Added max-height
                                />
                            </div>
                        </div>
                    ))}
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
            </div>
        </div>
    );
}