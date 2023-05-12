import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeroSectionOne } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Home/Hero/Section-one',
  component: HeroSectionOne,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof HeroSectionOne>;
const Template: ComponentStory<typeof HeroSectionOne> = (args) => (
  <HeroSectionOne />
);

export const Primary = Template.bind({});
