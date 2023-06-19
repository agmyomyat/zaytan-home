import { BasicPlan } from './plans/basic';
import { StarterPlan } from './plans/starter';
import { AdvancePlan } from './plans/advance';
import { PricingHeader } from './header';
import { Button, Switch, clsx } from '@mantine/core';
import { useState } from 'react';
type PricingProps = { orderNow: () => void };
// Too many prop drilling. should fix it
export function Pricing(props: PricingProps) {
  const [payContract, setPayContract] = useState<'MONTHLY' | 'EVERY_6_MONTHS'>(
    'MONTHLY'
  );
  return (
    <>
      <div className="flex justify-center my-20">
        <PricingHeader />
      </div>
      <div className="w-fit mx-auto">
        <div className={twClasses.optionsContainer}>
          <Button
            onClick={() => setPayContract('MONTHLY')}
            className={clsx(twClasses.contractOption, {
              '!bg-black !text-white': payContract === 'MONTHLY',
            })}
          >
            Pay Monthly
          </Button>
          <Button
            onClick={() => setPayContract('EVERY_6_MONTHS')}
            className={clsx(twClasses.contractOption, {
              '!bg-black !text-white': payContract === 'EVERY_6_MONTHS',
            })}
          >
            Pay Every 6 Months (Save 25%)
          </Button>
        </div>
      </div>
      <div className="flex gap-4 lg:flex-row flex-col">
        <div className={twClasses.cardContainer}>
          <StarterPlan
            price={payContract === 'EVERY_6_MONTHS' ? '9000' : '12000'}
            orderNow={props.orderNow}
          />
        </div>
        <div className={twClasses.cardContainer}>
          <BasicPlan />
        </div>
        <div className={twClasses.cardContainer}>
          <AdvancePlan />
        </div>
      </div>
      <div className="flex justify-center my-10">
        <p className="text-gray-800 text-center">
          None of the plans include the price for payment integrations. Payment
          integrations are optionals and if you want to integrate them,
          Additional charges will be added to the price of each plan. contact us
          if you want to integrate payments solutions
        </p>
      </div>
    </>
  );
}
const twClasses = {
  cardContainer: 'lg:w-1/3 w-full ',
  contractOption:
    'text-black max-w-full bg-transparent hover:bg-inherit outline-none border-none rounded-lg sm:rounded-full  h-12',
  optionsContainer:
    'flex sm:flex-row flex-col border-[2px] border-solid  border-[#eb346b] rounded-lg sm:rounded-full p-1 mb-4',
};
