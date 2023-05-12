import { PricingButton } from '../pricing-button';
import { PricingCard } from '../pricing-card';
import { TextWithCheckIcon } from '../text-with-check-icon';

export const AdvancePlan = () => {
  return (
    <PricingCard h={500}>
      <PricingCard.Header> Advance</PricingCard.Header>
      <PricingCard.Description>For enterprise</PricingCard.Description>
      <PricingCard.Pricing>
        <PricingButton disabled className="mt-3 mb-5">
          Coming soon...
        </PricingButton>
      </PricingCard.Pricing>
      <PricingCard.Detail>
        <TextWithCheckIcon>Everything in basic plan plus</TextWithCheckIcon>
        <TextWithCheckIcon>Storage unlimited</TextWithCheckIcon>
        <TextWithCheckIcon>Dedicated support</TextWithCheckIcon>
        <TextWithCheckIcon>Advance storefront theme</TextWithCheckIcon>
        <TextWithCheckIcon>Blogging</TextWithCheckIcon>
      </PricingCard.Detail>
    </PricingCard>
  );
};
