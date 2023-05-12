import { Button } from '@mantine/core';

export function SectionTwoSignUpButton() {
  return (
    <Button
      className="bg-transparent border-solid border-gray-400 hover:!bg-orange-300 hover:border-none  rounded-2xl w-1/2 self-center h-12 text-black"
      classNames={{ label: 'sm:text-lg text-sm' }}
    >
      GET STARTED NOW
    </Button>
  );
}
