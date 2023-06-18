import { SignUpTemplatePage } from '@/modules/account/templates';
import { Layout } from '@/modules/layout/templates';
import Head from 'next/head';

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign up</title>
        <meta name="description" content="Zaytan Sign up" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <SignUpTemplatePage />
      </Layout>
    </>
  );
}
