import { Text } from '@mantine/core';
export function PricingHeader() {
  return (
    <>
      <Text
        className="text-black sm:text-[50px] text-[40px] leading-snug text-center"
        sx={{
          fontFamily: 'Greycliff CF, sans-serif',
        }}
        ta="left"
        fw={500}
      >
        Pick the right plan for your business and <br />
        grow as you go
      </Text>
    </>
  );
}
