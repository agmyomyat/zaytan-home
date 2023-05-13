import {
  HeroSectionOne,
  HeroSectionThree,
  HeroSectionTwo,
} from '../components/hero';
import { Pricing } from '../components/pricing';

export default function Home() {
  return (
    <>
      <HeroSectionOne />
      <div className={twClasses.sectionTwoBgContainer}>
        <div className="xl:mx-52 mx-5 my-28">
          <HeroSectionTwo />
        </div>
      </div>
      <div className="py-20">
        <HeroSectionThree />
      </div>
      <div className={twClasses.pricingBgContainer}>
        <div className="m-5">
          <Pricing />
        </div>
      </div>
    </>
  );
}
const twClasses = {
  sectionTwoBgContainer: `w-full bg-gray-50 overflow-hidden`,
  pricingBgContainer: `w-full bg-orange-200 overflow-hidden`,
};
