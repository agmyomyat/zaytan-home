import ZayTanIcon from '@/fundanmentals/icons/zaytan-icon';
import { Drawer, NavLink, Text, clsx } from '@mantine/core';
import { DrawerContent } from './content';
import { DrawerFooter } from './footer';
import { isServer } from '@/utils/is-server';
interface DrawerProps {
  opened: boolean;
  close: () => void;
}
export function NavDrawer(props: DrawerProps) {
  return (
    <Drawer
      opened={props.opened}
      onClose={props.close}
      overlayProps={{ opacity: 0.5, blur: 4 }}
      size={'lg'}
      title={<Header />}
      classNames={{
        header: `flex justify-between border-gray-100 border-0 border-solid border-b-[2px]`,
        close: ` text-black w-10 h-8`,
      }}
    >
      <div className="flex flex-col">
        <DrawerContent
          pricing={
            <NavLink
              // I dont like this.
              className={clsx({
                hidden: !isServer() ? window.location.pathname !== '/' : false,
              })}
              label="Pricing"
              classNames={{ label: `text-2xl` }}
              component="a"
              onClick={() => {
                props.close();
              }}
              href="#pricing"
            />
          }
        />
        <div className="mt-5">
          <DrawerFooter />
        </div>
      </div>
    </Drawer>
  );
}

function Header() {
  return (
    <div className="flex gap-1">
      <Text
        fz={25}
        italic={true}
        weight={550}
        color="orange"
        sx={{ fontFamily: 'monospace' }}
      >
        ZAYTAN
      </Text>
    </div>
  );
}
