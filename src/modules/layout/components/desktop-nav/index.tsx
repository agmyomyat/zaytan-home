import ZayTanIcon from '@/fundanmentals/icons/zaytan-icon';
import { ButtonLink } from '@/modules/common/buttonLink';
import { Text, Anchor } from '@mantine/core';

import { NavBar } from '../nav-bar';
import { DemoMenu } from './demo-menu';
export function DesktopNav() {
  return (
    <NavBar>
      <NavBar.LeftSide>
        <div className="flex gap-1">
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
          href="#pricing"
          size="lg"
          color="dark"
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth',
            })
          }
        >
          Pricing
        </Anchor>
      </NavBar.LeftSide>
      <NavBar.RightSide>
        <Anchor
          className="text-black text-lg"
          target={'_blank'}
          href="https://admin.kasset.org"
        >
          Login
        </Anchor>
        <ButtonLink href="https://admin.kasset.org">Sign Up</ButtonLink>
      </NavBar.RightSide>
    </NavBar>
  );
}
