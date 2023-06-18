import { useDisclosure } from '@mantine/hooks';
import { Text, Burger } from '@mantine/core';
import { NavDrawer } from './drawer';
import ZayTanIcon from '@/fundanmentals/icons/zaytan-icon';
import { NavBarContainer } from '../nav-bar-container';

export function MobileNav(props: { onLogoClick: () => void }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <NavDrawer opened={opened} close={close} />
      <NavBarContainer>
        <NavBarContainer.LeftSide>
          <div
            className="flex gap-1 hover:cursor-pointer"
            onClick={props.onLogoClick}
          >
            <Text
              fz={25}
              weight={550}
              sx={{ fontFamily: 'sans-serif' }}
              color="orange"
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
