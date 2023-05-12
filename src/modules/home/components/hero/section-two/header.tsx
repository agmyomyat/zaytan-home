import { Text } from '@mantine/core';
import { SectionTwoSignUpButton } from './sign-up-button';
export function HeroSectionTwoHeader() {
  return (
    <div className="flex flex-col space-y-6">
      <Text
        className="text-black sm:text-[60px] text-[40px] leading-none"
        sx={{
          fontFamily: 'Greycliff CF, sans-serif',
        }}
        ta="center"
        fw={400}
      >
        Get you own store and start selling
      </Text>

      <SectionTwoSignUpButton />
    </div>
  );
}
