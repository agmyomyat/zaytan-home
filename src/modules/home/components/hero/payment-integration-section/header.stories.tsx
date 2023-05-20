import { Meta, StoryFn } from '@storybook/react';
import { PaymentIntegrationHeader } from './header';

export default {
  title: 'Home/Payment-integrations/Header',
  component: PaymentIntegrationHeader,
} satisfies Meta<typeof PaymentIntegrationHeader>;
const Template: StoryFn<typeof PaymentIntegrationHeader> = () => (
  <PaymentIntegrationHeader />
);
export const Default = Template.bind({});
