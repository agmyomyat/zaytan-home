import { Button, Anchor, MantineSize, ButtonProps } from '@mantine/core';
import { HTMLAttributeAnchorTarget } from 'react';
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
      classNames={{ root: 'hover:!bg-gray-700 bg-gray-900 rounded-lg' }}
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
