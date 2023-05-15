import { Meta, StoryFn } from '@storybook/react';
import FormErrorModal from './form-error-modal';

export default {
  title: 'account/SignUpErrorModal',
} as Meta<typeof FormErrorModal>;
const Template: StoryFn<typeof FormErrorModal> = (args) => (
  <FormErrorModal {...args} />
);
export const Default = Template.bind({});

Default.args = {
  opened: true,
};
