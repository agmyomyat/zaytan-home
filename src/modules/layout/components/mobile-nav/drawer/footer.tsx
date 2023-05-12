import { ButtonLink } from '@/modules/common/buttonLink';
import { NavLink } from '@mantine/core';

export function DrawerFooter() {
  return (
    <div className=" border-gray-100 border-0 border-solid border-t-[2px] ">
      <div className="flex flex-col gap-2 mt-5">
        <ButtonLink href="https://admin.kasset.org">Login</ButtonLink>
        <ButtonLink href="https://admin.kasset.org">Sign up</ButtonLink>
      </div>
    </div>
  );
}
