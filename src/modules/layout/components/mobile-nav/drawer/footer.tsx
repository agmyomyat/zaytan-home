import {
  ButtonExternalLink,
  ButtonInternalLink,
} from '@/modules/common/buttonLink';
import { LOGIN_LINK, SIGNUP_LINK } from '@/modules/layout/layout.constants';

export function DrawerFooter() {
  return (
    <div className=" border-gray-100 border-0 border-solid border-t-[2px] ">
      <div className="flex flex-col gap-2 mt-5">
        <ButtonExternalLink href={LOGIN_LINK}>Login</ButtonExternalLink>
        <ButtonInternalLink href={SIGNUP_LINK}>Sign up</ButtonInternalLink>
      </div>
    </div>
  );
}
