import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SignUpform } from './form';
export default {
  title: 'Home/account/SignUpForm',
  component: SignUpform,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof SignUpform>;
const Template: ComponentStory<typeof SignUpform> = (args) => <SignUpform />;

export const Primary = Template.bind({});
