import { Text } from '@mantine/core';
export function SectionOneHeader() {
  return (
    <>
      <Text
        className="text-black sm:text-[60px] text-[50px] leading-none"
        sx={{
          fontFamily: 'Greycliff CF, sans-serif',
        }}
        ta="left"
        fw={700}
      >
        Quality Ecommerce Platform in Myanmar
      </Text>
      <Text
        className="text-black text-lg mt-5"
        sx={{
          fontFamily: 'Greycliff CF, sans-serif',
        }}
        ta="left"
        fw={50}
      >
        Easily launch and grow your ecommerce business with our affordable
        platform
      </Text>
    </>
  );
}
