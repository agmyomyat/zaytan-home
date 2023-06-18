import { HeroSectionOne } from '@/modules/home/components/hero';
import Home from '@/modules/home/templates';
import { Layout } from '@/modules/layout/templates';
import Head from 'next/head';
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zaytan | Make ecommerce easy in myanmar</title>
        <meta
          name="Ecommerce"
          content="Affordable ecommerce platform in myanmar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
