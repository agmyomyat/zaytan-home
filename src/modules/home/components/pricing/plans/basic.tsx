import { PricingButton } from '../pricing-button';
import { PricingCard } from '../pricing-card';
import { TextWithCheckIcon } from '../text-with-check-icon';

export const BasicPlan = () => {
  return (
    <PricingCard h={500}>
      <PricingCard.Header> Basic</PricingCard.Header>
      <PricingCard.Description>
        Give your customers the best experience possible
      </PricingCard.Description>
      <PricingCard.Pricing>
        <PricingButton disabled className="mt-3 mb-5">
          Coming soon...
        </PricingButton>
      </PricingCard.Pricing>
      <PricingCard.Detail>
        <TextWithCheckIcon>Everything in starter plus</TextWithCheckIcon>
        <TextWithCheckIcon>Storage 2 GB</TextWithCheckIcon>
        <TextWithCheckIcon>24 hours support response time</TextWithCheckIcon>
        <TextWithCheckIcon>Discount your products</TextWithCheckIcon>
        <TextWithCheckIcon>Sales promotion</TextWithCheckIcon>
        <TextWithCheckIcon>Gift cards</TextWithCheckIcon>
      </PricingCard.Detail>
    </PricingCard>
  );
};
