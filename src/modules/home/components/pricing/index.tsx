import { BasicPlan } from './plans/basic';
import { StarterPlan } from './plans/starter';
import { AdvancePlan } from './plans/advance';
import { PricingHeader } from './header';
type PricingProps = { orderNow: () => void };
// Too many prop drilling. should fix it
export function Pricing(props: PricingProps) {
  return (
    <>
      <div className="flex justify-center my-20">
        <PricingHeader />
      </div>
      <div className="flex gap-4 lg:flex-row flex-col">
        <div className={twClasses.cardContainer}>
          <StarterPlan orderNow={props.orderNow} />
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
};
