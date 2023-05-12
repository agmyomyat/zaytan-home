import { Button, Anchor, MantineSize, ButtonProps } from '@mantine/core';
import { HTMLAttributeAnchorTarget } from 'react';
import tw from 'twin.macro';
export const ButtonLink: React.FC<
  {
    children: React.ReactNode;
    size?: MantineSize;
    className?: string;
    href: string;
    target?: HTMLAttributeAnchorTarget | undefined;
  } & ButtonProps
> = ({ className, children, size, href, target, ...rest }) => {
  return (
    <Button
      size={size || 'md'}
      styles={{ root: tw`hover:!bg-gray-700 bg-gray-900 rounded-lg` }}
      {...rest}
    >
      <Anchor
        href={href}
        className="w-full text-white hover:!no-underline"
        target={target}
      >
        {children}
      </Anchor>
    </Button>
  );
};
