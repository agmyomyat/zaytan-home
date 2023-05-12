import { HNM_DEMO_LINK, ISURE_DEMO_LINK } from '@/constants/demo-sites';
import { Anchor, NavLink } from '@mantine/core';
import tw from 'twin.macro';
interface DrawerContentProps {
  pricing: JSX.Element;
}
export const DrawerContent: React.FC<DrawerContentProps> = ({ pricing }) => {
  return (
    <div className="flex flex-col mt-5 gap-5">
      {pricing}
      <NavLink
        label="Demos"
        styles={{ label: tw`text-2xl` }}
        childrenOffset={28}
      >
        <NavLink
          label="Isure"
          component="a"
          href={ISURE_DEMO_LINK}
          target="_blank"
          styles={{ label: tw`text-2xl` }}
        />
        <NavLink
          styles={{ label: tw`text-2xl` }}
          label="hnm"
          component="a"
          href={HNM_DEMO_LINK}
          target="_blank"
        />
      </NavLink>
    </div>
  );
};
