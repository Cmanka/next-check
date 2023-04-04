import Head from 'next/head';

import coinSvg from '@/assets/lights/coin.svg';

import { type SeoProps } from './seo.types';

const SeoComponent = ({ children, title, description }: SeoProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content={title} />
        {Boolean(description) && <meta property="og:description" content={description} />}
        <meta property="og:image" content={coinSvg} />
      </Head>
      {children}
    </>
  );
};

export default SeoComponent;
