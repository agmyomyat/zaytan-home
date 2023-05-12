import { HNM_DEMO_LINK, ISURE_DEMO_LINK } from '@/constants/demo-sites';
import { Menu, Anchor } from '@mantine/core';
export function DemoMenu() {
  return (
    <Menu shadow="md" width={150}>
      <Menu.Target>
        <Anchor className="text-black" size={'lg'}>
          Demos
        </Anchor>
      </Menu.Target>

      <Menu.Dropdown className="!w-28">
        <div className="flex flex-col gap-2 ml-4 ">
          <Anchor
            className="text-lg text-black font-semibold"
            href={ISURE_DEMO_LINK}
            target="_blank"
          >
            isure
          </Anchor>
          <Anchor
            className="text-lg text-black font-semibold"
            target="_blank"
            href={HNM_DEMO_LINK}
          >
            hnm
          </Anchor>
        </div>
      </Menu.Dropdown>
    </Menu>
  );
}
