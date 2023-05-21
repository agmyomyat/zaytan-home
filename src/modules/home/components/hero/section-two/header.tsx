import { Text } from '@mantine/core';
export function HeroSectionTwoHeader(props: { getStartedButton: JSX.Element }) {
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
        Get your own store and start selling
      </Text>
      {props.getStartedButton}
    </div>
  );
}
