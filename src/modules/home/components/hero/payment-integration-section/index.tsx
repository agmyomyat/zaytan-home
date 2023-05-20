import { Grid } from '@mantine/core';
import { BankLogo } from './bank-logo';
import { PaymentIntegrationHeader } from './header';

export function PaymentIntegrationSection() {
  return (
    <div className="w-full">
      <div className="mb-14">
        <PaymentIntegrationHeader />
      </div>
      <Grid>
        {PAYMENT_LOGOS.map((logo, i) => {
          return (
            <Grid.Col my={'lg'} span={3} key={i}>
              <BankLogo path={logo.path} alt={logo.alt} />
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
}
type PaymentLogosDataType = { path: string; alt: string }[];
const PAYMENT_LOGOS: PaymentLogosDataType = [
  { path: './bank_logos/aya.png', alt: 'Aya Bank Logo' },
  { path: './bank_logos/kbz.png', alt: 'Kbz Bank Logo' },
  { path: './bank_logos/cbpay.png', alt: 'Cb pay logo' },
  { path: './bank_logos/mpu.png', alt: 'Mpu logo' },
  { path: './bank_logos/mab.png', alt: 'Mab logo' },
  { path: './bank_logos/mytelpay.png', alt: 'Mytelpay logo' },
  { path: './bank_logos/onepay.png', alt: 'Onepay logo' },
  { path: './bank_logos/wavepay.png', alt: 'Wavepay logo' },
  { path: './bank_logos/mastercard.png', alt: 'Mastercard logo' },
  { path: './bank_logos/uab.png', alt: 'Uab logo' },
];
