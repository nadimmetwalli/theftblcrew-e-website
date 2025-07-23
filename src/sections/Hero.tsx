"use client";
import ArrowIcon from '@/assets/arrow-right.svg';
import yamal from '@/assets/yamal.png';
import iphone from '@/assets/iphone-img.png';
import cylinderImage from '@/assets/cylinder.png';
import Image from "next/image";
import noodleImage from '@/assets/noodle.png'
import {motion, useScroll, useTransform} from 'framer-motion';
import {useRef} from "react";


export const Hero = () => {
  const heroRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);



  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container px-4 mx-auto">
        <div className='md:flex items-center'>
          <div className='md:w-[478px]'>
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight bg-white/10">
              Football content like no where else.
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              theftblcrew
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              We are a football-focused Instagram page that delivers entertaining, 
              engaging content for fans around the world. We post a mix of reels, edits, 
              iconic moments, memes, and fun takes on trending football topics.
            </p>
            <div className="flex gap-4 items-center mt-8">
              <button className="btn btn-primary">Services</button>
              <button className="btn btn-text gap-1">
                <span>Shop</span>
                <Image 
                  src={ArrowIcon}
                  className="h-5 w-5"
                  alt='Arrow icon' 
                />
              </button>
            </div>
          </div>

          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
            <motion.img 
              src={iphone.src} 
              alt='Lamine Yamal picture' 
              className='md:absolute md:h-auto md:w-[43%] md:left-80 md:top-11'
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat:Infinity,
                repeatType: "mirror",
                duration: 4,
                ease: "easeInOut",
              }} 
            />
            <motion.img
              src={cylinderImage.src} 
              width={220} 
              height={220} 
              alt='cylinder image'
              className='hidden md:block absolute -top-8 -left-21'
              style={{
                translateY: translateY,
              }}
            />
            <motion.img 
              src={noodleImage.src} 
              width={220} 
              className='hidden lg:block absolute top-[524px] left-[800px] rotate-[30deg]' 
              alt='noodle image'
              style={{
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};