import { useDisclosure } from '@mantine/hooks';
import { Text, Burger } from '@mantine/core';
import { NavDrawer } from './drawer';
import ZayTanIcon from '@/fundanmentals/icons/zaytan-icon';
import { NavBarContainer } from '../nav-bar';
import { NextRouter } from 'next/router';

export function MobileNav(props: { router: NextRouter }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <NavDrawer opened={opened} close={close} />
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
        </NavBarContainer.LeftSide>
        <NavBarContainer.RightSide>
          <Burger onClick={open} opened={opened} />
        </NavBarContainer.RightSide>
      </NavBarContainer>
    </>
  );
}
