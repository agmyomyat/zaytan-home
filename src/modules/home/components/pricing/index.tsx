import { Flex, Grid, createStyles } from '@mantine/core';
import { BasicPlan } from './plans/basic';
import { StarterPlan } from './plans/starter';
import { PricingCard } from './pricing-card';
import { AdvancePlan } from './plans/advance';
import { PricingHeader } from './header';

export function Pricing() {
  return (
    <>
      <div className="flex justify-center my-20">
        <PricingHeader />
      </div>
      <div className="flex gap-4 lg:flex-row flex-col">
        <div className={twClasses.cardContainer}>
          <StarterPlan />
        </div>
        <div className={twClasses.cardContainer}>
          <BasicPlan />
        </div>
        <div className={twClasses.cardContainer}>
          <AdvancePlan />
        </div>
      </div>
    </>
  );
}
const twClasses = {
  cardContainer: 'lg:w-1/3 w-full ',
};
