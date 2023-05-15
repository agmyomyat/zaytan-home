import { Meta, StoryFn } from '@storybook/react';
import { SignUpform } from './form';
export default {
  title: 'account/SignUpForm',
  component: SignUpform,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as Meta<typeof SignUpform>;
const Template: StoryFn<typeof SignUpform> = (args) => <SignUpform {...args} />;

export const Default = Template.bind({});
