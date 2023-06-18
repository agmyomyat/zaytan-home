import { ButtonInternalLink } from '@/modules/common/buttonLink';
import { Text, Anchor, clsx } from '@mantine/core';

import { NavBarContainer } from '../nav-bar-container';
import { DemoMenu } from './demo-menu';
import { LOGIN_LINK, SIGNUP_LINK } from '../../layout.constants';
import { NavLogo } from '../nav-logo';
export function DesktopNav(props: {
  onLogoClick: () => void;
  shouldPricingHidden: boolean;
}) {
  return (
    <NavBarContainer>
      <NavBarContainer.LeftSide>
        <div onClick={() => props.onLogoClick()} className="mr-3">
          <NavLogo />
        </div>
        <DemoMenu />
        <Anchor
          // className={clsx({ hidden: props.router.pathname !== '/' })}
          className={clsx({ hidden: props.shouldPricingHidden })}
          href="#pricing"
          size="lg"
          color="dark"
        >
          Pricing
        </Anchor>
      </NavBarContainer.LeftSide>
      <NavBarContainer.RightSide>
        <Anchor
          className="text-black text-lg"
          target={'_blank'}
          href={LOGIN_LINK}
        >
          Login
        </Anchor>
        <ButtonInternalLink href={SIGNUP_LINK}>Sign Up</ButtonInternalLink>
      </NavBarContainer.RightSide>
    </NavBarContainer>
  );
}
