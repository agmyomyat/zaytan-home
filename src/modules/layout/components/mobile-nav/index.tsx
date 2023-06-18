import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';
import { NavDrawer } from './drawer';
import { NavBarContainer } from '../nav-bar-container';
import { NavLogo } from '../nav-logo';

export function MobileNav(props: { onLogoClick: () => void }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <NavDrawer opened={opened} close={close} />
      <NavBarContainer>
        <NavBarContainer.LeftSide>
          <div onClick={props.onLogoClick}>
            <NavLogo />
          </div>
        </NavBarContainer.LeftSide>
        <NavBarContainer.RightSide>
          <Burger onClick={open} opened={opened} />
        </NavBarContainer.RightSide>
      </NavBarContainer>
    </>
  );
}
