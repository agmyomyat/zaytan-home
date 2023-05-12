import { Flex, Grid, createStyles } from '@mantine/core';
import { BasicPlan } from './plans/basic';
import { StarterPlan } from './plans/starter';
import { PricingCard } from './pricing-card';
import { AdvancePlan } from './plans/advance';
import { PricingHeader } from './header';
import tw from 'twin.macro';

export function Pricing() {
  const { classes } = useStyles();
  return (
    <>
      <div className="flex justify-center my-20">
        <PricingHeader />
      </div>
      <div className="flex gap-4 lg:flex-row flex-col">
        <div className={classes.cardContainer}>
          <StarterPlan />
        </div>
        <div className={classes.cardContainer}>
          <BasicPlan />
        </div>
        <div className={classes.cardContainer}>
          <AdvancePlan />
        </div>
      </div>
    </>
  );
}
const useStyles = createStyles(() => ({
  cardContainer: tw`lg:w-1/3 w-full `,
}));
