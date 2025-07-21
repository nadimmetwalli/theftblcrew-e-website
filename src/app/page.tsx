import {Header} from '@/sections/Header';
import {Hero} from '@/sections/Hero';
import { LogoTicker } from '@/sections/LogoTicker';
import { ProductShowcase } from '@/sections/ProductShowcase';
import { Pricing } from '@/sections/Pricing';
import { Statistics } from '@/sections/Statistics';
import { CallToAction } from '@/sections/CallToAction';

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <LogoTicker />
    <ProductShowcase />
    <Pricing />
    <Statistics />
    <CallToAction />
    </>
  );
}
