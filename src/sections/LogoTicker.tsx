import whop from '@/assets/logo-whop.png';
import traineffective from '@/assets/logo-traineffective.webp';
import retrokits from '@/assets/logo-retrokits.png';
import newkits from '@/assets/logo-newkits.png';
import goatkits from '@/assets/logo-goatkits.png';
import xbetlogo from '@/assets/logo-1xbet.png';
import Image from "next/image";

export const LogoTicker = () => {
    return (
        <div className="py-8">
            <div className='container'>
                <div className='flex overflow-hidden 
                    [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
                    [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
                    <div className='flex items-center gap-12 flex-none animate-[slide_20s_linear_infinite]'>
                        {/* Logo items with consistent container sizing */}
                        <div className="h-16 w-auto flex items-center">
                            <Image 
                                src={goatkits} 
                                alt='Goat Kits Logo' 
                                width={160} 
                                height={64}
                                className="h-full w-auto object-contain"
                            />
                        </div>
                        <div className="h-16 w-auto flex items-center">
                            <Image 
                                src={whop} 
                                alt='Whop Logo' 
                                width={160} 
                                height={64}
                                className="h-full w-auto object-contain"
                            />
                        </div>
                        <div className="h-16 w-auto flex items-center">
                            <Image 
                                src={traineffective} 
                                alt='Train Effective Logo' 
                                width={160} 
                                height={64}
                                className="h-full w-auto object-contain"
                            />
                        </div>
                        <div className="h-16 w-auto flex items-center">
                            <Image 
                                src={retrokits} 
                                alt='Retro Kits Logo' 
                                width={160} 
                                height={64}
                                className="h-full w-auto object-contain"
                            />
                        </div>
                        <div className="h-16 w-auto flex items-center">
                            <Image 
                                src={newkits} 
                                alt='New Kits Logo' 
                                width={160} 
                                height={64}
                                className="h-full w-auto object-contain"
                            />
                        </div>
                        <div className="h-16 w-auto flex items-center">
                            <Image 
                                src={xbetlogo} 
                                alt='1xBet Logo' 
                                width={160} 
                                height={64}
                                className="h-full w-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}