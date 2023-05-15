import { Button } from '@mantine/core';
import { SectionTwoCarousel } from './carousel';
import { HeroSectionTwoHeader } from './header';
import { NextRouter } from 'next/router';

export function HeroSectionTwo(props: { router: NextRouter }) {
  return (
    <div className="w-full">
      <div className="flex justify-center mb-20">
        <HeroSectionTwoHeader
          getStartedButton={
            <Button
              className="bg-transparent border-solid border-gray-400 hover:!bg-orange-300 hover:border-none  rounded-2xl w-1/2 self-center h-12 text-black"
              classNames={{ label: 'sm:text-lg text-sm' }}
              onClick={() => props.router.push('/signup')}
            >
              GET STARTED NOW
            </Button>
          }
        />
      </div>
      <SectionTwoCarousel />
    </div>
  );
}
