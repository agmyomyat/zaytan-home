import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SectionOneInput } from './input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Home/Hero/Input',
  component: SectionOneInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof SectionOneInput>;
const Template: ComponentStory<typeof SectionOneInput> = (args) => (
  <SectionOneInput {...args} />
);

export const Primary = Template.bind({});
