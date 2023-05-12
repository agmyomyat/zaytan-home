import { CheckIcon } from '@/fundanmentals/icons/check-icon';
import { Text } from '@mantine/core';

export const TextWithCheckIcon: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="inline-flex gap-2 ">
      <CheckIcon size={'15'} className="self-center" />
      <Text className="font-thin">{children}</Text>
    </div>
  );
};
