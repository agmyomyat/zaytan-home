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
            Pay Every 6 Months (Save 23%)
          </Button>
        </div>
      </div>
      <div className="flex gap-4 lg:flex-row flex-col">
        <div className={twClasses.cardContainer}>
          <StarterPlan
            price={payContract === 'EVERY_6_MONTHS' ? '10000' : '13000'}
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
          Additional <span className="font-semibold">20000</span> kyats will be
          added to the price of each plan.
        </p>
      </div>
    </>
  );
}
const twClasses = {
  cardContainer: 'lg:w-1/3 w-full ',
  contractOption:
    'text-black bg-transparent hover:bg-inherit outline-none border-none rounded-full  h-12',
  optionsContainer:
    'border-[2px] border-solid  border-[#eb346b] rounded-full p-1 mb-4',
};
