import { useEffect, useRef } from 'react';
import {
  HeroSectionOne,
  HeroSectionThree,
  HeroSectionTwo,
  PaymentIntegrationSection,
} from '../components/hero';
import { Pricing } from '../components/pricing';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const pricingRef = useRef<HTMLDivElement>(null);
  function orderNow() {
    return router.push('/signup');
  }
  // this is some hacky way to make sure that the hash changes to the correct section
  useEffect(() => {
    const onHashChangeStart = (e: HashChangeEvent) => {
      // this is to ensure to go to pricing section when the user click on the pricing link if the use click again
      window.location.hash = '#Pricing';
      pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    window.addEventListener('hashchange', onHashChangeStart);
    return () => {
      window.removeEventListener('hashchange', onHashChangeStart);
    };
  }, []);
  return (
    <>
      <HeroSectionOne router={router} />
      <div className={twClasses.sectionTwoBgContainer}>
        <div className="xl:mx-52 mx-5 my-28">
          <HeroSectionTwo router={router} />
        </div>
      </div>
      <div className="py-20">
        <HeroSectionThree />
      </div>
      <div className={twClasses.paymentIntegrationSectionBgContainer}>
        <div className="my-20">
          <PaymentIntegrationSection />
        </div>
        <div ref={pricingRef} className={twClasses.pricingBgContainer}>
          <div className="m-5">
            <Pricing orderNow={orderNow} />
          </div>
        </div>
      </div>
    </>
  );
}
const twClasses = {
  paymentIntegrationSectionBgContainer: `w-full bg-gray-50 overflow-hidden`,
  sectionTwoBgContainer: `w-full bg-gray-50 overflow-hidden`,
  pricingBgContainer: `w-full bg-orange-200 overflow-hidden`,
};
