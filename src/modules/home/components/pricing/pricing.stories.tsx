import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pricing } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Home/Pricing',
  component: Pricing,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof Pricing>;
export const Template: ComponentStory<typeof Pricing> = (args) => (
  <div className="w-full h-fit">
    <Pricing />
  </div>
);
