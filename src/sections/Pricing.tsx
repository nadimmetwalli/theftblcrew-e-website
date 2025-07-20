import CheckIcon from '@/assets/check.svg';
import Image from 'next/image';

const pricingTiers = [
  {
    title: "Starter Package",
    price: 60,
    buttonText: "Perfect for beginners looking to boost their presence",
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
    price: "Negotiable (based on needs)",
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
  return(
    <section className="py-24">
        <div className="container">
            <h2 className="section-title">Pricing</h2>
            <p className="section-description mt-5">
                We offer different types of service for brands, business owners, start-ups, and more. 
                Those include shoutout posts, promotions, brand collaborations, music promotions and more!
            </p>
            <div>
                {pricingTiers.map(({title, price, buttonText, popular, inverse, features}) => (
                    <div key={title} className='p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA]'>
                        <div className='flex justify-between'>
                        <h3 className='text-lg font-bold text-blac/50'>{title}</h3>
                        <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
                           <span 
                           className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] bg-clip-text text-transparent font-medium'>
                            Popular
                            </span>
                        </div>
                        </div>
                        <div className='flex items-baseline gap-1 mt-[30px]'>
                            <span className='text-4xl font-bold tracking-tighter leading-none'>€{price}</span>
                            <span className='tracking-tight font-vold text-black/50'>/deal</span>
                        </div>
                        <button className='btn btn-primary w-full mt-[30px]'>{buttonText}</button>
                        <ul className='flex flex-col gap-5 mt-8'>
                            {features.map(feature => (
                                <li 
                                key={feature} className='text-sm flex items-center gap-4'>
                                    <Image
                                    src={CheckIcon}
                                    alt='Check icon'
                                    className='h-6 w-6' />
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
