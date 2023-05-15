import { Meta, StoryFn } from '@storybook/react';
import FormSuccessModal from './form-success-modal';

export default {
  title: 'account/SignUpSuccessModal',
} as Meta<typeof FormSuccessModal>;
const Template: StoryFn<typeof FormSuccessModal> = (args) => (
  <FormSuccessModal {...args} />
);
export const Default = Template.bind({});

Default.args = {
  opened: true,
};
