import { Button, ButtonProps } from '@mantine/core';
import tw from 'twin.macro';
export const PricingButton: React.FC<
  {
    children: React.ReactNode;
    className?: string;
  } & ButtonProps
> = ({ children, className, ...rest }) => {
  return (
    <Button color="orange" className={`rounded-lg  ${className}`} {...rest}>
      {children}
    </Button>
  );
};
