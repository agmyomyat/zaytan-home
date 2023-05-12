import { Text } from '@mantine/core';

export function SectionThreeHeader() {
  return (
    <div className="flex flex-col space-y-6 items-center">
      <Text
        className="text-black text-[40px] leading-snug"
        sx={{
          fontFamily: 'Greycliff CF, sans-serif',
        }}
        ta="center"
        fw={400}
      >
        Manage everything from one place
      </Text>
      <Text
        className="text-gray-700 text-[20px] leading-relaxed"
        sx={{
          fontFamily: 'Greycliff CF, sans-serif',
        }}
        ta="center"
      >
        Effortlessly manage your orders, products, and customers all in one
        place from your very own dashboard
      </Text>
    </div>
  );
}
