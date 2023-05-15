import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeroSectionTwo } from '.';
import { NextRouter } from 'next/router';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Home/Hero/Section-Two',
  component: HeroSectionTwo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof HeroSectionTwo>;
const Template: ComponentStory<typeof HeroSectionTwo> = (args) => (
  <HeroSectionTwo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  router: {} as NextRouter,
};
