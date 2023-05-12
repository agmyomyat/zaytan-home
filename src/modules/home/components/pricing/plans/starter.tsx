import { PricingButton } from '../pricing-button';
import { Text } from '@mantine/core';
import { PricingCard } from '../pricing-card';
import { TextWithCheckIcon } from '../text-with-check-icon';

export const StarterPlan = () => {
  return (
    <PricingCard recommend h={500}>
      <PricingCard.Header recommend> Starter</PricingCard.Header>
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
        <PricingButton className="mt-3 mb-5" variant="filled">
          Order now
        </PricingButton>
      </PricingCard.Pricing>
      <PricingCard.Detail>
        <TextWithCheckIcon>Unlimited products</TextWithCheckIcon>
        <TextWithCheckIcon>Storage 500 MB</TextWithCheckIcon>
        <TextWithCheckIcon>48 hours support response time</TextWithCheckIcon>
      </PricingCard.Detail>
    </PricingCard>
  );
};
