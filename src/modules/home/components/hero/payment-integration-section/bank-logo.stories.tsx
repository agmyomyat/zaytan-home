import { Meta, StoryFn } from '@storybook/react';
import { BankLogo } from './bank-logo';

export default {
  title: 'Home/Payment-integrations/BankLogo',
  component: BankLogo,
} satisfies Meta<typeof BankLogo>;
const Template: StoryFn<typeof BankLogo> = (args) => <BankLogo {...args} />;
export const Default = Template.bind({});
Default.args = {
  alt: 'aya bank logo',
  path: './bank_logos/aya.png',
};
