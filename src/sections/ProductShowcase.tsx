import productImage from '@/assets/product-image.png'
import Image from "next/image";

export const ProductShowcase = () => {
    return (
        <section>
            <div className="container">
                <div>Football content like no where else</div>
                <h2>Football content that will keep you entertained</h2>
                <p>We currently have over 78,000 followers on Instagram and growing steadily. We reach over 10 million people a month.</p>
                <Image 
                src={productImage}
                alt='productImage'
                />
            </div>
        </section>
    );
};