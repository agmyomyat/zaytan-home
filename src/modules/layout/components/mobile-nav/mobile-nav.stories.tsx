import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MobileNav } from '.';
import { NextRouter } from 'next/router';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layout/Mobile Navigation',
  component: MobileNav,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof MobileNav>;
const Template: ComponentStory<typeof MobileNav> = (args) => (
  <MobileNav {...args} />
);
export const Default = Template.bind({});
Default.args = {
  router: {} as NextRouter,
};
