import ArrowIcon from '@/assets/arrow-right.svg';
import Image from "next/image";
import starImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';

export const CallToAction = () => {
    return(
        <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
            <div className="container">
                <div className='section-heading relative'>
                    <h2 className="section-title">Sign up for free today</h2>
                    <p className="section-description mt-5">Check out our different offers and services which can 
                        help your business as well as our shop, full of different products.
                    </p>
                    <Image 
                    src={starImage}
                    className='absolute -left-[380px] -top-[137px]'
                    alt='Star Image'
                    width={360}/>

                    <Image
                    src={springImage}
                    alt='Spring Image'
                    width={360}
                    className='absolute -right-[380px] -top-[19px]'
                    />
                </div>
                <div className="flex gap-2 mt-10 justify-center">
                    <button className="btn btn-primary">Check out our shop</button>
                    <button className="btn btn-text gap-1">
                        <span>Check out our services</span>
                        <Image 
                        src={ArrowIcon}
                        className="h-5 w-5"
                        alt='Arrow icon' 
                        />
                    </button>
                </div>
            </div>
        </section>
    )
}