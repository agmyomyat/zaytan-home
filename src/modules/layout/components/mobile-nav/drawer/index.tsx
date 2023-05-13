import ZayTanIcon from '@/fundanmentals/icons/zaytan-icon';
import { Drawer, NavLink, Text } from '@mantine/core';
import { DrawerContent } from './content';
import { DrawerFooter } from './footer';
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
              label="Pricing"
              classNames={{ label: `text-2xl` }}
              component="a"
              onClick={() => {
                props.close();
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: 'smooth',
                });
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
  );
}
