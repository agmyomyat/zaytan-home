import ZayTanIcon from '@/fundanmentals/icons/zaytan-icon';
import {
  ButtonExternalLink,
  ButtonInternalLink,
} from '@/modules/common/buttonLink';
import { Text, Anchor, clsx } from '@mantine/core';

import { NavBarContainer } from '../nav-bar';
import { DemoMenu } from './demo-menu';
import { type NextRouter } from 'next/router';
import { LOGIN_LINK, SIGNUP_LINK } from '../../layout.constants';
export function DesktopNav(props: { router: NextRouter }) {
  return (
    <NavBarContainer>
      <NavBarContainer.LeftSide>
        <div
          className="flex gap-1 hover:cursor-pointer"
          onClick={() => props.router.push('/')}
        >
          <ZayTanIcon size={30} />
          <Text
            fz={20}
            italic={true}
            weight={550}
            sx={{ fontFamily: 'sans-serif' }}
          >
            ZAYTAN
          </Text>
        </div>
        <DemoMenu />
        <Anchor
          className={clsx({ hidden: props.router.pathname !== '/' })}
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
