import { Meta, StoryFn } from '@storybook/react';
import { PaymentIntegrationSection } from '.';

export default {
  title: 'Home/Payment-integrations/Template',
  component: PaymentIntegrationSection,
} satisfies Meta<typeof PaymentIntegrationSection>;
const Template: StoryFn<typeof PaymentIntegrationSection> = () => (
  <PaymentIntegrationSection />
);
export const Default = Template.bind({});
