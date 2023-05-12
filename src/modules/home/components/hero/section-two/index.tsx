import { SectionTwoCarousel } from './carousel';
import { HeroSectionTwoHeader } from './header';

export function HeroSectionTwo() {
  return (
    <div className="w-full">
      <div className="flex justify-center mb-20">
        <HeroSectionTwoHeader />
      </div>
      <SectionTwoCarousel />
    </div>
  );
}
