import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PricingCard } from './pricing-card';
import { Text } from '@mantine/core';
import { PricingButton } from './pricing-button';
import { TextWithCheckIcon } from './text-with-check-icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Home/Pricing/Pricing-Card',
  component: Template,
} as ComponentMeta<typeof Template>;
function Template({ recommend }: { recommend: boolean }) {
  return (
    <div className="w-1/3">
      <PricingCard recommend={recommend} h={500}>
        <PricingCard.Header recommend={recommend}> Starter</PricingCard.Header>
        <PricingCard.Description>
          Sell products through social media platforms
        </PricingCard.Description>
        <PricingCard.Pricing>
          <div className="flex flex-row gap-1">
            <Text className="text-2xl font-semibold">MMK 10000</Text>
            <Text size="sm" className="mt-2">
              /month
            </Text>
          </div>
          <PricingButton
            className="mt-3 mb-5"
            variant={recommend ? 'filled' : 'outline'}
          >
            Order now
          </PricingButton>
          <PricingCard.Detail>
            <TextWithCheckIcon>Unlimited products</TextWithCheckIcon>
            <TextWithCheckIcon>Storage 500 MB</TextWithCheckIcon>
            <TextWithCheckIcon>
              48 hours support response time
            </TextWithCheckIcon>
          </PricingCard.Detail>
        </PricingCard.Pricing>
      </PricingCard>
    </div>
  );
}

export const Default: ComponentStory<typeof Template> = ({ ...args }) => (
  <Template recommend={false} />
);

export const Recommend: ComponentStory<typeof Template> = ({ ...args }) => (
  <Template recommend={true} />
);
