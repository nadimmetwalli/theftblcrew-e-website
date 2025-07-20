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
    monthlyPrice: "Negotiable (based on needs)",
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
    monthlyPrice: 90,
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
                        <h3>{title}</h3>
                        <div>
                            <span>€{price}</span>
                            <span>/deal</span>
                        </div>
                        <button>{buttonText}</button>
                        <ul>
                            {features.map(feature => (
                                <li 
                                key={feature}>
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
