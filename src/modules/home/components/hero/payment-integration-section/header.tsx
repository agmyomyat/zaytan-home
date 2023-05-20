import { Text } from '@mantine/core';
export function PaymentIntegrationHeader() {
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
        Stop managing payments manually
      </Text>
      <Text
        className="text-gray-700 text-[20px] leading-relaxed"
        sx={{
          fontFamily: 'Greycliff CF, sans-serif',
        }}
        ta="center"
      >
        We provide payment integrations with most of major payment providers to
        automatically handle all your payments
      </Text>
    </div>
  );
}
