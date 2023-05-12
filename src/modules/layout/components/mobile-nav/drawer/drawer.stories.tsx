import { Group, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavDrawer } from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Layout/Drawer',
  component: NavDrawer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof NavDrawer>;
const Template: ComponentStory<typeof NavDrawer> = (args) => (
  <NavDrawer {...args} />
);
export const Default = Template.bind({});
Default.args = {
  opened: true,
};
