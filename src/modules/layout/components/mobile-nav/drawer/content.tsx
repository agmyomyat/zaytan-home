import { HNM_DEMO_LINK, ISURE_DEMO_LINK } from '@/constants/demo-sites';
import { Anchor, NavLink } from '@mantine/core';
interface DrawerContentProps {
  pricing: JSX.Element;
}
export const DrawerContent: React.FC<DrawerContentProps> = ({ pricing }) => {
  return (
    <div className="flex flex-col mt-5 gap-5">
      {pricing}
      <NavLink
        label="Demos"
        classNames={{ label: `text-2xl` }}
        childrenOffset={28}
      >
        <NavLink
          label="Isure"
          component="a"
          href={ISURE_DEMO_LINK}
          target="_blank"
          classNames={{ label: `text-2xl` }}
        />
        <NavLink
          classNames={{ label: `text-2xl` }}
          label="hnm"
          component="a"
          href={HNM_DEMO_LINK}
          target="_blank"
        />
      </NavLink>
    </div>
  );
};
