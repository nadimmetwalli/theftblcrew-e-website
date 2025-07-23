import CheckIcon from '@/assets/check.svg';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const pricingTiers = [
  {
    title: "Starter Package",
    price: 60,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "1 high-quality Instagram post (custom-designed)",
      "1 engaging Instagram story (with swipe-up/link if available)",
      "2GB storage",
      "Basic hashtag research & caption writing",
      "1 round of revisions",
    ],
  },
  {
    title: "Custom Package",
    price: " Negotiable (based on needs)",
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Custom number of posts & stories (based on your goals)",
      "Advanced hashtag & audience targeting",
      "Professional copywriting & storytelling",
      "Priority support & faster turnaround",
      "Detailed performance analytics",
      "Multi-platform integration (optional, e.g., Reels, carousels)",
    ],
  },
  {
    title: "Growth Package",
    price: 90,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "2 high-quality Instagram posts (custom-designed)",
      "3 engaging Instagram stories (with swipe-up/links if available)",
      "Hashtag research & optimized captions",
      "Basic analytics report (performance insights)",
      "2 rounds of revisions",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id='services' className="py-24">
      <div className="container">
        <div className='section-heading'>
        <h2 className="section-title">Services</h2>
        <p className="section-description mt-5">
          We offer different types of service for brands, business owners, start-ups, and more. 
          Those include shoutout posts, promotions, brand collaborations, music promotions and more!
        </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(({ title, price, buttonText, popular, inverse, features }) => (
            <div 
              key={title} 
              className={twMerge(
                'p-10 border rounded-3xl shadow-[0_7px_14px_#EAEAEA] transition-all max-w-xs w-full',
                inverse 
                  ? 'border-black bg-black text-white' 
                  : 'border-[#F1F1F1] bg-white'
              )}
            >
              <div className='flex justify-between'>
                <h3 className={twMerge(
                  'text-lg font-bold',
                  inverse ? 'text-white' : 'text-black/50'
                )}>
                  {title}
                </h3>
                {popular && (
                  <div className={twMerge(
                    'inline-flex text-sm px-4 py-1.5 rounded-xl border',
                    inverse ? 'border-white/20' : 'border-[#F1F1F1]'
                  )}>
                    <span className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] bg-clip-text text-transparent font-medium'>
                      Popular
                    </span>
                  </div>
                )}
              </div>

              <div className='flex items-baseline gap-1 mt-[30px]'>
                <span className='text-4xl font-bold tracking-tighter leading-none'>€{price}</span>
                <span className={twMerge(
                  'tracking-tight font-bold',
                  inverse ? 'text-white/70' : 'text-black/50'
                )}>
                  /deal
                </span>
              </div>

              <button className={twMerge(
                'w-full mt-[30px] py-3 rounded-lg font-medium transition-colors',
                inverse 
                  ? 'bg-white text-black hover:bg-gray-100' 
                  : 'bg-black text-white hover:bg-gray-800'
              )}>
                {buttonText}
              </button>

              <ul className='flex flex-col gap-5 mt-8'>
                {features.map(feature => (
                  <li 
                    key={feature} 
                    className={twMerge(
                      'text-sm flex items-center gap-4',
                      inverse ? 'text-white' : 'text-black'
                    )}
                  >
                    <Image 
                      src={CheckIcon} 
                      alt='Check icon' 
                      width={24} 
                      height={24} 
                      className={twMerge(
                        'h-6 w-6',
                        inverse && 'invert'
                      )} 
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};