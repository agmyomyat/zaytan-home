import ZayTanIcon from '@/fundanmentals/icons/zaytan-icon';
import {
  ButtonExternalLink,
  ButtonInternalLink,
} from '@/modules/common/buttonLink';
import { Text, Anchor, clsx } from '@mantine/core';

import { NavBarContainer } from '../nav-bar-container';
import { DemoMenu } from './demo-menu';
import { LOGIN_LINK, SIGNUP_LINK } from '../../layout.constants';
export function DesktopNav(props: {
  onLogoClick: () => void;
  shouldPricingHidden: boolean;
}) {
  return (
    <NavBarContainer>
      <NavBarContainer.LeftSide>
        <div
          className="flex gap-1 hover:cursor-pointer"
          onClick={() => props.onLogoClick()}
        >
          <Text
            fz={25}
            italic={true}
            weight={550}
            sx={{ fontFamily: 'monospace' }}
            color="orange"
          >
            ZAYTAN
          </Text>
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
