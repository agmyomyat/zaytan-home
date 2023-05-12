import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeroSectionThree } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Home/Hero/Section-Three',
  component: HeroSectionThree,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof HeroSectionThree>;
const Template: ComponentStory<typeof HeroSectionThree> = (args) => (
  <HeroSectionThree />
);

export const Default = Template.bind({});
