import { Card, CardProps, Text } from '@mantine/core';
import clsx from 'clsx';
interface PricingCardProps {
  children: React.ReactNode;
  recommend?: boolean;
}
interface DetailProps {
  children: React.ReactNode;
}
interface PricingProps {
  children: React.ReactNode;
}
interface HeaderProps {
  children: React.ReactNode;
  recommend?: boolean;
}
interface DescriptionProps {
  children: React.ReactNode;
}
export const PricingCard: React.FC<PricingCardProps & CardProps> & {
  Header: React.FC<HeaderProps>;
  Description: React.FC<DescriptionProps>;
  Pricing: React.FC<PricingProps>;
  Detail: React.FC<DetailProps>;
} = ({ children, recommend, ...rest }) => {
  return (
    <div
      className={clsx({
        'border-transparent  bg-clip-border bg-gradient-to-r p-0.5 rounded-2xl from-orange-500 to-[#eb346b]':
          recommend,
      })}
    >
      <Card
        className={clsx('bg-white p-8 rounded-2xl ', {
          'shadow-md shadow-orange-200': !recommend,
        })}
        {...rest}
      >
        {children}
      </Card>
    </div>
  );
};

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="flex justify-between">
      <Text
        size={'xl'}
        className={clsx({
          'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#eb346b]':
            props.recommend,
        })}
        fw={'bold'}
      >
        {props.children}
      </Text>
      {props.recommend && (
        <Text
          size={'sm'}
          className="text-sencondary font-semibold bg-orange-100 px-2 py-1 rounded-xl"
        >
          Recommended
        </Text>
      )}
    </div>
  );
};
const Description: React.FC<DescriptionProps> = (props) => {
  return <Text className="font-thin my-5">{props.children}</Text>;
};
const Pricing: React.FC<PricingProps> = (props) => {
  return <div className="flex flex-col gap-2">{props.children}</div>;
};
const Detail: React.FC<PricingProps> = (props) => {
  return <div className="flex flex-col space-y-4">{props.children}</div>;
};
PricingCard.Pricing = Pricing;
PricingCard.Header = Header;
PricingCard.Description = Description;
PricingCard.Detail = Detail;
