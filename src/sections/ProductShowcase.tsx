import productImage from '@/assets/product-image.png'
import Image from "next/image";
import pyramidImage from '@/assets/pyramid.png'
import tubeImage from '@/assets/tube.png'

export const ProductShowcase = () => {
    return (
        <section className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
            <div className="container">
                <div className='max-w-[640px] mx-auto'>
                <div className='flex justify-center'>
                    <div className='tag'>Football content like no where else</div>
                </div>

                <h2 
                    className='section-title mt-5'>
                    Football content that will keep you entertained
                </h2>
                <p 
                    className='section-description mt-5'>
                    We currently have over 78,000 followers on Instagram and growing steadily. We reach over 10 million people a month.
                </p>
                </div>
                <div className='relative flex justify-center'>
                <Image 
                src={productImage}
                alt='productImage'
                height={550}
                className='mt-10 rounded-lg'
                />

                <Image 
                src={pyramidImage}
                alt='Pyramid Image'
                height={262}
                width={262}
                className='hidden md:block absolute -right-1 -top-32'/>
                </div>

                <Image 
                src={tubeImage}
                alt='Tube Image'
                height={262}
                className='hidden md:block absolute top-360 -left-1'/>
            </div>
        </section>
    );
};