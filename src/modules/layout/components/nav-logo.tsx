import { Text } from '@mantine/core';
export function NavLogo() {
  return (
    <div className="flex flex-col hover:cursor-pointer">
      <Text
        fz={25}
        weight={550}
        sx={{ fontFamily: 'sans-serif' }}
        color="orange"
      >
        ZAYTAN
      </Text>
      <Text fz={10} className="text-center" sx={{ fontFamily: 'sans-serif' }}>
        Make Ecommerce Easy
      </Text>
    </div>
  );
}
