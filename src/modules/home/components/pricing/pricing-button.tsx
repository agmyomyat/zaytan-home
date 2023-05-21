import { Button, ButtonProps } from '@mantine/core';
import { MouseEventHandler } from 'react';
export const PricingButton: React.FC<
  {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
  } & ButtonProps
> = ({ children, className, onClick, ...rest }) => {
  return (
    <Button
      onClick={onClick}
      color="orange"
      className={`rounded-lg  ${className}`}
      {...rest}
    >
      {children}
    </Button>
  );
};
